import { Animation } from '../../../interface';
import { createAnimation } from '../../../utils/animation/animation';
import { getElementRoot } from '../../../utils/helpers';

/**
 * iOS Popover Leave Animation
 */
export const iosLeaveAnimation = (baseEl: HTMLElement): Animation => {
  const root = getElementRoot(baseEl);
  const baseAnimation = createAnimation();
  const backdropAnimation = createAnimation();
  const wrapperAnimation = createAnimation();

  backdropAnimation
    .addElement(root.querySelector('ion-backdrop')!)
    .fromTo('opacity', 'var(--backdrop-opacity)', 0);

  wrapperAnimation
    .addElement(root.querySelector('.popover-wrapper')!)
    .fromTo('opacity', 0.99, 0);

  return baseAnimation
    .easing('ease')
    .addElement(baseEl)
    .afterRemoveClass(['popover-bottom'])
    .duration(300)
    .addAnimation([backdropAnimation, wrapperAnimation]);
};
