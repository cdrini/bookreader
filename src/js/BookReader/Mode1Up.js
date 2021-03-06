// @ts-check
import { calcScreenDPI, notInArray } from '../BookReader/utils.js';
/** @typedef {import('../BookReader.js').default} BookReader */
/** @typedef {import('./BookModel.js').BookModel} BookModel */
/** @typedef {import('./BookModel.js').PageIndex} PageIndex */

export class Mode1Up {
  /**
   * @param {BookReader} br
   * @param {BookModel} bookModel
   */
  constructor(br, bookModel) {
    this.br = br;
    this.book = bookModel;

    /** @private */
    this.$documentContainer = $('<div class="BRpageview" />');

    this.screenDPI = calcScreenDPI();
    /** @private */
    this.LEAF_SPACING_IN = 0.2;
  }

  /** @private */
  get $scrollContainer() { return this.br.refs.$brContainer; }

  get reduce() { return this.br.reduce; }

  /**
   * This is called when we switch to one page view
   */
  prepare() {
    const startLeaf = this.br.currentIndex();

    this.$scrollContainer
      .empty()
      .css({
        overflowY: 'scroll',
        overflowX: 'auto'
      });
    this.$scrollContainer.append(this.$documentContainer);

    // Attaches to first child - child must be present
    this.$scrollContainer.dragscrollable();
    this.br.bindGestures(this.$scrollContainer);

    this.resizePageView();

    // Draw leafs

    this.br.jumpToIndex(startLeaf);
    this.br.updateBrClasses();
  }

  /** @param {number} inches */
  physicalInchesToDisplayPixels(inches) {
    return inches * this.screenDPI / this.reduce;
  }

  /** Iterate over pages, augmented with their top/bottom bounds */
  * pagesWithBounds() {
    let leafTop = 0;
    let leafBottom = 0;

    for (const page of this.book.pagesIterator({ combineConsecutiveUnviewables: true })) {
      const height = this.physicalInchesToDisplayPixels(page.heightInches);
      leafBottom += height;
      yield { page, top: leafTop, bottom: leafBottom };
      leafTop += height + this.physicalInchesToDisplayPixels(this.LEAF_SPACING_IN);
      leafBottom += this.physicalInchesToDisplayPixels(this.LEAF_SPACING_IN);
    }
  }

  /**
   * @param {{ top: number; bottom: number; }} bound1
   * @param {{ top: number; bottom: number; }} bound2
   */
  static boundsIntersect(bound1, bound2) {
    return (bound1.bottom >= bound2.top) && (bound1.top <= bound2.bottom);
  }

  /**
   * Find the pages that intersect the current viewport, including 1 before/after
   **/
  * findIntersectingPages() {
    // Rectangle of interest
    const height = this.$scrollContainer.height();
    const scrollTop = this.br.refs.$brContainer.scrollTop();
    const scrollBottom = scrollTop + height;
    const scrollRegion = { top: scrollTop, bottom: scrollBottom };

    let prev = null;
    for (const {page, top, bottom} of this.pagesWithBounds()) {
      const intersects = Mode1Up.boundsIntersect({ top, bottom }, scrollRegion);
      const cur = {page, top, bottom, intersects};
      if (intersects) {
        // Also yield the page just before the visible page
        if (!prev?.intersects) yield prev;
        yield cur;
      }
      // Also yield the page just after the last visible page
      else if (prev?.intersects) {
        yield cur;
        break;
      }
      prev = cur;
    }
  }

