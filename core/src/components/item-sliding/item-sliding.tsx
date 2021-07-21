import { Component, ComponentInterface, Element, Event, EventEmitter, Host, Method, Prop, State, Watch, h } from '@stencil/core';

import { getIonMode } from '../../global/ionic-global';
import { Gesture, GestureDetail, Side } from '../../interface';
import { isEndSide } from '../../utils/helpers';

const SWIPE_MARGIN = 30;
const ELASTIC_FACTOR = 0.55;

const enum ItemSide {
  None = 0,
  Start = 1 << 0,
  End = 1 << 1,
  Both = Start | End
}

const enum SlidingState {
  Disabled = 1 << 1,
  Enabled = 1 << 2,
  End = 1 << 3,
  Start = 1 << 4,

  SwipeEnd = 1 << 5,
  SwipeStart = 1 << 6,
}

let openSlidingItem: HTMLIonItemSlidingElement | undefined;

@Component({
  tag: 'ion-item-sliding',
  styleUrl: 'item-sliding.scss'
})
export class ItemSliding implements ComponentInterface {

  private item: HTMLIonItemElement | null = null;
  private openAmount = 0;
  private initialOpenAmount = 0;
  private optsWidthRightSide = 0;
  private optsWidthLeftSide = 0;
  private sides = ItemSide.None;
  private tmr: number | undefined;
  private leftOptions?: HTMLIonItemOptionsElement;
  private rightOptions?: HTMLIonItemOptionsElement;
  private optsDirty = true;
  private gesture?: Gesture;
  private contentEl?: Element | null;

  @Element() el!: HTMLIonItemSlidingElement;

  @State() state: SlidingState = SlidingState.Disabled;

  /**
   * If `true`, the user cannot interact with the sliding item.
   */
  @Prop() disabled = false;
  @Watch('disabled')
  disabledChanged() {
    if (this.gesture) {
      this.gesture.enable(!this.disabled);
    }
  }

  /**
   * Emitted when the sliding position changes.
   */
  @Event() ionDrag!: EventEmitter;

  async connectedCallback() {
    this.item = this.el.querySelector('ion-item');
    await this.updateOptions();

    this.contentEl = this.el.closest('ion-content');

    this.gesture = (await import('../../utils/gesture')).createGesture({
      el: this.el,
      gestureName: 'item-swipe',
      gesturePriority: 100,
      threshold: 5,
      canStart: ev => this.canStart(ev),
      onStart: () => this.onStart(),
      onMove: ev => this.onMove(ev),
      onEnd: ev => this.onEnd(ev),
    });
    this.disabledChanged();
  }

  disconnectedCallback() {
    if (this.gesture) {
      this.gesture.destroy();
      this.gesture = undefined;
    }

    this.item = null;
    this.leftOptions = this.rightOptions = undefined;

    if (openSlidingItem === this.el) {
      openSlidingItem = undefined;
    }
  }

  /**
   * Get the amount the item is open in pixels.
   */
  @Method()
  getOpenAmount(): Promise<number> {
    return Promise.resolve(this.openAmount);
  }

  /**
   * Get the ratio of the open amount of the item compared to the width of the options.
   * If the number returned is positive, then the options on the right side are open.
   * If the number returned is negative, then the options on the left side are open.
   * If the absolute value of the number is greater than 1, the item is open more than
   * the width of the options.
   */
  @Method()
  getSlidingRatio(): Promise<number> {
    return Promise.resolve(this.getSlidingRatioSync());
  }

  /**
   * Open the sliding item.
   *
   * @param side The side of the options to open. If a side is not provided, it will open the first set of options it finds within the item.
   */
  @Method()
  async open(side: Side | undefined) {
    if (this.item === null) { return; }

    const optionsToOpen = this.getOptions(side);
    if (!optionsToOpen) { return; }

    /**
     * If side is not set, we need to infer the side
     * so we know which direction to move the options
     */
    if (side === undefined) {
      side = (optionsToOpen === this.leftOptions) ? 'start' : 'end';
    }

    // In RTL we want to switch the sides
    side = isEndSide(side) ? 'end' : 'start';

    const isStartOpen = this.openAmount < 0;
    const isEndOpen = this.openAmount > 0;

    /**
     * If a side is open and a user tries to
     * re-open the same side, we should not do anything
     */
    if (isStartOpen && optionsToOpen === this.leftOptions) { return; }
    if (isEndOpen && optionsToOpen === this.rightOptions) { return; }

    this.closeOpened();

    this.state = SlidingState.Enabled;

    requestAnimationFrame(() => {
      this.calculateOptsWidth();

      const width = (side === 'end') ? this.optsWidthRightSide : -this.optsWidthLeftSide;
      openSlidingItem = this.el;

      this.setOpenAmount(width, false);
      this.state = (side === 'end') ? SlidingState.End : SlidingState.Start;
    });
  }

