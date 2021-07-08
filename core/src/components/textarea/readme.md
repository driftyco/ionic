# ion-textarea

The textarea component is used for multi-line text input. A native textarea element is rendered inside of the component. The user experience and interactivity of the textarea component is improved by having control over the native textarea.

Unlike the native textarea element, the Ionic textarea does not support loading its value from the inner content. The textarea value should be set in the `value` attribute.

The textarea component accepts the [native textarea attributes](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/textarea) in addition to the Ionic properties.



<!-- Auto Generated Below -->


## Usage

### Angular

```html
<!-- Default textarea -->
<ion-textarea></ion-textarea>

<!-- Textarea in an item with a placeholder -->
<ion-item>
  <ion-textarea placeholder="Enter more information here..."></ion-textarea>
</ion-item>

<!-- Textarea in an item with a floating label -->
<ion-item>
  <ion-label position="floating">Description</ion-label>
  <ion-textarea></ion-textarea>
</ion-item>

<!-- Disabled and readonly textarea in an item with a stacked label -->
<ion-item>
  <ion-label position="stacked">Summary</ion-label>
  <ion-textarea
    disabled
    readonly
    value="Ionic enables developers to build performant, high-quality mobile apps.">
  </ion-textarea>
</ion-item>

<!-- Textarea that clears the value on edit -->
<ion-item>
  <ion-label>Comment</ion-label>
  <ion-textarea clearOnEdit="true"></ion-textarea>
</ion-item>

<!-- Textarea with custom number of rows and cols -->
<ion-item>
  <ion-label>Notes</ion-label>
  <ion-textarea rows="6" cols="20" placeholder="Enter any notes here..."></ion-textarea>
</ion-item>
```


### Javascript

```html
<!-- Default textarea -->
<ion-textarea></ion-textarea>

<!-- Textarea in an item with a placeholder -->
<ion-item>
  <ion-textarea placeholder="Enter more information here..."></ion-textarea>
</ion-item>

<!-- Textarea in an item with a floating label -->
<ion-item>
  <ion-label position="floating">Description</ion-label>
  <ion-textarea></ion-textarea>
</ion-item>

<!-- Disabled and readonly textarea in an item with a stacked label -->
<ion-item>
  <ion-label position="stacked">Summary</ion-label>
  <ion-textarea
    disabled
    readonly
    value="Ionic enables developers to build performant, high-quality mobile apps.">
  </ion-textarea>
</ion-item>

<!-- Textarea that clears the value on edit -->
<ion-item>
  <ion-label>Comment</ion-label>
  <ion-textarea clear-on-edit="true"></ion-textarea>
</ion-item>

<!-- Textarea with custom number of rows and cols -->
<ion-item>
  <ion-label>Notes</ion-label>
  <ion-textarea rows="6" cols="20" placeholder="Enter any notes here..."></ion-textarea>
</ion-item>
```


### React

```tsx
import React, { useState } from 'react';
import { IonContent, IonHeader, IonPage, IonTitle, IonToolbar, IonTextarea, IonItem, IonLabel, IonItemDivider, IonList } from '@ionic/react';

export const TextAreaExamples: React.FC = () => {
  const [text, setText] = useState<string>();

  return (
    <IonPage>
      <IonHeader>
        <IonToolbar>
          <IonTitle>TextArea Examples</IonTitle>
        </IonToolbar>
      </IonHeader>
      <IonContent>
        <IonList>
          <IonItemDivider>Default textarea</IonItemDivider>          
          <IonItem>
            <IonTextarea value={text} onIonChange={e => setText(e.detail.value!)}></IonTextarea>
          </IonItem>

          <IonItemDivider>Textarea in an item with a placeholder</IonItemDivider>
          <IonItem>
            <IonTextarea placeholder="Enter more information here..." value={text} onIonChange={e => setText(e.detail.value!)}></IonTextarea>
          </IonItem>

          <IonItemDivider>Textarea in an item with a floating label</IonItemDivider>
          <IonItem>
            <IonLabel position="floating">Description</IonLabel>
            <IonTextarea value={text} onIonChange={e => setText(e.detail.value!)}></IonTextarea>
          </IonItem>

          <IonItemDivider>Disabled and readonly textarea in an item with a stacked label</IonItemDivider>
          <IonItem>
            <IonLabel position="stacked">Summary</IonLabel>
            <IonTextarea
              disabled
              readonly
              value={text} onIonChange={e => setText(e.detail.value!)}>
            </IonTextarea>
          </IonItem>

          <IonItemDivider>Textarea that clears the value on edit</IonItemDivider>
          <IonItem>
            <IonLabel>Comment</IonLabel>
            <IonTextarea clearOnEdit={true} value={text} onIonChange={e => setText(e.detail.value!)}></IonTextarea>
          </IonItem>

          <IonItemDivider>Textarea with custom number of rows and cols</IonItemDivider>
          <IonItem>
            <IonLabel>Notes</IonLabel>
            <IonTextarea rows={6} cols={20} placeholder="Enter any notes here..." value={text} onIonChange={e => setText(e.detail.value!)}></IonTextarea>
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
  tag: 'textarea-example',
  styleUrl: 'textarea-example.css'
})
export class TextareaExample {
  render() {
    return [
      // Default textarea
      <ion-textarea></ion-textarea>,

      // Textarea in an item with a placeholder
      <ion-item>
        <ion-textarea placeholder="Enter more information here..."></ion-textarea>
      </ion-item>,

      // Textarea in an item with a floating label
      <ion-item>
        <ion-label position="floating">Description</ion-label>
        <ion-textarea></ion-textarea>
      </ion-item>,

      // Disabled and readonly textarea in an item with a stacked label
      <ion-item>
        <ion-label position="stacked">Summary</ion-label>
        <ion-textarea
          disabled
          readonly
          value="Ionic enables developers to build performant, high-quality mobile apps.">
        </ion-textarea>
      </ion-item>,

      // Textarea that clears the value on edit
      <ion-item>
        <ion-label>Comment</ion-label>
        <ion-textarea clearOnEdit={true}></ion-textarea>
      </ion-item>,

      // Textarea with custom number of rows and cols
      <ion-item>
        <ion-label>Notes</ion-label>
        <ion-textarea rows={6} cols={20} placeholder="Enter any notes here..."></ion-textarea>
      </ion-item>
    ];
  }
}
```


