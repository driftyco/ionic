import { h, defineComponent, getCurrentInstance, inject, VNode } from 'vue';
import { defineCustomElement } from '../utils';
import { IonTabBar as IonTabBarCmp } from '@ionic/core/components/ion-tab-bar.js';

interface TabState {
  activeTab?: string;
  tabs: { [k: string]: Tab };
}

interface Tab {
  originalHref: string;
  currentHref: string,
  ref: VNode
}

const isTabButton = (child: any) => child.type?.name === 'IonTabButton';

const getTabs = (nodes: VNode[]) => {
  let tabs: VNode[] = [];
  nodes.forEach((node: VNode) => {
    if (isTabButton(node)) {
      tabs.push(node);
    } else if (Array.isArray(node.children) && node.children.length > 1) {
      const childTabs = getTabs(node.children as VNode[]);
      tabs = [...tabs, ...childTabs];
    }
  });

  return tabs;
}

export const IonTabBar = defineComponent({
  name: 'IonTabBar',
  props: {
    _tabsWillChange: { type: Function, default: () => {} },
    _tabsDidChange: { type: Function, default: () => {} }
  },
  data() {
    return {
      tabState: {
        activeTab: undefined,
        tabs: {}
      },
      tabVnodes: []
    }
  },
  updated() {
    this.setupTabState(inject('navManager'));
  },
  methods: {
    setupTabState(ionRouter: any) {
      /**
       * For each tab, we need to keep track of its
       * base href as well as any child page that
       * is active in its stack so that when we go back
       * to a tab from another tab, we can correctly
       * show any child pages if necessary.
       */
      const tabState: TabState = this.$data.tabState;
      const currentInstance = getCurrentInstance();
      const tabs = this.$data.tabVnodes = getTabs((currentInstance.subTree.children || []) as VNode[]);
      tabs.forEach(child => {
        tabState.tabs[child.props.tab] = {
          originalHref: child.props.href,
          currentHref: child.props.href,
          ref: child
        }

        /**
         * Passing this prop to each tab button
         * lets it be aware of the state that
         * ion-tab-bar is managing for it.
         */
        child.component.props._getTabState = () => tabState;
      });

      this.checkActiveTab(ionRouter);
    },
    checkActiveTab(ionRouter: any) {
      const currentRoute = ionRouter.getCurrentRouteInfo();
      const childNodes = this.$data.tabVnodes;
      const { tabs, activeTab: prevActiveTab } = this.$data.tabState;
      const tabState = this.$data.tabState;
      const tabKeys = Object.keys(tabs);
      const activeTab = tabKeys
        .find(key => {
          const href = tabs[key].originalHref;
          return currentRoute.pathname.startsWith(href);
        });

      /**
       * For each tab, check to see if the
       * base href has changed. If so, update
       * it in the tabs state.
       */
      childNodes.forEach((child: VNode) => {
        const tab = tabs[child.props.tab];
        if (!tab || (tab.originalHref !== child.props.href)) {

          tabs[child.props.tab] = {
            originalHref: child.props.href,
            currentHref: child.props.href,
            ref: child
          }
        }
      });

      if (activeTab && prevActiveTab) {
        const prevHref = this.$data.tabState.tabs[prevActiveTab].currentHref;
        /**
         * If the tabs change or the url changes,
         * update the currentHref for the active tab.
         * Ex: url changes from /tabs/tab1 --> /tabs/tab1/child
         * If we went to tab2 then back to tab1, we should
         * land on /tabs/tab1/child instead of /tabs/tab1.
         */
        if (activeTab !== prevActiveTab || (prevHref !== currentRoute.pathname)) {
          tabs[activeTab] = {
            ...tabs[activeTab],
            currentHref: currentRoute.pathname + (currentRoute.search || '')
          }
        }

        /**
         * If navigating back and the tabs change,
         * set the previous tab back to its original href.
         */
        if (currentRoute.routerAction === 'pop' && (activeTab !== prevActiveTab)) {
          tabs[prevActiveTab] = {
            ...tabs[prevActiveTab],
            currentHref: tabs[prevActiveTab].originalHref
          }
        }
      }

      const activeChild = childNodes.find((child: VNode) => isTabButton(child) && child.props?.tab === activeTab);
      const tabBar = this.$refs.ionTabBar;
      const tabDidChange = activeTab !== prevActiveTab;
      if (tabBar) {
        if (activeChild) {
          tabDidChange && this.$props._tabsWillChange(activeTab);

          ionRouter.handleSetCurrentTab(activeTab);
          tabBar.selectedTab = tabState.activeTab = activeTab;

          tabDidChange && this.$props._tabsDidChange(activeTab);
        /**
         * When going to a tab that does
         * not have an associated ion-tab-button
         * we need to remove the selected state from
        * the old tab.
         */
        } else {
          tabBar.selectedTab = tabState.activeTab = '';
        }
      }
    }
  },
  mounted() {
    const ionRouter: any = inject('navManager');

    this.setupTabState(ionRouter);

    ionRouter.registerHistoryChangeListener(() => this.checkActiveTab(ionRouter));
  },
  setup(_, { slots }) {
    defineCustomElement('ion-tab-bar', IonTabBarCmp);

    return () => {
      return h(
        'ion-tab-bar',
        { ref: 'ionTabBar' },
        slots.default && slots.default()
      )
    }
  }
});
