import { h, defineComponent } from 'vue';

export const IonPage = /*@__PURE__*/ defineComponent({
  name: 'IonPage',
  props: {
    isInOutlet: { type: Boolean, default: false },
    registerIonPage: { type: Function, default: () => {} }
  },
  mounted() {
    this.$props.registerIonPage(this.$refs.ionPage);
  },
  setup(props, { attrs, slots }) {
    const hidePageClass = (props.isInOutlet) ? 'ion-page-invisible' : '';
    return () => {
      return h(
        'div',
        {
          ['class']: `ion-page ${hidePageClass}`,
          ...attrs,
          ref: 'ionPage'
        },
        slots.default && slots.default()
      )
    }
  }
});
