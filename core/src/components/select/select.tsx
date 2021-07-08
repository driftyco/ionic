import { Component, ComponentInterface, Element, Event, EventEmitter, Host, Method, Prop, State, Watch, h } from '@stencil/core';

import { getIonMode } from '../../global/ionic-global';
import { ActionSheetButton, ActionSheetOptions, AlertInput, AlertOptions, CssClassMap, OverlaySelect, PopoverOptions, SelectChangeEventDetail, SelectInterface, SelectPopoverOption, StyleEventDetail } from '../../interface';
import { findItemLabel, getAriaLabel, renderHiddenInput } from '../../utils/helpers';
import { actionSheetController, alertController, popoverController } from '../../utils/overlays';
import { hostContext } from '../../utils/theme';
import { watchForOptions } from '../../utils/watch-options';

import { SelectCompareFn } from './select-interface';

/**
 * @virtualProp {"ios" | "md"} mode - The mode determines which platform styles to use.
 *
 * @part placeholder - The text displayed in the select when there is no value.
 * @part text - The displayed value of the select.
 * @part icon - The select icon container.
 */
@Component({
  tag: 'ion-select',
  styleUrls: {
    ios: 'select.ios.scss',
    md: 'select.md.scss'
  },
  shadow: true
})
export class Select implements ComponentInterface {

  private inputId = `ion-sel-${selectIds++}`;
  private overlay?: OverlaySelect;
  private didInit = false;
  private focusEl?: HTMLButtonElement;
  private mutationO?: MutationObserver;

  @Element() el!: HTMLIonSelectElement;

  @State() isExpanded = false;

  /**
   * If `true`, the user cannot interact with the select.
   */
  @Prop() disabled = false;

  /**
   * The text to display on the cancel button.
   */
  @Prop() cancelText = 'Cancel';

  /**
   * The text to display on the ok button.
   */
  @Prop() okText = 'OK';

  /**
   * The text to display when the select is empty.
   */
  @Prop() placeholder?: string;

  /**
   * The name of the control, which is submitted with the form data.
   */
  @Prop() name: string = this.inputId;

  /**
   * The text to display instead of the selected option's value.
   */
  @Prop() selectedText?: string | null;

  /**
   * If `true`, the select can accept multiple values.
   */
  @Prop() multiple = false;

  /**
   * The interface the select should use: `action-sheet`, `popover` or `alert`.
   */
  @Prop() interface: SelectInterface = 'alert';

  /**
   * Any additional options that the `alert`, `action-sheet` or `popover` interface
   * can take. See the [ion-alert docs](../alert), the
   * [ion-action-sheet docs](../action-sheet) and the
   * [ion-popover docs](../popover) for the
   * create options for each interface.
   *
   * Note: `interfaceOptions` will not override `inputs` or `buttons` with the `alert` interface.
   */
  @Prop() interfaceOptions: any = {};

  /**
   * A property name or function used to compare object values
   */
  @Prop() compareWith?: string | SelectCompareFn | null;

  /**
   * the value of the select.
   */
  @Prop({ mutable: true }) value?: any | null;

  /**
   * Emitted when the value has changed.
   */
  @Event() ionChange!: EventEmitter<SelectChangeEventDetail>;

  /**
   * Emitted when the selection is cancelled.
   */
  @Event() ionCancel!: EventEmitter<void>;

  /**
   * Emitted when the select has focus.
   */
  @Event() ionFocus!: EventEmitter<void>;

  /**
   * Emitted when the select loses focus.
   */
  @Event() ionBlur!: EventEmitter<void>;

  /**
   * Emitted when the styles change.
   * @internal
   */
  @Event() ionStyle!: EventEmitter<StyleEventDetail>;

  @Watch('disabled')
  @Watch('placeholder')
  @Watch('isExpanded')
  styleChanged() {
    this.emitStyle();
  }

  @Watch('value')
  valueChanged() {
    this.emitStyle();
    if (this.didInit) {
      this.ionChange.emit({
        value: this.value,
      });
    }
  }

  async connectedCallback() {
    this.updateOverlayOptions();
    this.emitStyle();

    this.mutationO = watchForOptions<HTMLIonSelectOptionElement>(this.el, 'ion-select-option', async () => {
      this.updateOverlayOptions();
    });
  }

