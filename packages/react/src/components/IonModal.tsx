import { JSX } from '@ionic/core';

import { createInlineOverlayComponent } from './createInlineOverlayComponent'

export const IonModal = /*@__PURE__*/ createInlineOverlayComponent<
  JSX.IonModal,
  HTMLIonModalElement
>('ion-modal');
