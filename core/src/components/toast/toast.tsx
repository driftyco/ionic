import { Component, ComponentInterface, Element, Event, EventEmitter, Host, Method, Prop, h } from '@stencil/core';

import { getIonMode } from '../../global/ionic-global';
import { AnimationBuilder, Color, CssClassMap, Gesture, GestureDetail, OverlayEventDetail, OverlayInterface, ToastButton } from '../../interface';
import { dismiss, eventMethod, isCancel, prepareOverlay, present, safeCall } from '../../utils/overlays';
import { IonicSafeString, sanitizeDOMString } from '../../utils/sanitization';
import { createColorClasses, getClassMap } from '../../utils/theme';

import { iosEnterAnimation } from './animations/ios.enter';
import { iosLeaveAnimation } from './animations/ios.leave';
import { mdEnterAnimation } from './animations/md.enter';
import { mdLeaveAnimation } from './animations/md.leave';

/**
 * @virtualProp {"ios" | "md"} mode - The mode determines which platform styles to use.
 *
 * @part button - Any button element that is displayed inside of the toast.
 * @part container - The element that wraps all child elements.
 * @part header - The header text of the toast.
 * @part message - The body text of the toast.
 */
@Component({
  tag: 'ion-toast',
  styleUrls: {
    ios: 'toast.ios.scss',
    md: 'toast.md.scss'
  },
  shadow: true
})
export class Toast implements ComponentInterface, OverlayInterface {

  private animation?: any;
  private durationTimeout: any;
  private gesture?: Gesture;

  presented = false;

  @Element() el!: HTMLIonToastElement;

  /**
   * @internal
   */
  @Prop() overlayIndex!: number;

  /**
   * The color to use from your application's color palette.
   * Default options are: `"primary"`, `"secondary"`, `"tertiary"`, `"success"`, `"warning"`, `"danger"`, `"light"`, `"medium"`, and `"dark"`.
   * For more information on colors, see [theming](/docs/theming/basics).
   */
  @Prop({ reflect: true }) color?: Color;

  /**
   * Animation to use when the toast is presented.
   */
  @Prop() enterAnimation?: AnimationBuilder;

  /**
   * Animation to use when the toast is dismissed.
   */
  @Prop() leaveAnimation?: AnimationBuilder;

  /**
   * Additional classes to apply for custom CSS. If multiple classes are
   * provided they should be separated by spaces.
   */
  @Prop() cssClass?: string | string[];

  /**
   * How many milliseconds to wait before hiding the toast. By default, it will show
   * until `dismiss()` is called.
   */
  @Prop() duration = 0;

  /**
   * Header to be shown in the toast.
   */
  @Prop() header?: string;

  /**
   * Message to be shown in the toast.
   */
  @Prop() message?: string | IonicSafeString;

  /**
   * If `true`, the keyboard will be automatically dismissed when the overlay is presented.
   */
  @Prop() keyboardClose = false;

  /**
   * The position of the toast on the screen.
   */
  @Prop() position: 'top' | 'bottom' | 'middle' = 'bottom';

  /**
   * The direction of the swipe gesture to dismiss the toast.
   */
  @Prop() swipeGesture: undefined | 'left' | 'right' | 'top' | 'bottom' | 'horizontal' | 'vertical' = undefined;

  /**
   * An array of buttons for the toast.
   */
  @Prop() buttons?: (ToastButton | string)[];

  /**
   * If `true`, the toast will be translucent.
   * Only applies when the mode is `"ios"` and the device supports
   * [`backdrop-filter`](https://developer.mozilla.org/en-US/docs/Web/CSS/backdrop-filter#Browser_compatibility).
   */
  @Prop() translucent = false;

  /**
   * If `true`, the toast will animate.
   */
  @Prop() animated = true;

  /**
   * Emitted after the toast has presented.
   */
  @Event({ eventName: 'ionToastDidPresent' }) didPresent!: EventEmitter<void>;

