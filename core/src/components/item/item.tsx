import { Component, ComponentInterface, Element, Host, Listen, Prop, State, forceUpdate, h } from '@stencil/core';

import { getIonMode } from '../../global/ionic-global';
import { AnimationBuilder, Color, CssClassMap, RouterDirection, StyleEventDetail } from '../../interface';
import { AnchorInterface, ButtonInterface } from '../../utils/element-interface';
import { raf } from '../../utils/helpers';
import { createColorClasses, hostContext, openURL } from '../../utils/theme';
import { InputChangeEventDetail } from '../input/input-interface';

/**
 * @virtualProp {"ios" | "md"} mode - The mode determines which platform styles to use.
 *
 * @slot - Content is placed between the named slots if provided without a slot.
 * @slot start - Content is placed to the left of the item text in LTR, and to the right in RTL.
 * @slot end - Content is placed to the right of the item text in LTR, and to the left in RTL.
 *
 * @part native - The native HTML button, anchor or div element that wraps all child elements.
 * @part detail-icon - The chevron icon for the item. Only applies when `detail="true"`.
 */
@Component({
  tag: 'ion-item',
  styleUrls: {
    ios: 'item.ios.scss',
    md: 'item.md.scss'
  },
  shadow: {
    delegatesFocus: true
  }
})
export class Item implements ComponentInterface, AnchorInterface, ButtonInterface {

  private labelColorStyles = {};
  private itemStyles = new Map<string, CssClassMap>();
  private clickListener?: (ev: Event) => void;

  @Element() el!: HTMLIonItemElement;

  @State() multipleInputs = false;

  /**
   * The color to use from your application's color palette.
   * Default options are: `"primary"`, `"secondary"`, `"tertiary"`, `"success"`, `"warning"`, `"danger"`, `"light"`, `"medium"`, and `"dark"`.
   * For more information on colors, see [theming](/docs/theming/basics).
   */
  @Prop({ reflect: true }) color?: Color;

  /**
   * If `true`, a button tag will be rendered and the item will be tappable.
   */
  @Prop() button = false;

  /**
   * If `true`, a detail arrow will appear on the item. Defaults to `false` unless the `mode`
   * is `ios` and an `href` or `button` property is present.
   */
  @Prop() detail?: boolean;

  /**
   * The icon to use when `detail` is set to `true`.
   */
  @Prop() detailIcon = 'chevron-forward';

  /**
   * If `true`, the user cannot interact with the item.
   */
  @Prop() disabled = false;

  /**
   * This attribute instructs browsers to download a URL instead of navigating to
   * it, so the user will be prompted to save it as a local file. If the attribute
   * has a value, it is used as the pre-filled file name in the Save prompt
   * (the user can still change the file name if they want).
   */
  @Prop() download: string | undefined;

  /**
   * The fill for the item. If `'solid'` the item will have a background. If
   * `'outline'` the item will be transparent with a border. Only available in `md` mode.
   */
  @Prop() fill?: 'outline' | 'solid';

  /**
   * The shape of the item. If "round" it will have increased
   * border radius.
   */
  @Prop() shape?: 'round';
  /**
   * Contains a URL or a URL fragment that the hyperlink points to.
   * If this property is set, an anchor tag will be rendered.
   */
  @Prop() href: string | undefined;

  /**
   * Specifies the relationship of the target object to the link object.
   * The value is a space-separated list of [link types](https://developer.mozilla.org/en-US/docs/Web/HTML/Link_types).
   */
  @Prop() rel: string | undefined;

  /**
   * How the bottom border should be displayed on the item.
   */
  @Prop() lines?: 'full' | 'inset' | 'none';

  /**
   * If `true`, a character counter will display the ratio of characters used and the total character limit. Only applies when the `maxlength` property is set on the inner `ion-input` or `ion-textarea`.
   */
  @Prop() counter = true;

  /**
   * When using a router, it specifies the transition animation when navigating to
   * another page using `href`.
   */
  @Prop() routerAnimation: AnimationBuilder | undefined;

  /**
   * When using a router, it specifies the transition direction when navigating to
   * another page using `href`.
   */
  @Prop() routerDirection: RouterDirection = 'forward';

  /**
   * Specifies where to display the linked URL.
   * Only applies when an `href` is provided.
   * Special keywords: `"_blank"`, `"_self"`, `"_parent"`, `"_top"`.
   */
  @Prop() target: string | undefined;

