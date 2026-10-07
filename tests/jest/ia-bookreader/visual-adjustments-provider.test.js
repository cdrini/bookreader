import sinon from 'sinon';
import VisualAdjustmentsProvider from '@/src/ia-bookreader/visual-adjustments/visual-adjustments-provider.js';
import { saveAdjustments } from '@/src/ia-bookreader/visual-adjustments/visual-adjustments-storage.js';

// Unique per call: the provider caches options in memory per bookUri
let uriCounter = 0;
const nextUri = () => `book-${uriCounter++}`;

const makeBookreader = (bookUri = nextUri()) => ({
  options: { bookUri },
  refs: { $brContainer: { css: sinon.fake() } },
});

const changeEvent = (options) => ({
  detail: { options, activeCount: options.filter(o => o.active).length, changedOptionId: '' },
});

describe('VisualAdjustmentsProvider', () => {
  beforeEach(() => localStorage.clear());
  afterEach(() => sinon.restore());

  test('starts with defaults and no filter when nothing is saved', () => {
    const br = makeBookreader();
    const provider = new VisualAdjustmentsProvider({ onProviderChange: sinon.fake(), bookreader: br });
    expect(provider.activeCount).toBe(0);
    expect(provider.options.every(o => !o.active)).toBe(true);
    expect(br.refs.$brContainer.css.called).toBe(false);
  });

  test('restores and applies saved adjustments for the book', () => {
    const uri = nextUri();
    saveAdjustments(uri, [
      { id: 'brightness', active: true, value: 80 },
      { id: 'invert', active: true },
    ]);
    const br = makeBookreader(uri);
    const provider = new VisualAdjustmentsProvider({ onProviderChange: sinon.fake(), bookreader: br });
    expect(provider.activeCount).toBe(2);
    expect(provider.menuDetails).toBe('(2 active)');
    expect(br.refs.$brContainer.css.calledWith('filter', 'brightness(80%) invert(100%)')).toBe(true);
  });

  test('saves changes, and forgets the book when back to defaults', () => {
    const uri = nextUri();
    const provider = new VisualAdjustmentsProvider({ onProviderChange: sinon.fake(), bookreader: makeBookreader(uri) });

    provider.options.find(o => o.id === 'grayscale').active = true;
    provider.onAdjustmentChange(changeEvent(provider.options));
    const stored = JSON.parse(localStorage.getItem('BrVisualAdjustments'))[uri];
    expect(stored.options.grayscale).toEqual({ active: true });

    provider.options.find(o => o.id === 'grayscale').active = false;
    provider.onAdjustmentChange(changeEvent(provider.options));
    expect(localStorage.length).toBe(0);
  });

  test('does not share option state between instances', () => {
    const a = new VisualAdjustmentsProvider({ onProviderChange: sinon.fake(), bookreader: makeBookreader() });
    a.options[0].active = true;
    const b = new VisualAdjustmentsProvider({ onProviderChange: sinon.fake(), bookreader: makeBookreader() });
    expect(b.options[0].active).toBe(false);
  });

  test('keeps unpersisted adjustments when recreated for the same book', () => {
    const a = new VisualAdjustmentsProvider({ onProviderChange: sinon.fake(), bookreader: makeBookreader(null) });
    a.options[0].active = true;
    a.onAdjustmentChange(changeEvent(a.options));
    expect(localStorage.length).toBe(0);
    const b = new VisualAdjustmentsProvider({ onProviderChange: sinon.fake(), bookreader: makeBookreader(null) });
    expect(b.options[0].active).toBe(true);
  });
});
