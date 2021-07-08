import { h, defineComponent, inject } from 'vue';
import { defineCustomElement } from '../utils';
import { IonTabButton as IonTabButtonCmp } from '@ionic/core/components/ion-tab-button.js';

export const IonTabButton = /*@__PURE__*/ defineComponent({
  name: 'IonTabButton',
  props: {
    _getTabState: { type: Function, default: () => { return {} } },
    disabled: Boolean,
    download: String,
    href: String,
    rel: String,
    layout: String,
    selected: Boolean,
    tab: String,
    target: String
  },
  setup(props, { slots }) {
    defineCustomElement('ion-tab-button', IonTabButtonCmp);

    const ionRouter: any = inject('navManager');
    const onClick = (ev: Event) => {
      if (ev.cancelable) {
        ev.preventDefault();
      }

      /**
       * Keeping track of the originalHref
       * (i.e. /tabs/tab1) lets us redirect
       * users back to a child page using currentHref
       * (i.e. /tabs/tab1/child).
       */
      const { tab, href, _getTabState } = props;
      const tabState = _getTabState();
      const tappedTab = tabState.tabs[tab] || {};
      const originalHref = tappedTab.originalHref || href;
      const currentHref = tappedTab.currentHref || href;
      const prevActiveTab = tabState.activeTab;

      /**
       * If we are still on the same
       * tab as before, but the base href
       * does not equal the current href,
       * then we must be on a child page and
       * should direct users back to the root
       * of the tab.
       */
      if (prevActiveTab === tab) {
        if (originalHref !== currentHref) {
          ionRouter.resetTab(tab, originalHref);
        }
      } else {
        ionRouter.changeTab(tab, currentHref)
      }
    };
    return () => {
      return h(
        'ion-tab-button',
        {
          onClick,
          ...props
        },
        slots.default && slots.default()
      )
    }
  }
});
