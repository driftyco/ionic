import { Component, ComponentInterface, Element, Event, EventEmitter, Host, Prop, h } from '@stencil/core';

import { getIonMode } from '../../global/ionic-global';
import { AnimationBuilder, Color, RouterDirection } from '../../interface';
import { AnchorInterface, ButtonInterface } from '../../utils/element-interface';
import { hasShadowDom, inheritAttributes } from '../../utils/helpers';
import { createColorClasses, hostContext, openURL } from '../../utils/theme';

/**
 * @virtualProp {"ios" | "md"} mode - The mode determines which platform styles to use.
 *
 * @slot - Content is placed between the named slots if provided without a slot.
 * @slot icon-only - Should be used on an icon in a button that has no text.
 * @slot start - Content is placed to the left of the button text in LTR, and to the right in RTL.
 * @slot end - Content is placed to the right of the button text in LTR, and to the left in RTL.
 *
 * @part native - The native HTML button or anchor element that wraps all child elements.
 */
@Component({
  tag: 'ion-button',
  styleUrls: {
    ios: 'button.ios.scss',
    md: 'button.md.scss'
  },
  shadow: true,
})
export class Button implements ComponentInterface, AnchorInterface, ButtonInterface {
  private inItem = false;
  private inListHeader = false;
  private inToolbar = false;
  private inheritedAttributes: { [k: string]: any } = {};

  @Element() el!: HTMLElement;

  /**
   * The color to use from your application's color palette.
   * Default options are: `"primary"`, `"secondary"`, `"tertiary"`, `"success"`, `"warning"`, `"danger"`, `"light"`, `"medium"`, and `"dark"`.
   * For more information on colors, see [theming](/docs/theming/basics).
   */
  @Prop({ reflect: true }) color?: Color;

  /**
   * The type of button.
   */
  @Prop({ mutable: true }) buttonType = 'button';

  /**
   * If `true`, the user cannot interact with the button.
   */
  @Prop({ reflect: true }) disabled = false;

  /**
   * Set to `"block"` for a full-width button or to `"full"` for a full-width button
   * without left and right borders.
   */
  @Prop({ reflect: true }) expand?: 'full' | 'block';

  /**
   * Set to `"clear"` for a transparent button, to `"outline"` for a transparent
   * button with a border, or to `"solid"`. The default style is `"solid"` except inside of
   * a toolbar, where the default is `"clear"`.
   */
  @Prop({ reflect: true, mutable: true }) fill?: 'clear' | 'outline' | 'solid' | 'default';

  /**
   * When using a router, it specifies the transition direction when navigating to
   * another page using `href`.
   */
  @Prop() routerDirection: RouterDirection = 'forward';

  /**
   * When using a router, it specifies the transition animation when navigating to
   * another page using `href`.
   */
  @Prop() routerAnimation: AnimationBuilder | undefined;

  /**
   * This attribute instructs browsers to download a URL instead of navigating to
   * it, so the user will be prompted to save it as a local file. If the attribute
   * has a value, it is used as the pre-filled file name in the Save prompt
   * (the user can still change the file name if they want).
   */
  @Prop() download: string | undefined;

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
   * The button shape.
   */
  @Prop({ reflect: true }) shape?: 'round';

  /**
   * The button size.
   */
  @Prop({ reflect: true }) size?: 'small' | 'default' | 'large';

  /**
   * If `true`, activates a button with a heavier font weight.
   */
  @Prop() strong = false;

  /**
   * Specifies where to display the linked URL.
   * Only applies when an `href` is provided.
   * Special keywords: `"_blank"`, `"_self"`, `"_parent"`, `"_top"`.
   */
  @Prop() target: string | undefined;

  /**
   * The type of the button.
   */
  @Prop() type: 'submit' | 'reset' | 'button' = 'button';

  /**
   * The ID of the `<form>` element that should be
   * submitted on button click.
   */
  @Prop() form: string | undefined;

  /**
   * Emitted when the button has focus.
   */
  @Event() ionFocus!: EventEmitter<void>;

  /**
   * Emitted when the button loses focus.
   */
  @Event() ionBlur!: EventEmitter<void>;

