import { Component, ComponentInterface, Element, Event, EventEmitter, Host, Listen, Method, Prop, forceUpdate, h, readTask } from '@stencil/core';

import { config } from '../../global/config';
import { getIonMode } from '../../global/ionic-global';
import { Color, ScrollBaseDetail, ScrollDetail } from '../../interface';
import { isPlatform } from '../../utils/platform';
import { createColorClasses, hostContext } from '../../utils/theme';

/**
 * @slot - Content is placed in the scrollable area if provided without a slot.
 * @slot fixed - Should be used for fixed content that should not scroll.
 *
 * @part background - The background of the content.
 * @part scroll - The scrollable container of the content.
 */
@Component({
  tag: 'ion-content',
  styleUrl: 'content.scss',
  shadow: true
})
export class Content implements ComponentInterface {

  private watchDog: any;
  private isScrolling = false;
  private lastScroll = 0;
  private queued = false;
  private cTop = -1;
  private cBottom = -1;
  private scrollEl!: HTMLElement;
  private isMainContent = true;

  // Detail is used in a hot loop in the scroll event, by allocating it here
  // V8 will be able to inline any read/write to it since it's a monomorphic class.
  // https://mrale.ph/blog/2015/01/11/whats-up-with-monomorphism.html
  private detail: ScrollDetail = {
    scrollTop: 0,
    scrollLeft: 0,
    type: 'scroll',
    event: undefined!,
    startX: 0,
    startY: 0,
    startTime: 0,
    currentX: 0,
    currentY: 0,
    velocityX: 0,
    velocityY: 0,
    deltaX: 0,
    deltaY: 0,
    currentTime: 0,
    data: undefined,
    isScrolling: true,
  };

  @Element() el!: HTMLIonContentElement;

  /**
   * The color to use from your application's color palette.
   * Default options are: `"primary"`, `"secondary"`, `"tertiary"`, `"success"`, `"warning"`, `"danger"`, `"light"`, `"medium"`, and `"dark"`.
   * For more information on colors, see [theming](/docs/theming/basics).
   */
  @Prop({ reflect: true }) color?: Color;

  /**
   * If `true`, the content will scroll behind the headers
   * and footers. This effect can easily be seen by setting the toolbar
   * to transparent.
   */
  @Prop() fullscreen = false;

  /**
   * If `true` and the content does not cause an overflow scroll, the scroll interaction will cause a bounce.
   * If the content exceeds the bounds of ionContent, nothing will change.
   * Note, the does not disable the system bounce on iOS. That is an OS level setting.
   */
  @Prop({ mutable: true }) forceOverscroll?: boolean;

  /**
   * If you want to enable the content scrolling in the X axis, set this property to `true`.
   */
  @Prop() scrollX = false;

  /**
   * If you want to disable the content scrolling in the Y axis, set this property to `false`.
   */
  @Prop() scrollY = true;

  /**
   * Because of performance reasons, ionScroll events are disabled by default, in order to enable them
   * and start listening from (ionScroll), set this property to `true`.
   */
  @Prop() scrollEvents = false;

  /**
   * Emitted when the scroll has started.
   */
  @Event() ionScrollStart!: EventEmitter<ScrollBaseDetail>;

  /**
   * Emitted while scrolling. This event is disabled by default.
   * Look at the property: `scrollEvents`
   */
  @Event() ionScroll!: EventEmitter<ScrollDetail>;

  /**
   * Emitted when the scroll has ended.
   */
  @Event() ionScrollEnd!: EventEmitter<ScrollBaseDetail>;

  connectedCallback() {
    this.isMainContent = this.el.closest('ion-menu, ion-popover, ion-modal') === null;
  }

  disconnectedCallback() {
    this.onScrollEnd();
  }

  @Listen('appload', { target: 'window' })
  onAppLoad() {
    this.resize();
  }

  @Listen('click', { capture: true })
  onClick(ev: Event) {
    if (this.isScrolling) {
      ev.preventDefault();
      ev.stopPropagation();
    }
  }

  private shouldForceOverscroll() {
    const { forceOverscroll } = this;
    const mode = getIonMode(this);
    return forceOverscroll === undefined
      ? mode === 'ios' && isPlatform('ios')
      : forceOverscroll;
  }

