/* auto-generated vue overlay proxies */

import {
  JSX,
  actionSheetController,
  alertController,
  loadingController,
  pickerController,
  toastController,
} from '@ionic/core/components';

import { IonActionSheet as IonActionSheetCmp } from '@ionic/core/components/ion-action-sheet.js'
import { IonAlert as IonAlertCmp } from '@ionic/core/components/ion-alert.js'
import { IonLoading as IonLoadingCmp } from '@ionic/core/components/ion-loading.js'
import { IonPicker as IonPickerCmp } from '@ionic/core/components/ion-picker.js'
import { IonToast as IonToastCmp } from '@ionic/core/components/ion-toast.js'

import { defineOverlayContainer } from '../vue-component-lib/overlays';

export const IonActionSheet = /*@__PURE__*/ defineOverlayContainer<JSX.IonActionSheet>('ion-action-sheet', IonActionSheetCmp, ['animated', 'backdropDismiss', 'buttons', 'cssClass', 'enterAnimation', 'header', 'keyboardClose', 'leaveAnimation', 'mode', 'subHeader', 'translucent'], actionSheetController);
    
export const IonAlert = /*@__PURE__*/ defineOverlayContainer<JSX.IonAlert>('ion-alert', IonAlertCmp, ['animated', 'backdropDismiss', 'buttons', 'cssClass', 'enterAnimation', 'header', 'inputs', 'keyboardClose', 'leaveAnimation', 'message', 'mode', 'subHeader', 'translucent'], alertController);
    
export const IonLoading = /*@__PURE__*/ defineOverlayContainer<JSX.IonLoading>('ion-loading', IonLoadingCmp, ['animated', 'backdropDismiss', 'cssClass', 'duration', 'enterAnimation', 'keyboardClose', 'leaveAnimation', 'message', 'mode', 'showBackdrop', 'spinner', 'translucent'], loadingController);
    
export const IonPicker = /*@__PURE__*/ defineOverlayContainer<JSX.IonPicker>('ion-picker', IonPickerCmp, ['animated', 'backdropDismiss', 'buttons', 'columns', 'cssClass', 'duration', 'enterAnimation', 'keyboardClose', 'leaveAnimation', 'mode', 'showBackdrop'], pickerController);
    
export const IonToast = /*@__PURE__*/ defineOverlayContainer<JSX.IonToast>('ion-toast', IonToastCmp, ['animated', 'buttons', 'color', 'cssClass', 'duration', 'enterAnimation', 'header', 'keyboardClose', 'leaveAnimation', 'message', 'mode', 'position', 'translucent'], toastController);
    
