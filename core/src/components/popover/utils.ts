import { PopoverSize, PositionAlign, PositionReference, PositionSide, TriggerAction } from '../../interface';
import { getElementRoot, raf } from '../../utils/helpers';

interface InteractionCallback {
  eventName: string;
  callback: (ev: any) => void;
}

export interface ReferenceCoordinates {
  top: number;
  left: number;
  width: number;
  height: number;
}

interface PopoverPosition {
  top: number;
  left: number;
  referenceCoordinates?: ReferenceCoordinates;
  arrowTop?: number;
  arrowLeft?: number;
  originX: string;
  originY: string;
}

export interface PopoverStyles {
  top: number;
  left: number;
  bottom?: number;
  originX: string;
  originY: string;
  checkSafeAreaLeft: boolean;
  checkSafeAreaRight: boolean;
  arrowTop: number;
  arrowLeft: number;
  addPopoverBottomClass: boolean;
}

/**
 * Returns the dimensions of the popover
 * arrow on `ios` mode. If arrow is disabled
 * returns (0, 0).
 */
export const getArrowDimensions = (
  arrowEl: HTMLElement | null
) => {
  if (!arrowEl) { return { arrowWidth: 0, arrowHeight: 0 }; }
  const { width, height } = arrowEl.getBoundingClientRect();

  return { arrowWidth: width, arrowHeight: height };
}

/**
 * Returns the recommended dimensions of the popover
 * that takes into account whether or not the width
 * should match the trigger width.
 */
export const getPopoverDimensions = (
  size: PopoverSize,
  contentEl: HTMLElement,
  triggerEl?: HTMLElement
) => {
  const contentDimentions = contentEl.getBoundingClientRect();
  const contentHeight = contentDimentions.height;
  let contentWidth = contentDimentions.width;

  if (size === 'cover' && triggerEl) {
    const triggerDimensions = triggerEl.getBoundingClientRect();
    contentWidth = triggerDimensions.width;
  }

  return {
    contentWidth,
    contentHeight
  }
}

export const configureDismissInteraction = (
  triggerEl: HTMLElement,
  triggerAction: TriggerAction,
  popoverEl: HTMLIonPopoverElement,
  parentPopoverEl: HTMLIonPopoverElement
) => {
  let dismissCallbacks: InteractionCallback[] = [];
  const root = getElementRoot(parentPopoverEl);
  const parentContentEl = root.querySelector('.popover-content') as HTMLElement;

  switch (triggerAction) {
    case 'hover':
      dismissCallbacks = [
        {
          /**
           * Do not use mouseover here
           * as this will causes the event to
           * be dispatched on each underlying
           * element rather than on the popover
           * content as a whole.
           */
          eventName: 'mouseenter',
          callback: (ev: MouseEvent) => {
            /**
             * Do not dismiss the popover is we
             * are hovering over its trigger.
             * This would be easier if we used mouseover
             * but this would cause the event to be dispatched
             * more often than we would like, potentially
             * causing performance issues.
             */
            const element = document.elementFromPoint(ev.clientX, ev.clientY) as HTMLElement | null;
            if (element === triggerEl) { return; }

            popoverEl.dismiss(undefined, undefined, false);
          }
        }
     ];
      break;
    case 'context-menu':
    case 'click':
    default:
      dismissCallbacks = [
        {
          eventName: 'click',
          callback: (ev: MouseEvent) => {
            /**
             * Do not dismiss the popover is we
             * are hovering over its trigger.
             */
            const target = ev.target as HTMLElement;
            const closestTrigger = target.closest('[data-ion-popover-trigger]');
            if (closestTrigger === triggerEl) {
              /**
               * stopPropagation here so if the
               * popover has dismissOnSelect="true"
               * the popover does not dismiss since
               * we just clicked a trigger element.
               */
              ev.stopPropagation();
              return;
            }

            popoverEl.dismiss(undefined, undefined, false);
          }
        }
      ];
      break;
  }

  dismissCallbacks.forEach(({ eventName, callback }) => parentContentEl.addEventListener(eventName, callback));

  return () => {
    dismissCallbacks.forEach(({ eventName, callback }) => parentContentEl.removeEventListener(eventName, callback));
  }
}