  /**
   * Emitted before the toast has presented.
   */
  @Event({ eventName: 'ionToastWillPresent' }) willPresent!: EventEmitter<void>;

  /**
   * Emitted before the toast has dismissed.
   */
  @Event({ eventName: 'ionToastWillDismiss' }) willDismiss!: EventEmitter<OverlayEventDetail>;

  /**
   * Emitted after the toast has dismissed.
   */
  @Event({ eventName: 'ionToastDidDismiss' }) didDismiss!: EventEmitter<OverlayEventDetail>;

  async connectedCallback() {
    prepareOverlay(this.el);
    if (this.swipeGesture !== undefined) {
      await this.setupSwipeAnimation();
      this.setupSwipeGesture();
    }
  }

  disconnectedCallback() {
    if (this.animation) {
      this.animation.destroy();
      this.animation = undefined;
    }
    if (this.gesture) {
      this.gesture.destroy();
      this.gesture = undefined;
    }
  }

  /**
   * Present the toast overlay after it has been created.
   */
  @Method()
  async present(): Promise<void> {
    await present(this, 'toastEnter', iosEnterAnimation, mdEnterAnimation, this.position);

    if (this.duration > 0) {
      this.durationTimeout = setTimeout(() => this.dismiss(undefined, 'timeout'), this.duration);
    }
  }

  /**
   * Dismiss the toast overlay after it has been presented.
   *
   * @param data Any data to emit in the dismiss events.
   * @param role The role of the element that is dismissing the toast.
   * This can be useful in a button handler for determining which button was
   * clicked to dismiss the toast.
   * Some examples include: ``"cancel"`, `"destructive"`, "selected"`, and `"backdrop"`.
   */
  @Method()
  dismiss(data?: any, role?: string): Promise<boolean> {
    if (this.durationTimeout) {
      clearTimeout(this.durationTimeout);
    }
    return dismiss(this, data, role, 'toastLeave', iosLeaveAnimation, mdLeaveAnimation, this.position);
  }

  /**
   * Returns a promise that resolves when the toast did dismiss.
   */
  @Method()
  onDidDismiss<T = any>(): Promise<OverlayEventDetail<T>> {
    return eventMethod(this.el, 'ionToastDidDismiss');
  }

  /**
   * Returns a promise that resolves when the toast will dismiss.
   */
  @Method()
  onWillDismiss<T = any>(): Promise<OverlayEventDetail<T>> {
    return eventMethod(this.el, 'ionToastWillDismiss');
  }

  private getButtons(): ToastButton[] {
    const buttons = this.buttons
      ? this.buttons.map(b => {
        return (typeof b === 'string')
          ? { text: b }
          : b;
      })
      : [];

    return buttons;
  }

  private async buttonClick(button: ToastButton) {
    const role = button.role;
    if (isCancel(role)) {
      return this.dismiss(undefined, role);
    }
    const shouldDismiss = await this.callButtonHandler(button);
    if (shouldDismiss) {
      return this.dismiss(undefined, role);
    }
    return Promise.resolve();
  }

  private async callButtonHandler(button: ToastButton | undefined) {
    if (button && button.handler) {
      // a handler has been provided, execute it
      // pass the handler the values from the inputs
      try {
        const rtn = await safeCall(button.handler);
        if (rtn === false) {
          // if the return value of the handler is false then do not dismiss
          return false;
        }
      } catch (e) {
        console.error(e);
      }
    }
    return true;
  }

  private dispatchCancelHandler = (ev: CustomEvent) => {
    const role = ev.detail.role;
    if (isCancel(role)) {
      const cancelButton = this.getButtons().find(b => b.role === 'cancel');
      this.callButtonHandler(cancelButton);
    }
  }

  private async setupSwipeAnimation() {
    this.animation = (await import('../../utils/animation/animation')).createAnimation();
    this.animation
      .addElement(this.el)
      .duration(2000)
      .iterations(1);
    this.setGestureDirection(this.swipeGesture! as 'left' | 'right' | 'top' | 'bottom');
  }

