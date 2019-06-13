import { Component, ComponentInterface, Element, Event, EventEmitter, Listen, Prop, QueueApi, State, Watch } from '@stencil/core';

import { Color, Gesture, GestureDetail, KnobName, Mode, RangeChangeEventDetail, RangeValue, StyleEventDetail } from '../../interface';
import { clamp, debounceEvent } from '../../utils/helpers';
import { createColorClasses, hostContext } from '../../utils/theme';

/**
 * @slot start - Content is placed to the left of the range slider in LTR, and to the right in RTL.
 * @slot end - Content is placed to the right of the range slider in LTR, and to the left in RTL.
 */
@Component({
  tag: 'ion-range',
  styleUrls: {
    ios: 'range.ios.scss',
    md: 'range.md.scss'
  },
  shadow: true
})
export class Range implements ComponentInterface {

  private noUpdate = false;
  private rect!: ClientRect;
  private hasFocus = false;
  private rangeSlider?: HTMLElement;
  private gesture?: Gesture;

  @Element() el!: HTMLStencilElement;

  @Prop({ context: 'queue' }) queue!: QueueApi;
  @Prop({ context: 'document' }) doc!: Document;

  @State() private ratioA = 0;
  @State() private ratioB = 0;
  @State() private pressedKnob: KnobName;

  /**
   * The color to use from your application's color palette.
   * Default options are: `"primary"`, `"secondary"`, `"tertiary"`, `"success"`, `"warning"`, `"danger"`, `"light"`, `"medium"`, and `"dark"`.
   * For more information on colors, see [theming](/docs/theming/basics).
   */
  @Prop() color?: Color;

  /**
   * The mode determines which platform styles to use.
   */
  @Prop() mode!: Mode;

  /**
   * How long, in milliseconds, to wait to trigger the
   * `ionChange` event after each change in the range value.
   */
  @Prop() debounce = 0;

  @Watch('debounce')
  protected debounceChanged() {
    this.ionChange = debounceEvent(this.ionChange, this.debounce);
  }

  /**
   * The name of the control, which is submitted with the form data.
   */
  @Prop() name = '';

  /**
   * Show two knobs.
   */
  @Prop() dualKnobs = false;

  /**
   * Minimum integer value of the range.
   */
  @Prop() min = 0;
  @Watch('min')
  protected minChanged() {
    if (!this.noUpdate) {
      this.updateRatio();
    }
  }

  /**
   * Maximum integer value of the range.
   */
  @Prop() max = 100;
  @Watch('max')
  protected maxChanged() {
    if (!this.noUpdate) {
      this.updateRatio();
    }
  }

  /**
   * If `true`, a pin with integer value is shown when the knob
   * is pressed.
   */
  @Prop() pin = false;

  /**
   * If `true`, the knob snaps to tick marks evenly spaced based
   * on the step property value.
   */
  @Prop() snaps = false;

  /**
   * Specifies the value granularity.
   */
  @Prop() step = 1;

  /**
   * If `true`, tick marks are displayed based on the step value.
   * Only applies when `snaps` is `true`.
   */
  @Prop() ticks = true;

  /**
   * If `true`, the user cannot interact with the range.
   */
  @Prop() disabled = false;
  @Watch('disabled')
  protected disabledChanged() {
    if (this.gesture) {
      this.gesture.setDisabled(this.disabled);
    }
    this.emitStyle();
  }

  /**
   * the value of the range.
   */
  @Prop({ mutable: true }) value: RangeValue = 0;
  @Watch('value')
  protected valueChanged(value: RangeValue) {
    if (!this.noUpdate) {
      this.updateRatio();
    }

    value = this.ensureValueInBounds(value);

    this.ionChange.emit({ value });
  }

  private clampBounds = (value: any): number => {
    return clamp(this.min, value, this.max);
  }

  private ensureValueInBounds = (value: any) => {
    if (this.dualKnobs) {
      return {
        lower: this.clampBounds(value.lower),
        upper: this.clampBounds(value.upper)
      };
    } else {
      return this.clampBounds(value);
    }
  }

  /**
   * Emitted before the range changes.
   */
  @Event() ionStart!: EventEmitter<RangeChangeEventDetail>;

  /**
   * Emitted after the range has changed.
   */
  @Event() ionEnd!: EventEmitter<RangeChangeEventDetail>;

  /**
   * Emitted when the value property has changed.
   */
  @Event() ionChange!: EventEmitter<RangeChangeEventDetail>;

  /**
   * Emitted when the styles change.
   * @internal
   */
  @Event() ionStyle!: EventEmitter<StyleEventDetail>;

  /**
   * Emitted when the range has focus.
   */
  @Event() ionFocus!: EventEmitter<void>;

  /**
   * Emitted when the range loses focus.
   */
  @Event() ionBlur!: EventEmitter<void>;

