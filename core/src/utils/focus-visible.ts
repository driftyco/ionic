
const ION_FOCUSED = 'ion-focused';
const ION_FOCUSABLE = 'ion-focusable';
const FOCUS_KEYS = ['Tab', 'ArrowDown', 'Space', 'Escape', ' ', 'Shift', 'Enter', 'ArrowLeft', 'ArrowRight', 'ArrowUp', 'Home', 'End'];

export const startFocusVisible = (rootEl?: HTMLElement) => {

  let currentFocus: Element[] = [];
  let keyboardMode = true;

  const ref = (rootEl) ? rootEl.shadowRoot! : document;
  const root = (rootEl) ? rootEl : document.body;

  const setFocus = (elements: Element[]) => {
    currentFocus.forEach(el => el.classList.remove(ION_FOCUSED));
    elements.forEach(el => el.classList.add(ION_FOCUSED));
    currentFocus = elements;
  };
  const pointerDown = () => {
    keyboardMode = false;
    setFocus([]);
  };

  const onKeydown = (ev: any) => {
    keyboardMode = FOCUS_KEYS.includes(ev.key);
    if (!keyboardMode) {
      setFocus([]);
    }
  }
  const onFocusin = (ev: Event) => {
    if (keyboardMode && ev.composedPath) {
      const toFocus = ev.composedPath().filter((el: any) => {
        if (el.classList) {
          return el.classList.contains(ION_FOCUSABLE);
        }
        return false;
      }) as Element[];
      setFocus(toFocus);
    }
  }
  const onFocusout = () => {
    if (ref.activeElement === root) {
      setFocus([]);
    }
  }

  ref.addEventListener('keydown', onKeydown);
  ref.addEventListener('focusin', onFocusin);
  ref.addEventListener('focusout', onFocusout);
  ref.addEventListener('touchstart', pointerDown);
  ref.addEventListener('mousedown', pointerDown);

  return () => {
    ref.removeEventListener('keydown', onKeydown);
    ref.removeEventListener('focusin', onFocusin);
    ref.removeEventListener('focusout', onFocusout);
    ref.removeEventListener('touchstart', pointerDown);
    ref.removeEventListener('mousedown', pointerDown);
  }
};
