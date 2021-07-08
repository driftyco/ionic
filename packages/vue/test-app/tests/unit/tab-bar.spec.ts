import { mount } from '@vue/test-utils';
import { createRouter, createWebHistory } from '@ionic/vue-router';
import { IonicVue, IonApp, IonRouterOutlet, IonPage, IonTabs, IonTabBar } from '@ionic/vue';

const App = {
  components: { IonApp, IonRouterOutlet },
  template: '<ion-app><ion-router-outlet /></ion-app>',
}

describe('ion-tab-bar', () => {
  it('should render in the top slot', async () => {
    const Tabs = {
      components: { IonPage, IonTabs, IonTabBar, IonRouterOutlet },
      template: `
        <ion-page>
          <ion-tabs>
            <ion-router-outlet></ion-router-outlet>
            <ion-tab-bar slot="top"></ion-tab-bar>
          </ion-tabs>
        </ion-page>
      `,
    }

    const router = createRouter({
      history: createWebHistory(process.env.BASE_URL),
      routes: [
        { path: '/', component: Tabs }
      ]
    });

    router.push('/');
    await router.isReady();
    const wrapper = mount(App, {
      global: {
        plugins: [router, IonicVue]
      }
    });

    const innerHTML = wrapper.find('ion-tabs').html();
    expect(innerHTML).toContain(`<ion-tab-bar slot="top"></ion-tab-bar><div class="tabs-inner" style="position: relative; flex: 1; contain: layout size style;">`);

  });

  it('should render in the bottom slot', async () => {
    const Tabs = {
      components: { IonPage, IonTabs, IonTabBar, IonRouterOutlet },
      template: `
        <ion-page>
          <ion-tabs>
            <ion-router-outlet></ion-router-outlet>
            <ion-tab-bar slot="bottom"></ion-tab-bar>
          </ion-tabs>
        </ion-page>
      `,
    }

    const router = createRouter({
      history: createWebHistory(process.env.BASE_URL),
      routes: [
        { path: '/', component: Tabs }
      ]
    });

    router.push('/');
    await router.isReady();
    const wrapper = mount(App, {
      global: {
        plugins: [router, IonicVue]
      }
    });

    const innerHTML = wrapper.find('ion-tabs').html();
    expect(innerHTML).toContain(`<div class="tabs-inner" style="position: relative; flex: 1; contain: layout size style;"><ion-router-outlet></ion-router-outlet></div><ion-tab-bar slot="bottom"></ion-tab-bar>`);

  });

  it('should render in the default slot', async () => {
    const Tabs = {
      components: { IonPage, IonTabs, IonTabBar, IonRouterOutlet },
      template: `
        <ion-page>
          <ion-tabs>
            <ion-router-outlet></ion-router-outlet>
            <ion-tab-bar></ion-tab-bar>
          </ion-tabs>
        </ion-page>
      `,
    }

    const router = createRouter({
      history: createWebHistory(process.env.BASE_URL),
      routes: [
        { path: '/', component: Tabs }
      ]
    });

    router.push('/');
    await router.isReady();
    const wrapper = mount(App, {
      global: {
        plugins: [router, IonicVue]
      }
    });

    const innerHTML = wrapper.find('ion-tabs').html();
    expect(innerHTML).toContain(`<div class="tabs-inner" style="position: relative; flex: 1; contain: layout size style;"><ion-router-outlet></ion-router-outlet></div><ion-tab-bar></ion-tab-bar></ion-tabs>`)
  });

  // Verifies the fix for https://github.com/ionic-team/ionic-framework/issues/22642
  it('should not fail on non tab button elements', async () => {
    const Tabs = {
      components: { IonPage, IonTabs, IonTabBar, IonRouterOutlet },
      template: `
        <ion-page>
          <ion-tabs>
            <ion-router-outlet></ion-router-outlet>
            <ion-tab-bar>
              <!-- my comment -->
            </ion-tab-bar>
          </ion-tabs>
        </ion-page>
      `,
    }

    const router = createRouter({
      history: createWebHistory(process.env.BASE_URL),
      routes: [
        { path: '/', component: Tabs }
      ]
    });

    router.push('/');
    await router.isReady();
    const wrapper = mount(App, {
      global: {
        plugins: [router, IonicVue]
      }
    });

    const innerHTML = wrapper.find('ion-tabs').html();
    expect(innerHTML).toContain(`><ion-tab-bar><!-- my comment --></ion-tab-bar>`)
  })
});