  @Listen('focusout')
  onBlur() {
    if (this.hasFocus) {
      this.hasFocus = false;
      this.ionBlur.emit();
      this.emitStyle();
    }
  }

  @Listen('focusin')
  onFocus() {
    if (!this.hasFocus) {
      this.hasFocus = true;
      this.ionFocus.emit();
      this.emitStyle();
    }
  }

  componentWillLoad() {
    this.updateRatio();
    this.debounceChanged();
    this.emitStyle();
  }

  async componentDidLoad() {
    this.gesture = (await import('../../utils/gesture')).createGesture({
      el: this.rangeSlider!,
      queue: this.queue,
      gestureName: 'range',
      gesturePriority: 100,
      threshold: 0,
      onStart: ev => this.onStart(ev),
      onMove: ev => this.onMove(ev),
      onEnd: ev => this.onEnd(ev),
    });
    this.gesture.setDisabled(this.disabled);
  }

  componentDidUnload() {
    if (this.gesture) {
      this.gesture.destroy();
      this.gesture = undefined;
    }
  }

  private handleKeyboard = (knob: KnobName, isIncrease: boolean) => {
    let step = this.step;
    step = step > 0 ? step : 1;
    step = step / (this.max - this.min);
    if (!isIncrease) {
      step *= -1;
    }
    if (knob === 'A') {
      this.ratioA = clamp(0, this.ratioA + step, 1);
    } else {
      this.ratioB = clamp(0, this.ratioB + step, 1);
    }
    this.ionStart.emit({ value: this.value });
    this.updateValue();
    this.ionEnd.emit({ value: this.value });
  }

  private getValue(): RangeValue {
    const value = this.value || 0;
    if (this.dualKnobs) {
      if (typeof value === 'object') {
        return value;
      }
      return {
        lower: 0,
        upper: value
      };
    } else {
      if (typeof value === 'object') {
        return value.upper;
      }
      return value;
    }
  }

  private emitStyle() {
    this.ionStyle.emit({
      'interactive': true,
      'interactive-disabled': this.disabled
    });
  }

  private onStart(detail: GestureDetail) {
    const rect = this.rect = this.rangeSlider!.getBoundingClientRect() as any;
    const currentX = detail.currentX;

    // figure out which knob they started closer to
    let ratio = clamp(0, (currentX - rect.left) / rect.width, 1);
    if (this.doc.dir === 'rtl') {
      ratio = 1 - ratio;
    }

    this.pressedKnob =
      !this.dualKnobs ||
      Math.abs(this.ratioA - ratio) < Math.abs(this.ratioB - ratio)
        ? 'A'
        : 'B';

    this.setFocus(this.pressedKnob);

    this.ionStart.emit({ value: this.value });

    // update the active knob's position
    this.update(currentX);
  }

  private onMove(detail: GestureDetail) {
    this.update(detail.currentX);
  }

  private onEnd(detail: GestureDetail) {
    this.update(detail.currentX);
    this.ionEnd.emit({ value: this.value });
    this.pressedKnob = undefined;
  }

  private update(currentX: number) {
    // figure out where the pointer is currently at
    // update the knob being interacted with
    const rect = this.rect;
    let ratio = clamp(0, (currentX - rect.left) / rect.width, 1);
    if (this.doc.dir === 'rtl') {
      ratio = 1 - ratio;
    }

    if (this.snaps) {
      // snaps the ratio to the current value
      ratio = valueToRatio(
        ratioToValue(ratio, this.min, this.max, this.step),
        this.min,
        this.max
      );
    }

    // update which knob is pressed
    if (this.pressedKnob === 'A') {
      this.ratioA = ratio;
    } else {
      this.ratioB = ratio;
    }

    // Update input value
    this.updateValue();
  }

  private get valA() {
    return ratioToValue(this.ratioA, this.min, this.max, this.step);
  }

  private get valB() {
    return ratioToValue(this.ratioB, this.min, this.max, this.step);
  }

  private get ratioLower() {
    if (this.dualKnobs) {
      return Math.min(this.ratioA, this.ratioB);
    }
    return 0;
  }

  private get ratioUpper() {
    if (this.dualKnobs) {
      return Math.max(this.ratioA, this.ratioB);
    }
    return this.ratioA;
  }

  private updateRatio() {
    const value = this.getValue() as any;
    const { min, max } = this;
    if (this.dualKnobs) {
      this.ratioA = valueToRatio(value.lower, min, max);
      this.ratioB = valueToRatio(value.upper, min, max);
    } else {
      this.ratioA = valueToRatio(value, min, max);
    }
  }

  private updateValue() {
    this.noUpdate = true;

    const { valA, valB } = this;
    this.value = !this.dualKnobs
      ? valA
      : {
          lower: Math.min(valA, valB),
          upper: Math.max(valA, valB)
        };

    this.noUpdate = false;
  }

