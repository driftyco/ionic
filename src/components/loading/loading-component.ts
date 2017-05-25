import { Component, ElementRef, Renderer, ViewEncapsulation } from '@angular/core';

import { Config } from '../../config/config';
import { GestureController, BlockerDelegate, BLOCK_ALL } from '../../gestures/gesture-controller';
import { isDefined, isUndefined, assert } from '../../util/util';
import { LoadingOptions } from './loading-options';
import { NavParams } from '../../navigation/nav-params';
import { Platform } from '../../platform/platform';
import { ViewController } from '../../navigation/view-controller';

/**
* @hidden
*/
@Component({
  selector: 'ion-loading',
  template:
    '<ion-backdrop [hidden]="!d.showBackdrop"></ion-backdrop>' +
    '<div class="loading-wrapper">' +
      '<div *ngIf="showSpinner" class="loading-spinner" aria-hidden="true">' +
        '<ion-spinner [name]="d.spinner"></ion-spinner>' +
      '</div>' +
      '<div *ngIf="d.content" [innerHTML]="d.content" class="loading-content"></div>' +
    '</div>',
  host: {
    'role': 'alert',
    'tabindex': '-1'
  },
  encapsulation: ViewEncapsulation.None,
})
export class LoadingCmp {
  d: LoadingOptions;
  id: number;
  showSpinner: boolean;
  durationTimeout: any;
  gestureBlocker: BlockerDelegate;
  activeElement: HTMLElement;

  constructor(
    private _viewCtrl: ViewController,
    private _config: Config,
    private _plt: Platform,
    private _elementRef: ElementRef,
    gestureCtrl: GestureController,
    params: NavParams,
    renderer: Renderer
  ) {
    assert(params.data, 'params data must be valid');
    this.gestureBlocker = gestureCtrl.createBlocker(BLOCK_ALL);
    this.d = params.data;

    renderer.setElementClass(_elementRef.nativeElement, `loading-${_config.get('mode')}`, true);

    if (this.d.cssClass) {
      this.d.cssClass.split(' ').forEach(cssClass => {
        // Make sure the class isn't whitespace, otherwise it throws exceptions
        if (cssClass.trim() !== '') renderer.setElementClass(_elementRef.nativeElement, cssClass, true);
      });
    }

    this.id = (++loadingIds);
  }

  ngOnInit() {
    // If no spinner was passed in loading options we need to fall back
    // to the loadingSpinner in the app's config, then the mode spinner
    if (isUndefined(this.d.spinner)) {
      this.d.spinner = this._config.get('loadingSpinner', this._config.get('spinner', 'ios'));
    }

    // If the user passed hide to the spinner we don't want to show it
    this.showSpinner = isDefined(this.d.spinner) && this.d.spinner !== 'hide';
  }

  ionViewWillEnter() {
    this.gestureBlocker.block();
  }

  ionViewDidLeave() {
    this._plt.untrapVirtualCursor(this._elementRef.nativeElement);
    this.activeElement.focus();
    this.gestureBlocker.unblock();
  }

  ionViewDidEnter() {
    // If there is a duration, dismiss after that amount of time
    if ( this.d && this.d.duration ) {
      this.durationTimeout = setTimeout(() => this.dismiss('backdrop'), this.d.duration);
    }

    // remember the focused element so we can restore it later, the refocus also serves
    // as indicator for screen readers that the load has completed.
    this.activeElement = <HTMLElement>document.activeElement;
    if (this.activeElement) {
      this.activeElement.blur();
    }
    this._elementRef.nativeElement.focus();
    // trap focus and virtual cursor within the loading box
    // only the virtual cursor trap needs to be removed when the alert is dismissed
    // as the focus trap is destroyed with the element
    this._plt.trapFocus(this._elementRef.nativeElement);
    this._plt.trapVirtualCursor(this._elementRef.nativeElement);
  }

  dismiss(role: string): Promise<any> {
    if (this.durationTimeout) {
      clearTimeout(this.durationTimeout);
    }
    return this._viewCtrl.dismiss(null, role);
  }

  ngOnDestroy() {
    assert(this.gestureBlocker.blocked === false, 'gesture blocker must be already unblocked');
    this.gestureBlocker.destroy();
  }
}

let loadingIds = -1;
