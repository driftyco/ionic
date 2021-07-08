import { defineComponent, h, ref, VNode } from 'vue';
import { defineCustomElement } from '../utils';

export interface OverlayProps {
  isOpen?: boolean;
}

export const defineOverlayContainer = <Props extends object>(name: string, customElement: any, componentProps: string[] = [], controller: any) => {
  const eventListeners = [
    { componentEv: `${name}-will-present`, frameworkEv: 'willPresent' },
    { componentEv: `${name}-did-present`, frameworkEv: 'didPresent' },
    { componentEv: `${name}-will-dismiss`, frameworkEv: 'willDismiss' },
    { componentEv: `${name}-did-dismiss`, frameworkEv: 'didDismiss' },
  ];

  const Container = defineComponent<Props & OverlayProps>((props, { slots, emit }) => {
    defineCustomElement(name, customElement);

    const overlay = ref();
    const onVnodeMounted = async () => {
      const isOpen = props.isOpen;
      isOpen && (await present(props))
    }

    const onVnodeUpdated = async (node: VNode, prevNode: VNode) => {
      const isOpen = node.props!.isOpen;
      const prevIsOpen = prevNode.props!.isOpen;

      /**
       * Do not do anything if this prop
       * did not change.
       */
      if (isOpen === prevIsOpen) return;

      if (isOpen) {
        await present(props);
      } else {
        await dismiss();
      }
    }

    const onVnodeBeforeUnmount = async () => {
      await dismiss();
    }

    const dismiss = async () => {
      if (!overlay.value) return;

      await overlay.value;

      overlay.value = overlay.value.dismiss();

      await overlay.value;

      overlay.value = undefined;
    }

    const present = async (props: Readonly<Props>) => {
      /**
       * Do not open another instance
       * if one is already opened.
       */
      if (overlay.value) {
        await overlay.value;
      }

      if (overlay.value?.present) {
        await overlay.value.present();
        return;
      }

      /**
       * These are getting passed as props.
       * Potentially a Vue bug with Web Components?
       */
      const restOfProps = { ...(props as any) };
      delete restOfProps.onWillPresent;
      delete restOfProps.onDidPresent;
      delete restOfProps.onWillDismiss;
      delete restOfProps.onDidDismiss;

      const component = slots.default && slots.default()[0];
      overlay.value = controller.create({
        ...restOfProps,
        component
      });

      overlay.value = await overlay.value;

      eventListeners.forEach(eventListener => {
        overlay.value.addEventListener(eventListener.componentEv, () => {
          emit(eventListener.frameworkEv);
        });
      })

      await overlay.value.present();
    }

    return () => {
      return h(
        'div',
        {
          style: { display: 'none' },
          onVnodeMounted,
          onVnodeUpdated,
          onVnodeBeforeUnmount,
          isOpen: props.isOpen
        }
      );
    }
  });

  Container.displayName = name;
  Container.props = [...componentProps, 'isOpen'];
  Container.emits = ['willPresent', 'didPresent', 'willDismiss', 'didDismiss'];

  return Container;
}