  disconnectedCallback() {
    if (this.mutationO) {
      this.mutationO.disconnect();
      this.mutationO = undefined;
    }
  }

  componentDidLoad() {
    this.didInit = true;
  }

  /**
   * Open the select overlay. The overlay is either an alert, action sheet, or popover,
   * depending on the `interface` property on the `ion-select`.
   *
   * @param event The user interface event that called the open.
   */
  @Method()
  async open(event?: UIEvent): Promise<any> {
    if (this.disabled || this.isExpanded) {
      return undefined;
    }
    const overlay = this.overlay = await this.createOverlay(event);
    this.isExpanded = true;
    overlay.onDidDismiss().then(() => {
      this.overlay = undefined;
      this.isExpanded = false;
      this.setFocus();
    });
    await overlay.present();
    return overlay;
  }

  private createOverlay(ev?: UIEvent): Promise<OverlaySelect> {
    let selectInterface = this.interface;
    if (selectInterface === 'action-sheet' && this.multiple) {
      console.warn(`Select interface cannot be "${selectInterface}" with a multi-value select. Using the "alert" interface instead.`);
      selectInterface = 'alert';
    }

    if (selectInterface === 'popover' && !ev) {
      console.warn(`Select interface cannot be a "${selectInterface}" without passing an event. Using the "alert" interface instead.`);
      selectInterface = 'alert';
    }

    if (selectInterface === 'action-sheet') {
      return this.openActionSheet();
    }
    if (selectInterface === 'popover') {
      return this.openPopover(ev!);
    }
    return this.openAlert();
  }

  private updateOverlayOptions(): void {
    const overlay = (this.overlay as any);
    if (!overlay) {
      return;
    }
    const childOpts = this.childOpts;
    const value = this.value;
    switch (this.interface) {
      case 'action-sheet':
        overlay.buttons = this.createActionSheetButtons(childOpts, value);
        break;
      case 'popover':
        const popover = overlay.querySelector('ion-select-popover');
        if (popover) {
          popover.options = this.createPopoverOptions(childOpts, value);
        }
        break;
      case 'alert':
        const inputType = (this.multiple ? 'checkbox' : 'radio');
        overlay.inputs = this.createAlertInputs(childOpts, inputType, value);
        break;
    }
  }

  private createActionSheetButtons(data: HTMLIonSelectOptionElement[], selectValue: any): ActionSheetButton[] {
    const actionSheetButtons = data.map(option => {
      const value = getOptionValue(option);

      // Remove hydrated before copying over classes
      const copyClasses = Array.from(option.classList).filter(cls => cls !== 'hydrated').join(' ');
      const optClass = `${OPTION_CLASS} ${copyClasses}`;

      return {
        role: (isOptionSelected(value, selectValue, this.compareWith) ? 'selected' : ''),
        text: option.textContent,
        cssClass: optClass,
        handler: () => {
          this.value = value;
        }
      } as ActionSheetButton;
    });

    // Add "cancel" button
    actionSheetButtons.push({
      text: this.cancelText,
      role: 'cancel',
      handler: () => {
        this.ionCancel.emit();
      }
    });

    return actionSheetButtons;
  }

  private createAlertInputs(data: HTMLIonSelectOptionElement[], inputType: 'checkbox' | 'radio', selectValue: any): AlertInput[] {
    const alertInputs = data.map(option => {
      const value = getOptionValue(option);

      // Remove hydrated before copying over classes
      const copyClasses = Array.from(option.classList).filter(cls => cls !== 'hydrated').join(' ');
      const optClass = `${OPTION_CLASS} ${copyClasses}`;

      return {
        type: inputType,
        cssClass: optClass,
        label: option.textContent || '',
        value,
        checked: isOptionSelected(value, selectValue, this.compareWith),
        disabled: option.disabled
      };
    });

    return alertInputs;
  }

