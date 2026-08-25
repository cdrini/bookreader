// @ts-check
import interact from 'interactjs';
import { isIOS, isSamsungInternet } from '../util/browserSniffing.js';
import { sleep } from './utils.js';
/** @typedef {import('./utils/HTMLDimensionsCacher.js').HTMLDimensionsCacher} HTMLDimensionsCacher */

/**
 * Max ms between the end of the first tap and the start of the second tap to
 * count as a double-tap. Matches Android's ViewConfiguration.DOUBLE_TAP_TIMEOUT
 * and Flutter's kDoubleTapTimeout, both 300ms; iOS doesn't publish a number.
 */
const DOUBLE_TAP_TIME_MS = 300;
/** Max px between the two taps of a double-tap. Matches Flutter's kDoubleTapSlop. */
const DOUBLE_TAP_MAX_DISTANCE_PX = 100;
/** Px the second tap needs to move before it's treated as a drag-to-zoom, rather than a stationary double-tap */
const DOUBLE_TAP_DRAG_ENGAGE_PX = 10;
/**
 * Reference "virtual finger spread" for the drag half of the gesture, in px.
 * Pinch-zoom's scale is exactly currentPinchDistance / startingPinchDistance
 * (see _drawPinchZoomFrame); modeling the drag as one finger moving away
 * from a stationary one starting this far apart reproduces that same rate.
 */
const DOUBLE_TAP_DRAG_REFERENCE_PX = 200;

/**
 * @typedef {object} SmoothZoomable
 * @property {HTMLElement} $container
 * @property {HTMLElement} $visibleWorld
 * @property {import("./options.js").AutoFitValues} autoFit
 * @property {number} scale
 * @property {HTMLDimensionsCacher} htmlDimensionsCacher
 * @property {function(): void} [attachScrollListeners]
 * @property {function(): void} [detachScrollListeners]
 */

/** Manages pinch-zoom, ctrl-wheel, and trackpad pinch smooth zooming. */
export class ModeSmoothZoom {
  /** Position (in unit-less, [0, 1] coordinates) in client to scale around */
  scaleCenter = { x: 0.5, y: 0.5 };

  /** @param {SmoothZoomable} mode */
  constructor(mode) {
    /** @type {SmoothZoomable} */
    this.mode = mode;

    /** Whether a pinch is currently happening */
    this.pinching = false;
    /** Non-null when a scale has been enqueued/is being processed by the buffer function */
    this.pinchMoveFrame = null;
    /** Promise for the current/enqueued pinch move frame. Resolves when it is complete. */
    this.pinchMoveFramePromise = Promise.resolve();
    this.oldScale = 1;
    /** @type {{ scale: number, clientX: number, clientY: number }}} */
    this.lastEvent = null;
    this.attached = false;

    /** Most recent completed single tap, used to detect the second tap of a double-tap. */
    /** @type {{ time: number, x: number, y: number }} */
    this.pendingTap = null;
    /** State of the touch currently down, from `down` to `up`. */
    /** @type {{ time: number, startX: number, startY: number, isDoubleTapCandidate: boolean, dragEngaged: boolean, startScale: number }} */
    this.activeTouch = null;
    /** Non-null when a double-tap-drag scale update has been enqueued/is being processed by the buffer function */
    this.doubleTapDragFrame = null;
    /** The container's touch-action value outside of the double-tap-drag window (browser-dependent; see attach()). */
    this.baseTouchAction = "pan-x pan-y";
    /** Timer that reverts touchAction back to baseTouchAction if a second tap never arrives. */
    this.touchActionRevertTimer = null;
    /** Timer for an action deferred by runAfterTapResolved(), pending double-tap disambiguation. */
    this.singleTapActionTimer = null;

    /** @type {function(function(): void): any} */
    this.bufferFn = window.requestAnimationFrame.bind(window);
  }

