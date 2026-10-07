import { loadAdjustments, saveAdjustments, _testing } from '@/src/ia-bookreader/visual-adjustments/visual-adjustments-storage.js';

const { STORAGE_KEY, EXPIRY_MS } = _testing;
const DAY = 24 * 60 * 60 * 1000;
const options = [
  { id: 'brightness', active: true, value: '150' },
  { id: 'invert', active: false },
];

describe('visual adjustments storage', () => {
  beforeEach(() => localStorage.clear());

  test('round-trips adjustments per book uri', () => {
    saveAdjustments('book-a', options, 0);
    expect(loadAdjustments('book-a', 1)).toEqual({
      brightness: { active: true, value: 150 },
      invert: { active: false },
    });
    expect(loadAdjustments('book-b', 1)).toBeNull();
  });

  test('does nothing without a book uri', () => {
    saveAdjustments(null, options, 0);
    expect(localStorage.getItem(STORAGE_KEY)).toBeNull();
    expect(loadAdjustments(null, 0)).toBeNull();
  });

  test('null forgets a book, removing the key when empty', () => {
    saveAdjustments('book-a', options, 0);
    saveAdjustments('book-a', null, 0);
    expect(localStorage.getItem(STORAGE_KEY)).toBeNull();
  });

  test('expires books not accessed within a week', () => {
    saveAdjustments('old', options, 0);
    saveAdjustments('recent', options, 6 * DAY);
    expect(loadAdjustments('recent', EXPIRY_MS)).not.toBeNull();
    expect(Object.keys(JSON.parse(localStorage.getItem(STORAGE_KEY)))).toEqual(['recent']);
  });

  test('loading a book refreshes its expiry', () => {
    saveAdjustments('book-a', options, 0);
    loadAdjustments('book-a', 6 * DAY);
    expect(loadAdjustments('book-a', 12 * DAY)).not.toBeNull();
  });

  test('ignores corrupt storage', () => {
    localStorage.setItem(STORAGE_KEY, '{not json');
    expect(loadAdjustments('book-a', 0)).toBeNull();
    saveAdjustments('book-a', options, 0);
    expect(loadAdjustments('book-a', 0)).not.toBeNull();
  });
});
