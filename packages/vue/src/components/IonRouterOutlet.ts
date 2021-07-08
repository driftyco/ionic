import {
  h,
  defineComponent,
  ref,
  computed,
  inject,
  provide,
  watch,
  shallowRef,
  InjectionKey,
  onUnmounted
} from 'vue';
import { AnimationBuilder, LIFECYCLE_DID_ENTER, LIFECYCLE_DID_LEAVE, LIFECYCLE_WILL_ENTER, LIFECYCLE_WILL_LEAVE } from '@ionic/core/components';
import { IonRouterOutlet as IonRouterOutletCmp } from '@ionic/core/components/ion-router-outlet.js';
import { matchedRouteKey, routeLocationKey, useRoute } from 'vue-router';
import { fireLifecycle, generateId, getConfig, defineCustomElement } from '../utils';

let viewDepthKey: InjectionKey<0> = Symbol(0);
export const IonRouterOutlet = /*@__PURE__*/ defineComponent({
  name: 'IonRouterOutlet',
  setup() {
    defineCustomElement('ion-router-outlet', IonRouterOutletCmp);

    const injectedRoute = inject(routeLocationKey)!;
    const route = useRoute();
    const depth = inject(viewDepthKey, 0);
    const matchedRouteRef: any = computed(() => route.matched[depth]);

    provide(viewDepthKey, depth + 1)
    provide(matchedRouteKey, matchedRouteRef);

    const ionRouterOutlet = ref();
    const id = generateId('ion-router-outlet');

    // TODO types
    const ionRouter: any = inject('navManager');
    const viewStacks: any = inject('viewStacks');

    const components = shallowRef([]);

    let skipTransition = false;

    // The base url for this router outlet
    let parentOutletPath: string;

    /**
     * We need to watch the route object
     * to listen for navigation changes.
     * Previously we had watched matchedRouteRef,
     * but if you had a /page/:id route, going from
     * page/1 to page/2 would not cause this callback
     * to fire since the matchedRouteRef was the same.
     */
    watch([route, matchedRouteRef], ([currentRoute, currentMatchedRouteRef], [_, previousMatchedRouteRef]) => {
      /**
       * If the matched route ref has changed,
       * then we need to set up a new view item.
       * If the matched route ref has not changed,
       * it is possible that this is a parameterized URL
       * change such as /page/1 to /page/2. In that case,
       * we can assume that the `route` object has changed,
       * but we should only set up a new view item in this outlet
       * if that last matched view item matches our current matched
       * view item otherwise if we had this in a nested outlet the
       * parent outlet would re-render as well as the child page.
       */
      if (
        currentMatchedRouteRef !== previousMatchedRouteRef ||
        currentRoute.matched[currentRoute.matched.length - 1] === currentMatchedRouteRef
      ) {
        setupViewItem(matchedRouteRef);
      }
    });

    const canStart = () => {
      const config = getConfig();
      const swipeEnabled = config && config.get('swipeBackEnabled', ionRouterOutlet.value.mode === 'ios');
      if (!swipeEnabled) return false;

      const stack = viewStacks.getViewStack(id);
      if (!stack || stack.length <= 1) return false;

      /**
       * We only want to outlet of the entering view
       * to respond to this gesture, so check
       * to make sure the view is in the outlet we want.
       */
      const routeInfo = ionRouter.getCurrentRouteInfo();
      const enteringViewItem = viewStacks.findViewItemByRouteInfo({ pathname: routeInfo.pushedByRoute || '' }, id);

      return !!enteringViewItem;
    }
    const onStart = async () => {
      const routeInfo = ionRouter.getCurrentRouteInfo();
      const { routerAnimation } = routeInfo;
      const enteringViewItem = viewStacks.findViewItemByRouteInfo({ pathname: routeInfo.pushedByRoute || '' }, id);
      const leavingViewItem = viewStacks.findViewItemByRouteInfo(routeInfo, id);

      if (leavingViewItem) {
        let animationBuilder = routerAnimation;
        const enteringEl = enteringViewItem.ionPageElement;
        const leavingEl = leavingViewItem.ionPageElement;

        /**
        * If we are going back from a page that
        * was presented using a custom animation
        * we should default to using that
        * unless the developer explicitly
        * provided another animation.
        */
        const customAnimation = enteringViewItem.routerAnimation;
        if (
          animationBuilder === undefined &&
          // todo check for tab switch
          customAnimation !== undefined
        ) {
          animationBuilder = customAnimation;
        }

        leavingViewItem.routerAnimation = animationBuilder;

        await transition(
          enteringEl,
          leavingEl,
          'back',
          ionRouter.canGoBack(2),
          true,
          animationBuilder
        );
      }

      return Promise.resolve();
    }

    const onEnd = (shouldContinue: boolean) => {
      if (shouldContinue) {
        skipTransition = true;

        /**
         * Use the same logic as clicking
         * ion-back-button to determine where
         * to go back to.
         */
        ionRouter.handleNavigateBack();
      } else {
        /**
         * In the event that the swipe
         * gesture was aborted, we should
         * re-hide the page that was going to enter.
         */
        const routeInfo = ionRouter.getCurrentRouteInfo();
        const enteringViewItem = viewStacks.findViewItemByRouteInfo({ pathname: routeInfo.pushedByRoute || '' }, id);
        enteringViewItem.ionPageElement.setAttribute('aria-hidden', 'true');
        enteringViewItem.ionPageElement.classList.add('ion-page-hidden');
      }
    }

    watch(ionRouterOutlet, () => {
      ionRouterOutlet.value.swipeHandler = {
        canStart,
        onStart,
        onEnd
      }
    });

    const transition = (
      enteringEl: HTMLElement,
      leavingEl: HTMLElement,
      direction: any, // TODO types
      showGoBack: boolean,
      progressAnimation: boolean,
      animationBuilder?: AnimationBuilder
    ) => {
      return new Promise(resolve => {
        if (skipTransition) {
          skipTransition = false;
          return resolve(false);
        }

        if (enteringEl === leavingEl) {
          return resolve(false);
        }

        requestAnimationFrame(() => {
          requestAnimationFrame(async () => {
            enteringEl.classList.add('ion-page-invisible');

            const result = await ionRouterOutlet.value.commit(enteringEl, leavingEl, {
              deepWait: true,
              duration: direction === undefined || direction === 'root' || direction === 'none' ? 0 : undefined,
              direction,
              showGoBack,
              progressAnimation,
              animationBuilder
            });

            return resolve(result);
          });
        });
      });
    }

    const handlePageTransition = async () => {
      const routeInfo = ionRouter.getCurrentRouteInfo();
      const { routerDirection, routerAction, routerAnimation, prevRouteLastPathname } = routeInfo;

      const enteringViewItem = viewStacks.findViewItemByRouteInfo(routeInfo, id);
      let leavingViewItem = viewStacks.findLeavingViewItemByRouteInfo(routeInfo, id);
      const enteringEl = enteringViewItem.ionPageElement;

      if (enteringViewItem === leavingViewItem) return;

      if (!leavingViewItem && prevRouteLastPathname) {
        leavingViewItem = viewStacks.findViewItemByPathname(prevRouteLastPathname, id);
      }

      fireLifecycle(enteringViewItem.vueComponent, enteringViewItem.vueComponentRef, LIFECYCLE_WILL_ENTER);

      if (leavingViewItem && enteringViewItem !== leavingViewItem) {
        let animationBuilder = routerAnimation;
        const leavingEl = leavingViewItem.ionPageElement;

        fireLifecycle(leavingViewItem.vueComponent, leavingViewItem.vueComponentRef, LIFECYCLE_WILL_LEAVE);

        /**
        * If we are going back from a page that
        * was presented using a custom animation
        * we should default to using that
        * unless the developer explicitly
        * provided another animation.
        */
        const customAnimation = enteringViewItem.routerAnimation;
        if (
          animationBuilder === undefined &&
          routerDirection === 'back' &&
          // todo check for tab switch
          customAnimation !== undefined
        ) {
          animationBuilder = customAnimation;
        }

        leavingViewItem.routerAnimation = animationBuilder;

        await transition(
          enteringEl,
          leavingEl,
          routerDirection,
          !!routeInfo.pushedByRoute,
          false,
          animationBuilder
        );

        leavingEl.classList.add('ion-page-hidden');
        leavingEl.setAttribute('aria-hidden', 'true');

        if (routerAction === 'replace') {
          leavingViewItem.mount = false;
          leavingViewItem.ionPageElement = undefined;
          leavingViewItem.ionRoute = false;
        } else if (!(routerAction === 'push' && routerDirection === 'forward')) {
          const shouldLeavingViewBeRemoved = routerDirection !== 'none' && leavingViewItem && (enteringViewItem !== leavingViewItem);
          if (shouldLeavingViewBeRemoved) {
            leavingViewItem.mount = false;
            leavingViewItem.ionPageElement = undefined;
            leavingViewItem.ionRoute = false;
          }
        }

        fireLifecycle(leavingViewItem.vueComponent, leavingViewItem.vueComponentRef, LIFECYCLE_DID_LEAVE);
      } else {
        /**
         * If there is no leaving element, just show
         * the entering element. Wrap it in an raf
         * in case ion-content's fullscreen callback
         * is running. Otherwise we'd have a flicker.
         */
        requestAnimationFrame(() => enteringEl.classList.remove('ion-page-invisible'));
      }

      fireLifecycle(enteringViewItem.vueComponent, enteringViewItem.vueComponentRef, LIFECYCLE_DID_ENTER);

      components.value = viewStacks.getChildrenToRender(id);
    }

    const setupViewItem = (matchedRouteRef: any) => {
      const firstMatchedRoute = route.matched[0];
      if (!parentOutletPath) {
        parentOutletPath = firstMatchedRoute.path;
      }

      /**
       * If no matched route, do not do anything in this outlet.
       * If there is a match, but it the first matched path
       * is not the root path for this outlet, then this view
       * change needs to be rendered in a different outlet.
       * We also add an exception for when the matchedRouteRef is
       * equal to the first matched route (i.e. the base router outlet).
       * This logic is mainly to help nested outlets/multi-tab
       * setups work better.
       */
      if (
        !matchedRouteRef.value ||
        (matchedRouteRef.value !== firstMatchedRoute && firstMatchedRoute.path !== parentOutletPath)
      ) {
          return;
      }

      const currentRoute = ionRouter.getCurrentRouteInfo();
      let enteringViewItem = viewStacks.findViewItemByRouteInfo(currentRoute, id);

      if (!enteringViewItem) {
        enteringViewItem = viewStacks.createViewItem(id, matchedRouteRef.value.components.default, matchedRouteRef.value, currentRoute);
        viewStacks.add(enteringViewItem);
      }

      if (!enteringViewItem.mount) {
        enteringViewItem.mount = true;
        enteringViewItem.registerCallback = () => {
          handlePageTransition();
          enteringViewItem.registerCallback = undefined;
        }
      } else {
        handlePageTransition();
      }

      components.value = viewStacks.getChildrenToRender(id);
    }

    if (matchedRouteRef.value) {
      setupViewItem(matchedRouteRef);
    }

    /**
     * Remove stack data for this outlet
     * when outlet is destroyed otherwise
     * we will see cached view data.
     */
    onUnmounted(() => viewStacks.clear(id));

    // TODO types
    const registerIonPage = (viewItem: any, ionPageEl: HTMLElement) => {
      const oldIonPageEl = viewItem.ionPageElement;

      viewStacks.registerIonPage(viewItem, ionPageEl);

      /**
       * If there is a registerCallback,
       * then this component is being registered
       * as a result of a navigation change.
       */
      if (viewItem.registerCallback) {
        viewItem.registerCallback();

      /**
       * If there is no registerCallback, then
       * this component is likely being re-registered
       * as a result of a hot module replacement.
       * We need to see if the oldIonPageEl has
       * .ion-page-invisible. If it does not then we
       * need to remove it from the new ionPageEl otherwise
       * the page will be hidden when it is replaced.
       */
      } else if (oldIonPageEl && !oldIonPageEl.classList.contains('ion-page-invisible')) {
        ionPageEl.classList.remove('ion-page-invisible');
      }
  };
    return {
      id,
      components,
      injectedRoute,
      ionRouterOutlet,
      registerIonPage
    }
  },
  render() {
    const { components, registerIonPage, injectedRoute } = this;

    return h(
      'ion-router-outlet',
      { ref: 'ionRouterOutlet' },
      // TODO types
      components && components.map((c: any) => {
        let props = {
          ref: c.vueComponentRef,
          key: c.pathname,
          isInOutlet: true,
          registerIonPage: (ionPageEl: HTMLElement) => registerIonPage(c, ionPageEl)
        }

        /**
         * IonRouterOutlet does not support named outlets.
         */
        const routePropsOption = c.matchedRoute?.props?.default;

        /**
         * Since IonRouterOutlet renders multiple components,
         * each render will cause all props functions to be
         * called again. As a result, we need to cache the function
         * result and provide it on each render so that the props
         * are not lost when navigating from and back to a page.
         * When a component is destroyed and re-created, the
         * function is called again.
         */
        const getPropsFunctionResult = () => {
          const cachedPropsResult = c.vueComponentData?.propsFunctionResult;
          if (cachedPropsResult) {
            return cachedPropsResult;
          } else {
            const propsFunctionResult = routePropsOption(injectedRoute);
            c.vueComponentData = {
              ...c.vueComponentData,
              propsFunctionResult
            };
            return propsFunctionResult;
          }
        }
        const routeProps = routePropsOption
          ? routePropsOption === true
            ? c.params
            : typeof routePropsOption === 'function'
            ? getPropsFunctionResult()
            : routePropsOption
          : null

        props = {
          ...props,
          ...routeProps
        }

        return h(
          c.vueComponent,
          props
        );
      })
    )
  }
});