  /**
   * The type of the button. Only used when an `onclick` or `button` property is present.
   */
  @Prop() type: 'submit' | 'reset' | 'button' = 'button';

  @State() counterString: string | null | undefined;

  @Listen('ionChange')
  handleIonChange(ev: CustomEvent<InputChangeEventDetail>) {
    if (this.counter && ev.target === this.getFirstInput()) {
      this.updateCounterOutput(ev.target as HTMLIonInputElement | HTMLIonTextareaElement);
    }
  }

  @Listen('ionColor')
  labelColorChanged(ev: CustomEvent<string>) {
    const { color } = this;

    // There will be a conflict with item color if
    // we apply the label color to item, so we ignore
    // the label color if the user sets a color on item
    if (color === undefined) {
      this.labelColorStyles = ev.detail;
    }
  }

  @Listen('ionStyle')
  itemStyle(ev: CustomEvent<StyleEventDetail>) {
    ev.stopPropagation();

    const tagName = (ev.target as HTMLElement).tagName;
    const updatedStyles = ev.detail;
    const newStyles = {} as any;
    const childStyles = this.itemStyles.get(tagName) || {};

    let hasStyleChange = false;
    Object.keys(updatedStyles).forEach(key => {
      if (updatedStyles[key]) {
        const itemKey = `item-${key}`;
        if (!childStyles[itemKey]) {
          hasStyleChange = true;
        }
        newStyles[itemKey] = true;
      }
    });
    if (!hasStyleChange && Object.keys(newStyles).length !== Object.keys(childStyles).length) {
      hasStyleChange = true;
    }
    if (hasStyleChange) {
      this.itemStyles.set(tagName, newStyles);
      forceUpdate(this);
    }
  }

  connectedCallback() {
    if (this.counter) {
      this.updateCounterOutput(this.getFirstInput());
    }

    this.hasStartEl();
  }

  componentDidUpdate() {
    // Do not use @Listen here to avoid making all items
    // appear as clickable to screen readers
    // https://github.com/ionic-team/ionic-framework/issues/22011
    const input = this.getFirstInput();
    if (input && !this.clickListener) {
      this.clickListener = (ev: Event) => this.delegateFocus(ev, input);
      this.el.addEventListener('click', this.clickListener);
    }
  }

  disconnectedCallback() {
    const input = this.getFirstInput();
    if (input && this.clickListener) {
      this.el.removeEventListener('click', this.clickListener);
      this.clickListener = undefined;
    }
  }

  componentDidLoad() {
    raf(() => this.setMultipleInputs());
  }

  // If the item contains multiple clickable elements and/or inputs, then the item
  // should not have a clickable input cover over the entire item to prevent
  // interfering with their individual click events
  private setMultipleInputs() {
    // The following elements have a clickable cover that is relative to the entire item
    const covers = this.el.querySelectorAll('ion-checkbox, ion-datetime, ion-select, ion-radio');

    // The following elements can accept focus alongside the previous elements
    // therefore if these elements are also a child of item, we don't want the
    // input cover on top of those interfering with their clicks
    const inputs = this.el.querySelectorAll('ion-input, ion-range, ion-searchbar, ion-segment, ion-textarea, ion-toggle');

    // The following elements should also stay clickable when an input with cover is present
    const clickables = this.el.querySelectorAll('ion-anchor, ion-button, a, button');

    // Check for multiple inputs to change the position of the input cover to relative
    // for all of the covered inputs above
    this.multipleInputs = covers.length + inputs.length > 1
      || covers.length + clickables.length > 1
      || covers.length > 0 && this.isClickable();
  }

  // If the item contains an input including a checkbox, datetime, select, or radio
  // then the item will have a clickable input cover that covers the item
  // that should get the hover, focused and activated states UNLESS it has multiple
  // inputs, then those need to individually get each click
  private hasCover(): boolean {
    const inputs = this.el.querySelectorAll('ion-checkbox, ion-datetime, ion-select, ion-radio');
    return inputs.length === 1 && !this.multipleInputs;
  }

  // If the item has an href or button property it will render a native
  // anchor or button that is clickable
  private isClickable(): boolean {
    return (this.href !== undefined || this.button);
  }

  private canActivate(): boolean {
    return (this.isClickable() || this.hasCover());
  }