/**
 * Configures the triggerEl to respond
 * to user interaction based upon the triggerAction
 * prop that devs have defined.
 */
export const configureTriggerInteraction = (
  triggerEl: HTMLElement,
  triggerAction: TriggerAction,
  popoverEl: HTMLIonPopoverElement
) => {
  let triggerCallbacks: InteractionCallback[] = [];

  /**
   * Based upon the kind of trigger interaction
   * the user wants, we setup the correct event
   * listeners.
   */
  switch (triggerAction) {
    case 'hover':
      let hoverTimeout: any;

      triggerCallbacks = [
        {
          eventName: 'mouseenter',
          callback: async (ev: Event) => {
            ev.stopPropagation();

            if (hoverTimeout) {
              clearTimeout(hoverTimeout);
            }

            /**
             * Hovering over a trigger should not
             * immediately open the next popover.
             */
            hoverTimeout = setTimeout(() => {
              raf(() => {
                popoverEl.presentFromTrigger(ev);
                hoverTimeout = undefined;
              })
            }, 100);
          }
        },
        {
          eventName: 'mouseleave',
          callback: (ev: MouseEvent) => {
            if (hoverTimeout) {
              clearTimeout(hoverTimeout);
            }

            /**
             * If mouse is over another popover
             * that is not this popover then we should
             * close this popover.
             */
            const target = ev.relatedTarget as HTMLElement | null;
            if (!target) { return; }

            if (target.closest('ion-popover') !== popoverEl) {
              popoverEl.dismiss(undefined, undefined, false);
            }
          }
        },
        {
          /**
           * stopPropagation here prevents the popover
           * from dismissing when dismiss-on-select="true".
           */
          eventName: 'click',
          callback: (ev: Event) => ev.stopPropagation()
        },
        {
          eventName: 'ionPopoverActivateTrigger',
          callback: (ev: Event) => popoverEl.presentFromTrigger(ev, true)
        }
      ]

      break;
    case 'context-menu':
      triggerCallbacks = [
        {
          eventName: 'contextmenu',
          callback: (ev: Event) => {
            /**
             * Prevents the platform context
             * menu from appearing.
             */
            ev.preventDefault();
            popoverEl.presentFromTrigger(ev);
          }
        },
        {
          eventName: 'click',
          callback: (ev: Event) => ev.stopPropagation()
        },
        {
          eventName: 'ionPopoverActivateTrigger',
          callback: (ev: Event) => popoverEl.presentFromTrigger(ev, true)
        }
      ]

      break;
    case 'click':
    default:
      triggerCallbacks = [
        {
          /**
           * Do not do a stopPropagation() here
           * because if you had two click triggers
           * then clicking the first trigger and then
           * clicking the second trigger would not cause
           * the first popover to dismiss.
           */
          eventName: 'click',
          callback: (ev: Event) => popoverEl.presentFromTrigger(ev)
        },
        {
          eventName: 'ionPopoverActivateTrigger',
          callback: (ev: Event) => popoverEl.presentFromTrigger(ev, true)
        }
      ];
      break;
  }

  triggerCallbacks.forEach(({ eventName, callback }) => triggerEl.addEventListener(eventName, callback));
  triggerEl.setAttribute('data-ion-popover-trigger', 'true');

  return () => {
    triggerCallbacks.forEach(({ eventName, callback }) => triggerEl.removeEventListener(eventName, callback));
    triggerEl.removeAttribute('data-ion-popover-trigger');
  }
}

/**
 * Returns the index of an ion-item in an array of ion-items.
 */
export const getIndexOfItem = (items: HTMLIonItemElement[], item: HTMLElement | null) => {
  if (!item || item.tagName !== 'ION-ITEM') { return -1; }

  return items.findIndex(el => el === item)
};

