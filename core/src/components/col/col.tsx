import { Component, ComponentInterface, Element, Host, Listen, Prop, h } from '@stencil/core';

import { getIonMode } from '../../global/ionic-global';
import { matchBreakpoint } from '../../utils/media';

const win = window as any;
const SUPPORTS_VARS = !!(win.CSS && win.CSS.supports && win.CSS.supports('--a: 0'));
const BREAKPOINTS = ['', 'xs', 'sm', 'md', 'lg', 'xl'];

@Component({
  tag: 'ion-col',
  styleUrl: 'col.scss',
  shadow: true
})
export class Col implements ComponentInterface {

  @Element() el!: HTMLIonColElement;

  /**
   * The amount to offset the column, in terms of how many columns it should shift to the end
   * of the total available.
   */
  @Prop() offset?: string;

  /**
   * The amount to offset the column for xs screens, in terms of how many columns it should shift
   * to the end of the total available.
   */
  @Prop() offsetXs?: string;

  /**
   * The amount to offset the column for sm screens, in terms of how many columns it should shift
   * to the end of the total available.
   */
  @Prop() offsetSm?: string;

  /**
   * The amount to offset the column for md screens, in terms of how many columns it should shift
   * to the end of the total available.
   */
  @Prop() offsetMd?: string;

  /**
   * The amount to offset the column for lg screens, in terms of how many columns it should shift
   * to the end of the total available.
   */
  @Prop() offsetLg?: string;

  /**
   * The amount to offset the column for xl screens, in terms of how many columns it should shift
   * to the end of the total available.
   */
  @Prop() offsetXl?: string;

  /**
   * The order of the column, in terms of the order relative to the rest of the columns.
   * If `"first"` is passed, the column will receive the order -1 and is displayed first.
   * If `"last"` is passed, the column will receive the order 13 and is displayed last.
   * If `"auto"` is passed, the column will receive the order 0 and stays unordered.
   */
  @Prop() order?: string;

  /**
   * The order of the column for xs screens, in terms of the order relative to the rest of the columns.
   * If `"first"` is passed, the column will receive the order -1 and is displayed first.
   * If `"last"` is passed, the column will receive the order 13 and is displayed last.
   * If `"auto"` is passed, the column will receive the order 0 and stays unordered.
   */
  @Prop() orderXs?: string;

  /**
   * The order of the column for sm screens, in terms of the order relative to the rest of the columns.
   * If `"first"` is passed, the column will receive the order -1 and is displayed first.
   * If `"last"` is passed, the column will receive the order 13 and is displayed last.
   * If `"auto"` is passed, the column will receive the order 0 and stays unordered.
   */
  @Prop() orderSm?: string;

  /**
   * The order of the column for md screens, in terms of the order relative to the rest of the columns.
   * If `"first"` is passed, the column will receive the order -1 and is displayed first.
   * If `"last"` is passed, the column will receive the order 13 and is displayed last.
   * If `"auto"` is passed, the column will receive the order 0 and stays unordered.
   */
  @Prop() orderMd?: string;

  /**
   * The order of the column for lg screens, in terms of the order relative to the rest of the columns.
   * If `"first"` is passed, the column will receive the order -1 and is displayed first.
   * If `"last"` is passed, the column will receive the order 13 and is displayed last.
   * If `"auto"` is passed, the column will receive the order 0 and stays unordered.
   */
  @Prop() orderLg?: string;

  /**
   * The order of the column for xl screens, in terms of the order relative to the rest of the columns.
   * If `"first"` is passed, the column will receive the order -1 and is displayed first.
   * If `"last"` is passed, the column will receive the order 13 and is displayed last.
   * If `"auto"` is passed, the column will receive the order 0 and stays unordered.
   */
  @Prop() orderXl?: string;

  /**
   * The amount to pull the column, in terms of how many columns it should shift to the start of
   * the total available.
   */
  @Prop() pull?: string;

  /**
   * The amount to pull the column for xs screens, in terms of how many columns it should shift
   * to the start of the total available.
   */
  @Prop() pullXs?: string;
  /**
   * The amount to pull the column for sm screens, in terms of how many columns it should shift
   * to the start of the total available.
   */
  @Prop() pullSm?: string;
  /**
   * The amount to pull the column for md screens, in terms of how many columns it should shift
   * to the start of the total available.
   */
  @Prop() pullMd?: string;
  /**
   * The amount to pull the column for lg screens, in terms of how many columns it should shift
   * to the start of the total available.
   */
  @Prop() pullLg?: string;
  /**
   * The amount to pull the column for xl screens, in terms of how many columns it should shift
   * to the start of the total available.
   */
  @Prop() pullXl?: string;

  /**
   * The amount to push the column, in terms of how many columns it should shift to the end
   * of the total available.
   */
  @Prop() push?: string;

  /**
   * The amount to push the column for xs screens, in terms of how many columns it should shift
   * to the end of the total available.
   */
  @Prop() pushXs?: string;

  /**
   * The amount to push the column for sm screens, in terms of how many columns it should shift
   * to the end of the total available.
   */
  @Prop() pushSm?: string;

