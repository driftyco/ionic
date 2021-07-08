# ion-segment

Segments display a group of related buttons, sometimes known as segmented controls, in a horizontal row. They can be displayed inside of a toolbar or the main content.

Their functionality is similar to tabs, where selecting one will deselect all others. Segments are useful for toggling between different views inside of the content. Tabs should be used instead of a segment when clicking on a control should navigate between pages.

## Scrollable Segments

Segments are not scrollable by default. Each segment button has a fixed width, and the width is determined by dividing the number of segment buttons by the screen width. This ensures that each segment button can be displayed on the screen without having to scroll. As a result, some segment buttons with longer labels may get cut off. To avoid this we recommend either using a shorter label or switching to a scrollable segment by setting the `scrollable` property to `true`. This will cause the segment to scroll horizontally, but will allow each segment button to have a variable width.

<!-- Auto Generated Below -->


## Usage

### Angular

```html
<!-- Default Segment -->
<ion-segment (ionChange)="segmentChanged($event)">
  <ion-segment-button value="friends">
    <ion-label>Friends</ion-label>
  </ion-segment-button>
  <ion-segment-button value="enemies">
    <ion-label>Enemies</ion-label>
  </ion-segment-button>
</ion-segment>

<!-- Disabled Segment -->
<ion-segment (ionChange)="segmentChanged($event)" disabled value="sunny">
  <ion-segment-button value="sunny">
    <ion-label>Sunny</ion-label>
  </ion-segment-button>
  <ion-segment-button value="rainy">
    <ion-label>Rainy</ion-label>
  </ion-segment-button>
</ion-segment>

<!-- Segment with anchors -->
<ion-segment (ionChange)="segmentChanged($event)">
  <ion-segment-button value="dogs">
    <ion-label>Dogs</ion-label>
  </ion-segment-button>
  <ion-segment-button value="cats">
    <ion-label>Cats</ion-label>
  </ion-segment-button>
</ion-segment>

<!-- Scrollable Segment -->
<ion-segment scrollable value="heart">
  <ion-segment-button value="home">
    <ion-icon name="home"></ion-icon>
  </ion-segment-button>
  <ion-segment-button value="heart">
    <ion-icon name="heart"></ion-icon>
  </ion-segment-button>
  <ion-segment-button value="pin">
    <ion-icon name="pin"></ion-icon>
  </ion-segment-button>
  <ion-segment-button value="star">
    <ion-icon name="star"></ion-icon>
  </ion-segment-button>
  <ion-segment-button value="call">
    <ion-icon name="call"></ion-icon>
  </ion-segment-button>
  <ion-segment-button value="globe">
    <ion-icon name="globe"></ion-icon>
  </ion-segment-button>
  <ion-segment-button value="basket">
    <ion-icon name="basket"></ion-icon>
  </ion-segment-button>
</ion-segment>

<!-- Segment with secondary color -->
<ion-segment (ionChange)="segmentChanged($event)" color="secondary">
  <ion-segment-button value="standard">
    <ion-label>Standard</ion-label>
  </ion-segment-button>
  <ion-segment-button value="hybrid">
    <ion-label>Hybrid</ion-label>
  </ion-segment-button>
  <ion-segment-button value="sat">
    <ion-label>Satellite</ion-label>
  </ion-segment-button>
</ion-segment>

<!-- Segment in a toolbar -->
<ion-toolbar>
  <ion-segment (ionChange)="segmentChanged($event)">
    <ion-segment-button value="camera">
      <ion-icon name="camera"></ion-icon>
    </ion-segment-button>
    <ion-segment-button value="bookmark">
      <ion-icon name="bookmark"></ion-icon>
    </ion-segment-button>
  </ion-segment>
</ion-toolbar>

<!-- Segment with default selection -->
<ion-segment (ionChange)="segmentChanged($event)" value="javascript">
  <ion-segment-button value="python">
    <ion-label>Python</ion-label>
  </ion-segment-button>
  <ion-segment-button value="javascript">
    <ion-label>Javascript</ion-label>
  </ion-segment-button>
</ion-segment>
```

