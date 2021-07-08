import { AnimationBuilder, Mode, SpinnerTypes, TabButtonLayout } from '../interface';

export interface IonicConfig {
  /**
   * When it's set to `false`, disables all animation and transition across the app.
   * Can be useful to make ionic smoother in slow devices, when animations can't run smoothly.
   */
  animated?: boolean;

  /**
   * When it's set to `false`, it disables all material-design ripple-effects across the app.
   * Defaults to `true`.
   */
  rippleEffect?: boolean;

  /**
   * The mode determines which platform styles to use for the whole application.
   */
  mode?: Mode;

  /**
   * Wherever ionic will respond to hardware go back buttons in an Android device.
   * Defaults to `true` when ionic runs in a mobile device.
   */
  hardwareBackButton?: boolean;

  /**
   * Whenever clicking the top status bar should cause the scroll to top in an application.
   * Defaults to `true` when ionic runs in a mobile device.
   */
  statusTap?: boolean;

  /**
   * Overrides the default icon in all `<ion-back-button>` components.
   */
  backButtonIcon?: string;

  /**
   * Overrides the default text in all `<ion-back-button>` components.
   */
  backButtonText?: string;

  /**
   * Overrides the default defaultHref in all `<ion-back-button>` components.
   */
  backButtonDefaultHref?: string;

  /**
   * Overrides the default icon in all `<ion-menu-button>` components.
   */
  menuIcon?: string;

  /**
   * Overrides the default menu type for all `<ion-menu>` components.
   * By default the menu type is chosen based in the app's mode.
   */
  menuType?: string;

  /**
   * Overrides the default spinner in all `<ion-spinner>` components.
   * By default the spinner type is chosen based in the mode (ios or md).
   */
  spinner?: SpinnerTypes;

  /**
   * Overrides the default spinner for all `ion-loading` overlays, ie. the ones
   * created with `ion-loading-controller`.
   */
  loadingSpinner?: SpinnerTypes | null;

  /**
   * Overrides the default icon in all `<ion-refresh-content>` components.
   */
  refreshingIcon?: string;

  /**
   * Overrides the default spinner type in all `<ion-refresh-content>` components.
   */
  refreshingSpinner?: SpinnerTypes | null;

  /**
   * Overrides the default spinner type in all `<ion-infinite-scroll-content>` components.
   */
  infiniteLoadingSpinner?: SpinnerTypes | null;

  /**
   * Global switch that disables or enables "swipe-to-go-back" gesture across all
   * `ion-nav` in your application.
   */
  swipeBackEnabled?: boolean;

  /**
   * Overrides the default "layout" of all `ion-bar-button` across the whole application.
   */
  tabButtonLayout?: TabButtonLayout;

  /**
   * Overrides the default "animation" of all `ion-nav` and `ion-router-outlet` across the whole application.
   * This prop allows to replace the default transition and provide a custom one that applies to all navigation outlets.
   */
  navAnimation?: AnimationBuilder;

  /**
   * Provides a custom enter animation for all `ion-action-sheet`, overriding the default "animation".
   */
  actionSheetEnter?: AnimationBuilder;

  /**
   * Provides a custom enter animation for all `ion-alert`, overriding the default "animation".
   */
  alertEnter?: AnimationBuilder;

  /**
   * Provides a custom enter animation for all `ion-loading`, overriding the default "animation".
   */
  loadingEnter?: AnimationBuilder;

  /**
   * Provides a custom enter animation for all `ion-modal`, overriding the default "animation".
   */
  modalEnter?: AnimationBuilder;

  /**
   * Provides a custom enter animation for all `ion-popover`, overriding the default "animation".
   */
  popoverEnter?: AnimationBuilder;

  /**
   * Provides a custom enter animation for all `ion-toast`, overriding the default "animation".
   */
  toastEnter?: AnimationBuilder;

  /**
   * Provides a custom enter animation for all `ion-picker`, overriding the default "animation".
   */
  pickerEnter?: AnimationBuilder;

  /**
   * Provides a custom leave animation for all `ion-action-sheet`, overriding the default "animation".
   */
  actionSheetLeave?: AnimationBuilder;

  /**
   * Provides a custom leave animation for all `ion-alert`, overriding the default "animation".
   */
  alertLeave?: AnimationBuilder;

  /**
   * Provides a custom leave animation for all `ion-loading`, overriding the default "animation".
   */
  loadingLeave?: AnimationBuilder;

  /**
   * Provides a custom leave animation for all `ion-modal`, overriding the default "animation".
   */
  modalLeave?: AnimationBuilder;

  /**
   * Provides a custom leave animation for all `ion-popover`, overriding the default "animation".
   */
  popoverLeave?: AnimationBuilder;

  /**
   * Provides a custom leave animation for all `ion-toast`, overriding the default "animation".
   */
  toastLeave?: AnimationBuilder;

  /**
   * Provides a custom leave animation for all `ion-picker`, overriding the default "animation".
   */
  pickerLeave?: AnimationBuilder;

  /**
   * If `true`, Ionic will enable a basic DOM sanitizer on component properties that accept custom HTML.
   */
  sanitizerEnabled?: boolean;

  // PRIVATE configs
  keyboardHeight?: number;
  inputShims?: boolean;
  scrollPadding?: boolean;
  inputBlurring?: boolean;
  scrollAssist?: boolean;
  hideCaretOnScroll?: boolean;

  // INTERNAL configs
  persistConfig?: boolean;
  _forceStatusbarPadding?: boolean;
  _testing?: boolean;
  _zoneGate?: (h: () => any) => any;
  _ael?: (el: any, name: string, cb: any, opts: any) => any;
  _rel?: (el: any, name: string, cb: any, opts: any) => any;
  _ce?: (eventName: string, opts: any) => any;
}

export const setupConfig = (config: IonicConfig) => {
  const win = window as any;
  const Ionic = win.Ionic;
  if (Ionic && Ionic.config && Ionic.config.constructor.name !== 'Object') {
    return;
  }
  win.Ionic = win.Ionic || {};
  win.Ionic.config = {
    ...win.Ionic.config,
    ...config
  };
  return win.Ionic.config;
};

export const getMode = (): Mode => {
  const win = window as any;
  const config = win && win.Ionic && win.Ionic.config;
  if (config) {
    if (config.mode) {
      return config.mode;
    } else {
      return config.get('mode');
    }
  }
  return 'md';
};
