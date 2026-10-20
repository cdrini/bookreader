// @ts-check
import { css, html, LitElement, nothing } from 'lit';
import { customElement, property } from 'lit/decorators.js';
import { BookReaderPlugin } from '../../BookReaderPlugin.js';
import { promisifyEvent } from '../../BookReader/utils.js';
import { BookReaderTextFragment, renderHighlight } from '../../util/TextSelectionManager.js';
import { DeepReadServerApi, MockDeepReadApi } from './DeepReadApi.js';
/** @typedef {import('./DeepReadApi.js').DeepReadApi} DeepReadApi */
/** @typedef {import('./DeepReadApi.js').DeepReadEntity} DeepReadEntity */
/** @typedef {import('./DeepReadApi.js').DeepReadEntitiesResponse} DeepReadEntitiesResponse */
/** @typedef {import('./DeepReadApi.js').DeepReadContextResponse} DeepReadContextResponse */

const BookReader = /** @type {typeof import('@/src/BookReader.js').default} */(window.BookReader);

/**
 * @typedef {object} DeepReadWindow
 * A run of pages sent to the server as one segment. Windows are fixed (not
 * centred on the current page) so that they're reusable/cacheable.
 * @property {number} startIndex
 * @property {number} endIndex
 * @property {number} startLeaf
 * @property {number} endLeaf
 */

/**
 * Makes named entities (people, places, ...) in the text layer clickable, and
 * shows research about the clicked entity in the side panel.
 * Requires the textSelection plugin.
 */
export class DeepReadPlugin extends BookReaderPlugin {
  options = {
    enabled: true,
    /** @type {string | null} deep-read backend, e.g. `http://localhost:8010`. Uses a mock when unset. */
    serverUrl: null,
    /** Pages per entity-extraction request */
    windowSize: 4,
  }

  /** @type {DeepReadApi} */
  api;

  /** @type {Map<number, Promise<DeepReadEntitiesResponse>>} keyed by window startIndex */
  _windowEntities = new Map();

  /** @type {Map<string, { entity: DeepReadEntity, window: DeepReadWindow }>} */
  _entitiesById = new Map();

  /** @type {BrDeepReadPanel} */
  _panel;

  /** @type {Partial<BrDeepReadPanel>} Survives the panel being re-created */
  _panelState = {};

  /** @override */
  init() {
    if (!this.options.enabled || !this.br.plugins.textSelection?.options.enabled) return;

    this.api = this.options.serverUrl
      ? new DeepReadServerApi(this.options.serverUrl, this.br.bookId)
      : new MockDeepReadApi(this.br);

    this.br.on('textLayerRendered', (_, { pageIndex, pageContainer }) => {
      /** @type {HTMLElement} */
      const textLayer = pageContainer.$container[0].querySelector('.BRtextLayer');
      if (textLayer) this.renderPageEntities(pageIndex, textLayer);
    });
    this.br.on(BookReader.eventNames.pageChanged, () => this._updateWindowList());

    this._initPanel();
  }

  /**
   * @param {number} pageIndex
   * @returns {DeepReadWindow}
   */
  getWindow(pageIndex) {
    const size = this.options.windowSize;
    const startIndex = Math.floor(pageIndex / size) * size;
    const endIndex = Math.min(startIndex + size, this.br.book.getNumLeafs()) - 1;
    return {
      startIndex,
      endIndex,
      startLeaf: this.br.book.getPage(startIndex).leafNum,
      endLeaf: this.br.book.getPage(endIndex).leafNum,
    };
  }

  /**
   * @param {number} pageIndex
   * @returns {Promise<DeepReadEntitiesResponse>}
   */
  getWindowEntities(pageIndex) {
    const win = this.getWindow(pageIndex);
    if (!this._windowEntities.has(win.startIndex)) {
      const promise = this.api.getEntities(win.startLeaf, win.endLeaf).then(resp => {
        for (const entity of resp.entities) this._entitiesById.set(entity.id, { entity, window: win });
        return resp;
      });
      // Allow retrying on failure
      promise.catch(() => this._windowEntities.delete(win.startIndex));
      this._windowEntities.set(win.startIndex, promise);
    }
    return this._windowEntities.get(win.startIndex);
  }

