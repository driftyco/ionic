# ion-searchbar

Searchbars represent a text field that can be used to search through a collection. They can be displayed inside of a toolbar or the main content.

A Searchbar should be used instead of an input to search lists. A clear button is displayed upon entering input in the searchbar's text field. Clicking on the clear button will erase the text field and the input will remain focused. A cancel button can be enabled which will clear the input and lose the focus upon click.

## Keyboard Display

### Android

By default, tapping the input will cause the keyboard to appear with a magnifying glass icon on the submit button. You can optionally set the `inputmode` property to `"search"`, which will change the icon from a magnifying glass to a carriage return.

### iOS

By default, tapping the input will cause the keyboard to appear with the text "return" on a gray submit button. You can optionally set the `inputmode` property to `"search"`, which will change the text from "return" to "go", and change the button color from gray to blue. Alternatively, you can wrap the `ion-searchbar` in a `form` element with an `action` property. This will cause the keyboard to appear with a blue submit button that says "search".


<!-- Auto Generated Below -->


## Usage

### Angular

```html
<!-- Default Searchbar -->
<ion-searchbar></ion-searchbar>

<!-- Searchbar with cancel button always shown -->
<ion-searchbar showCancelButton="always"></ion-searchbar>

<!-- Searchbar with cancel button never shown -->
<ion-searchbar showCancelButton="never"></ion-searchbar>

<!-- Searchbar with cancel button shown on focus -->
<ion-searchbar showCancelButton="focus"></ion-searchbar>

<!-- Searchbar with danger color -->
<ion-searchbar color="danger"></ion-searchbar>

<!-- Searchbar with value -->
<ion-searchbar value="Ionic"></ion-searchbar>

<!-- Searchbar with telephone type -->
<ion-searchbar type="tel"></ion-searchbar>

<!-- Searchbar with numeric inputmode -->
<ion-searchbar inputmode="numeric"></ion-searchbar>

<!-- Searchbar disabled -->
<ion-searchbar disabled="true"></ion-searchbar>

<!-- Searchbar with a cancel button and custom cancel button text -->
<ion-searchbar showCancelButton="focus" cancelButtonText="Custom Cancel"></ion-searchbar>

<!-- Searchbar with a custom debounce -->
<ion-searchbar debounce="500"></ion-searchbar>

<!-- Animated Searchbar -->
<ion-searchbar animated></ion-searchbar>

<!-- Searchbar with a placeholder -->
<ion-searchbar placeholder="Filter Schedules"></ion-searchbar>

<!-- Searchbar in a Toolbar -->
<ion-toolbar>
  <ion-searchbar></ion-searchbar>
</ion-toolbar>
```


### Javascript

```html
<!-- Default Searchbar -->
<ion-searchbar></ion-searchbar>

<!-- Searchbar with cancel button always shown -->
<ion-searchbar show-cancel-button="always"></ion-searchbar>

<!-- Searchbar with cancel button never shown -->
<ion-searchbar show-cancel-button="never"></ion-searchbar>

<!-- Searchbar with cancel button shown on focus -->
<ion-searchbar show-cancel-button="focus"></ion-searchbar>

<!-- Searchbar with danger color -->
<ion-searchbar color="danger"></ion-searchbar>

<!-- Searchbar with value -->
<ion-searchbar value="Ionic"></ion-searchbar>

<!-- Searchbar with telephone type -->
<ion-searchbar type="tel"></ion-searchbar>

<!-- Searchbar with numeric inputmode -->
<ion-searchbar inputmode="numeric"></ion-searchbar>

<!-- Searchbar disabled -->
<ion-searchbar disabled="true"></ion-searchbar>

<!-- Searchbar with a cancel button and custom cancel button text -->
<ion-searchbar show-cancel-button="focus" cancel-button-text="Custom Cancel"></ion-searchbar>

<!-- Searchbar with a custom debounce -->
<ion-searchbar debounce="500"></ion-searchbar>

<!-- Animated Searchbar -->
<ion-searchbar animated></ion-searchbar>

<!-- Searchbar with a placeholder -->
<ion-searchbar placeholder="Filter Schedules"></ion-searchbar>

<!-- Searchbar in a Toolbar -->
<ion-toolbar>
  <ion-searchbar></ion-searchbar>
</ion-toolbar>
```