  componentWillLoad() {
    this.inToolbar = !!this.el.closest('ion-buttons');
    this.inListHeader = !!this.el.closest('ion-list-header');
    this.inItem = !!this.el.closest('ion-item') || !!this.el.closest('ion-item-divider');
    this.inheritedAttributes = inheritAttributes(this.el, ['aria-label']);
  }

  private get hasIconOnly() {
    return !!this.el.querySelector('[slot="icon-only"]');
  }

  private get rippleType() {
    const hasClearFill = this.fill === undefined || this.fill === 'clear';

    // If the button is in a toolbar, has a clear fill (which is the default)
    // and only has an icon we use the unbounded "circular" ripple effect
    if (hasClearFill && this.hasIconOnly && this.inToolbar) {
      return 'unbounded';
    }

    return 'bounded';
  }

  private handleClick = (ev: Event) => {
    if (this.type === 'button') {
      openURL(this.href, ev, this.routerDirection, this.routerAnimation);

    } else if (hasShadowDom(this.el)) {
      // this button wants to specifically submit a form
      // if form property is defined, it will be used to submit
      // else climb up the dom to see if we're in a <form>
      // and if so, then use JS to submit it
      const formElement = this.getForm(this.el, this.form);
      if (formElement) {
        ev.preventDefault();

        const fakeButton = document.createElement('button');
        fakeButton.type = this.type;
        fakeButton.style.display = 'none';
        formElement.appendChild(fakeButton);
        fakeButton.click();
        fakeButton.remove();
      }
    }
  }

  /**
   * Given a reference element, find the closest form.
   * If there is no reference element, search the document.
   * If `id` is provided, the selector will only look for forms
   * given that id.
   */
  private getForm = (refEl: HTMLElement, id?: string) => {
    const selector = (typeof (id as any) !== 'undefined') ? `form#${id}` : 'form';
    if (typeof (refEl as any) !== 'undefined') {
      const form = refEl.closest(selector);
      if (form) { return form; }
    }

    if (typeof (document as any) === 'undefined') { return null; }

    return document.querySelector(selector);
  }

  private onFocus = () => {
    this.ionFocus.emit();
  }

  private onBlur = () => {
    this.ionBlur.emit();
  }

  render() {
    const mode = getIonMode(this);
    const { buttonType, type, disabled, rel, target, size, href, color, expand, hasIconOnly, shape, strong, inheritedAttributes } = this;
    const finalSize = size === undefined && this.inItem ? 'small' : size;
    const TagType = href === undefined ? 'button' : 'a' as any;
    const attrs = (TagType === 'button')
      ? { type }
      : {
        download: this.download,
        href,
        rel,
        target
      };

    let fill = this.fill;
    if (fill === undefined) {
      fill = this.inToolbar || this.inListHeader ? 'clear' : 'solid';
    }
    return (
      <Host
        onClick={this.handleClick}
        aria-disabled={disabled ? 'true' : null}
        class={createColorClasses(color, {
          [mode]: true,
          [buttonType]: true,
          [`${buttonType}-${expand}`]: expand !== undefined,
          [`${buttonType}-${finalSize}`]: finalSize !== undefined,
          [`${buttonType}-${shape}`]: shape !== undefined,
          [`${buttonType}-${fill}`]: true,
          [`${buttonType}-strong`]: strong,
          'in-toolbar': hostContext('ion-toolbar', this.el),
          'in-toolbar-color': hostContext('ion-toolbar[color]', this.el),
          'button-has-icon-only': hasIconOnly,
          'button-disabled': disabled,
          'ion-activatable': true,
          'ion-focusable': true,
        })}
      >
        <TagType
          {...attrs}
          class="button-native"
          part="native"
          disabled={disabled}
          onFocus={this.onFocus}
          onBlur={this.onBlur}
          {...inheritedAttributes}
        >
          <span class="button-inner">
            <slot name="icon-only"></slot>
            <slot name="start"></slot>
            <slot></slot>
            <slot name="end"></slot>
          </span>
          {mode === 'md' && <ion-ripple-effect type={this.rippleType}></ion-ripple-effect>}
        </TagType>
      </Host>
    );
  }
}