  /**
   * @param {number} pageIndex
   * @param {HTMLElement} textLayer
   */
  async renderPageEntities(pageIndex, textLayer) {
    let resp;
    try {
      resp = await this.getWindowEntities(pageIndex);
    } catch (e) {
      console.warn('DeepRead: failed to fetch entities', pageIndex, e);
      return;
    }
    if (!textLayer.isConnected) return;

    for (const entity of resp.entities) {
      for (const mention of entity.mentions) {
        if (mention.page_index !== pageIndex) continue;
        let markEls;
        try {
          const fragment = mentionToFragment(entity, mention.quote, pageIndex);
          markEls = renderHighlight(textLayer, fragment, 'BRdeepReadEntity');
          // Context is joined to the quote with whitespace, so it can't match if
          // the name touches punctuation (e.g. "Bumble's")
          if (!markEls && (fragment.prefix || fragment.suffix)) {
            markEls = renderHighlight(textLayer, new BookReaderTextFragment({ ...fragment, prefix: null, suffix: null }), 'BRdeepReadEntity');
          }
        } catch (e) {
          console.warn('DeepRead: could not find mention in text layer', mention, e);
        }
        for (const markEl of markEls || []) {
          markEl.classList.add(`BRdeepReadEntity--${entity.type}`);
          markEl.classList.toggle('BRdeepReadEntity--active', entity.id === this._panelState.selected?.id);
          markEl.setAttribute('data-entity-id', entity.id);
          markEl.setAttribute('title', `${entity.name} (${entity.type})`);
        }
      }
    }

    if (!textLayer.dataset.deepReadBound) {
      textLayer.dataset.deepReadBound = 'true';
      textLayer.addEventListener('click', this._onTextLayerClick);
    }
  }

  /** @param {MouseEvent} ev */
  _onTextLayerClick = (ev) => {
    const markEl = /** @type {HTMLElement} */ (ev.target).closest?.('.BRdeepReadEntity');
    // Don't hijack the end of a drag-to-select
    if (!markEl || !window.getSelection()?.isCollapsed) return;
    ev.stopPropagation();
    this.openEntity(markEl.getAttribute('data-entity-id'));
  }

  /** @param {string} entityId */
  async openEntity(entityId) {
    const found = this._entitiesById.get(entityId);
    if (!found) return;
    const { entity, window: win } = found;
    this.br.refs.$br[0].querySelectorAll('.BRdeepReadEntity').forEach(el => {
      el.classList.toggle('BRdeepReadEntity--active', el.getAttribute('data-entity-id') === entityId);
    });

    this.br.shell?.updateSideMenu('deepRead', 'open');
    this._updatePanel({ selected: entity, context: null, loading: true, error: null });
    try {
      const context = await this.api.getContext(entity, win.startLeaf, win.endLeaf);
      // A later click wins
      if (this._panelState.selected?.id !== entityId) return;
      this._updatePanel({ context, loading: false });
    } catch (e) {
      if (this._panelState.selected?.id !== entityId) return;
      this._updatePanel({ loading: false, error: e.message || String(e) });
    }
  }

  closeEntity() {
    this.br.refs.$br[0].querySelectorAll('.BRdeepReadEntity--active').forEach(el => el.classList.remove('BRdeepReadEntity--active'));
    this._updatePanel({ selected: null, context: null, loading: false, error: null });
  }

  async _updateWindowList() {
    const pageIndex = this.br.currentIndex();
    this._updatePanel({ windowEntities: null, windowError: null });
    try {
      const resp = await this.getWindowEntities(pageIndex);
      if (this.getWindow(this.br.currentIndex()).startIndex !== this.getWindow(pageIndex).startIndex) return;
      this._updatePanel({ windowEntities: resp.entities, pageAligned: resp.page_aligned });
    } catch (e) {
      this._updatePanel({ windowError: e.message || String(e) });
    }
  }

  /** @param {Partial<BrDeepReadPanel>} state */
  _updatePanel(state) {
    Object.assign(this._panelState, state);
    if (this._panel) Object.assign(this._panel, this._panelState);
  }

