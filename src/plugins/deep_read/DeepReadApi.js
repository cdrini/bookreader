// @ts-check
/** @typedef {import('@/src/BookReader.js').default} BookReader */

/**
 * Mirrors the deep-read backend's schemas; see
 * https://github.com/internetarchivecanada/deep-read/tree/main/backend
 *
 * @typedef {'person' | 'place' | 'organization' | 'work' | 'event' | 'subject'} DeepReadEntityType
 *
 * @typedef {object} DeepReadMention
 * @property {number | null} leaf_num
 * @property {number | null} page_index 0-based BookReader page index
 * @property {string | null} printed_page
 * @property {string} quote The text as it appears in the OCR
 *
 * @typedef {object} DeepReadEntity
 * @property {string} id Stable across requests
 * @property {DeepReadEntityType} type
 * @property {string} name
 * @property {string[]} surface_forms
 * @property {number} salience 0-1
 * @property {DeepReadMention[]} mentions
 *
 * @typedef {object} DeepReadEntitiesResponse
 * @property {string} identifier
 * @property {number} start_leaf
 * @property {number} end_leaf
 * @property {boolean} page_aligned When false, mentions have no page
 * @property {DeepReadEntity[]} entities
 * @property {string} model
 *
 * @typedef {object} DeepReadBookOccurrence
 * @property {number} leaf_num
 * @property {number | null} page_index
 * @property {string | null} printed_page
 * @property {string} snippet
 * @property {string} url
 *
 * @typedef {object} DeepReadArchiveReference
 * @property {string | null} identifier
 * @property {string} title
 * @property {string[]} creators
 * @property {string | null} year
 * @property {string | null} snippet
 * @property {string} relation Why this item bears on the entity
 * @property {string} url
 *
 * @typedef {object} DeepReadContextResponse
 * @property {string} identifier
 * @property {DeepReadEntity} entity
 * @property {{ summary: string, occurrences: DeepReadBookOccurrence[] }} book_local
 * @property {{ summary: string, references: DeepReadArchiveReference[], related_subjects: string[], search_url: string, partial: boolean }} archive_wide
 * @property {string} model
 */

/**
 * @typedef {object} DeepReadApi
 * @property {(startLeaf: number, endLeaf: number) => Promise<DeepReadEntitiesResponse>} getEntities
 * @property {(entity: DeepReadEntity, startLeaf: number, endLeaf: number) => Promise<DeepReadContextResponse>} getContext
 */

/** @implements {DeepReadApi} */
export class DeepReadServerApi {
  /**
   * @param {string} serverUrl e.g. `http://localhost:8010`
   * @param {string} identifier archive.org identifier
   */
  constructor(serverUrl, identifier) {
    this.baseUrl = `${serverUrl.replace(/\/+$/, '')}/v1/books/${encodeURIComponent(identifier)}`;
  }

  /**
   * @param {number} startLeaf
   * @param {number} endLeaf
   */
  getEntities(startLeaf, endLeaf) {
    return this._post('/entities', { start_leaf: startLeaf, end_leaf: endLeaf });
  }

  /**
   * @param {DeepReadEntity} entity
   * @param {number} startLeaf
   * @param {number} endLeaf
   */
  getContext(entity, startLeaf, endLeaf) {
    return this._post('/context', { entity, start_leaf: startLeaf, end_leaf: endLeaf });
  }

  /**
   * @param {string} path
   * @param {object} body
   */
  async _post(path, body) {
    const resp = await fetch(this.baseUrl + path, {
      method: 'POST',
      headers: { 'content-type': 'application/json' },
      body: JSON.stringify(body),
    });
    if (!resp.ok) {
      // Errors are RFC 9457 problem+json
      const problem = await resp.json().catch(() => ({}));
      throw new Error(problem.detail || problem.title || `Deep Read server error ${resp.status}`);
    }
    return resp.json();
  }
}

const NON_ENTITY_WORDS = new Set(`
  A All An And As At But By Chapter Every For From He Her His How I If In Is It Its Mr Mrs Ms Dr
  My No Not Now Of Oh On Once One Or Our Some She So That The Their Then There These They This
  To Was We What When Where Which While Who Why With Yes You Your
`.trim().split(/\s+/));
const PERSON_TITLES = new Set(['Mr', 'Mrs', 'Ms', 'Miss', 'Dr', 'Sir', 'Lady', 'Lord', 'King', 'Queen', 'Captain', 'General', 'Saint', 'St']);
const PLACE_PREPOSITIONS = new Set(['in', 'at', 'from', 'to', 'near', 'across']);

/**
 * Stand-in for the server so the UI can be worked on offline and on any book:
 * picks capitalized phrases out of the page OCR and invents context for them.
 * @implements {DeepReadApi}
 */