  private resize() {
    if (this.fullscreen) {
      readTask(() => this.readDimensions());
    } else if (this.cTop !== 0 || this.cBottom !== 0) {
      this.cTop = this.cBottom = 0;
      forceUpdate(this);
    }
  }

  private readDimensions() {
    const page = getPageElement(this.el);
    const top = Math.max(this.el.offsetTop, 0);
    const bottom = Math.max(page.offsetHeight - top - this.el.offsetHeight, 0);
    const dirty = top !== this.cTop || bottom !== this.cBottom;
    if (dirty) {
      this.cTop = top;
      this.cBottom = bottom;
      forceUpdate(this);
    }
  }

  private onScroll(ev: UIEvent) {
    const timeStamp = Date.now();
    const shouldStart = !this.isScrolling;
    this.lastScroll = timeStamp;
    if (shouldStart) {
      this.onScrollStart();

    }
    if (!this.queued && this.scrollEvents) {
      this.queued = true;
      readTask(ts => {
        this.queued = false;
        this.detail.event = ev;
        updateScrollDetail(this.detail, this.scrollEl, ts, shouldStart);
        this.ionScroll.emit(this.detail);
      });
    }
  }

  /**
   * Get the element where the actual scrolling takes place.
   * This element can be used to subscribe to `scroll` events or manually modify
   * `scrollTop`. However, it's recommended to use the API provided by `ion-content`:
   *
   * i.e. Using `ionScroll`, `ionScrollStart`, `ionScrollEnd` for scrolling events
   * and `scrollToPoint()` to scroll the content into a certain point.
   */
  @Method()
  getScrollElement(): Promise<HTMLElement> {
    return Promise.resolve(this.scrollEl);
  }

  /**
   * Scroll to the top of the component.
   *
   * @param duration The amount of time to take scrolling to the top. Defaults to `0`.
   */
  @Method()
  scrollToTop(duration = 0): Promise<void> {
    return this.scrollToPoint(undefined, 0, duration);
  }

  /**
   * Scroll to the bottom of the component.
   *
   * @param duration The amount of time to take scrolling to the bottom. Defaults to `0`.
   */
  @Method()
  scrollToBottom(duration = 0): Promise<void> {
    const y = this.scrollEl.scrollHeight - this.scrollEl.clientHeight;
    return this.scrollToPoint(undefined, y, duration);
  }

  /**
   * Scroll by a specified X/Y distance in the component.
   *
   * @param x The amount to scroll by on the horizontal axis.
   * @param y The amount to scroll by on the vertical axis.
   * @param duration The amount of time to take scrolling by that amount.
   */
  @Method()
  scrollByPoint(x: number, y: number, duration: number): Promise<void> {
    return this.scrollToPoint(x + this.scrollEl.scrollLeft, y + this.scrollEl.scrollTop, duration);
  }

  /**
   * Scroll to a specified X/Y location in the component.
   *
   * @param x The point to scroll to on the horizontal axis.
   * @param y The point to scroll to on the vertical axis.
   * @param duration The amount of time to take scrolling to that point. Defaults to `0`.
   */
  @Method()
  async scrollToPoint(x: number | undefined | null, y: number | undefined | null, duration = 0): Promise<void> {
    const el = this.scrollEl;
    if (duration < 32) {
      if (y != null) {
        el.scrollTop = y;
      }
      if (x != null) {
        el.scrollLeft = x;
      }
      return;
    }

    // Stop possible Momentum Scroll
    el.style.setProperty('--overflow', 'hidden');

    let resolve!: () => void;
    let startTime = 0;
    const promise = new Promise<void>(r => resolve = r);
    const fromY = el.scrollTop;
    const fromX = el.scrollLeft;

    const deltaY = y != null ? y - fromY : 0;
    const deltaX = x != null ? x - fromX : 0;

    // scroll loop
    const step = (timeStamp: number) => {
      const linearTime = Math.min(1, ((timeStamp - startTime) / duration)) - 1;
      const easedT = Math.pow(linearTime, 3) + 1;

      if (deltaY !== 0) {
        el.scrollTop = Math.floor((easedT * deltaY) + fromY);
      }
      if (deltaX !== 0) {
        el.scrollLeft = Math.floor((easedT * deltaX) + fromX);
      }

      if (easedT < 1) {
        // do not use DomController here
        // must use nativeRaf in order to fire in the next frame
        // TODO: remove as any
        requestAnimationFrame(step);

      } else {
        resolve();

        // Reset the Overflow Property to Auto
        setTimeout(() => {
          el.style.setProperty('--overflow', 'auto');
        }, 10);
      }
    };
    // chill out for a frame first
    requestAnimationFrame(ts => {
      startTime = ts;
      step(ts);
    });
    return promise;
  }