  attach() {
    if (this.attached) return;

    this.attachCtrlZoom();

    // GestureEvents work only on Safari; they're too glitchy to use
    // fully, but they can sometimes help error correct when interact
    // misses an end/start event on Safari due to Safari bugs.
    this.mode.$container.addEventListener('gesturestart', this._pinchStart);
    this.mode.$container.addEventListener('gesturechange', this._preventEvent);
    this.mode.$container.addEventListener('gestureend', this._pinchEnd);

    if (isIOS()) {
      this.touchesMonitor = new TouchesMonitor(this.mode.$container);
      this.touchesMonitor.attach();
    }

    this.mode.$container.style.touchAction = "pan-x pan-y";

    // The pinch listeners
    this.interact = interact(this.mode.$container);
    this.interact.gesturable({
      listeners: {
        start: this._pinchStart,
        end: this._pinchEnd,
      },
    });

    // The double-tap-and-drag zoom listeners
    this.interact.on('down', this._handleTapDown);
    this.interact.on('move', this._handleTapMove);
    this.interact.on('up', this._handleTapUp);
    if (isSamsungInternet()) {
      // Samsung internet pinch-zoom will not work unless we disable
      // all touch actions. So use interact.js' built-in drag support
      // to handle moving on that browser.
      this.mode.$container.style.touchAction = "none";
      this.interact
        .draggable({
          inertia: {
            resistance: 2,
            minSpeed: 100,
            allowResume: true,
          },
          listeners: { move: this._dragMove },
        });
    }
    this.baseTouchAction = this.mode.$container.style.touchAction;

    this.attached = true;
  }

  detach() {
    this.detachCtrlZoom();
    clearTimeout(this.touchActionRevertTimer);
    this.touchActionRevertTimer = null;
    clearTimeout(this.singleTapActionTimer);
    this.singleTapActionTimer = null;

    // GestureEvents work only on Safari; they interfere with Hammer,
    // so block them.
    this.mode.$container.removeEventListener('gesturestart', this._pinchStart);
    this.mode.$container.removeEventListener('gesturechange', this._preventEvent);
    this.mode.$container.removeEventListener('gestureend', this._pinchEnd);

    this.touchesMonitor?.detach?.();

    // The pinch listeners
    this.interact.unset();
    interact.removeDocument(document);

    this.attached = false;
  }

  /** @param {Event} ev */
  _preventEvent = (ev) => {
    ev.preventDefault();
    return false;
  }

  _pinchStart = async () => {
    // Safari calls gesturestart twice!
    if (this.pinching) return;
    if (isIOS()) {
      // Safari sometimes causes a pinch to trigger when there's only one touch!
      await sleep(0); // touches monitor can receive the touch event late
      if (this.touchesMonitor.touches < 2) return;
    }
    this.pinching = true;

    // Do this in case the pinchend hasn't fired yet.
    this.oldScale = 1;
    this.mode.$visibleWorld.classList.add("BRsmooth-zooming");
    this.mode.$visibleWorld.style.willChange = "transform";
    this.mode.autoFit = "none";
    this.detachCtrlZoom();
    this.mode.detachScrollListeners?.();

    this.interact.gesturable({
      listeners: {
        start: this._pinchStart,
        move: this._pinchMove,
        end: this._pinchEnd,
      },
    });
  }

  /** @param {{ scale: number, clientX: number, clientY: number }}} e */
  _pinchMove = async (e) => {
    if (!this.pinching) return;
    this.lastEvent = {
      scale: e.scale,
      clientX: e.clientX,
      clientY: e.clientY,
    };
    if (!this.pinchMoveFrame) {
      // Buffer these events; only update the scale when request animation fires
      this.pinchMoveFrame = this.bufferFn(this._drawPinchZoomFrame);
    }
  }

  _pinchEnd = async () => {
    if (!this.pinching) return;
    this.pinching = false;
    this.interact.gesturable({
      listeners: {
        start: this._pinchStart,
        end: this._pinchEnd,
      },
    });
    // Want this to happen after the pinchMoveFrame,
    // if one is in progress; otherwise setting oldScale
    // messes up the transform.
    await this.pinchMoveFramePromise;
    this.scaleCenter = { x: 0.5, y: 0.5 };
    this.oldScale = 1;
    this.mode.$visibleWorld.classList.remove("BRsmooth-zooming");
    this.mode.$visibleWorld.style.willChange = "auto";
    this.attachCtrlZoom();
    this.mode.attachScrollListeners?.();
  }

