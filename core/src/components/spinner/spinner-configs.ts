import { SpinnerConfigs } from './spinner-interface';

const spinners = {

  'bubbles': {
    dur: 1000,
    circles: 9,
    fn: (dur: number, index: number, total: number) => {
      const animationDelay = `${ (dur * index / total) - dur }ms`;
      const angle = 2 * Math.PI * index / total;
      return {
        r: 5,
        style: {
          'top': `${ 9 * Math.sin(angle) }px`,
          'left': `${ 9 * Math.cos(angle) }px`,
          'animation-delay': animationDelay,
        }
      };
    }
  },

  'circles': {
    dur: 1000,
    circles: 8,
    fn: (dur: number, index: number, total: number) => {
      const step = index / total;
      const animationDelay = `${(dur * step) - dur}ms`;
      const angle = 2 * Math.PI * step;
      return {
        r: 5,
        style: {
          'top': `${ 9 * Math.sin(angle)}px`,
          'left': `${ 9 * Math.cos(angle) }px`,
          'animation-delay': animationDelay,
        }
      };
    }
  },

  'circular': {
    dur: 1400,
    elmDuration: true,
    circles: 1,
    fn: () => {
      return {
        r: 20,
        cx: 48,
        cy: 48,
        fill: 'none',
        viewBox: '24 24 48 48',
        transform: 'translate(0,0)',
        style: {}
      };
    }
  },

  'crescent': {
    dur: 750,
    circles: 1,
    fn: () => {
      return {
        r: 26,
        style: {}
      };
    }
  },

  'dots': {
    dur: 750,
    circles: 3,
    fn: (_: number, index: number) => {
      const animationDelay = -(110 * index) + 'ms';
      return {
        r: 6,
        style: {
          'left': `${ 9 - (9 * index)}px`,
          'animation-delay': animationDelay,
        }
      };
    }
  },

  'lines': {
    dur: 1000,
    lines: 8,
    fn: (dur: number, index: number, total: number) => {
      const transform = `rotate(${ (360 / total) * index + (index < (total / 2) ? 180 : -180) }deg)`;
      const animationDelay = `${ (dur * index / total) - dur }ms`;

      return {
        y1: 14,
        y2: 26,
        style: {
          'transform': transform,
          'animation-delay': animationDelay,
        }
      };
    }
  },

  'lines-small': {
    dur: 1000,
    lines: 8,
    fn: (dur: number, index: number, total: number) => {
      const transform = `rotate(${(360 / total) * index + (index < (total / 2) ? 180 : -180)}deg)`;
      const animationDelay = `${ (dur * index / total) - dur }ms`;
      return {
        y1: 12,
        y2: 20,
        style: {
          'transform': transform,
          'animation-delay': animationDelay,
        }
      };
    }
  },

  'lines-sharp': {
    dur: 1000,
    lines: 12,
    fn: (dur: number, index: number, total: number) => {
      const transform = `rotate(${ 30 * index + (index < 6 ? 180 : -180) }deg)`;
      const animationDelay = `${ (dur * index / total) - dur }ms`;

      return {
        y1: 17,
        y2: 29,
        style: {
          'transform': transform,
          'animation-delay': animationDelay,
        }
      };
    }
  },

  'lines-sharp-small': {
    dur: 1000,
    lines: 12,
    fn: (dur: number, index: number, total: number) => {
      const transform = `rotate(${30 * index + (index < 6 ? 180 : -180)}deg)`;
      const animationDelay = `${ (dur * index / total) - dur }ms`;
      return {
        y1: 12,
        y2: 20,
        style: {
          'transform': transform,
          'animation-delay': animationDelay,
        }
      };
    }
  }

};

export const SPINNERS: SpinnerConfigs = spinners;
export type SpinnerTypes = keyof typeof spinners;
