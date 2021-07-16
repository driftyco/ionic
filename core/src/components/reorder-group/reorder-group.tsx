import { Component, ComponentInterface, Element, Event, EventEmitter, Host, Method, Prop, State, Watch, h } from '@stencil/core';

import { getIonMode } from '../../global/ionic-global';
import { Gesture, GestureDetail, ItemReorderEventDetail } from '../../interface';
import { hapticSelectionChanged, hapticSelectionEnd, hapticSelectionStart } from '../../utils/native/haptic';

const enum ReorderGroupState {
  Idle = 0,
  Active = 1,
  Complete = 2
}

@Component({
  tag: 'ion-reorder-group',
  styleUrl: 'reorder-group.scss'
})
export class ReorderGroup implements ComponentInterface {

  private selectedItemEl?: HTMLElement;
  private selectedItemHeight!: number;
  private lastToIndex = -1;
  private cachedHeights: number[] = [];
  private scrollEl?: HTMLElement;
  private gesture?: Gesture;

  private scrollElTop = 0;
  private scrollElBottom = 0;
  private scrollElInitial = 0;

  private containerTop = 0;
  private containerBottom = 0;

  @State() state = ReorderGroupState.Idle;

  @Element() el!: HTMLElement;

  /**
   * If `true`, the reorder will be hidden.
   */
  @Prop() disabled = true;
  @Watch('disabled')
  disabledChanged() {
    if (this.gesture) {
      this.gesture.enable(!this.disabled);
    }
  }

  /**
   * Event that needs to be listened to in order to complete the reorder action.
   * Once the event has been emitted, the `complete()` method then needs
   * to be called in order to finalize the reorder action.
   */
  @Event() ionItemReorder!: EventEmitter<ItemReorderEventDetail>;

  async connectedCallback() {
    const contentEl = this.el.closest('ion-content');
    if (contentEl) {
      this.scrollEl = await contentEl.getScrollElement();
    }
    this.gesture = (await import('../../utils/gesture')).createGesture({
      el: this.el,
      gestureName: 'reorder',
      gesturePriority: 110,
      threshold: 0,
      direction: 'y',
      passive: false,
      canStart: detail => this.canStart(detail),
      onStart: ev => this.onStart(ev),
      onMove: ev => this.onMove(ev),
      onEnd: () => this.onEnd(),
    });

    this.disabledChanged();
  }

  disconnectedCallback() {
    this.onEnd();
    if (this.gesture) {
      this.gesture.destroy();
      this.gesture = undefined;
    }
  }

  /**
   * Completes the reorder operation. Must be called by the `ionItemReorder` event.
   *
   * If a list of items is passed, the list will be reordered and returned in the
   * proper order.
   *
   * If no parameters are passed or if `true` is passed in, the reorder will complete
   * and the item will remain in the position it was dragged to. If `false` is passed,
   * the reorder will complete and the item will bounce back to its original position.
   *
   * @param listOrReorder A list of items to be sorted and returned in the new order or a
   * boolean of whether or not the reorder should reposition the item.
   */
  @Method()
  complete(listOrReorder?: boolean | any[]): Promise<any> {
    return Promise.resolve(this.completeSync(listOrReorder));
  }

  private canStart(ev: GestureDetail): boolean {
    if (this.selectedItemEl || this.state !== ReorderGroupState.Idle) {
      return false;
    }
    const target = ev.event.target as HTMLElement;
    const reorderEl = target.closest('ion-reorder');
    if (!reorderEl) {
      return false;
    }
    const item = findReorderItem(reorderEl, this.el);
    if (!item) {
      return false;
    }
    ev.data = item;
    return true;
  }

  private onStart(ev: GestureDetail) {
    ev.event.preventDefault();

    const target = ev.event.target as HTMLElement;
    const reorderEl = target.closest('ion-item') as HTMLElement;
    const item = this.selectedItemEl = ev.data;
    const heights = this.cachedHeights;
    heights.length = 0;
    const el = this.el;
    const listEl = el.parentElement as HTMLElement;
    const children: any = el.querySelectorAll('ion-item');
    if (!children || children.length === 0) {
      return;
    }

    let sum = 0;
    for (let i = 0; i < children.length; i++) {
      const child = children[i];
      sum += child.offsetHeight;
      heights.push(sum);
      child.$ionIndex = i;
    }

    const box = listEl.getBoundingClientRect();
    this.containerTop = box.top;
    this.containerBottom = box.bottom;

    if (this.scrollEl) {
      const scrollBox = this.scrollEl.getBoundingClientRect();
      this.scrollElInitial = this.scrollEl.scrollTop;
      this.scrollElTop = scrollBox.top + AUTO_SCROLL_MARGIN;
      this.scrollElBottom = scrollBox.bottom - AUTO_SCROLL_MARGIN;
    } else {
      this.scrollElInitial = 0;
      this.scrollElTop = 0;
      this.scrollElBottom = 0;
    }

    this.lastToIndex = indexForItem(item);
    this.selectedItemHeight = item.offsetHeight || reorderEl.offsetHeight;
    this.state = ReorderGroupState.Active;

    item.classList.add(ITEM_REORDER_SELECTED);

    hapticSelectionStart();
  }