  async _initPanel() {
    if (!this.br.shell) {
      await promisifyEvent(window, 'BookReader:PostInit');
    }
    if (!this.br.shell) return;
    this.br.shell.menuProviders['deepRead'] = {
      id: 'deepRead',
      icon: html`<svg viewBox="0 0 24 24" width="26" height="26" fill="none" stroke="white" stroke-width="1.6" aria-hidden="true">
        <path d="M4 5.5C4 4.7 4.7 4 5.5 4H11v15H5.5c-.8 0-1.5.7-1.5 1.5z"/>
        <path d="M20 5.5c0-.8-.7-1.5-1.5-1.5H13v15h5.5c.8 0 1.5.7 1.5 1.5z"/>
        <circle cx="17" cy="16" r="3.2" fill="#1e1e1e"/><path d="m19.3 18.3 2.2 2.2"/>
      </svg>`,
      label: 'Deep Read',
      component: html`<br-deep-read-panel
        @connected="${(e) => {
        this._panel = e.target;
        Object.assign(this._panel, this._panelState);
      }}"
        @entityClick="${(e) => this.openEntity(e.detail.entityId)}"
        @back="${() => this.closeEntity()}"
        @pageClick="${(e) => this.br.jumpToIndex(e.detail.pageIndex, { ariaLive: true })}"
      ></br-deep-read-panel>`,
    };
    this.br.shell.addMenuShortcut('deepRead');
    this.br.shell.updateMenuContents();
    this._updateWindowList();
  }
}
BookReader?.registerPlugin('deepRead', DeepReadPlugin);

/**
 * Mention quotes are often a whole phrase around the name, so mark just the
 * name and use the rest of the quote as context.
 * @param {Pick<DeepReadEntity, 'name' | 'surface_forms'>} entity
 * @param {string} quote
 * @param {number} pageIndex
 * @returns {BookReaderTextFragment}
 */
export function mentionToFragment(entity, quote, pageIndex) {
  const forms = [...entity.surface_forms, entity.name].sort((a, b) => b.length - a.length);
  for (const form of forms) {
    const words = form.trim().split(/\s+/).map(w => RegExp.escape(w));
    const match = words.length && quote.match(new RegExp(`(?<![\\p{L}\\p{N}])${words.join('\\s+')}(?![\\p{L}\\p{N}])`, 'iu'));
    if (match) {
      return new BookReaderTextFragment({
        prefix: quote.slice(0, match.index).trim() || null,
        quote: match[0],
        suffix: quote.slice(match.index + match[0].length).trim() || null,
        pageNumber: null,
        pageIndex,
      });
    }
  }
  return new BookReaderTextFragment({ prefix: null, quote, suffix: null, pageNumber: null, pageIndex });
}

@customElement('br-deep-read-panel')
export class BrDeepReadPanel extends LitElement {
  /** @type {DeepReadEntity[] | null} Entities in the current window; null while loading */
  @property({ type: Array }) windowEntities = null;
  @property({ type: Boolean }) pageAligned = true;
  /** @type {string | null} */
  @property({ type: String }) windowError = null;

  /** @type {DeepReadEntity | null} */
  @property({ type: Object }) selected = null;
  /** @type {DeepReadContextResponse | null} */
  @property({ type: Object }) context = null;
  @property({ type: Boolean }) loading = false;
  /** @type {string | null} */
  @property({ type: String }) error = null;

  connectedCallback() {
    super.connectedCallback();
    this.dispatchEvent(new CustomEvent('connected'));
  }

  render() {
    return this.selected ? this._renderEntity(this.selected) : this._renderWindowList();
  }

