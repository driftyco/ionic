import { Component, ComponentInterface, Element, Event, EventEmitter, Host, Method, Prop, State, Watch, forceUpdate, h } from '@stencil/core';

import { config } from '../../global/config';
import { getIonMode } from '../../global/ionic-global';
import { AutocompleteTypes, Color, SearchbarChangeEventDetail, StyleEventDetail } from '../../interface';
import { debounceEvent, raf } from '../../utils/helpers';
import { createColorClasses } from '../../utils/theme';

/**
 * @virtualProp {"ios" | "md"} mode - The mode determines which platform styles to use.
 */
@Component({
  tag: 'ion-searchbar',
  styleUrls: {
    ios: 'searchbar.ios.scss',
    md: 'searchbar.md.scss'
  },
  scoped: true
})
export class Searchbar implements ComponentInterface {

  private nativeInput?: HTMLInputElement;
  private isCancelVisible = false;
  private shouldAlignLeft = true;

  @Element() el!: HTMLIonSearchbarElement;

  @State() focused = false;
  @State() noAnimate = true;

  /**
   * The color to use from your application's color palette.
   * Default options are: `"primary"`, `"secondary"`, `"tertiary"`, `"success"`, `"warning"`, `"danger"`, `"light"`, `"medium"`, and `"dark"`.
   * For more information on colors, see [theming](/docs/theming/basics).
   */
  @Prop({ reflect: true }) color?: Color;

  /**
   * If `true`, enable searchbar animation.
   */
  @Prop() animated = false;

  /**
   * Set the input's autocomplete property.
   */
  @Prop() autocomplete: AutocompleteTypes = 'off';

  /**
   * Set the input's autocorrect property.
   */
  @Prop() autocorrect: 'on' | 'off' = 'off';

  /**
   * Set the cancel button icon. Only applies to `md` mode.
   * Defaults to `"arrow-back-sharp"`.
   */
  @Prop() cancelButtonIcon = config.get('backButtonIcon', 'arrow-back-sharp') as string;

  /**
   * Set the the cancel button text. Only applies to `ios` mode.
   */
  @Prop() cancelButtonText = 'Cancel';

  /**
   * Set the clear icon. Defaults to `"close-circle"` for `ios` and `"close-sharp"` for `md`.
   */
  @Prop() clearIcon?: string;

  /**
   * Set the amount of time, in milliseconds, to wait to trigger the `ionChange` event after each keystroke. This also impacts form bindings such as `ngModel` or `v-model`.
   */
  @Prop() debounce = 250;

  @Watch('debounce')
  protected debounceChanged() {
    this.ionChange = debounceEvent(this.ionChange, this.debounce);
  }

