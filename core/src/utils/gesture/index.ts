import { GESTURE_CONTROLLER } from './gesture-controller';
import { createPointerEvents } from './pointer-events';
import { createPanRecognizer } from './recognizers';

export const createGesture = (config: GestureConfig): Gesture => {
  let hasCapturedPan = false;
  let hasStartedPan = false;
  let hasFiredStart = true;
  let isMoveQueued = false;

  const finalConfig = {
    disableScroll: false,
    direction: 'x',
    gesturePriority: 0,
    passive: true,
    maxAngle: 40,
    threshold: 10,

    ...config
  };

  const canStart = finalConfig.canStart;
  const onWillStart = finalConfig.onWillStart;
  const onStart = finalConfig.onStart;
  const onEnd = finalConfig.onEnd;
  const notCaptured = finalConfig.notCaptured;
  const onMove = finalConfig.onMove;
  const threshold = finalConfig.threshold;
  const passive = finalConfig.passive;
  const blurOnStart = finalConfig.blurOnStart;

  const detail = {
    type: 'pan',
    startX: 0,
    startY: 0,
    startTime: 0,
    currentX: 0,
    currentY: 0,
    velocityX: 0,
    velocityY: 0,
    deltaX: 0,
    deltaY: 0,
    currentTime: 0,
    event: undefined as any,
    data: undefined
  };

  const pan = createPanRecognizer(finalConfig.direction, finalConfig.threshold, finalConfig.maxAngle);
  const gesture = GESTURE_CONTROLLER.createGesture({
    name: config.gestureName,
    priority: config.gesturePriority,
    disableScroll: config.disableScroll
  });

  const pointerDown = (ev: UIEvent): boolean => {
    const timeStamp = now(ev);
    if (hasStartedPan || !hasFiredStart) {
      return false;
    }

    updateDetail(ev, detail);
    detail.startX = detail.currentX;
    detail.startY = detail.currentY;
    detail.startTime = detail.currentTime = timeStamp;
    detail.velocityX = detail.velocityY = detail.deltaX = detail.deltaY = 0;
    detail.event = ev;

    // Check if gesture can start
    if (canStart && canStart(detail) === false) {
      return false;
    }
    // Release fallback
    gesture.release();

    // Start gesture
    if (!gesture.start()) {
      return false;
    }

    hasStartedPan = true;
    if (threshold === 0) {
      return tryToCapturePan();
    }
    pan.start(detail.startX, detail.startY);
    return true;
  };

  const pointerMove = (ev: UIEvent) => {
    // fast path, if gesture is currently captured
    // do minimum job to get user-land even dispatched
    if (hasCapturedPan) {
      if (!isMoveQueued && hasFiredStart) {
        isMoveQueued = true;
        calcGestureData(detail, ev);
        requestAnimationFrame(fireOnMove);
      }
      return;
    }

    // gesture is currently being detected
    calcGestureData(detail, ev);
    if (pan.detect(detail.currentX, detail.currentY)) {
      if (!pan.isGesture() || !tryToCapturePan()) {
        abortGesture();
      }
    }
  };

  const fireOnMove = () => {
    // Since fireOnMove is called inside a RAF, onEnd() might be called,
    // we must double check hasCapturedPan
    if (!hasCapturedPan) {
      return;
    }
    isMoveQueued = false;
    if (onMove) {
      onMove(detail);
    }
  };

  const tryToCapturePan = (): boolean => {
    if (gesture && !gesture.capture()) {
      return false;
    }
    hasCapturedPan = true;
    hasFiredStart = false;

    // reset start position since the real user-land event starts here
    // If the pan detector threshold is big, not resetting the start position
    // will cause a jump in the animation equal to the detector threshold.
    // the array of positions used to calculate the gesture velocity does not
    // need to be cleaned, more points in the positions array always results in a
    // more accurate value of the velocity.
    detail.startX = detail.currentX;
    detail.startY = detail.currentY;
    detail.startTime = detail.currentTime;

    if (onWillStart) {
      onWillStart(detail).then(fireOnStart);
    } else {
      fireOnStart();
    }
    return true;
  };

  const blurActiveElement = () => {
    /* tslint:disable-next-line */
    if (typeof document !== 'undefined') {
      const activeElement = document.activeElement as HTMLElement | null;
      if (activeElement !== null && activeElement.blur) {
        activeElement.blur();
      }
    }
  };

  const fireOnStart = () => {
    if (blurOnStart) {
      blurActiveElement();
    }
    if (onStart) {
      onStart(detail);
    }
    hasFiredStart = true;
  };

  const reset = () => {
    hasCapturedPan = false;
    hasStartedPan = false;
    isMoveQueued = false;
    hasFiredStart = true;

    gesture.release();
  };

  // END *************************

  const pointerUp = (ev: UIEvent | undefined) => {
    const tmpHasCaptured = hasCapturedPan;
    const tmpHasFiredStart = hasFiredStart;
    reset();

    if (!tmpHasFiredStart) {
      return;
    }
    calcGestureData(detail, ev);

    // Try to capture press
    if (tmpHasCaptured) {
      if (onEnd) {
        onEnd(detail);
      }
      return;
    }

    // Not captured any event
    if (notCaptured) {
      notCaptured(detail);
    }
  };

  const pointerEvents = createPointerEvents(
    finalConfig.el,
    pointerDown,
    pointerMove,
    pointerUp,
    {
      capture: false,
      passive
    }
  );

  const abortGesture = () => {
    reset();
    pointerEvents.stop();
    if (notCaptured) {
      notCaptured(detail);
    }
  };

  return {
    enable(enable = true) {
      if (!enable) {
        if (hasCapturedPan) {
          pointerUp(undefined);
        }

        reset();
      }
      pointerEvents.enable(enable);
    },
    destroy() {
      gesture.destroy();
      pointerEvents.destroy();
    },
    end() {
      pointerUp(undefined);
    }
  };
};

