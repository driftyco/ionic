import { pointerCoord } from '../../helpers';

import { isFocused, relocateInput } from './common';
import { getScrollData } from './scroll-data';

export const enableScrollAssist = (
  componentEl: HTMLElement,
  inputEl: HTMLInputElement | HTMLTextAreaElement,
  contentEl: HTMLIonContentElement | null,
  footerEl: HTMLIonFooterElement | null,
  keyboardHeight: number
) => {
  let coord: any;
  const touchStart = (ev: Event) => {
    coord = pointerCoord(ev);
  };

  const touchEnd = (ev: Event) => {
    // input cover touchend/mouseup
    if (!coord) {
      return;
    }
    // get where the touchend/mouseup ended
    const endCoord = pointerCoord(ev);

    // focus this input if the pointer hasn't moved XX pixels
    // and the input doesn't already have focus
    if (!hasPointerMoved(6, coord, endCoord) && !isFocused(inputEl)) {
      ev.preventDefault();
      ev.stopPropagation();

      // begin the input focus process
      jsSetFocus(componentEl, inputEl, contentEl, footerEl, keyboardHeight);
    }
  };
  componentEl.addEventListener('touchstart', touchStart, true);
  componentEl.addEventListener('touchend', touchEnd, true);

  return () => {
    componentEl.removeEventListener('touchstart', touchStart, true);
    componentEl.removeEventListener('touchend', touchEnd, true);
  };
};

const jsSetFocus = async (
  componentEl: HTMLElement,
  inputEl: HTMLInputElement | HTMLTextAreaElement,
  contentEl: HTMLIonContentElement | null,
  footerEl: HTMLIonFooterElement | null,
  keyboardHeight: number
) => {
  if (!contentEl && !footerEl) { return; }
  const scrollData = getScrollData(componentEl, (contentEl || footerEl)!, keyboardHeight);

  if (contentEl && Math.abs(scrollData.scrollAmount) < 4) {
    // the text input is in a safe position that doesn't
    // require it to be scrolled into view, just set focus now
    inputEl.focus();
    return;
  }

  // temporarily move the focus to the focus holder so the browser
  // doesn't freak out while it's trying to get the input in place
  // at this point the native text input still does not have focus
  const inputLocation = inputEl.getBoundingClientRect();
  relocateInput(componentEl, inputEl, true, scrollData.inputSafeY);
  inputEl.focus();

  /* tslint:disable-next-line */
  if (typeof window !== 'undefined') {
    let scrollContentTimeout: any;
    const scrollContent = async () => {
      // clean up listeners and timeouts
      if (scrollContentTimeout !== undefined) {
        clearTimeout(scrollContentTimeout);
      }

      window.removeEventListener('ionKeyboardDidShow', scrollContent);

      // scroll the input into place
      if (contentEl) {
        await contentEl.scrollByPoint(0, scrollData.scrollAmount, scrollData.scrollDuration);
      }

      // the scroll view is in the correct position now
      // give the native text input focus
      relocateInput(componentEl, inputEl, false, scrollData.inputSafeY);

      // ensure this is the focused input
      inputEl.focus();
    };

    /**
     * If an input is below the fold, Safari is not going
     * to properly scroll to it until the webview is resized.
     * As a result, we need to wait for the keyboard to be shown
     * in order to properly scroll.
     */
    if (contentEl) {
      const scrollEl = await contentEl.getScrollElement();

      /**
       * An input is below the fold if it is not visible
       * on a screen that has scrollTop = 0. Inputs
       * that are partially visible are considered
       * above the fold in this case.
       */
      const offset = inputLocation.y + scrollEl.scrollTop;
      if (offset > scrollEl.clientHeight) {
        window.addEventListener('ionKeyboardDidShow', scrollContent);

        /**
         * This should only fire in 2 instances:
         * 1. The app is very slow.
         * 2. The app is running in a browser on an old OS
         * that does not support Ionic Keyboard Events
         */
        scrollContentTimeout = setTimeout(scrollContent, 1000);
        return;
      }
    }

    scrollContent();
  }
};

const hasPointerMoved = (threshold: number, startCoord: PointerCoordinates | undefined, endCoord: PointerCoordinates | undefined) => {
  if (startCoord && endCoord) {
    const deltaX = (startCoord.x - endCoord.x);
    const deltaY = (startCoord.y - endCoord.y);
    const distance = deltaX * deltaX + deltaY * deltaY;
    return distance > (threshold * threshold);
  }
  return false;
};

export interface PointerCoordinates {
  x: number;
  y: number;
}