```typescript
import { Component } from '@angular/core';

@Component({
  selector: 'segment-example',
  templateUrl: 'segment-example.html',
  styleUrls: ['./segment-example.css'],
})
export class SegmentExample {
  segmentChanged(ev: any) {
    console.log('Segment changed', ev);
  }
}
```


### Javascript

```html
<!-- Default Segment -->
<ion-segment>
  <ion-segment-button value="friends">
    <ion-label>Friends</ion-label>
  </ion-segment-button>
  <ion-segment-button value="enemies">
    <ion-label>Enemies</ion-label>
  </ion-segment-button>
</ion-segment>

<!-- Disabled Segment -->
<ion-segment disabled value="sunny">
  <ion-segment-button value="sunny">
    <ion-label>Sunny</ion-label>
  </ion-segment-button>
  <ion-segment-button value="rainy">
    <ion-label>Rainy</ion-label>
  </ion-segment-button>
</ion-segment>

<!-- Segment with anchors -->
<ion-segment>
  <ion-segment-button value="dogs">
    <ion-label>Dogs</ion-label>
  </ion-segment-button>
  <ion-segment-button value="cats">
    <ion-label>Cats</ion-label>
  </ion-segment-button>
</ion-segment>

<!-- Scrollable Segment -->
<ion-segment scrollable value="heart">
  <ion-segment-button value="home">
    <ion-icon name="home"></ion-icon>
  </ion-segment-button>
  <ion-segment-button value="heart">
    <ion-icon name="heart"></ion-icon>
  </ion-segment-button>
  <ion-segment-button value="pin">
    <ion-icon name="pin"></ion-icon>
  </ion-segment-button>
  <ion-segment-button value="star">
    <ion-icon name="star"></ion-icon>
  </ion-segment-button>
  <ion-segment-button value="call">
    <ion-icon name="call"></ion-icon>
  </ion-segment-button>
  <ion-segment-button value="globe">
    <ion-icon name="globe"></ion-icon>
  </ion-segment-button>
  <ion-segment-button value="basket">
    <ion-icon name="basket"></ion-icon>
  </ion-segment-button>
</ion-segment>

<!-- Segment with secondary color -->
<ion-segment color="secondary">
  <ion-segment-button value="standard">
    <ion-label>Standard</ion-label>
  </ion-segment-button>
  <ion-segment-button value="hybrid">
    <ion-label>Hybrid</ion-label>
  </ion-segment-button>
  <ion-segment-button value="sat">
    <ion-label>Satellite</ion-label>
  </ion-segment-button>
</ion-segment>

<!-- Segment in a toolbar -->
<ion-toolbar>
  <ion-segment>
    <ion-segment-button value="camera">
      <ion-icon name="camera"></ion-icon>
    </ion-segment-button>
    <ion-segment-button value="bookmark">
      <ion-icon name="bookmark"></ion-icon>
    </ion-segment-button>
  </ion-segment>
</ion-toolbar>

<!-- Segment with default selection -->
<ion-segment value="javascript">
  <ion-segment-button value="python">
    <ion-label>Python</ion-label>
  </ion-segment-button>
  <ion-segment-button value="javascript">
    <ion-label>Javascript</ion-label>
  </ion-segment-button>
</ion-segment>
```

```javascript
// Listen for ionChange on all segments
const segments = document.querySelectorAll('ion-segment')
for (let i = 0; i < segments.length; i++) {
  segments[i].addEventListener('ionChange', (ev) => {
    console.log('Segment changed', ev);
  })
}
```


### React

