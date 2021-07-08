import { inject } from 'vue';
import { AnimationBuilder } from '../';

export type RouteAction = 'push' | 'pop' | 'replace';
export type RouteDirection = 'forward' | 'back' | 'root' | 'none';

export interface UseIonRouterResult {

  /**
   * The location parameter is really of type 'RouteLocationRaw'
   * imported from vue-router, but the @ionic/vue package should
   * not have a hard dependency on vue-router, so we just use 'any'.
   */
  canGoBack: (deep?: number) => boolean;
  push: (location: any, routerAnimation?: AnimationBuilder) => void;
  replace: (location: any, routerAnimation?: AnimationBuilder) => void;
  back: (routerAnimation?: AnimationBuilder) => void;
  forward: (routerAnimation?: AnimationBuilder) => void;
  navigate: (
    location: any,
    routerDirection?: RouteDirection,
    routerAction?: RouteAction,
    routerAnimation?: AnimationBuilder
  ) => void;
}

/**
 * Used to navigate within Vue Router
 * while controlling the animation.
 */
export const useIonRouter = (): UseIonRouterResult => {
  const { canGoBack, goBack, goForward, handleNavigate } = inject('navManager') as any;

  const navigate = (
    location: any,
    routerDirection?: RouteDirection,
    routerAction?: RouteAction,
    routerAnimation?: AnimationBuilder
  ) => handleNavigate(location, routerAction, routerDirection, routerAnimation);

  const push = (
    location: any,
    routerAnimation?: AnimationBuilder
  ) => navigate(location, 'forward', 'push', routerAnimation);

  const replace = (
    location: any,
    routerAnimation?: AnimationBuilder
  ) => navigate(location, 'root', 'replace', routerAnimation);

  const back = (
    routerAnimation?: AnimationBuilder
  ) => goBack(routerAnimation);

  const forward = (
    routerAnimation?: AnimationBuilder
  ) => goForward(routerAnimation);

  return {
    canGoBack,
    push,
    replace,
    back,
    forward,
    navigate
  } as UseIonRouterResult
}