  private createPopoverOptions(data: HTMLIonSelectOptionElement[], selectValue: any): SelectPopoverOption[] {
    const popoverOptions = data.map(option => {
      const value = getOptionValue(option);

      // Remove hydrated before copying over classes
      const copyClasses = Array.from(option.classList).filter(cls => cls !== 'hydrated').join(' ');
      const optClass = `${OPTION_CLASS} ${copyClasses}`;

      return {
        text: option.textContent || '',
        cssClass: optClass,
        value,
        checked: isOptionSelected(value, selectValue, this.compareWith),
        disabled: option.disabled,
        handler: (selected: any) => {
          this.value = selected;
          if (!this.multiple) {
            this.close();
          }
        }
      };
    });

    return popoverOptions;
  }

  private async openPopover(ev: UIEvent) {
    const interfaceOptions = this.interfaceOptions;
    const mode = getIonMode(this);
    const showBackdrop = mode === 'md' ? false : true;
    const multiple = this.multiple;
    const value = this.value;

    let event: Event | CustomEvent = ev;
    let size = 'auto';

    const item = this.el.closest('ion-item');

    // If the select is inside of an item containing a floating
    // or stacked label then the popover should take up the
    // full width of the item when it presents
    if (item && (item.classList.contains('item-label-floating') || item.classList.contains('item-label-stacked'))) {
      event = {
        ...ev,
        detail: {
          ionShadowTarget: item
        }
      }
      size = 'cover';
    }

    const popoverOpts: PopoverOptions = {
      mode,
      event,
      alignment: 'center',
      size,
      showBackdrop,
      ...interfaceOptions,

      component: 'ion-select-popover',
      cssClass: ['select-popover', interfaceOptions.cssClass],
      componentProps: {
        header: interfaceOptions.header,
        subHeader: interfaceOptions.subHeader,
        message: interfaceOptions.message,
        multiple,
        value,
        options: this.createPopoverOptions(this.childOpts, value)
      }
    };
    return popoverController.create(popoverOpts);
  }

  private async openActionSheet() {
    const mode = getIonMode(this);
    const interfaceOptions = this.interfaceOptions;
    const actionSheetOpts: ActionSheetOptions = {
      mode,
      ...interfaceOptions,

      buttons: this.createActionSheetButtons(this.childOpts, this.value),
      cssClass: ['select-action-sheet', interfaceOptions.cssClass]
    };
    return actionSheetController.create(actionSheetOpts);
  }

  private async openAlert() {
    const label = this.getLabel();
    const labelText = (label) ? label.textContent : null;

    const interfaceOptions = this.interfaceOptions;
    const inputType = (this.multiple ? 'checkbox' : 'radio');
    const mode = getIonMode(this);

    const alertOpts: AlertOptions = {
      mode,
      ...interfaceOptions,

      header: interfaceOptions.header ? interfaceOptions.header : labelText,
      inputs: this.createAlertInputs(this.childOpts, inputType, this.value),
      buttons: [
        {
          text: this.cancelText,
          role: 'cancel',
          handler: () => {
            this.ionCancel.emit();
          }
        },
        {
          text: this.okText,
          handler: (selectedValues: any) => {
            this.value = selectedValues;
          }
        }
      ],
      cssClass: ['select-alert', interfaceOptions.cssClass,
                 (this.multiple ? 'multiple-select-alert' : 'single-select-alert')]
    };
    return alertController.create(alertOpts);
  }

  /**
   * Close the select interface.
   */
  private close(): Promise<boolean> {
    // TODO check !this.overlay || !this.isFocus()
    if (!this.overlay) {
      return Promise.resolve(false);
    }
    return this.overlay.dismiss();
  }

  private getLabel() {
    return findItemLabel(this.el);
  }

  private hasValue(): boolean {
    return this.getText() !== '';
  }

  private get childOpts() {
    return Array.from(this.el.querySelectorAll('ion-select-option'));
  }

  private getText(): string {
    const selectedText = this.selectedText;
    if (selectedText != null && selectedText !== '') {
      return selectedText;
    }
    return generateText(this.childOpts, this.value, this.compareWith);
  }

  private setFocus() {
    if (this.focusEl) {
      this.focusEl.focus();
    }
  }

  private emitStyle() {
    this.ionStyle.emit({
      'interactive': true,
      'interactive-disabled': this.disabled,
      'select': true,
      'select-disabled': this.disabled,
      'has-placeholder': this.placeholder !== undefined,
      'has-value': this.hasValue(),
      'has-focus': this.isExpanded,
    });
  }

