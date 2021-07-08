import { Component, ComponentInterface, Element, Event, EventEmitter, Host, Method, Prop, State, Watch, h } from '@stencil/core';

import { getIonMode } from '../../global/ionic-global';
import { AnimationBuilder, ComponentProps, ComponentRef, FrameworkDelegate, OverlayEventDetail, OverlayInterface, PopoverSize, PositionAlign, PositionReference, PositionSide, TriggerAction } from '../../interface';
import { CoreDelegate, attachComponent, detachComponent } from '../../utils/framework-delegate';
import { addEventListener, raf } from '../../utils/helpers';
import { BACKDROP, dismiss, eventMethod, focusFirstDescendant, prepareOverlay, present } from '../../utils/overlays';
import { isPlatform } from '../../utils/platform';
import { getClassMap } from '../../utils/theme';
import { deepReady } from '../../utils/transition';

import { iosEnterAnimation } from './animations/ios.enter';
import { iosLeaveAnimation } from './animations/ios.leave';
import { mdEnterAnimation } from './animations/md.enter';
import { mdLeaveAnimation } from './animations/md.leave';
import { configureDismissInteraction, configureKeyboardInteraction, configureTriggerInteraction } from './utils';

/**
 * @virtualProp {"ios" | "md"} mode - The mode determines which platform styles to use.
 *
 * @slot - Content is placed inside of the `.popover-content` element.
 *
 * @part backdrop - The `ion-backdrop` element.
 * @part arrow - The arrow that points to the reference element. Only applies on `ios` mode.
 * @part content - The wrapper element for the default slot.
 */
@Component({
  tag: 'ion-popover',
  styleUrls: {
    ios: 'popover.ios.scss',
    md: 'popover.md.scss'
  },
  shadow: true
})
export class Popover implements ComponentInterface, OverlayInterface {

  private usersElement?: HTMLElement;
  private triggerEl?: HTMLElement | null;
  private parentPopover: HTMLIonPopoverElement | null = null;
  private popoverIndex = popoverIds++;
  private popoverId?: string;
  private coreDelegate: FrameworkDelegate = CoreDelegate();
  private currentTransition?: Promise<any>;
  private destroyTriggerInteraction?: () => void;
  private destroyKeyboardInteraction?: () => void;
  private destroyDismissInteraction?: () => void;

  private inline = false;
  private workingDelegate?: FrameworkDelegate;

  private triggerEv?: Event;
  private focusDescendantOnPresent = false;

  lastFocus?: HTMLElement;

  @State() presented = false;

  @Element() el!: HTMLIonPopoverElement;

  /** @internal */
  @Prop() delegate?: FrameworkDelegate;

  /** @internal */
  @Prop() overlayIndex!: number;

  /**
   * Animation to use when the popover is presented.
   */
  @Prop() enterAnimation?: AnimationBuilder;

  /**
   * Animation to use when the popover is dismissed.
   */
  @Prop() leaveAnimation?: AnimationBuilder;

  /**
   * The component to display inside of the popover.
   * You only need to use this if you are not using
   * a JavaScript framework. Otherwise, you can just
   * slot your component inside of `ion-popover`.
   */
  @Prop() component?: ComponentRef;

  /**
   * The data to pass to the popover component.
   * You only need to use this if you are not using
   * a JavaScript framework. Otherwise, you can just
   * set the props directly on your component.
   */
  @Prop() componentProps?: ComponentProps;

  /**
   * If `true`, the keyboard will be automatically dismissed when the overlay is presented.
   */
  @Prop() keyboardClose = true;

  /**
   * Additional classes to apply for custom CSS. If multiple classes are
   * provided they should be separated by spaces.
   * @internal
   */
  @Prop() cssClass?: string | string[];

  /**
   * If `true`, the popover will be dismissed when the backdrop is clicked.
   */
  @Prop() backdropDismiss = true;

  /**
   * The event to pass to the popover animation.
   */
  @Prop() event: any;

  /**
   * If `true`, a backdrop will be displayed behind the popover.
   */
  @Prop() showBackdrop = true;

  /**
   * If `true`, the popover will be translucent.
   * Only applies when the mode is `"ios"` and the device supports
   * [`backdrop-filter`](https://developer.mozilla.org/en-US/docs/Web/CSS/backdrop-filter#Browser_compatibility).
   */
  @Prop() translucent = false;

  /**
   * If `true`, the popover will animate.
   */
  @Prop() animated = true;

  /**
   * Describes what kind of interaction with the trigger that
   * should cause the popover to open. Does not apply when the `trigger`
   * property is `undefined`.
   * If `'click'`, the popover will be presented when the trigger is left clicked.
   * If `'hover'`, the popover will be presented when a pointer hovers over the trigger.
   * If `'context-menu'`, the popover will be presented when the trigger is right
   * clicked on desktop and long pressed on mobile. This will also prevent your
   * device's normal context menu from appearing.
   */
  @Prop() triggerAction: TriggerAction = 'click';

