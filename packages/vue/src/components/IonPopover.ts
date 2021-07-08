import { defineComponent, h, ref, onMounted } from 'vue';
import { defineCustomElement } from '../utils';
import { IonPopover as IonPopoverCmp } from '@ionic/core/components/ion-popover.js';

export const IonPopover = /*@__PURE__*/ defineComponent((_, { attrs, slots }) => {
  defineCustomElement('ion-popover', IonPopoverCmp);

  const isOpen = ref(false);
  const elementRef = ref();

  onMounted(() => {
    elementRef.value.addEventListener('will-present', () => isOpen.value = true);
    elementRef.value.addEventListener('did-dismiss', () => isOpen.value = false);
  });

  return () => {
    return h(
      'ion-popover',
      { ...attrs, ref: elementRef },
      (isOpen.value) ? slots : undefined
    )
  }
});
