import { Component, ComponentInterface, Element, Event, EventEmitter, Host, Prop, h } from '@stencil/core';
import { chevronForwardOutline, ellipsisHorizontal } from 'ionicons/icons';

import { getIonMode } from '../../global/ionic-global';
import { AnimationBuilder, BreadcrumbCollapsedClickEventDetail, Color, RouterDirection } from '../../interface';
import { inheritAttributes } from '../../utils/helpers';
import { createColorClasses, hostContext, openURL } from '../../utils/theme';

/**
 * @virtualProp {"ios" | "md"} mode - The mode determines which platform styles to use.
 *
 * @part native - The native HTML anchor or div element that wraps all child elements.
 * @part separator - The separator element between each breadcrumb.
 * @part collapsed-indicator - The indicator element that shows the breadcrumbs are collapsed.
 */
@Component({
  tag: 'ion-breadcrumb',
  styleUrls: {
    'ios': 'breadcrumb.ios.scss',
    'md': 'breadcrumb.md.scss'
  },
  shadow: true
})
export class Breadcrumb implements ComponentInterface {
  private inheritedAttributes: { [k: string]: any } = {};
  private collapsedRef?: HTMLElement;

  /** @internal */
  @Prop() collapsed = false;

  /** @internal */
  @Prop() last!: boolean;

  /** @internal */
  @Prop() showCollapsedIndicator!: boolean;

  @Element() el!: HTMLElement;

  /**
   * The color to use from your application's color palette.
   * Default options are: `"primary"`, `"secondary"`, `"tertiary"`, `"success"`, `"warning"`, `"danger"`, `"light"`, `"medium"`, and `"dark"`.
   * For more information on colors, see [theming](/docs/theming/basics).
   */
  @Prop() color?: Color;

  /**
   * If `true`, the breadcrumb will take on a different look to show that
   * it is the currently active breadcrumb. Defaults to `true` for the
   * last breadcrumb if it is not set on any.
   */
  @Prop() active = false;

  /**
   * If `true`, the user cannot interact with the breadcrumb.
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
   * If true, show a separator between this breadcrumb and the next.
   * Defaults to `true` for all breadcrumbs except the last.
   */
  @Prop() separator?: boolean | undefined;

  /**
   * Specifies where to display the linked URL.
   * Only applies when an `href` is provided.
   * Special keywords: `"_blank"`, `"_self"`, `"_parent"`, `"_top"`.
   */
  @Prop() target: string | undefined;

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
   * Emitted when the breadcrumb has focus.
   */
  @Event() ionFocus!: EventEmitter<void>;

  /**
   * Emitted when the breadcrumb loses focus.
   */
  @Event() ionBlur!: EventEmitter<void>;

  /**
   * Emitted when the collapsed indicator is clicked on.
   * `ion-breadcrumbs` will listen for this and emit ionCollapsedClick.
   * Normally we could just emit this as `ionCollapsedClick`
   * and let the event bubble to `ion-breadcrumbs`,
   * but if the event custom event is not set on `ion-breadcrumbs`,
   * TypeScript will throw an error in user applications.
   * @internal
   */
  @Event() collapsedClick!: EventEmitter<BreadcrumbCollapsedClickEventDetail>;

  componentWillLoad() {
    this.inheritedAttributes = inheritAttributes(this.el, ['aria-label']);
  }

  private isClickable(): boolean {
    return this.href !== undefined;
  }

  private onFocus = () => {
    this.ionFocus.emit();
  }

  private onBlur = () => {
    this.ionBlur.emit();
  }

  private collapsedIndicatorClick = () => {
    this.collapsedClick.emit({ ionShadowTarget: this.collapsedRef });
  }

  render() {
    const { color, active, collapsed, disabled, download, el, inheritedAttributes, last, routerAnimation, routerDirection, separator, showCollapsedIndicator, target } = this;
    const clickable = this.isClickable();
    const TagType = this.href === undefined ? 'span' : 'a' as any;

    // Links can still be tabbed to when set to disabled if they have an href
    // in order to truly disable them we can keep it as an anchor but remove the href
    const href = disabled ? undefined : this.href;
    const mode = getIonMode(this);
    const attrs = (TagType === 'span')
      ? { }
      : {
        download,
        href,
        target
      };

    // If the breadcrumb is collapsed, check if it contains the collapsed indicator
    // to show the separator as long as it isn't also the last breadcrumb
    // otherwise if not collapsed use the value in separator
    const showSeparator = last
      ? false
      : collapsed
        ? showCollapsedIndicator && !last ? true : false
        : separator;

    return (
      <Host
        onClick={(ev: Event) => openURL(href, ev, routerDirection, routerAnimation)}
        aria-disabled={disabled ? 'true' : null}
        class={createColorClasses(color, {
          [mode]: true,
          'breadcrumb-active': active,
          'breadcrumb-collapsed': collapsed,
          'breadcrumb-disabled': disabled,
          'in-breadcrumbs-color': hostContext('ion-breadcrumbs[color]', el),
          'in-toolbar': hostContext('ion-toolbar', this.el),
          'in-toolbar-color': hostContext('ion-toolbar[color]', this.el),
          'ion-activatable': clickable,
          'ion-focusable': clickable,
        })}
      >
        <TagType
          {...attrs}
          class="breadcrumb-native"
          part="native"
          disabled={disabled}
          onFocus={this.onFocus}
          onBlur={this.onBlur}
          {...inheritedAttributes}
        >
          <slot name="start"></slot>
          <slot></slot>
          <slot name="end"></slot>
        </TagType>
        { showCollapsedIndicator &&
            <button
              part="collapsed-indicator"
              onClick={() => this.collapsedIndicatorClick()}
              ref={collapsedEl => this.collapsedRef = collapsedEl}
              class={{
                'breadcrumbs-collapsed-indicator': true,
              }}
            >
              <ion-icon icon={ellipsisHorizontal} lazy={false}></ion-icon>
            </button>
        }
        { showSeparator &&
          <span class="breadcrumb-separator" part="separator">
            <slot name="separator">
              { mode === 'ios'
                ? <ion-icon icon={chevronForwardOutline} lazy={false}></ion-icon>
                : <span>/</span>
              }
            </slot>
          </span>
        }
      </Host>
    );
  }
}