  _drawPinchZoomFrame = async () => {
    // Because of the buffering/various timing locks,
    // this can be called after the pinch has ended, which
    // results in a janky zoom after the pinch.
    if (!this.pinching) {
      this.pinchMoveFrame = null;
      return;
    }

    this.mode.$container.style.overflow = "hidden";
    this.pinchMoveFramePromiseRes = null;
    this.pinchMoveFramePromise = new Promise(
      (res) => (this.pinchMoveFramePromiseRes = res),
    );
    this.updateScaleCenter({
      clientX: this.lastEvent.clientX,
      clientY: this.lastEvent.clientY,
    });
    const curScale = this.mode.scale;
    const newScale = curScale * this.lastEvent.scale / this.oldScale;

    if (curScale != newScale) {
      this.mode.scale = newScale;
      await this.pinchMoveFramePromise;
    }
    this.mode.$container.style.overflow = "auto";
    this.oldScale = this.lastEvent.scale;
    this.pinchMoveFrame = null;
  }

  _dragMove = async (e) => {
    if (this.pinching) {
      await this._pinchEnd();
    }
    this.mode.$container.scrollTop -= e.dy;
    this.mode.$container.scrollLeft -= e.dx;
  }

  /**
   * Tracks the start of every touch, to detect when a touch is the second
   * tap of a double-tap (the start of a possible double-tap-and-drag zoom).
   * @param {{ pointerType: string, clientX: number, clientY: number, timeStamp: number, originalEvent: Event }} e
   */
  _handleTapDown = (e) => {
    const multiTouch = (e.originalEvent?.touches?.length ?? 1) > 1;
    if (this.pinching || multiTouch) {
      this._cancelDoubleTapDrag();
      return;
    }
    if (e.pointerType !== 'touch') {
      this.activeTouch = null;
      this.pendingTap = null;
      return;
    }

    const isDoubleTapCandidate = !!this.pendingTap &&
      (e.timeStamp - this.pendingTap.time) < DOUBLE_TAP_TIME_MS &&
      Math.hypot(e.clientX - this.pendingTap.x, e.clientY - this.pendingTap.y) < DOUBLE_TAP_MAX_DISTANCE_PX;

    if (isDoubleTapCandidate) {
      // touchAction was already set to "none" when the first tap ended, so
      // the browser won't try to natively pan/scroll this touch at all; just
      // stop the scheduled revert from firing mid-gesture.
      clearTimeout(this.touchActionRevertTimer);
      this.touchActionRevertTimer = null;
      // The first tap turned out to be part of a double-tap: any action
      // deferred for it (e.g. a page flip) should never run.
      clearTimeout(this.singleTapActionTimer);
      this.singleTapActionTimer = null;
    } else {
      this._restoreTouchAction();
    }

    this.activeTouch = {
      time: e.timeStamp,
      startX: e.clientX,
      startY: e.clientY,
      isDoubleTapCandidate,
      dragEngaged: false,
      startScale: this.mode.scale,
    };
    this.pendingTap = null;
  }

