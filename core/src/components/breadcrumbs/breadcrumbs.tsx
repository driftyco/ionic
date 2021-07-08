import { Component, ComponentInterface, Element, Event, EventEmitter, Host, Listen, Prop, State, Watch, h } from '@stencil/core';

import { getIonMode } from '../../global/ionic-global';
import { BreadcrumbCollapsedClickEventDetail, Color } from '../../interface';
import { createColorClasses, hostContext } from '../../utils/theme';

/**
 * @virtualProp {"ios" | "md"} mode - The mode determines which platform styles to use.
 *
 */
@Component({
  tag: 'ion-breadcrumbs',
  styleUrls: {
    'ios': 'breadcrumbs.ios.scss',
    'md': 'breadcrumbs.md.scss'
  },
  shadow: true
})
export class Breadcrumbs implements ComponentInterface {

  @State() collapsed!: boolean;

  @State() activeChanged!: boolean;

  @Element() el!: HTMLElement;

  /**
   * The color to use from your application's color palette.
   * Default options are: `"primary"`, `"secondary"`, `"tertiary"`, `"success"`, `"warning"`, `"danger"`, `"light"`, `"medium"`, and `"dark"`.
   * For more information on colors, see [theming](/docs/theming/basics).
   */
  @Prop() color?: Color;

  /**
   * The maximum number of breadcrumbs to show before collapsing.
   */
  @Prop() maxItems?: number;

  /**
   * The number of breadcrumbs to show before the collapsed indicator.
   * If this property exists `maxItems` will be ignored.
   */
  @Prop() itemsBeforeCollapse = 1;

  /**
   * The number of breadcrumbs to show after the collapsed indicator.
   * If this property exists `maxItems` will be ignored.
   */
  @Prop() itemsAfterCollapse = 1;

  /**
   * Emitted when the collapsed indicator is clicked on.
   */
  @Event() ionCollapsedClick!: EventEmitter<BreadcrumbCollapsedClickEventDetail>;

  @Listen('collapsedClick')
  onCollapsedClick(ev: CustomEvent) {
    this.ionCollapsedClick.emit(ev.detail)
  }

  @Watch('maxItems')
  @Watch('itemsBeforeCollapse')
  @Watch('itemsAfterCollapse')
  maxItemsChanged() {
    this.resetActiveBreadcrumb();
    this.breadcrumbsInit();
  }

  componentWillLoad() {
    this.breadcrumbsInit();
  }

  private breadcrumbsInit = () => {
    this.setBreadcrumbSeparator();
    this.setMaxItems();
  }

  private resetActiveBreadcrumb = () => {
    const breadcrumbs = this.getBreadcrumbs();

    // Only reset the active breadcrumb if we were the ones to change it
    // otherwise use the one set on the component
    const activeBreadcrumb = breadcrumbs.find(breadcrumb => breadcrumb.active);
    if (activeBreadcrumb && this.activeChanged) {
      activeBreadcrumb.active = false;
    }
  }

  private setMaxItems = () => {
    const { itemsAfterCollapse, itemsBeforeCollapse, maxItems } = this;

    const breadcrumbs = this.getBreadcrumbs();

    for (const breadcrumb of breadcrumbs) {
      breadcrumb.showCollapsedIndicator = false;
      breadcrumb.collapsed = false;
    }

    // If the number of breadcrumbs exceeds the maximum number of items
    // that should show and the items before / after collapse do not
    // exceed the maximum items then we need to collapse the breadcrumbs
    const shouldCollapse = maxItems !== undefined
      && breadcrumbs.length > maxItems
      && itemsBeforeCollapse + itemsAfterCollapse <= maxItems;

    if (shouldCollapse) {
      // Show the collapsed indicator in the first breadcrumb that collapses
      breadcrumbs.forEach((breadcrumb, index) => {
        if (index === itemsBeforeCollapse) {
          breadcrumb.showCollapsedIndicator = true;
        }

        // Collapse all breadcrumbs that have an index greater than or equal to
        // the number before collapse and an index less than the total number
        // of breadcrumbs minus the items that should show after the collapse
        if (index >= itemsBeforeCollapse && index < breadcrumbs.length - itemsAfterCollapse) {
          breadcrumb.collapsed = true;
        }
      });
    }
  }

  private setBreadcrumbSeparator = () => {
    const { itemsAfterCollapse, itemsBeforeCollapse, maxItems } = this;

    const breadcrumbs = this.getBreadcrumbs();

    // Check if an active breadcrumb exists already
    const active = breadcrumbs.find(breadcrumb => breadcrumb.active);

    // Set the separator on all but the last breadcrumb
    for (const breadcrumb of breadcrumbs) {
      // The only time the last breadcrumb changes is when
      // itemsAfterCollapse is set to 0, in this case the
      // last breadcrumb will be the collapsed indicator
      const last = maxItems !== undefined && itemsAfterCollapse === 0
        ? breadcrumb === breadcrumbs[itemsBeforeCollapse]
        : breadcrumb === breadcrumbs[breadcrumbs.length - 1];
      breadcrumb.last = last;

      // If the breadcrumb has defined whether or not to show the
      // separator then use that value, otherwise check if it's the
      // last breadcrumb
      const separator = breadcrumb.separator !== undefined
        ? breadcrumb.separator
        : (last ? undefined : true);
      breadcrumb.separator = separator;

      // If there is not an active breadcrumb already
      // set the last one to active
      if (!active && last) {
        breadcrumb.active = true;
        this.activeChanged = true;
      }
    }
  }

  private getBreadcrumbs = (): HTMLIonBreadcrumbElement[] => {
    return Array.from(this.el.querySelectorAll('ion-breadcrumb'));
  }

  render() {
    const { color, collapsed } = this;
    const mode = getIonMode(this);

    return (
      <Host
        class={createColorClasses(color, {
          [mode]: true,
          'in-toolbar': hostContext('ion-toolbar', this.el),
          'in-toolbar-color': hostContext('ion-toolbar[color]', this.el),
          'breadcrumbs-collapsed': collapsed,
        })}
      >
        <slot></slot>
      </Host>
    );
  }
}
