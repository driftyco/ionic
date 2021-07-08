import { Animation } from '../../../interface';
import { createAnimation } from '../../../utils/animation/animation';
import { getElementRoot } from '../../../utils/helpers';

/**
 * md Toast Leave Animation
 */
export const mdLeaveAnimation = (baseEl: HTMLElement): Animation => {
  const baseAnimation = createAnimation();
  const wrapperAnimation = createAnimation();

  const root = getElementRoot(baseEl);
  const wrapperEl = root.querySelector('.toast-wrapper') as HTMLElement;

  wrapperAnimation
    .addElement(wrapperEl)
    .fromTo('opacity', 0.99, 0);

  return baseAnimation
    .easing('cubic-bezier(.36,.66,.04,1)')
    .duration(300)
    .addAnimation(wrapperAnimation);
};