```tsx
import React from 'react';
import { IonContent, IonHeader, IonPage, IonTitle, IonToolbar, IonSegment, IonSegmentButton, IonLabel, IonIcon } from '@ionic/react';
import { call, home, heart, pin, star, globe, basket, camera, bookmark } from 'ionicons/icons';

export const SegmentExamples: React.FC = () => {
  return (
    <IonPage>
      <IonHeader>
        <IonToolbar>
          <IonTitle>SegmentExamples</IonTitle>
        </IonToolbar>
      </IonHeader>
      <IonContent>
        {/*-- Default Segment --*/}
        <IonSegment onIonChange={e => console.log('Segment selected', e.detail.value)}>
          <IonSegmentButton value="friends">
            <IonLabel>Friends</IonLabel>
          </IonSegmentButton>
          <IonSegmentButton value="enemies">
            <IonLabel>Enemies</IonLabel>
          </IonSegmentButton>
        </IonSegment>

        {/*-- Disabled Segment --*/}
        <IonSegment onIonChange={e => console.log('Segment selected', e.detail.value)} disabled value="sunny">
          <IonSegmentButton value="sunny">
            <IonLabel>Sunny</IonLabel>
          </IonSegmentButton>
          <IonSegmentButton value="rainy">
            <IonLabel>Rainy</IonLabel>
          </IonSegmentButton>
        </IonSegment>

        {/*-- Segment with anchors --*/}
        <IonSegment onIonChange={e => console.log('Segment selected', e.detail.value)}>
          <IonSegmentButton value="dogs">
            <IonLabel>Dogs</IonLabel>
          </IonSegmentButton>
          <IonSegmentButton value="cats">
            <IonLabel>Cats</IonLabel>
          </IonSegmentButton>
        </IonSegment>

        {/*-- Scrollable Segment --*/}
        <IonSegment scrollable value="heart">
          <IonSegmentButton value="home">
            <IonIcon icon={home} />
          </IonSegmentButton>
          <IonSegmentButton value="heart">
            <IonIcon icon={heart} />
          </IonSegmentButton>
          <IonSegmentButton value="pin">
            <IonIcon icon={pin} />
          </IonSegmentButton>
          <IonSegmentButton value="star">
            <IonIcon icon={star} />
          </IonSegmentButton>
          <IonSegmentButton value="call">
            <IonIcon icon={call} />
          </IonSegmentButton>
          <IonSegmentButton value="globe">
            <IonIcon icon={globe} />
          </IonSegmentButton>
          <IonSegmentButton value="basket">
            <IonIcon icon={basket} />
          </IonSegmentButton>
        </IonSegment>

        {/*-- Segment with secondary color --*/}
        <IonSegment onIonChange={e => console.log('Segment selected', e.detail.value)} color="secondary">
          <IonSegmentButton value="standard">
            <IonLabel>Standard</IonLabel>
          </IonSegmentButton>
          <IonSegmentButton value="hybrid">
            <IonLabel>Hybrid</IonLabel>
          </IonSegmentButton>
          <IonSegmentButton value="sat">
            <IonLabel>Satellite</IonLabel>
          </IonSegmentButton>
        </IonSegment>

        {/*-- Segment in a toolbar --*/}
        <IonToolbar>
          <IonSegment onIonChange={e => console.log('Segment selected', e.detail.value)}>
            <IonSegmentButton value="camera">
              <IonIcon icon={camera} />
            </IonSegmentButton>
            <IonSegmentButton value="bookmark">
              <IonIcon icon={bookmark} />
            </IonSegmentButton>
          </IonSegment>
        </IonToolbar>

        {/*-- Segment with default selection --*/}
        <IonSegment onIonChange={e => console.log('Segment selected', e.detail.value)} value="javascript">
          <IonSegmentButton value="python">
            <IonLabel>Python</IonLabel>
          </IonSegmentButton>
          <IonSegmentButton value="javascript">
            <IonLabel>Javascript</IonLabel>
          </IonSegmentButton>
        </IonSegment>
      </IonContent>
    </IonPage>
  );
};

```


### Stencil