  drawLeafs() {
    const pagesToDisplay = Array.from(this.findIntersectingPages());

    // Based of the pages displayed in the view we set the current index
    // $$$ we should consider the page in the center of the view to be the current one
    this.br.updateFirstIndex(pagesToDisplay.find(({intersects}) => intersects).page.index);

    for (const {page, top, bottom} of pagesToDisplay) {
      if (!this.br.displayedIndices.includes(page.index)) {
        const height = bottom - top;
        const width = this.physicalInchesToDisplayPixels(page.widthInches);

        this.br._createPageContainer(page.index, {
          width,
          height,
          top,
          left: Math.floor((this.$documentContainer.width() - width) / 2),
        })
          .append($('<img />', {
            src: page.getURI(this.br.reduce, 0),
            srcset: this.br.options.useSrcSet ? this.br._getPageURISrcset(page.index, this.br.reduce, 0) : '',
            alt: 'Book page image',
          }))
          .appendTo(this.$documentContainer);
      }
    }

    const displayedIndices = pagesToDisplay.map(({page}) => page.index);
    for (const index of this.br.displayedIndices) {
      if (notInArray(index, displayedIndices)) {
        this.br.$(`.pagediv${index}`).remove();
      }
    }

    this.br.displayedIndices = displayedIndices;
    if (this.br.enableSearch) this.br.updateSearchHilites();

    this.br.updateToolbarZoom(this.br.reduce);

    // Update the slider
    this.br.updateNavIndexThrottled();
  }

  /**
   * @param {PageIndex} index
   * @param {number} [pageX]
   * @param {number} [pageY]
   * @param {boolean} [noAnimate]
   */
  jumpToIndex(index, pageX, pageY, noAnimate) {
    const prevCurrentIndex = this.br.currentIndex();
    const { abs, floor } = Math;
    let offset = 0;
    let leafTop = this.getPageTop(index);
    let leafLeft = 0;

    if (pageY) {
      const clientHeight = this.br.refs.$brContainer.prop('clientHeight');
      offset = floor(pageY / this.br.reduce) - floor(clientHeight / 2);
      leafTop += offset;
    } else {
      // Show page just a little below the top
      leafTop -= this.br.padding / 2;
    }

    if (pageX) {
      const clientWidth = this.br.refs.$brContainer.prop('clientWidth');
      offset = floor(pageX / this.br.reduce) - floor(clientWidth / 2);
      leafLeft += offset;
    } else {
      // Preserve left position
      leafLeft = this.br.refs.$brContainer.scrollLeft();
    }

    // Only animate for small distances
    if (!noAnimate && abs(prevCurrentIndex - index) <= 4) {
      this.animating = true;
      this.br.refs.$brContainer.stop(true).animate({
        scrollTop: leafTop,
        scrollLeft: leafLeft,
      }, 'fast', () => { this.animating = false });
    } else {
      this.br.refs.$brContainer.stop(true).prop('scrollTop', leafTop);
    }
  }

  /**
   * @param {'in' | 'out'} direction
   */
  zoom(direction) {
    const reduceFactor = this.br.nextReduce(this.br.reduce, direction, this.br.onePage.reductionFactors);

    if (this.br.reduce == reduceFactor.reduce) {
      // Already at this level
      return;
    }

    this.br.reduce = reduceFactor.reduce; // $$$ incorporate into function
    this.br.onePage.autofit = reduceFactor.autofit;

    this.br.pageScale = this.br.reduce; // preserve current reduce

    this.resizePageView();
    this.br.updateToolbarZoom(this.br.reduce);

    // Recalculate search hilites
    if (this.br.enableSearch) {
      this.br.removeSearchHilites();
      this.br.updateSearchHilites();
    }
  }

  getAutofitWidth() {
    const medianWidthInches = this.book.getMedianPageSizeInches().width;
    const medianPageWidth = this.physicalInchesToDisplayPixels(medianWidthInches);
    const availableWidth = this.$scrollContainer.prop('clientWidth');
    const widthPadding = 20;
    return medianPageWidth / (availableWidth - 2 * widthPadding);
  }

  getAutofitHeight() {
    const medianHeightInches = this.book.getMedianPageSizeInches().height;
    const medianPageHeight = this.physicalInchesToDisplayPixels(medianHeightInches);
    const availableHeight = this.$scrollContainer.innerHeight();
    // make sure a little of adjacent pages show
    return medianPageHeight / (availableHeight - 2 * this.br.padding);
  }

  /**
   * Returns where the top of the page with given index should be in one page view
   * @param {PageIndex} index
   * @return {number}
   */
  getPageTop(index) {
    for (const {page, top} of this.pagesWithBounds()) {
      if (page.index == index) return top;
    }
  }

