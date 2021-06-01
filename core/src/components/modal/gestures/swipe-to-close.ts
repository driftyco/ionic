import { Animation } from '../../../interface';
import { getTimeGivenProgression } from '../../../utils/animation/cubic-bezier';
import { GestureDetail, createGesture } from '../../../utils/gesture';
import { clamp } from '../../../utils/helpers';

// Defaults for the card swipe animation
export const SwipeToCloseDefaults = {
  MIN_PRESENTING_SCALE: 0.93,
};

export const createSwipeToCloseGesture = (
  el: HTMLIonModalElement,
  animation: Animation,
  onDismiss: () => void
) => {
  const height = el.offsetHeight;
  let isOpen = false;
  let preventStart = false;

  const ionContent: any = el.getElementsByTagName('ion-content')[0];
  let scrollElement: any;

  if (ionContent !== undefined) {
    ionContent.getScrollElement().then((scrollElem: any) => {
      scrollElement = scrollElem;
      scrollElement.addEventListener('scroll', (scrollEvent: any) => {
        preventStart = true;
        if (scrollEvent.target.scrollTop <= 0) {
          preventStart = false;
        }
      });
    });
  }

  const canStart = (detail: GestureDetail) => {
    const target = detail.event.target as HTMLElement | null;

    if (target === null ||
       !(target as any).closest) {
      return true;
    }

    const content = target.closest('ion-content');
    if (content === null) {
      return true;
    } else {
      return !preventStart;
    }
    // Check if target is in the content and if it's scrolled to the very top.
    // If target is not in the content, start the gesture, since this could be the header or some other static components,
    // from which you should always be able to swipe down the modal, no matter how much is scrolled.
  };

  let overflowValue: any;

  const onStart = () => {
    if (scrollElement !== undefined) {
      overflowValue = 'auto';
      scrollElement.style.overflow = overflowValue;
    }

    animation.progressStart(true, (isOpen) ? 1 : 0);
  };

  const onMove = (detail: GestureDetail) => {
    if (scrollElement !== undefined && overflowValue !== 'hidden' && detail.deltaY >= 0) {
      overflowValue = 'hidden';
      scrollElement.style.overflow = overflowValue;
    }

    const step = clamp(0.0001, detail.deltaY / height, 0.9999);

    animation.progressStep(step);
  };

  const onEnd = (detail: GestureDetail) => {
    if (scrollElement !== undefined) {
      overflowValue = 'auto';
      scrollElement.style.overflow = overflowValue;
    }

    const velocity = detail.velocityY;

    const step = clamp(0.0001, detail.deltaY / height, 0.9999);

    const threshold = (detail.deltaY + velocity * 1000) / height;

    const shouldComplete = threshold >= 0.5;
    let newStepValue = (shouldComplete) ? -0.001 : 0.001;

    if (!shouldComplete) {
      animation.easing('cubic-bezier(1, 0, 0.68, 0.28)');
      newStepValue += getTimeGivenProgression([0, 0], [1, 0], [0.68, 0.28], [1, 1], step)[0];
    } else {
      animation.easing('cubic-bezier(0.32, 0.72, 0, 1)');
      newStepValue += getTimeGivenProgression([0, 0], [0.32, 0.72], [0, 1], [1, 1], step)[0];
    }

    const duration = (shouldComplete) ? computeDuration(step * height, velocity) : computeDuration((1 - step) * height, velocity);
    isOpen = shouldComplete;

    gesture.enable(false);

    animation
      .onFinish(() => {
        if (!shouldComplete) {
          gesture.enable(true);
        }
      })
      .progressEnd((shouldComplete) ? 1 : 0, newStepValue, duration);

    if (shouldComplete) {
      onDismiss();
    }
  };

  const gesture = createGesture({
    el,
    gestureName: 'modalSwipeToClose',
    gesturePriority: 40,
    direction: 'y',
    threshold: 10,
    canStart,
    onStart,
    onMove,
    onEnd
  });
  return gesture;
};

const computeDuration = (remaining: number, velocity: number) => {
  return clamp(400, remaining / Math.abs(velocity * 1.1), 500);
};
