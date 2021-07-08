# ion-note

Notes are text elements generally used as subtitles that provide more information. Notes are styled to appear grey by default. Notes can be used in an item as metadata text.


<!-- Auto Generated Below -->


## Usage

### Angular / javascript

```html
<!-- Default Note -->
<ion-note>Default Note</ion-note>

<!-- Note Colors -->
<ion-note color="primary">Primary Note</ion-note>
<ion-note color="secondary">Secondary Note</ion-note>
<ion-note color="danger">Danger Note</ion-note>
<ion-note color="light">Light Note</ion-note>
<ion-note color="dark">Dark Note</ion-note>

<!-- Notes in a List -->
<ion-list>
  <ion-item>
    <ion-label>Note (End)</ion-label>
    <ion-note slot="end">On</ion-note>
  </ion-item>

  <ion-item>
    <ion-note slot="start">Off</ion-note>
    <ion-label>Note (Start)</ion-label>
  </ion-item>
</ion-list>
```


### React

```tsx
import React from 'react';
import { IonNote, IonList, IonItem, IonLabel, IonContent } from '@ionic/react';

export const NoteExample: React.FC = () => (
  <IonContent>
    {/*-- Default Note --*/}
    <IonNote>Default Note</IonNote><br />

    {/*-- Note Colors --*/}
    <IonNote color="primary">Primary Note</IonNote><br />
    <IonNote color="secondary">Secondary Note</IonNote><br />
    <IonNote color="danger">Danger Note</IonNote><br />
    <IonNote color="light">Light Note</IonNote><br />
    <IonNote color="dark">Dark Note</IonNote><br />

    {/*-- Notes in a List --*/}
    <IonList>
      <IonItem>
        <IonLabel>Note (End)</IonLabel>
        <IonNote slot="end">On</IonNote>
      </IonItem>

      <IonItem>
        <IonNote slot="start">Off</IonNote>
        <IonLabel>Note (Start)</IonLabel>
      </IonItem>
    </IonList>
  </IonContent>
);
```


### Stencil

```tsx
import { Component, h } from '@stencil/core';

@Component({
  tag: 'note-example',
  styleUrl: 'note-example.css'
})
export class NoteExample {
  render() {
    return [
      // Default Note
      <ion-note>Default Note</ion-note>,

      // Note Colors
      <ion-note color="primary">Primary Note</ion-note>,
      <ion-note color="secondary">Secondary Note</ion-note>,
      <ion-note color="danger">Danger Note</ion-note>,
      <ion-note color="light">Light Note</ion-note>,
      <ion-note color="dark">Dark Note</ion-note>,

      // Notes in a List
      <ion-list>
        <ion-item>
          <ion-label>Note (End)</ion-label>
          <ion-note slot="end">On</ion-note>
        </ion-item>

        <ion-item>
          <ion-note slot="start">Off</ion-note>
          <ion-label>Note (Start)</ion-label>
        </ion-item>
      </ion-list>
    ];
  }
}
```


### Vue

```html
<template>
  <!-- Default Note -->
  <ion-note>Default Note</ion-note>

  <!-- Note Colors -->
  <ion-note color="primary">Primary Note</ion-note>
  <ion-note color="secondary">Secondary Note</ion-note>
  <ion-note color="danger">Danger Note</ion-note>
  <ion-note color="light">Light Note</ion-note>
  <ion-note color="dark">Dark Note</ion-note>

  <!-- Notes in a List -->
  <ion-list>
    <ion-item>
      <ion-label>Note (End)</ion-label>
      <ion-note slot="end">On</ion-note>
    </ion-item>

    <ion-item>
      <ion-note slot="start">Off</ion-note>
      <ion-label>Note (Start)</ion-label>
    </ion-item>
  </ion-list>
</template>

<script>
import { IonItem, IonLabel, IonList, IonNote } from '@ionic/vue';
import { defineComponent } from 'vue';

export default defineComponent({
  components: { IonItem, IonLabel, IonList, IonNote }
});
</script>
```



## Properties

| Property | Attribute | Description                                                                                                                                                                                                                                                            | Type                  | Default     |
| -------- | --------- | ---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | --------------------- | ----------- |
| `color`  | `color`   | The color to use from your application's color palette. Default options are: `"primary"`, `"secondary"`, `"tertiary"`, `"success"`, `"warning"`, `"danger"`, `"light"`, `"medium"`, and `"dark"`. For more information on colors, see [theming](/docs/theming/basics). | `string \| undefined` | `undefined` |
| `mode`   | `mode`    | The mode determines which platform styles to use.                                                                                                                                                                                                                      | `"ios" \| "md"`       | `undefined` |


## CSS Custom Properties

| Name      | Description       |
| --------- | ----------------- |
| `--color` | Color of the note |


## Dependencies

### Used by

 - [ion-item](../item)

### Graph
```mermaid
graph TD;
  ion-item --> ion-note
  style ion-note fill:#f9f,stroke:#333,stroke-width:4px
```

----------------------------------------------

*Built with [StencilJS](https://stenciljs.com/)*
