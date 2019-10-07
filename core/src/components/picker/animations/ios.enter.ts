import { IonicAnimation } from '../../../interface';
import { createAnimation } from '../../../utils/animation/animation';

/**
 * iOS Picker Enter Animation
 */
export const iosEnterAnimation = (baseEl: HTMLElement): IonicAnimation => {
  const baseAnimation = createAnimation();
  const backdropAnimation = createAnimation();
  const wrapperAnimation = createAnimation();

  const backdropVar = getComputedStyle(baseEl).getPropertyValue('--ion-backdrop-opacity');
  const backdropOpacity = backdropVar !== '' ? backdropVar : 0.26;

  backdropAnimation
    .addElement(baseEl.querySelector('ion-backdrop'))
    .fromTo('opacity', 0.01, backdropOpacity);

  wrapperAnimation
    .addElement(baseEl.querySelector('.picker-wrapper'))
    .fromTo('transform', 'translateY(100%)', 'translateY(0%)');

  return baseAnimation
    .addElement(baseEl)
    .easing('cubic-bezier(.36,.66,.04,1)')
    .duration(400)
    .addAnimation([backdropAnimation, wrapperAnimation]);
};