  private setFocus(knob: KnobName) {
    if (this.el.shadowRoot) {
      const knobEl = this.el.shadowRoot.querySelector(knob === 'A' ? '.range-knob-a' : '.range-knob-b') as HTMLElement | undefined;
      if (knobEl) {
        knobEl.focus();
      }
    }
  }

  hostData() {
    return {
      class: {
        ...createColorClasses(this.color),
        [`${this.mode}`]: true,
        'in-item': hostContext('ion-item', this.el),
        'range-disabled': this.disabled,
        'range-pressed': this.pressedKnob !== undefined,
        'range-has-pin': this.pin
      }
    };
  }

  render() {
    const { min, max, step, ratioLower, ratioUpper } = this;

    const barStart = `${ratioLower * 100}%`;
    const barEnd = `${100 - ratioUpper * 100}%`;

    const doc = this.doc;
    const isRTL = doc.dir === 'rtl';
    const start = isRTL ? 'right' : 'left';
    const end = isRTL ? 'left' : 'right';

    const ticks = [];
    if (this.snaps && this.ticks) {
      for (let value = min; value <= max; value += step) {
        const ratio = valueToRatio(value, min, max);

        const tick: any = {
          ratio,
          active: ratio >= ratioLower && ratio <= ratioUpper,
        };

        tick[start] = `${ratio * 100}%`;

        ticks.push(tick);
      }
    }

    const tickStyle = (tick: any) => {
      const style: any = {};

      style[start] = tick[start];

      return style;
    };

    const barStyle = () => {
      const style: any = {};

      style[start] = barStart;
      style[end] = barEnd;

      return style;
    };

    return [
      <slot name="start"></slot>,
      <div class="range-slider" ref={el => this.rangeSlider = el}>
        {ticks.map(tick => (
          <div
            style={tickStyle(tick)}
            role="presentation"
            class={{
              'range-tick': true,
              'range-tick-active': tick.active
            }}
          />
        ))}

        <div class="range-bar" role="presentation" />
        <div
          class="range-bar range-bar-active"
          role="presentation"
          style={barStyle()}
        />

        { renderKnob(isRTL, {
          knob: 'A',
          pressed: this.pressedKnob === 'A',
          value: this.valA,
          ratio: this.ratioA,
          pin: this.pin,
          disabled: this.disabled,
          handleKeyboard: this.handleKeyboard,
          min,
          max
        })}

        { this.dualKnobs && renderKnob(isRTL, {
          knob: 'B',
          pressed: this.pressedKnob === 'B',
          value: this.valB,
          ratio: this.ratioB,
          pin: this.pin,
          disabled: this.disabled,
          handleKeyboard: this.handleKeyboard,
          min,
          max
        })}
      </div>,
      <slot name="end"></slot>
    ];
  }
}

interface RangeKnob {
  knob: KnobName;
  value: number;
  ratio: number;
  min: number;
  max: number;
  disabled: boolean;
  pressed: boolean;
  pin: boolean;

  handleKeyboard: (name: KnobName, isIncrease: boolean) => void;
}

function renderKnob(isRTL: boolean, { knob, value, ratio, min, max, disabled, pressed, pin, handleKeyboard }: RangeKnob) {
  const start = isRTL ? 'right' : 'left';

  const knobStyle = () => {
    const style: any = {};

    style[start] = `${ratio * 100}%`;

    return style;
  };

  return (
    <div
      onKeyDown={(ev: KeyboardEvent) => {
        const key = ev.key;
        if (key === 'ArrowLeft' || key === 'ArrowDown') {
          handleKeyboard(knob, false);
          ev.preventDefault();
          ev.stopPropagation();

        } else if (key === 'ArrowRight' || key === 'ArrowUp') {
          handleKeyboard(knob, true);
          ev.preventDefault();
          ev.stopPropagation();
        }
      }}
      class={{
        'range-knob-handle': true,
        'range-knob-a': knob === 'A',
        'range-knob-b': knob === 'B',
        'range-knob-pressed': pressed,
        'range-knob-min': value === min,
        'range-knob-max': value === max
      }}
      style={knobStyle()}
      role="slider"
      tabindex={disabled ? -1 : 0}
      aria-valuemin={min}
      aria-valuemax={max}
      aria-disabled={disabled ? 'true' : null}
      aria-valuenow={value}
    >
      {pin && <div class="range-pin" role="presentation">{Math.round(value)}</div>}
      <div class="range-knob" role="presentation" />
    </div>
  );
}

function ratioToValue(
  ratio: number,
  min: number,
  max: number,
  step: number
): number {
  let value = (max - min) * ratio;
  if (step > 0) {
    value = Math.round(value / step) * step + min;
  }
  return clamp(min, value, max);
}

function valueToRatio(value: number, min: number, max: number): number {
  return clamp(0, (value - min) / (max - min), 1);
}