  /**
   * An ID corresponding to the trigger element that
   * causes the popover to open. Use the `trigger-action`
   * property to customize the interaction that results in
   * the popover opening.
   */
  @Prop() trigger: string | undefined;

  /**
   * Describes how to calculate the popover width.
   * If `'cover'`, the popover width will match the width of the trigger.
   * If `'auto'`, the popover width will be determined by the content in
   * the popover.
   */
  @Prop() size: PopoverSize = 'auto';

  /**
   * If `true`, the popover will be automatically
   * dismissed when the content has been clicked.
   */
  @Prop() dismissOnSelect = false;

  /**
   * Describes what to position the popover relative to.
   * If `'trigger'`, the popover will be positioned relative
   * to the trigger button. If passing in an event, this is
   * determined via event.target.
   * If `'event'`, the popover will be positioned relative
   * to the x/y coordinates of the trigger action. If passing
   * in an event, this is determined via event.clientX and event.clientY.
   */
  @Prop() reference: PositionReference = 'trigger';

  /**
   * Describes which side of the `reference` point to position
   * the popover on. The `'start'` and `'end'` values are RTL-aware,
   * and the `'left'` and `'right'` values are not.
   */
  @Prop() side: PositionSide = 'bottom';

  /**
   * Describes how to align the popover content with the `reference` point.
   */
  @Prop() alignment: PositionAlign = 'start';

  /**
   * If `true`, the popover will display an arrow
   * that points at the `reference` when running in `ios` mode
   * on mobile. Does not apply in `md` mode or on desktop.
   */
  @Prop() arrow = true;

  /**
   * If `true`, the popover will open. If `false`, the popover will close.
   * Use this if you need finer grained control over presentation, otherwise
   * just use the popoverController or the `trigger` property.
   * Note: `isOpen` will not automatically be set back to `false` when
   * the popover dismisses. You will need to do that in your code.
   */
  @Prop() isOpen = false;

  @Watch('trigger')
  @Watch('triggerAction')
  onTriggerChange() {
    this.configureTriggerInteraction();
  }

  @Watch('isOpen')
  onIsOpenChange(newValue: boolean, oldValue: boolean) {
    if (newValue === true && oldValue === false) {
      this.present();
    } else if (newValue === false && oldValue === true) {
      this.dismiss();
    }
  }

  /**
   * Emitted after the popover has presented.
   */
  @Event({ eventName: 'ionPopoverDidPresent' }) didPresent!: EventEmitter<void>;

  /**
   * Emitted before the popover has presented.
   */
  @Event({ eventName: 'ionPopoverWillPresent' }) willPresent!: EventEmitter<void>;

  /**
   * Emitted before the popover has dismissed.
   */
  @Event({ eventName: 'ionPopoverWillDismiss' }) willDismiss!: EventEmitter<OverlayEventDetail>;

  /**
   * Emitted after the popover has dismissed.
   */
  @Event({ eventName: 'ionPopoverDidDismiss' }) didDismiss!: EventEmitter<OverlayEventDetail>;

  /**
   * Emitted after the popover has presented.
   * Shorthand for ionPopoverWillDismiss.
   */
  @Event({ eventName: 'didPresent' }) didPresentShorthand!: EventEmitter<void>;

  /**
   * Emitted before the popover has presented.
   * Shorthand for ionPopoverWillPresent.
   */
  @Event({ eventName: 'willPresent' }) willPresentShorthand!: EventEmitter<void>;

  /**
   * Emitted before the popover has dismissed.
   * Shorthand for ionPopoverWillDismiss.
   */
  @Event({ eventName: 'willDismiss' }) willDismissShorthand!: EventEmitter<OverlayEventDetail>;

  /**
   * Emitted after the popover has dismissed.
   * Shorthand for ionPopoverDidDismiss.
   */
  @Event({ eventName: 'didDismiss' }) didDismissShorthand!: EventEmitter<OverlayEventDetail>;

  connectedCallback() {
    prepareOverlay(this.el);
  }

  componentWillLoad() {
    /**
     * If user has custom ID set then we should
     * not assign the default incrementing ID.
     */
    this.popoverId = (this.el.hasAttribute('id')) ? this.el.getAttribute('id')! : `ion-popover-${this.popoverIndex}`;

    this.parentPopover = this.el.closest(`ion-popover:not(#${this.popoverId})`) as HTMLIonPopoverElement | null;
  }

