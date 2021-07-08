# ion-input

The input component is a wrapper to the HTML input element with custom styling and additional functionality. It accepts most of the same properties as the HTML input, but works great on desktop devices and integrates with the keyboard on mobile devices.

It is meant for text `type` inputs only, such as `"text"`, `"password"`, `"email"`, `"number"`, `"search"`, `"tel"`, and `"url"`. It supports all standard text input events including keyup, keydown, keypress, and more.


<!-- Auto Generated Below -->


## Usage

### Angular

```html
<!-- Default Input -->
<ion-input></ion-input>

<!-- Input with value -->
<ion-input value="custom"></ion-input>

<!-- Input with placeholder -->
<ion-input placeholder="Enter Input"></ion-input>

<!-- Input with clear button when there is a value -->
<ion-input clearInput value="clear me"></ion-input>

<!-- Number type input -->
<ion-input type="number" value="333"></ion-input>

<!-- Disabled input -->
<ion-input value="Disabled" disabled></ion-input>

<!-- Readonly input -->
<ion-input value="Readonly" readonly></ion-input>

<!-- Inputs with labels -->
<ion-item>
  <ion-label>Default Label</ion-label>
  <ion-input></ion-input>
</ion-item>

<ion-item>
  <ion-label position="floating">Floating Label</ion-label>
  <ion-input></ion-input>
</ion-item>

<ion-item>
  <ion-label position="fixed">Fixed Label</ion-label>
  <ion-input></ion-input>
</ion-item>

<ion-item>
  <ion-label position="stacked">Stacked Label</ion-label>
  <ion-input></ion-input>
</ion-item>
```


### Javascript

```html
<!-- Default Input -->
<ion-input></ion-input>

<!-- Input with value -->
<ion-input value="custom"></ion-input>

<!-- Input with placeholder -->
<ion-input placeholder="Enter Input"></ion-input>

<!-- Input with clear button when there is a value -->
<ion-input clear-input value="clear me"></ion-input>

<!-- Number type input -->
<ion-input type="number" value="333"></ion-input>

<!-- Disabled input -->
<ion-input value="Disabled" disabled></ion-input>

<!-- Readonly input -->
<ion-input value="Readonly" readonly></ion-input>

<!-- Inputs with labels -->
<ion-item>
  <ion-label>Default Label</ion-label>
  <ion-input></ion-input>
</ion-item>

<ion-item>
  <ion-label position="floating">Floating Label</ion-label>
  <ion-input></ion-input>
</ion-item>

<ion-item>
  <ion-label position="fixed">Fixed Label</ion-label>
  <ion-input></ion-input>
</ion-item>

<ion-item>
  <ion-label position="stacked">Stacked Label</ion-label>
  <ion-input></ion-input>
</ion-item>
```


### React

```tsx
import React, { useState } from 'react';
import { IonContent, IonHeader, IonPage, IonTitle, IonToolbar, IonInput, IonItem, IonLabel, IonList, IonItemDivider } from '@ionic/react';

export const InputExamples: React.FC = () => {

  const [text, setText] = useState<string>();
  const [number, setNumber] = useState<number>();

  return (
    <IonPage>
      <IonHeader>
        <IonToolbar>
          <IonTitle>IonInput Examples</IonTitle>
        </IonToolbar>
      </IonHeader>
      <IonContent>
        <IonList>
          <IonItemDivider>Default Input with Placeholder</IonItemDivider>
          <IonItem>
            <IonInput value={text} placeholder="Enter Input" onIonChange={e => setText(e.detail.value!)}></IonInput>
          </IonItem>

          <IonItemDivider>Input with clear button when there is a value</IonItemDivider>
          <IonItem>
            <IonInput value={text} placeholder="Enter Input" onIonChange={e => setText(e.detail.value!)} clearInput></IonInput>
          </IonItem>

          <IonItemDivider>Number type input</IonItemDivider>
          <IonItem>
            <IonInput type="number" value={number} placeholder="Enter Number" onIonChange={e => setNumber(parseInt(e.detail.value!, 10))}></IonInput>
          </IonItem>

          <IonItemDivider>Disabled input</IonItemDivider>
          <IonItem>
            <IonInput value={text} disabled></IonInput>
          </IonItem>

          <IonItemDivider>Readonly input</IonItemDivider>
          <IonItem>
            <IonInput value={text} readonly></IonInput>
          </IonItem>

          <IonItemDivider>Inputs with labels</IonItemDivider>

          <IonItem>
            <IonLabel>Default Label</IonLabel>
            <IonInput></IonInput>
          </IonItem>

          <IonItem>
            <IonLabel position="floating">Floating Label</IonLabel>
            <IonInput value={text}></IonInput>
          </IonItem>

          <IonItem>
            <IonLabel position="fixed">Fixed Label</IonLabel>
            <IonInput value={text}></IonInput>
          </IonItem>

          <IonItem>
            <IonLabel position="stacked">Stacked Label</IonLabel>
            <IonInput value={text}> </IonInput>
          </IonItem>
        </IonList>
      </IonContent>
    </IonPage>
  );
};
```


