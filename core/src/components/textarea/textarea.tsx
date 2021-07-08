import { Build, Component, ComponentInterface, Element, Event, EventEmitter, Host, Method, Prop, State, Watch, h, readTask } from '@stencil/core';

import { getIonMode } from '../../global/ionic-global';
import { Color, StyleEventDetail, TextareaChangeEventDetail } from '../../interface';
import { debounceEvent, findItemLabel, inheritAttributes, raf } from '../../utils/helpers';
import { createColorClasses } from '../../utils/theme';

/**
 * @virtualProp {"ios" | "md"} mode - The mode determines which platform styles to use.
 */
@Component({
  tag: 'ion-textarea',
  styleUrls: {
    ios: 'textarea.ios.scss',
    md: 'textarea.md.scss'
  },
  scoped: true
})
export class Textarea implements ComponentInterface {

  private nativeInput?: HTMLTextAreaElement;
  private inputId = `ion-textarea-${textareaIds++}`;
  private didBlurAfterEdit = false;
  private textareaWrapper?: HTMLElement;
  private inheritedAttributes: { [k: string]: any } = {};

  /**
   * This is required for a WebKit bug which requires us to
   * blur and focus an input to properly focus the input in
   * an item with delegatesFocus. It will no longer be needed
   * with iOS 14.
   *
   * @internal
   */
  @Prop() fireFocusEvents = true;

  @Element() el!: HTMLElement;

  @State() hasFocus = false;

  /**
   * The color to use from your application's color palette.
   * Default options are: `"primary"`, `"secondary"`, `"tertiary"`, `"success"`, `"warning"`, `"danger"`, `"light"`, `"medium"`, and `"dark"`.
   * For more information on colors, see [theming](/docs/theming/basics).
   */
  @Prop({ reflect: true }) color?: Color;

  /**
   * Indicates whether and how the text value should be automatically capitalized as it is entered/edited by the user.
   */
  @Prop() autocapitalize = 'none';

  /**
   * This Boolean attribute lets you specify that a form control should have input focus when the page loads.
   */
  @Prop() autofocus = false;

  /**
   * If `true`, the value will be cleared after focus upon edit. Defaults to `true` when `type` is `"password"`, `false` for all other types.
   */
  @Prop({ mutable: true }) clearOnEdit = false;

  /**
   * Set the amount of time, in milliseconds, to wait to trigger the `ionChange` event after each keystroke. This also impacts form bindings such as `ngModel` or `v-model`.
   */
  @Prop() debounce = 0;

  @Watch('debounce')
  protected debounceChanged() {
    this.ionChange = debounceEvent(this.ionChange, this.debounce);
  }

  /**
   * If `true`, the user cannot interact with the textarea.
   */
  @Prop() disabled = false;

  @Watch('disabled')
  protected disabledChanged() {
    this.emitStyle();
  }

  /**
   * A hint to the browser for which keyboard to display.
   * Possible values: `"none"`, `"text"`, `"tel"`, `"url"`,
   * `"email"`, `"numeric"`, `"decimal"`, and `"search"`.
   */
  @Prop() inputmode?: 'none' | 'text' | 'tel' | 'url' | 'email' | 'numeric' | 'decimal' | 'search';

  /**
   * A hint to the browser for which enter key to display.
   * Possible values: `"enter"`, `"done"`, `"go"`, `"next"`,
   * `"previous"`, `"search"`, and `"send"`.
   */
  @Prop() enterkeyhint?: 'enter' | 'done' | 'go' | 'next' | 'previous' | 'search' | 'send';

  /**
   * If the value of the type attribute is `text`, `email`, `search`, `password`, `tel`, or `url`, this attribute specifies the maximum number of characters that the user can enter.
   */
  @Prop() maxlength?: number;

  /**
   * If the value of the type attribute is `text`, `email`, `search`, `password`, `tel`, or `url`, this attribute specifies the minimum number of characters that the user can enter.
   */
  @Prop() minlength?: number;

  /**
   * The name of the control, which is submitted with the form data.
   */
  @Prop() name: string = this.inputId;

  /**
   * Instructional text that shows before the input has a value.
   */
  @Prop() placeholder?: string;

  /**
   * If `true`, the user cannot modify the value.
   */
  @Prop() readonly = false;

  /**
   * If `true`, the user must fill in a value before submitting a form.
   */
  @Prop() required = false;

  /**
   * If `true`, the element will have its spelling and grammar checked.
   */
  @Prop() spellcheck = false;

  /**
   * The visible width of the text control, in average character widths. If it is specified, it must be a positive integer.
   */
  @Prop() cols?: number;

  /**
   * The number of visible text lines for the control.
   */
  @Prop() rows?: number;

  /**
   * Indicates how the control wraps text.
   */
  @Prop() wrap?: 'hard' | 'soft' | 'off';

  /**
   * If `true`, the element height will increase based on the value.
   */
  @Prop() autoGrow = false;

  /**
   * The value of the textarea.
   */
  @Prop({ mutable: true }) value?: string | null = '';

  /**
   * Update the native input element when the value changes
   */
  @Watch('value')
  protected valueChanged() {
    const nativeInput = this.nativeInput;
    const value = this.getValue();
    if (nativeInput && nativeInput.value !== value) {
      nativeInput.value = value;
    }
    this.runAutoGrow();
    this.emitStyle();
    this.ionChange.emit({ value });
  }

  /**
   * Emitted when the input value has changed.
   */
  @Event() ionChange!: EventEmitter<TextareaChangeEventDetail>;

