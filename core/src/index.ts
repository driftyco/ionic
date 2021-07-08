import 'ionicons';

export { createAnimation } from './utils/animation/animation';
export { iosTransitionAnimation } from './utils/transition/ios.transition';
export { mdTransitionAnimation } from './utils/transition/md.transition';
export { getTimeGivenProgression } from './utils/animation/cubic-bezier';
export { createGesture } from './utils/gesture';
export { initialize } from './global/ionic-global';
export { componentOnReady } from './utils/helpers';
export { isPlatform, Platforms, getPlatforms } from './utils/platform';
export { IonicSafeString } from './utils/sanitization';
export { IonicConfig, getMode, setupConfig } from './utils/config';
export { LIFECYCLE_WILL_ENTER, LIFECYCLE_DID_ENTER, LIFECYCLE_WILL_LEAVE, LIFECYCLE_DID_LEAVE, LIFECYCLE_WILL_UNLOAD } from './components/nav/constants';
export { menuController } from './utils/menu-controller';
export { alertController, actionSheetController, modalController, loadingController, pickerController, popoverController, toastController } from './utils/overlays';
export { IonicSwiper } from './components/slides/IonicSwiper';