  private onMove(ev: GestureDetail) {
    const selectedItem = this.selectedItemEl;
    if (!selectedItem) {
      return;
    }
    // Scroll if we reach the scroll margins
    const scroll = this.autoscroll(ev.currentY);

    // // Get coordinate
    const top = this.containerTop - scroll;
    const bottom = this.containerBottom - scroll;
    const currentY = Math.max(top, Math.min(ev.currentY, bottom));
    const deltaY = scroll + currentY - ev.startY;
    const normalizedY = currentY - top;
    const toIndex = this.itemIndexForTop(normalizedY);
    if (toIndex !== this.lastToIndex) {
      const fromIndex = indexForItem(selectedItem);
      this.lastToIndex = toIndex;

      hapticSelectionChanged();
      this.reorderMove(fromIndex, toIndex);
    }

    // Update selected item position
    selectedItem.style.transform = `translateY(${deltaY}px)`;
  }

  private onEnd() {
    const selectedItemEl = this.selectedItemEl;
    this.state = ReorderGroupState.Complete;
    if (!selectedItemEl) {
      this.state = ReorderGroupState.Idle;
      return;
    }

    const toIndex = this.lastToIndex;
    const fromIndex = indexForItem(selectedItemEl);

    if (toIndex === fromIndex) {
      this.completeSync();
    } else {
      this.ionItemReorder.emit({
        from: fromIndex,
        to: toIndex,
        complete: this.completeSync.bind(this)
      });
    }

    hapticSelectionEnd();
  }

  private completeSync(listOrReorder?: boolean | any[]): any {
    const selectedItemEl = this.selectedItemEl;
    if (selectedItemEl && this.state === ReorderGroupState.Complete) {
      const children = this.el.children as any;
      const len = children.length;
      const toIndex = this.lastToIndex;
      const fromIndex = indexForItem(selectedItemEl);

      if (toIndex !== fromIndex && (listOrReorder === undefined || listOrReorder === true)) {
        const ref = (fromIndex < toIndex)
          ? children[toIndex + 1]
          : children[toIndex];

        this.el.insertBefore(selectedItemEl, ref);
      }

      if (Array.isArray(listOrReorder)) {
        listOrReorder = reorderArray(listOrReorder, fromIndex, toIndex);
      }

      for (let i = 0; i < len; i++) {
        children[i].style['transform'] = '';
      }

      selectedItemEl.style.transition = '';
      selectedItemEl.classList.remove(ITEM_REORDER_SELECTED);
      this.selectedItemEl = undefined;
      this.state = ReorderGroupState.Idle;
    }
    return listOrReorder;
  }

  private itemIndexForTop(deltaY: number): number {
    const heights = this.cachedHeights;
    let i = 0;

    // TODO: since heights is a sorted array of integers, we can do
    // speed up the search using binary search. Remember that linear-search is still
    // faster than binary-search for small arrays (<64) due CPU branch misprediction.
    for (i = 0; i < heights.length; i++) {
      if (heights[i] > deltaY) {
        break;
      }
    }
    return i;
  }

  /********* DOM WRITE ********* */
  private reorderMove(fromIndex: number, toIndex: number) {
    const itemHeight = this.selectedItemHeight;
    const children = this.el.children;
    for (let i = 0; i < children.length; i++) {
      const style = (children[i] as any).style;
      let value = '';
      if (i > fromIndex && i <= toIndex) {
        value = `translateY(${-itemHeight}px)`;
      } else if (i < fromIndex && i >= toIndex) {
        value = `translateY(${itemHeight}px)`;
      }
      style['display'] = 'block';
      style['transform'] = value;
    }
  }

  private autoscroll(posY: number): number {
    if (!this.scrollEl) {
      return 0;
    }

    let amount = 0;
    if (posY < this.scrollElTop) {
      amount = -SCROLL_JUMP;
    } else if (posY > this.scrollElBottom) {
      amount = SCROLL_JUMP;
    }
    if (amount !== 0) {
      this.scrollEl.scrollBy(0, amount);
    }
    return this.scrollEl.scrollTop - this.scrollElInitial;
  }

  render() {
    const mode = getIonMode(this);
    return (
      <Host
        class={{
          [mode]: true,
          'reorder-enabled': !this.disabled,
          'reorder-list-active': this.state !== ReorderGroupState.Idle,
        }}
      >

      </Host>
    );
  }
}

const indexForItem = (element: any): number => {
  return element['$ionIndex'] !== undefined ? element['$ionIndex'] : element.querySelector('ion-item')['$ionIndex'];
};

const findReorderItem = (node: HTMLElement | null, container: HTMLElement): HTMLElement | undefined => {
  let parent: HTMLElement | null;
  while (node) {
    parent = node.parentElement;
    if (parent === container) {
      return node;
    }
    node = parent;
  }
  return undefined;
};

const AUTO_SCROLL_MARGIN = 60;
const SCROLL_JUMP = 10;
const ITEM_REORDER_SELECTED = 'reorder-selected';

const reorderArray = (array: any[], from: number, to: number): any[] => {
  const element = array[from];
  array.splice(from, 1);
  array.splice(to, 0, element);
  return array.slice();
};