### Vue

```html
<template>
  <!-- Default textarea -->
  <ion-textarea></ion-textarea>

  <!-- Textarea in an item with a placeholder -->
  <ion-item>
    <ion-textarea placeholder="Enter more information here..."></ion-textarea>
  </ion-item>

  <!-- Textarea in an item with a floating label -->
  <ion-item>
    <ion-label position="floating">Description</ion-label>
    <ion-textarea></ion-textarea>
  </ion-item>

  <!-- Disabled and readonly textarea in an item with a stacked label -->
  <ion-item>
    <ion-label position="stacked">Summary</ion-label>
    <ion-textarea
      disabled
      readonly
      value="Ionic enables developers to build performant, high-quality mobile apps.">
    </ion-textarea>
  </ion-item>

  <!-- Textarea that clears the value on edit -->
  <ion-item>
    <ion-label>Comment</ion-label>
    <ion-textarea clear-on-edit="true"></ion-textarea>
  </ion-item>

  <!-- Textarea with custom number of rows and cols -->
  <ion-item>
    <ion-label>Notes</ion-label>
    <ion-textarea rows="6" cols="20" placeholder="Enter any notes here..."></ion-textarea>
  </ion-item>
</template>

<script>
import { IonItem, IonLabel, IonTextarea } from '@ionic/vue';
import { defineComponent } from 'vue';

export default defineComponent({
  components: { IonItem, IonLabel, IonTextarea }
});
</script>
```



## Properties

