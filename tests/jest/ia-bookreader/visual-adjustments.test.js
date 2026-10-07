import {
  html,
  fixture,
  oneEvent,
} from '@open-wc/testing-helpers';
import sinon from 'sinon';
import { IABookVisualAdjustments } from '@/src/ia-bookreader/visual-adjustments/visual-adjustments.js';

const container = (renderHeader = false, enabledAdjustments = { contrast: true }) => (
  html`<ia-book-visual-adjustments
    .adjustments=${{ brightness: 120, contrast: 100 }}
    .enabledAdjustments=${{
      brightness: false,
      contrast: false,
      invert: false,
      grayscale: false,
      ...enabledAdjustments,
    }}
    ?renderHeader=${renderHeader}
  ></ia-book-visual-adjustments>`
);

describe('<ia-book-visual-adjustments>', () => {
  afterEach(() => {
    sinon.restore();
  });

  test('sets default properties', async () => {
    const el = await fixture(html`<ia-book-visual-adjustments></ia-book-visual-adjustments>`);

    expect(el.adjustments).toEqual({ brightness: 120, contrast: 120 });
    expect(el.enabledAdjustments).toEqual({
      brightness: false,
      contrast: false,
      invert: false,
      grayscale: false,
    });
    expect(el.renderHeader).toBeDefined();
    expect(el.renderHeader).toBeFalsy();
    expect(el.activeCount).toEqual(0);
    expect(el.showZoomControls).toBeTruthy();
  });

  test('renders all properties of a visual adjustment option', async () => {
    const el = await fixture(container());

    await el.updateComplete;

    const [brightness, contrast] = el.shadowRoot.querySelectorAll('.checkbox-label');
    expect(brightness.textContent.trim()).toEqual('Adjust brightness');
    expect(brightness.querySelector('input').checked).toEqual(false);
    expect(contrast.textContent.trim()).toEqual('Adjust contrast');
    expect(contrast.querySelector('input').checked).toEqual(true);
  });

  test('can render header with active options count', async () => {
    const renderHeader = true;
    const el = await fixture(container(renderHeader));
    expect(el.shadowRoot.querySelector('header p').textContent).toContain('1');
  });

  test('does not render active options count element when none are selected', async () => {
    const el = await fixture(container(true, { contrast: false }));

    expect(el.shadowRoot.querySelector('header p')).toBe(null);
  });

  test('changes an adjustment\'s active state when input changed', async () => {
    const el = await fixture(container());

    el.shadowRoot.querySelector('.checkbox-label input').dispatchEvent(new Event('change'));
    await el.updateComplete;

    expect(el.enabledAdjustments.brightness).toEqual(true);
    expect(el.activeCount).toEqual(2);
  });

  test('restores the last range value when toggled back on', async () => {
    const el = await fixture(container());

    el.adjustments = { ...el.adjustments, contrast: 42 };
    el.toggleAdjustment('contrast');
    await el.updateComplete;
    expect(el.enabledAdjustments.contrast).toBe(false);
    expect(el.filter).toEqual('');

    el.toggleAdjustment('contrast');
    await el.updateComplete;
    expect(el.enabledAdjustments.contrast).toBe(true);
    expect(el.filter).toEqual('contrast(42%)');
  });

  test('renders zoom in and out controls when enabled', async () => {
    const el = await fixture(container());

    expect(el.shadowRoot.querySelector('.zoom_out')).toBeDefined();
    expect(el.shadowRoot.querySelector('.zoom_in')).toBeDefined();
  });

  test('does not render zoom controls when disabled', async () => {
    const el = await fixture(container());

    el.showZoomControls = false;
    await el.updateComplete;

    expect(el.shadowRoot.querySelector('.zoom_out')).toBe(null);
    expect(el.shadowRoot.querySelector('.zoom_in')).toBe(null);
  });

  describe('Custom events', () => {
    test('emits the css filter and active count', async () => {
      const el = await fixture(container());
      await el.updateComplete;

      setTimeout(() => el.toggleAdjustment('invert'));
      const { detail } = await oneEvent(el, 'filterChanged');

      expect(detail.filter).toEqual('contrast(100%) invert(100%)');
      expect(detail.activeCount).toEqual(2);
    });

    test('triggers an emitFilterChangedEvent event at firstUpdate', async () => {
      IABookVisualAdjustments.prototype.emitFilterChangedEvent = sinon.fake();
      const el = await fixture(container());

      expect(el.emitFilterChangedEvent.callCount).toEqual(1);
    });

    test('triggers an emitFilterChangedEvent event when a checkbox\'s change event fires', async () => {
      IABookVisualAdjustments.prototype.emitFilterChangedEvent = sinon.fake();
      const el = await fixture(container());

      expect(el.emitFilterChangedEvent.callCount).toEqual(1); // firstUpdate fire

      el.shadowRoot.querySelector('.checkbox-label input').dispatchEvent(new Event('change'));
      expect(el.emitFilterChangedEvent.callCount).toEqual(2);
    });

    test('triggers an emitFilterChangedEvent event when a range\'s change event fires', async () => {
      IABookVisualAdjustments.prototype.emitFilterChangedEvent = sinon.fake();

      const el = await fixture(container());
      expect(el.emitFilterChangedEvent.callCount).toEqual(1); // firstUpdate fire

      el.shadowRoot.querySelector('[name="brightness_range"]').dispatchEvent(new Event('change'));
      expect(el.emitFilterChangedEvent.callCount).toEqual(2);
    });

    test('emits a zoom out event when zoom out button clicked', async () => {
      const el = await fixture(container());

      setTimeout(() => (
        el.shadowRoot.querySelector('.zoom_out').click()
      ));
      const response = await oneEvent(el, 'zoom');

      expect(response.detail).toEqual(-1);
    });

    test('emits a zoom in event when zoom in button clicked', async () => {
      const el = await fixture(container());

      setTimeout(() => (
        el.shadowRoot.querySelector('.zoom_in').click()
      ));
      const response = await oneEvent(el, 'zoom');

      expect(response.detail).toEqual(1);
    });
  });

  test('sets range bounds', async () => {
    const el = await fixture(container());
    const brightnessRange = el.shadowRoot.querySelector('[name="brightness_range"]');

    expect(brightnessRange.getAttribute('min')).toEqual('0');
    expect(brightnessRange.getAttribute('max')).toEqual('200');
    expect(brightnessRange.getAttribute('step')).toEqual('1');
  });

  test('sets the updated range value on the adjustments prop when a range\'s input event fires', async () => {
    const el = await fixture(container());
    const range = el.shadowRoot.querySelector('[name="contrast_range"]');

    range.value = '150';
    range.dispatchEvent(new Event('input'));
    await el.updateComplete;

    expect(el.adjustments.contrast).toEqual(150);
  });
});