  private setGestureDirection(direction: 'left' | 'right' | 'top' | 'bottom') {
    let translateTarget: string;
    switch (direction) {
      case 'left':
        translateTarget = 'translate(-100%, 0)';
        break;
      case 'right':
        translateTarget = 'translate(100%, 0)';
        break;
      case 'top':
        translateTarget = 'translate(0, -100%)';
        break;
      case 'bottom':
        translateTarget = 'translate(0, 100%)';
        break;
    }
    this.animation
      .keyframes([
        { transform: 'translate(0, 0)', opacity: 1, offset: 0 },
        { transform: translateTarget, opacity: 0, offset: 1 },
      ]);
  }

  private async setupSwipeGesture() {
    this.gesture = (await import('../../utils/gesture')).createGesture({
      el: this.el,
      gestureName: 'drag',
      direction: this.swipeGesture === 'left' || this.swipeGesture === 'right' || this.swipeGesture === 'horizontal' ? 'x' : 'y',
      onStart: () => {
        this.animation.progressStart(false, 0);
      },
      onMove: (detail: GestureDetail) => {
        let stepValue = 0;
        switch (this.swipeGesture) {
          case 'left':
            stepValue = this.clamp((detail.startX - detail.currentX) / this.el.clientWidth);
            break;
          case 'right':
            stepValue = this.clamp((detail.currentX - detail.startX) / this.el.clientWidth);
            break;
          case 'top':
            stepValue = this.clamp((detail.startY - detail.currentY) / this.el.clientHeight);
            break;
          case 'bottom':
            stepValue = this.clamp((detail.currentY - detail.startY) / this.el.clientHeight);
            break;
          case 'horizontal':
            stepValue = this.clamp((detail.startX - detail.currentX) / this.el.clientWidth) ||
              this.clamp((detail.currentX - detail.startX) / this.el.clientWidth);
            break;
          case 'vertical':
            stepValue = this.clamp((detail.startY - detail.currentY) / this.el.clientHeight) ||
              this.clamp((detail.currentY - detail.startY) / this.el.clientHeight);
            break;
        }

        this.animation.progressStep(stepValue);
      },
      onEnd: (detail: GestureDetail) => {
        let stepValue = 0;
        let velocity = 0;
        let z = 0;
        let shouldComplete = false;
        const toastWrapper = this.el.shadowRoot!.querySelector('.toast-wrapper')!;
        switch (this.swipeGesture) {
          case 'left':
            stepValue = this.clamp((detail.startX - detail.currentX) / this.el.clientWidth);
            velocity = detail.velocityX;
            z = toastWrapper.clientWidth / 2.0;
            shouldComplete = velocity <= 0 && (velocity < -0.2 || detail.deltaX < -z);
            break;
          case 'right':
            stepValue = this.clamp((detail.currentX - detail.startX) / this.el.clientWidth);
            velocity = detail.velocityX;
            z = toastWrapper.clientWidth / 2.0;
            shouldComplete = velocity >= 0 && (velocity > 0.2 || detail.deltaX > z);
            break;
          case 'top':
            stepValue = this.clamp((detail.startY - detail.currentY) / this.el.clientHeight);
            velocity = detail.velocityY;
            z = toastWrapper.clientHeight / 2.0;
            shouldComplete = velocity <= 0 && (velocity < -0.2 || detail.deltaY < -z);
            break;
          case 'bottom':
            stepValue = this.clamp((detail.currentY - detail.startY) / this.el.clientHeight);
            velocity = detail.velocityY;
            z = toastWrapper.clientHeight / 2.0;
            shouldComplete = velocity >= 0 && (velocity > 0.2 || detail.deltaY > z);
            break;
          case 'horizontal':
            const stepValueLeft = this.clamp((detail.startX - detail.currentX) / this.el.clientWidth);
            const stepValueRight = this.clamp((detail.currentX - detail.startX) / this.el.clientWidth);
            stepValue = stepValueLeft + stepValueRight;
            velocity = detail.velocityX;
            z = toastWrapper.clientWidth / 2.0;

            shouldComplete = stepValueRight > 0 ?
              velocity >= 0 && (velocity > 0.2 || detail.deltaX > z) :
              velocity <= 0 && (velocity < -0.2 || detail.deltaX < -z);
            break;
          case 'vertical':
            const stepValueTop = this.clamp((detail.startY - detail.currentY) / this.el.clientHeight);
            const stepValueBottom = this.clamp((detail.currentY - detail.startY) / this.el.clientHeight);
            stepValue = stepValueBottom + stepValueTop;
            velocity = detail.velocityX;
            z = toastWrapper.clientWidth / 2.0;

            shouldComplete = stepValueTop > 0 ?
              velocity <= 0 && (velocity < -0.2 || detail.deltaY < -z) :
              velocity >= 0 && (velocity > 0.2 || detail.deltaY > z);
            break;
        }

        this.animation
          .onFinish(
            () => shouldComplete && this.dismiss()
          )
          .progressEnd((shouldComplete) ? 1 : 0, stepValue, 300);
      }
    });
    this.gesture.enable(true);
  }

