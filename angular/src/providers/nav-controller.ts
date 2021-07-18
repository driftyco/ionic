import { Location } from '@angular/common';
import { Injectable, Optional } from '@angular/core';
import { NavigationExtras, NavigationStart, Router, UrlSerializer, UrlTree } from '@angular/router';
import { AnimationBuilder, NavDirection, RouterDirection } from '@ionic/core';

import { IonRouterOutlet } from '../directives/navigation/ion-router-outlet';

import { Platform } from './platform';

export interface AnimationOptions {
  animated?: boolean;
  animation?: AnimationBuilder;
  animationDirection?: 'forward' | 'back';
}

export interface NavigationOptions extends NavigationExtras, AnimationOptions {}

@Injectable({
  providedIn: 'root',
})
export class NavController {

  private topOutlet?: IonRouterOutlet;
  private direction: 'forward' | 'back' | 'root' | 'auto' = DEFAULT_DIRECTION;
  private animated?: NavDirection = DEFAULT_ANIMATED;
  private animationBuilder?: AnimationBuilder;
  private guessDirection: RouterDirection = 'forward';
  private guessAnimation?: NavDirection;
  private lastNavId = -1;

  constructor(
    platform: Platform,
    private location: Location,
    private serializer: UrlSerializer,
    @Optional() private router?: Router,
  ) {
    // Subscribe to router events to detect direction
    if (router) {
      router.events.subscribe(ev => {
        if (ev instanceof NavigationStart) {
          const id = (ev.restoredState) ? ev.restoredState.navigationId : ev.id;
          this.guessDirection = id < this.lastNavId ? 'back' : 'forward';
          this.guessAnimation = !ev.restoredState ? this.guessDirection : undefined;
          this.lastNavId = this.guessDirection === 'forward' ? ev.id : id;
        }
      });
    }

    // Subscribe to backButton events
    platform.backButton.subscribeWithPriority(0, processNextHandler => {
      this.pop();
      processNextHandler();
    });
  }

  /**
   * This method uses Angular's [Router](https://angular.io/api/router/Router) under the hood,
   * it's equivalent to calling `this.router.navigateByUrl()`, but it's explicit about the **direction** of the transition.
   *
   * Going **forward** means that a new page is going to be pushed to the stack of the outlet (ion-router-outlet),
   * and that it will show a "forward" animation by default.
   *
   * Navigating forward can also be triggered in a declarative manner by using the `[routerDirection]` directive:
   *
   * ```html
   * <a routerLink="/path/to/page" routerDirection="forward">Link</a>
   * ```
   */
  navigateForward(url: string | UrlTree | any[], options: NavigationOptions = {}): Promise<boolean> {
    this.setDirection('forward', options.animated, options.animationDirection, options.animation);
    return this.navigate(url, options);
  }

  /**
   * This method uses Angular's [Router](https://angular.io/api/router/Router) under the hood,
   * it's equivalent to calling:
   *
   * ```ts
   * this.navController.setDirection('back');
   * this.router.navigateByUrl(path);
   * ```
   *
   * Going **back** means that all the pages in the stack until the navigated page is found will be popped,
   * and that it will show a "back" animation by default.
   *
   * Navigating back can also be triggered in a declarative manner by using the `[routerDirection]` directive:
   *
   * ```html
   * <a routerLink="/path/to/page" routerDirection="back">Link</a>
   * ```
   */
  navigateBack(url: string | UrlTree | any[], options: NavigationOptions = {}): Promise<boolean> {
    this.setDirection('back', options.animated, options.animationDirection, options.animation);
    return this.navigate(url, options);
  }

