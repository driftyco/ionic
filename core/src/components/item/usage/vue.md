```html
<template>
  <!-- Default Item -->
  <ion-item>
    <ion-label>
      Item
    </ion-label>
  </ion-item>

  <!-- Item as a Button -->
  <ion-item button @click="buttonClick()">
    <ion-label>
      Button Item
    </ion-label>
  </ion-item>

  <!-- Item as an Anchor -->
  <ion-item href="https://www.ionicframework.com">
    <ion-label>
      Anchor Item
    </ion-label>
  </ion-item>

  <ion-item color="secondary">
    <ion-label>
      Secondary Color Item
    </ion-label>
  </ion-item>
</template>
```

### Detail Arrows

```html
<template>
  <ion-item detail>
    <ion-label>
      Standard Item with Detail Arrow
    </ion-label>
  </ion-item>

  <ion-item button @click="buttonClick()" detail>
    <ion-label>
      Button Item with Detail Arrow
    </ion-label>
  </ion-item>

  <ion-item detail="false" href="https://www.ionicframework.com">
    <ion-label>
      Anchor Item with no Detail Arrow
    </ion-label>
  </ion-item>
</template>
```

### List Items

```html
<template>
  <ion-list>
    <ion-item>
      <ion-label>
        Item
      </ion-label>
    </ion-item>

    <ion-item lines="none">
      <ion-label>
        No Lines Item
      </ion-label>
    </ion-item>

    <ion-item>
      <ion-label class="ion-text-wrap">
      Multiline text that should wrap when it is too long
      to fit on one line in the item.
      </ion-label>
    </ion-item>

    <ion-item>
      <ion-label class="ion-text-wrap">
        <ion-text color="primary">
          <h3>H3 Primary Title</h3>
        </ion-text>
        <p>Paragraph line 1</p>
        <ion-text color="secondary">
          <p>Paragraph line 2 secondary</p>
        </ion-text>
      </ion-label>
    </ion-item>

    <ion-item lines="full">
      <ion-label>
        Item with Full Lines
      </ion-label>
    </ion-item>

  </ion-list>
</template>
```

### Item Lines

```html
<template>
  <!-- Item Inset Lines -->
  <ion-item lines="inset">
    <ion-label>Item Lines Inset</ion-label>
  </ion-item>

  <!-- Item Full Lines -->
  <ion-item lines="full">
    <ion-label>Item Lines Full</ion-label>
  </ion-item>

  <!-- Item None Lines -->
  <ion-item lines="none">
    <ion-label>Item Lines None</ion-label>
  </ion-item>

  <!-- List Full Lines -->
  <ion-list lines="full">
    <ion-item>
      <ion-label>Full Lines Item 1</ion-label>
    </ion-item>

    <ion-item>
      <ion-label>Full Lines Item 2</ion-label>
    </ion-item>
  </ion-list>

  <!-- List Inset Lines -->
  <ion-list lines="inset">
    <ion-item>
      <ion-label>Inset Lines Item 1</ion-label>
    </ion-item>

    <ion-item>
      <ion-label>Inset Lines Item 2</ion-label>
    </ion-item>
  </ion-list>

  <!-- List No Lines -->
  <ion-list lines="none">
    <ion-item>
      <ion-label>No lines Item 1</ion-label>
    </ion-item>

    <ion-item>
      <ion-label>No lines Item 2</ion-label>
    </ion-item>

    <ion-item>
      <ion-label>No lines Item 3</ion-label>
    </ion-item>
  </ion-list>
</template>
```


### Media Items

```html
<template>
  <ion-item button @click="testClick()">
    <ion-avatar slot="start">
      <img src="data:image/gif;base64,R0lGODlhAQABAIAAAAAAAAAAACH5BAAAAAAALAAAAAABAAEAAAICTAEAOw==">
    </ion-avatar>
    <ion-label>
      Avatar Start, Button Item
    </ion-label>
  </ion-item>

  <ion-item href="#">
    <ion-label>
      Thumbnail End, Anchor Item
    </ion-label>
    <ion-thumbnail slot="end">
      <img src="data:image/gif;base64,R0lGODlhAQABAIAAAAAAAAAAACH5BAAAAAAALAAAAAABAAEAAAICTAEAOw==">
    </ion-thumbnail>
  </ion-item>

  <ion-item>
    <ion-thumbnail slot="start">
      <img src="data:image/gif;base64,R0lGODlhAQABAIAAAAAAAAAAACH5BAAAAAAALAAAAAABAAEAAAICTAEAOw==">
    </ion-thumbnail>
    <ion-label>
      <h2>H2 Title Text</h2>
      <p>Button on right</p>
    </ion-label>
    <ion-button fill="outline" slot="end">View</ion-button>
  </ion-item>

  <ion-item button @click="testClick()">
    <ion-thumbnail slot="start">
      <img src="data:image/gif;base64,R0lGODlhAQABAIAAAAAAAAAAACH5BAAAAAAALAAAAAABAAEAAAICTAEAOw==">
    </ion-thumbnail>
    <ion-label>
      <h3>H3 Title Text</h3>
      <p>Icon on right</p>
    </ion-label>
    <ion-icon :icon="closeCircle" slot="end"></ion-icon>
  </ion-item>
</template>
```