/**
 * Given an array of elements and a currently focused ion-item
 * returns the next ion-item relative to the focused one or
 * undefined.
 */
export const getNextItem = (items: HTMLIonItemElement[], currentItem: HTMLElement | null) => {
  const currentItemIndex = getIndexOfItem(items, currentItem);
  return items[currentItemIndex + 1];
}

/**
 * Given an array of elements and a currently focused ion-item
 * returns the previous ion-item relative to the focused one or
 * undefined.
 */
export const getPrevItem = (items: HTMLIonItemElement[], currentItem: HTMLElement | null) => {
  const currentItemIndex = getIndexOfItem(items, currentItem);
  return items[currentItemIndex - 1];
}

/**
 * Returns `true` if `el` has been designated
 * as a trigger element for an ion-popover.
 */
export const isTriggerElement = (el: HTMLElement) => el.hasAttribute('data-ion-popover-trigger');

export const configureKeyboardInteraction = (
  popoverEl: HTMLIonPopoverElement
) => {

  const callback = async (ev: KeyboardEvent) => {
    const activeElement = document.activeElement as HTMLElement | null;
    let items = [] as any;

    /**
     * Complex selectors with :not() are :not supported
     * in older versions of Chromium so we need to do a
     * try/catch here so errors are not thrown.
     */
    try {

      /**
       * Select all ion-items that are not children of child popovers.
       * i.e. only select ion-item elements that are part of this popover
       */
      items = Array.from(popoverEl.querySelectorAll('ion-item:not(ion-popover ion-popover *)'));
    /* tslint:disable-next-line */
    } catch {}

    switch (ev.key) {

      /**
       * If we are in a child popover
       * then pressing the left arrow key
       * should close this popover and move
       * focus to the popover that presented
       * this one.
       */
      case 'ArrowLeft':
        const parentPopover = await popoverEl.getParentPopover();
        if (parentPopover) {
          popoverEl.dismiss(undefined, undefined, false);
        }
        break;
      /**
       * ArrowDown should move focus to the next focusable ion-item.
       */
      case 'ArrowDown':
        const nextItem = getNextItem(items, activeElement);
        // tslint:disable-next-line:strict-type-predicates
        if (nextItem !== undefined) {
          nextItem.focus();
        }
        break;
      /**
       * ArrowUp should move focus to the previous focusable ion-item.
       */
      case 'ArrowUp':
        const prevItem = getPrevItem(items, activeElement);
        // tslint:disable-next-line:strict-type-predicates
        if (prevItem !== undefined) {
          prevItem.focus();
        }
        break;
      /**
       * ArrowRight, Spacebar, or Enter should activate
       * the currently focused trigger item to open a
       * popover if the element is a trigger item.
       */
      case 'ArrowRight':
      case ' ':
      case 'Enter':
        if (activeElement && isTriggerElement(activeElement)) {
          const rightEvent = new CustomEvent('ionPopoverActivateTrigger');
          activeElement.dispatchEvent(rightEvent);
        }
        break;
      default:
        break;
    }
  };

  popoverEl.addEventListener('keydown', callback);
  return () => popoverEl.removeEventListener('keydown', callback);
}

/**
 * Positions a popover by taking into account
 * the reference point, preferred side, alignment
 * and viewport dimensions.
 */