  /**
   * This method uses Angular's [Router](https://angular.io/api/router/Router) under the hood,
   * it's equivalent to calling:
   *
   * ```ts
   * this.navController.setDirection('root');
   * this.router.navigateByUrl(path);
   * ```
   *
   * Going **root** means that all existing pages in the stack will be removed,
   * and the navigated page will become the single page in the stack.
   *
   * Navigating root can also be triggered in a declarative manner by using the `[routerDirection]` directive:
   *
   * ```html
   * <a routerLink="/path/to/page" routerDirection="root">Link</a>
   * ```
   */
  navigateRoot(url: string | UrlTree | any[], options: NavigationOptions = {}): Promise<boolean> {
    this.setDirection('root', options.animated, options.animationDirection, options.animation);
    return this.navigate(url, options);
  }

  /**
   * Same as [Location](https://angular.io/api/common/Location)'s back() method.
   * It will use the standard `window.history.back()` under the hood, but featuring a `back` animation
   * by default.
   */
  back(options: AnimationOptions = { animated: true, animationDirection: 'back' }) {
    this.setDirection('back', options.animated, options.animationDirection, options.animation);
    return this.location.back();
  }

  /**
   * This methods goes back in the context of Ionic's stack navigation.
   *
   * It recursively finds the top active `ion-router-outlet` and calls `pop()`.
   * This is the recommended way to go back when you are using `ion-router-outlet`.
   */
  async pop(deep = 1) {
    let outlet = this.topOutlet;

    while (outlet) {
      if (await outlet.pop(deep)) {
        break;
      } else {
        outlet = outlet.parentOutlet;
      }
    }
  }

  /**
   * This methods specifies the direction of the next navigation performed by the Angular router.
   *
   * `setDirection()` does not trigger any transition, it just sets some flags to be consumed by `ion-router-outlet`.
   *
   * It's recommended to use `navigateForward()`, `navigateBack()` and `navigateRoot()` instead of `setDirection()`.
   */
  setDirection(direction: RouterDirection, animated?: boolean, animationDirection?: 'forward' | 'back', animationBuilder?: AnimationBuilder) {
    this.direction = direction;
    this.animated = getAnimation(direction, animated, animationDirection);
    this.animationBuilder = animationBuilder;
  }

  /**
   * @internal
   */
  setTopOutlet(outlet: IonRouterOutlet) {
    this.topOutlet = outlet;
  }

  /**
   * @internal
   */
  consumeTransition() {
    let direction: RouterDirection = 'root';
    let animation: NavDirection | undefined;
    const animationBuilder = this.animationBuilder;

    if (this.direction === 'auto') {
      direction = this.guessDirection;
      animation = this.guessAnimation;
    } else {
      animation = this.animated;
      direction = this.direction;
    }
    this.direction = DEFAULT_DIRECTION;
    this.animated = DEFAULT_ANIMATED;
    this.animationBuilder = undefined;

    return {
      direction,
      animation,
      animationBuilder
    };
  }

  private navigate(url: string | UrlTree | any[], options: NavigationOptions) {
    if (Array.isArray(url)) {
      return this.router!.navigate(url, options);
    } else {

      /**
       * navigateByUrl ignores any properties that
       * would change the url, so things like queryParams
       * would be ignored unless we create a url tree
       * More Info: https://github.com/angular/angular/issues/18798
       */
      const urlTree = this.serializer.parse(url.toString());

      if (options.queryParams !== undefined) {
        urlTree.queryParams = { ...options.queryParams };
      }

      if (options.fragment !== undefined) {
        urlTree.fragment = options.fragment;
      }

      /**
       * `navigateByUrl` will still apply `NavigationExtras` properties
       * that do not modify the url, such as `replaceUrl` which is why
       * `options` is passed in here.
       */
      return this.router!.navigateByUrl(urlTree, options);
    }
  }
}

const getAnimation = (direction: RouterDirection, animated: boolean | undefined, animationDirection: 'forward' | 'back' | undefined): NavDirection | undefined => {
  if (animated === false) {
    return undefined;
  }
  if (animationDirection !== undefined) {
    return animationDirection;
  }
  if (direction === 'forward' || direction === 'back') {
    return direction;
  } else if (direction === 'root' && animated === true) {
    return 'forward';
  }
  return undefined;
};

const DEFAULT_DIRECTION = 'auto';
const DEFAULT_ANIMATED = undefined;
