<template>
  <ion-page data-pageid="overlays">
    <ion-header :translucent="true">
      <ion-toolbar>
        <ion-buttons>
          <ion-back-button></ion-back-button>
        </ion-buttons>
        <ion-title>Overlays</ion-title>
      </ion-toolbar>
    </ion-header>

    <ion-content class="ion-padding" :fullscreen="true">
      <ion-radio-group v-model="componentType">
        <ion-list-header>
          <ion-label>
            Component
          </ion-label>
        </ion-list-header>

        <ion-item>
          <ion-label>Alert</ion-label>
          <ion-radio value="alert" id="ion-alert"></ion-radio>
        </ion-item>
        <ion-item>
          <ion-label>Action Sheet</ion-label>
          <ion-radio value="action-sheet" id="ion-action-sheet"></ion-radio>
        </ion-item>
        <ion-item>
          <ion-label>Loading</ion-label>
          <ion-radio value="loading" id="ion-loading"></ion-radio>
        </ion-item>
        <ion-item>
          <ion-label>Modal</ion-label>
          <ion-radio value="modal" id="ion-modal"></ion-radio>
        </ion-item>
        <ion-item>
          <ion-label>Popover</ion-label>
          <ion-radio value="popover" id="ion-popover"></ion-radio>
        </ion-item>
        <ion-item>
          <ion-label>Toast</ion-label>
          <ion-radio value="toast" id="ion-toast"></ion-radio>
        </ion-item>
      </ion-radio-group>

      <ion-radio-group v-model="presentationType">
        <ion-list-header>
          <ion-label>
            Presentation Type
          </ion-label>
        </ion-list-header>

        <ion-item>
          <ion-label>Controller</ion-label>
          <ion-radio value="controller" id="controller"></ion-radio>
        </ion-item>
        <ion-item>
          <ion-label>Component</ion-label>
          <ion-radio value="component" id="component"></ion-radio>
        </ion-item>
      </ion-radio-group>

      <br />

      <ion-button @click="present($event)" id="present-overlay">Present Overlay</ion-button>

      <ion-button @click="changeLoadingProps()" id="change-loading-props">Quickly Change Loading Props</ion-button>

      <br /><br />

      Modal onWillPresent: <div id="willPresent">{{ willPresent }}</div><br />
      Modal onDidPresent: <div id="didPresent">{{ didPresent }}</div><br />
      Modal onWillDismiss: <div id="willDismiss">{{ willDismiss }}</div><br />
      Modal onDidDismiss: <div id="didDismiss">{{ didDismiss }}</div><br />

      <ion-action-sheet
        :is-open="isActionSheetOpen"
        :buttons="actionSheetButtons"
        @didDismiss="setActionSheetRef(false)"
      >
      </ion-action-sheet>

      <ion-alert
        :is-open="isAlertOpen"
        header="Alert!"
        :buttons="alertButtons"
        @didDismiss="setAlertRef(false)"
      >
      </ion-alert>

      <ion-loading
        :is-open="isLoadingOpen"
        :duration="2000"
        message="Loading"
        :backdrop-dismiss="true"
        @didDismiss="setLoadingRef(false)"
      >
      </ion-loading>

      <ion-modal
        :is-open="isModalOpen"
        @willPresent="onModalWillPresent"
        @didPresent="onModalDidPresent"
        @willDismiss="onModalWillDismiss"
        @didDismiss="onModalDidDismiss"
      >
        <ModalContent :title="overlayProps.title"></ModalContent>
      </ion-modal>

      <ion-popover
        css-class="popover-inline"
        :is-open="isPopoverOpen"
        :event="popoverEvent"
        @didDismiss="setPopoverRef(false)"
      >
        <PopoverContent :title="overlayProps.title"></PopoverContent>
      </ion-popover>

      <ion-toast
        :is-open="isToastOpen"
        :duration="2000"
        message="Toast"
        :buttons="toastButtons"
        @didDismiss="setToastRef(false)"
      >
      </ion-toast>
    </ion-content>
  </ion-page>
</template>

<script lang="ts">
import {
  IonBackButton,
  IonButton,
  IonButtons,
  IonContent,
  IonHeader,
  IonItem,
  IonLabel,
  IonListHeader,
  IonPage,
  IonRadio,
  IonRadioGroup,
  IonTitle,
  IonToolbar,
  IonActionSheet,
  IonAlert,
  IonLoading,
  IonModal,
  IonPopover,
  IonToast,
  actionSheetController,
  alertController,
  loadingController,
  modalController,
  popoverController,
  toastController
} from '@ionic/vue';
import { defineComponent, ref } from 'vue';
import { trash, share, caretForwardCircle, heart, close } from 'ionicons/icons';
import ModalContent from '@/components/ModalContent.vue';
import PopoverContent from '@/components/PopoverContent.vue';

