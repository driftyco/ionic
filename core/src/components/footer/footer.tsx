import { Component, ComponentInterface, Element, Host, Prop, State, h } from '@stencil/core';

import { getIonMode } from '../../global/ionic-global';

/**
 * @virtualProp {"ios" | "md"} mode - The mode determines which platform styles to use.
 */
@Component({
  tag: 'ion-footer',
  styleUrls: {
    ios: 'footer.ios.scss',
    md: 'footer.md.scss'
  }
})
export class Footer implements ComponentInterface {
  private keyboardWillShowHandler?: () => void;
  private keyboardWillHideHandler?: () => void;

  @State() keyboardVisible = false;

  @Element() el!: HTMLElement;

  /**
   * If `true`, the footer will be translucent.
   * Only applies when the mode is `"ios"` and the device supports
   * [`backdrop-filter`](https://developer.mozilla.org/en-US/docs/Web/CSS/backdrop-filter#Browser_compatibility).
   *
   * Note: In order to scroll content behind the footer, the `fullscreen`
   * attribute needs to be set on the content.
   */
  @Prop() translucent = false;

  connectedCallback() {
    if (typeof (window as any) !== 'undefined') {
      this.keyboardWillShowHandler = () => {
        this.keyboardVisible = true;
      }

      this.keyboardWillHideHandler = () => {
        setTimeout(() => this.keyboardVisible = false, 50);
      }

      window.addEventListener('keyboardWillShow', this.keyboardWillShowHandler!);
      window.addEventListener('keyboardWillHide', this.keyboardWillHideHandler!);
    }
  }

  disconnectedCallback() {
    if (typeof (window as any) !== 'undefined' && !this.keyboardWillShowHandler) {
      window.removeEventListener('keyboardWillShow', this.keyboardWillShowHandler!);
      window.removeEventListener('keyboardWillHide', this.keyboardWillHideHandler!);

      this.keyboardWillShowHandler = this.keyboardWillHideHandler = undefined;
    }
  }

  render() {
    const mode = getIonMode(this);
    const translucent = this.translucent;
    const tabs = this.el.closest('ion-tabs');
    const tabBar = tabs ? tabs.querySelector('ion-tab-bar') : null;
    return (
      <Host
        role="contentinfo"
        class={{
          [mode]: true,

          // Used internally for styling
          [`footer-${mode}`]: true,

          [`footer-translucent`]: translucent,
          [`footer-translucent-${mode}`]: translucent,
          'footer-toolbar-padding': !this.keyboardVisible && (!tabBar || tabBar.slot === 'top')
        }}
      >
        { mode === 'ios' && translucent &&
          <div class="footer-background"></div>
        }
        <slot></slot>
      </Host>
    );
  }
}
