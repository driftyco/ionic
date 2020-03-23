# ion-toggle

Toggles change the state of a single option. Toggles can be switched on or off by pressing or swiping them. They can also be checked programmatically by setting the `checked` property.



<!-- Auto Generated Below -->


## Usage

### Angular

```html
<!-- Default Toggle -->
<ion-toggle></ion-toggle>

<!-- Disabled Toggle -->
<ion-toggle disabled></ion-toggle>

<!-- Checked Toggle -->
<ion-toggle checked></ion-toggle>

<!-- IO Labeled Toggle -->
<ion-toggle ioLabels ></ion-toggle>

<!-- Toggle Colors -->
<ion-toggle color="primary"></ion-toggle>
<ion-toggle color="secondary"></ion-toggle>
<ion-toggle color="danger"></ion-toggle>
<ion-toggle color="light"></ion-toggle>
<ion-toggle color="dark"></ion-toggle>

<!-- Toggles in a List -->
<ion-list>
  <ion-item>
    <ion-label>Pepperoni</ion-label>
    <ion-toggle [(ngModel)]="pepperoni"></ion-toggle>
  </ion-item>

  <ion-item>
    <ion-label>Sausage</ion-label>
    <ion-toggle [(ngModel)]="sausage" disabled="true"></ion-toggle>
  </ion-item>

  <ion-item>
    <ion-label>Mushrooms</ion-label>
    <ion-toggle [(ngModel)]="mushrooms"></ion-toggle>
  </ion-item>

  <ion-item>
    <ion-label>Tuna</ion-label>
    <ion-toggle [(ngModel)]="tuna" ioLabels ></ion-toggle>
  </ion-item>
</ion-list>
```


### Javascript

```html
<!-- Default Toggle -->
<ion-toggle></ion-toggle>

<!-- Disabled Toggle -->
<ion-toggle disabled></ion-toggle>

<!-- Checked Toggle -->
<ion-toggle checked></ion-toggle>

<!-- IO Labeled Toggle -->
<ion-toggle ioLabels ></ion-toggle>

<!-- Toggle Colors -->
<ion-toggle color="primary"></ion-toggle>
<ion-toggle color="secondary"></ion-toggle>
<ion-toggle color="danger"></ion-toggle>
<ion-toggle color="light"></ion-toggle>
<ion-toggle color="dark"></ion-toggle>

<!-- Toggles in a List -->
<ion-list>
  <ion-item>
    <ion-label>Pepperoni</ion-label>
    <ion-toggle slot="end" value="pepperoni" checked></ion-toggle>
  </ion-item>

  <ion-item>
    <ion-label>Sausage</ion-label>
    <ion-toggle slot="end" value="sausage" disabled></ion-toggle>
  </ion-item>

  <ion-item>
    <ion-label>Mushrooms</ion-label>
    <ion-toggle slot="end" value="mushrooms"></ion-toggle>
  </ion-item>

  <ion-item>
    <ion-label>Tuna</ion-label>
    <ion-toggle  slot="end" value="tuna" ioLabels ></ion-toggle>
  </ion-item>
</ion-list>
```


### React

```tsx
import React, { useState } from 'react';
import { IonContent, IonHeader, IonPage, IonTitle, IonToolbar, IonToggle, IonList, IonItem, IonLabel, IonItemDivider } from '@ionic/react';

export const ToggleExamples: React.FC = () => {
  const [checked, setChecked] = useState(false);
  return (
    <IonPage>
      <IonHeader>
        <IonToolbar>
          <IonTitle>ToggleExamples</IonTitle>
        </IonToolbar>
      </IonHeader>
      <IonContent>
        <IonList>

          <IonItemDivider>Default Toggle</IonItemDivider>
          <IonItem>
            <IonLabel>Checked: {JSON.stringify(checked)}</IonLabel>
            <IonToggle checked={checked} onIonChange={e => setChecked(e.detail.checked)} />
          </IonItem>

          <IonItemDivider>Disabled Toggle</IonItemDivider>
          <IonItem><IonToggle disabled /></IonItem>

          <IonItemDivider>Checked Toggle</IonItemDivider>
          <IonItem><IonToggle checked /></IonItem>

          <IonItemDivider>Checked With IO labels</IonItemDivider>
          <IonItem><IonToggle ioLabels={true}/></IonItem>

          <IonItemDivider>Toggle Colors</IonItemDivider>
          <IonItem><IonToggle color="primary" /></IonItem>
          <IonItem><IonToggle color="secondary" /></IonItem>
          <IonItem><IonToggle color="danger" /></IonItem>
          <IonItem><IonToggle color="light" /></IonItem>
          <IonItem><IonToggle color="dark" /></IonItem>

          <IonItemDivider>Toggles in a List</IonItemDivider>
          <IonItem>
            <IonLabel>Pepperoni</IonLabel>
            <IonToggle value="pepperoni" />
          </IonItem>

          <IonItem>
            <IonLabel>Sausage</IonLabel>
            <IonToggle value="sausage" disabled={true} />
          </IonItem>

          <IonItem>
            <IonLabel>Mushrooms</IonLabel>
            <IonToggle value="mushrooms" />
          </IonItem>

          <IonItem>
            <IonLabel>Tuna</IonLabel>
            <IonToggle value="tuna" ioLabels={true}/>
          </IonItem>
        </IonList>
      </IonContent>
    </IonPage>
  );
};
```


