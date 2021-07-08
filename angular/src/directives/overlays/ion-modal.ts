/* eslint-disable */
/* tslint:disable */
import { ChangeDetectionStrategy, ChangeDetectorRef, Component, ContentChild, ElementRef, EventEmitter, NgZone, TemplateRef } from "@angular/core";
import { ProxyCmp, proxyOutputs } from "../proxies-utils";
import { Components } from "@ionic/core";
export declare interface IonModal extends Components.IonModal {
}
@ProxyCmp({ inputs: ["animated", "backdropDismiss", "cssClass", "enterAnimation", "event", "isOpen", "keyboardClose", "leaveAnimation", "mode", "presentingElement", "showBackdrop", "swipeToClose", "translucent", "trigger"], "methods": ["present", "dismiss", "onDidDismiss", "onWillDismiss"] })
@Component({ selector: "ion-modal", changeDetection: ChangeDetectionStrategy.OnPush, template: `<ng-container [ngTemplateOutlet]="template" *ngIf="isCmpOpen"></ng-container>`, inputs: ["animated", "backdropDismiss", "cssClass", "enterAnimation", "event", "isOpen", "keyboardClose", "leaveAnimation", "mode", "presentingElement", "showBackdrop", "swipeToClose", "translucent", "trigger"] })
export class IonModal {
  @ContentChild(TemplateRef, { static: false }) template: TemplateRef<any>;

  ionModalDidPresent!: EventEmitter<CustomEvent>;
  ionModalWillPresent!: EventEmitter<CustomEvent>;
  ionModalWillDismiss!: EventEmitter<CustomEvent>;
  ionModalDidDismiss!: EventEmitter<CustomEvent>;
  didPresent!: EventEmitter<CustomEvent>;
  willPresent!: EventEmitter<CustomEvent>;
  willDismiss!: EventEmitter<CustomEvent>;
  didDismiss!: EventEmitter<CustomEvent>;
  isCmpOpen: boolean = false;

  protected el: HTMLElement;
  constructor(c: ChangeDetectorRef, r: ElementRef, protected z: NgZone) {
    c.detach();
    this.el = r.nativeElement;

    this.el.addEventListener('willPresent', () => {
      this.isCmpOpen = true;
      c.detectChanges();
    });
    this.el.addEventListener('didDismiss', () => {
      this.isCmpOpen = false;
      c.detectChanges();
    });

    proxyOutputs(this, this.el, ["ionModalDidPresent", "ionModalWillPresent", "ionModalWillDismiss", "ionModalDidDismiss", "didPresent", "willPresent", "willDismiss", "didDismiss"]);
  }
}
