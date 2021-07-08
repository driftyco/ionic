import { EventEmitter } from '@stencil/core';

import { Side } from '../interface';

declare const __zone_symbol__requestAnimationFrame: any;
declare const requestAnimationFrame: any;

export const transitionEndAsync = (el: HTMLElement | null, expectedDuration = 0) => {
  return new Promise(resolve => {
    transitionEnd(el, expectedDuration, resolve);
  });
};

/**
 * Allows developer to wait for a transition
 * to finish and fallback to a timer if the
 * transition is cancelled or otherwise
 * never finishes. Also see transitionEndAsync
 * which is an await-able version of this.
 */
const transitionEnd = (el: HTMLElement | null, expectedDuration = 0, callback: (ev?: TransitionEvent) => void) => {
  let unRegTrans: (() => void) | undefined;
  let animationTimeout: any;
  const opts: any = { passive: true };
  const ANIMATION_FALLBACK_TIMEOUT = 500;

  const unregister = () => {
    if (unRegTrans) {
      unRegTrans();
    }
  };

  const onTransitionEnd = (ev?: Event) => {
    if (ev === undefined || el === ev.target) {
      unregister();
      callback(ev as TransitionEvent);
    }
  };

  if (el) {
    el.addEventListener('webkitTransitionEnd', onTransitionEnd, opts);
    el.addEventListener('transitionend', onTransitionEnd, opts);
    animationTimeout = setTimeout(onTransitionEnd, expectedDuration + ANIMATION_FALLBACK_TIMEOUT);

    unRegTrans = () => {
      if (animationTimeout) {
        clearTimeout(animationTimeout);
        animationTimeout = undefined;
      }
      el.removeEventListener('webkitTransitionEnd', onTransitionEnd, opts);
      el.removeEventListener('transitionend', onTransitionEnd, opts);
    };
  }

  return unregister;
};

/**
 * Waits for a component to be ready for
 * both custom element and non-custom element builds.
 * If non-custom element build, el.componentOnReady
 * will be used.
 * For custom element builds, we wait a frame
 * so that the inner contents of the component
 * have a chance to render.
 *
 * Use this utility rather than calling
 * el.componentOnReady yourself.
 */
export const componentOnReady = (el: any, callback: any) => {
  if (el.componentOnReady) {
    el.componentOnReady().then((resolvedEl: any) => callback(resolvedEl));
  } else {
    raf(() => callback(el));
  }
}

/**
 * Elements inside of web components sometimes need to inherit global attributes
 * set on the host. For example, the inner input in `ion-input` should inherit
 * the `title` attribute that developers set directly on `ion-input`. This
 * helper function should be called in componentWillLoad and assigned to a variable
 * that is later used in the render function.
 *
 * This does not need to be reactive as changing attributes on the host element
 * does not trigger a re-render.
 */
export const inheritAttributes = (el: HTMLElement, attributes: string[] = []) => {
  const attributeObject: { [k: string]: any } = {};

  attributes.forEach(attr => {
    if (el.hasAttribute(attr)) {
      const value = el.getAttribute(attr);
      if (value !== null) {
        attributeObject[attr] = el.getAttribute(attr);
      }
      el.removeAttribute(attr);
    }
  });

  return attributeObject;
}

export const addEventListener = (el: any, eventName: string, callback: any, opts?: any) => {
  if (typeof (window as any) !== 'undefined') {
    const win = window as any;
    const config = win && win.Ionic && win.Ionic.config;
    if (config) {
      const ael = config.get('_ael');
      if (ael) {
        return ael(el, eventName, callback, opts);
      } else if (config._ael) {
        return config._ael(el, eventName, callback, opts);
      }
    }
  }

  return el.addEventListener(eventName, callback, opts);
};

export const removeEventListener = (el: any, eventName: string, callback: any, opts?: any) => {
  if (typeof (window as any) !== 'undefined') {
    const win = window as any;
    const config = win && win.Ionic && win.Ionic.config;
    if (config) {
      const rel = config.get('_rel');
      if (rel) {
        return rel(el, eventName, callback, opts);
      } else if (config._rel) {
        return config._rel(el, eventName, callback, opts);
      }
    }
  }

  return el.removeEventListener(eventName, callback, opts);
};

/**
 * Gets the root context of a shadow dom element
 * On newer browsers this will be the shadowRoot,
 * but for older browser this may just be the
 * element itself.
 *
 * Useful for whenever you need to explicitly
 * do "myElement.shadowRoot!.querySelector(...)".
 */
export const getElementRoot = (el: HTMLElement, fallback: HTMLElement = el) => {
  return el.shadowRoot || fallback;
};

/**
 * Patched version of requestAnimationFrame that avoids ngzone
 * Use only when you know ngzone should not run
 */
export const raf = (h: any) => {
  if (typeof __zone_symbol__requestAnimationFrame === 'function') {
    return __zone_symbol__requestAnimationFrame(h);
  }
  if (typeof requestAnimationFrame === 'function') {
    return requestAnimationFrame(h);
  }
  return setTimeout(h);
};

