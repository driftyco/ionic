### Default

```html
<template>
  <ion-breadcrumbs>
    <ion-breadcrumb href="#">
      Home
    </ion-breadcrumb>
    <ion-breadcrumb href="#electronics">
      Electronics
    </ion-breadcrumb>
    <ion-breadcrumb href="#photography">
      Photography
    </ion-breadcrumb>
    <ion-breadcrumb href="#cameras">
      Cameras
    </ion-breadcrumb>
    <ion-breadcrumb href="#film">
      Film
    </ion-breadcrumb>
    <ion-breadcrumb>
      35 mm
    </ion-breadcrumb>
  </ion-breadcrumbs>
</template>

<script>
import { IonBreadcrumb, IonBreadcrumbs } from '@ionic/vue';
import { defineComponent } from 'vue';

export default defineComponent({
  components: { IonBreadcrumb, IonBreadcrumbs }
});
</script>
```

### Colors

```html
<template>
  <ion-breadcrumbs color="secondary">
    <ion-breadcrumb href="#">
      Home
    </ion-breadcrumb>
    <ion-breadcrumb href="#electronics">
      Electronics
    </ion-breadcrumb>
    <ion-breadcrumb href="#photography">
      Photography
    </ion-breadcrumb>
    <ion-breadcrumb href="#cameras">
      Cameras
    </ion-breadcrumb>
    <ion-breadcrumb href="#film">
      Film
    </ion-breadcrumb>
    <ion-breadcrumb>
      35 mm
    </ion-breadcrumb>
  </ion-breadcrumbs>
</template>

<script>
import { IonBreadcrumb, IonBreadcrumbs } from '@ionic/vue';
import { defineComponent } from 'vue';

export default defineComponent({
  components: { IonBreadcrumb, IonBreadcrumbs }
});
</script>
```

### Breadcrumbs with Icon

```html
<template>
  <!-- Icon start -->
  <ion-breadcrumbs>
    <ion-breadcrumb href="#">
      <ion-icon slot="start" :icon="home"></ion-icon>
      Home
    </ion-breadcrumb>
    <ion-breadcrumb href="#files">
      <ion-icon slot="start" :icon="folder"></ion-icon>
      Files
    </ion-breadcrumb>
    <ion-breadcrumb href="#projects">
      <ion-icon slot="start" :icon="folder"></ion-icon>
      Projects
    </ion-breadcrumb>
    <ion-breadcrumb href="#user-research">
      <ion-icon slot="start" :icon="folder"></ion-icon>
      User Research
    </ion-breadcrumb>
    <ion-breadcrumb>
      <ion-icon slot="start" :icon="document"></ion-icon>
      Survey.txt
    </ion-breadcrumb>
  </ion-breadcrumbs>

  <!-- Icon end -->
  <ion-breadcrumbs>
    <ion-breadcrumb href="#">
      Home
      <ion-icon slot="end" :icon="home"></ion-icon>
    </ion-breadcrumb>
    <ion-breadcrumb href="#files">
      Files
      <ion-icon slot="end" :icon="folder"></ion-icon>
    </ion-breadcrumb>
    <ion-breadcrumb href="#projects">
      Projects
      <ion-icon slot="end" :icon="folder"></ion-icon>
    </ion-breadcrumb>
    <ion-breadcrumb href="#user-research">
      User Research
      <ion-icon slot="end" :icon="folder"></ion-icon>
    </ion-breadcrumb>
    <ion-breadcrumb>
      Survey.txt
      <ion-icon slot="end" :icon="document"></ion-icon>
    </ion-breadcrumb>
  </ion-breadcrumbs>
</template>

<script>
import { IonBreadcrumb, IonBreadcrumbs, IonIcon } from '@ionic/vue';
import { document, folder, home } from 'ionicons/icons';
import { defineComponent } from 'vue';

export default defineComponent({
  components: { IonBreadcrumb, IonBreadcrumbs, IonIcon },
  setup() {
    return { document, folder, home }
  }
});
</script>
```

### Custom Separator

