import { css, html, LitElement, nothing } from "lit";
import { classMap } from 'lit/directives/class-map.js';
import { sharedStyles } from '../../css/sharedStyles.js';
import "@internetarchive/icon-magnify-minus/icon-magnify-minus.js";
import "@internetarchive/icon-magnify-plus/icon-magnify-plus.js";

/**
 * The values of the adjustments that have one. These are kept even while the
 * adjustment is disabled, so re-enabling restores the previous value.
 * @typedef {object} VisualAdjustments
 * @property {number} brightness Percentage
 * @property {number} contrast Percentage
 */

/**
 * Which adjustments are currently applied
 * @typedef {object} EnabledAdjustments
 * @property {boolean} brightness
 * @property {boolean} contrast
 * @property {boolean} invert
 * @property {boolean} grayscale
 */

export class IABookVisualAdjustments extends LitElement {
  static get properties() {
    return {
      adjustments: { type: Object },
      enabledAdjustments: { type: Object },
      renderHeader: { type: Boolean },
      showZoomControls: { type: Boolean },
    };
  }

  constructor() {
    super();

    /** @type {VisualAdjustments} */
    this.adjustments = { brightness: 120, contrast: 120 };
    /** @type {EnabledAdjustments} */
    this.enabledAdjustments = {
      brightness: false,
      contrast: false,
      invert: false,
      grayscale: false,
    };
    this.renderHeader = false;
    this.showZoomControls = true;
  }

  firstUpdated() {
    this.emitFilterChangedEvent();
  }

  /** Number of adjustments currently applied
   * @return {number}
   */
  get activeCount() {
    return Object.values(this.enabledAdjustments).filter(Boolean).length;
  }

  /** The enabled adjustments as a CSS `filter` value ('' when none are enabled)
   * @return {string}
   */
  get filter() {
    const { brightness, contrast } = this.adjustments;
    const enabled = this.enabledAdjustments;
    return [
      enabled.brightness ? `brightness(${brightness}%)` : null,
      enabled.contrast ? `contrast(${contrast}%)` : null,
      enabled.invert ? 'invert(100%)' : null,
      enabled.grayscale ? 'grayscale(100%)' : null,
    ].filter(filter => filter).join(' ');
  }

  /**
   * Fires custom event when adjustments change
   * Provides state details: { filter, activeCount }
   */
  emitFilterChangedEvent() {
    this.dispatchEvent(
      new CustomEvent("filterChanged", {
        bubbles: true,
        composed: true,
        detail: {
          filter: this.filter,
          activeCount: this.activeCount,
        },
      }),
    );
  }

  /**
   * Fires custom event requesting a zoom change
   * @param { number } delta Zoom steps; positive zooms in, negative zooms out
   */
  emitZoom(delta) {
    this.dispatchEvent(new CustomEvent("zoom", { detail: delta }));
  }

  /**
   * Toggles an adjustment on/off & notifies listeners
   * @param { keyof EnabledAdjustments } id
   */
  toggleAdjustment(id) {
    const enabling = !this.enabledAdjustments[id];
    this.enabledAdjustments = { ...this.enabledAdjustments, [id]: enabling };
    this.emitFilterChangedEvent();
    // move focus to the range input
    const rangeInput = this.shadowRoot.querySelector(`input[name="${id}_range"]`);
    if (enabling && rangeInput) {
      requestAnimationFrame(() => rangeInput.focus());
    }
  }

  /* render */
  /**
   * Renders a checkbox for an adjustment; if `range` is provided, also a slider
   * that's shown while the adjustment is enabled.
   * @param { keyof EnabledAdjustments } id
   * @param { string } name
   * @param {object} [options]
   * @param {{ min: number, max: number, step: number }} [options.range]
   */
  renderAdjustment(id, name, { range } = {}) {
    const active = this.enabledAdjustments[id];
    const value = this.adjustments[id];
    return html`
      <div class="adjustment-option ${classMap({ active, 'has-range': Boolean(range) })}">
        <label class="checkbox-label">
          ${name}
          <input
            type="checkbox"
            @change=${() => this.toggleAdjustment(id)}
            ?checked=${active}
          />
        </label>
        ${range ? html`
          <label class="range ${classMap({ visible: active })}">
            <span class="sr-only">${name}</span>
            <input
              type="range"
              name="${id}_range"
              min=${range.min}
              max=${range.max}
              step=${range.step}
              .value=${`${value}`}
              aria-valuetext=${`${value}%`}
              @input=${(e) => {
                this.adjustments = { ...this.adjustments, [id]: Number(e.target.value) };
              }}
              @change=${() => this.emitFilterChangedEvent()}
            />
            <span aria-hidden="true">${value}%</span>
          </label>
        ` : nothing}
      </div>
    `;
  }