export const getPopoverPosition = (
  isRTL: boolean,
  contentWidth: number,
  contentHeight: number,
  arrowWidth: number,
  arrowHeight: number,
  reference: PositionReference,
  side: PositionSide,
  align: PositionAlign,
  defaultPosition: PopoverPosition,
  triggerEl?: HTMLElement,
  event?: MouseEvent | CustomEvent,
): PopoverPosition => {
  let referenceCoordinates = {
    top: 0,
    left: 0,
    width: 0,
    height: 0
  };

  /**
   * Calculate position relative to the
   * x-y coordinates in the event that
   * was passed in
   */
  switch (reference) {
    case 'event':
      if (!event) {
        return defaultPosition;
      }

      const mouseEv = event as MouseEvent;

      referenceCoordinates = {
        top: mouseEv.clientY,
        left: mouseEv.clientX,
        width: 1,
        height: 1
      }

      break;

    /**
     * Calculate position relative to the bounding
     * box on either the trigger element
     * specified via the `trigger` prop or
     * the target specified on the event
     * that was passed in.
     */
    case 'trigger':
    default:
      const customEv = event as CustomEvent;

      /**
       * ionShadowTarget is used when we need to align the
       * popover with an element inside of the shadow root
       * of an Ionic component. Ex: Presenting a popover
       * by clicking on the collapsed indicator inside
       * of `ion-breadcrumb` and centering it relative
       * to the indicator rather than `ion-breadcrumb`
       * as a whole.
       */
      const actualTriggerEl = (triggerEl || customEv?.detail?.ionShadowTarget || customEv?.target) as HTMLElement | null;
      if (!actualTriggerEl) {
        return defaultPosition;
      }
      const triggerBoundingBox = actualTriggerEl.getBoundingClientRect();
      referenceCoordinates = {
        top: triggerBoundingBox.top,
        left: triggerBoundingBox.left,
        width: triggerBoundingBox.width,
        height: triggerBoundingBox.height
      }

      break;
  }

  /**
   * Get top/left offset that would allow
   * popover to be positioned on the
   * preferred side of the reference.
   */
  const coordinates = calculatePopoverSide(side, referenceCoordinates, contentWidth, contentHeight, arrowWidth, arrowHeight, isRTL);

  /**
   * Get the top/left adjustments that
   * would allow the popover content
   * to have the correct alignment.
   */
  const alignedCoordinates = calculatePopoverAlign(align, side, referenceCoordinates, contentWidth, contentHeight);

  const top = coordinates.top + alignedCoordinates.top;
  const left = coordinates.left + alignedCoordinates.left;

  const { arrowTop, arrowLeft } = calculateArrowPosition(side, arrowWidth, arrowHeight, top, left, contentWidth, contentHeight, isRTL);

  const { originX, originY } = calculatePopoverOrigin(side, align, isRTL);

  return { top, left, referenceCoordinates, arrowTop, arrowLeft, originX, originY };
}

/**
 * Determines the transform-origin
 * of the popover animation so that it
 * is in line with what the side and alignment
 * prop values are. Currently only used
 * with the MD animation.
 */
const calculatePopoverOrigin = (
  side: PositionSide,
  align: PositionAlign,
  isRTL: boolean
) => {
  switch (side) {
    case 'top':
      return { originX: getOriginXAlignment(align), originY: 'bottom' }
    case 'bottom':
      return { originX: getOriginXAlignment(align), originY: 'top' }
    case 'left':
      return { originX: 'right', originY: getOriginYAlignment(align) }
    case 'right':
      return { originX: 'left', originY: getOriginYAlignment(align) }
    case 'start':
      return { originX: (isRTL) ? 'left' : 'right', originY: getOriginYAlignment(align) }
    case 'end':
      return { originX: (isRTL) ? 'right' : 'left', originY: getOriginYAlignment(align) }
  }
}

const getOriginXAlignment = (align: PositionAlign) => {
  switch (align) {
    case 'start':
      return 'left';
    case 'center':
      return 'center';
    case 'end':
      return 'right';
  }
}

const getOriginYAlignment = (align: PositionAlign) => {
  switch (align) {
    case 'start':
      return 'top';
    case 'center':
      return 'center';
    case 'end':
      return 'bottom';
  }
}

/**
 * Calculates where the arrow positioning
 * should be relative to the popover content.
 */