  _renderWindowList() {
    if (this.windowError) return html`<p class="hint error">${this.windowError}</p>`;
    if (!this.windowEntities) return html`<p class="hint">Finding people, places and things on these pages…</p>`;
    if (!this.windowEntities.length) return html`<p class="hint">Nothing found on these pages.</p>`;
    return html`
      <p class="hint">Click an underlined name in the text, or pick one below.</p>
      ${this.pageAligned ? nothing : html`<p class="hint warning">This book has no per-page text, so names can't be marked on the page.</p>`}
      <ul class="entities">${this.windowEntities.map(e => html`
        <li><button @click=${() => this._emit('entityClick', { entityId: e.id })}>
          <span class="type type--${e.type}">${e.type}</span> ${e.name}
        </button></li>
      `)}</ul>
    `;
  }

  /** @param {DeepReadEntity} entity */
  _renderEntity(entity) {
    const ctx = this.context;
    return html`
      <button class="back" @click=${() => this._emit('back')}>← All on these pages</button>
      <h3>${entity.name}</h3>
      <span class="type type--${entity.type}">${entity.type}</span>
      ${this.loading ? html`<p class="hint">Researching… this can take a little while.</p>` : nothing}
      ${this.error ? html`<p class="hint error">${this.error}</p>` : nothing}
      ${ctx ? html`
        <section>
          <h4>In this book</h4>
          <p>${ctx.book_local.summary}</p>
          <ol class="occurrences">${ctx.book_local.occurrences.map(o => html`
            <li><button @click=${() => o.page_index != null && this._emit('pageClick', { pageIndex: o.page_index })}>
              <span class="meta">${o.printed_page ? `Page ${o.printed_page}` : `Leaf ${o.leaf_num}`}</span>
              ${o.snippet}
            </button></li>
          `)}</ol>
        </section>
        <section>
          <h4>Across archive.org</h4>
          ${ctx.archive_wide.partial ? html`<p class="hint warning">Some sources were unavailable; this may be incomplete.</p>` : nothing}
          <p>${ctx.archive_wide.summary}</p>
          <ul class="references">${ctx.archive_wide.references.map(r => html`
            <li>
              <a href="${r.url}" target="_blank" rel="noopener">${r.title}</a>
              ${r.creators.length || r.year ? html`<span class="meta">${[r.creators.join(', '), r.year].filter(Boolean).join(' · ')}</span>` : nothing}
              <span class="relation">${r.relation}</span>
              ${r.snippet ? html`<blockquote>${r.snippet}</blockquote>` : nothing}
            </li>
          `)}</ul>
          ${ctx.archive_wide.related_subjects.length ? html`
            <p class="meta">Related: ${ctx.archive_wide.related_subjects.join(', ')}</p>
          ` : nothing}
          <a href="${ctx.archive_wide.search_url}" target="_blank" rel="noopener">Search archive.org for "${entity.name}"</a>
        </section>
        <p class="meta model">Generated by ${ctx.model}</p>
      ` : nothing}
    `;
  }

  /**
   * @param {string} name
   * @param {object} [detail]
   */
  _emit(name, detail = {}) {
    this.dispatchEvent(new CustomEvent(name, { detail, bubbles: true, composed: true }));
  }

  static styles = css`
    :host { display: block; padding: 10px; color: white; font-size: 14px; line-height: 1.4; }
    .hint { opacity: 0.8; }
    .error { color: #ffb4a8; opacity: 1; }
    .warning { color: #ffe7a3; opacity: 1; }
    h3 { margin: 8px 0 4px; font-size: 18px; }
    h4 { margin: 16px 0 6px; font-size: 12px; text-transform: uppercase; letter-spacing: 0.04em; opacity: 0.7; }
    p { margin: 6px 0; }
    .type { display: inline-block; font-size: 11px; padding: 0 6px; border-radius: 8px; background: rgba(255, 255, 255, 0.15); }
    .meta { display: block; font-size: 12px; opacity: 0.7; }
    .relation { display: block; }
    .model { margin-top: 16px; }
    a { color: #8fc1ff; }
    ul, ol { padding: 0; margin: 0; list-style: none; }
    .references li { margin: 0 0 10px; }
    blockquote { margin: 4px 0 0; padding-left: 8px; border-left: 2px solid rgba(255, 255, 255, 0.3); font-size: 12px; opacity: 0.85; }
    button {
      all: unset; cursor: pointer; display: block; width: 100%; box-sizing: border-box;
      padding: 6px 8px; margin: 2px 0; border-radius: 4px;
    }
    button:hover, button:focus-visible { background: rgba(255, 255, 255, 0.1); }
    .back { width: auto; display: inline-block; font-size: 12px; opacity: 0.8; }
  `;
}