  /**
   * @param {{ clientX: number, clientY: number, originalEvent: Event, preventDefault: function(): void }} e
   */
  _handleTapMove = (e) => {
    if (!this.activeTouch) return;
    const multiTouch = (e.originalEvent?.touches?.length ?? 1) > 1;
    if (this.pinching || multiTouch) {
      this._cancelDoubleTapDrag();
      return;
    }
    if (!this.activeTouch.isDoubleTapCandidate) return;

    // Block this from the first pixel of movement: touchAction should
    // already have stopped the browser from panning natively, but this is a
    // defensive backstop against browsers that don't fully honor that.
    e.preventDefault();

    const dx = e.clientX - this.activeTouch.startX;
    const dy = e.clientY - this.activeTouch.startY;

    if (!this.activeTouch.dragEngaged) {
      if (Math.hypot(dx, dy) < DOUBLE_TAP_DRAG_ENGAGE_PX) return;
      this.activeTouch.dragEngaged = true;
      this._doubleTapDragStart(this.activeTouch);
    }

    // Matches Google Maps/Chrome: drag down to zoom in, drag up to zoom out.
    // Same rate as pinch-zoom: model it as one finger moving away from a
    // stationary one starting DOUBLE_TAP_DRAG_REFERENCE_PX apart, and scale
    // by the resulting distance ratio, same as _drawPinchZoomFrame does.
    const virtualPinchDistance = Math.max(1, DOUBLE_TAP_DRAG_REFERENCE_PX + dy);
    const newScale = this.activeTouch.startScale * virtualPinchDistance / DOUBLE_TAP_DRAG_REFERENCE_PX;
    this._queueDoubleTapDragScale(newScale);
  }

  /**
   * @param {{ clientX: number, clientY: number, timeStamp: number }} e
   */
  _handleTapUp = (e) => {
    if (!this.activeTouch) return;

    if (this.activeTouch.dragEngaged) {
      this._doubleTapDragEnd();
      this._restoreTouchAction();
      this.activeTouch = null;
      this.pendingTap = null;
      return;
    }

    const dx = e.clientX - this.activeTouch.startX;
    const dy = e.clientY - this.activeTouch.startY;
    const wasTap = Math.hypot(dx, dy) < DOUBLE_TAP_DRAG_ENGAGE_PX;

    // Don't let the second tap of a double-tap seed a third; only a lone
    // tap can become the first tap of a new double-tap.
    if (wasTap && !this.activeTouch.isDoubleTapCandidate) {
      this.pendingTap = { time: e.timeStamp, x: e.clientX, y: e.clientY };
      // Preemptively block native panning for a possible second tap, since
      // touchAction is read by the browser at the *start* of that touch --
      // reacting to it once that touch is already moving is too late.
      this.mode.$container.style.touchAction = "none";
      clearTimeout(this.touchActionRevertTimer);
      this.touchActionRevertTimer = setTimeout(this._disarmDoubleTapWindow, DOUBLE_TAP_TIME_MS);
    } else {
      this.pendingTap = null;
      this._restoreTouchAction();
    }
    this.activeTouch = null;
  }

  /**
   * Runs `fn`, unless the tap that just ended might be the first tap of a
   * double-tap(-drag) -- in which case `fn` is deferred until we know
   * whether a second tap follows, and dropped entirely if one does. Lets
   * callers with their own single-tap actions (e.g. click-to-flip-page)
   * avoid firing those out from under a gesture that's about to start.
   * @param {() => void} fn
   */
  runAfterTapResolved(fn) {
    if (!this.pendingTap) {
      fn();
      return;
    }
    clearTimeout(this.singleTapActionTimer);
    this.singleTapActionTimer = setTimeout(() => {
      this.singleTapActionTimer = null;
      fn();
    }, DOUBLE_TAP_TIME_MS);
  }

  /** Reverts touchAction if no second tap arrived while it was armed. */
  _disarmDoubleTapWindow = () => {
    this.touchActionRevertTimer = null;
    if (!this.activeTouch) {
      this.mode.$container.style.touchAction = this.baseTouchAction;
    }
  }

  _restoreTouchAction() {
    clearTimeout(this.touchActionRevertTimer);
    this.touchActionRevertTimer = null;
    this.mode.$container.style.touchAction = this.baseTouchAction;
  }

  /** @param {{ startX: number, startY: number }} touch */
  _doubleTapDragStart(touch) {
    this.mode.$visibleWorld.classList.add("BRsmooth-zooming");
    this.mode.$visibleWorld.style.willChange = "transform";
    this.mode.autoFit = "none";
    this.detachCtrlZoom();
    this.mode.detachScrollListeners?.();
    this.updateScaleCenter({ clientX: touch.startX, clientY: touch.startY });
  }