const calcGestureData = (detail: GestureDetail, ev: UIEvent | undefined) => {
  if (!ev) {
    return;
  }
  const prevX = detail.currentX;
  const prevY = detail.currentY;
  const prevT = detail.currentTime;

  updateDetail(ev, detail);

  const currentX = detail.currentX;
  const currentY = detail.currentY;
  const timestamp = detail.currentTime = now(ev);
  const timeDelta = timestamp - prevT;
  if (timeDelta > 0 && timeDelta < 100) {
    const velocityX = (currentX - prevX) / timeDelta;
    const velocityY = (currentY - prevY) / timeDelta;
    detail.velocityX = velocityX * 0.7 + detail.velocityX * 0.3;
    detail.velocityY = velocityY * 0.7 + detail.velocityY * 0.3;
  }
  detail.deltaX = currentX - detail.startX;
  detail.deltaY = currentY - detail.startY;
  detail.event = ev;
};

const updateDetail = (ev: any, detail: GestureDetail) => {
  // get X coordinates for either a mouse click
  // or a touch depending on the given event
  let x = 0;
  let y = 0;
  if (ev) {
    const changedTouches = ev.changedTouches;
    if (changedTouches && changedTouches.length > 0) {
      const touch = changedTouches[0];
      x = touch.clientX;
      y = touch.clientY;
    } else if (ev.pageX !== undefined) {
      x = ev.pageX;
      y = ev.pageY;
    }
  }
  detail.currentX = x;
  detail.currentY = y;
};

const now = (ev: UIEvent) => {
  return ev.timeStamp || Date.now();
};

export interface GestureDetail {
  type: string;
  startX: number;
  startY: number;
  startTime: number;
  currentX: number;
  currentY: number;
  velocityX: number;
  velocityY: number;
  deltaX: number;
  deltaY: number;
  currentTime: number;
  event: UIEvent;
  data?: any;
}

export type GestureCallback = (detail: GestureDetail) => boolean | void;

export interface Gesture {
  enable(enable?: boolean): void;
  destroy(): void;
  end(): void;
}

export interface GestureConfig {
  el: Node;
  disableScroll?: boolean;

  direction?: 'x' | 'y';
  gestureName: string;
  gesturePriority?: number;
  passive?: boolean;
  maxAngle?: number;
  threshold?: number;
  blurOnStart?: boolean;

  canStart?: GestureCallback;
  onWillStart?: (_: GestureDetail) => Promise<void>;
  onStart?: GestureCallback;
  onMove?: GestureCallback;
  onEnd?: GestureCallback;
  notCaptured?: GestureCallback;
}

export { GESTURE_CONTROLLER };
