import { mount } from '@vue/test-utils';
import { createRouter, createWebHistory } from '@ionic/vue-router';
import {
  IonicVue,
  IonApp,
  IonRouterOutlet,
  IonPage,
  IonTabs,
  IonTabBar,
  IonTabButton,
  IonLabel
} from '@ionic/vue';
import { onBeforeRouteLeave } from 'vue-router';
import { waitForRouter } from './utils';

const App = {
  components: { IonApp, IonRouterOutlet },
  template: '<ion-app><ion-router-outlet /></ion-app>',
}

const BasePage = {
  template: '<ion-page :data-pageid="name"></ion-page>',
  components: { IonPage },
}

describe('Routing', () => {
  beforeAll(() => {
    (HTMLElement.prototype as HTMLIonRouterOutletElement).commit = jest.fn();
  });
  it('should pass no props', async () => {
    const Page1 = {
      ...BasePage,
      props: {
        title: { type: String, default: 'Default Title' }
      }
    };

    const router = createRouter({
      history: createWebHistory(process.env.BASE_URL),
      routes: [
        { path: '/', component: Page1 }
      ]
    });

    router.push('/');
    await router.isReady();
    const wrapper = mount(App, {
      global: {
        plugins: [router, IonicVue]
      }
    });

    const cmp = wrapper.findComponent(Page1);
    expect(cmp.props()).toEqual({ title: 'Default Title' });
  });

  it('should pass route props as an object', async () => {
    const Page1 = {
      ...BasePage,
      props: {
        title: { type: String, default: 'Default Title' }
      }
    };

    const router = createRouter({
      history: createWebHistory(process.env.BASE_URL),
      routes: [
        { path: '/', component: Page1, props: { title: 'Page 1 Title' } }
      ]
    });

    router.push('/');
    await router.isReady();
    const wrapper = mount(App, {
      global: {
        plugins: [router, IonicVue]
      }
    });

    const cmp = wrapper.findComponent(Page1);
    expect(cmp.props()).toEqual({ title: 'Page 1 Title' });
  });

  it('should pass route props as a function', async () => {
    const Page1 = {
      ...BasePage,
      props: {
        title: { type: String, default: 'Default Title' }
      }
    };

    const propsFn = jest.fn((route) => {
      return { title: `${route.params.id} Title` }
    });

    const router = createRouter({
      history: createWebHistory(process.env.BASE_URL),
      routes: [
        { path: '/myPath/:id', component: Page1, props: propsFn },
        { path: '/otherPage', component: Page1 }
      ]
    });

    router.push('/myPath/123');
    await router.isReady();
    const wrapper = mount(App, {
      global: {
        plugins: [router, IonicVue]
      }
    });

    const cmp = wrapper.findComponent(Page1);
    expect(cmp.props()).toEqual({ title: '123 Title' });

    router.push('/otherPage');
    await waitForRouter();

    expect(propsFn.mock.calls.length).toBe(1);

    router.back();
    await waitForRouter();

    expect(propsFn.mock.calls.length).toBe(1);

    expect(cmp.props()).toEqual({ title: '123 Title' });
  });

  it('should pass route params as props', async () => {
    const Page1 = {
      ...BasePage,
      props: {
        title: { type: String, default: 'Default Title' }
      }
    };

    const router = createRouter({
      history: createWebHistory(process.env.BASE_URL),
      routes: [
        { path: '/:title', component: Page1, props: true }
      ]
    });

    router.push('/myPath');
    await router.isReady();
    const wrapper = mount(App, {
      global: {
        plugins: [router, IonicVue]
      }
    });

    const cmp = wrapper.findComponent(Page1);
    expect(cmp.props()).toEqual({ title: 'myPath' });
  });

  it('should call vue router hooks properly', async () => {
    const leaveHook = jest.fn();
    const Page1 = {
      ...BasePage,
      setup() {
        onBeforeRouteLeave(leaveHook);
      }
    };

    const Page2 = {
      ...BasePage
    };

    const router = createRouter({
      history: createWebHistory(process.env.BASE_URL),
      routes: [
        { path: '/', component: Page1 },
        { path: '/page2', component: Page2 }
      ]
    });

    router.push('/');
    await router.isReady();
    const wrapper = mount(App, {
      global: {
        plugins: [router, IonicVue]
      }
    });

    // Navigate to 2nd page
    router.push('/page2');
    await waitForRouter();

    expect(leaveHook).toBeCalled();
  });

  // Verifies fix for https://github.com/ionic-team/ionic-framework/issues/22492
  it('should show correct view when replacing', async () => {
    const Tabs = {
      components: { IonPage, IonTabs, IonTabBar, IonTabButton, IonLabel, IonRouterOutlet },
      template: `
        <ion-page>
          <ion-tabs>
            <ion-router-outlet></ion-router-outlet>
            <ion-tab-bar slot="top">
              <ion-tab-button tab="tab1" href="/tabs/tab1">
                <ion-label>Tab 1</ion-label>
              </ion-tab-button>
              <ion-tab-button tab="tab2" href="/tabs/tab2">
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
    const Parent = {
      ...BasePage,
      template: `<ion-page>Parent Page</ion-page>`
    }

    const router = createRouter({
      history: createWebHistory(process.env.BASE_URL),
      routes: [
        { path: '/', redirect: '/tabs/tab1' },
        { path: '/parent', component: Parent },
        { path: '/tabs/', component: Tabs, children: [
          { path: '/', redirect: 'tab1' },
          { path: 'tab1', component: Tab1 },
          { path: 'tab2', component: Tab2 }
        ]}
      ]
    });

    router.push('/');
    await router.isReady();
    const wrapper = mount(App, {
      global: {
        plugins: [router, IonicVue]
      }
    });

    // Go to Tab 2
    const tabButtons = wrapper.findAllComponents(IonTabButton);
    tabButtons[1].trigger('click');
    await waitForRouter();

    expect(wrapper.findComponent(Tab2).exists()).toBe(true);
    expect(wrapper.findComponent(Parent).exists()).toBe(false);

    router.replace('/parent')
    await waitForRouter();

    expect(wrapper.findComponent(Parent).exists()).toBe(true);
    expect(wrapper.findComponent(Tabs).exists()).toBe(false);

    router.replace('/tabs/tab1');
    await waitForRouter();

    expect(wrapper.findComponent(Parent).exists()).toBe(false);
    expect(wrapper.findComponent(Tab1).exists()).toBe(true);
    expect(wrapper.findComponent(Tab2).exists()).toBe(false);
  });

  // Verifies fix for https://github.com/ionic-team/ionic-framework/issues/23043
  it('should show the latest props passed to a route', async () => {
    const Page1 = {
      ...BasePage,
      props: {
        title: { type: String, default: 'Default Title' }
      }
    };

    const Home = {
      ...BasePage
    }

    const router = createRouter({
      history: createWebHistory(process.env.BASE_URL),
      routes: [
        { path: '/', component: Home },
        { path: '/:title', component: Page1, props: true }
      ]
    });

    router.push('/');
    await router.isReady();
    const wrapper = mount(App, {
      global: {
        plugins: [router, IonicVue]
      }
    });

    router.push('/abc');
    await waitForRouter();

    const cmp = wrapper.findComponent(Page1);
    expect(cmp.props()).toEqual({ title: 'abc' });

    router.back();
    await waitForRouter();

    router.push('/xyz');
    await waitForRouter();

    const cmpAgain = wrapper.findComponent(Page1);
    expect(cmpAgain.props()).toEqual({ title: 'xyz' });
  });

  // Verifies fix for https://github.com/ionic-team/ionic-framework/issues/23043
  it('should call the props function again when params change', async () => {
    const Page1 = {
      ...BasePage,
      props: {
        title: { type: String, default: 'Default Title' }
      }
    };

    const Home = {
      ...BasePage
    }

    const propsFn = jest.fn((route) => {
      return { title: `${route.params.id} Title` }
    });

    const router = createRouter({
      history: createWebHistory(process.env.BASE_URL),
      routes: [
        { path: '/myPath/:id', component: Page1, props: propsFn },
        { path: '/', component: Home }
      ]
    });

    router.push('/');
    await router.isReady();
    const wrapper = mount(App, {
      global: {
        plugins: [router, IonicVue]
      }
    });

    router.push('/myPath/123');
    await waitForRouter();

    const cmp = wrapper.findComponent(Page1);
    expect(propsFn.mock.calls.length).toBe(1);
    expect(cmp.props()).toEqual({ title: '123 Title' });

    router.back();
    await waitForRouter();

    router.push('/myPath/abc');
    await waitForRouter();

    expect(propsFn.mock.calls.length).toBe(2);
    const cmpAgain = wrapper.findComponent(Page1);
    expect(cmpAgain.props()).toEqual({ title: 'abc Title' });
  });

  // Verifies fix for https://github.com/ionic-team/ionic-framework/pull/23189
  it('should update props on a parameterized url', async () => {
    const Page = {
      props: {
        id: { type: String, default: 'Default ID' }
      },
      components: { IonPage },
      template: `<ion-page>{{ $props.id }}</ion-page>`
    }

    const router = createRouter({
      history: createWebHistory(process.env.BASE_URL),
      routes: [
        { path: '/page/:id', component: Page, props: true },
        { path: '/', redirect: '/page/1' }
      ]
    });

    router.push('/');
    await router.isReady();
    const wrapper = mount(App, {
      global: {
        plugins: [router, IonicVue]
      }
    });

    const page = wrapper.findComponent(Page);
    expect(page.props()).toEqual({ id: '1' });

    router.push('/page/2');
    await waitForRouter();

    const pageAgain = wrapper.findAllComponents(Page);
    expect(pageAgain[0].props()).toEqual({ id: '1' });
    expect(pageAgain[1].props()).toEqual({ id: '2' });
  });
});
