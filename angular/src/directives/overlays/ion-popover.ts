/* eslint-disable */
/* tslint:disable */
import { ChangeDetectionStrategy, ChangeDetectorRef, Component, ContentChild, ElementRef, EventEmitter, NgZone, TemplateRef } from "@angular/core";
import { ProxyCmp, proxyOutputs } from "../proxies-utils";
import { Components } from "@ionic/core";
export declare interface IonPopover extends Components.IonPopover {
}
@ProxyCmp({ inputs: ["alignment", "animated", "arrow", "backdropDismiss", "cssClass", "dismissOnSelect", "enterAnimation", "event", "isOpen", "keyboardClose", "leaveAnimation", "mode", "showBackdrop", "translucent", "trigger", "triggerAction", "reference", "size"], "methods": ["present", "dismiss", "onDidDismiss", "onWillDismiss"] })
@Component({ selector: "ion-popover", changeDetection: ChangeDetectionStrategy.OnPush, template: `<ng-container [ngTemplateOutlet]="template" *ngIf="isCmpOpen"></ng-container>`, inputs: ["alignment", "animated", "arrow", "backdropDismiss", "cssClass", "dismissOnSelect", "enterAnimation", "event", "isOpen", "keyboardClose", "leaveAnimation", "mode", "showBackdrop", "translucent", "trigger", "triggerAction", "reference", "size"] })
export class IonPopover {
  @ContentChild(TemplateRef, { static: false }) template: TemplateRef<any>;

  ionPopoverDidPresent!: EventEmitter<CustomEvent>;
  ionPopoverWillPresent!: EventEmitter<CustomEvent>;
  ionPopoverWillDismiss!: EventEmitter<CustomEvent>;
  ionPopoverDidDismiss!: EventEmitter<CustomEvent>;
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

    proxyOutputs(this, this.el, ["ionPopoverDidPresent", "ionPopoverWillPresent", "ionPopoverWillDismiss", "ionPopoverDidDismiss", "didPresent", "willPresent", "willDismiss", "didDismiss"]);
  }
}
