import { Component, Element, Event, EventEmitter, Listen, Method, Prop, QueueApi } from '@stencil/core';

import { Color, Config, Mode, ScrollBaseDetail, ScrollDetail } from '../../interface';
import { createColorClasses } from '../../utils/theme';

@Component({
  tag: 'ion-content',
  styleUrls: {
    ios: 'content.ios.scss',
    md: 'content.md.scss'
  },
  shadow: true
})
export class Content {

  private watchDog: any;
  private isScrolling = false;
  private lastScroll = 0;
  private queued = false;
  private cTop = -1;
  private cBottom = -1;
  private scrollEl!: HTMLElement;

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
    startTimeStamp: 0,
    currentX: 0,
    currentY: 0,
    velocityX: 0,
    velocityY: 0,
    deltaX: 0,
    deltaY: 0,
    timeStamp: 0,
    data: undefined,
    isScrolling: true,
  };

  mode!: Mode;
  @Prop() color?: Color;

  @Element() el!: HTMLStencilElement;

  @Prop({ context: 'config' }) config!: Config;
  @Prop({ context: 'queue' }) queue!: QueueApi;
  @Prop({ context: 'window' }) win!: Window;

  /**
   * If true, the content will scroll behind the headers
   * and footers. This effect can easily be seen by setting the toolbar
   * to transparent.
   */
  @Prop() fullscreen = false;

  /**
   * If true and the content does not cause an overflow scroll, the scroll interaction will cause a bounce.
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

  @Listen('body:ionNavDidChange')
  onNavChanged() {
    this.resize();
  }

  componentWillLoad() {
    if (this.forceOverscroll === undefined) {
      this.forceOverscroll = this.mode === 'ios' && ('ontouchstart' in this.win);
    }
  }

  componentDidLoad() {
    this.resize();
  }

  componentDidUnload() {
    if (this.watchDog) {
      clearInterval(this.watchDog);
    }
  }

  private resize() {
    if (this.fullscreen) {
      this.queue.read(this.readDimensions.bind(this));
    } else if (this.cTop !== 0 || this.cBottom !== 0) {
      this.cTop = this.cBottom = 0;
      this.el.forceUpdate();
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
      this.el.forceUpdate();
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
      this.queue.read(ts => {
        this.queued = false;
        this.detail.event = ev;
        updateScrollDetail(this.detail, this.scrollEl, ts, shouldStart);
        this.ionScroll.emit(this.detail);
      });
    }
  }

  @Method()
  getScrollElement(): Promise<HTMLElement> {
    return Promise.resolve(this.scrollEl);
  }

  /**
   * Scroll to the top of the component
   */
  @Method()
  scrollToTop(duration = 0): Promise<void> {
    return this.scrollToPoint(undefined, 0, duration);
  }

  /**
   * Scroll to the bottom of the component
   */
  @Method()
  scrollToBottom(duration = 0): Promise<void> {
    const y = this.scrollEl.scrollHeight - this.scrollEl.clientHeight;
    return this.scrollToPoint(undefined, y, duration);
  }

  /**
   * Scroll by a specified X/Y distance in the component
   */
  @Method()
  scrollByPoint(x: number, y: number, duration: number): Promise<any> {
    return this.scrollToPoint(x + this.scrollEl.scrollLeft, y + this.scrollEl.scrollTop, duration);
  }

  /**
   * Scroll to a specified X/Y location in the component
   */
  @Method()
  async scrollToPoint(x: number | undefined, y: number | undefined, duration = 0): Promise<void> {
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

    let resolve!: () => void;
    let startTime: number;
    const promise = new Promise<void>(r => resolve = r);
    const fromY = el.scrollTop;
    const fromX = el.scrollLeft;

    const deltaY = y != null ? y - fromY : 0;
    const deltaX = x != null ? x - fromX : 0;

    // scroll loop
    const step = (timeStamp: number) => {
      let linearTime = Math.min(1, ((timeStamp - startTime) / duration));
      const easedT = (--linearTime) * linearTime * linearTime + 1;

      if (deltaY !== 0) {
        el.scrollTop = (easedT * deltaY) + fromY;
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
        this.isScrolling = false;
        resolve();
      }
    };

    // start scroll loop
    this.isScrolling = true;

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
    this.isScrolling = false;
    this.ionScrollEnd.emit({
      isScrolling: false
    });
  }

  hostData() {
    return {
      class: {
        ...createColorClasses(this.color),
        'overscroll': this.forceOverscroll,
      },
      style: {
        '--offset-top': `${this.cTop}px`,
        '--offset-bottom': `${this.cBottom}px`,
      }
    };
  }

  render() {
    const { scrollX, scrollY, forceOverscroll } = this;

    this.resize();

    return [
      <div
        class={{
          'inner-scroll': true,
          'scroll-x': scrollX,
          'scroll-y': scrollY,
          'overscroll': (scrollX || scrollY) && !!forceOverscroll
        }}
        ref={el => this.scrollEl = el!}
        onScroll={ev => this.onScroll(ev)}>
        <slot></slot>
      </div>,
      <slot name="fixed"></slot>
    ];
  }
}

function getParentElement(el: any) {
  if (el.parentElement) {
    // normal element with a parent element
    return el.parentElement;
  }
  if (el.parentNode && el.parentNode.host) {
    // shadow dom's document fragment
    return el.parentNode.host;
  }
  return null;
}

function getPageElement(el: HTMLElement) {
  const tabs = el.closest('ion-tabs');
  if (tabs) {
    return tabs;
  }
  const page = el.closest('ion-app,ion-page,.ion-page,page-inner');
  if (page) {
    return page;
  }
  return getParentElement(el);
}

// ******** DOM READ ****************
function updateScrollDetail(
  detail: ScrollDetail,
  el: Element,
  timestamp: number,
  shouldStart: boolean
) {
  const prevX = detail.currentX;
  const prevY = detail.currentY;
  const prevT = detail.timeStamp;
  const currentX = el.scrollLeft;
  const currentY = el.scrollTop;
  if (shouldStart) {
    // remember the start positions
    detail.startTimeStamp = timestamp;
    detail.startX = currentX;
    detail.startY = currentY;
    detail.velocityX = detail.velocityY = 0;
    console.log('hhhhhh');
  }
  detail.timeStamp = timestamp;
  detail.currentX = detail.scrollLeft = currentX;
  detail.currentY = detail.scrollTop = currentY;
  detail.deltaX = currentX - detail.startX;
  detail.deltaY = currentY - detail.startY;

  const timeDelta = timestamp - prevT;
  if (timeDelta > 0 && timeDelta < 100) {
    const velocityX = (currentX - prevX) / timeDelta;
    const velocityY = (currentY - prevY) / timeDelta;
    detail.velocityX = velocityX * 0.7 + detail.velocityX * 0.3;
    detail.velocityY = velocityY * 0.7 + detail.velocityY * 0.3;
  }
}