  /**
   * If `true`, the user cannot interact with the input.
   */
  @Prop() disabled = false;

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
   * Set the input's placeholder.
   * `placeholder` can accept either plaintext or HTML as a string.
   * To display characters normally reserved for HTML, they
   * must be escaped. For example `<Ionic>` would become
   * `&lt;Ionic&gt;`
   *
   * For more information: [Security Documentation](https://ionicframework.com/docs/faq/security)
   */
  @Prop() placeholder = 'Search';

  /**
   * The icon to use as the search icon. Defaults to `"search-outline"` in
   * `ios` mode and `"search-sharp"` in `md` mode.
   */
  @Prop() searchIcon?: string;

  /**
   * Sets the behavior for the cancel button. Defaults to `"never"`.
   * Setting to `"focus"` shows the cancel button on focus.
   * Setting to `"never"` hides the cancel button.
   * Setting to `"always"` shows the cancel button regardless
   * of focus state.
   */
  @Prop() showCancelButton: 'never' | 'focus' | 'always' = 'never';

  /**
   * Sets the behavior for the clear button. Defaults to `"focus"`.
   * Setting to `"focus"` shows the clear button on focus if the
   * input is not empty.
   * Setting to `"never"` hides the clear button.
   * Setting to `"always"` shows the clear button regardless
   * of focus state, but only if the input is not empty.
   */
  @Prop() showClearButton: 'never' | 'focus' | 'always' = 'always';

  /**
   * If `true`, enable spellcheck on the input.
   */
  @Prop() spellcheck = false;

  /**
   * Set the type of the input.
   */
  @Prop() type: 'text' | 'password' | 'email' | 'number' | 'search' | 'tel' | 'url' = 'search';

  /**
   * the value of the searchbar.
   */
  @Prop({ mutable: true }) value?: string | null = '';

  /**
   * Emitted when a keyboard input occurred.
   */
  @Event() ionInput!: EventEmitter<KeyboardEvent>;

  /**
   * Emitted when the value has changed.
   */
  @Event() ionChange!: EventEmitter<SearchbarChangeEventDetail>;

  /**
   * Emitted when the cancel button is clicked.
   */
  @Event() ionCancel!: EventEmitter<void>;

  /**
   * Emitted when the clear input button is clicked.
   */
  @Event() ionClear!: EventEmitter<void>;

  /**
   * Emitted when the input loses focus.
   */
  @Event() ionBlur!: EventEmitter<void>;

  /**
   * Emitted when the input has focus.
   */
  @Event() ionFocus!: EventEmitter<void>;

  /**
   * Emitted when the styles change.
   * @internal
   */
  @Event() ionStyle!: EventEmitter<StyleEventDetail>;

  @Watch('value')
  protected valueChanged() {
    const inputEl = this.nativeInput;
    const value = this.getValue();
    if (inputEl && inputEl.value !== value) {
      inputEl.value = value;
    }
    this.ionChange.emit({ value });
  }

  @Watch('showCancelButton')
  protected showCancelButtonChanged() {
    requestAnimationFrame(() => {
      this.positionElements();
      forceUpdate(this);
    });
  }

  connectedCallback() {
    this.emitStyle();
  }

  componentDidLoad() {
    this.positionElements();
    this.debounceChanged();

    setTimeout(() => {
      this.noAnimate = false;
    }, 300);
  }

  private emitStyle() {
    this.ionStyle.emit({
      'searchbar': true
    });
  }

  /**
   * Sets focus on the specified `ion-searchbar`. Use this method instead of the global
   * `input.focus()`.
   */
  @Method()
  async setFocus() {
    if (this.nativeInput) {
      this.nativeInput.focus();
    }
  }

  /**
   * Returns the native `<input>` element used under the hood.
   */
  @Method()
  getInputElement(): Promise<HTMLInputElement> {
    return Promise.resolve(this.nativeInput!);
  }

  /**
   * Clears the input field and triggers the control change.
   */
  private onClearInput = (ev?: Event, shouldFocus?: boolean) => {
    this.ionClear.emit();

    if (ev) {
      ev.preventDefault();
      ev.stopPropagation();
    }

    // setTimeout() fixes https://github.com/ionic-team/ionic/issues/7527
    // wait for 4 frames
    setTimeout(() => {
      const value = this.getValue();
      if (value !== '') {
        this.value = '';
        this.ionInput.emit();

        /**
         * When tapping clear button
         * ensure input is focused after
         * clearing input so users
         * can quickly start typing.
         */
        if (shouldFocus && !this.focused) {
          this.setFocus();
        }
      }
    }, 16 * 4);
  }

  /**
   * Clears the input field and tells the input to blur since
   * the clearInput function doesn't want the input to blur
   * then calls the custom cancel function if the user passed one in.
   */
  private onCancelSearchbar = (ev?: Event) => {
    if (ev) {
      ev.preventDefault();
      ev.stopPropagation();
    }
    this.ionCancel.emit();
    this.onClearInput();

    if (this.nativeInput) {
      this.nativeInput.blur();
    }
  }

  /**
   * Update the Searchbar input value when the input changes
   */
  private onInput = (ev: Event) => {
    const input = ev.target as HTMLInputElement | null;
    if (input) {
      this.value = input.value;
    }
    this.ionInput.emit(ev as KeyboardEvent);
  }

  /**
   * Sets the Searchbar to not focused and checks if it should align left
   * based on whether there is a value in the searchbar or not.
   */
  private onBlur = () => {
    this.focused = false;
    this.ionBlur.emit();
    this.positionElements();
  }

  /**
   * Sets the Searchbar to focused and active on input focus.
   */
  private onFocus = () => {
    this.focused = true;
    this.ionFocus.emit();
    this.positionElements();
  }

  /**
   * Positions the input search icon, placeholder, and the cancel button
   * based on the input value and if it is focused. (ios only)
   */
  private positionElements() {
    const value = this.getValue();
    const prevAlignLeft = this.shouldAlignLeft;
    const mode = getIonMode(this);
    const shouldAlignLeft = (!this.animated || value.trim() !== '' || !!this.focused);
    this.shouldAlignLeft = shouldAlignLeft;

    if (mode !== 'ios') {
      return;
    }

    if (prevAlignLeft !== shouldAlignLeft) {
      this.positionPlaceholder();
    }

    if (this.animated) {
      this.positionCancelButton();
    }
  }

  /**
   * Positions the input placeholder
   */
  private positionPlaceholder() {
    const inputEl = this.nativeInput;
    if (!inputEl) {
      return;
    }
    const isRTL = document.dir === 'rtl';
    const iconEl = (this.el.shadowRoot || this.el).querySelector('.searchbar-search-icon') as HTMLElement;

    if (this.shouldAlignLeft) {
      inputEl.removeAttribute('style');
      iconEl.removeAttribute('style');

    } else {
      // Create a dummy span to get the placeholder width
      const doc = document;
      const tempSpan = doc.createElement('span');
      tempSpan.innerText = this.placeholder || '';
      doc.body.appendChild(tempSpan);

      // Get the width of the span then remove it
      raf(() => {
        const textWidth = tempSpan.offsetWidth;
        tempSpan.remove();

        // Calculate the input padding
        const inputLeft = 'calc(50% - ' + (textWidth / 2) + 'px)';

        // Calculate the icon margin
        const iconLeft = 'calc(50% - ' + ((textWidth / 2) + 30) + 'px)';

        // Set the input padding start and icon margin start
        if (isRTL) {
          inputEl.style.paddingRight = inputLeft;
          iconEl.style.marginRight = iconLeft;
        } else {
          inputEl.style.paddingLeft = inputLeft;
          iconEl.style.marginLeft = iconLeft;
        }
      });
    }
  }

  /**
   * Show the iOS Cancel button on focus, hide it offscreen otherwise
   */
  private positionCancelButton() {
    const isRTL = document.dir === 'rtl';
    const cancelButton = (this.el.shadowRoot || this.el).querySelector('.searchbar-cancel-button') as HTMLElement;
    const shouldShowCancel = this.shouldShowCancelButton();

    if (cancelButton && shouldShowCancel !== this.isCancelVisible) {
      const cancelStyle = cancelButton.style;
      this.isCancelVisible = shouldShowCancel;
      if (shouldShowCancel) {
        if (isRTL) {
          cancelStyle.marginLeft = '0';
        } else {
          cancelStyle.marginRight = '0';
        }
      } else {
        const offset = cancelButton.offsetWidth;
        if (offset > 0) {
          if (isRTL) {
            cancelStyle.marginLeft = -offset + 'px';
          } else {
            cancelStyle.marginRight = -offset + 'px';
          }
        }
      }
    }
  }

  private getValue() {
    return this.value || '';
  }

  private hasValue(): boolean {
    return this.getValue() !== '';
  }

  /**
   * Determines whether or not the cancel button should be visible onscreen.
   * Cancel button should be shown if one of two conditions applies:
   * 1. `showCancelButton` is set to `always`.
   * 2. `showCancelButton` is set to `focus`, and the searchbar has been focused.
   */
  private shouldShowCancelButton(): boolean {
    if ((this.showCancelButton === 'never') || (this.showCancelButton === 'focus' && !this.focused)) {
      return false;
    }

    return true;
  }

  /**
   * Determines whether or not the clear button should be visible onscreen.
   * Clear button should be shown if one of two conditions applies:
   * 1. `showClearButton` is set to `always`.
   * 2. `showClearButton` is set to `focus`, and the searchbar has been focused.
   */
  private shouldShowClearButton(): boolean {
    if ((this.showClearButton === 'never') || (this.showClearButton === 'focus' && !this.focused)) {
      return false;
    }

    return true;
  }

  render() {
    const { cancelButtonText } = this;
    const animated = this.animated && config.getBoolean('animated', true);
    const mode = getIonMode(this);
    const clearIcon = this.clearIcon || (mode === 'ios' ? 'close-circle' : 'close-sharp');
    const searchIcon = this.searchIcon || (mode === 'ios' ? 'search-outline' : 'search-sharp');
    const shouldShowCancelButton = this.shouldShowCancelButton();

    const cancelButton = (this.showCancelButton !== 'never') && (
      <button
        aria-label={cancelButtonText}

        // Screen readers should not announce button if it is not visible on screen
        aria-hidden={shouldShowCancelButton ? undefined : 'true'}
        type="button"
        tabIndex={mode === 'ios' && !shouldShowCancelButton ? -1 : undefined}
        onMouseDown={this.onCancelSearchbar}
        onTouchStart={this.onCancelSearchbar}
        class="searchbar-cancel-button"
      >
        <div aria-hidden="true">
          { mode === 'md'
            ? <ion-icon aria-hidden="true" mode={mode} icon={this.cancelButtonIcon} lazy={false}></ion-icon>
            : cancelButtonText
          }
        </div>
      </button>
    );

    return (
      <Host
        role="search"
        aria-disabled={this.disabled ? 'true' : null}
        class={createColorClasses(this.color, {
          [mode]: true,
          'searchbar-animated': animated,
          'searchbar-disabled': this.disabled,
          'searchbar-no-animate': animated && this.noAnimate,
          'searchbar-has-value': this.hasValue(),
          'searchbar-left-aligned': this.shouldAlignLeft,
          'searchbar-has-focus': this.focused,
          'searchbar-should-show-clear': this.shouldShowClearButton(),
          'searchbar-should-show-cancel': this.shouldShowCancelButton()
        })}
      >

        <div class="searchbar-input-container">
          <input
            aria-label="search text"
            disabled={this.disabled}
            ref={el => this.nativeInput = el}
            class="searchbar-input"
            inputMode={this.inputmode}
            enterKeyHint={this.enterkeyhint}
            onInput={this.onInput}
            onBlur={this.onBlur}
            onFocus={this.onFocus}
            placeholder={this.placeholder}
            type={this.type}
            value={this.getValue()}
            autoComplete={this.autocomplete}
            autoCorrect={this.autocorrect}
            spellcheck={this.spellcheck}
          />

          {mode === 'md' && cancelButton}

          <ion-icon aria-hidden="true" mode={mode} icon={searchIcon} lazy={false} class="searchbar-search-icon"></ion-icon>

          <button
            aria-label="reset"
            type="button"
            no-blur
            class="searchbar-clear-button"
            onMouseDown={ev => this.onClearInput(ev, true)}
            onTouchStart={ev => this.onClearInput(ev, true)}
          >
            <ion-icon aria-hidden="true" mode={mode} icon={clearIcon} lazy={false} class="searchbar-clear-icon"></ion-icon>
          </button>
        </div>
        {mode === 'ios' && cancelButton}
      </Host>
    );
  }
}