### React

```tsx
import React, { useState } from 'react';
import { IonContent, IonHeader, IonPage, IonTitle, IonToolbar, IonSearchbar, IonFooter } from '@ionic/react';

export const SearchBarExamples: React.FC = () => {
  const [searchText, setSearchText] = useState('');
  return (
    <IonPage>
      <IonHeader>
        <IonToolbar>
          <IonTitle>IonSearchBar Examples</IonTitle>
        </IonToolbar>
      </IonHeader>
      <IonContent>
        <p>Default Searchbar</p>
        <IonSearchbar value={searchText} onIonChange={e => setSearchText(e.detail.value!)}></IonSearchbar>

        <p>Searchbar with cancel button always shown</p>
        <IonSearchbar value={searchText} onIonChange={e => setSearchText(e.detail.value!)} showCancelButton="always"></IonSearchbar>

        <p>Searchbar with cancel button never shown</p>
        <IonSearchbar value={searchText} onIonChange={e => setSearchText(e.detail.value!)} showCancelButton="never"></IonSearchbar>

        <p>Searchbar with cancel button shown on focus</p>
        <IonSearchbar value={searchText} onIonChange={e => setSearchText(e.detail.value!)} showCancelButton="focus"></IonSearchbar>

        <p>Searchbar with danger color</p>
        <IonSearchbar value={searchText} onIonChange={e => setSearchText(e.detail.value!)} color="danger"></IonSearchbar>

        <p>Searchbar with telephone type</p>
        <IonSearchbar value={searchText} onIonChange={e => setSearchText(e.detail.value!)} type="tel"></IonSearchbar>

        <p>Searchbar with numeric inputmode</p>
        <IonSearchbar value={searchText} onIonChange={e => setSearchText(e.detail.value!)} inputmode="numeric"></IonSearchbar>

        <p>Searchbar disabled </p>
        <IonSearchbar value={searchText} onIonChange={e => setSearchText(e.detail.value!)} disabled={true}></IonSearchbar>

        <p>Searchbar with a cancel button and custom cancel button text</p>
        <IonSearchbar value={searchText} onIonChange={e => setSearchText(e.detail.value!)} showCancelButton="focus" cancelButtonText="Custom Cancel"></IonSearchbar>

        <p>Searchbar with a custom debounce - Note: debounce only works on onIonChange event</p>
        <IonSearchbar value={searchText} onIonChange={e => setSearchText(e.detail.value!)} debounce={1000}></IonSearchbar>

        <p>Animated Searchbar</p>
        <IonSearchbar value={searchText} onIonChange={e => setSearchText(e.detail.value!)} animated></IonSearchbar>

        <p>Searchbar with a placeholder</p>
        <IonSearchbar value={searchText} onIonChange={e => setSearchText(e.detail.value!)} placeholder="Filter Schedules"></IonSearchbar>

        <p>Searchbar in a Toolbar</p>
        <IonToolbar>
          <IonSearchbar value={searchText} onIonChange={e => setSearchText(e.detail.value!)}></IonSearchbar>
        </IonToolbar>

      </IonContent>
      <IonFooter>
        <IonToolbar>
          Search Text: {searchText ?? '(none)'}
        </IonToolbar>
      </IonFooter>
    </IonPage>
  );
};
```


### Stencil

