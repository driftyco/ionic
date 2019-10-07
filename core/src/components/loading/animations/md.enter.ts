import { IonicAnimation } from '../../../interface';
import { createAnimation } from '../../../utils/animation/animation';

/**
 * Md Loading Enter Animation
 */
export const mdEnterAnimation = (baseEl: HTMLElement): IonicAnimation => {
  const baseAnimation = createAnimation();
  const backdropAnimation = createAnimation();
  const wrapperAnimation = createAnimation();

  const backdropVar = getComputedStyle(baseEl).getPropertyValue('--ion-backdrop-opacity');
  const backdropOpacity = backdropVar !== '' ? backdropVar : 0.32;

  backdropAnimation
    .addElement(baseEl.querySelector('ion-backdrop'))
    .fromTo('opacity', 0.01, backdropOpacity);

  wrapperAnimation
    .addElement(baseEl.querySelector('.loading-wrapper'))
    .keyframes([
      { offset: 0, opacity: 0.01, transform: 'scale(1.1)' },
      { offset: 1, opacity: 1, transform: 'scale(1)' }
    ]);

  return baseAnimation
    .addElement(baseEl)
    .easing('ease-in-out')
    .duration(200)
    .addAnimation([backdropAnimation, wrapperAnimation]);
};