```tsx
import { Component, h } from '@stencil/core';

@Component({
  tag: 'segment-example',
  styleUrl: 'segment-example.css'
})
export class SegmentExample {
  segmentChanged(ev: any) {
    console.log('Segment changed', ev);
  }

  render() {
     return [
      // Default Segment
      <ion-segment onIonChange={(ev) => this.segmentChanged(ev)}>
        <ion-segment-button value="friends">
          <ion-label>Friends</ion-label>
        </ion-segment-button>
        <ion-segment-button value="enemies">
          <ion-label>Enemies</ion-label>
        </ion-segment-button>
      </ion-segment>,

      // Disabled Segment
      <ion-segment onIonChange={(ev) => this.segmentChanged(ev)} disabled={true} value="sunny">
        <ion-segment-button value="sunny">
          <ion-label>Sunny</ion-label>
        </ion-segment-button>
        <ion-segment-button value="rainy">
          <ion-label>Rainy</ion-label>
        </ion-segment-button>
      </ion-segment>,

      // Segment with anchors
      <ion-segment onIonChange={(ev) => this.segmentChanged(ev)}>
        <ion-segment-button value="dogs">
          <ion-label>Dogs</ion-label>
        </ion-segment-button>
        <ion-segment-button value="cats">
          <ion-label>Cats</ion-label>
        </ion-segment-button>
      </ion-segment>,

      // Scrollable Segment
      <ion-segment scrollable value="heart">
        <ion-segment-button value="home">
          <ion-icon name="home"></ion-icon>
        </ion-segment-button>
        <ion-segment-button value="heart">
          <ion-icon name="heart"></ion-icon>
        </ion-segment-button>
        <ion-segment-button value="pin">
          <ion-icon name="pin"></ion-icon>
        </ion-segment-button>
        <ion-segment-button value="star">
          <ion-icon name="star"></ion-icon>
        </ion-segment-button>
        <ion-segment-button value="call">
          <ion-icon name="call"></ion-icon>
        </ion-segment-button>
        <ion-segment-button value="globe">
          <ion-icon name="globe"></ion-icon>
        </ion-segment-button>
        <ion-segment-button value="basket">
          <ion-icon name="basket"></ion-icon>
        </ion-segment-button>
      </ion-segment>,

      // Segment with secondary color
      <ion-segment onIonChange={(ev) => this.segmentChanged(ev)} color="secondary">
        <ion-segment-button value="standard">
          <ion-label>Standard</ion-label>
        </ion-segment-button>
        <ion-segment-button value="hybrid">
          <ion-label>Hybrid</ion-label>
        </ion-segment-button>
        <ion-segment-button value="sat">
          <ion-label>Satellite</ion-label>
        </ion-segment-button>
      </ion-segment>,

      // Segment in a toolbar
      <ion-toolbar>
        <ion-segment onIonChange={(ev) => this.segmentChanged(ev)}>
          <ion-segment-button value="camera">
            <ion-icon name="camera"></ion-icon>
          </ion-segment-button>
          <ion-segment-button value="bookmark">
            <ion-icon name="bookmark"></ion-icon>
          </ion-segment-button>
        </ion-segment>
      </ion-toolbar>,

      // Segment with default selection
      <ion-segment onIonChange={(ev) => this.segmentChanged(ev)} value="javascript">
        <ion-segment-button value="python">
          <ion-label>Python</ion-label>
        </ion-segment-button>
        <ion-segment-button value="javascript">
          <ion-label>Javascript</ion-label>
        </ion-segment-button>
      </ion-segment>
    ];
  }
}
```


### Vue

