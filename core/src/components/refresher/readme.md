# ion-refresher

The refresher provides pull-to-refresh functionality on a content component.
The pull-to-refresh pattern lets a user pull down on a list of data using touch
in order to retrieve more data.

Data should be modified during the refresher's output events. Once the async
operation has completed and the refreshing should end, call `complete()` on the
refresher.

## Native Refreshers

Both iOS and Android platforms provide refreshers that take advantage of properties exposed by their respective devices that give pull to refresh a fluid, native-like feel.

Certain properties such as `pullMin` and `snapbackDuration` are not compatible because much of the native refreshers are scroll-based. See [Refresher Properties](#properties) for more information.

### iOS Usage

Using the iOS native `ion-refresher` requires setting the `pullingIcon` property on `ion-refresher-content` to the value of one of the available spinners. See the [Spinner Documentation](../spinner#properties) for accepted values. The `pullingIcon` defaults to the `lines` spinner on iOS. The spinner tick marks will be progressively shown as the user pulls down on the page.

The iOS native `ion-refresher` relies on rubber band scrolling in order to work properly and is only compatible with iOS devices as a result. We provide a fallback refresher for apps running in iOS mode on devices that do not support rubber band scrolling.

### Android Usage

Using the MD native `ion-refresher` requires setting the `pullingIcon` property on `ion-refresher-content` to the value of one of the available spinners. See the [ion-spinner Documentation](../spinner#properties) for accepted values. `pullingIcon` defaults to the `circular` spinner on MD.


<!-- Auto Generated Below -->


## Usage

### Angular

```html
<!-- Default Refresher -->
<ion-content>
  <ion-refresher slot="fixed" (ionRefresh)="doRefresh($event)">
    <ion-refresher-content></ion-refresher-content>
  </ion-refresher>
</ion-content>

<!-- Custom Refresher Properties -->
<ion-content>
  <ion-refresher slot="fixed" pullFactor="0.5" pullMin="100" pullMax="200">
    <ion-refresher-content></ion-refresher-content>
  </ion-refresher>
</ion-content>

<!-- Custom Refresher Content -->
<ion-content>
  <ion-refresher slot="fixed" (ionRefresh)="doRefresh($event)">
    <ion-refresher-content
      pullingIcon="chevron-down-circle-outline"
      pullingText="Pull to refresh"
      refreshingSpinner="circles"
      refreshingText="Refreshing...">
    </ion-refresher-content>
  </ion-refresher>
</ion-content>
```

```typescript
import { Component } from '@angular/core';

@Component({
  selector: 'refresher-example',
  templateUrl: 'refresher-example.html',
  styleUrls: ['./refresher-example.css'],
})
export class RefresherExample {
  constructor() {}

  doRefresh(event) {
    console.log('Begin async operation');

    setTimeout(() => {
      console.log('Async operation has ended');
      event.target.complete();
    }, 2000);
  }
}
```


### Javascript

```html
<!-- Default Refresher -->
<ion-content>
  <ion-refresher slot="fixed">
    <ion-refresher-content></ion-refresher-content>
  </ion-refresher>
</ion-content>

<!-- Custom Refresher Properties -->
<ion-content>
  <ion-refresher slot="fixed" pull-factor="0.5" pull-min="100" pull-max="200">
    <ion-refresher-content></ion-refresher-content>
  </ion-refresher>
</ion-content>

<!-- Custom Refresher Content -->
<ion-content>
  <ion-refresher slot="fixed">
    <ion-refresher-content
      pulling-icon="chevron-down-circle-outline"
      pulling-text="Pull to refresh"
      refreshing-spinner="circles"
      refreshing-text="Refreshing...">
    </ion-refresher-content>
  </ion-refresher>
</ion-content>
```


### React

```tsx
import React from 'react';
import { IonContent, IonRefresher, IonRefresherContent } from '@ionic/react';
import { RefresherEventDetail } from '@ionic/core';
import { chevronDownCircleOutline } from 'ionicons/icons';

function doRefresh(event: CustomEvent<RefresherEventDetail>) {
  console.log('Begin async operation');

  setTimeout(() => {
    console.log('Async operation has ended');
    event.detail.complete();
  }, 2000);
}

export const RefresherExample: React.FC = () => (
  <IonContent>
    {/*-- Default Refresher --*/}
    <IonContent>
      <IonRefresher slot="fixed" onIonRefresh={doRefresh}>
        <IonRefresherContent></IonRefresherContent>
      </IonRefresher>
    </IonContent>

    {/*-- Custom Refresher Properties --*/}
    <IonContent>
      <IonRefresher slot="fixed" onIonRefresh={doRefresh} pullFactor={0.5} pullMin={100} pullMax={200}>
        <IonRefresherContent></IonRefresherContent>
      </IonRefresher>
    </IonContent>

    {/*-- Custom Refresher Content --*/}
    <IonContent>
      <IonRefresher slot="fixed" onIonRefresh={doRefresh}>
        <IonRefresherContent
          pullingIcon={chevronDownCircleOutline}
          pullingText="Pull to refresh"
          refreshingSpinner="circles"
          refreshingText="Refreshing...">
        </IonRefresherContent>
      </IonRefresher>
    </IonContent>
  </IonContent>
);
```


### Stencil

```tsx
import { Component, h } from '@stencil/core';

@Component({
  tag: 'refresher-example',
  styleUrl: 'refresher-example.css'
})
export class RefresherExample {
  doRefresh(ev: any) {
    console.log('Begin async operation');

    setTimeout(() => {
      console.log('Async operation has ended');
      ev.target.complete();
    }, 2000);
  }

  render() {
    return [
      // Default Refresher
      <ion-content>
        <ion-refresher slot="fixed" onIonRefresh={(ev) => this.doRefresh(ev)}>
          <ion-refresher-content></ion-refresher-content>
        </ion-refresher>
      </ion-content>,

      // Custom Refresher Properties
      <ion-content>
        <ion-refresher slot="fixed" pullFactor={0.5} pullMin={100} pullMax={200}>
          <ion-refresher-content></ion-refresher-content>
        </ion-refresher>
      </ion-content>,

      // Custom Refresher Content
      <ion-content>
        <ion-refresher slot="fixed" onIonRefresh={(ev) => this.doRefresh(ev)}>
          <ion-refresher-content
            pullingIcon="chevron-down-circle-outline"
            pullingText="Pull to refresh"
            refreshingSpinner="circles"
            refreshingText="Refreshing...">
          </ion-refresher-content>
        </ion-refresher>
      </ion-content>
    ];
  }
}
```


### Vue

```html
<template>
  <!-- Default Refresher -->
  <ion-content>
    <ion-refresher slot="fixed" @ionRefresh="doRefresh($event)">
      <ion-refresher-content></ion-refresher-content>
    </ion-refresher>
  </ion-content>

  <!-- Custom Refresher Properties -->
  <ion-content>
    <ion-refresher slot="fixed" pull-factor="0.5" pull-min="100" pull-max="200">
      <ion-refresher-content></ion-refresher-content>
    </ion-refresher>
  </ion-content>

  <!-- Custom Refresher Content -->
  <ion-content>
    <ion-refresher slot="fixed" @ionRefresh="doRefresh($event)">
      <ion-refresher-content
        :pulling-icon="chevronDownCircleOutline"
        pulling-text="Pull to refresh"
        refreshing-spinner="circles"
        refreshing-text="Refreshing...">
      </ion-refresher-content>
    </ion-refresher>
  </ion-content>
</template>

<script lang="ts">
import { IonContent, IonRefresher, IonRefresherContent } from '@ionic/vue';
import { chevronDownCircleOutline } from 'ionicons/icons'
import { defineComponent } from 'vue';

export default defineComponent({
  components: { IonContent, IonRefresher, IonRefresherContent },
  setup() {
    const doRefresh = (event: CustomEvent) => {
      console.log('Begin async operation');
      
      setTimeout(() => {
        console.log('Async operation has ended');
        event.target.complete();
      }, 2000);
    }
    return { chevronDownCircleOutline, doRefresh }
  }
});
</script>
```



## Properties

| Property           | Attribute           | Description                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                     | Type      | Default             |
| ------------------ | ------------------- | ----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | --------- | ------------------- |
| `closeDuration`    | `close-duration`    | Time it takes to close the refresher. Does not apply when the refresher content uses a spinner, enabling the native refresher.                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                  | `string`  | `'280ms'`           |
| `disabled`         | `disabled`          | If `true`, the refresher will be hidden.                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                        | `boolean` | `false`             |
| `pullFactor`       | `pull-factor`       | How much to multiply the pull speed by. To slow the pull animation down, pass a number less than `1`. To speed up the pull, pass a number greater than `1`. The default value is `1` which is equal to the speed of the cursor. If a negative value is passed in, the factor will be `1` instead.  For example: If the value passed is `1.2` and the content is dragged by `10` pixels, instead of `10` pixels the content will be pulled by `12` pixels (an increase of 20 percent). If the value passed is `0.8`, the dragged amount will be `8` pixels, less than the amount the cursor has moved.  Does not apply when the refresher content uses a spinner, enabling the native refresher. | `number`  | `1`                 |
| `pullMax`          | `pull-max`          | The maximum distance of the pull until the refresher will automatically go into the `refreshing` state. Defaults to the result of `pullMin + 60`. Does not apply when  the refresher content uses a spinner, enabling the native refresher.                                                                                                                                                                                                                                                                                                                                                                                                                                                     | `number`  | `this.pullMin + 60` |
| `pullMin`          | `pull-min`          | The minimum distance the user must pull down until the refresher will go into the `refreshing` state. Does not apply when the refresher content uses a spinner, enabling the native refresher.                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                  | `number`  | `60`                |
| `snapbackDuration` | `snapback-duration` | Time it takes the refresher to to snap back to the `refreshing` state. Does not apply when the refresher content uses a spinner, enabling the native refresher.                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                 | `string`  | `'280ms'`           |


## Events

| Event        | Description                                                                                                                                                                                                                                                                  | Type                                |
| ------------ | ---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ----------------------------------- |
| `ionPull`    | Emitted while the user is pulling down the content and exposing the refresher.                                                                                                                                                                                               | `CustomEvent<void>`                 |
| `ionRefresh` | Emitted when the user lets go of the content and has pulled down further than the `pullMin` or pulls the content down and exceeds the pullMax. Updates the refresher state to `refreshing`. The `complete()` method should be called when the async operation has completed. | `CustomEvent<RefresherEventDetail>` |
| `ionStart`   | Emitted when the user begins to start pulling down.                                                                                                                                                                                                                          | `CustomEvent<void>`                 |


## Methods

### `cancel() => Promise<void>`

Changes the refresher's state from `refreshing` to `cancelling`.

#### Returns

Type: `Promise<void>`



### `complete() => Promise<void>`

Call `complete()` when your async operation has completed.
For example, the `refreshing` state is while the app is performing
an asynchronous operation, such as receiving more data from an
AJAX request. Once the data has been received, you then call this
method to signify that the refreshing has completed and to close
the refresher. This method also changes the refresher's state from
`refreshing` to `completing`.

#### Returns

Type: `Promise<void>`



### `getProgress() => Promise<number>`

A number representing how far down the user has pulled.
The number `0` represents the user hasn't pulled down at all. The
number `1`, and anything greater than `1`, represents that the user
has pulled far enough down that when they let go then the refresh will
happen. If they let go and the number is less than `1`, then the
refresh will not happen, and the content will return to it's original
position.

#### Returns

Type: `Promise<number>`



### `start() => Promise<void>`

Call `start()` to manually start Refreshing

#### Returns

Type: `Promise<void>`




----------------------------------------------

*Built with [StencilJS](https://stenciljs.com/)*