  /**
   * The amount to push the column for md screens, in terms of how many columns it should shift
   * to the end of the total available.
   */
  @Prop() pushMd?: string;

  /**
   * The amount to push the column for lg screens, in terms of how many columns it should shift
   * to the end of the total available.
   */
  @Prop() pushLg?: string;

  /**
   * The amount to push the column for xl screens, in terms of how many columns it should shift
   * to the end of the total available.
   */
  @Prop() pushXl?: string;

  /**
   * The size of the column, in terms of how many columns it should take up out of the total
   * available. If `"auto"` is passed, the column will be the size of its content.
   */
  @Prop() size?: string;

  /**
   * The size of the column for xs screens, in terms of how many columns it should take up out
   * of the total available. If `"auto"` is passed, the column will be the size of its content.
   */
  @Prop() sizeXs?: string;

  /**
   * The size of the column for sm screens, in terms of how many columns it should take up out
   * of the total available. If `"auto"` is passed, the column will be the size of its content.
   */
  @Prop() sizeSm?: string;

  /**
   * The size of the column for md screens, in terms of how many columns it should take up out
   * of the total available. If `"auto"` is passed, the column will be the size of its content.
   */
  @Prop() sizeMd?: string;

  /**
   * The size of the column for lg screens, in terms of how many columns it should take up out
   * of the total available. If `"auto"` is passed, the column will be the size of its content.
   */
  @Prop() sizeLg?: string;

  /**
   * The size of the column for xl screens, in terms of how many columns it should take up out
   * of the total available. If `"auto"` is passed, the column will be the size of its content.
   */
  @Prop() sizeXl?: string;

  @Listen('resize', { target: 'window' })
  onResize() {
    this.el.forceUpdate();
  }

  // Loop through all of the breakpoints to see if the media query
  // matches and grab the column value from the relevant prop if so
  private getColumns(property: string) {
    let matched;

    for (const breakpoint of BREAKPOINTS) {
      const matches = matchBreakpoint(breakpoint);

      // Grab the value of the property, if it exists and our
      // media query matches we return the value
      const columns = (this as any)[property + breakpoint.charAt(0).toUpperCase() + breakpoint.slice(1)];

      if (matches && columns !== undefined) {
        matched = columns;
      }
    }

    // Return the last matched columns since the breakpoints
    // increase in size and we want to return the largest match
    return matched;
  }

  private calculateSize() {
    const columns = this.getColumns('size');

    // If size wasn't set for any breakpoint
    // or if the user set the size without a value
    // it means we need to stick with the default and return
    // e.g. <ion-col size-md>
    if (!columns || columns === '') {
      return;
    }

    // If the size is set to auto then don't calculate a size
    const colSize = (columns === 'auto')
      ? 'auto'
      // If CSS supports variables we should use the grid columns var
      : SUPPORTS_VARS ? `calc(calc(${columns} / var(--ion-grid-columns, 12)) * 100%)`
        // Convert the columns to a percentage by dividing by the total number
        // of columns (12) and then multiplying by 100
        : ((columns / 12) * 100) + '%';

    return {
      'flex': `0 0 ${colSize}`,
      'width': `${colSize}`,
      'max-width': `${colSize}`
    };
  }

  private calculateOrder() {
    const columns = this.getColumns('order');

    if (!columns) {
      return;
    }

    // If the order is set to auto then don't change the order
    const orderSize = (columns === 'auto')
      ? 0
      : (columns === 'first') ? -1
        : (columns === 'last') ? 13
          : columns;

    return {
      'order': `${orderSize}`
    };
  }

  // Called by push, pull, and offset since they use the same calculations
  private calculatePosition(property: string, modifier: string) {
    const columns = this.getColumns(property);

    if (!columns) {
      return;
    }

    // If the number of columns passed are greater than 0 and less than
    // 12 we can position the column, else default to auto
    const amount = SUPPORTS_VARS
      // If CSS supports variables we should use the grid columns var
      ? `calc(calc(${columns} / var(--ion-grid-columns, 12)) * 100%)`
      // Convert the columns to a percentage by dividing by the total number
      // of columns (12) and then multiplying by 100
      : (columns > 0 && columns < 12) ? (columns / 12 * 100) + '%' : 'auto';

    return {
      [modifier]: amount
    };
  }

  private calculateOffset(isRTL: boolean) {
    return this.calculatePosition('offset', isRTL ? 'margin-right' : 'margin-left');
  }

  private calculatePull(isRTL: boolean) {
    return this.calculatePosition('pull', isRTL ? 'left' : 'right');
  }

  private calculatePush(isRTL: boolean) {
    return this.calculatePosition('push', isRTL ? 'right' : 'left');
  }

  render() {
    const isRTL = document.dir === 'rtl';
    const mode = getIonMode(this);
    return (
      <Host
        class={{
          [mode]: true
        }}
        style={{
          ...this.calculateOffset(isRTL),
          ...this.calculatePull(isRTL),
          ...this.calculatePush(isRTL),
          ...this.calculateOrder(),
          ...this.calculateSize(),
        }}
      >
        <slot></slot>
      </Host>
    );
  }
}