  /** @param {number} newScale */
  _queueDoubleTapDragScale(newScale) {
    this.pendingDoubleTapScale = newScale;
    if (!this.doubleTapDragFrame) {
      this.doubleTapDragFrame = this.bufferFn(this._applyDoubleTapDragScale);
    }
  }

  _applyDoubleTapDragScale = () => {
    this.doubleTapDragFrame = null;
    if (!this.activeTouch?.dragEngaged) return;
    this.mode.scale = this.pendingDoubleTapScale;
  }

  _doubleTapDragEnd() {
    this.mode.$visibleWorld.classList.remove("BRsmooth-zooming");
    this.mode.$visibleWorld.style.willChange = "auto";
    this.attachCtrlZoom();
    this.mode.attachScrollListeners?.();
  }

  /** Aborts an in-progress or candidate double-tap-drag, e.g. when a second finger touches down. */
  _cancelDoubleTapDrag = () => {
    if (this.activeTouch?.dragEngaged) {
      this._doubleTapDragEnd();
    }
    this._restoreTouchAction();
    this.activeTouch = null;
    this.pendingTap = null;
  }

  /** @private */
  attachCtrlZoom() {
    window.addEventListener("wheel", this._handleCtrlWheel, { passive: false });
  }

  /** @private */
  detachCtrlZoom() {
    window.removeEventListener("wheel", this._handleCtrlWheel);
  }

  /** @param {WheelEvent} ev **/
  _handleCtrlWheel = (ev) => {
    if (!ev.ctrlKey) return;
    ev.preventDefault();
    const zoomMultiplier =
        // Zooming on macs was painfully slow; likely due to their better
        // trackpads. Give them a higher zoom rate.
        /Mac/i.test(navigator.platform)
          ? 0.045
          : // This worked well for me on Windows
          0.03;

    // Zoom around the cursor
    this.updateScaleCenter(ev);
    this.mode.autoFit = "none";
    this.mode.scale *= 1 - Math.sign(ev.deltaY) * zoomMultiplier;
  }

  /**
   * @param {object} param0
   * @param {number} param0.clientX
   * @param {number} param0.clientY
   */
  updateScaleCenter({ clientX, clientY }) {
    const bc = this.mode.htmlDimensionsCacher.boundingClientRect;
    this.scaleCenter = {
      x: (clientX - bc.left) / this.mode.htmlDimensionsCacher.clientWidth,
      y: (clientY - bc.top) / this.mode.htmlDimensionsCacher.clientHeight,
    };
  }

  /**
   * @param {number} newScale
   * @param {number} oldScale
   */
  updateViewportOnZoom(newScale, oldScale) {
    const container = this.mode.$container;
    const { scrollTop: T, scrollLeft: L } = container;
    const W = this.mode.htmlDimensionsCacher.clientWidth;
    const H = this.mode.htmlDimensionsCacher.clientHeight;

    // Scale factor change
    const F = newScale / oldScale;

    // Where in the viewport the zoom is centered on
    const XPOS = this.scaleCenter.x;
    const YPOS = this.scaleCenter.y;
    const oldCenter = {
      x: L + XPOS * W,
      y: T + YPOS * H,
    };
    const newCenter = {
      x: F * oldCenter.x,
      y: F * oldCenter.y,
    };

    container.scrollTop = newCenter.y - YPOS * H;
    container.scrollLeft = newCenter.x - XPOS * W;
    this.pinchMoveFramePromiseRes?.();
  }
}

export class TouchesMonitor {
  /**
   * @param {HTMLElement} container
   */
  constructor(container) {
    /** @type {HTMLElement} */
    this.container = container;
    this.touches = 0;
  }

  attach() {
    this.container.addEventListener("touchstart", this._updateTouchCount);
    this.container.addEventListener("touchend", this._updateTouchCount);
  }

  detach() {
    this.container.removeEventListener("touchstart", this._updateTouchCount);
    this.container.removeEventListener("touchend", this._updateTouchCount);
  }

  /**
   * @param {TouchEvent} ev
   */
  _updateTouchCount = (ev) => {
    this.touches = ev.touches.length;
  }
}
