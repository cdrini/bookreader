import { html } from 'lit';
import '@internetarchive/icon-visual-adjustment/icon-visual-adjustment.js';
import './visual-adjustments.js';
import { loadAdjustments, saveAdjustments } from './visual-adjustments-storage.js';

const visualAdjustmentOptions = [{
  id: 'brightness',
  name: 'Adjust brightness',
  active: false,
  min: 0,
  max: 200,
  step: 1,
  value: 120,
}, {
  id: 'contrast',
  name: 'Adjust contrast',
  active: false,
  min: 0,
  max: 200,
  step: 1,
  value: 120,
}, {
  id: 'invert',
  name: 'Invert colors (dark mode)',
  active: false,
}, {
  id: 'grayscale',
  name: 'Convert to grayscale',
  active: false,
}];

const filterForOption = {
  brightness: (value) => `brightness(${value}%)`,
  contrast: (value) => `contrast(${value}%)`,
  grayscale: () => 'grayscale(100%)',
  invert: () => 'invert(100%)',
};

/**
 * Providers are recreated whenever ia-bookreader re-initializes its submenus,
 * so the live options are kept here to survive that even when they can't be
 * persisted (no bookUri or no localStorage).
 * @type {{ bookUri: string, options: typeof visualAdjustmentOptions } | null}
 */
let sessionState = null;

export default class VisualAdjustmentsProvider {
  constructor({ onProviderChange, bookreader }) {
    this.onProviderChange = onProviderChange;
    this.bookContainer = bookreader.refs.$brContainer;
    this.bookreader = bookreader;

    this.onAdjustmentChange = this.onAdjustmentChange.bind(this);
    this.optionUpdateComplete = this.optionUpdateComplete.bind(this);
    this.updateOptionsCount = this.updateOptionsCount.bind(this);
    this.onZoomIn = this.onZoomIn.bind(this);
    this.onZoomOut = this.onZoomOut.bind(this);

    this.bookUri = bookreader.options?.bookUri;
    this.options = this.restoreOptions();
    this.activeCount = this.options.filter(option => option.active).length;
    if (this.activeCount) this.applyFilters(this.options);

    this.icon = html`<ia-icon-visual-adjustment aria-hidden="true" role="presentation" style="width: var(--iconWidth); height: var(--iconHeight);"></ia-icon-visual-adjustment>`;
    this.label = 'Visual Adjustments';
    this.updateOptionsCount();
    this.id = 'visualAdjustments';
    this.component = html`
      <ia-book-visual-adjustments
        .options=${this.options}
        @visualAdjustmentOptionChanged=${this.onAdjustmentChange}
        @visualAdjustmentZoomIn=${this.onZoomIn}
        @visualAdjustmentZoomOut=${this.onZoomOut}
      ></ia-book-visual-adjustments>
    `;
  }

  /** Default options, overridden by any adjustments saved for this book */
  restoreOptions() {
    if (sessionState && sessionState.bookUri === this.bookUri) return sessionState.options;
    const saved = loadAdjustments(this.bookUri) || {};
    const options = visualAdjustmentOptions.map((option) => {
      const { active, value } = saved[option.id] || {};
      const restored = { ...option };
      if (typeof active === 'boolean') restored.active = active;
      if (option.value !== undefined && Number.isFinite(value)) {
        restored.value = Math.min(option.max, Math.max(option.min, value));
      }
      return restored;
    });
    sessionState = { bookUri: this.bookUri, options };
    return options;
  }

  applyFilters(options) {
    const filters = options
      .filter(option => option.active)
      .map(option => filterForOption[option.id](option.value))
      .join(' ');
    this.bookContainer.css('filter', filters);
  }

  onZoomIn() {
    this.bookreader.zoom(1);
  }

  onZoomOut() {
    this.bookreader.zoom(-1);
  }

  onAdjustmentChange(event) {
    const { detail } = event;
    this.applyFilters(detail.options);
    const isDefault = detail.options.every((option) => {
      const defaults = visualAdjustmentOptions.find(o => o.id === option.id);
      return option.active === defaults.active
        && (option.value === undefined || Number(option.value) === defaults.value);
    });
    saveAdjustments(this.bookUri, isDefault ? null : detail.options);

    this.optionUpdateComplete(event);
  }

  optionUpdateComplete(event) {
    this.activeCount = event.detail.activeCount;
    this.updateOptionsCount(event);
    this.onProviderChange();
  }

  updateOptionsCount() {
    this.menuDetails = `(${this.activeCount} active)`;
  }
}