### Vue

```html
<template>
  <!-- Default Toggle -->
  <ion-toggle></ion-toggle>

  <!-- Disabled Toggle -->
  <ion-toggle disabled></ion-toggle>

  <!-- Checked Toggle -->
  <ion-toggle checked></ion-toggle>
  
  <!-- IO Labeled Toggle-->
  <ion-toggle ioLabels ></ion-toggle>

  <!-- Toggle Colors -->
  <ion-toggle color="primary"></ion-toggle>
  <ion-toggle color="secondary"></ion-toggle>
  <ion-toggle color="danger"></ion-toggle>
  <ion-toggle color="light"></ion-toggle>
  <ion-toggle color="dark"></ion-toggle>

  <!-- Toggles in a List -->
  <ion-list>
    <ion-item>
      <ion-label>Pepperoni</ion-label>
      <ion-toggle
        @ionChange="toppings.push($event.target.value)"
        value="pepperoni"
        :checked="toppings.indexOf('pepperoni') !== -1">
      </ion-toggle>
    </ion-item>

    <ion-item>
      <ion-label>Sausage</ion-label>
      <ion-toggle
        @ionChange="toppings.push($event.target.value)"
        value="sausage"
        :checked="toppings.indexOf('pepperoni') !== -1"
        disabled="true">
      </ion-toggle>
    </ion-item>

    <ion-item>
      <ion-label>Mushrooms</ion-label>
      <ion-toggle
        @ionChange="toppings.push($event.target.value)"
        value="mushrooms"
        :checked="toppings.indexOf('pepperoni') !== -1">
      </ion-toggle>
    </ion-item>

    <ion-item>
      <ion-label>Tuna</ion-label>
      <ion-toggle
        @ionChange="toppings.push($event.target.value)"
        value="mushrooms"
        :ioLabels="true">
      </ion-toggle>
    </ion-item>
  </ion-list>
</template>
```



## Properties

| Property   | Attribute   | Description                                                                                                                                                                                                                                                            | Type                          | Default        |
| ---------- | ----------- | ---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ----------------------------- | -------------- |
| `checked`  | `checked`   | If `true`, the toggle is selected.                                                                                                                                                                                                                                     | `boolean`                     | `false`        |
| `color`    | `color`     | The color to use from your application's color palette. Default options are: `"primary"`, `"secondary"`, `"tertiary"`, `"success"`, `"warning"`, `"danger"`, `"light"`, `"medium"`, and `"dark"`. For more information on colors, see [theming](/docs/theming/basics). | `string \| undefined`         | `undefined`    |
| `disabled` | `disabled`  | If `true`, the user cannot interact with the toggle.                                                                                                                                                                                                                   | `boolean`                     | `false`        |
| `ioLabels` | `io-labels` | If `true`, enabling On / Off labels for IOS toggles only.                                                                                                                                                                                                              | `boolean`                     | `true`         |
| `mode`     | `mode`      | The mode determines which platform styles to use.                                                                                                                                                                                                                      | `"ios" \| "md"`               | `undefined`    |
| `name`     | `name`      | The name of the control, which is submitted with the form data.                                                                                                                                                                                                        | `string`                      | `this.inputId` |
| `value`    | `value`     | The value of the toggle does not mean if it's checked or not, use the `checked` property for that.  The value of a toggle is analogous to the value of a `<input type="checkbox">`, it's only used when the toggle participates in a native `<form>`.                  | `null \| string \| undefined` | `'on'`         |


## Events

| Event       | Description                                  | Type                                   |
| ----------- | -------------------------------------------- | -------------------------------------- |
| `ionBlur`   | Emitted when the toggle loses focus.         | `CustomEvent<void>`                    |
| `ionChange` | Emitted when the value property has changed. | `CustomEvent<ToggleChangeEventDetail>` |
| `ionFocus`  | Emitted when the toggle has focus.           | `CustomEvent<void>`                    |


## CSS Custom Properties

| Name                          | Description                                  |
| ----------------------------- | -------------------------------------------- |
| `--background`                | Background of the toggle                     |
| `--background-checked`        | Background of the toggle when checked        |
| `--border-radius`             | Border radius of the toggle track            |
| `--handle-background`         | Background of the toggle handle              |
| `--handle-background-checked` | Background of the toggle handle when checked |
| `--handle-border-radius`      | Border radius of the toggle handle           |


----------------------------------------------

*Built with [StencilJS](https://stenciljs.com/)*