  componentDidLoad() {
    const { parentPopover, isOpen } = this;

    /**
     * If popover was rendered with isOpen="true"
     * then we should open popover immediately.
     */
    if (isOpen === true) {
      raf(() => this.present());
    }

    if (parentPopover) {
      addEventListener(parentPopover, 'ionPopoverWillDismiss', () => {
        this.dismiss(undefined, undefined, false);
      });
    }

    this.configureTriggerInteraction();
  }

  /**
   * When opening a popover from a trigger, we should not be
   * modifying the `event` prop from inside the component.
   * Additionally, when pressing the "Right" arrow key, we need
   * to shift focus to the first descendant in the newly presented
   * popover.
   *
   * @internal
   */
  @Method()
  async presentFromTrigger(event?: any, focusDescendant = false) {
    this.triggerEv = event;
    this.focusDescendantOnPresent = focusDescendant;

    await this.present();

    this.triggerEv = undefined;
    this.focusDescendantOnPresent = false;
  }

  /**
   * Determines whether or not an overlay
   * is being used inline or via a controller/JS
   * and returns the correct delegate.
   * By default, subsequent calls to getDelegate
   * will use a cached version of the delegate.
   * This is useful for calling dismiss after
   * present so that the correct delegate is given.
   */
  private getDelegate(force = false) {
    if (this.workingDelegate && !force) {
      return {
        delegate: this.workingDelegate,
        inline: this.inline
      }
    }

    /**
     * If using overlay inline
     * we potentially need to use the coreDelegate
     * so that this works in vanilla JS apps.
     * If a user has already placed the overlay
     * as a direct descendant of ion-app or
     * the body, then we can assume that
     * the overlay is already in the correct place.
     */
    const parentEl = this.el.parentNode as HTMLElement | null;
    const inline = this.inline = parentEl !== null && parentEl.tagName !== 'ION-APP' && parentEl.tagName !== 'BODY';
    const delegate = this.workingDelegate = (inline) ? this.delegate || this.coreDelegate : this.delegate

    return { inline, delegate }
  }

  /**
   * Present the popover overlay after it has been created.
   */
  @Method()
  async present(): Promise<void> {
    if (this.presented) {
      return;
    }

    /**
     * When using an inline popover
     * and dismissing a popover it is possible to
     * quickly present the popover while it is
     * dismissing. We need to await any current
     * transition to allow the dismiss to finish
     * before presenting again.
     */
    if (this.currentTransition !== undefined) {
      await this.currentTransition;
    }

    const data = {
      ...this.componentProps,
      popover: this.el
    };

    const { inline, delegate } = this.getDelegate(true);
    this.usersElement = await attachComponent(delegate, this.el, this.component, ['popover-viewport'], data, inline);
    await deepReady(this.usersElement);

    this.configureKeyboardInteraction();
    this.configureDismissInteraction();

    this.currentTransition = present(this, 'popoverEnter', iosEnterAnimation, mdEnterAnimation, {
      event: this.event || this.triggerEv,
      size: this.size,
      trigger: this.triggerEl,
      reference: this.reference,
      side: this.side,
      align: this.alignment
    });

    await this.currentTransition;

    this.currentTransition = undefined;

    /**
     * If popover is nested and was
     * presented using the "Right" arrow key,
     * we need to move focus to the first
     * descendant inside of the popover.
     */
    if (this.focusDescendantOnPresent) {
      focusFirstDescendant(this.el, this.el);
    }
  }

  /**
   * Dismiss the popover overlay after it has been presented.
   *
   * @param data Any data to emit in the dismiss events.
   * @param role The role of the element that is dismissing the popover. For example, 'cancel' or 'backdrop'.
   * @param dismissParentPopover If `true`, dismissing this popover will also dismiss
   * a parent popover if this popover is nested. Defaults to `true`.
   */
  @Method()
  async dismiss(data?: any, role?: string, dismissParentPopover = true): Promise<boolean> {
    /**
     * When using an inline popover
     * and presenting a popover it is possible to
     * quickly dismiss the popover while it is
     * presenting. We need to await any current
     * transition to allow the present to finish
     * before dismissing again.
     */
    if (this.currentTransition !== undefined) {
      await this.currentTransition;
    }

    const { destroyKeyboardInteraction, destroyDismissInteraction } = this;
    if (dismissParentPopover && this.parentPopover) {
      this.parentPopover.dismiss(data, role, dismissParentPopover)
    }

    this.currentTransition = dismiss(this, data, role, 'popoverLeave', iosLeaveAnimation, mdLeaveAnimation, this.event);
    const shouldDismiss = await this.currentTransition;
    if (shouldDismiss) {
      if (destroyKeyboardInteraction) {
        destroyKeyboardInteraction();
        this.destroyKeyboardInteraction = undefined;
      }
      if (destroyDismissInteraction) {
        destroyDismissInteraction();
        this.destroyDismissInteraction = undefined;
      }

      /**
       * If using popover inline
       * we potentially need to use the coreDelegate
       * so that this works in vanilla JS apps
       */
      const { delegate } = this.getDelegate();
      await detachComponent(delegate, this.usersElement);
    }

    this.currentTransition = undefined;

    return shouldDismiss;
  }

