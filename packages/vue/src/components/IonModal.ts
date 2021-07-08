import { defineComponent, h, ref, onMounted } from 'vue';
import { defineCustomElement } from '../utils';
import { IonModal as IonModalCmp } from '@ionic/core/components/ion-modal.js';

export const IonModal = /*@__PURE__*/ defineComponent((_, { attrs, slots }) => {
  defineCustomElement('ion-modal', IonModalCmp);

  const isOpen = ref(false);
  const elementRef = ref();

  onMounted(() => {
    elementRef.value.addEventListener('will-present', () => isOpen.value = true);
    elementRef.value.addEventListener('did-dismiss', () => isOpen.value = false);
  });

  return () => {
    return h(
      'ion-modal',
      { ...attrs, ref: elementRef },
      (isOpen.value) ? slots : undefined
    )
  }
});
