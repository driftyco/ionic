import { Component, ComponentInterface, Element, Event, EventEmitter, Host, Prop, Watch, h } from '@stencil/core';

import { getIonMode } from '../../global/ionic-global';
import { RadioGroupChangeEventDetail } from '../../interface';
import { findCheckedOption, watchForOptions } from '../../utils/watch-options';

@Component({
  tag: 'ion-radio-group'
})
export class RadioGroup implements ComponentInterface {

  private inputId = `ion-rg-${radioGroupIds++}`;
  private labelId = `${this.inputId}-lbl`;
  private mutationO?: MutationObserver;

  @Element() el!: HTMLElement;

  /**
   * If `true`, the radios can be deselected.
   */
  @Prop() allowEmptySelection = false;

  /**
   * The name of the control, which is submitted with the form data.
   */
  @Prop() name: string = this.inputId;

  /**
   * If `true`, the user cannot interact with the radio.
   */
  @Prop() disabled = false;

  /**
   * the value of the radio group.
   */
  @Prop({ mutable: true }) value?: any | null;

  @Watch('value')
  valueChanged(value: any | undefined) {
    this.updateRadios();
    this.ionChange.emit({ value });
  }

  @Watch('disabled')
  disabledChanged() {
    this.getRadios().then(radios => radios.forEach(radio => radio.disabled = this.disabled));
  }

  /**
   * Emitted when the value has changed.
   */
  @Event() ionChange!: EventEmitter<RadioGroupChangeEventDetail>;

  async connectedCallback() {
    // Get the list header if it exists and set the id
    // this is used to set aria-labelledby
    const el = this.el;
    const header = el.querySelector('ion-list-header') || el.querySelector('ion-item-divider');
    if (header) {
      const label = header.querySelector('ion-label');
      if (label) {
        this.labelId = label.id = this.name + '-lbl';
      }
    }

    if (this.value === undefined) {
      const radio = findCheckedOption(el, 'ion-radio') as HTMLIonRadioElement | undefined;
      if (radio !== undefined) {
        await radio.componentOnReady();
        if (this.value === undefined) {
          this.value = radio.value;
        }
      }
    }

    this.mutationO = watchForOptions<HTMLIonRadioElement>(el, 'ion-radio', newOption => {
      if (newOption !== undefined) {
        newOption.componentOnReady().then(() => {
          this.value = newOption.value;
        });
      } else {
        this.updateRadios();
      }
    });
    this.updateRadios();
    this.disabledChanged();
  }

  disconnectedCallback() {
    if (this.mutationO) {
      this.mutationO.disconnect();
      this.mutationO = undefined;
    }
  }

  private async updateRadios() {
    /**
     * Make sure we get all radios first
     * so values are up to date prior
     * to caching the radio group value
     */
    const radios = await this.getRadios();
    const { value } = this;

    let hasChecked = false;

    // Walk the DOM in reverse order, since the last selected one wins!
    for (const radio of radios) {
      if (!hasChecked && radio.value === value) {
        // correct value for this radio
        // but this radio isn't checked yet
        // and we haven't found a checked yet
        hasChecked = true;
        radio.checked = true;
      } else {
        // this radio doesn't have the correct value
        // or the radio group has been already checked
        radio.checked = false;
      }
    }

    // Reset value if
    if (!hasChecked) {
      this.value = undefined;
    }
  }

  private getRadios() {
    return Promise.all(
      Array
        .from(this.el.querySelectorAll('ion-radio'))
        .map(r => r.componentOnReady())
    );
  }

  private onSelect = (ev: Event) => {
    const selectedRadio = ev.target as HTMLIonRadioElement | null;
    if (selectedRadio) {
      this.value = selectedRadio.value;
    }
  }

  private onDeselect = (ev: Event) => {
    const selectedRadio = ev.target as HTMLIonRadioElement | null;
    if (selectedRadio) {
      selectedRadio.checked = false;
      this.value = undefined;
    }
  }

  render() {
    return (
      <Host
        role="radiogroup"
        aria-labelledby={this.labelId}
        onIonSelect={this.onSelect}
        onIonDeselect={this.allowEmptySelection ? this.onDeselect : undefined}
        class={getIonMode(this)}
      >
      </Host>
    );
  }
}

let radioGroupIds = 0;
