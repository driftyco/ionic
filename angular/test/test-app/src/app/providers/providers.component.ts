import { Component, NgZone } from '@angular/core';
import {
  Platform, ModalController, AlertController, ActionSheetController,
  PopoverController, ToastController, PickerController, MenuController,
  LoadingController, NavController, DomController, Config
} from '@ionic/angular';

@Component({
  selector: 'app-providers',
  templateUrl: './providers.component.html',
})
export class ProvidersComponent {

  isLoaded = false;
  isReady = false;
  isResumed = false;
  isPaused = false;
  isResized = false;
  isTesting: boolean = undefined;
  isDesktop: boolean = undefined;
  isMobile: boolean = undefined;
  keyboardHeight = 0;

  constructor(
    actionSheetCtrl: ActionSheetController,
    alertCtrl: AlertController,
    loadingCtrl: LoadingController,
    menuCtrl: MenuController,
    pickerCtrl: PickerController,
    modalCtrl: ModalController,
    platform: Platform,
    popoverCtrl: PopoverController,
    toastCtrl: ToastController,
    navCtrl: NavController,
    domCtrl: DomController,
    config: Config,
    zone: NgZone
  ) {
    // test all providers load
    if (
      actionSheetCtrl && alertCtrl && loadingCtrl && menuCtrl && pickerCtrl &&
      modalCtrl && platform && popoverCtrl && toastCtrl && navCtrl && domCtrl && config
      ) {
        this.isLoaded = true;
      }

    // test platform ready()
    platform.ready().then(() => {
      NgZone.assertInAngularZone();
      this.isReady = true;
    });
    platform.resume.subscribe(() => {
      console.log('platform:resume');
      NgZone.assertInAngularZone();
      this.isResumed = true;
    });
    platform.pause.subscribe(() => {
      console.log('platform:pause');
      NgZone.assertInAngularZone();
      this.isPaused = true;
    });
    platform.resize.subscribe(() => {
      console.log('platform:resize');
      NgZone.assertInAngularZone();
      this.isResized = true;
    });
    this.isDesktop = platform.is('desktop');
    this.isMobile = platform.is('mobile');

    // test config
    this.isTesting = config.getBoolean('_testing');
    this.keyboardHeight = config.getNumber('keyboardHeight');

    zone.runOutsideAngular(() => {
      document.dispatchEvent(new CustomEvent('pause'));
      document.dispatchEvent(new CustomEvent('resume'));
      window.dispatchEvent(new CustomEvent('resize'));
    });
  }
}