```tsx
import { Component, h } from '@stencil/core';

@Component({
  tag: 'searchbar-example',
  styleUrl: 'searchbar-example.css'
})
export class SearchbarExample {
  render() {
    return [
       // Default Searchbar
      <ion-searchbar></ion-searchbar>,

      // Searchbar with cancel button always shown
      <ion-searchbar showCancelButton="always"></ion-searchbar>,

      // Searchbar with cancel button never shown
      <ion-searchbar showCancelButton="never"></ion-searchbar>,

      // Searchbar with cancel button shown on focus
      <ion-searchbar showCancelButton="focus"></ion-searchbar>,

      // Searchbar with danger color
      <ion-searchbar color="danger"></ion-searchbar>,

      // Searchbar with value
      <ion-searchbar value="Ionic"></ion-searchbar>,

      // Searchbar with telephone type
      <ion-searchbar type="tel"></ion-searchbar>,

      // Searchbar with numeric inputmode
      <ion-searchbar inputmode="numeric"></ion-searchbar>,

      // Searchbar disabled
      <ion-searchbar disabled={true}></ion-searchbar>,

      // Searchbar with a cancel button and custom cancel button text
      <ion-searchbar showCancelButton="focus" cancelButtonText="Custom Cancel"></ion-searchbar>,

      // Searchbar with a custom debounce
      <ion-searchbar debounce={500}></ion-searchbar>,

      // Animated Searchbar
      <ion-searchbar animated={true}></ion-searchbar>,

      // Searchbar with a placeholder
      <ion-searchbar placeholder="Filter Schedules"></ion-searchbar>,

      // Searchbar in a Toolbar
      <ion-toolbar>
        <ion-searchbar></ion-searchbar>
      </ion-toolbar>
    ];
  }
}
```


### Vue

```html
<template>
  <!-- Default Searchbar -->
  <ion-searchbar></ion-searchbar>

  <!-- Searchbar with cancel button always shown -->
  <ion-searchbar show-cancel-button="always"></ion-searchbar>

  <!-- Searchbar with cancel button never shown -->
  <ion-searchbar show-cancel-button="never"></ion-searchbar>

  <!-- Searchbar with cancel button shown on focus -->
  <ion-searchbar show-cancel-button="focus"></ion-searchbar>

  <!-- Searchbar with danger color -->
  <ion-searchbar color="danger"></ion-searchbar>

  <!-- Searchbar with value -->
  <ion-searchbar value="Ionic"></ion-searchbar>

  <!-- Searchbar with telephone type -->
  <ion-searchbar type="tel"></ion-searchbar>

  <!-- Searchbar with numeric inputmode -->
  <ion-searchbar inputmode="numeric"></ion-searchbar>

  <!-- Searchbar disabled -->
  <ion-searchbar disabled="true"></ion-searchbar>

  <!-- Searchbar with a cancel button and custom cancel button text -->
  <ion-searchbar show-cancel-button="focus" cancel-button-text="Custom Cancel"></ion-searchbar>

  <!-- Searchbar with a custom debounce -->
  <ion-searchbar debounce="500"></ion-searchbar>

  <!-- Animated Searchbar -->
  <ion-searchbar animated></ion-searchbar>

  <!-- Searchbar with a placeholder -->
  <ion-searchbar placeholder="Filter Schedules"></ion-searchbar>

  <!-- Searchbar in a Toolbar -->
  <ion-toolbar>
    <ion-searchbar></ion-searchbar>
  </ion-toolbar>
</template>

<script>
import { IonSearchbar, IonToolbar } from '@ionic/vue';
import { defineComponent } from 'vue';

export default defineComponent({
  components: { IonSearchbar, IonToolbar }
});
</script>
```



## Properties

