import { Animation } from '../../../interface';
import { createAnimation } from '../../../utils/animation/animation';
import { getElementRoot } from '../../../utils/helpers';

/**
 * Md Popover Leave Animation
 */
export const mdLeaveAnimation = (baseEl: HTMLElement): Animation => {
  const root = getElementRoot(baseEl);
  const contentEl = root.querySelector('.popover-content') as HTMLElement;
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
    .afterAddWrite(() => {
      baseEl.style.removeProperty('--width');
      baseEl.classList.remove('popover-bottom');

      contentEl.style.removeProperty('top');
      contentEl.style.removeProperty('left');
      contentEl.style.removeProperty('bottom');
      contentEl.style.removeProperty('transform-origin');
    })
    .duration(150)
    .addAnimation([backdropAnimation, wrapperAnimation]);
};
