import { Component, ComponentInterface, Element, Host, Prop, h, readTask, writeTask } from '@stencil/core';

import { getIonMode } from '../../global/ionic-global';

import { cloneElement, createHeaderIndex, handleContentScroll, handleToolbarIntersection, setHeaderActive } from './header.utils';
/**
 * @virtualProp {"ios" | "md"} mode - The mode determines which platform styles to use.
 */
@Component({
  tag: 'ion-header',
  styleUrls: {
    ios: 'header.ios.scss',
    md: 'header.md.scss'
  }
})
export class Header implements ComponentInterface {

  private collapsableHeaderInitialized = false;
  private scrollEl?: HTMLElement;
  private contentScrollCallback?: any;
  private intersectionObserver?: any;

  @Element() el!: HTMLElement;

  /**
   * If `true`, the header will collapse on scroll of the content.
   * Only applies in `ios` mode.
   *
   * Typically used for [Collapsable Large Titles](https://ionicframework.com/docs/api/title#collapsable-large-titles)
   */
  @Prop() collapse = false;

  /**
   * If `true`, the header will be translucent.
   * Only applies when the mode is `"ios"` and the device supports
   * [`backdrop-filter`](https://developer.mozilla.org/en-US/docs/Web/CSS/backdrop-filter#Browser_compatibility).
   *
   * Note: In order to scroll content behind the header, the `fullscreen`
   * attribute needs to be set on the content.
   */
  @Prop() translucent = false;

  async componentDidLoad() {
    await this.checkCollapsableHeader();
  }

  async componentDidUpdate() {
    await this.checkCollapsableHeader();
  }

  componentDidUnload() {
    this.destroyCollapsableHeader();
  }

  private async checkCollapsableHeader() {

    // Determine if the header can collapse
    const canCollapse = (this.collapse && getIonMode(this) === 'ios') ? this.collapse : false;

    if (!canCollapse && this.collapsableHeaderInitialized) {
      this.destroyCollapsableHeader();
    } else if (canCollapse && !this.collapsableHeaderInitialized) {
      const tabs = this.el.closest('ion-tabs');
      const page = this.el.closest('ion-app,ion-page,.ion-page,page-inner');

      const pageEl = (tabs) ? tabs : (page) ? page : null;
      const contentEl = (pageEl) ? pageEl.querySelector('ion-content') : null;

      await this.setupCollapsableHeader(contentEl, pageEl);
    }
  }

  private destroyCollapsableHeader() {
    if (this.intersectionObserver) {
      this.intersectionObserver.disconnect();
      this.intersectionObserver = undefined;
    }

    if (this.scrollEl && this.contentScrollCallback) {
      this.scrollEl.removeEventListener('scroll', this.contentScrollCallback);
      this.contentScrollCallback = undefined;
    }
  }

  private async setupCollapsableHeader(contentEl: HTMLIonContentElement | null, pageEl: Element | null) {
    if (!contentEl || !pageEl) { console.error('ion-header requires a content to collapse, make sure there is an ion-content.'); return; }

    this.scrollEl = await contentEl.getScrollElement();

    readTask(() => {
      const headers = pageEl.querySelectorAll('ion-header');
      const mainHeader = Array.from(headers).find((header: any) => !header.collapse) as HTMLElement | undefined;

      if (!mainHeader || !this.scrollEl) { return; }

      const mainHeaderIndex = createHeaderIndex(mainHeader);
      const scrollHeaderIndex = createHeaderIndex(this.el);

      if (!mainHeaderIndex || !scrollHeaderIndex) { return; }

      setHeaderActive(mainHeaderIndex, false);

      // TODO: Find a better way to do this
      let remainingHeight = 0;
      for (let i = 1; i <= scrollHeaderIndex.toolbars.length - 1; i++) {
        remainingHeight += scrollHeaderIndex.toolbars[i].el.clientHeight;
      }

      /**
       * Handle interaction between toolbar collapse and
       * showing/hiding content in the primary ion-header
       */
      const toolbarIntersection = (ev: any) => { handleToolbarIntersection(ev, mainHeaderIndex, scrollHeaderIndex); };

      readTask(() => {
        const mainHeaderHeight = mainHeaderIndex.el.clientHeight;
        this.intersectionObserver = new IntersectionObserver(toolbarIntersection, { threshold: 0.25, rootMargin: `-${mainHeaderHeight}px 0px 0px 0px` });
        this.intersectionObserver.observe(scrollHeaderIndex.toolbars[0].el);
      });

      /**
       * Handle scaling of large iOS titles and
       * showing/hiding border on last toolbar
       * in primary header
       */
      this.contentScrollCallback = () => { handleContentScroll(this.scrollEl!, mainHeaderIndex, scrollHeaderIndex, remainingHeight); };
      this.scrollEl.addEventListener('scroll', this.contentScrollCallback);
    });

    writeTask(() => {
      cloneElement('ion-title');
      cloneElement('ion-back-button');
    });

    this.collapsableHeaderInitialized = true;
  }

  render() {
    const mode = getIonMode(this);
    return (
      <Host
        role="banner"
        class={{
          [mode]: true,

          // Used internally for styling
          [`header-${mode}`]: true,

          [`header-translucent`]: this.translucent,
          [`header-collapse-${mode}`]: this.collapse,
          [`header-translucent-${mode}`]: this.translucent,
        }}
      >
      </Host>
    );
  }
}