export const hasShadowDom = (el: HTMLElement) => {
  return !!el.shadowRoot && !!(el as any).attachShadow;
};

export const findItemLabel = (componentEl: HTMLElement): HTMLIonLabelElement | null => {
  const itemEl = componentEl.closest('ion-item');
  if (itemEl) {
    return itemEl.querySelector('ion-label');
  }
  return null;
};

/**
 * This method is used for Ionic's input components that use Shadow DOM. In
 * order to properly label the inputs to work with screen readers, we need
 * to get the text content of the label outside of the shadow root and pass
 * it to the input inside of the shadow root.
 *
 * Referencing label elements by id from outside of the component is
 * impossible due to the shadow boundary, read more here:
 * https://developer.salesforce.com/blogs/2020/01/accessibility-for-web-components.html
 *
 * @param componentEl The shadow element that needs the aria label
 * @param inputId The unique identifier for the input
 */
export const getAriaLabel = (componentEl: HTMLElement, inputId: string): { label: Element | null, labelId: string, labelText: string | null | undefined } => {
  let labelText;

  // If the user provides their own label via the aria-labelledby attr
  // we should use that instead of looking for an ion-label
  const labelledBy = componentEl.getAttribute('aria-labelledby');

  // Grab the id off of the component in case they are using
  // a custom label using the label element
  const componentId = componentEl.id;

  let labelId = labelledBy !== null && labelledBy.trim() !== ''
    ? labelledBy
    : inputId + '-lbl';

  let label = labelledBy !== null && labelledBy.trim() !== ''
    ? document.getElementById(labelledBy)
    : findItemLabel(componentEl);

  if (label) {
    if (labelledBy === null) {
      label.id = labelId;
    }

    labelText = label.textContent;
    label.setAttribute('aria-hidden', 'true');

  // if there is no label, check to see if the user has provided
  // one by setting an id on the component and using the label element
  } else if (componentId.trim() !== '') {
    label = document.querySelector(`label[for="${componentId}"]`);

    if (label) {
      if (label.id !== '') {
        labelId = label.id;
      } else {
        label.id = labelId = `${componentId}-lbl`;
      }

      labelText = label.textContent;
    }
  }

  return { label, labelId, labelText };
};

/**
 * This method is used to add a hidden input to a host element that contains
 * a Shadow DOM. It does not add the input inside of the Shadow root which
 * allows it to be picked up inside of forms. It should contain the same
 * values as the host element.
 *
 * @param always Add a hidden input even if the container does not use Shadow
 * @param container The element where the input will be added
 * @param name The name of the input
 * @param value The value of the input
 * @param disabled If true, the input is disabled
 */
export const renderHiddenInput = (always: boolean, container: HTMLElement, name: string, value: string | undefined | null, disabled: boolean) => {
  if (always || hasShadowDom(container)) {
    let input = container.querySelector('input.aux-input') as HTMLInputElement | null;
    if (!input) {
      input = container.ownerDocument!.createElement('input');
      input.type = 'hidden';
      input.classList.add('aux-input');
      container.appendChild(input);
    }
    input.disabled = disabled;
    input.name = name;
    input.value = value || '';
  }
};

export const clamp = (min: number, n: number, max: number) => {
  return Math.max(min, Math.min(n, max));
};

export const assert = (actual: any, reason: string) => {
  if (!actual) {
    const message = 'ASSERT: ' + reason;
    console.error(message);
    debugger; // tslint:disable-line
    throw new Error(message);
  }
};

export const now = (ev: UIEvent) => {
  return ev.timeStamp || Date.now();
};

export const pointerCoord = (ev: any): { x: number, y: number } => {
  // get X coordinates for either a mouse click
  // or a touch depending on the given event
  if (ev) {
    const changedTouches = ev.changedTouches;
    if (changedTouches && changedTouches.length > 0) {
      const touch = changedTouches[0];
      return { x: touch.clientX, y: touch.clientY };
    }
    if (ev.pageX !== undefined) {
      return { x: ev.pageX, y: ev.pageY };
    }
  }
  return { x: 0, y: 0 };
};

/**
 * @hidden
 * Given a side, return if it should be on the end
 * based on the value of dir
 * @param side the side
 * @param isRTL whether the application dir is rtl
 */
export const isEndSide = (side: Side): boolean => {
  const isRTL = document.dir === 'rtl';
  switch (side) {
    case 'start': return isRTL;
    case 'end': return !isRTL;
    default:
      throw new Error(`"${side}" is not a valid value for [side]. Use "start" or "end" instead.`);
  }
};

export const deferEvent = (event: EventEmitter): EventEmitter => {
  return debounceEvent(event, 0);
};

export const debounceEvent = (event: EventEmitter, wait: number): EventEmitter => {
  const original = (event as any)._original || event;
  return {
    _original: event,
    emit: debounce(original.emit.bind(original), wait)
  } as EventEmitter;
};

export const debounce = (func: (...args: any[]) => void, wait = 0) => {
  let timer: any;
  return (...args: any[]): any => {
    clearTimeout(timer);
    timer = setTimeout(func, wait, ...args);
  };
};
