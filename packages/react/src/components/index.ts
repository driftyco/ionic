import { defineCustomElements } from '@ionic/core/loader';
import { addIcons } from 'ionicons';
import {
  arrowBackSharp,
  caretBackSharp,
  chevronBack,
  chevronDown,
  chevronForward,
  close,
  closeCircle,
  closeSharp,
  menuOutline,
  menuSharp,
  reorderThreeOutline,
  reorderTwoSharp,
  searchOutline,
  searchSharp,
} from 'ionicons/icons';
export {
  Animation,
  AnimationBuilder,
  AnimationCallbackOptions,
  AnimationDirection,
  AnimationFill,
  AnimationKeyFrames,
  AnimationLifecycle,
  createAnimation,
  createGesture,
  AlertButton,
  AlertInput,
  Gesture,
  GestureConfig,
  GestureDetail,
  iosTransitionAnimation,
  IonicSafeString,
  mdTransitionAnimation,
  NavComponentWithProps,
  setupConfig,
  IonicSwiper,
} from '@ionic/core';
export * from './proxies';

// createControllerComponent
export { IonAlert } from './IonAlert';
export { IonLoading } from './IonLoading';
export * from './IonToast';
export { IonPicker } from './IonPicker';

// createOverlayComponent
export * from './IonActionSheet';
export { IonModal } from './IonModal';
export { IonPopover } from './IonPopover';

// Custom Components
export { IonPage } from './IonPage';
export { IonTabsContext, IonTabsContextState } from './navigation/IonTabsContext';
export { IonTabs } from './navigation/IonTabs';
export { IonTabBar } from './navigation/IonTabBar';
export { IonTabButton } from './navigation/IonTabButton';
export { IonBackButton } from './navigation/IonBackButton';
export { IonRouterOutlet } from './IonRouterOutlet';
export { IonIcon } from './IonIcon';
export * from './IonRoute';
export * from './IonRedirect';
export * from './IonRouterContext';

// Utils
export { isPlatform, getPlatforms, getConfig } from './utils';
export * from './hrefprops';

// Ionic Animations
export { CreateAnimation } from './CreateAnimation';

// Hooks
export { useIonActionSheet, UseIonActionSheetResult } from '../hooks/useIonActionSheet';
export { useIonAlert, UseIonAlertResult } from '../hooks/useIonAlert';
export { useIonToast, UseIonToastResult } from '../hooks/useIonToast';
export { useIonModal, UseIonModalResult } from '../hooks/useIonModal';
export { useIonPopover, UseIonPopoverResult } from '../hooks/useIonPopover';
export { useIonPicker, UseIonPickerResult } from '../hooks/useIonPicker';
export { useIonLoading, UseIonLoadingResult } from '../hooks/useIonLoading';

// Icons that are used by internal components
addIcons({
  'arrow-back-sharp': arrowBackSharp,
  'caret-back-sharp': caretBackSharp,
  'chevron-back': chevronBack,
  'chevron-down': chevronDown,
  'chevron-forward': chevronForward,
  close,
  'close-circle': closeCircle,
  'close-sharp': closeSharp,
  'menu-outline': menuOutline,
  'menu-sharp': menuSharp,
  'reorder-two-sharp': reorderTwoSharp,
  'reorder-three-outline': reorderThreeOutline,
  'search-outline': searchOutline,
  'search-sharp': searchSharp,
});

// TODO: defineCustomElements() is asyncronous
// We need to use the promise
if (typeof window !== 'undefined') {
  defineCustomElements(window);
}
