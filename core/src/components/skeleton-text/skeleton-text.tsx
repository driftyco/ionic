import { Component, ComponentInterface, Element, Host, Prop, h } from '@stencil/core';

import { config } from '../../global/config';
import { getIonMode } from '../../global/ionic-global';
import { hostContext } from '../../utils/theme';

@Component({
  tag: 'ion-skeleton-text',
  styleUrl: 'skeleton-text.scss',
  shadow: true
})
export class SkeletonText implements ComponentInterface {

  @Element() el!: HTMLElement;

  /**
   * If `true`, the skeleton text will animate.
   */
  @Prop() animated = false;

  /**
   * @deprecated Use CSS instead. The width of the skeleton text. If supplied, it will override the CSS style.
   */
  @Prop() width?: string;

  calculateWidth() {
    // If width was passed in to the property use that first
    // tslint:disable-next-line: deprecation
    if (this.width !== undefined) {
      return {
        style: {
          // tslint:disable-next-line: deprecation
          width: this.width
        }
      };
    }

    return;
  }

  render() {
    const animated = this.animated && config.getBoolean('animated', true);
    const inMedia = hostContext('ion-avatar', this.el) || hostContext('ion-thumbnail', this.el);
    const mode = getIonMode(this);

    return (
      <Host
        class={{
          [mode]: true,
          'skeleton-text-animated': animated,
          'in-media': inMedia
        }}
        {...this.calculateWidth()}
      >
        <span>&nbsp;</span>
      </Host>
    );
  }
}