  private clamp = (val: number) => {
    if (val > 1) {
      return 1;
    } else if (val < 0) {
      return 0;
    }
    return val;
  }

  renderButtons(buttons: ToastButton[], side: 'start' | 'end') {
    if (buttons.length === 0) {
      return;
    }

    const mode = getIonMode(this);
    const buttonGroupsClasses = {
      'toast-button-group': true,
      [`toast-button-group-${side}`]: true
    };
    return (
      <div class={buttonGroupsClasses}>
        {buttons.map(b =>
          <button type="button" class={buttonClass(b)} tabIndex={0} onClick={() => this.buttonClick(b)} part="button">
            <div class="toast-button-inner">
              {b.icon &&
                <ion-icon
                  icon={b.icon}
                  slot={b.text === undefined ? 'icon-only' : undefined}
                  class="toast-icon"
                />}
              {b.text}
            </div>
            {mode === 'md' && <ion-ripple-effect type={b.icon !== undefined && b.text === undefined ? 'unbounded' : 'bounded'}></ion-ripple-effect>}
          </button>
        )}
      </div>
    );
  }

  render() {
    const allButtons = this.getButtons();
    const startButtons = allButtons.filter(b => b.side === 'start');
    const endButtons = allButtons.filter(b => b.side !== 'start');
    const mode = getIonMode(this);
    const wrapperClass = {
      'toast-wrapper': true,
      [`toast-${this.position}`]: true
    };

    return (
      <Host
        style={{
          zIndex: `${60000 + this.overlayIndex}`,
        }}
        class={createColorClasses(this.color, {
          [mode]: true,
          ...getClassMap(this.cssClass),
          'toast-translucent': this.translucent
        })}
        tabindex="-1"
        onIonToastWillDismiss={this.dispatchCancelHandler}
      >
        <div class={wrapperClass}>
          <div class="toast-container" part="container">
            {this.renderButtons(startButtons, 'start')}

            <div class="toast-content">
              {this.header !== undefined &&
                <div class="toast-header" part="header">{this.header}</div>
              }
              {this.message !== undefined &&
                <div class="toast-message" part="message" innerHTML={sanitizeDOMString(this.message)}></div>
              }
            </div>

            {this.renderButtons(endButtons, 'end')}
          </div>
        </div>
      </Host>
    );
  }
}

const buttonClass = (button: ToastButton): CssClassMap => {
  return {
    'toast-button': true,
    'toast-button-icon-only': button.icon !== undefined && button.text === undefined,
    [`toast-button-${button.role}`]: button.role !== undefined,
    'ion-focusable': true,
    'ion-activatable': true,
    ...getClassMap(button.cssClass)
  };
};
