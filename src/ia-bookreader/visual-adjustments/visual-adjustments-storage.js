const STORAGE_KEY = 'BrVisualAdjustments';
const EXPIRY_MS = 7 * 24 * 60 * 60 * 1000;

/**
 * @typedef {{ active: boolean, value?: number }} SavedOption
 * @typedef {{ lastAccessed: number, options: Record<string, SavedOption> }} SavedEntry
 */

/** @return {Storage | null} null when unavailable (e.g. sandboxed iframe) */
function getStorage() {
  try {
    return window.localStorage;
  } catch (e) {
    return null;
  }
}

/** @return {Record<string, SavedEntry>} */
function readAll(storage) {
  try {
    const parsed = JSON.parse(storage.getItem(STORAGE_KEY) || '{}');
    return parsed && typeof parsed === 'object' ? parsed : {};
  } catch (e) {
    return {};
  }
}

function writeAll(storage, entries) {
  try {
    if (Object.keys(entries).length) {
      storage.setItem(STORAGE_KEY, JSON.stringify(entries));
    } else {
      storage.removeItem(STORAGE_KEY);
    }
  } catch (e) {
    // Quota exceeded/private mode; persistence is best-effort
  }
}

/** Drops entries for books not accessed within the expiry window */
function pruneExpired(entries, now) {
  for (const [uri, entry] of Object.entries(entries)) {
    if (!(now - entry?.lastAccessed < EXPIRY_MS)) delete entries[uri];
  }
  return entries;
}

/**
 * Loads the saved adjustments for a book, marking it as accessed.
 * @param {string} bookUri
 * @param {number} [now]
 * @return {Record<string, SavedOption> | null}
 */
export function loadAdjustments(bookUri, now = Date.now()) {
  const storage = getStorage();
  if (!bookUri || !storage) return null;
  const entries = pruneExpired(readAll(storage), now);
  const entry = entries[bookUri];
  if (entry) entry.lastAccessed = now;
  writeAll(storage, entries);
  return entry?.options ?? null;
}

/**
 * @param {string} bookUri
 * @param {Array<{ id: string, active: boolean, value?: number | string }> | null} options
 *   null forgets the book's adjustments
 * @param {number} [now]
 */
export function saveAdjustments(bookUri, options, now = Date.now()) {
  const storage = getStorage();
  if (!bookUri || !storage) return;
  const entries = pruneExpired(readAll(storage), now);
  if (options) {
    entries[bookUri] = {
      lastAccessed: now,
      options: Object.fromEntries(options.map(({ id, active, value }) => (
        [id, value === undefined ? { active } : { active, value: Number(value) }]
      ))),
    };
  } else {
    delete entries[bookUri];
  }
  writeAll(storage, entries);
}

export const _testing = { STORAGE_KEY, EXPIRY_MS };
