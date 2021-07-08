import { mount } from '@vue/test-utils';
import { createRouter, createWebHistory } from '@ionic/vue-router';
import { IonicVue, IonApp, IonRouterOutlet, IonPage, IonTabs, IonTabBar, IonTabButton, IonLabel } from '@ionic/vue';
import { waitForRouter } from './utils';

const App = {
  components: { IonApp, IonRouterOutlet },
  template: '<ion-app><ion-router-outlet /></ion-app>',
}

const Tabs = {
  components: { IonPage, IonTabs, IonTabBar, IonTabButton, IonLabel, IonRouterOutlet },
  template: `
    <ion-page>
      <ion-tabs>
        <ion-router-outlet></ion-router-outlet>
        <ion-tab-bar slot="top">
          <ion-tab-button tab="tab1" href="/tab1">
            <ion-label>Tab 1</ion-label>
          </ion-tab-button>
          <ion-tab-button tab="tab2" href="/tab2">
            <ion-label>Tab 2</ion-label>
          </ion-tab-button>
        </ion-tab-bar>
      </ion-tabs>
    </ion-page>
  `,
}
const Tab1 = {
  components: { IonPage },
  template: `<ion-page>Tab 1</ion-page>`
}
const Tab2 = {
  components: { IonPage },
  template: `<ion-page>Tab 2</ion-page>`
}

describe('ion-tabs', () => {
  beforeAll(() => {
    (HTMLElement.prototype as HTMLIonRouterOutletElement).commit = jest.fn();
  });
  it('should emit will change and did change events when changing tab', async () => {
    const router = createRouter({
      history: createWebHistory(process.env.BASE_URL),
      routes: [
        {
          path: '/',
          component: Tabs,
          children: [
            {
              path: '',
              redirect: 'tab1'
            },
            {
              path: 'tab1',
              component: Tab1,
            },
            {
              path: 'tab2',
              component: Tab2
            }
          ]
        }
      ]
    });

    router.push('/');
    await router.isReady();
    const wrapper = mount(App, {
      global: {
        plugins: [router, IonicVue]
      }
    });

    const tabs = wrapper.findComponent(IonTabs);
    expect(tabs.emitted().ionTabsWillChange.length).toEqual(1);
    expect(tabs.emitted().ionTabsWillChange[0]).toEqual([{ tab: 'tab1' }]);
    expect(tabs.emitted().ionTabsDidChange.length).toEqual(1);
    expect(tabs.emitted().ionTabsDidChange[0]).toEqual([{ tab: 'tab1' }]);

    router.push('/tab2')
    await waitForRouter()

    expect(tabs.emitted().ionTabsWillChange.length).toEqual(2);
    expect(tabs.emitted().ionTabsWillChange[1]).toEqual([{ tab: 'tab2' }]);
    expect(tabs.emitted().ionTabsDidChange.length).toEqual(2);
    expect(tabs.emitted().ionTabsDidChange[1]).toEqual([{ tab: 'tab2' }]);
  });

  it('should not emit will change and did change events when going to same tab again', async () => {
    const router = createRouter({
      history: createWebHistory(process.env.BASE_URL),
      routes: [
        {
          path: '/',
          component: Tabs,
          children: [
            {
              path: '',
              redirect: 'tab1'
            },
            {
              path: 'tab1',
              component: Tab1,
            },
            {
              path: 'tab2',
              component: Tab2
            }
          ]
        }
      ]
    });

    router.push('/');
    await router.isReady();
    const wrapper = mount(App, {
      global: {
        plugins: [router, IonicVue]
      }
    });

    const tabs = wrapper.findComponent(IonTabs);
    expect(tabs.emitted().ionTabsWillChange.length).toEqual(1);
    expect(tabs.emitted().ionTabsWillChange[0]).toEqual([{ tab: 'tab1' }]);
    expect(tabs.emitted().ionTabsDidChange.length).toEqual(1);
    expect(tabs.emitted().ionTabsDidChange[0]).toEqual([{ tab: 'tab1' }]);

    router.push('/tab1')
    await waitForRouter()

    expect(tabs.emitted().ionTabsWillChange.length).toEqual(1);
    expect(tabs.emitted().ionTabsDidChange.length).toEqual(1);
  });

  it('should not emit will change and did change events when going to a non tabs page', async () => {
    const Sibling = {
      components: { IonPage },
      template: `<ion-page>Sibling Page</ion-page>`
    }
    const router = createRouter({
      history: createWebHistory(process.env.BASE_URL),
      routes: [
        {
          path: '/',
          component: Tabs,
          children: [
            {
              path: '',
              redirect: 'tab1'
            },
            {
              path: 'tab1',
              component: Tab1
            },
            {
              path: 'tab2',
              component: Tab2
            }
          ]
        },
        {
          path: '/sibling',
          component: Sibling
        }
      ]
    });

    router.push('/');
    await router.isReady();
    const wrapper = mount(App, {
      global: {
        plugins: [router, IonicVue]
      }
    });

    const tabs = wrapper.findComponent(IonTabs);
    expect(tabs.emitted().ionTabsWillChange.length).toEqual(1);
    expect(tabs.emitted().ionTabsWillChange[0]).toEqual([{ tab: 'tab1' }]);
    expect(tabs.emitted().ionTabsDidChange.length).toEqual(1);
    expect(tabs.emitted().ionTabsDidChange[0]).toEqual([{ tab: 'tab1' }]);

    router.push('/sibling');
    await waitForRouter()

    expect(tabs.emitted().ionTabsWillChange.length).toEqual(1);
    expect(tabs.emitted().ionTabsDidChange.length).toEqual(1);
  });

  it('should not emit will change and did change events when going to child tab page', async () => {
    const Child = {
      components: { IonPage },
      template: `<ion-page>Child Page</ion-page>`
    }
    const router = createRouter({
      history: createWebHistory(process.env.BASE_URL),
      routes: [
        {
          path: '/',
          component: Tabs,
          children: [
            {
              path: '',
              redirect: 'tab1'
            },
            {
              path: 'tab1',
              component: Tab1,
              children: [
                {
                  path: 'child',
                  component: Child
                }
              ]
            },
            {
              path: 'tab2',
              component: Tab2
            }
          ]
        }
      ]
    });

    router.push('/');
    await router.isReady();
    const wrapper = mount(App, {
      global: {
        plugins: [router, IonicVue]
      }
    });

    const tabs = wrapper.findComponent(IonTabs);
    expect(tabs.emitted().ionTabsWillChange.length).toEqual(1);
    expect(tabs.emitted().ionTabsWillChange[0]).toEqual([{ tab: 'tab1' }]);
    expect(tabs.emitted().ionTabsDidChange.length).toEqual(1);
    expect(tabs.emitted().ionTabsDidChange[0]).toEqual([{ tab: 'tab1' }]);

    router.push('/tab1/child');
    await waitForRouter()

    expect(tabs.emitted().ionTabsWillChange.length).toEqual(1);
    expect(tabs.emitted().ionTabsDidChange.length).toEqual(1);
  });
});
