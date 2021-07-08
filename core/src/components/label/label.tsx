import { Component, ComponentInterface, Element, Event, EventEmitter, Host, Prop, State, Watch, h } from '@stencil/core';

import { getIonMode } from '../../global/ionic-global';
import { Color, StyleEventDetail } from '../../interface';
import { createColorClasses } from '../../utils/theme';

/**
 * @virtualProp {"ios" | "md"} mode - The mode determines which platform styles to use.
 */
@Component({
  tag: 'ion-label',
  styleUrls: {
    ios: 'label.ios.scss',
    md: 'label.md.scss'
  },
  scoped: true
})
export class Label implements ComponentInterface {
  private inRange = false;

  @Element() el!: HTMLElement;

  /**
   * The color to use from your application's color palette.
   * Default options are: `"primary"`, `"secondary"`, `"tertiary"`, `"success"`, `"warning"`, `"danger"`, `"light"`, `"medium"`, and `"dark"`.
   * For more information on colors, see [theming](/docs/theming/basics).
   */
  @Prop({ reflect: true }) color?: Color;

  /**
   * The position determines where and how the label behaves inside an item.
   */
  @Prop() position?: 'fixed' | 'stacked' | 'floating';

  /**
   * Emitted when the color changes.
   * @internal
   */
  @Event() ionColor!: EventEmitter<StyleEventDetail>;

  /**
   * Emitted when the styles change.
   * @internal
   */
  @Event() ionStyle!: EventEmitter<StyleEventDetail>;

  @State() noAnimate = false;

  componentWillLoad() {
    this.inRange = !!this.el.closest('ion-range');
    this.noAnimate = (this.position === 'floating');
    this.emitStyle();
    this.emitColor();
  }

  componentDidLoad() {
    if (this.noAnimate) {
      setTimeout(() => {
        this.noAnimate = false;
      }, 1000);
    }
  }

  @Watch('color')
  colorChanged() {
    this.emitColor();
  }

  @Watch('position')
  positionChanged() {
    this.emitStyle();
  }

  private emitColor() {
    const { color } = this;

    this.ionColor.emit({
      'item-label-color': color !== undefined,
      [`ion-color-${color}`]: color !== undefined
    });
  }

  private emitStyle() {
    const { inRange, position } = this;

    // If the label is inside of a range we don't want
    // to override the classes added by the label that
    // is a direct child of the item
    if (!inRange) {
      this.ionStyle.emit({
        'label': true,
        [`label-${position}`]: position !== undefined
      });
    }
  }

  render() {
    const position = this.position;
    const mode = getIonMode(this);
    return (
      <Host
        class={createColorClasses(this.color, {
          [mode]: true,
          [`label-${position}`]: position !== undefined,
          [`label-no-animate`]: (this.noAnimate),
          'label-rtl': document.dir === 'rtl'
        })}
      >
      </Host>
    );
  }
}
