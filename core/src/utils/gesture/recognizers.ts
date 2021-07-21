
export interface PanRecognizer {
  start(x: number, y: number): void;
  detect(x: number, y: number): boolean;
  isGesture(): boolean;
  getDirection(): number;
}

export const createPanRecognizer = (direction: string, thresh: number, maxAngle: number): PanRecognizer => {
  const radians = maxAngle * (Math.PI / 180);
  const isDirX = direction === 'x';
  const isDirAll = direction === 'all';
  const maxCosine = Math.cos(radians);
  const threshold = thresh * thresh;

  let startX = 0;
  let startY = 0;

  let dirty = false;
  let isPan = 0;

  return {
    start(x: number, y: number) {
      startX = x;
      startY = y;
      isPan = 0;
      dirty = true;
    },

    detect(x: number, y: number): boolean {
      if (!dirty) {
        return false;
      }

      const deltaX = (x - startX);
      const deltaY = (y - startY);
      const distance = deltaX * deltaX + deltaY * deltaY;

      if (distance < threshold) {
        return false;
      }
      const hypotenuse = Math.sqrt(distance);

      if (isDirAll) {
        isPan = distance > 0 ? 1 : 0;
        dirty = false;
        return true;
      }

      const cosine = (isDirX ? deltaX : deltaY) / hypotenuse;

      if (cosine > maxCosine) {
        isPan = 1;

      } else if (cosine < -maxCosine) {
        isPan = -1;

      } else {
        isPan = 0;
      }

      dirty = false;
      return true;
    },

    isGesture(): boolean {
      return isPan !== 0;
    },

    getDirection(): number {
      return isPan;
    }
  };
};