  get headerSection() {
    const activeAdjustments = this.activeCount
      ? html`<p>(${this.activeCount} active)</p>`
      : nothing;
    const header = html`<header>
      <h3>Visual adjustments</h3>
      ${activeAdjustments}
    </header>`;
    return this.renderHeader ? header : nothing;
  }

  get zoomControls() {
    return html`
      <h4>Adjust zoom</h4>
      <button class="zoom_out" @click=${() => this.emitZoom(-1)} title="Zoom out" aria-label="Zoom out">
        <ia-icon-magnify-minus aria-hidden="true" role="presentation"></ia-icon-magnify-minus>
      </button>
      <button class="zoom_in" @click=${() => this.emitZoom(1)} title="Zoom in" aria-label="Zoom in">
        <ia-icon-magnify-plus aria-hidden="true" role="presentation"></ia-icon-magnify-plus>
      </button>
    `;
  }

  /** @inheritdoc */
  render() {
    return html`
      ${this.headerSection}
      ${this.renderAdjustment('brightness', 'Adjust brightness', {
        range: { min: 0, max: 200, step: 1 },
      })}
      ${this.renderAdjustment('contrast', 'Adjust contrast', {
        range: { min: 0, max: 200, step: 1 },
      })}
      ${this.renderAdjustment('invert', 'Invert colors (dark mode)')}
      ${this.renderAdjustment('grayscale', 'Convert to grayscale')}
      ${this.showZoomControls ? this.zoomControls : nothing}
    `;
  }

  static get styles() {
    const main = css`
    :host {
      display: block;
      height: 100%;
      overflow-y: auto;
      font-size: 1.4rem;
      box-sizing: border-box;
      padding: 10px 10px 0 0;
    }

    header {
      display: flex;
      align-items: baseline;
    }

    h3 {
      padding: 0;
      margin: 0 1rem 0 0;
      font-size: 1.6rem;
    }

    header p {
      padding: 0;
      margin: 0;
      font-size: 1.2rem;
      font-weight: bold;
      font-style: italic;
    }

    .adjustment-option {
      border: 2px solid transparent;
      border-radius: 4px;
      margin-bottom: 4px;
    }
    .adjustment-option.has-range.active {
      border: 2px solid rgba(255, 255, 255, 0.2);
    }

    .checkbox-label {
      display: flex;
      justify-content: space-between;
      align-items: center;
      font-size: 1.4rem;
      font-weight: bold;
      cursor: pointer;
      padding: 6px 8px;
      transition: background-color 0.2s;
      border-radius: inherit;
    }
    .checkbox-label:hover {
      background-color: rgba(255, 255, 255, 0.1);
    }
    .adjustment-option.has-range.active > .checkbox-label {
      border-radius: 4px 4px 0 0;
    }

    [type="checkbox"] {
      transform: scale(1.5);
    }

    .range {
      display: none;
      padding: 10px;
      align-items: center;
      gap: 10px;
    }
    .range.visible {
      display: flex;
    }
    .range input[type="range"] {
      flex: 1;
    }

    h4 {
      padding: 1rem 0;
      margin: 0;
      font-size: 1.4rem;
    }

    button {
      -webkit-appearance: none;
      appearance: none;
      border: none;
      background: transparent;
      cursor: pointer;
      --iconFillColor: var(--primaryTextColor);
      --iconStrokeColor: var(--primaryTextColor);
      height: 4rem;
      width: 4rem;
      transition: background-color 0.2s;
      border-radius: 4px;
    }

    button:hover {
      background-color: rgba(255, 255, 255, 0.1);
    }
    `;
    return [sharedStyles, main];
  }
}
customElements.define('ia-book-visual-adjustments', IABookVisualAdjustments);
