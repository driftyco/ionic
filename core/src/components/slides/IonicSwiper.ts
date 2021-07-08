import { addEventListener, raf, removeEventListener } from '../../utils/helpers';

/**
 * This is a plugin for Swiper that allows it to work
 * with Ionic Framework and the routing integrations.
 * Without this plugin, Swiper would be incapable of correctly
 * determining the dimensions of the slides component as
 * each view is initially hidden before transitioning in.
 */
const setupSwiperInIonic = (swiper: any, watchForIonPageChanges = true) => {
  if (typeof (window as any) === 'undefined') { return; }

  const swiperEl = swiper.el;
  const ionPage = swiperEl.closest('.ion-page');

  if (!ionPage) {
    if (watchForIonPageChanges) {

      /**
       * If no ion page found, it is possible
       * that we are in the overlay setup step
       * where the inner component has been
       * created but not attached to the DOM yet.
       * If so, wait for the .ion-page class to
       * appear on the root div and re-run setup.
       */
      const rootNode = swiperEl.getRootNode();
      if (rootNode.tagName === 'DIV') {
        const mo = new MutationObserver((m: MutationRecord[]) => {
          const mutation = m[0];
          const wasEmpty = mutation.oldValue === null;
          const hasIonPage = rootNode.classList.contains('ion-page');

          /**
           * Now that we have an .ion-page class
           * we can safely attempt setup again.
           */
          if (wasEmpty && hasIonPage) {
            mo.disconnect();

            /**
             * Set false here so we do not
             * get infinite loops
             */
            setupSwiperInIonic(swiper, false);
          }
        });

        mo.observe(rootNode, {
          attributeFilter: ['class'],
          attributeOldValue: true
        });
      }
    }
    return;
  }

  /**
   * If using slides in a modal or
   * popover we need to wait for the
   * overlay to be shown as these components
   * are hidden when they are initially created.
   */
  const modalOrPopover = swiperEl.closest('ion-modal, ion-popover');
  if (modalOrPopover) {
    const eventName = modalOrPopover.tagName === 'ION-MODAL' ? 'ionModalWillPresent' : 'ionPopoverWillPresent';
    const overlayCallback = () => {
      /**
       * We need an raf here so the update
       * is fired one tick after the overlay is shown.
       */
      raf(() => {
        swiperEl.swiper.update();
        removeEventListener(modalOrPopover, eventName, overlayCallback);
      });
    }
    addEventListener(modalOrPopover, eventName, overlayCallback);
  } else {
    /**
     * If using slides in a page
     * we need to wait for the ion-page-invisible
     * class to be removed so Swiper can correctly
     * compute the dimensions of the slides.
     */
    const mo = new MutationObserver((m: MutationRecord[]) => {
      const mutation = m[0];
      const wasPageHidden = mutation.oldValue?.includes('ion-page-invisible');
      const isPageHidden = ionPage.classList.contains('ion-page-invisible');

      /**
       * Only update Swiper if the page was
       * hidden but is no longer hidden.
       */
      if (!isPageHidden && isPageHidden !== wasPageHidden) {
        swiperEl.swiper.update();
      }
    });

    mo.observe(ionPage, {
      attributeFilter: ['class'],
      attributeOldValue: true
    });
  }

  /**
   * We also need to listen for the appload event
   * which is emitted by Stencil in the
   * event that Swiper is being used on the
   * view that is rendered initially.
   */
  const onAppLoad = () => {
    swiperEl.swiper.update();
    removeEventListener(window, 'appload', onAppLoad);
  }

  addEventListener(window, 'appload', onAppLoad);
}

export const IonicSwiper = {
  name: 'ionic',
  on: {
    afterInit(swiper: any) {
      setupSwiperInIonic(swiper);
    }
  }
}
