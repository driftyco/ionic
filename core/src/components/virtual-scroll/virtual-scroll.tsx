import { Component, ComponentInterface, Element, FunctionalComponent, Host, Listen, Method, Prop, State, Watch, forceUpdate, h, readTask, writeTask } from '@stencil/core';

import { Cell, DomRenderFn, FooterHeightFn, HeaderFn, HeaderHeightFn, ItemHeightFn, ItemRenderFn, VirtualNode } from '../../interface';
import { componentOnReady } from '../../utils/helpers';

import { CELL_TYPE_FOOTER, CELL_TYPE_HEADER, CELL_TYPE_ITEM } from './constants';
import { Range, calcCells, calcHeightIndex, doRender, findCellIndex, getRange, getShouldUpdate, getViewport, inplaceUpdate, positionForIndex, resizeBuffer, updateVDom } from './virtual-scroll-utils';

@Component({
  tag: 'ion-virtual-scroll',
  styleUrl: 'virtual-scroll.scss'
})
export class VirtualScroll implements ComponentInterface {

  private contentEl?: HTMLElement;
  private scrollEl?: HTMLElement;
  private range: Range = { offset: 0, length: 0 };
  private timerUpdate: any;
  private heightIndex?: Uint32Array;
  private viewportHeight = 0;
  private cells: Cell[] = [];
  private virtualDom: VirtualNode[] = [];
  private isEnabled = false;
  private viewportOffset = 0;
  private currentScrollTop = 0;
  private indexDirty = 0;
  private lastItemLen = 0;
  private rmEvent: (() => void) | undefined;

  @Element() el!: HTMLIonVirtualScrollElement;

  @State() totalHeight = 0;

  /**
   * It is important to provide this
   * if virtual item height will be significantly larger than the default
   * The approximate height of each virtual item template's cell.
   * This dimension is used to help determine how many cells should
   * be created when initialized, and to help calculate the height of
   * the scrollable area. This height value can only use `px` units.
   * Note that the actual rendered size of each cell comes from the
   * app's CSS, whereas this approximation is used to help calculate
   * initial dimensions before the item has been rendered.
   */
  @Prop() approxItemHeight = 45;

  /**
   * The approximate height of each header template's cell.
   * This dimension is used to help determine how many cells should
   * be created when initialized, and to help calculate the height of
   * the scrollable area. This height value can only use `px` units.
   * Note that the actual rendered size of each cell comes from the
   * app's CSS, whereas this approximation is used to help calculate
   * initial dimensions before the item has been rendered.
   */
  @Prop() approxHeaderHeight = 30;

  /**
   * The approximate width of each footer template's cell.
   * This dimension is used to help determine how many cells should
   * be created when initialized, and to help calculate the height of
   * the scrollable area. This height value can only use `px` units.
   * Note that the actual rendered size of each cell comes from the
   * app's CSS, whereas this approximation is used to help calculate
   * initial dimensions before the item has been rendered.
   */
  @Prop() approxFooterHeight = 30;

  /**
   * Section headers and the data used within its given
   * template can be dynamically created by passing a function to `headerFn`.
   * For example, a large list of contacts usually has dividers between each
   * letter in the alphabet. App's can provide their own custom `headerFn`
   * which is called with each record within the dataset. The logic within
   * the header function can decide if the header template should be used,
   * and what data to give to the header template. The function must return
   * `null` if a header cell shouldn't be created.
   */
  @Prop() headerFn?: HeaderFn;

  /**
   * Section footers and the data used within its given
   * template can be dynamically created by passing a function to `footerFn`.
   * The logic within the footer function can decide if the footer template
   * should be used, and what data to give to the footer template. The function
   * must return `null` if a footer cell shouldn't be created.
   */
  @Prop() footerFn?: HeaderFn;

  /**
   * The data that builds the templates within the virtual scroll.
   * It's important to note that when this data has changed, then the
   * entire virtual scroll is reset, which is an expensive operation and
   * should be avoided if possible.
   */
  @Prop() items?: any[];

  /**
   * An optional function that maps each item within their height.
   * When this function is provides, heavy optimizations and fast path can be taked by
   * `ion-virtual-scroll` leading to massive performance improvements.
   *
   * This function allows to skip all DOM reads, which can be Doing so leads
   * to massive performance
   */
  @Prop() itemHeight?: ItemHeightFn;

  /**
   * An optional function that maps each item header within their height.
   */
  @Prop() headerHeight?: HeaderHeightFn;

  /**
   * An optional function that maps each item footer within their height.
   */
  @Prop() footerHeight?: FooterHeightFn;

  /**
   * NOTE: only JSX API for stencil.
   *
   * Provide a render function for the items to be rendered. Returns a JSX virtual-dom.
   */
  @Prop() renderItem?: (item: any, index: number) => any;

