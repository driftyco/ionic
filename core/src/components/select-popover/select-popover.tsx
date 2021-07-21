import { Component, ComponentInterface, Host, Listen, Prop, h } from '@stencil/core';

import { getIonMode } from '../../global/ionic-global';
import { SelectPopoverOption } from '../../interface';
import { safeCall } from '../../utils/overlays';
import { getClassMap } from '../../utils/theme';

/**
 * @internal
 */
@Component({
  tag: 'ion-select-popover',
  styleUrl: 'select-popover.scss',
  scoped: true
})
export class SelectPopover implements ComponentInterface {

  /** Header text for the popover */
  @Prop() header?: string;

  /** Subheader text for the popover */
  @Prop() subHeader?: string;

  /** Text for popover body */
  @Prop() message?: string;

  /** Array of options for the popover */
  @Prop() options: SelectPopoverOption[] = [];

  /**
   * If `true`, the radios can be deselected.
   */
  @Prop() allowEmptySelection = false;

  @Listen('ionChange')
  onSelect(ev: any) {
    const option = this.options.find(o => o.value === ev.target.value);
    if (option) {
      safeCall(option.handler);
    }
  }

  render() {
    const checkedOption = this.options.find(o => o.checked);
    const checkedValue = checkedOption ? checkedOption.value : undefined;
    return (
      <Host class={getIonMode(this)}>
        <ion-list>
          {this.header !== undefined && <ion-list-header>{this.header}</ion-list-header>}
          { (this.subHeader !== undefined || this.message !== undefined) &&
            <ion-item>
              <ion-label class="ion-text-wrap">
                {this.subHeader !== undefined && <h3>{this.subHeader}</h3>}
                {this.message !== undefined && <p>{this.message}</p>}
              </ion-label>
            </ion-item>
          }
          <ion-radio-group value={checkedValue} allowEmptySelection={allowEmptySelection}>
            {this.options.map(option =>
              <ion-item class={getClassMap(option.cssClass)}>
                <ion-label>
                  {option.text}
                </ion-label>
                <ion-radio
                  value={option.value}
                  disabled={option.disabled}
                >
                </ion-radio>
              </ion-item>
            )}
          </ion-radio-group>
        </ion-list>
      </Host>
    );
  }
}
