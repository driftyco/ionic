import { defineComponent, h, shallowRef, VNode } from 'vue';
import { VueDelegate } from '../framework-delegate';
import { defineCustomElement } from '../utils';
import { IonNav as IonNavCmp } from '@ionic/core/components/ion-nav.js';

export const IonNav = /*@__PURE__*/ defineComponent(() => {
  defineCustomElement('ion-nav', IonNavCmp);
  const views = shallowRef([]);

  /**
   * Allows us to create the component
   * within the Vue application context.
   */
  const addView = (component: VNode) => views.value = [...views.value, component];
  const removeView = (component: VNode) => views.value = views.value.filter(cmp => cmp !== component);

  const delegate = VueDelegate(addView, removeView);
  return () => {
    return h(
      'ion-nav',
      { delegate },
      views.value
    )
  }
});