```html
<template>
  <!-- Default Segment -->
  <ion-segment @ionChange="segmentChanged($event)">
    <ion-segment-button value="friends">
      <ion-label>Friends</ion-label>
    </ion-segment-button>
    <ion-segment-button value="enemies">
      <ion-label>Enemies</ion-label>
    </ion-segment-button>
  </ion-segment>

  <!-- Disabled Segment -->
  <ion-segment @ionChange="segmentChanged($event)" disabled value="sunny">
    <ion-segment-button value="sunny">
      <ion-label>Sunny</ion-label>
    </ion-segment-button>
    <ion-segment-button value="rainy">
      <ion-label>Rainy</ion-label>
    </ion-segment-button>
  </ion-segment>

  <!-- Segment with anchors -->
  <ion-segment @ionChange="segmentChanged($event)">
    <ion-segment-button value="dogs">
      <ion-label>Dogs</ion-label>
    </ion-segment-button>
    <ion-segment-button value="cats">
      <ion-label>Cats</ion-label>
    </ion-segment-button>
  </ion-segment>

  <!-- Scrollable Segment -->
  <ion-segment scrollable value="heart">
    <ion-segment-button value="home">
      <ion-icon name="home"></ion-icon>
    </ion-segment-button>
    <ion-segment-button value="heart">
      <ion-icon name="heart"></ion-icon>
    </ion-segment-button>
    <ion-segment-button value="pin">
      <ion-icon name="pin"></ion-icon>
    </ion-segment-button>
    <ion-segment-button value="star">
      <ion-icon name="star"></ion-icon>
    </ion-segment-button>
    <ion-segment-button value="call">
      <ion-icon name="call"></ion-icon>
    </ion-segment-button>
    <ion-segment-button value="globe">
      <ion-icon name="globe"></ion-icon>
    </ion-segment-button>
    <ion-segment-button value="basket">
      <ion-icon name="basket"></ion-icon>
    </ion-segment-button>
  </ion-segment>

  <!-- Segment with secondary color -->
  <ion-segment @ionChange="segmentChanged($event)" color="secondary">
    <ion-segment-button value="standard">
      <ion-label>Standard</ion-label>
    </ion-segment-button>
    <ion-segment-button value="hybrid">
      <ion-label>Hybrid</ion-label>
    </ion-segment-button>
    <ion-segment-button value="sat">
      <ion-label>Satellite</ion-label>
    </ion-segment-button>
  </ion-segment>

  <!-- Segment in a toolbar -->
  <ion-toolbar>
    <ion-segment @ionChange="segmentChanged($event)">
      <ion-segment-button value="camera">
        <ion-icon name="camera"></ion-icon>
      </ion-segment-button>
      <ion-segment-button value="bookmark">
        <ion-icon name="bookmark"></ion-icon>
      </ion-segment-button>
    </ion-segment>
  </ion-toolbar>

  <!-- Segment with default selection -->
  <ion-segment @ionChange="segmentChanged($event)" value="javascript">
    <ion-segment-button value="python">
      <ion-label>Python</ion-label>
    </ion-segment-button>
    <ion-segment-button value="javascript">
      <ion-label>Javascript</ion-label>
    </ion-segment-button>
  </ion-segment>
</template>

<script lang="ts">
import { IonSegment, IonSegmentButton, IonToolbar } from '@ionic/vue';
import { defineComponent } from 'vue';

export default defineComponent({
  components: { IonSegment, IonSegmentButton, IonToolbar },
  methods: {
    segmentChanged(ev: CustomEvent) {
      console.log('Segment changed', ev);
    }
  }
});
</script>
```



## Properties

| Property       | Attribute       | Description                                                                                                                                                                                                                                                            | Type                          | Default     |
| -------------- | --------------- | ---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ----------------------------- | ----------- |
| `color`        | `color`         | The color to use from your application's color palette. Default options are: `"primary"`, `"secondary"`, `"tertiary"`, `"success"`, `"warning"`, `"danger"`, `"light"`, `"medium"`, and `"dark"`. For more information on colors, see [theming](/docs/theming/basics). | `string \| undefined`         | `undefined` |
| `disabled`     | `disabled`      | If `true`, the user cannot interact with the segment.                                                                                                                                                                                                                  | `boolean`                     | `false`     |
| `mode`         | `mode`          | The mode determines which platform styles to use.                                                                                                                                                                                                                      | `"ios" \| "md"`               | `undefined` |
| `scrollable`   | `scrollable`    | If `true`, the segment buttons will overflow and the user can swipe to see them. In addition, this will disable the gesture to drag the indicator between the buttons in order to swipe to see hidden buttons.                                                         | `boolean`                     | `false`     |
| `swipeGesture` | `swipe-gesture` | If `true`, users will be able to swipe between segment buttons to activate them.                                                                                                                                                                                       | `boolean`                     | `true`      |
| `value`        | `value`         | the value of the segment.                                                                                                                                                                                                                                              | `null \| string \| undefined` | `undefined` |


## Events

| Event       | Description                                                                                                | Type                                    |
| ----------- | ---------------------------------------------------------------------------------------------------------- | --------------------------------------- |
| `ionChange` | Emitted when the value property has changed and any dragging pointer has been released from `ion-segment`. | `CustomEvent<SegmentChangeEventDetail>` |


## CSS Custom Properties

| Name           | Description                      |
| -------------- | -------------------------------- |
| `--background` | Background of the segment button |


## Dependencies

### Used by

 - [ion-datetime](../datetime)

### Graph
```mermaid
graph TD;
  ion-datetime --> ion-segment
  style ion-segment fill:#f9f,stroke:#333,stroke-width:4px
```

----------------------------------------------

*Built with [StencilJS](https://stenciljs.com/)*