| Property           | Attribute            | Description                                                                                                                                                                                                                                                                                                          | Type                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                        | Default                                                      |
| ------------------ | -------------------- | -------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ------------------------------------------------------------ |
| `animated`         | `animated`           | If `true`, enable searchbar animation.                                                                                                                                                                                                                                                                               | `boolean`                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                   | `false`                                                      |
| `autocomplete`     | `autocomplete`       | Set the input's autocomplete property.                                                                                                                                                                                                                                                                               | `"on" \| "off" \| "name" \| "honorific-prefix" \| "given-name" \| "additional-name" \| "family-name" \| "honorific-suffix" \| "nickname" \| "email" \| "username" \| "new-password" \| "current-password" \| "one-time-code" \| "organization-title" \| "organization" \| "street-address" \| "address-line1" \| "address-line2" \| "address-line3" \| "address-level4" \| "address-level3" \| "address-level2" \| "address-level1" \| "country" \| "country-name" \| "postal-code" \| "cc-name" \| "cc-given-name" \| "cc-additional-name" \| "cc-family-name" \| "cc-number" \| "cc-exp" \| "cc-exp-month" \| "cc-exp-year" \| "cc-csc" \| "cc-type" \| "transaction-currency" \| "transaction-amount" \| "language" \| "bday" \| "bday-day" \| "bday-month" \| "bday-year" \| "sex" \| "tel" \| "tel-country-code" \| "tel-national" \| "tel-area-code" \| "tel-local" \| "tel-extension" \| "impp" \| "url" \| "photo"` | `'off'`                                                      |
| `autocorrect`      | `autocorrect`        | Set the input's autocorrect property.                                                                                                                                                                                                                                                                                | `"off" \| "on"`                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                             | `'off'`                                                      |
| `cancelButtonIcon` | `cancel-button-icon` | Set the cancel button icon. Only applies to `md` mode. Defaults to `"arrow-back-sharp"`.                                                                                                                                                                                                                             | `string`                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                    | `config.get('backButtonIcon', 'arrow-back-sharp') as string` |
| `cancelButtonText` | `cancel-button-text` | Set the the cancel button text. Only applies to `ios` mode.                                                                                                                                                                                                                                                          | `string`                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                    | `'Cancel'`                                                   |
| `clearIcon`        | `clear-icon`         | Set the clear icon. Defaults to `"close-circle"` for `ios` and `"close-sharp"` for `md`.                                                                                                                                                                                                                             | `string \| undefined`                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                       | `undefined`                                                  |
| `color`            | `color`              | The color to use from your application's color palette. Default options are: `"primary"`, `"secondary"`, `"tertiary"`, `"success"`, `"warning"`, `"danger"`, `"light"`, `"medium"`, and `"dark"`. For more information on colors, see [theming](/docs/theming/basics).                                               | `string \| undefined`                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                       | `undefined`                                                  |
| `debounce`         | `debounce`           | Set the amount of time, in milliseconds, to wait to trigger the `ionChange` event after each keystroke. This also impacts form bindings such as `ngModel` or `v-model`.                                                                                                                                              | `number`                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                    | `250`                                                        |
| `disabled`         | `disabled`           | If `true`, the user cannot interact with the input.                                                                                                                                                                                                                                                                  | `boolean`                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                   | `false`                                                      |
| `enterkeyhint`     | `enterkeyhint`       | A hint to the browser for which enter key to display. Possible values: `"enter"`, `"done"`, `"go"`, `"next"`, `"previous"`, `"search"`, and `"send"`.                                                                                                                                                                | `"done" \| "enter" \| "go" \| "next" \| "previous" \| "search" \| "send" \| undefined`                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                      | `undefined`                                                  |
| `inputmode`        | `inputmode`          | A hint to the browser for which keyboard to display. Possible values: `"none"`, `"text"`, `"tel"`, `"url"`, `"email"`, `"numeric"`, `"decimal"`, and `"search"`.                                                                                                                                                     | `"decimal" \| "email" \| "none" \| "numeric" \| "search" \| "tel" \| "text" \| "url" \| undefined`                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                          | `undefined`                                                  |
| `mode`             | `mode`               | The mode determines which platform styles to use.                                                                                                                                                                                                                                                                    | `"ios" \| "md"`                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                             | `undefined`                                                  |
| `placeholder`      | `placeholder`        | Set the input's placeholder. `placeholder` can accept either plaintext or HTML as a string. To display characters normally reserved for HTML, they must be escaped. For example `<Ionic>` would become `&lt;Ionic&gt;`  For more information: [Security Documentation](https://ionicframework.com/docs/faq/security) | `string`                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                    | `'Search'`                                                   |
| `searchIcon`       | `search-icon`        | The icon to use as the search icon. Defaults to `"search-outline"` in `ios` mode and `"search-sharp"` in `md` mode.                                                                                                                                                                                                  | `string \| undefined`                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                       | `undefined`                                                  |
| `showCancelButton` | `show-cancel-button` | Sets the behavior for the cancel button. Defaults to `"never"`. Setting to `"focus"` shows the cancel button on focus. Setting to `"never"` hides the cancel button. Setting to `"always"` shows the cancel button regardless of focus state.                                                                        | `"always" \| "focus" \| "never"`                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                            | `'never'`                                                    |
| `showClearButton`  | `show-clear-button`  | Sets the behavior for the clear button. Defaults to `"focus"`. Setting to `"focus"` shows the clear button on focus if the input is not empty. Setting to `"never"` hides the clear button. Setting to `"always"` shows the clear button regardless of focus state, but only if the input is not empty.              | `"always" \| "focus" \| "never"`                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                            | `'always'`                                                   |
| `spellcheck`       | `spellcheck`         | If `true`, enable spellcheck on the input.                                                                                                                                                                                                                                                                           | `boolean`                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                   | `false`                                                      |
| `type`             | `type`               | Set the type of the input.                                                                                                                                                                                                                                                                                           | `"email" \| "number" \| "password" \| "search" \| "tel" \| "text" \| "url"`                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                 | `'search'`                                                   |
| `value`            | `value`              | the value of the searchbar.                                                                                                                                                                                                                                                                                          | `null \| string \| undefined`                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                               | `''`                                                         |