### Stencil

```tsx
import { Component, h } from '@stencil/core';

@Component({
  tag: 'input-example',
  styleUrl: 'input-example.css'
})
export class InputExample {
  render() {
    return [
      // Default Input
      <ion-input></ion-input>,

      // Input with value
      <ion-input value="custom"></ion-input>,

      // Input with placeholder
      <ion-input placeholder="Enter Input"></ion-input>,

      // Input with clear button when there is a value
      <ion-input clearInput value="clear me"></ion-input>,

      // Number type input
      <ion-input type="number" value="333"></ion-input>,

      // Disabled input
      <ion-input value="Disabled" disabled></ion-input>,

      // Readonly input
      <ion-input value="Readonly" readonly></ion-input>,

      // Inputs with labels
      <ion-item>
        <ion-label>Default Label</ion-label>
        <ion-input></ion-input>
      </ion-item>,

      <ion-item>
        <ion-label position="floating">Floating Label</ion-label>
        <ion-input></ion-input>
      </ion-item>,

      <ion-item>
        <ion-label position="fixed">Fixed Label</ion-label>
        <ion-input></ion-input>
      </ion-item>,

      <ion-item>
        <ion-label position="stacked">Stacked Label</ion-label>
        <ion-input></ion-input>
      </ion-item>
    ];
  }
}
```


### Vue

```html
<template>
  <!-- Default Input -->
  <ion-input></ion-input>

  <!-- Input with value -->
  <ion-input value="custom"></ion-input>

  <!-- Input with placeholder -->
  <ion-input placeholder="Enter Input"></ion-input>

  <!-- Input with clear button when there is a value -->
  <ion-input clear-input value="clear me"></ion-input>

  <!-- Number type input -->
  <ion-input type="number" value="333"></ion-input>

  <!-- Disabled input -->
  <ion-input value="Disabled" disabled></ion-input>

  <!-- Readonly input -->
  <ion-input value="Readonly" readonly></ion-input>

  <!-- Inputs with labels -->
  <ion-item>
    <ion-label>Default Label</ion-label>
    <ion-input></ion-input>
  </ion-item>

  <ion-item>
    <ion-label position="floating">Floating Label</ion-label>
    <ion-input></ion-input>
  </ion-item>

  <ion-item>
    <ion-label position="fixed">Fixed Label</ion-label>
    <ion-input></ion-input>
  </ion-item>

  <ion-item>
    <ion-label position="stacked">Stacked Label</ion-label>
    <ion-input></ion-input>
  </ion-item>
</template>

<script>
import { IonLabel, IonInput, IonItem } from '@ionic/vue';
import { defineComponent } from 'vue';

export default defineComponent({
  components: { IonLabel, IonInput, IonItem }
});
</script>
```



## Properties

