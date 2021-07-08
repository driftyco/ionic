import { Animation } from '../../../interface';
import { createAnimation } from '../../../utils/animation/animation';
import { getElementRoot } from '../../../utils/helpers';
import { calculateWindowAdjustment, getArrowDimensions, getPopoverDimensions, getPopoverPosition, shouldShowArrow } from '../utils';

const POPOVER_IOS_BODY_PADDING = 5;

/**
 * iOS Popover Enter Animation
 */
export const iosEnterAnimation = (baseEl: HTMLElement, opts?: any): Animation => {
  const { event: ev, size, trigger, reference, side, align } = opts;
  const doc = (baseEl.ownerDocument as any);
  const isRTL = doc.dir === 'rtl';
  const bodyWidth = doc.defaultView.innerWidth;
  const bodyHeight = doc.defaultView.innerHeight;

  const root = getElementRoot(baseEl);
  const contentEl = root.querySelector('.popover-content') as HTMLElement;
  const arrowEl = root.querySelector('.popover-arrow') as HTMLElement | null;

  const referenceSizeEl = trigger || ev?.detail?.ionShadowTarget || ev?.target;
  const { contentWidth, contentHeight } = getPopoverDimensions(size, contentEl, referenceSizeEl);
  const { arrowWidth, arrowHeight } = getArrowDimensions(arrowEl);

  const defaultPosition = {
    top: bodyHeight / 2 - contentHeight / 2,
    left: bodyWidth / 2 - contentWidth / 2,
    originX: isRTL ? 'right' : 'left',
    originY: 'top'
  }

  const results = getPopoverPosition(isRTL, contentWidth, contentHeight, arrowWidth, arrowHeight, reference, side, align, defaultPosition, trigger, ev);

  const padding = size === 'cover' ? 0 : POPOVER_IOS_BODY_PADDING;

  const { originX, originY, top, left, bottom, checkSafeAreaLeft, checkSafeAreaRight, arrowTop, arrowLeft, addPopoverBottomClass } = calculateWindowAdjustment(side, results.top, results.left, padding, bodyWidth, bodyHeight, contentWidth, contentHeight, 25, results.originX, results.originY, results.referenceCoordinates, results.arrowTop, results.arrowLeft, arrowHeight);

  const baseAnimation = createAnimation();
  const backdropAnimation = createAnimation();
  const wrapperAnimation = createAnimation();

  backdropAnimation
    .addElement(root.querySelector('ion-backdrop')!)
    .fromTo('opacity', 0.01, 'var(--backdrop-opacity)')
    .beforeStyles({
      'pointer-events': 'none'
    })
    .afterClearStyles(['pointer-events']);

  wrapperAnimation
    .addElement(root.querySelector('.popover-wrapper')!)
    .fromTo('opacity', 0.01, 1);

  return baseAnimation
    .easing('ease')
    .duration(100)
    .beforeAddWrite(() => {
      if (size === 'cover') {
        baseEl.style.setProperty('--width', `${contentWidth}px`);
      }

      if (addPopoverBottomClass) {
        baseEl.classList.add('popover-bottom');
      }

      if (bottom !== undefined) {
        contentEl.style.setProperty('bottom', `${bottom}px`);
      }

      const safeAreaLeft = ' + var(--ion-safe-area-left, 0)';
      const safeAreaRight = ' - var(--ion-safe-area-right, 0)';

      let leftValue = `${left}px`;

      if (checkSafeAreaLeft) {
        leftValue = `${left}px${safeAreaLeft}`;
      }
      if (checkSafeAreaRight) {
        leftValue = `${left}px${safeAreaRight}`;
      }

      contentEl.style.setProperty('top', `calc(${top}px + var(--offset-y, 0))`);
      contentEl.style.setProperty('left', `calc(${leftValue} + var(--offset-x, 0))`);
      contentEl.style.setProperty('transform-origin', `${originY} ${originX}`);

      if (arrowEl !== null) {
        const didAdjustBounds = results.top !== top || results.left !== left;
        const showArrow = shouldShowArrow(side, didAdjustBounds, ev, trigger);

        if (showArrow) {
          arrowEl.style.setProperty('top', `calc(${arrowTop}px + var(--offset-y, 0))`);
          arrowEl.style.setProperty('left', `calc(${arrowLeft}px + var(--offset-x, 0))`);
        } else {
          arrowEl.style.setProperty('display', 'none');
        }
      }
    })
    .addAnimation([backdropAnimation, wrapperAnimation]);
};