  private onScrollStart() {
    this.isScrolling = true;
    this.ionScrollStart.emit({
      isScrolling: true
    });

    if (this.watchDog) {
      clearInterval(this.watchDog);
    }
    // watchdog
    this.watchDog = setInterval(() => {
      if (this.lastScroll < Date.now() - 120) {
        this.onScrollEnd();
      }
    }, 100);
  }

  private onScrollEnd() {
    clearInterval(this.watchDog);
    this.watchDog = null;
    if (this.isScrolling) {
      this.isScrolling = false;
      this.ionScrollEnd.emit({
        isScrolling: false
      });
    }
  }

  render() {
    const { isMainContent, scrollX, scrollY } = this;
    const mode = getIonMode(this);
    const forceOverscroll = this.shouldForceOverscroll();
    const TagType = isMainContent ? 'main' : 'div' as any;
    const transitionShadow = (mode === 'ios' && config.getBoolean('experimentalTransitionShadow', true));

    this.resize();

    return (
      <Host
        class={createColorClasses(this.color, {
          [mode]: true,
          'content-sizing': hostContext('ion-popover', this.el),
          'overscroll': forceOverscroll,
        })}
        style={{
          '--offset-top': `${this.cTop}px`,
          '--offset-bottom': `${this.cBottom}px`,
        }}
      >
        <div id="background-content" part="background"></div>
        <TagType
          class={{
            'inner-scroll': true,
            'scroll-x': scrollX,
            'scroll-y': scrollY,
            'overscroll': (scrollX || scrollY) && forceOverscroll
          }}
          ref={(el: HTMLElement) => this.scrollEl = el!}
          onScroll={(this.scrollEvents) ? (ev: UIEvent) => this.onScroll(ev) : undefined}
          part="scroll"
        >
          <slot></slot>
        </TagType>

        {transitionShadow ? (
          <div class="transition-effect">
            <div class="transition-cover"></div>
            <div class="transition-shadow"></div>
          </div>
        ) : null}

        <slot name="fixed"></slot>
      </Host>
    );
  }
}

const getParentElement = (el: any) => {
  if (el.parentElement) {
    // normal element with a parent element
    return el.parentElement;
  }
  if (el.parentNode && el.parentNode.host) {
    // shadow dom's document fragment
    return el.parentNode.host;
  }
  return null;
};

const getPageElement = (el: HTMLElement) => {
  const tabs = el.closest('ion-tabs');
  if (tabs) {
    return tabs;
  }
  const page = el.closest('ion-app,ion-page,.ion-page,page-inner');
  if (page) {
    return page;
  }
  return getParentElement(el);
};

// ******** DOM READ ****************
const updateScrollDetail = (
  detail: ScrollDetail,
  el: Element,
  timestamp: number,
  shouldStart: boolean
) => {
  const prevX = detail.currentX;
  const prevY = detail.currentY;
  const prevT = detail.currentTime;
  const currentX = el.scrollLeft;
  const currentY = el.scrollTop;
  const timeDelta = timestamp - prevT;

  if (shouldStart) {
    // remember the start positions
    detail.startTime = timestamp;
    detail.startX = currentX;
    detail.startY = currentY;
    detail.velocityX = detail.velocityY = 0;
  }
  detail.currentTime = timestamp;
  detail.currentX = detail.scrollLeft = currentX;
  detail.currentY = detail.scrollTop = currentY;
  detail.deltaX = currentX - detail.startX;
  detail.deltaY = currentY - detail.startY;

  if (timeDelta > 0 && timeDelta < 100) {
    const velocityX = (currentX - prevX) / timeDelta;
    const velocityY = (currentY - prevY) / timeDelta;
    detail.velocityX = velocityX * 0.7 + detail.velocityX * 0.3;
    detail.velocityY = velocityY * 0.7 + detail.velocityY * 0.3;
  }
};