export default defineComponent({
  name: 'Overlays',
  components: {
    ModalContent,
    PopoverContent,
    IonBackButton,
    IonButton,
    IonButtons,
    IonContent,
    IonHeader,
    IonItem,
    IonLabel,
    IonListHeader,
    IonPage,
    IonRadio,
    IonRadioGroup,
    IonTitle,
    IonToolbar,
    IonActionSheet,
    IonAlert,
    IonLoading,
    IonModal,
    IonPopover,
    IonToast
  },
  setup() {
    const alertButtons = [
      {
        text: 'Cancel',
        role: 'cancel',
        cssClass: 'secondary',
        handler: () => {
          console.log('Confirm Cancel: blah');
        }
      }, {
        text: 'Okay',
        handler: () => {
          console.log('Confirm Okay');
        }
      }
    ]
    const actionSheetButtons = [
      {
        text: 'Delete',
        role: 'destructive',
        icon: trash,
        handler: () => {
          console.log('Delete clicked');
        }
      }, {
        text: 'Share',
        icon: share,
        handler: () => {
          console.log('Share clicked');
        }
      }, {
        text: 'Play (open modal)',
        icon: caretForwardCircle,
        handler: () => {
          console.log('Play clicked');
        }
      }, {
        text: 'Favorite',
        icon: heart,
        handler: () => {
          console.log('Favorite clicked');
        }
      }, {
        text: 'Cancel',
        icon: close,
        role: 'cancel',
        handler: () => {
          console.log('Cancel clicked');
        }
      }
    ]

    const toastButtons = [
      {
        text: 'Close', role: 'close'
      }
    ]

    const overlayProps = {
      title: 'Custom Title'
    }

    const openActionSheet = async () => {
      const actionSheet = await actionSheetController.create({ cssClass: "ion-action-sheet-controller", buttons: actionSheetButtons });
      await actionSheet.present();
    }

    const openAlert = async () => {
      const alert = await alertController.create({ cssClass: "ion-alert-controller", buttons: alertButtons, header: 'Alert!' });
      await alert.present();
    }

    const openLoading = async () => {
      const loading = await loadingController.create({ cssClass: "ion-loading-controller", message: "Loading", duration: 2000, backdropDismiss: true });
      await loading.present();
    }

    const openToast = async () => {
      const toast = await toastController.create({ cssClass: "ion-toast-controller", header: "Toast!", buttons: toastButtons });
      await toast.present();
    }

    const openModal = async () => {
      const modal = await modalController.create({ cssClass: "ion-modal-controller", component: ModalContent, componentProps: overlayProps });
      await modal.present();
    }

    const openPopover = async (event: Event) => {
      const popover = await popoverController.create({ cssClass: "ion-popover-controller", component: PopoverContent, event, componentProps: overlayProps });
      await popover.present();
    }

    const isActionSheetOpen = ref(false);
    const isAlertOpen = ref(false);
    const isLoadingOpen = ref(false);
    const isToastOpen = ref(false);
    const isModalOpen = ref(false);
    const isPopoverOpen = ref(false);
    const popoverEvent = ref();

    const setActionSheetRef = (value: boolean) => isActionSheetOpen.value = value;
    const setAlertRef = (value: boolean) => isAlertOpen.value = value;
    const setLoadingRef = (value: boolean) => isLoadingOpen.value = value;
    const setToastRef = (value: boolean) => isToastOpen.value = value;
    const setModalRef = (value: boolean) => isModalOpen.value = value;
    const setPopoverRef = (value: boolean, event: Event) => {
      popoverEvent.value = event;
      isPopoverOpen.value = value;
    }

    const componentType = ref('alert');
    const presentationType = ref('controller');

    const present = (ev: Event) => {
      const controller = presentationType.value === 'controller';
      switch(componentType.value) {
        case "alert":
          controller ? openAlert() : setAlertRef(true);
          break;
        case "action-sheet":
          controller ? openActionSheet() : setActionSheetRef(true);
          break;
        case "loading":
          controller ? openLoading() : setLoadingRef(true);
          break;
        case "toast":
          controller ? openToast() : setToastRef(true);
          break;
        case "modal":
          controller ? openModal() : setModalRef(true);
          break;
        case "popover":
          controller ? openPopover(ev) : setPopoverRef(true, ev);
          break;
        default:
          break;
      }
    }

    const changeLoadingProps = () => {
      setLoadingRef(true);
      setTimeout(() => {
        setLoadingRef(false);
        setTimeout(() => {
          setLoadingRef(true);
        }, 10);
      }, 10);
    }

    const willPresent = ref(0);
    const didPresent = ref(0);
    const willDismiss = ref(0);
    const didDismiss = ref(0);

    const onModalWillPresent = () => willPresent.value += 1;
    const onModalDidPresent = () => { didPresent.value += 1; setModalRef(true); }
    const onModalWillDismiss = () => willDismiss.value += 1;
    const onModalDidDismiss = () => { didDismiss.value += 1; setModalRef(false); }

    return {
      onModalWillPresent,
      onModalDidPresent,
      onModalWillDismiss,
      onModalDidDismiss,
      willPresent,
      didPresent,
      willDismiss,
      didDismiss,
      changeLoadingProps,
      overlayProps,
      present,
      componentType,
      presentationType,
      actionSheetButtons,
      alertButtons,
      toastButtons,
      openActionSheet,
      openAlert,
      openLoading,
      openToast,
      openModal,
      openPopover,
      isActionSheetOpen,
      isAlertOpen,
      isLoadingOpen,
      isToastOpen,
      isModalOpen,
      isPopoverOpen,
      setActionSheetRef,
      setAlertRef,
      setLoadingRef,
      setToastRef,
      setModalRef,
      setPopoverRef,
      popoverEvent
    }
  }
});
</script>
