import { Animation } from '../../../interface';
import { createAnimation } from '../../../utils/animation/animation';
import { getElementRoot } from '../../../utils/helpers';

/**
 * iOS Toast Enter Animation
 */
export const iosEnterAnimation = (baseEl: HTMLElement, position: string): Animation => {
  const baseAnimation = createAnimation();
  const wrapperAnimation = createAnimation();

  const root = getElementRoot(baseEl);
  const wrapperEl = root.querySelector('.toast-wrapper') as HTMLElement;

  const bottom = `calc(-10px - var(--ion-safe-area-bottom, 0px))`;
  const top = `calc(10px + var(--ion-safe-area-top, 0px))`;

  wrapperAnimation.addElement(wrapperEl);

  switch (position) {
    case 'top':
      wrapperAnimation.fromTo('transform', 'translateY(-100%)', `translateY(${top})`);
      break;
    case 'middle':
      const topPosition = Math.floor(
        baseEl.clientHeight / 2 - wrapperEl.clientHeight / 2
      );
      wrapperEl.style.top = `${topPosition}px`;
      wrapperAnimation.fromTo('opacity', 0.01, 1);
      break;
    default:
      wrapperAnimation.fromTo('transform', 'translateY(100%)', `translateY(${bottom})`);
      break;
  }
  return baseAnimation
    .easing('cubic-bezier(.155,1.105,.295,1.12)')
    .duration(400)
    .addAnimation(wrapperAnimation);
};
