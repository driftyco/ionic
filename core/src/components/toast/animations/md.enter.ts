import { Animation } from '../../../interface';
import { createAnimation } from '../../../utils/animation/animation';
import { getElementRoot } from '../../../utils/helpers';

/**
 * MD Toast Enter Animation
 */
export const mdEnterAnimation = (baseEl: HTMLElement, position: string): Animation => {
  const baseAnimation = createAnimation();
  const wrapperAnimation = createAnimation();

  const root = getElementRoot(baseEl);
  const wrapperEl = root.querySelector('.toast-wrapper') as HTMLElement;

  const bottom = `calc(8px + var(--ion-safe-area-bottom, 0px))`;
  const top = `calc(8px + var(--ion-safe-area-top, 0px))`;

  wrapperAnimation.addElement(wrapperEl);

  switch (position) {
    case 'top':
      wrapperEl.style.top = top;
      wrapperAnimation.fromTo('opacity', 0.01, 1);
      break;
    case 'middle':
      const topPosition = Math.floor(
        baseEl.clientHeight / 2 - wrapperEl.clientHeight / 2
      );
      wrapperEl.style.top = `${topPosition}px`;
      wrapperAnimation.fromTo('opacity', 0.01, 1);
      break;
    default:
      wrapperEl.style.bottom = bottom;
      wrapperAnimation.fromTo('opacity', 0.01, 1);
      break;
  }
  return baseAnimation
    .easing('cubic-bezier(.36,.66,.04,1)')
    .duration(400)
    .addAnimation(wrapperAnimation);
};