  /**
   * Close the sliding item. Items can also be closed from the [List](../list).
   */
  @Method()
  async close() {
    this.setOpenAmount(0, true);
  }

  /**
   * Close all of the sliding items in the list. Items can also be closed from the [List](../list).
   */
  @Method()
  async closeOpened(): Promise<boolean> {
    if (openSlidingItem !== undefined) {
      openSlidingItem.close();
      openSlidingItem = undefined;
      return true;
    }
    return false;
  }

   /**
    * Given an optional side, return the ion-item-options element.
    *
    * @param side This side of the options to get. If a side is not provided it will
    * return the first one available.
    */
  private getOptions(side?: string): HTMLIonItemOptionsElement | undefined {
    if (side === undefined) {
      return this.leftOptions || this.rightOptions;
    } else if (side === 'start') {
      return this.leftOptions;
    } else {
      return this.rightOptions;
    }
  }

  private async updateOptions() {
    const options = this.el.querySelectorAll('ion-item-options');

    let sides = 0;

    // Reset left and right options in case they were removed
    this.leftOptions = this.rightOptions = undefined;

    for (let i = 0; i < options.length; i++) {
      const item = options.item(i);

      /**
       * We cannot use the componentOnReady helper
       * util here since we need to wait for all of these items
       * to be ready before we set `this.sides` and `this.optsDirty`.
       */
      const option = ((item as any).componentOnReady !== undefined) ? await item.componentOnReady() : item;

      const side = isEndSide(option.side) ? 'end' : 'start';

      if (side === 'start') {
        this.leftOptions = option;
        sides |= ItemSide.Start;
      } else {
        this.rightOptions = option;
        sides |= ItemSide.End;
      }
    }
    this.optsDirty = true;
    this.sides = sides;
  }

  private canStart(gesture: GestureDetail): boolean {
    /**
     * If very close to start of the screen
     * do not open left side so swipe to go
     * back will still work.
     */
    const rtl = document.dir === 'rtl';
    const atEdge = (rtl) ? (window.innerWidth - gesture.startX) < 15 : gesture.startX < 15;
    if (atEdge) {
      return false;
    }

    const selected = openSlidingItem;
    if (selected && selected !== this.el) {
      this.closeOpened();
      return false;
    }

    return !!(this.rightOptions || this.leftOptions);
  }

  private onStart() {
    openSlidingItem = this.el;
    if (this.contentEl) {
      this.contentEl.classList.add('no-slide');
    }

    if (this.tmr !== undefined) {
      clearTimeout(this.tmr);
      this.tmr = undefined;
    }
    if (this.openAmount === 0) {
      this.optsDirty = true;
      this.state = SlidingState.Enabled;
    }
    this.initialOpenAmount = this.openAmount;
    if (this.item) {
      this.item.style.transition = 'none';
    }
  }

  private onMove(gesture: GestureDetail) {
    if (this.optsDirty) {
      this.calculateOptsWidth();
    }
    let openAmount = this.initialOpenAmount - gesture.deltaX;

    switch (this.sides) {
      case ItemSide.End: openAmount = Math.max(0, openAmount); break;
      case ItemSide.Start: openAmount = Math.min(0, openAmount); break;
      case ItemSide.Both: break;
      case ItemSide.None: return;
      default: console.warn('invalid ItemSideFlags value', this.sides); break;
    }

    let optsWidth;
    if (openAmount > this.optsWidthRightSide) {
      optsWidth = this.optsWidthRightSide;
      openAmount = optsWidth + (openAmount - optsWidth) * ELASTIC_FACTOR;

    } else if (openAmount < -this.optsWidthLeftSide) {
      optsWidth = -this.optsWidthLeftSide;
      openAmount = optsWidth + (openAmount - optsWidth) * ELASTIC_FACTOR;
    }

    this.setOpenAmount(openAmount, false);
  }

