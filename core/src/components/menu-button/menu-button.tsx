import { Component, ComponentInterface, Prop } from '@stencil/core';

import { Color, Config, Mode } from '../../interface';
import { ButtonInterface } from '../../utils/element-interface';
import { createColorClasses } from '../../utils/theme';

@Component({
  tag: 'ion-menu-button',
  styleUrls: {
    ios: 'menu-button.ios.scss',
    md: 'menu-button.md.scss'
  },
  shadow: true
})
export class MenuButton implements ComponentInterface, ButtonInterface {

  @Prop({ context: 'config' }) config!: Config;

  /**
   * The color to use from your application's color palette.
   * Default options are: `"primary"`, `"secondary"`, `"tertiary"`, `"success"`, `"warning"`, `"danger"`, `"light"`, `"medium"`, and `"dark"`.
   * For more information on colors, see [theming](/docs/theming/basics).
   */
  @Prop() color?: Color;

  /**
   * The mode determines which platform styles to use.
   */
  @Prop() mode!: Mode;

  /**
   * If `true`, the user cannot interact with the menu button.
   */
  @Prop() disabled = false;

  /**
   * Optional property that maps to a Menu's `menuId` prop. Can also be `start` or `end` for the menu side. This is used to find the correct menu to toggle
   */
  @Prop() menu?: string;

  /**
   * Automatically hides the menu button when the corresponding menu is not active
   */
  @Prop() autoHide = true;

  /**
   * The type of the button.
   */
  @Prop() type: 'submit' | 'reset' | 'button' = 'button';

  hostData() {
    const { color, disabled } = this;

    return {
      'aria-disabled': disabled ? 'true' : null,
      class: {
        ...createColorClasses(color),

        [`${this.mode}`]: true,

        'button': true,  // ion-buttons target .button
        'menu-button-disabled': disabled,
        'ion-activatable': true,
        'ion-focusable': true
      }
    };
  }

  render() {
    const menuIcon = this.config.get('menuIcon', 'menu');

    const attrs = {
      type: this.type
    };

    return (
      <ion-menu-toggle menu={this.menu} autoHide={this.autoHide}>
        <button
          {...attrs}
          disabled={this.disabled}
          class="button-native"
        >
          <slot>
            <ion-icon icon={menuIcon} mode={this.mode} lazy={false}></ion-icon>
          </slot>
          {this.mode === 'md' && <ion-ripple-effect type="unbounded"></ion-ripple-effect>}
        </button>
      </ion-menu-toggle>
    );
  }
}
