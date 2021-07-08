<template>
  <ion-page :data-pageid="'routingparameter-' + $props.id">
    <ion-header :translucent="true">
      <ion-toolbar>
        <ion-buttons>
          <ion-back-button></ion-back-button>
        </ion-buttons>
        <ion-title>Routing Parameter</ion-title>
      </ion-toolbar>
    </ion-header>

    <ion-content :fullscreen="true">
      <ion-header collapse="condense">
        <ion-toolbar>
          <ion-title size="large">Routing Parameter</ion-title>
        </ion-toolbar>
      </ion-header>

      <ion-button id="parameter-view" :router-link="'/routing/' + $route.params.id + '/view'">Go to Single View</ion-button>

      <ion-button router-link="/routing/abc">Go to Parameter Page ABC</ion-button>
      <ion-button router-link="/routing/xyz">Go to Parameter Page XYZ</ion-button>

      <div class="ion-padding" id="parameter-value">
        {{ $props.id }}
      </div>
    </ion-content>
  </ion-page>
</template>

<script lang="ts">
import {
  IonButton,
  IonBackButton,
  IonButtons,
  IonContent,
  IonHeader,
  IonPage,
  IonTitle,
  IonToolbar
} from '@ionic/vue';
import { defineComponent } from 'vue';

export default defineComponent({
  props: {
    id: { type: String, default: 'my default' }
  },
  components: {
    IonButton,
    IonBackButton,
    IonButtons,
    IonContent,
    IonHeader,
    IonPage,
    IonTitle,
    IonToolbar
  }
});
</script>