| Property         | Attribute        | Description                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                      | Type                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                        | Default        |
| ---------------- | ---------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | --------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | -------------- |
| `accept`         | `accept`         | If the value of the type attribute is `"file"`, then this attribute will indicate the types of files that the server accepts, otherwise it will be ignored. The value must be a comma-separated list of unique content type specifiers.                                                                                                                                                                                                                                                                                                                                                          | `string \| undefined`                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                       | `undefined`    |
| `autocapitalize` | `autocapitalize` | Indicates whether and how the text value should be automatically capitalized as it is entered/edited by the user. Available options: `"off"`, `"none"`, `"on"`, `"sentences"`, `"words"`, `"characters"`.                                                                                                                                                                                                                                                                                                                                                                                        | `string`                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                    | `'off'`        |
| `autocomplete`   | `autocomplete`   | Indicates whether the value of the control can be automatically completed by the browser.                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                        | `"on" \| "off" \| "name" \| "honorific-prefix" \| "given-name" \| "additional-name" \| "family-name" \| "honorific-suffix" \| "nickname" \| "email" \| "username" \| "new-password" \| "current-password" \| "one-time-code" \| "organization-title" \| "organization" \| "street-address" \| "address-line1" \| "address-line2" \| "address-line3" \| "address-level4" \| "address-level3" \| "address-level2" \| "address-level1" \| "country" \| "country-name" \| "postal-code" \| "cc-name" \| "cc-given-name" \| "cc-additional-name" \| "cc-family-name" \| "cc-number" \| "cc-exp" \| "cc-exp-month" \| "cc-exp-year" \| "cc-csc" \| "cc-type" \| "transaction-currency" \| "transaction-amount" \| "language" \| "bday" \| "bday-day" \| "bday-month" \| "bday-year" \| "sex" \| "tel" \| "tel-country-code" \| "tel-national" \| "tel-area-code" \| "tel-local" \| "tel-extension" \| "impp" \| "url" \| "photo"` | `'off'`        |
| `autocorrect`    | `autocorrect`    | Whether auto correction should be enabled when the user is entering/editing the text value.                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                      | `"off" \| "on"`                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                             | `'off'`        |
| `autofocus`      | `autofocus`      | This Boolean attribute lets you specify that a form control should have input focus when the page loads.                                                                                                                                                                                                                                                                                                                                                                                                                                                                                         | `boolean`                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                   | `false`        |
| `clearInput`     | `clear-input`    | If `true`, a clear icon will appear in the input when there is a value. Clicking it clears the input.                                                                                                                                                                                                                                                                                                                                                                                                                                                                                            | `boolean`                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                   | `false`        |
| `clearOnEdit`    | `clear-on-edit`  | If `true`, the value will be cleared after focus upon edit. Defaults to `true` when `type` is `"password"`, `false` for all other types.                                                                                                                                                                                                                                                                                                                                                                                                                                                         | `boolean \| undefined`                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                      | `undefined`    |
| `color`          | `color`          | The color to use from your application's color palette. Default options are: `"primary"`, `"secondary"`, `"tertiary"`, `"success"`, `"warning"`, `"danger"`, `"light"`, `"medium"`, and `"dark"`. For more information on colors, see [theming](/docs/theming/basics).                                                                                                                                                                                                                                                                                                                           | `string \| undefined`                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                       | `undefined`    |
| `debounce`       | `debounce`       | Set the amount of time, in milliseconds, to wait to trigger the `ionChange` event after each keystroke. This also impacts form bindings such as `ngModel` or `v-model`.                                                                                                                                                                                                                                                                                                                                                                                                                          | `number`                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                    | `0`            |
| `disabled`       | `disabled`       | If `true`, the user cannot interact with the input.                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                              | `boolean`                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                   | `false`        |
| `enterkeyhint`   | `enterkeyhint`   | A hint to the browser for which enter key to display. Possible values: `"enter"`, `"done"`, `"go"`, `"next"`, `"previous"`, `"search"`, and `"send"`.                                                                                                                                                                                                                                                                                                                                                                                                                                            | `"done" \| "enter" \| "go" \| "next" \| "previous" \| "search" \| "send" \| undefined`                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                      | `undefined`    |
| `inputmode`      | `inputmode`      | A hint to the browser for which keyboard to display. Possible values: `"none"`, `"text"`, `"tel"`, `"url"`, `"email"`, `"numeric"`, `"decimal"`, and `"search"`.                                                                                                                                                                                                                                                                                                                                                                                                                                 | `"decimal" \| "email" \| "none" \| "numeric" \| "search" \| "tel" \| "text" \| "url" \| undefined`                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                          | `undefined`    |
| `max`            | `max`            | The maximum value, which must not be less than its minimum (min attribute) value.                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                | `string \| undefined`                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                       | `undefined`    |
| `maxlength`      | `maxlength`      | If the value of the type attribute is `text`, `email`, `search`, `password`, `tel`, or `url`, this attribute specifies the maximum number of characters that the user can enter.                                                                                                                                                                                                                                                                                                                                                                                                                 | `number \| undefined`                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                       | `undefined`    |
| `min`            | `min`            | The minimum value, which must not be greater than its maximum (max attribute) value.                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                             | `string \| undefined`                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                       | `undefined`    |
| `minlength`      | `minlength`      | If the value of the type attribute is `text`, `email`, `search`, `password`, `tel`, or `url`, this attribute specifies the minimum number of characters that the user can enter.                                                                                                                                                                                                                                                                                                                                                                                                                 | `number \| undefined`                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                       | `undefined`    |
| `mode`           | `mode`           | The mode determines which platform styles to use.                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                | `"ios" \| "md"`                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                             | `undefined`    |
| `multiple`       | `multiple`       | If `true`, the user can enter more than one value. This attribute applies when the type attribute is set to `"email"` or `"file"`, otherwise it is ignored.                                                                                                                                                                                                                                                                                                                                                                                                                                      | `boolean \| undefined`                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                      | `undefined`    |
| `name`           | `name`           | The name of the control, which is submitted with the form data.                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                  | `string`                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                    | `this.inputId` |
| `pattern`        | `pattern`        | A regular expression that the value is checked against. The pattern must match the entire value, not just some subset. Use the title attribute to describe the pattern to help the user. This attribute applies when the value of the type attribute is `"text"`, `"search"`, `"tel"`, `"url"`, `"email"`, `"date"`, or `"password"`, otherwise it is ignored. When the type attribute is `"date"`, `pattern` will only be used in browsers that do not support the `"date"` input type natively. See https://developer.mozilla.org/en-US/docs/Web/HTML/Element/input/date for more information. | `string \| undefined`                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                       | `undefined`    |
| `placeholder`    | `placeholder`    | Instructional text that shows before the input has a value.                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                      | `string \| undefined`                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                       | `undefined`    |
| `readonly`       | `readonly`       | If `true`, the user cannot modify the value.                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                     | `boolean`                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                   | `false`        |
| `required`       | `required`       | If `true`, the user must fill in a value before submitting a form.                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                               | `boolean`                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                   | `false`        |
| `size`           | `size`           | The initial size of the control. This value is in pixels unless the value of the type attribute is `"text"` or `"password"`, in which case it is an integer number of characters. This attribute applies only when the `type` attribute is set to `"text"`, `"search"`, `"tel"`, `"url"`, `"email"`, or `"password"`, otherwise it is ignored.                                                                                                                                                                                                                                                   | `number \| undefined`                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                       | `undefined`    |
| `spellcheck`     | `spellcheck`     | If `true`, the element will have its spelling and grammar checked.                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                               | `boolean`                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                   | `false`        |
| `step`           | `step`           | Works with the min and max attributes to limit the increments at which a value can be set. Possible values are: `"any"` or a positive floating point number.                                                                                                                                                                                                                                                                                                                                                                                                                                     | `string \| undefined`                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                       | `undefined`    |
| `type`           | `type`           | The type of control to display. The default type is text.                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                        | `"date" \| "datetime-local" \| "email" \| "month" \| "number" \| "password" \| "search" \| "tel" \| "text" \| "time" \| "url" \| "week"`                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                    | `'text'`       |
| `value`          | `value`          | The value of the input.                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                          | `null \| number \| string \| undefined`                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                     | `''`           |


