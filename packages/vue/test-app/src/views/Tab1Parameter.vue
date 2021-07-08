<template>
  <ion-page :data-pageid="'tab1' + $props.id">
    <ion-header>
      <ion-toolbar>
        <ion-buttons>
          <ion-back-button></ion-back-button>
        </ion-buttons>
        <ion-title>Tab 1 Child {{ $props.id }}</ion-title>
      </ion-toolbar>
    </ion-header>
    <ion-content :fullscreen="true">
      <ion-header collapse="condense">
        <ion-toolbar>
          <ion-title size="large">Tab 1 Child {{ $props.id }}</ion-title>
        </ion-toolbar>
      </ion-header>

      <ion-item router-link="childone" id="child-one">
        <ion-label>Tab 1 Child 1</ion-label>
      </ion-item>

      <ion-item router-link="childtwo" id="child-two">
        <ion-label>Tab 1 Child 2</ion-label>
      </ion-item>

    </ion-content>
  </ion-page>
</template>

<script>
import {
  IonButtons,
  IonBackButton,
  IonPage,
  IonHeader,
  IonItem,
  IonLabel,
  IonToolbar,
  IonTitle,
  IonContent
} from '@ionic/vue';

export default  {
  props: { id: String },
  components: {
    IonButtons,
    IonBackButton,
    IonPage,
    IonHeader,
    IonItem,
    IonLabel,
    IonToolbar,
    IonTitle,
    IonContent
  }
}
</script>