```html
<template>
  <!-- Custom separator text -->
  <ion-breadcrumbs>
    <ion-breadcrumb href="#">
      Home
      <span slot="separator">|</span>
    </ion-breadcrumb>
    <ion-breadcrumb href="#electronics">
      Electronics
      <span slot="separator">|</span>
    </ion-breadcrumb>
    <ion-breadcrumb href="#photography">
      Photography
      <span slot="separator">|</span>
    </ion-breadcrumb>
    <ion-breadcrumb href="#cameras">
      Cameras
      <span slot="separator">|</span>
    </ion-breadcrumb>
    <ion-breadcrumb href="#film">
      Film
      <span slot="separator">|</span>
    </ion-breadcrumb>
    <ion-breadcrumb>
      35 mm
    </ion-breadcrumb>
  </ion-breadcrumbs>

  <!-- Custom separator icon -->
  <ion-breadcrumbs>
    <ion-breadcrumb href="#">
      Home
      <ion-icon slot="separator" :icon="arrowForward"></ion-icon>
    </ion-breadcrumb>
    <ion-breadcrumb href="#electronics">
      Electronics
      <ion-icon slot="separator" :icon="arrowForward"></ion-icon>
    </ion-breadcrumb>
    <ion-breadcrumb href="#photography">
      Photography
      <ion-icon slot="separator" :icon="arrowForward"></ion-icon>
    </ion-breadcrumb>
    <ion-breadcrumb href="#cameras">
      Cameras
      <ion-icon slot="separator" :icon="arrowForward"></ion-icon>
    </ion-breadcrumb>
    <ion-breadcrumb href="#film">
      Film
      <ion-icon slot="separator" :icon="arrowForward"></ion-icon>
    </ion-breadcrumb>
    <ion-breadcrumb>
      35 mm
    </ion-breadcrumb>
  </ion-breadcrumbs>
</template>

<script>
import { IonBreadcrumb, IonBreadcrumbs, IonIcon } from '@ionic/vue';
import { arrowForward } from 'ionicons/icons';
import { defineComponent } from 'vue';

export default defineComponent({
  components: { IonBreadcrumb, IonBreadcrumbs, IonIcon },
  setup() {
    return { arrowForward }
  }
});
</script>
```

### Max Items

```html
<template>
  <!-- Max Items -->
  <ion-breadcrumbs :max-items="4">
    <ion-breadcrumb href="#">
      Home
    </ion-breadcrumb>
    <ion-breadcrumb href="#electronics">
      Electronics
    </ion-breadcrumb>
    <ion-breadcrumb href="#photography">
      Photography
    </ion-breadcrumb>
    <ion-breadcrumb href="#cameras">
      Cameras
    </ion-breadcrumb>
    <ion-breadcrumb href="#film">
      Film
    </ion-breadcrumb>
    <ion-breadcrumb>
      35 mm
    </ion-breadcrumb>
  </ion-breadcrumbs>
</template>

<script>
import { IonBreadcrumb, IonBreadcrumbs } from '@ionic/vue';
import { defineComponent } from 'vue';

export default defineComponent({
  components: { IonBreadcrumb, IonBreadcrumbs }
});
</script>
```

### Items Before or After Collapse

```html
<template>
  <!-- Items before collapse -->
  <ion-breadcrumbs :max-items="4" :items-before-collapse="2">
    <ion-breadcrumb href="#">
      Home
    </ion-breadcrumb>
    <ion-breadcrumb href="#electronics">
      Electronics
    </ion-breadcrumb>
    <ion-breadcrumb href="#photography">
      Photography
    </ion-breadcrumb>
    <ion-breadcrumb href="#cameras">
      Cameras
    </ion-breadcrumb>
    <ion-breadcrumb href="#film">
      Film
    </ion-breadcrumb>
    <ion-breadcrumb>
      35 mm
    </ion-breadcrumb>
  </ion-breadcrumbs>

  <!-- Items after collapse -->
  <ion-breadcrumbs :max-items="4" :items-after-collapse="3">
    <ion-breadcrumb href="#">
      Home
    </ion-breadcrumb>
    <ion-breadcrumb href="#electronics">
      Electronics
    </ion-breadcrumb>
    <ion-breadcrumb href="#photography">
      Photography
    </ion-breadcrumb>
    <ion-breadcrumb href="#cameras">
      Cameras
    </ion-breadcrumb>
    <ion-breadcrumb href="#film">
      Film
    </ion-breadcrumb>
    <ion-breadcrumb>
      35 mm
    </ion-breadcrumb>
  </ion-breadcrumbs>

  <!-- Items before and after collapse -->
  <ion-breadcrumbs :max-items="4" :items-before-collapse="0" :items-after-collapse="3">
    <ion-breadcrumb href="#">
      Home
    </ion-breadcrumb>
    <ion-breadcrumb href="#electronics">
      Electronics
    </ion-breadcrumb>
    <ion-breadcrumb href="#photography">
      Photography
    </ion-breadcrumb>
    <ion-breadcrumb href="#cameras">
      Cameras
    </ion-breadcrumb>
    <ion-breadcrumb href="#film">
      Film
    </ion-breadcrumb>
    <ion-breadcrumb>
      35 mm
    </ion-breadcrumb>
  </ion-breadcrumbs>
</template>

<script>
import { IonBreadcrumb, IonBreadcrumbs } from '@ionic/vue';
import { defineComponent } from 'vue';

export default defineComponent({
  components: { IonBreadcrumb, IonBreadcrumbs }
});
</script>
```