  private onEnd(gesture: GestureDetail) {
    if (this.contentEl) {
      this.contentEl.classList.remove('no-slide');
    }

    const velocity = gesture.velocityX;

    let restingPoint = (this.openAmount > 0)
      ? this.optsWidthRightSide
      : -this.optsWidthLeftSide;

    // Check if the drag didn't clear the buttons mid-point
    // and we aren't moving fast enough to swipe open
    const isResetDirection = (this.openAmount > 0) === !(velocity < 0);
    const isMovingFast = Math.abs(velocity) > 0.3;
    const isOnCloseZone = Math.abs(this.openAmount) < Math.abs(restingPoint / 2);
    if (swipeShouldReset(isResetDirection, isMovingFast, isOnCloseZone)) {
      restingPoint = 0;
    }

    const state = this.state;
    this.setOpenAmount(restingPoint, true);

    if ((state & SlidingState.SwipeEnd) !== 0 && this.rightOptions) {
      this.rightOptions.fireSwipeEvent();
    } else if ((state & SlidingState.SwipeStart) !== 0 && this.leftOptions) {
      this.leftOptions.fireSwipeEvent();
    }
  }

  private calculateOptsWidth() {
    this.optsWidthRightSide = 0;
    if (this.rightOptions) {
      this.rightOptions.style.display = 'flex';
      this.optsWidthRightSide = this.rightOptions.offsetWidth;
      this.rightOptions.style.display = '';
    }

    this.optsWidthLeftSide = 0;
    if (this.leftOptions) {
      this.leftOptions.style.display = 'flex';
      this.optsWidthLeftSide = this.leftOptions.offsetWidth;
      this.leftOptions.style.display = '';
    }

    this.optsDirty = false;
  }

  private setOpenAmount(openAmount: number, isFinal: boolean) {
    if (this.tmr !== undefined) {
      clearTimeout(this.tmr);
      this.tmr = undefined;
    }
    if (!this.item) {
      return;
    }
    const style = this.item.style;
    this.openAmount = openAmount;

    if (isFinal) {
      style.transition = '';
    }

    if (openAmount > 0) {
      this.state = (openAmount >= (this.optsWidthRightSide + SWIPE_MARGIN))
        ? SlidingState.End | SlidingState.SwipeEnd
        : SlidingState.End;
    } else if (openAmount < 0) {
      this.state = (openAmount <= (-this.optsWidthLeftSide - SWIPE_MARGIN))
        ? SlidingState.Start | SlidingState.SwipeStart
        : SlidingState.Start;
    } else {
      this.tmr = setTimeout(() => {
        this.state = SlidingState.Disabled;
        this.tmr = undefined;
      }, 600) as any;

      openSlidingItem = undefined;
      style.transform = '';
      return;
    }

    style.transform = `translate3d(${-openAmount}px,0,0)`;
    this.ionDrag.emit({
      amount: openAmount,
      ratio: this.getSlidingRatioSync()
    });
  }

  private getSlidingRatioSync(): number {
    if (this.openAmount > 0) {
      return this.openAmount / this.optsWidthRightSide;
    } else if (this.openAmount < 0) {
      return this.openAmount / this.optsWidthLeftSide;
    } else {
      return 0;
    }
  }

  render() {
    const mode = getIonMode(this);
    return (
      <Host
        class={{
          [mode]: true,
          'item-sliding-active-slide': (this.state !== SlidingState.Disabled),
          'item-sliding-active-options-end': (this.state & SlidingState.End) !== 0,
          'item-sliding-active-options-start': (this.state & SlidingState.Start) !== 0,
          'item-sliding-active-swipe-end': (this.state & SlidingState.SwipeEnd) !== 0,
          'item-sliding-active-swipe-start': (this.state & SlidingState.SwipeStart) !== 0
        }}
      >
      </Host>
    );
  }
}

const swipeShouldReset = (isResetDirection: boolean, isMovingFast: boolean, isOnResetZone: boolean): boolean => {
  // The logic required to know when the sliding item should close (openAmount=0)
  // depends on three booleans (isResetDirection, isMovingFast, isOnResetZone)
  // and it ended up being too complicated to be written manually without errors
  // so the truth table is attached below: (0=false, 1=true)
  // isResetDirection | isMovingFast | isOnResetZone || shouldClose
  //         0        |       0      |       0       ||    0
  //         0        |       0      |       1       ||    1
  //         0        |       1      |       0       ||    0
  //         0        |       1      |       1       ||    0
  //         1        |       0      |       0       ||    0
  //         1        |       0      |       1       ||    1
  //         1        |       1      |       0       ||    1
  //         1        |       1      |       1       ||    1
  // The resulting expression was generated by resolving the K-map (Karnaugh map):
  return (!isMovingFast && isOnResetZone) || (isResetDirection && isMovingFast);
};
