import { JSX } from '@ionic/core';

import { createInlineOverlayComponent } from './createInlineOverlayComponent'

export const IonPopover = /*@__PURE__*/ createInlineOverlayComponent<
  JSX.IonPopover,
  HTMLIonPopoverElement
>('ion-popover');