  /**
   * @internal
   */
  @Method()
  async getParentPopover(): Promise<HTMLIonPopoverElement | null> {
    return this.parentPopover;
  }

  /**
   * Returns a promise that resolves when the popover did dismiss.
   */
  @Method()
  onDidDismiss<T = any>(): Promise<OverlayEventDetail<T>> {
    return eventMethod(this.el, 'ionPopoverDidDismiss');
  }

  /**
   * Returns a promise that resolves when the popover will dismiss.
   */
  @Method()
  onWillDismiss<T = any>(): Promise<OverlayEventDetail<T>> {
    return eventMethod(this.el, 'ionPopoverWillDismiss');
  }

  private onDismiss = (ev: UIEvent) => {
    ev.stopPropagation();
    ev.preventDefault();

    this.dismiss();
  }

  private onBackdropTap = () => {
    this.dismiss(undefined, BACKDROP);
  }

  private onLifecycle = (modalEvent: CustomEvent) => {
    const el = this.usersElement;
    const name = LIFECYCLE_MAP[modalEvent.type];
    if (el && name) {
      const event = new CustomEvent(name, {
        bubbles: false,
        cancelable: false,
        detail: modalEvent.detail
      });
      el.dispatchEvent(event);
    }
  }

  private configureTriggerInteraction = () => {
    const { trigger, triggerAction, el, destroyTriggerInteraction } = this;

    if (destroyTriggerInteraction) {
      destroyTriggerInteraction();
    }

    const triggerEl = this.triggerEl = (trigger !== undefined) ? document.getElementById(trigger) : null;
    if (!triggerEl) { return; }

    this.destroyTriggerInteraction = configureTriggerInteraction(triggerEl, triggerAction, el);
  }

  private configureKeyboardInteraction = () => {
    const { destroyKeyboardInteraction, el } = this;

    if (destroyKeyboardInteraction) {
      destroyKeyboardInteraction();
    }

    this.destroyKeyboardInteraction = configureKeyboardInteraction(el);
  }

  private configureDismissInteraction = () => {
    const { destroyDismissInteraction, parentPopover, triggerAction, triggerEl, el } = this;

    if (!parentPopover || !triggerEl) { return; }

    if (destroyDismissInteraction) {
      destroyDismissInteraction();
    }

    this.destroyDismissInteraction = configureDismissInteraction(triggerEl, triggerAction, el, parentPopover);
  }

  render() {
    const mode = getIonMode(this);
    const { onLifecycle, popoverId, parentPopover, dismissOnSelect, presented, side, arrow } = this;
    const desktop = isPlatform('desktop');
    const enableArrow = arrow && !parentPopover && !desktop;
    return (
      <Host
        aria-modal="true"
        no-router
        tabindex="-1"
        style={{
          zIndex: `${20000 + this.overlayIndex}`,
        }}
        id={popoverId}
        class={{
          ...getClassMap(this.cssClass),
          [mode]: true,
          'popover-translucent': this.translucent,
          'overlay-hidden': true,
          'popover-interactive': presented,
          'popover-desktop': desktop,
          [`popover-side-${side}`]: true,
          'popover-nested': !!parentPopover
        }}
        onIonPopoverDidPresent={onLifecycle}
        onIonPopoverWillPresent={onLifecycle}
        onIonPopoverWillDismiss={onLifecycle}
        onIonPopoverDidDismiss={onLifecycle}
        onIonDismiss={this.onDismiss}
        onIonBackdropTap={this.onBackdropTap}
      >
        {!parentPopover && <ion-backdrop tappable={this.backdropDismiss} visible={this.showBackdrop} part="backdrop" />}

        <div
          class="popover-wrapper ion-overlay-wrapper"
          onClick={dismissOnSelect ? () => this.dismiss() : undefined}
        >
          {enableArrow && <div class="popover-arrow" part="arrow"></div>}
          <div class="popover-content" part="content">
            <slot></slot>
          </div>
        </div>
      </Host>
    );
  }
}

const LIFECYCLE_MAP: any = {
  'ionPopoverDidPresent': 'ionViewDidEnter',
  'ionPopoverWillPresent': 'ionViewWillEnter',
  'ionPopoverWillDismiss': 'ionViewWillLeave',
  'ionPopoverDidDismiss': 'ionViewDidLeave',
};

let popoverIds = 0;