| Property         | Attribute        | Description                                                                                                                                                                                                                                                            | Type                                                                                               | Default        |
| ---------------- | ---------------- | ---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------- | -------------- |
| `autoGrow`       | `auto-grow`      | If `true`, the element height will increase based on the value.                                                                                                                                                                                                        | `boolean`                                                                                          | `false`        |
| `autocapitalize` | `autocapitalize` | Indicates whether and how the text value should be automatically capitalized as it is entered/edited by the user.                                                                                                                                                      | `string`                                                                                           | `'none'`       |
| `autofocus`      | `autofocus`      | This Boolean attribute lets you specify that a form control should have input focus when the page loads.                                                                                                                                                               | `boolean`                                                                                          | `false`        |
| `clearOnEdit`    | `clear-on-edit`  | If `true`, the value will be cleared after focus upon edit. Defaults to `true` when `type` is `"password"`, `false` for all other types.                                                                                                                               | `boolean`                                                                                          | `false`        |
| `color`          | `color`          | The color to use from your application's color palette. Default options are: `"primary"`, `"secondary"`, `"tertiary"`, `"success"`, `"warning"`, `"danger"`, `"light"`, `"medium"`, and `"dark"`. For more information on colors, see [theming](/docs/theming/basics). | `string \| undefined`                                                                              | `undefined`    |
| `cols`           | `cols`           | The visible width of the text control, in average character widths. If it is specified, it must be a positive integer.                                                                                                                                                 | `number \| undefined`                                                                              | `undefined`    |
| `debounce`       | `debounce`       | Set the amount of time, in milliseconds, to wait to trigger the `ionChange` event after each keystroke. This also impacts form bindings such as `ngModel` or `v-model`.                                                                                                | `number`                                                                                           | `0`            |
| `disabled`       | `disabled`       | If `true`, the user cannot interact with the textarea.                                                                                                                                                                                                                 | `boolean`                                                                                          | `false`        |
| `enterkeyhint`   | `enterkeyhint`   | A hint to the browser for which enter key to display. Possible values: `"enter"`, `"done"`, `"go"`, `"next"`, `"previous"`, `"search"`, and `"send"`.                                                                                                                  | `"done" \| "enter" \| "go" \| "next" \| "previous" \| "search" \| "send" \| undefined`             | `undefined`    |
| `inputmode`      | `inputmode`      | A hint to the browser for which keyboard to display. Possible values: `"none"`, `"text"`, `"tel"`, `"url"`, `"email"`, `"numeric"`, `"decimal"`, and `"search"`.                                                                                                       | `"decimal" \| "email" \| "none" \| "numeric" \| "search" \| "tel" \| "text" \| "url" \| undefined` | `undefined`    |
| `maxlength`      | `maxlength`      | If the value of the type attribute is `text`, `email`, `search`, `password`, `tel`, or `url`, this attribute specifies the maximum number of characters that the user can enter.                                                                                       | `number \| undefined`                                                                              | `undefined`    |
| `minlength`      | `minlength`      | If the value of the type attribute is `text`, `email`, `search`, `password`, `tel`, or `url`, this attribute specifies the minimum number of characters that the user can enter.                                                                                       | `number \| undefined`                                                                              | `undefined`    |
| `mode`           | `mode`           | The mode determines which platform styles to use.                                                                                                                                                                                                                      | `"ios" \| "md"`                                                                                    | `undefined`    |
| `name`           | `name`           | The name of the control, which is submitted with the form data.                                                                                                                                                                                                        | `string`                                                                                           | `this.inputId` |
| `placeholder`    | `placeholder`    | Instructional text that shows before the input has a value.                                                                                                                                                                                                            | `string \| undefined`                                                                              | `undefined`    |
| `readonly`       | `readonly`       | If `true`, the user cannot modify the value.                                                                                                                                                                                                                           | `boolean`                                                                                          | `false`        |
| `required`       | `required`       | If `true`, the user must fill in a value before submitting a form.                                                                                                                                                                                                     | `boolean`                                                                                          | `false`        |
| `rows`           | `rows`           | The number of visible text lines for the control.                                                                                                                                                                                                                      | `number \| undefined`                                                                              | `undefined`    |
| `spellcheck`     | `spellcheck`     | If `true`, the element will have its spelling and grammar checked.                                                                                                                                                                                                     | `boolean`                                                                                          | `false`        |
| `value`          | `value`          | The value of the textarea.                                                                                                                                                                                                                                             | `null \| string \| undefined`                                                                      | `''`           |
| `wrap`           | `wrap`           | Indicates how the control wraps text.                                                                                                                                                                                                                                  | `"hard" \| "off" \| "soft" \| undefined`                                                           | `undefined`    |


## Events

| Event       | Description                               | Type                                     |
| ----------- | ----------------------------------------- | ---------------------------------------- |
| `ionBlur`   | Emitted when the input loses focus.       | `CustomEvent<FocusEvent>`                |
| `ionChange` | Emitted when the input value has changed. | `CustomEvent<TextareaChangeEventDetail>` |
| `ionFocus`  | Emitted when the input has focus.         | `CustomEvent<FocusEvent>`                |
| `ionInput`  | Emitted when a keyboard input occurred.   | `CustomEvent<KeyboardEvent>`             |


## Methods

### `getInputElement() => Promise<HTMLTextAreaElement>`

Returns the native `<textarea>` element used under the hood.

#### Returns

Type: `Promise<HTMLTextAreaElement>`



### `setFocus() => Promise<void>`

Sets focus on the native `textarea` in `ion-textarea`. Use this method instead of the global
`textarea.focus()`.

#### Returns

Type: `Promise<void>`




## CSS Custom Properties

| Name                        | Description                                                                                                 |
| --------------------------- | ----------------------------------------------------------------------------------------------------------- |
| `--background`              | Background of the textarea                                                                                  |
| `--border-radius`           | Border radius of the textarea                                                                               |
| `--color`                   | Color of the text                                                                                           |
| `--padding-bottom`          | Bottom padding of the textarea                                                                              |
| `--padding-end`             | Right padding if direction is left-to-right, and left padding if direction is right-to-left of the textarea |
| `--padding-start`           | Left padding if direction is left-to-right, and right padding if direction is right-to-left of the textarea |
| `--padding-top`             | Top padding of the textarea                                                                                 |
| `--placeholder-color`       | Color of the placeholder text                                                                               |
| `--placeholder-font-style`  | Style of the placeholder text                                                                               |
| `--placeholder-font-weight` | Weight of the placeholder text                                                                              |
| `--placeholder-opacity`     | Opacity of the placeholder text                                                                             |


----------------------------------------------

*Built with [StencilJS](https://stenciljs.com/)*
