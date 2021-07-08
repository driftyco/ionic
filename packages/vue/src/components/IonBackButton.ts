import { h, inject, defineComponent } from 'vue';
import { defineCustomElement } from '../utils';
import { IonBackButton as IonBackButtonCmp } from '@ionic/core/components/ion-back-button.js';
import { IonIcon as IonIconCmp } from 'ionicons/components/ion-icon.js';

export const IonBackButton = /*@__PURE__*/ defineComponent((_, { attrs, slots }) => {
  defineCustomElement('ion-back-button', IonBackButtonCmp);
  defineCustomElement('ion-icon', IonIconCmp);

  const ionRouter: any = inject('navManager');

  const onClick = () => {
    const defaultHref = attrs['default-href'] || attrs['defaultHref'];
    const routerAnimation = attrs['router-animation'] || attrs['routerAnimation'];

    ionRouter.handleNavigateBack(defaultHref, routerAnimation);
  }

  return () => {
    return h(
      'ion-back-button',
      {
        onClick,
        ...attrs
      },
      slots.default && slots.default()
    )
  }
});