## Events

| Event       | Description                                     | Type                                      |
| ----------- | ----------------------------------------------- | ----------------------------------------- |
| `ionBlur`   | Emitted when the input loses focus.             | `CustomEvent<void>`                       |
| `ionCancel` | Emitted when the cancel button is clicked.      | `CustomEvent<void>`                       |
| `ionChange` | Emitted when the value has changed.             | `CustomEvent<SearchbarChangeEventDetail>` |
| `ionClear`  | Emitted when the clear input button is clicked. | `CustomEvent<void>`                       |
| `ionFocus`  | Emitted when the input has focus.               | `CustomEvent<void>`                       |
| `ionInput`  | Emitted when a keyboard input occurred.         | `CustomEvent<KeyboardEvent>`              |


## Methods

### `getInputElement() => Promise<HTMLInputElement>`

Returns the native `<input>` element used under the hood.

#### Returns

Type: `Promise<HTMLInputElement>`



### `setFocus() => Promise<void>`

Sets focus on the specified `ion-searchbar`. Use this method instead of the global
`input.focus()`.

#### Returns

Type: `Promise<void>`




## CSS Custom Properties

| Name                        | Description                              |
| --------------------------- | ---------------------------------------- |
| `--background`              | Background of the searchbar input        |
| `--border-radius`           | Border radius of the searchbar input     |
| `--box-shadow`              | Box shadow of the searchbar input        |
| `--cancel-button-color`     | Color of the searchbar cancel button     |
| `--clear-button-color`      | Color of the searchbar clear button      |
| `--color`                   | Color of the searchbar text              |
| `--icon-color`              | Color of the searchbar icon              |
| `--placeholder-color`       | Color of the searchbar placeholder       |
| `--placeholder-font-style`  | Font style of the searchbar placeholder  |
| `--placeholder-font-weight` | Font weight of the searchbar placeholder |
| `--placeholder-opacity`     | Opacity of the searchbar placeholder     |


## Dependencies

### Depends on

- ion-icon

### Graph
```mermaid
graph TD;
  ion-searchbar --> ion-icon
  style ion-searchbar fill:#f9f,stroke:#333,stroke-width:4px
```

----------------------------------------------

*Built with [StencilJS](https://stenciljs.com/)*
