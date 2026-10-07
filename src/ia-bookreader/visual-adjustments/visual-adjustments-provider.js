import { html } from 'lit';
import '@internetarchive/icon-visual-adjustment/icon-visual-adjustment.js';
import './visual-adjustments.js';

export default class VisualAdjustmentsProvider {
  constructor({ onProviderChange, bookreader }) {
    this.onProviderChange = onProviderChange;
    this.bookContainer = bookreader.refs.$brContainer;
    this.bookreader = bookreader;

    this.onAdjustmentChange = this.onAdjustmentChange.bind(this);

    this.icon = html`<ia-icon-visual-adjustment aria-hidden="true" role="presentation" style="width: var(--iconWidth); height: var(--iconHeight);"></ia-icon-visual-adjustment>`;
    this.label = 'Visual Adjustments';
    this.menuDetails = '(0 active)';
    this.id = 'visualAdjustments';
    this.component = html`
      <ia-book-visual-adjustments
        @filterChanged=${this.onAdjustmentChange}
        @zoom=${(e) => this.bookreader.zoom(e.detail)}
      ></ia-book-visual-adjustments>
    `;
  }

  onAdjustmentChange(event) {
    this.bookContainer.css('filter', event.detail.filter);
    this.menuDetails = `(${event.detail.activeCount} active)`;
    this.onProviderChange();
  }
}