  /**
   * NOTE: only JSX API for stencil.
   *
   * Provide a render function for the header to be rendered. Returns a JSX virtual-dom.
   */
  @Prop() renderHeader?: (item: any, index: number) => any;

  /**
   * NOTE: only JSX API for stencil.
   *
   * Provide a render function for the footer to be rendered. Returns a JSX virtual-dom.
   */
  @Prop() renderFooter?: (item: any, index: number) => any;

  /**
   * NOTE: only Vanilla JS API.
   */
  @Prop() nodeRender?: ItemRenderFn;

  /** @internal */
  @Prop() domRender?: DomRenderFn;

  @Watch('itemHeight')
  @Watch('headerHeight')
  @Watch('footerHeight')
  @Watch('items')
  itemsChanged() {
    this.calcCells();
    this.updateVirtualScroll();
  }

  componentWillLoad() {
    console.warn(`[Deprecation Warning]: ion-virtual-scroll has been deprecated and will be removed in Ionic Framework v7.0. See https://ionicframework.com/docs/angular/virtual-scroll for migration steps.`);
  }

  async connectedCallback() {
    const contentEl = this.el.closest('ion-content');
    if (!contentEl) {
      console.error('<ion-virtual-scroll> must be used inside an <ion-content>');
      return;
    }
    this.scrollEl = await contentEl.getScrollElement();
    this.contentEl = contentEl;
    this.calcCells();
    this.updateState();
  }

  componentDidUpdate() {
    this.updateState();
  }

  disconnectedCallback() {
    this.scrollEl = undefined;
  }

  @Listen('resize', { target: 'window' })
  onResize() {
    this.calcCells();
    this.updateVirtualScroll();
  }

  /**
   * Returns the position of the virtual item at the given index.
   */
  @Method()
  positionForItem(index: number): Promise<number> {
    return Promise.resolve(positionForIndex(index, this.cells, this.getHeightIndex()));
  }

  /**
   * This method marks a subset of items as dirty, so they can be re-rendered. Items should be marked as
   * dirty any time the content or their style changes.
   *
   * The subset of items to be updated can are specifing by an offset and a length.
   */
  @Method()
  async checkRange(offset: number, len = -1) {
    // TODO: kind of hacky how we do in-place updated of the cells
    // array. this part needs a complete refactor
    if (!this.items) {
      return;
    }
    const length = (len === -1)
      ? this.items.length - offset
      : len;

    const cellIndex = findCellIndex(this.cells, offset);
    const cells = calcCells(
      this.items,
      this.itemHeight,
      this.headerHeight,
      this.footerHeight,
      this.headerFn,
      this.footerFn,
      this.approxHeaderHeight,
      this.approxFooterHeight,
      this.approxItemHeight,
      cellIndex, offset, length
    );
    this.cells = inplaceUpdate(this.cells, cells, cellIndex);
    this.lastItemLen = this.items.length;
    this.indexDirty = Math.max(offset - 1, 0);

    this.scheduleUpdate();
  }

  /**
   * This method marks the tail the items array as dirty, so they can be re-rendered.
   *
   * It's equivalent to calling:
   *
   * ```js
   * virtualScroll.checkRange(lastItemLen);
   * ```
   */
  @Method()
  async checkEnd() {
    if (this.items) {
      this.checkRange(this.lastItemLen);
    }
  }

  private onScroll = () => {
    this.updateVirtualScroll();
  }

  private updateVirtualScroll() {
    // do nothing if virtual-scroll is disabled
    if (!this.isEnabled || !this.scrollEl) {
      return;
    }

    // unschedule future updates
    if (this.timerUpdate) {
      clearTimeout(this.timerUpdate);
      this.timerUpdate = undefined;
    }

    // schedule DOM operations into the stencil queue
    readTask(this.readVS.bind(this));
    writeTask(this.writeVS.bind(this));
  }

  private readVS() {
    const { contentEl, scrollEl, el } = this;
    let topOffset = 0;
    let node: HTMLElement | null = el;
    while (node && node !== contentEl) {
      topOffset += node.offsetTop;
      node = node.offsetParent as HTMLElement;
    }
    this.viewportOffset = topOffset;
    if (scrollEl) {
      this.viewportHeight = scrollEl.offsetHeight;
      this.currentScrollTop = scrollEl.scrollTop;
    }
  }

