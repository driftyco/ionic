import { Directive, ElementRef, HostListener, Injector } from '@angular/core';
import { NG_VALUE_ACCESSOR } from '@angular/forms';

import { ValueAccessor } from './value-accessor';

@Directive({
  /* tslint:disable-next-line:directive-selector */
  selector: 'ion-input:not([type=number]),ion-textarea,ion-searchbar',
  providers: [
    {
      provide: NG_VALUE_ACCESSOR,
      useExisting: TextValueAccessor,
      multi: true
    }
  ],
  host: {
    '[attr.ion-ng-state-sync]': '((_ngControl?.dirty !== _controlState.dirty || _ngControl?.touched !== _controlState.touched) && _syncControlState()) || null'
  }
})
export class TextValueAccessor extends ValueAccessor {

  constructor(injector: Injector, el: ElementRef) {
    super(injector, el);
  }

  @HostListener('ionChange', ['$event.target'])
  _handleInputEvent(el: any) {
    this.handleChangeEvent(el, el.value);
  }
}
