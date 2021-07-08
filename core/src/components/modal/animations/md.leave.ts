import { Animation } from '../../../interface';
import { createAnimation } from '../../../utils/animation/animation';
import { getElementRoot } from '../../../utils/helpers';

/**
 * Md Modal Leave Animation
 */
export const mdLeaveAnimation = (baseEl: HTMLElement): Animation => {
  const root = getElementRoot(baseEl);
  const baseAnimation = createAnimation();
  const backdropAnimation = createAnimation();
  const wrapperAnimation = createAnimation();
  const wrapperEl = root.querySelector('.modal-wrapper')!;

  backdropAnimation
    .addElement(root.querySelector('ion-backdrop')!)
    .fromTo('opacity', 'var(--backdrop-opacity)', 0.0);

  wrapperAnimation
    .addElement(wrapperEl)
    .keyframes([
      { offset: 0, opacity: 0.99, transform: 'translateY(0px)' },
      { offset: 1, opacity: 0, transform: 'translateY(40px)' }
    ]);

  return baseAnimation
    .addElement(baseEl)
    .easing('cubic-bezier(0.47,0,0.745,0.715)')
    .duration(200)
    .addAnimation([backdropAnimation, wrapperAnimation]);
};