  private onClick = (ev: UIEvent) => {
    this.setFocus();
    this.open(ev);
  }

  private onFocus = () => {
    this.ionFocus.emit();
  }

  private onBlur = () => {
    this.ionBlur.emit();
  }

  render() {
    const { disabled, el, inputId, isExpanded, name, placeholder, value } = this;
    const mode = getIonMode(this);
    const { labelText, labelId } = getAriaLabel(el, inputId);

    renderHiddenInput(true, el, name, parseValue(value), disabled);

    const displayValue = this.getText();

    let addPlaceholderClass = false;
    let selectText = displayValue;
    if (selectText === '' && placeholder !== undefined) {
      selectText = placeholder;
      addPlaceholderClass = true;
    }

    const selectTextClasses: CssClassMap = {
      'select-text': true,
      'select-placeholder': addPlaceholderClass
    };

    const textPart = addPlaceholderClass ? 'placeholder' : 'text';

    // If there is a label then we need to concatenate it with the
    // current value (or placeholder) and a comma so it separates
    // nicely when the screen reader announces it, otherwise just
    // announce the value / placeholder
    const displayLabel = labelText !== undefined
      ? (selectText !== '' ? `${selectText}, ${labelText}` : labelText)
      : selectText;

    return (
      <Host
        onClick={this.onClick}
        role="button"
        aria-haspopup="listbox"
        aria-disabled={disabled ? 'true' : null}
        aria-label={displayLabel}
        class={{
          [mode]: true,
          'in-item': hostContext('ion-item', el),
          'select-disabled': disabled,
          'select-expanded': isExpanded
        }}
      >
        <div aria-hidden="true" class={selectTextClasses} part={textPart}>
          {selectText}
        </div>
        <div class="select-icon" role="presentation" part="icon">
          <div class="select-icon-inner"></div>
        </div>
        <label id={labelId}>
          {displayLabel}
        </label>
        <button
          type="button"
          disabled={disabled}
          id={inputId}
          aria-labelledby={labelId}
          aria-haspopup="listbox"
          aria-expanded={`${isExpanded}`}
          onFocus={this.onFocus}
          onBlur={this.onBlur}
          ref={(focusEl => this.focusEl = focusEl)}
        ></button>
      </Host>
    );
  }
}

const isOptionSelected = (currentValue: any[] | any, compareValue: any, compareWith?: string | SelectCompareFn | null) => {
  if (currentValue === undefined) {
    return false;
  }
  if (Array.isArray(currentValue)) {
    return currentValue.some(val => compareOptions(val, compareValue, compareWith));
  } else {
    return compareOptions(currentValue, compareValue, compareWith);
  }
};

const getOptionValue = (el: HTMLIonSelectOptionElement) => {
  const value = el.value;
  return (value === undefined)
    ? el.textContent || ''
    : value;
};

const parseValue = (value: any) => {
  if (value == null) {
    return undefined;
  }
  if (Array.isArray(value)) {
    return value.join(',');
  }
  return value.toString();
};

const compareOptions = (currentValue: any, compareValue: any, compareWith?: string | SelectCompareFn | null): boolean => {
  if (typeof compareWith === 'function') {
    return compareWith(currentValue, compareValue);
  } else if (typeof compareWith === 'string') {
    return currentValue[compareWith] === compareValue[compareWith];
  } else {
    return Array.isArray(compareValue) ? compareValue.includes(currentValue) : currentValue === compareValue;
  }
};

const generateText = (opts: HTMLIonSelectOptionElement[], value: any | any[], compareWith?: string | SelectCompareFn | null) => {
  if (value === undefined) {
    return '';
  }
  if (Array.isArray(value)) {
    return value
      .map(v => textForValue(opts, v, compareWith))
      .filter(opt => opt !== null)
      .join(', ');
  } else {
    return textForValue(opts, value, compareWith) || '';
  }
};

const textForValue = (opts: HTMLIonSelectOptionElement[], value: any, compareWith?: string | SelectCompareFn | null): string | null => {
  const selectOpt = opts.find(opt => {
    return compareOptions(getOptionValue(opt), value, compareWith);
  });
  return selectOpt
    ? selectOpt.textContent
    : null;
};

let selectIds = 0;

const OPTION_CLASS = 'select-interface-option';