### Buttons in Items

```html
<template>
  <ion-item>
    <ion-button slot="start">
      Start
    </ion-button>
    <ion-label>Button Start/End</ion-label>
    <ion-button slot="end">
      End
    </ion-button>
  </ion-item>

  <ion-item>
    <ion-button slot="start">
      Start Icon
      <ion-icon :icon="home" slot="end"></ion-icon>
    </ion-button>
    <ion-label>Buttons with Icons</ion-label>
    <ion-button slot="end">
      <ion-icon :icon="star" slot="end"></ion-icon>
      End Icon
    </ion-button>
  </ion-item>

  <ion-item>
    <ion-button slot="start">
      <ion-icon slot="icon-only" :icon="navigate"></ion-icon>
    </ion-button>
    <ion-label>Icon only Buttons</ion-label>
    <ion-button slot="end">
      <ion-icon slot="icon-only" :icon="star"></ion-icon>
    </ion-button>
  </ion-item>
</template>
```

### Icons in Items

```html
<template>
  <ion-item>
    <ion-label>
      Icon End
    </ion-label>
    <ion-icon :icon="informationCircle" slot="end"></ion-icon>
  </ion-item>

  <ion-item>
    <ion-label>
      Large Icon End
    </ion-label>
    <ion-icon :icon="informationCircle" size="large" slot="end"></ion-icon>
  </ion-item>

  <ion-item>
    <ion-label>
      Small Icon End
    </ion-label>
    <ion-icon :icon="informationCircle" size="small" slot="end"></ion-icon>
  </ion-item>

  <ion-item>
    <ion-icon :icon="star" slot="start"></ion-icon>
    <ion-label>
      Icon Start
    </ion-label>
  </ion-item>

  <ion-item>
    <ion-label>
      Two Icons End
    </ion-label>
    <ion-icon :icon="checkmarkCircle" slot="end"></ion-icon>
    <ion-icon :icon="shuffle" slot="end"></ion-icon>
  </ion-item>
</template>
```

### Item Inputs

```html
<template>
  <ion-item>
    <ion-label position="floating">Datetime</ion-label>
    <ion-datetime></ion-datetime>
  </ion-item>

  <ion-item>
    <ion-label position="floating">Select</ion-label>
    <ion-select>
      <ion-select-option value="">No Game Console</ion-select-option>
      <ion-select-option value="nes">NES</ion-select-option>
      <ion-select-option value="n64" selected>Nintendo64</ion-select-option>
      <ion-select-option value="ps">PlayStation</ion-select-option>
      <ion-select-option value="genesis">Sega Genesis</ion-select-option>
      <ion-select-option value="saturn">Sega Saturn</ion-select-option>
      <ion-select-option value="snes">SNES</ion-select-option>
    </ion-select>
  </ion-item>

  <ion-item>
    <ion-label>Toggle</ion-label>
    <ion-toggle slot="end"></ion-toggle>
  </ion-item>

  <ion-item>
    <ion-label position="floating">Floating Input</ion-label>
    <ion-input></ion-input>
  </ion-item>

  <ion-item>
    <ion-label>Input (placeholder)</ion-label>
    <ion-input placeholder="Placeholder"></ion-input>
  </ion-item>

  <ion-item fill="solid">
    <ion-label position="floating">Input (Fill: Solid)</ion-label>
    <ion-input></ion-input>
  </ion-item>

  <ion-item fill="outline">
    <ion-label position="floating">Input (Fill: Outline)</ion-label>
    <ion-input></ion-input>
  </ion-item>

  <ion-item>
    <ion-label>Helper and Error Text</ion-label>
    <ion-input></ion-input>
    <ion-note slot="helper">Helper Text</ion-note>
    <ion-note slot="error">Error Text</ion-note>
  </ion-item>

  <ion-item>
    <ion-label>Checkbox</ion-label>
    <ion-checkbox slot="start"></ion-checkbox>
  </ion-item>

  <ion-item>
    <ion-label>Range</ion-label>
    <ion-range></ion-range>
  </ion-item>
</template>

<script>
import { 
  IonAvatar,
  IonButton,
  IonCheckbox, 
  IonDatetime,
  IonNote,
  IonIcon,
  IonInput, 
  IonItem, 
  IonLabel, 
  IonRange,
  IonSelect, 
  IonSelectOption, 
  IonText,
  IonThumbnail,
  IonToggle
} from '@ionic/vue';
import { 
  checkmarkCircle, 
  closeCircle, 
  home, 
  informationCircle, 
  navigate, 
  shuffle, 
  star
} from 'ionicons/icons';
import { defineComponent } from 'vue';

export default defineComponent({
  components: { 
    IonAvatar,
    IonButton,
    IonCheckbox, 
    IonDatetime,
    IonNote,
    IonIcon,
    IonInput, 
    IonItem, 
    IonLabel, 
    IonRange,
    IonSelect, 
    IonSelectOption, 
    IonText,
    IonThumbnail,
    IonToggle
  },
  setup() {
    return {
      checkmarkCircle, 
      closeCircle, 
      home, 
      informationCircle, 
      navigate, 
      shuffle, 
      star
    }
  }
});
</script>
```