  /**
   * Update the reduction factors for 1up mode given the available width and height.
   * Recalculates the autofit reduction factors.
   */
  calculateReductionFactors() {
    this.br.onePage.reductionFactors = this.br.reductionFactors.concat(
      [
        { reduce: this.getAutofitWidth(), autofit: 'width' },
        { reduce: this.getAutofitHeight(), autofit: 'height' },
      ]);
    this.br.onePage.reductionFactors.sort(this.br._reduceSort);
  }

  /**
   * Resize the current one page view
   * Note this calls drawLeafs
   */
  resizePageView() {
    const viewWidth  = this.$scrollContainer.prop('clientWidth');
    const oldScrollTop  = this.$scrollContainer.prop('scrollTop');
    const oldPageViewHeight = this.$documentContainer.height();
    const oldPageViewWidth = this.$documentContainer.width();

    // May have come here after preparing the view, in which case the scrollTop and view height are not set

    let scrollRatio = 0;
    let oldCenterX;
    if (oldScrollTop > 0) {
      // We have scrolled - implies view has been set up
      const oldCenterY = this.centerY();
      oldCenterX = this.centerX();
      scrollRatio = oldCenterY / oldPageViewHeight;
    } else {
      // Have not scrolled, e.g. because in new container

      // We set the scroll ratio so that the current index will still be considered the
      // current index in drawLeafsOnePage after we create the new view container

      // Make sure this will count as current page after resize
      const fudgeFactor = (this.book.getPageHeight(this.br.currentIndex()) / this.br.reduce) * 0.6;
      const oldLeafTop = this.getPageTop(this.br.currentIndex()) + fudgeFactor;
      const oldViewDimensions = this.calculateViewDimensions(this.br.reduce, this.br.padding);
      scrollRatio = oldLeafTop / oldViewDimensions.height;
    }

    // Recalculate 1up reduction factors
    this.calculateReductionFactors();
    // Update current reduce (if in autofit)
    if (this.br.onePage.autofit) {
      const reductionFactor = this.br.nextReduce(this.br.reduce, this.br.onePage.autofit, this.br.onePage.reductionFactors);
      this.br.reduce = reductionFactor.reduce;
    }

    const viewDimensions = this.calculateViewDimensions();
    this.$documentContainer.height(viewDimensions.height);
    this.$documentContainer.width(viewDimensions.width);


    const newCenterY = scrollRatio * viewDimensions.height;
    const newTop = Math.max(0, Math.floor( newCenterY - this.br.refs.$brContainer.height() / 2 ));
    this.br.refs.$brContainer.prop('scrollTop', newTop);

    // We use clientWidth here to avoid miscalculating due to scroll bar
    const newCenterX = oldCenterX * (viewWidth / oldPageViewWidth);
    let newLeft = newCenterX - this.br.refs.$brContainer.prop('clientWidth') / 2;
    newLeft = Math.max(newLeft, 0);
    this.br.refs.$brContainer.prop('scrollLeft', newLeft);

    this.$documentContainer.empty();
    this.br.displayedIndices = [];
    this.drawLeafs();

    if (this.br.enableSearch) {
      this.br.removeSearchHilites();
      this.br.updateSearchHilites();
    }
  }

  /**
   * Calculate the dimensions for a one page view with images at the given reduce and padding
   */
  calculateViewDimensions() {
    let width = 0;
    let height = 0;
    for (const {page, bottom} of this.pagesWithBounds()) {
      const pageWidth = this.physicalInchesToDisplayPixels(page.widthInches);
      width = Math.max(width, pageWidth);
      height = bottom;
    }
    return { width, height };
  }

  /**
   * Returns the current offset of the viewport center in scaled document coordinates.
   */
  centerX($brContainer = this.br.refs.$brContainer, $pagesContainer = this.$documentContainer) {
    let centerX;
    if ($pagesContainer.width() < $brContainer.prop('clientWidth')) { // fully shown
      centerX = $pagesContainer.width();
    } else {
      centerX = $brContainer.scrollLeft() + $brContainer.prop('clientWidth') / 2;
    }
    return Math.floor(centerX);
  }

  /**
   * Returns the current offset of the viewport center in scaled document coordinates.
   */
  centerY($brContainer = this.br.refs.$brContainer) {
    const centerY = $brContainer.scrollTop() + $brContainer.height() / 2;
    return Math.floor(centerY);
  }
}