  /**
   * Emitted when a keyboard input occurred.
   */
  @Event() ionInput!: EventEmitter<KeyboardEvent>;

  /**
   * Emitted when the styles change.
   * @internal
   */
  @Event() ionStyle!: EventEmitter<StyleEventDetail>;

  /**
   * Emitted when the input loses focus.
   */
  @Event() ionBlur!: EventEmitter<FocusEvent>;

  /**
   * Emitted when the input has focus.
   */
  @Event() ionFocus!: EventEmitter<FocusEvent>;

  connectedCallback() {
    this.emitStyle();
    this.debounceChanged();
    if (Build.isBrowser) {
      document.dispatchEvent(new CustomEvent('ionInputDidLoad', {
        detail: this.el
      }));
    }
  }

  disconnectedCallback() {
    if (Build.isBrowser) {
      document.dispatchEvent(new CustomEvent('ionInputDidUnload', {
        detail: this.el
      }));
    }
  }

  componentWillLoad() {
    this.inheritedAttributes = inheritAttributes(this.el, ['title']);
  }

  componentDidLoad() {
    raf(() => this.runAutoGrow());
  }

  private runAutoGrow() {
    const nativeInput = this.nativeInput;
    if (nativeInput && this.autoGrow) {
      readTask(() => {
        nativeInput.style.height = 'auto';
        nativeInput.style.height = nativeInput.scrollHeight + 'px';
        if (this.textareaWrapper) {
          this.textareaWrapper.style.height = nativeInput.scrollHeight + 'px';
        }
      });
    }
  }

  /**
   * Sets focus on the native `textarea` in `ion-textarea`. Use this method instead of the global
   * `textarea.focus()`.
   */
  @Method()
  async setFocus() {
    if (this.nativeInput) {
      this.nativeInput.focus();
    }
  }

  /**
   * Sets blur on the native `textarea` in `ion-textarea`. Use this method instead of the global
   * `textarea.blur()`.
   * @internal
   */
  @Method()
  async setBlur() {
    if (this.nativeInput) {
      this.nativeInput.blur();
    }
  }

  /**
   * Returns the native `<textarea>` element used under the hood.
   */
  @Method()
  getInputElement(): Promise<HTMLTextAreaElement> {
    return Promise.resolve(this.nativeInput!);
  }

  private emitStyle() {
    this.ionStyle.emit({
      'interactive': true,
      'textarea': true,
      'input': true,
      'interactive-disabled': this.disabled,
      'has-placeholder': this.placeholder !== undefined,
      'has-value': this.hasValue(),
      'has-focus': this.hasFocus
    });
  }

  /**
   * Check if we need to clear the text input if clearOnEdit is enabled
   */
  private checkClearOnEdit() {
    if (!this.clearOnEdit) {
      return;
    }

    // Did the input value change after it was blurred and edited?
    if (this.didBlurAfterEdit && this.hasValue()) {
      // Clear the input
      this.value = '';
    }

    // Reset the flag
    this.didBlurAfterEdit = false;
  }

  private focusChange() {
    // If clearOnEdit is enabled and the input blurred but has a value, set a flag
    if (this.clearOnEdit && !this.hasFocus && this.hasValue()) {
      this.didBlurAfterEdit = true;
    }
    this.emitStyle();
  }

  private hasValue(): boolean {
    return this.getValue() !== '';
  }

  private getValue(): string {
    return this.value || '';
  }

  private onInput = (ev: Event) => {
    if (this.nativeInput) {
      this.value = this.nativeInput.value;
    }
    this.emitStyle();
    this.ionInput.emit(ev as KeyboardEvent);
  }

  private onFocus = (ev: FocusEvent) => {
    this.hasFocus = true;
    this.focusChange();

    if (this.fireFocusEvents) {
      this.ionFocus.emit(ev);
    }
  }

  private onBlur = (ev: FocusEvent) => {
    this.hasFocus = false;
    this.focusChange();

    if (this.fireFocusEvents) {
      this.ionBlur.emit(ev);
    }
  }

  private onKeyDown = () => {
    this.checkClearOnEdit();
  }

  render() {
    const mode = getIonMode(this);
    const value = this.getValue();
    const labelId = this.inputId + '-lbl';
    const label = findItemLabel(this.el);
    if (label) {
      label.id = labelId;
    }

    return (
      <Host
        aria-disabled={this.disabled ? 'true' : null}
        class={createColorClasses(this.color, {
          [mode]: true,
        })}
      >
        <div
          class="textarea-wrapper"
          ref={el => this.textareaWrapper = el}
        >
          <textarea
            class="native-textarea"
            aria-labelledby={label ? labelId : null}
            ref={el => this.nativeInput = el}
            autoCapitalize={this.autocapitalize}
            autoFocus={this.autofocus}
            enterKeyHint={this.enterkeyhint}
            inputMode={this.inputmode}
            disabled={this.disabled}
            maxLength={this.maxlength}
            minLength={this.minlength}
            name={this.name}
            placeholder={this.placeholder || ''}
            readOnly={this.readonly}
            required={this.required}
            spellcheck={this.spellcheck}
            cols={this.cols}
            rows={this.rows}
            wrap={this.wrap}
            onInput={this.onInput}
            onBlur={this.onBlur}
            onFocus={this.onFocus}
            onKeyDown={this.onKeyDown}
            {...this.inheritedAttributes}
          >
            {value}
          </textarea>
        </div>
      </Host>
    );
  }
}

let textareaIds = 0;