  private getFirstInput(): HTMLIonInputElement | HTMLIonTextareaElement {
    const inputs = this.el.querySelectorAll('ion-input, ion-textarea') as NodeListOf<HTMLIonInputElement | HTMLIonTextareaElement>;
    return inputs[0];
  }

  // This is needed for WebKit due to a delegatesFocus bug where
  // clicking on the left padding of an item is not focusing the input
  // but is opening the keyboard. It will no longer be needed with
  // iOS 14.
  private delegateFocus(ev: Event, input: HTMLIonInputElement | HTMLIonTextareaElement) {
    const clickedItem = (ev.target as HTMLElement).tagName === 'ION-ITEM';
    let firstActive = false;

    // If the first input is the same as the active element we need
    // to focus the first input again, but if the active element
    // is another input inside of the item we shouldn't switch focus
    if (document.activeElement) {
      firstActive = input.querySelector('input, textarea') === document.activeElement;
    }

    // Only focus the first input if we clicked on an ion-item
    // and the first input exists
    if (clickedItem && (firstActive || !this.multipleInputs)) {
      input.fireFocusEvents = false;
      input.setBlur();
      input.setFocus();
      raf(() => {
        input.fireFocusEvents = true;
      });
    }
  }

  private updateCounterOutput(inputEl: HTMLIonInputElement | HTMLIonTextareaElement) {
    if (this.counter && !this.multipleInputs && inputEl?.maxlength !== undefined) {
      const length = inputEl?.value?.toString().length ?? '0';
      this.counterString = `${length}/${inputEl.maxlength}`;
    }
  }

  private hasStartEl() {
    const startEl = this.el.querySelector('[slot="start"]');
    if (startEl !== null) {
      this.el.classList.add('item-has-start-slot');
    }
  }

  render() {
    const { counterString, detail, detailIcon, download, fill, labelColorStyles, lines, disabled, href, rel, shape, target, routerAnimation, routerDirection } = this;
    const childStyles = {};
    const mode = getIonMode(this);
    const clickable = this.isClickable();
    const canActivate = this.canActivate();
    const hasFill = fill === 'outline' || fill === 'solid';
    const TagType = clickable ? (href === undefined ? 'button' : 'a') : 'div' as any;
    const attrs = (TagType === 'button')
      ? { type: this.type }
      : {
        download,
        href,
        rel,
        target
      };
    // Only set onClick if the item is clickable to prevent screen
    // readers from reading all items as clickable
    const clickFn = clickable ? {
      onClick: (ev: Event) => {openURL(href, ev, routerDirection, routerAnimation); }
    } : {};
    const showDetail = detail !== undefined ? detail : mode === 'ios' && clickable;
    this.itemStyles.forEach(value => {
      Object.assign(childStyles, value);
    });

    return (
      <Host
        aria-disabled={disabled ? 'true' : null}
        class={{
          ...childStyles,
          ...labelColorStyles,
          ...createColorClasses(this.color, {
            'item': true,
            [mode]: true,
            [`item-lines-${lines}`]: lines !== undefined,
            [`item-fill-${fill}`]: fill !== undefined,
            [`item-shape-${shape}`]: shape !== undefined,
            'item-disabled': disabled,
            'in-list': hostContext('ion-list', this.el),
            'item-multiple-inputs': this.multipleInputs,
            'ion-activatable': canActivate,
            'ion-focusable': true,
            'item-rtl': document.dir === 'rtl'
          })
        }}
      >
        <TagType
          {...attrs}
          class="item-native"
          part="native"
          disabled={disabled}
          {...clickFn}
        >
          <slot name="start"></slot>
          <div class="item-inner">
            <div class="input-wrapper">
              <slot></slot>
            </div>
            <slot name="end"></slot>
            {showDetail && <ion-icon icon={detailIcon} lazy={false} class="item-detail-icon" part="detail-icon" aria-hidden="true"></ion-icon>}
            <div class="item-inner-highlight"></div>
          </div>
          {canActivate && mode === 'md' && <ion-ripple-effect></ion-ripple-effect>}
          {hasFill && <div class="item-highlight"></div>}
        </TagType>
        {!hasFill && <div class="item-highlight"></div>}
        <div class="item-bottom">
          <slot name="error"></slot>
          <slot name="helper"></slot>
          {counterString && <ion-note class="item-counter">{counterString}</ion-note>}
        </div>
      </Host>
    );
  }
}