## Events

| Event       | Description                             | Type                                  |
| ----------- | --------------------------------------- | ------------------------------------- |
| `ionBlur`   | Emitted when the input loses focus.     | `CustomEvent<FocusEvent>`             |
| `ionChange` | Emitted when the value has changed.     | `CustomEvent<InputChangeEventDetail>` |
| `ionFocus`  | Emitted when the input has focus.       | `CustomEvent<FocusEvent>`             |
| `ionInput`  | Emitted when a keyboard input occurred. | `CustomEvent<KeyboardEvent>`          |


## Methods

### `getInputElement() => Promise<HTMLInputElement>`

Returns the native `<input>` element used under the hood.

#### Returns

Type: `Promise<HTMLInputElement>`



### `setFocus() => Promise<void>`

Sets focus on the native `input` in `ion-input`. Use this method instead of the global
`input.focus()`.

#### Returns

Type: `Promise<void>`




## CSS Custom Properties

| Name                        | Description                                                                                              |
| --------------------------- | -------------------------------------------------------------------------------------------------------- |
| `--background`              | Background of the input                                                                                  |
| `--color`                   | Color of the input text                                                                                  |
| `--padding-bottom`          | Bottom padding of the input                                                                              |
| `--padding-end`             | Right padding if direction is left-to-right, and left padding if direction is right-to-left of the input |
| `--padding-start`           | Left padding if direction is left-to-right, and right padding if direction is right-to-left of the input |
| `--padding-top`             | Top padding of the input                                                                                 |
| `--placeholder-color`       | Color of the input placeholder text                                                                      |
| `--placeholder-font-style`  | Font style of the input placeholder text                                                                 |
| `--placeholder-font-weight` | Font weight of the input placeholder text                                                                |
| `--placeholder-opacity`     | Opacity of the input placeholder text                                                                    |


----------------------------------------------

*Built with [StencilJS](https://stenciljs.com/)*