const calculateArrowPosition = (
  side: PositionSide,
  arrowWidth: number,
  arrowHeight: number,
  top: number,
  left: number,
  contentWidth: number,
  contentHeight: number,
  isRTL: boolean
) => {
  /**
   * Note: When side is left, right, start, or end, the arrow is
   * been rotated using a `transform`, so to move the arrow up or down
   * by its dimension, you need to use `arrowWidth`.
   */
  const leftPosition = { arrowTop: top + (contentHeight / 2) - (arrowWidth / 2), arrowLeft: left + contentWidth - (arrowWidth / 2) };

  /**
   * Move the arrow to the left by arrowWidth and then
   * again by half of its width because we have rotated
   * the arrow using a transform.
   */
  const rightPosition = { arrowTop: top + (contentHeight / 2) - (arrowWidth / 2), arrowLeft: left - (arrowWidth * 1.5) }

  switch (side) {
    case 'top':
      return { arrowTop: top + contentHeight, arrowLeft: left + (contentWidth / 2) - (arrowWidth / 2) }
    case 'bottom':
      return { arrowTop: top - arrowHeight, arrowLeft: left + (contentWidth / 2) - (arrowWidth / 2) }
    case 'left':
      return leftPosition;
    case 'right':
      return rightPosition;
    case 'start':
      return (isRTL) ? rightPosition : leftPosition;
    case 'end':
      return (isRTL) ? leftPosition : rightPosition;
    default:
      return { arrowTop: 0, arrowLeft: 0 }
  }
}

/**
 * Calculates the required top/left
 * values needed to position the popover
 * content on the side specified in the
 * `side` prop.
 */
const calculatePopoverSide = (
  side: PositionSide,
  triggerBoundingBox: ReferenceCoordinates,
  contentWidth: number,
  contentHeight: number,
  arrowWidth: number,
  arrowHeight: number,
  isRTL: boolean
) => {
  const sideLeft = {
    top: triggerBoundingBox.top,
    left: triggerBoundingBox.left - contentWidth - arrowWidth
  }
  const sideRight = {
    top: triggerBoundingBox.top,
    left: triggerBoundingBox.left + triggerBoundingBox.width + arrowWidth
  }

  switch (side) {
    case 'top':
      return {
        top: triggerBoundingBox.top - contentHeight - arrowHeight,
        left: triggerBoundingBox.left
      }
    case 'right':
      return sideRight;
    case 'bottom':
      return {
        top: triggerBoundingBox.top + triggerBoundingBox.height + arrowHeight,
        left: triggerBoundingBox.left
      }
    case 'left':
      return sideLeft;
    case 'start':
      return (isRTL) ? sideRight : sideLeft;
    case 'end':
      return (isRTL) ? sideLeft : sideRight;
  }
}

/**
 * Calculates the required top/left
 * offset values needed to provide the
 * correct alignment regardless while taking
 * into account the side the popover is on.
 */
const calculatePopoverAlign = (
  align: PositionAlign,
  side: PositionSide,
  triggerBoundingBox: ReferenceCoordinates,
  contentWidth: number,
  contentHeight: number
) => {
  switch (align) {
    case 'center':
      return calculatePopoverCenterAlign(side, triggerBoundingBox, contentWidth, contentHeight)
    case 'end':
      return calculatePopoverEndAlign(side, triggerBoundingBox, contentWidth, contentHeight)
    case 'start':
    default:
      return { top: 0, left: 0 };
  }
}

/**
 * Calculate the end alignment for
 * the popover. If side is on the x-axis
 * then the align values refer to the top
 * and bottom margins of the content.
 * If side is on the y-axis then the
 * align values refer to the left and right
 * margins of the content.
 */
const calculatePopoverEndAlign = (
  side: PositionSide,
  triggerBoundingBox: ReferenceCoordinates,
  contentWidth: number,
  contentHeight: number
) => {
  switch (side) {
    case 'start':
    case 'end':
    case 'left':
    case 'right':
      return {
        top: -(contentHeight - triggerBoundingBox.height),
        left: 0
      }
    case 'top':
    case 'bottom':
    default:
      return {
        top: 0,
        left: -(contentWidth - triggerBoundingBox.width)
      }
  }
}

/**
 * Calculate the center alignment for
 * the popover. If side is on the x-axis
 * then the align values refer to the top
 * and bottom margins of the content.
 * If side is on the y-axis then the
 * align values refer to the left and right
 * margins of the content.
 */