  private writeVS() {
    const dirtyIndex = this.indexDirty;

    // get visible viewport
    const scrollTop = this.currentScrollTop - this.viewportOffset;
    const viewport = getViewport(scrollTop, this.viewportHeight, 100);

    // compute lazily the height index
    const heightIndex = this.getHeightIndex();

    // get array bounds of visible cells base in the viewport
    const range = getRange(heightIndex, viewport, 2);

    // fast path, do nothing
    const shouldUpdate = getShouldUpdate(dirtyIndex, this.range, range);
    if (!shouldUpdate) {
      return;
    }
    this.range = range;

    // in place mutation of the virtual DOM
    updateVDom(
      this.virtualDom,
      heightIndex,
      this.cells,
      range
    );

    // Write DOM
    // Different code paths taken depending of the render API used
    if (this.nodeRender) {
      doRender(this.el, this.nodeRender, this.virtualDom, this.updateCellHeight.bind(this));
    } else if (this.domRender) {
      this.domRender(this.virtualDom);
    } else if (this.renderItem) {
      forceUpdate(this);
    }
  }

  private updateCellHeight(cell: Cell, node: any) {
    const update = () => {
      if ((node as any)['$ionCell'] === cell) {
        const style = window.getComputedStyle(node);
        const height = node.offsetHeight + parseFloat(style.getPropertyValue('margin-bottom'));
        this.setCellHeight(cell, height);
      }
    };
    if (node) {
      componentOnReady(node, update);
    } else {
      update();
    }
  }

  private setCellHeight(cell: Cell, height: number) {
    const index = cell.i;
    // the cell might changed since the height update was scheduled
    if (cell !== this.cells[index]) {
      return;
    }
    if (cell.height !== height || cell.visible !== true) {
      cell.visible = true;
      cell.height = height;
      this.indexDirty = Math.min(this.indexDirty, index);
      this.scheduleUpdate();
    }
  }

  private scheduleUpdate() {
    clearTimeout(this.timerUpdate);
    this.timerUpdate = setTimeout(() => this.updateVirtualScroll(), 100);
  }

  private updateState() {
    const shouldEnable = !!(
      this.scrollEl &&
      this.cells
    );
    if (shouldEnable !== this.isEnabled) {
      this.enableScrollEvents(shouldEnable);
      if (shouldEnable) {
        this.updateVirtualScroll();
      }
    }
  }

  private calcCells() {
    if (!this.items) {
      return;
    }
    this.lastItemLen = this.items.length;
    this.cells = calcCells(
      this.items,
      this.itemHeight,
      this.headerHeight,
      this.footerHeight,
      this.headerFn,
      this.footerFn,
      this.approxHeaderHeight,
      this.approxFooterHeight,
      this.approxItemHeight,
      0, 0, this.lastItemLen
    );
    this.indexDirty = 0;
  }

  private getHeightIndex(): Uint32Array {
    if (this.indexDirty !== Infinity) {
      this.calcHeightIndex(this.indexDirty);
    }
    return this.heightIndex!;
  }

  private calcHeightIndex(index = 0) {
    // TODO: optimize, we don't need to calculate all the cells
    this.heightIndex = resizeBuffer(this.heightIndex, this.cells.length);
    this.totalHeight = calcHeightIndex(this.heightIndex, this.cells, index);

    this.indexDirty = Infinity;
  }

  private enableScrollEvents(shouldListen: boolean) {
    if (this.rmEvent) {
      this.rmEvent();
      this.rmEvent = undefined;
    }

    const scrollEl = this.scrollEl;
    if (scrollEl) {
      this.isEnabled = shouldListen;
      scrollEl.addEventListener('scroll', this.onScroll);
      this.rmEvent = () => {
        scrollEl.removeEventListener('scroll', this.onScroll);
      };
    }
  }

  private renderVirtualNode(node: VirtualNode) {
    const { type, value, index } = node.cell;
    switch (type) {
      case CELL_TYPE_ITEM: return this.renderItem!(value, index);
      case CELL_TYPE_HEADER: return this.renderHeader!(value, index);
      case CELL_TYPE_FOOTER: return this.renderFooter!(value, index);
    }
  }

  render() {
    return (
      <Host
        style={{
          height: `${this.totalHeight}px`
        }}
      >
        {this.renderItem && (
          <VirtualProxy dom={this.virtualDom}>
            {this.virtualDom.map(node => this.renderVirtualNode(node))}
          </VirtualProxy>
        )}
      </Host>
    );
  }
}

const VirtualProxy: FunctionalComponent<{dom: VirtualNode[]}> = ({ dom }, children, utils) => {
  return utils.map(children, (child, i) => {
    const node = dom[i];
    const vattrs = child.vattrs || {};
    let classes = vattrs.class || '';
    classes += 'virtual-item ';
    if (!node.visible) {
      classes += 'virtual-loading';
    }
    return {
      ...child,
      vattrs: {
        ...vattrs,
        class: classes,
        style: {
          ...vattrs.style,
          transform: `translate3d(0,${node.top}px,0)`
        }
      }
    };
  });
};
