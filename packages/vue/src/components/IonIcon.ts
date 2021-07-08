import { h, defineComponent } from 'vue';
import { isPlatform } from '@ionic/core/components';
import { defineCustomElement } from '../utils';
import { IonIcon as IonIconCmp } from 'ionicons/components/ion-icon.js';

export const IonIcon = /*@__PURE__*/ defineComponent({
  name: 'IonIcon',
  props: {
    ariaLabel: String,
    color: String,
    flipRtl: Boolean,
    icon: String,
    ios: String,
    lazy: String,
    md: String,
    mode: String,
    name: String,
    size: String,
    src: String
  },
  setup(props, { slots }) {
    defineCustomElement('ion-icon', IonIconCmp);
    return () => {
      const { icon, ios, md } = props;

      let iconToUse: typeof icon;
      if (ios || md) {
        if (isPlatform('ios')) {
          iconToUse = ios ?? md ?? icon;
        } else {
          iconToUse = md ?? ios ?? icon;
        }
      } else {
        iconToUse = icon;
      }

      return h(
        'ion-icon',
        {
          ...props,
          icon: iconToUse
        },
        slots
      )
    }
  }
});