### Expand on Collapsed Indicator Click

```html
<template>
  <ion-breadcrumbs :max-items="maxBreadcrumbs" @ionCollapsedClick="expandBreadcrumbs()">
    <ion-breadcrumb href="#">
      Home
    </ion-breadcrumb>
    <ion-breadcrumb href="#electronics">
      Electronics
    </ion-breadcrumb>
    <ion-breadcrumb href="#photography">
      Photography
    </ion-breadcrumb>
    <ion-breadcrumb href="#cameras">
      Cameras
    </ion-breadcrumb>
    <ion-breadcrumb href="#film">
      Film
    </ion-breadcrumb>
    <ion-breadcrumb>
      35 mm
    </ion-breadcrumb>
  </ion-breadcrumbs>
</template>

<script>
import { IonBadge, IonItem, IonLabel } from '@ionic/vue';
import { defineComponent, ref } from 'vue';

export default defineComponent({
  components: { IonBadge, IonItem, IonLabel },
  setup() {
    const maxBreadcrumbs = ref(4);

    return { maxBreadcrumbs };
  },
  methods: {
    expandBreadcrumbs() {
      maxBreadcrumbs.value = undefined;
    }
  }
});
</script>
```


### Popover on Collapsed Indicator Click

```html
<template>
  <ion-breadcrumbs :max-items="4" @ionCollapsedClick="presentPopover($event)">
    <ion-breadcrumb href="#">
      Home
    </ion-breadcrumb>
    <ion-breadcrumb href="#electronics">
      Electronics
    </ion-breadcrumb>
    <ion-breadcrumb href="#photography">
      Photography
    </ion-breadcrumb>
    <ion-breadcrumb href="#cameras">
      Cameras
    </ion-breadcrumb>
    <ion-breadcrumb href="#film">
      Film
    </ion-breadcrumb>
    <ion-breadcrumb>
      35 mm
    </ion-breadcrumb>
  </ion-breadcrumbs>
</template>

<script>
import { IonBadge, IonItem, IonLabel, popoverController } from '@ionic/vue';
import { defineComponent, ref } from 'vue';
import ListPopover from './popover.vue';

export default defineComponent({
  components: { IonBadge, IonItem, IonLabel },
  methods: {
    async presentPopover(ev: Event) {
      const popover = await popoverController.create({
        component: ListPopover,
        event: ev
      });
      await popover.present();
    },
  }
});
</script>
```

```html
<template>
  <ion-content>
    <ion-list>
      <ion-item href="#">
        <ion-label>Home</ion-label>
      </ion-item>
      <ion-item href="#electronics">
        <ion-label>Electronics</ion-label>
      </ion-item>
      <ion-item href="#photography">
        <ion-label>Photography</ion-label>
      </ion-item>
      <ion-item href="#cameras">
        <ion-label>Cameras</ion-label>
      </ion-item>
    </ion-list>
  </ion-content>
</template>

<script>
import { IonContent } from '@ionic/vue';
import { defineComponent } from 'vue';

export default defineComponent({
  name: 'ListPopover',
  components: { IonContent, IonItem, IonLabel, IonList }
});
</script>
```