export class MockDeepReadApi {
  /**
   * @param {BookReader} br
   * @param {{ latencyMs?: number }} [options]
   */
  constructor(br, { latencyMs = 300 } = {}) {
    this.br = br;
    this.latencyMs = latencyMs;
  }

  /**
   * @param {number} startLeaf
   * @param {number} endLeaf
   * @returns {Promise<DeepReadEntitiesResponse>}
   */
  async getEntities(startLeaf, endLeaf) {
    await sleep(this.latencyMs);
    const book = this.br.book;
    /** @type {Map<string, DeepReadEntity>} */
    const entities = new Map();
    for (let index = 0; index < book.getNumLeafs(); index++) {
      const page = book.getPage(index);
      if (page.leafNum < startLeaf || page.leafNum > endLeaf) continue;
      const pageXml = await this.br.plugins.textSelection?.getPageText(index);
      const words = pageXml ? Array.from(pageXml.querySelectorAll('WORD'), w => w.textContent.trim()).filter(Boolean) : [];
      for (const found of extractMockEntities(words)) {
        const entity = entities.get(found.id) ?? { ...found, surface_forms: [found.name], salience: 0, mentions: [] };
        entity.mentions.push({ leaf_num: page.leafNum, page_index: index, printed_page: book.getPageNum(index), quote: found.name });
        entity.salience = Math.min(1, entity.salience + 0.2);
        entities.set(found.id, entity);
      }
    }
    return {
      identifier: this.br.bookId,
      start_leaf: startLeaf,
      end_leaf: endLeaf,
      page_aligned: true,
      entities: [...entities.values()].sort((a, b) => b.salience - a.salience),
      model: 'mock',
    };
  }

  /**
   * @param {DeepReadEntity} entity
   * @returns {Promise<DeepReadContextResponse>}
   */
  async getContext(entity) {
    await sleep(this.latencyMs * 3);
    const q = encodeURIComponent(entity.name);
    return {
      identifier: this.br.bookId,
      entity,
      book_local: {
        summary: `(Mock) ${entity.name} is a ${entity.type} that appears in this passage. The server would summarize its role in this book here.`,
        occurrences: entity.mentions.map(m => ({
          leaf_num: m.leaf_num,
          page_index: m.page_index,
          printed_page: m.printed_page,
          snippet: `…${m.quote}…`,
          url: `https://archive.org/details/${this.br.bookId}/page/n${m.page_index}`,
        })),
      },
      archive_wide: {
        summary: `(Mock) What the rest of archive.org says about ${entity.name}.`,
        references: [{
          identifier: null,
          title: `Search archive.org for "${entity.name}"`,
          creators: [],
          year: null,
          snippet: null,
          relation: 'Mock reference',
          url: `https://archive.org/search?query=${q}`,
        }],
        related_subjects: [],
        search_url: `https://archive.org/search?query=${q}&sin=TXT`,
        partial: false,
      },
      model: 'mock',
    };
  }
}

/**
 * @param {string[]} words A page's OCR words, in reading order
 * @returns {Pick<DeepReadEntity, 'id' | 'name' | 'type'>[]} One per mention
 */
export function extractMockEntities(words) {
  /** @type {Pick<DeepReadEntity, 'id' | 'name' | 'type'>[]} */
  const found = [];
  const bare = words.map(w => w.replace(/^[^\p{L}]+|[^\p{L}]+$/gu, ''));
  const isCapitalized = (/** @type {string} */ w) => /^\p{Lu}\p{Ll}+$/u.test(w) && !NON_ENTITY_WORDS.has(w);

  let i = 0;
  while (i < words.length) {
    if (!isCapitalized(bare[i])) { i++; continue; }

    // Extend over up to 3 capitalized words, stopping at punctuation
    let end = i + 1;
    while (end < words.length && end - i < 3 && isCapitalized(bare[end]) && words[end - 1] === bare[end - 1]) end++;
    const phrase = bare.slice(i, end);
    const prevWord = words[i - 1] || '';
    const sentenceStart = i === 0 || /[.!?"”:]$/.test(prevWord);
    if (sentenceStart && phrase.length === 1) { i = end; continue; }

    /** @type {DeepReadEntityType} */
    const type = PERSON_TITLES.has(bare[i - 1]) || phrase.length > 1 ? 'person'
      : PLACE_PREPOSITIONS.has(prevWord.toLowerCase()) ? 'place'
        : 'subject';
    const name = phrase.join(' ');
    found.push({ id: `mock-${type}-${name.toLowerCase().replace(/\s+/g, '-')}`, name, type });
    i = end;
  }
  return found;
}

/** @param {number} ms */
function sleep(ms) {
  return new Promise(res => setTimeout(res, ms));
}
