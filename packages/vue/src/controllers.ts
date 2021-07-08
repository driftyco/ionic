import {
  modalController as modalCtrl,
  popoverController as popoverCtrl,
  alertController as alertCtrl,
  actionSheetController as actionSheetCtrl,
  loadingController as loadingCtrl,
  pickerController as pickerCtrl,
  toastController as toastCtrl,
} from '@ionic/core/components';
import { defineCustomElement } from './utils';

import { VueDelegate } from './framework-delegate';

import { IonModal } from '@ionic/core/components/ion-modal.js';
import { IonPopover } from '@ionic/core/components/ion-popover.js'
import { IonAlert } from '@ionic/core/components/ion-alert.js'
import { IonActionSheet } from '@ionic/core/components/ion-action-sheet.js'
import { IonLoading } from '@ionic/core/components/ion-loading.js'
import { IonPicker } from '@ionic/core/components/ion-picker.js'
import { IonToast } from '@ionic/core/components/ion-toast.js'

/**
 * Wrap the controllers export from @ionic/core
 * register the underlying Web Component and
 * (optionally) provide a framework delegate.
 */
const createController = (tagName: string, customElement: any, oldController: any, useDelegate = false) => {
  const delegate = useDelegate ? VueDelegate() : undefined;
  const oldCreate = oldController.create.bind(oldController);
  oldController.create = (options: any) => {
    defineCustomElement(tagName, customElement);

    return oldCreate({
      ...options,
      delegate
    })
  }

  return oldController;
}

const modalController = /*@__PURE__*/ createController('ion-modal', IonModal, modalCtrl, true);
const popoverController = /*@__PURE__*/ createController('ion-popover', IonPopover, popoverCtrl, true);
const alertController = /*@__PURE__*/ createController('ion-alert', IonAlert, alertCtrl);
const actionSheetController = /*@__PURE__*/ createController('ion-action-sheet', IonActionSheet, actionSheetCtrl);
const loadingController = /*@__PURE__*/ createController('ion-loading', IonLoading, loadingCtrl);
const pickerController = /*@__PURE__*/ createController('ion-picker', IonPicker, pickerCtrl);
const toastController = /*@__PURE__*/ createController('ion-toast', IonToast, toastCtrl);

export {
  modalController,
  popoverController,
  alertController,
  actionSheetController,
  loadingController,
  pickerController,
  toastController
}
