<template>
  <ion-page data-pageid="tabs">
    <ion-content>
      <ion-tabs id="tabs">
        <ion-router-outlet></ion-router-outlet>
        <ion-tab-bar slot="bottom">
          <ion-tab-button
            v-for="tab in tabs"
            :tab="'tab' + tab.id"
            :href="'/tabs/tab' + tab.id"
            :key="tab.id"
          >
            <ion-icon :icon="tab.icon" />
            <ion-label>Tab {{ tab.id }}</ion-label>
          </ion-tab-button>

          <ion-button id="add-tab" @click="addTab()">Add Tab</ion-button>
        </ion-tab-bar>
      </ion-tabs>
    </ion-content>
  </ion-page>
</template>

<script lang="ts">
import { IonButton, IonTabBar, IonTabButton, IonTabs, IonContent, IonLabel, IonIcon, IonPage, IonRouterOutlet } from '@ionic/vue';
import { ellipse, square, triangle, shield } from 'ionicons/icons';
import { useRouter } from 'vue-router';
import { ref, defineComponent } from 'vue';

export default defineComponent({
  name: 'Tabs',
  components: { IonButton, IonContent, IonLabel, IonTabs, IonTabBar, IonTabButton, IonIcon, IonPage, IonRouterOutlet },
  setup() {
    const tabs = ref([
      { id: 1, icon: triangle },
      { id: 2, icon: ellipse },
      { id: 3, icon: square }
    ])
    const router = useRouter();
    const addTab = () => {
      router.addRoute({ path: '/tabs/tab4', component: () => import('@/views/Tab4.vue') });
      tabs.value = [
        ...tabs.value,
        {
          id: 4,
          icon: shield
        }
      ]
    }

    return { tabs, addTab }
  }
});
</script>