const calculatePopoverCenterAlign = (
  side: PositionSide,
  triggerBoundingBox: ReferenceCoordinates,
  contentWidth: number,
  contentHeight: number
) => {
  switch (side) {
    case 'start':
    case 'end':
    case 'left':
    case 'right':
      return {
        top: -((contentHeight / 2) - (triggerBoundingBox.height / 2)),
        left: 0
      }
    case 'top':
    case 'bottom':
    default:
      return {
        top: 0,
        left: -((contentWidth / 2) - (triggerBoundingBox.width / 2))
      }
  }
}

/**
 * Adjusts popover positioning coordinates
 * such that popover does not appear offscreen
 * or overlapping safe area bounds.
 */
export const calculateWindowAdjustment = (
  side: PositionSide,
  coordTop: number,
  coordLeft: number,
  bodyPadding: number,
  bodyWidth: number,
  bodyHeight: number,
  contentWidth: number,
  contentHeight: number,
  safeAreaMargin: number,
  contentOriginX: string,
  contentOriginY: string,
  triggerCoordinates?: ReferenceCoordinates,
  coordArrowTop = 0,
  coordArrowLeft = 0,
  arrowHeight = 0
): PopoverStyles => {
  let arrowTop = coordArrowTop;
  const arrowLeft = coordArrowLeft;
  let left = coordLeft;
  let top = coordTop;
  let bottom;
  let originX = contentOriginX;
  let originY = contentOriginY;
  let checkSafeAreaLeft = false;
  let checkSafeAreaRight = false;
  const triggerTop = triggerCoordinates ? triggerCoordinates.top + triggerCoordinates.height : bodyHeight / 2 - contentHeight / 2;
  const triggerHeight = triggerCoordinates ? triggerCoordinates.height : 0;
  let addPopoverBottomClass = false;

  /**
   * Adjust popover so it does not
   * go off the left of the screen.
   */
  if (left < bodyPadding + safeAreaMargin) {
    left = bodyPadding;
    checkSafeAreaLeft = true;
    originX = 'left';
  /**
   * Adjust popover so it does not
   * go off the right of the screen.
   */
  } else if (
    contentWidth + bodyPadding + left + safeAreaMargin > bodyWidth
  ) {
    checkSafeAreaRight = true;
    left = bodyWidth - contentWidth - bodyPadding;
    originX = 'right';
  }

  /**
   * Adjust popover so it does not
   * go off the top of the screen.
   * If popover is on the left or the right of
   * the trigger, then we should not adjust top
   * margins.
   */
  if (
    triggerTop + triggerHeight + contentHeight > bodyHeight &&
    (side === 'top' || side === 'bottom')
  ) {
    if (triggerTop - contentHeight > 0) {
      top = triggerTop - contentHeight - triggerHeight - (arrowHeight - 1);
      arrowTop = top + contentHeight;
      originY = 'bottom';
      addPopoverBottomClass = true;

    /**
     * If not enough room for popover to appear
     * above trigger, then cut it off.
     */
    } else {
      bottom = bodyPadding;
    }
  }

  return { top, left, bottom, originX, originY, checkSafeAreaLeft, checkSafeAreaRight, arrowTop, arrowLeft, addPopoverBottomClass };
}

export const shouldShowArrow = (
  side: PositionSide,
  didAdjustBounds = false,
  ev?: Event,
  trigger?: HTMLElement
) => {
  /**
   * If no event provided and
   * we do not have a trigger,
   * then this popover was likely
   * presented via the popoverController
   * or users called `present` manually.
   * In this case, the arrow should not be
   * shown as we do not have a reference.
   */
  if (!ev && !trigger) {
    return false;
  }

  /**
   * If popover is on the left or the right
   * of a trigger, but we needed to adjust the
   * popover due to screen bounds, then we should
   * hide the arrow as it will never be pointing
   * at the trigger.
   */
  if (side !== 'top' && side !== 'bottom' && didAdjustBounds) {
    return false;
  }

  return true;
}
