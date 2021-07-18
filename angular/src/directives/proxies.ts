/* eslint-disable */
/* tslint:disable */
/* auto-generated angular directive proxies */
import { ChangeDetectionStrategy, ChangeDetectorRef, Component, ElementRef, EventEmitter, NgZone } from "@angular/core";
import { ProxyCmp, proxyOutputs } from "./proxies-utils";
import { Components } from "@ionic/core";
export declare interface IonApp extends Components.IonApp {
}
@Component({ selector: "ion-app", changeDetection: ChangeDetectionStrategy.OnPush, template: "<ng-content></ng-content>" })
export class IonApp {
  protected el: HTMLElement;
  constructor(c: ChangeDetectorRef, r: ElementRef, protected z: NgZone) {
    c.detach();
    this.el = r.nativeElement;
  }
}
export declare interface IonAvatar extends Components.IonAvatar {
}
@Component({ selector: "ion-avatar", changeDetection: ChangeDetectionStrategy.OnPush, template: "<ng-content></ng-content>" })
export class IonAvatar {
  protected el: HTMLElement;
  constructor(c: ChangeDetectorRef, r: ElementRef, protected z: NgZone) {
    c.detach();
    this.el = r.nativeElement;
  }
}
export declare interface IonBackButton extends Components.IonBackButton {
}
@ProxyCmp({ inputs: ["color", "defaultHref", "disabled", "icon", "mode", "routerAnimation", "text", "type"] })
@Component({ selector: "ion-back-button", changeDetection: ChangeDetectionStrategy.OnPush, template: "<ng-content></ng-content>", inputs: ["color", "defaultHref", "disabled", "icon", "mode", "routerAnimation", "text", "type"] })
export class IonBackButton {
  protected el: HTMLElement;
  constructor(c: ChangeDetectorRef, r: ElementRef, protected z: NgZone) {
    c.detach();
    this.el = r.nativeElement;
  }
}
export declare interface IonBackdrop extends Components.IonBackdrop {
}
@ProxyCmp({ inputs: ["stopPropagation", "tappable", "visible"] })
@Component({ selector: "ion-backdrop", changeDetection: ChangeDetectionStrategy.OnPush, template: "<ng-content></ng-content>", inputs: ["stopPropagation", "tappable", "visible"] })
export class IonBackdrop {
  ionBackdropTap!: EventEmitter<CustomEvent>;
  protected el: HTMLElement;
  constructor(c: ChangeDetectorRef, r: ElementRef, protected z: NgZone) {
    c.detach();
    this.el = r.nativeElement;
    proxyOutputs(this, this.el, ["ionBackdropTap"]);
  }
}
export declare interface IonBadge extends Components.IonBadge {
}
@ProxyCmp({ inputs: ["color", "mode"] })
@Component({ selector: "ion-badge", changeDetection: ChangeDetectionStrategy.OnPush, template: "<ng-content></ng-content>", inputs: ["color", "mode"] })
export class IonBadge {
  protected el: HTMLElement;
  constructor(c: ChangeDetectorRef, r: ElementRef, protected z: NgZone) {
    c.detach();
    this.el = r.nativeElement;
  }
}
export declare interface IonButton extends Components.IonButton {
}
@ProxyCmp({ inputs: ["buttonType", "color", "disabled", "download", "expand", "fill", "form", "href", "mode", "rel", "routerAnimation", "routerDirection", "shape", "size", "strong", "target", "type"] })
@Component({ selector: "ion-button", changeDetection: ChangeDetectionStrategy.OnPush, template: "<ng-content></ng-content>", inputs: ["buttonType", "color", "disabled", "download", "expand", "fill", "form", "href", "mode", "rel", "routerAnimation", "routerDirection", "shape", "size", "strong", "target", "type"] })
export class IonButton {
  ionFocus!: EventEmitter<CustomEvent>;
  ionBlur!: EventEmitter<CustomEvent>;
  protected el: HTMLElement;
  constructor(c: ChangeDetectorRef, r: ElementRef, protected z: NgZone) {
    c.detach();
    this.el = r.nativeElement;
    proxyOutputs(this, this.el, ["ionFocus", "ionBlur"]);
  }
}
export declare interface IonButtons extends Components.IonButtons {
}
@ProxyCmp({ inputs: ["collapse"] })
@Component({ selector: "ion-buttons", changeDetection: ChangeDetectionStrategy.OnPush, template: "<ng-content></ng-content>", inputs: ["collapse"] })
export class IonButtons {
  protected el: HTMLElement;
  constructor(c: ChangeDetectorRef, r: ElementRef, protected z: NgZone) {
    c.detach();
    this.el = r.nativeElement;
  }
}
export declare interface IonCard extends Components.IonCard {
}
@ProxyCmp({ inputs: ["button", "color", "disabled", "download", "href", "mode", "rel", "routerAnimation", "routerDirection", "target", "type"] })
@Component({ selector: "ion-card", changeDetection: ChangeDetectionStrategy.OnPush, template: "<ng-content></ng-content>", inputs: ["button", "color", "disabled", "download", "href", "mode", "rel", "routerAnimation", "routerDirection", "target", "type"] })
export class IonCard {
  protected el: HTMLElement;
  constructor(c: ChangeDetectorRef, r: ElementRef, protected z: NgZone) {
    c.detach();
    this.el = r.nativeElement;
  }
}
export declare interface IonCardContent extends Components.IonCardContent {
}
@ProxyCmp({ inputs: ["mode"] })
@Component({ selector: "ion-card-content", changeDetection: ChangeDetectionStrategy.OnPush, template: "<ng-content></ng-content>", inputs: ["mode"] })
export class IonCardContent {
  protected el: HTMLElement;
  constructor(c: ChangeDetectorRef, r: ElementRef, protected z: NgZone) {
    c.detach();
    this.el = r.nativeElement;
  }
}
export declare interface IonCardHeader extends Components.IonCardHeader {
}
@ProxyCmp({ inputs: ["color", "mode", "translucent"] })
@Component({ selector: "ion-card-header", changeDetection: ChangeDetectionStrategy.OnPush, template: "<ng-content></ng-content>", inputs: ["color", "mode", "translucent"] })
export class IonCardHeader {
  protected el: HTMLElement;
  constructor(c: ChangeDetectorRef, r: ElementRef, protected z: NgZone) {
    c.detach();
    this.el = r.nativeElement;
  }
}
export declare interface IonCardSubtitle extends Components.IonCardSubtitle {
}
@ProxyCmp({ inputs: ["color", "mode"] })
@Component({ selector: "ion-card-subtitle", changeDetection: ChangeDetectionStrategy.OnPush, template: "<ng-content></ng-content>", inputs: ["color", "mode"] })
export class IonCardSubtitle {
  protected el: HTMLElement;
  constructor(c: ChangeDetectorRef, r: ElementRef, protected z: NgZone) {
    c.detach();
    this.el = r.nativeElement;
  }
}
export declare interface IonCardTitle extends Components.IonCardTitle {
}
@ProxyCmp({ inputs: ["color", "mode"] })
@Component({ selector: "ion-card-title", changeDetection: ChangeDetectionStrategy.OnPush, template: "<ng-content></ng-content>", inputs: ["color", "mode"] })
export class IonCardTitle {
  protected el: HTMLElement;
  constructor(c: ChangeDetectorRef, r: ElementRef, protected z: NgZone) {
    c.detach();
    this.el = r.nativeElement;
  }
}
export declare interface IonCheckbox extends Components.IonCheckbox {
}
@ProxyCmp({ inputs: ["checked", "color", "disabled", "indeterminate", "mode", "name", "value"] })
@Component({ selector: "ion-checkbox", changeDetection: ChangeDetectionStrategy.OnPush, template: "<ng-content></ng-content>", inputs: ["checked", "color", "disabled", "indeterminate", "mode", "name", "value"] })
export class IonCheckbox {
  ionChange!: EventEmitter<CustomEvent>;
  ionFocus!: EventEmitter<CustomEvent>;
  ionBlur!: EventEmitter<CustomEvent>;
  protected el: HTMLElement;
  constructor(c: ChangeDetectorRef, r: ElementRef, protected z: NgZone) {
    c.detach();
    this.el = r.nativeElement;
    proxyOutputs(this, this.el, ["ionChange", "ionFocus", "ionBlur"]);
  }
}
export declare interface IonChip extends Components.IonChip {
}
@ProxyCmp({ inputs: ["color", "disabled", "mode", "outline"] })
@Component({ selector: "ion-chip", changeDetection: ChangeDetectionStrategy.OnPush, template: "<ng-content></ng-content>", inputs: ["color", "disabled", "mode", "outline"] })
export class IonChip {
  protected el: HTMLElement;
  constructor(c: ChangeDetectorRef, r: ElementRef, protected z: NgZone) {
    c.detach();
    this.el = r.nativeElement;
  }
}
export declare interface IonCol extends Components.IonCol {
}
@ProxyCmp({ inputs: ["offset", "offsetLg", "offsetMd", "offsetSm", "offsetXl", "offsetXs", "pull", "pullLg", "pullMd", "pullSm", "pullXl", "pullXs", "push", "pushLg", "pushMd", "pushSm", "pushXl", "pushXs", "size", "sizeLg", "sizeMd", "sizeSm", "sizeXl", "sizeXs"] })
@Component({ selector: "ion-col", changeDetection: ChangeDetectionStrategy.OnPush, template: "<ng-content></ng-content>", inputs: ["offset", "offsetLg", "offsetMd", "offsetSm", "offsetXl", "offsetXs", "pull", "pullLg", "pullMd", "pullSm", "pullXl", "pullXs", "push", "pushLg", "pushMd", "pushSm", "pushXl", "pushXs", "size", "sizeLg", "sizeMd", "sizeSm", "sizeXl", "sizeXs"] })
export class IonCol {
  protected el: HTMLElement;
  constructor(c: ChangeDetectorRef, r: ElementRef, protected z: NgZone) {
    c.detach();
    this.el = r.nativeElement;
  }
}
export declare interface IonContent extends Components.IonContent {
}
@ProxyCmp({ inputs: ["color", "forceOverscroll", "fullscreen", "scrollEvents", "scrollX", "scrollY"], "methods": ["getScrollElement", "scrollToTop", "scrollToBottom", "scrollByPoint", "scrollToPoint"] })
@Component({ selector: "ion-content", changeDetection: ChangeDetectionStrategy.OnPush, template: "<ng-content></ng-content>", inputs: ["color", "forceOverscroll", "fullscreen", "scrollEvents", "scrollX", "scrollY"] })
export class IonContent {
  ionScrollStart!: EventEmitter<CustomEvent>;
  ionScroll!: EventEmitter<CustomEvent>;
  ionScrollEnd!: EventEmitter<CustomEvent>;
  protected el: HTMLElement;
  constructor(c: ChangeDetectorRef, r: ElementRef, protected z: NgZone) {
    c.detach();
    this.el = r.nativeElement;
    proxyOutputs(this, this.el, ["ionScrollStart", "ionScroll", "ionScrollEnd"]);
  }
}
export declare interface IonDatetime extends Components.IonDatetime {
}
@ProxyCmp({ inputs: ["cancelText", "dayNames", "dayShortNames", "dayValues", "disabled", "displayFormat", "displayTimezone", "doneText", "hourValues", "max", "min", "minuteValues", "mode", "monthNames", "monthShortNames", "monthValues", "name", "pickerFormat", "pickerOptions", "placeholder", "readonly", "value", "yearValues"], "methods": ["open"] })
@Component({ selector: "ion-datetime", changeDetection: ChangeDetectionStrategy.OnPush, template: "<ng-content></ng-content>", inputs: ["cancelText", "dayNames", "dayShortNames", "dayValues", "disabled", "displayFormat", "displayTimezone", "doneText", "hourValues", "max", "min", "minuteValues", "mode", "monthNames", "monthShortNames", "monthValues", "name", "pickerFormat", "pickerOptions", "placeholder", "readonly", "value", "yearValues"] })
export class IonDatetime {
  ionCancel!: EventEmitter<CustomEvent>;
  ionChange!: EventEmitter<CustomEvent>;
  ionFocus!: EventEmitter<CustomEvent>;
  ionBlur!: EventEmitter<CustomEvent>;
  protected el: HTMLElement;
  constructor(c: ChangeDetectorRef, r: ElementRef, protected z: NgZone) {
    c.detach();
    this.el = r.nativeElement;
    proxyOutputs(this, this.el, ["ionCancel", "ionChange", "ionFocus", "ionBlur"]);
  }
}
export declare interface IonFab extends Components.IonFab {
}
@ProxyCmp({ inputs: ["activated", "edge", "horizontal", "vertical"], "methods": ["close"] })
@Component({ selector: "ion-fab", changeDetection: ChangeDetectionStrategy.OnPush, template: "<ng-content></ng-content>", inputs: ["activated", "edge", "horizontal", "vertical"] })
export class IonFab {
  protected el: HTMLElement;
  constructor(c: ChangeDetectorRef, r: ElementRef, protected z: NgZone) {
    c.detach();
    this.el = r.nativeElement;
  }
}
export declare interface IonFabButton extends Components.IonFabButton {
}
@ProxyCmp({ inputs: ["activated", "closeIcon", "color", "disabled", "download", "href", "mode", "rel", "routerAnimation", "routerDirection", "show", "size", "target", "translucent", "type"] })
@Component({ selector: "ion-fab-button", changeDetection: ChangeDetectionStrategy.OnPush, template: "<ng-content></ng-content>", inputs: ["activated", "closeIcon", "color", "disabled", "download", "href", "mode", "rel", "routerAnimation", "routerDirection", "show", "size", "target", "translucent", "type"] })
export class IonFabButton {
  ionFocus!: EventEmitter<CustomEvent>;
  ionBlur!: EventEmitter<CustomEvent>;
  protected el: HTMLElement;
  constructor(c: ChangeDetectorRef, r: ElementRef, protected z: NgZone) {
    c.detach();
    this.el = r.nativeElement;
    proxyOutputs(this, this.el, ["ionFocus", "ionBlur"]);
  }
}
export declare interface IonFabList extends Components.IonFabList {
}
@ProxyCmp({ inputs: ["activated", "side"] })
@Component({ selector: "ion-fab-list", changeDetection: ChangeDetectionStrategy.OnPush, template: "<ng-content></ng-content>", inputs: ["activated", "side"] })
export class IonFabList {
  protected el: HTMLElement;
  constructor(c: ChangeDetectorRef, r: ElementRef, protected z: NgZone) {
    c.detach();
    this.el = r.nativeElement;
  }
}
export declare interface IonFooter extends Components.IonFooter {
}
@ProxyCmp({ inputs: ["mode", "translucent"] })
@Component({ selector: "ion-footer", changeDetection: ChangeDetectionStrategy.OnPush, template: "<ng-content></ng-content>", inputs: ["mode", "translucent"] })
export class IonFooter {
  protected el: HTMLElement;
  constructor(c: ChangeDetectorRef, r: ElementRef, protected z: NgZone) {
    c.detach();
    this.el = r.nativeElement;
  }
}
export declare interface IonGrid extends Components.IonGrid {
}
@ProxyCmp({ inputs: ["fixed"] })
@Component({ selector: "ion-grid", changeDetection: ChangeDetectionStrategy.OnPush, template: "<ng-content></ng-content>", inputs: ["fixed"] })
export class IonGrid {
  protected el: HTMLElement;
  constructor(c: ChangeDetectorRef, r: ElementRef, protected z: NgZone) {
    c.detach();
    this.el = r.nativeElement;
  }
}
export declare interface IonHeader extends Components.IonHeader {
}
@ProxyCmp({ inputs: ["collapse", "mode", "translucent"] })
@Component({ selector: "ion-header", changeDetection: ChangeDetectionStrategy.OnPush, template: "<ng-content></ng-content>", inputs: ["collapse", "mode", "translucent"] })
export class IonHeader {
  protected el: HTMLElement;
  constructor(c: ChangeDetectorRef, r: ElementRef, protected z: NgZone) {
    c.detach();
    this.el = r.nativeElement;
  }
}
export declare interface IonIcon extends Components.IonIcon {
}
@ProxyCmp({ inputs: ["ariaHidden", "ariaLabel", "color", "flipRtl", "icon", "ios", "lazy", "md", "mode", "name", "sanitize", "size", "src"] })
@Component({ selector: "ion-icon", changeDetection: ChangeDetectionStrategy.OnPush, template: "<ng-content></ng-content>", inputs: ["ariaHidden", "ariaLabel", "color", "flipRtl", "icon", "ios", "lazy", "md", "mode", "name", "sanitize", "size", "src"] })
export class IonIcon {
  protected el: HTMLElement;
  constructor(c: ChangeDetectorRef, r: ElementRef, protected z: NgZone) {
    c.detach();
    this.el = r.nativeElement;
  }
}
export declare interface IonImg extends Components.IonImg {
}
@ProxyCmp({ inputs: ["alt", "src"] })
@Component({ selector: "ion-img", changeDetection: ChangeDetectionStrategy.OnPush, template: "<ng-content></ng-content>", inputs: ["alt", "src"] })
export class IonImg {
  ionImgWillLoad!: EventEmitter<CustomEvent>;
  ionImgDidLoad!: EventEmitter<CustomEvent>;
  ionError!: EventEmitter<CustomEvent>;
  protected el: HTMLElement;
  constructor(c: ChangeDetectorRef, r: ElementRef, protected z: NgZone) {
    c.detach();
    this.el = r.nativeElement;
    proxyOutputs(this, this.el, ["ionImgWillLoad", "ionImgDidLoad", "ionError"]);
  }
}
export declare interface IonInfiniteScroll extends Components.IonInfiniteScroll {
}
@ProxyCmp({ inputs: ["disabled", "position", "threshold"], "methods": ["complete"] })
@Component({ selector: "ion-infinite-scroll", changeDetection: ChangeDetectionStrategy.OnPush, template: "<ng-content></ng-content>", inputs: ["disabled", "position", "threshold"] })
export class IonInfiniteScroll {
  ionInfinite!: EventEmitter<CustomEvent>;
  protected el: HTMLElement;
  constructor(c: ChangeDetectorRef, r: ElementRef, protected z: NgZone) {
    c.detach();
    this.el = r.nativeElement;
    proxyOutputs(this, this.el, ["ionInfinite"]);
  }
}
export declare interface IonInfiniteScrollContent extends Components.IonInfiniteScrollContent {
}
@ProxyCmp({ inputs: ["loadingSpinner", "loadingText"] })
@Component({ selector: "ion-infinite-scroll-content", changeDetection: ChangeDetectionStrategy.OnPush, template: "<ng-content></ng-content>", inputs: ["loadingSpinner", "loadingText"] })
export class IonInfiniteScrollContent {
  protected el: HTMLElement;
  constructor(c: ChangeDetectorRef, r: ElementRef, protected z: NgZone) {
    c.detach();
    this.el = r.nativeElement;
  }
}
export declare interface IonInput extends Components.IonInput {
}
@ProxyCmp({ inputs: ["accept", "autocapitalize", "autocomplete", "autocorrect", "autofocus", "clearInput", "clearOnEdit", "color", "debounce", "disabled", "enterkeyhint", "inputmode", "max", "maxlength", "min", "minlength", "mode", "multiple", "name", "pattern", "placeholder", "readonly", "required", "size", "spellcheck", "step", "type", "value"], "methods": ["setFocus", "getInputElement"] })
@Component({ selector: "ion-input", changeDetection: ChangeDetectionStrategy.OnPush, template: "<ng-content></ng-content>", inputs: ["accept", "autocapitalize", "autocomplete", "autocorrect", "autofocus", "clearInput", "clearOnEdit", "color", "debounce", "disabled", "enterkeyhint", "inputmode", "max", "maxlength", "min", "minlength", "mode", "multiple", "name", "pattern", "placeholder", "readonly", "required", "size", "spellcheck", "step", "type", "value"] })
export class IonInput {
  ionInput!: EventEmitter<CustomEvent>;
  ionChange!: EventEmitter<CustomEvent>;
  ionBlur!: EventEmitter<CustomEvent>;
  ionFocus!: EventEmitter<CustomEvent>;
  protected el: HTMLElement;
  constructor(c: ChangeDetectorRef, r: ElementRef, protected z: NgZone) {
    c.detach();
    this.el = r.nativeElement;
    proxyOutputs(this, this.el, ["ionInput", "ionChange", "ionBlur", "ionFocus"]);
  }
}
export declare interface IonItem extends Components.IonItem {
}
@ProxyCmp({ inputs: ["button", "color", "detail", "detailIcon", "disabled", "download", "href", "lines", "mode", "rel", "routerAnimation", "routerDirection", "target", "type"] })
@Component({ selector: "ion-item", changeDetection: ChangeDetectionStrategy.OnPush, template: "<ng-content></ng-content>", inputs: ["button", "color", "detail", "detailIcon", "disabled", "download", "href", "lines", "mode", "rel", "routerAnimation", "routerDirection", "target", "type"] })
export class IonItem {
  protected el: HTMLElement;
  constructor(c: ChangeDetectorRef, r: ElementRef, protected z: NgZone) {
    c.detach();
    this.el = r.nativeElement;
  }
}
export declare interface IonItemDivider extends Components.IonItemDivider {
}
@ProxyCmp({ inputs: ["color", "mode", "sticky"] })
@Component({ selector: "ion-item-divider", changeDetection: ChangeDetectionStrategy.OnPush, template: "<ng-content></ng-content>", inputs: ["color", "mode", "sticky"] })
export class IonItemDivider {
  protected el: HTMLElement;
  constructor(c: ChangeDetectorRef, r: ElementRef, protected z: NgZone) {
    c.detach();
    this.el = r.nativeElement;
  }
}
export declare interface IonItemGroup extends Components.IonItemGroup {
}
@Component({ selector: "ion-item-group", changeDetection: ChangeDetectionStrategy.OnPush, template: "<ng-content></ng-content>" })
export class IonItemGroup {
  protected el: HTMLElement;
  constructor(c: ChangeDetectorRef, r: ElementRef, protected z: NgZone) {
    c.detach();
    this.el = r.nativeElement;
  }
}
export declare interface IonItemOption extends Components.IonItemOption {
}
@ProxyCmp({ inputs: ["color", "disabled", "download", "expandable", "href", "mode", "rel", "target", "type"] })
@Component({ selector: "ion-item-option", changeDetection: ChangeDetectionStrategy.OnPush, template: "<ng-content></ng-content>", inputs: ["color", "disabled", "download", "expandable", "href", "mode", "rel", "target", "type"] })
export class IonItemOption {
  protected el: HTMLElement;
  constructor(c: ChangeDetectorRef, r: ElementRef, protected z: NgZone) {
    c.detach();
    this.el = r.nativeElement;
  }
}
export declare interface IonItemOptions extends Components.IonItemOptions {
}
@ProxyCmp({ inputs: ["side"] })
@Component({ selector: "ion-item-options", changeDetection: ChangeDetectionStrategy.OnPush, template: "<ng-content></ng-content>", inputs: ["side"] })
export class IonItemOptions {
  ionSwipe!: EventEmitter<CustomEvent>;
  protected el: HTMLElement;
  constructor(c: ChangeDetectorRef, r: ElementRef, protected z: NgZone) {
    c.detach();
    this.el = r.nativeElement;
    proxyOutputs(this, this.el, ["ionSwipe"]);
  }
}
export declare interface IonItemSliding extends Components.IonItemSliding {
}
@ProxyCmp({ inputs: ["disabled"], "methods": ["getOpenAmount", "getSlidingRatio", "open", "close", "closeOpened"] })
@Component({ selector: "ion-item-sliding", changeDetection: ChangeDetectionStrategy.OnPush, template: "<ng-content></ng-content>", inputs: ["disabled"] })
export class IonItemSliding {
  ionDrag!: EventEmitter<CustomEvent>;
  protected el: HTMLElement;
  constructor(c: ChangeDetectorRef, r: ElementRef, protected z: NgZone) {
    c.detach();
    this.el = r.nativeElement;
    proxyOutputs(this, this.el, ["ionDrag"]);
  }
}
export declare interface IonLabel extends Components.IonLabel {
}
@ProxyCmp({ inputs: ["color", "mode", "position"] })
@Component({ selector: "ion-label", changeDetection: ChangeDetectionStrategy.OnPush, template: "<ng-content></ng-content>", inputs: ["color", "mode", "position"] })
export class IonLabel {
  protected el: HTMLElement;
  constructor(c: ChangeDetectorRef, r: ElementRef, protected z: NgZone) {
    c.detach();
    this.el = r.nativeElement;
  }
}
export declare interface IonList extends Components.IonList {
}
@ProxyCmp({ inputs: ["inset", "lines", "mode"], "methods": ["closeSlidingItems"] })
@Component({ selector: "ion-list", changeDetection: ChangeDetectionStrategy.OnPush, template: "<ng-content></ng-content>", inputs: ["inset", "lines", "mode"] })
export class IonList {
  protected el: HTMLElement;
  constructor(c: ChangeDetectorRef, r: ElementRef, protected z: NgZone) {
    c.detach();
    this.el = r.nativeElement;
  }
}
export declare interface IonListHeader extends Components.IonListHeader {
}
@ProxyCmp({ inputs: ["color", "lines", "mode"] })
@Component({ selector: "ion-list-header", changeDetection: ChangeDetectionStrategy.OnPush, template: "<ng-content></ng-content>", inputs: ["color", "lines", "mode"] })
export class IonListHeader {
  protected el: HTMLElement;
  constructor(c: ChangeDetectorRef, r: ElementRef, protected z: NgZone) {
    c.detach();
    this.el = r.nativeElement;
  }
}
export declare interface IonMenu extends Components.IonMenu {
}
@ProxyCmp({ inputs: ["contentId", "disabled", "maxEdgeStart", "menuId", "side", "swipeGesture", "type"], "methods": ["isOpen", "isActive", "open", "close", "toggle", "setOpen"] })
@Component({ selector: "ion-menu", changeDetection: ChangeDetectionStrategy.OnPush, template: "<ng-content></ng-content>", inputs: ["contentId", "disabled", "maxEdgeStart", "menuId", "side", "swipeGesture", "type"] })
export class IonMenu {
  ionWillOpen!: EventEmitter<CustomEvent>;
  ionWillClose!: EventEmitter<CustomEvent>;
  ionDidOpen!: EventEmitter<CustomEvent>;
  ionDidClose!: EventEmitter<CustomEvent>;
  protected el: HTMLElement;
  constructor(c: ChangeDetectorRef, r: ElementRef, protected z: NgZone) {
    c.detach();
    this.el = r.nativeElement;
    proxyOutputs(this, this.el, ["ionWillOpen", "ionWillClose", "ionDidOpen", "ionDidClose"]);
  }
}
export declare interface IonMenuButton extends Components.IonMenuButton {
}
@ProxyCmp({ inputs: ["autoHide", "color", "disabled", "menu", "mode", "type"] })
@Component({ selector: "ion-menu-button", changeDetection: ChangeDetectionStrategy.OnPush, template: "<ng-content></ng-content>", inputs: ["autoHide", "color", "disabled", "menu", "mode", "type"] })
export class IonMenuButton {
  protected el: HTMLElement;
  constructor(c: ChangeDetectorRef, r: ElementRef, protected z: NgZone) {
    c.detach();
    this.el = r.nativeElement;
  }
}
export declare interface IonMenuToggle extends Components.IonMenuToggle {
}
@ProxyCmp({ inputs: ["autoHide", "menu"] })
@Component({ selector: "ion-menu-toggle", changeDetection: ChangeDetectionStrategy.OnPush, template: "<ng-content></ng-content>", inputs: ["autoHide", "menu"] })
export class IonMenuToggle {
  protected el: HTMLElement;
  constructor(c: ChangeDetectorRef, r: ElementRef, protected z: NgZone) {
    c.detach();
    this.el = r.nativeElement;
  }
}
export declare interface IonNav extends Components.IonNav {
}
@ProxyCmp({ inputs: ["animated", "animation", "root", "rootParams", "swipeGesture"], "methods": ["push", "insert", "insertPages", "pop", "popTo", "popToRoot", "removeIndex", "setRoot", "setPages", "getActive", "getByIndex", "canGoBack", "getPrevious"] })
@Component({ selector: "ion-nav", changeDetection: ChangeDetectionStrategy.OnPush, template: "<ng-content></ng-content>", inputs: ["animated", "animation", "root", "rootParams", "swipeGesture"] })
export class IonNav {
  ionNavWillChange!: EventEmitter<CustomEvent>;
  ionNavDidChange!: EventEmitter<CustomEvent>;
  protected el: HTMLElement;
  constructor(c: ChangeDetectorRef, r: ElementRef, protected z: NgZone) {
    c.detach();
    this.el = r.nativeElement;
    proxyOutputs(this, this.el, ["ionNavWillChange", "ionNavDidChange"]);
  }
}
export declare interface IonNavLink extends Components.IonNavLink {
}
@ProxyCmp({ inputs: ["component", "componentProps", "routerAnimation", "routerDirection"] })
@Component({ selector: "ion-nav-link", changeDetection: ChangeDetectionStrategy.OnPush, template: "<ng-content></ng-content>", inputs: ["component", "componentProps", "routerAnimation", "routerDirection"] })
export class IonNavLink {
  protected el: HTMLElement;
  constructor(c: ChangeDetectorRef, r: ElementRef, protected z: NgZone) {
    c.detach();
    this.el = r.nativeElement;
  }
}
export declare interface IonNote extends Components.IonNote {
}
@ProxyCmp({ inputs: ["color", "mode"] })
@Component({ selector: "ion-note", changeDetection: ChangeDetectionStrategy.OnPush, template: "<ng-content></ng-content>", inputs: ["color", "mode"] })
export class IonNote {
  protected el: HTMLElement;
  constructor(c: ChangeDetectorRef, r: ElementRef, protected z: NgZone) {
    c.detach();
    this.el = r.nativeElement;
  }
}
export declare interface IonProgressBar extends Components.IonProgressBar {
}
@ProxyCmp({ inputs: ["buffer", "color", "mode", "reversed", "type", "value"] })
@Component({ selector: "ion-progress-bar", changeDetection: ChangeDetectionStrategy.OnPush, template: "<ng-content></ng-content>", inputs: ["buffer", "color", "mode", "reversed", "type", "value"] })
export class IonProgressBar {
  protected el: HTMLElement;
  constructor(c: ChangeDetectorRef, r: ElementRef, protected z: NgZone) {
    c.detach();
    this.el = r.nativeElement;
  }
}
export declare interface IonRadio extends Components.IonRadio {
}
@ProxyCmp({ inputs: ["color", "disabled", "mode", "name", "value"] })
@Component({ selector: "ion-radio", changeDetection: ChangeDetectionStrategy.OnPush, template: "<ng-content></ng-content>", inputs: ["color", "disabled", "mode", "name", "value"] })
export class IonRadio {
  ionFocus!: EventEmitter<CustomEvent>;
  ionBlur!: EventEmitter<CustomEvent>;
  protected el: HTMLElement;
  constructor(c: ChangeDetectorRef, r: ElementRef, protected z: NgZone) {
    c.detach();
    this.el = r.nativeElement;
    proxyOutputs(this, this.el, ["ionFocus", "ionBlur"]);
  }
}
export declare interface IonRadioGroup extends Components.IonRadioGroup {
}
@ProxyCmp({ inputs: ["allowEmptySelection", "name", "value"] })
@Component({ selector: "ion-radio-group", changeDetection: ChangeDetectionStrategy.OnPush, template: "<ng-content></ng-content>", inputs: ["allowEmptySelection", "name", "value"] })
export class IonRadioGroup {
  ionChange!: EventEmitter<CustomEvent>;
  protected el: HTMLElement;
  constructor(c: ChangeDetectorRef, r: ElementRef, protected z: NgZone) {
    c.detach();
    this.el = r.nativeElement;
    proxyOutputs(this, this.el, ["ionChange"]);
  }
}
export declare interface IonRange extends Components.IonRange {
}
@ProxyCmp({ inputs: ["color", "debounce", "disabled", "dualKnobs", "max", "min", "mode", "name", "pin", "snaps", "step", "ticks", "value"] })
@Component({ selector: "ion-range", changeDetection: ChangeDetectionStrategy.OnPush, template: "<ng-content></ng-content>", inputs: ["color", "debounce", "disabled", "dualKnobs", "max", "min", "mode", "name", "pin", "snaps", "step", "ticks", "value"] })
export class IonRange {
  ionChange!: EventEmitter<CustomEvent>;
  ionFocus!: EventEmitter<CustomEvent>;
  ionBlur!: EventEmitter<CustomEvent>;
  protected el: HTMLElement;
  constructor(c: ChangeDetectorRef, r: ElementRef, protected z: NgZone) {
    c.detach();
    this.el = r.nativeElement;
    proxyOutputs(this, this.el, ["ionChange", "ionFocus", "ionBlur"]);
  }
}
export declare interface IonRefresher extends Components.IonRefresher {
}
@ProxyCmp({ inputs: ["closeDuration", "disabled", "pullFactor", "pullMax", "pullMin", "snapbackDuration"], "methods": ["complete", "cancel", "getProgress"] })
@Component({ selector: "ion-refresher", changeDetection: ChangeDetectionStrategy.OnPush, template: "<ng-content></ng-content>", inputs: ["closeDuration", "disabled", "pullFactor", "pullMax", "pullMin", "snapbackDuration"] })
export class IonRefresher {
  ionRefresh!: EventEmitter<CustomEvent>;
  ionPull!: EventEmitter<CustomEvent>;
  ionStart!: EventEmitter<CustomEvent>;
  protected el: HTMLElement;
  constructor(c: ChangeDetectorRef, r: ElementRef, protected z: NgZone) {
    c.detach();
    this.el = r.nativeElement;
    proxyOutputs(this, this.el, ["ionRefresh", "ionPull", "ionStart"]);
  }
}
export declare interface IonRefresherContent extends Components.IonRefresherContent {
}
@ProxyCmp({ inputs: ["pullingIcon", "pullingText", "refreshingSpinner", "refreshingText"] })
@Component({ selector: "ion-refresher-content", changeDetection: ChangeDetectionStrategy.OnPush, template: "<ng-content></ng-content>", inputs: ["pullingIcon", "pullingText", "refreshingSpinner", "refreshingText"] })
export class IonRefresherContent {
  protected el: HTMLElement;
  constructor(c: ChangeDetectorRef, r: ElementRef, protected z: NgZone) {
    c.detach();
    this.el = r.nativeElement;
  }
}
export declare interface IonReorder extends Components.IonReorder {
}
@Component({ selector: "ion-reorder", changeDetection: ChangeDetectionStrategy.OnPush, template: "<ng-content></ng-content>" })
export class IonReorder {
  protected el: HTMLElement;
  constructor(c: ChangeDetectorRef, r: ElementRef, protected z: NgZone) {
    c.detach();
    this.el = r.nativeElement;
  }
}
export declare interface IonReorderGroup extends Components.IonReorderGroup {
}
@ProxyCmp({ inputs: ["disabled"], "methods": ["complete"] })
@Component({ selector: "ion-reorder-group", changeDetection: ChangeDetectionStrategy.OnPush, template: "<ng-content></ng-content>", inputs: ["disabled"] })
export class IonReorderGroup {
  ionItemReorder!: EventEmitter<CustomEvent>;
  protected el: HTMLElement;
  constructor(c: ChangeDetectorRef, r: ElementRef, protected z: NgZone) {
    c.detach();
    this.el = r.nativeElement;
    proxyOutputs(this, this.el, ["ionItemReorder"]);
  }
}
export declare interface IonRippleEffect extends Components.IonRippleEffect {
}
@ProxyCmp({ inputs: ["type"], "methods": ["addRipple"] })
@Component({ selector: "ion-ripple-effect", changeDetection: ChangeDetectionStrategy.OnPush, template: "<ng-content></ng-content>", inputs: ["type"] })
export class IonRippleEffect {
  protected el: HTMLElement;
  constructor(c: ChangeDetectorRef, r: ElementRef, protected z: NgZone) {
    c.detach();
    this.el = r.nativeElement;
  }
}
export declare interface IonRow extends Components.IonRow {
}
@Component({ selector: "ion-row", changeDetection: ChangeDetectionStrategy.OnPush, template: "<ng-content></ng-content>" })
export class IonRow {
  protected el: HTMLElement;
  constructor(c: ChangeDetectorRef, r: ElementRef, protected z: NgZone) {
    c.detach();
    this.el = r.nativeElement;
  }
}
export declare interface IonSearchbar extends Components.IonSearchbar {
}
@ProxyCmp({ inputs: ["animated", "autocomplete", "autocorrect", "cancelButtonIcon", "cancelButtonText", "clearIcon", "color", "debounce", "disabled", "enterkeyhint", "inputmode", "mode", "placeholder", "searchIcon", "showCancelButton", "showClearButton", "spellcheck", "type", "value"], "methods": ["setFocus", "getInputElement"] })
@Component({ selector: "ion-searchbar", changeDetection: ChangeDetectionStrategy.OnPush, template: "<ng-content></ng-content>", inputs: ["animated", "autocomplete", "autocorrect", "cancelButtonIcon", "cancelButtonText", "clearIcon", "color", "debounce", "disabled", "enterkeyhint", "inputmode", "mode", "placeholder", "searchIcon", "showCancelButton", "showClearButton", "spellcheck", "type", "value"] })
export class IonSearchbar {
  ionInput!: EventEmitter<CustomEvent>;
  ionChange!: EventEmitter<CustomEvent>;
  ionCancel!: EventEmitter<CustomEvent>;
  ionClear!: EventEmitter<CustomEvent>;
  ionBlur!: EventEmitter<CustomEvent>;
  ionFocus!: EventEmitter<CustomEvent>;
  protected el: HTMLElement;
  constructor(c: ChangeDetectorRef, r: ElementRef, protected z: NgZone) {
    c.detach();
    this.el = r.nativeElement;
    proxyOutputs(this, this.el, ["ionInput", "ionChange", "ionCancel", "ionClear", "ionBlur", "ionFocus"]);
  }
}
export declare interface IonSegment extends Components.IonSegment {
}
@ProxyCmp({ inputs: ["color", "disabled", "mode", "scrollable", "swipeGesture", "value"] })
@Component({ selector: "ion-segment", changeDetection: ChangeDetectionStrategy.OnPush, template: "<ng-content></ng-content>", inputs: ["color", "disabled", "mode", "scrollable", "swipeGesture", "value"] })
export class IonSegment {
  ionChange!: EventEmitter<CustomEvent>;
  protected el: HTMLElement;
  constructor(c: ChangeDetectorRef, r: ElementRef, protected z: NgZone) {
    c.detach();
    this.el = r.nativeElement;
    proxyOutputs(this, this.el, ["ionChange"]);
  }
}
export declare interface IonSegmentButton extends Components.IonSegmentButton {
}
@ProxyCmp({ inputs: ["disabled", "layout", "mode", "type", "value"] })
@Component({ selector: "ion-segment-button", changeDetection: ChangeDetectionStrategy.OnPush, template: "<ng-content></ng-content>", inputs: ["disabled", "layout", "mode", "type", "value"] })
export class IonSegmentButton {
  protected el: HTMLElement;
  constructor(c: ChangeDetectorRef, r: ElementRef, protected z: NgZone) {
    c.detach();
    this.el = r.nativeElement;
  }
}
export declare interface IonSelect extends Components.IonSelect {
}
@ProxyCmp({ inputs: ["cancelText", "compareWith", "disabled", "interface", "interfaceOptions", "mode", "multiple", "name", "okText", "placeholder", "selectedText", "value"], "methods": ["open"] })
@Component({ selector: "ion-select", changeDetection: ChangeDetectionStrategy.OnPush, template: "<ng-content></ng-content>", inputs: ["cancelText", "compareWith", "disabled", "interface", "interfaceOptions", "mode", "multiple", "name", "okText", "placeholder", "selectedText", "value"] })
export class IonSelect {
  ionChange!: EventEmitter<CustomEvent>;
  ionCancel!: EventEmitter<CustomEvent>;
  ionFocus!: EventEmitter<CustomEvent>;
  ionBlur!: EventEmitter<CustomEvent>;
  protected el: HTMLElement;
  constructor(c: ChangeDetectorRef, r: ElementRef, protected z: NgZone) {
    c.detach();
    this.el = r.nativeElement;
    proxyOutputs(this, this.el, ["ionChange", "ionCancel", "ionFocus", "ionBlur"]);
  }
}
export declare interface IonSelectOption extends Components.IonSelectOption {
}
@ProxyCmp({ inputs: ["disabled", "value"] })
@Component({ selector: "ion-select-option", changeDetection: ChangeDetectionStrategy.OnPush, template: "<ng-content></ng-content>", inputs: ["disabled", "value"] })
export class IonSelectOption {
  protected el: HTMLElement;
  constructor(c: ChangeDetectorRef, r: ElementRef, protected z: NgZone) {
    c.detach();
    this.el = r.nativeElement;
  }
}
export declare interface IonSkeletonText extends Components.IonSkeletonText {
}
@ProxyCmp({ inputs: ["animated"] })
@Component({ selector: "ion-skeleton-text", changeDetection: ChangeDetectionStrategy.OnPush, template: "<ng-content></ng-content>", inputs: ["animated"] })
export class IonSkeletonText {
  protected el: HTMLElement;
  constructor(c: ChangeDetectorRef, r: ElementRef, protected z: NgZone) {
    c.detach();
    this.el = r.nativeElement;
  }
}
export declare interface IonSlide extends Components.IonSlide {
}
@Component({ selector: "ion-slide", changeDetection: ChangeDetectionStrategy.OnPush, template: "<ng-content></ng-content>" })
export class IonSlide {
  protected el: HTMLElement;
  constructor(c: ChangeDetectorRef, r: ElementRef, protected z: NgZone) {
    c.detach();
    this.el = r.nativeElement;
  }
}
export declare interface IonSlides extends Components.IonSlides {
}
@ProxyCmp({ inputs: ["mode", "options", "pager", "scrollbar"], "methods": ["update", "updateAutoHeight", "slideTo", "slideNext", "slidePrev", "getActiveIndex", "getPreviousIndex", "length", "isEnd", "isBeginning", "startAutoplay", "stopAutoplay", "lockSwipeToNext", "lockSwipeToPrev", "lockSwipes", "getSwiper"] })
@Component({ selector: "ion-slides", changeDetection: ChangeDetectionStrategy.OnPush, template: "<ng-content></ng-content>", inputs: ["mode", "options", "pager", "scrollbar"] })
export class IonSlides {
  ionSlidesDidLoad!: EventEmitter<CustomEvent>;
  ionSlideTap!: EventEmitter<CustomEvent>;
  ionSlideDoubleTap!: EventEmitter<CustomEvent>;
  ionSlideWillChange!: EventEmitter<CustomEvent>;
  ionSlideDidChange!: EventEmitter<CustomEvent>;
  ionSlideNextStart!: EventEmitter<CustomEvent>;
  ionSlidePrevStart!: EventEmitter<CustomEvent>;
  ionSlideNextEnd!: EventEmitter<CustomEvent>;
  ionSlidePrevEnd!: EventEmitter<CustomEvent>;
  ionSlideTransitionStart!: EventEmitter<CustomEvent>;
  ionSlideTransitionEnd!: EventEmitter<CustomEvent>;
  ionSlideDrag!: EventEmitter<CustomEvent>;
  ionSlideReachStart!: EventEmitter<CustomEvent>;
  ionSlideReachEnd!: EventEmitter<CustomEvent>;
  ionSlideTouchStart!: EventEmitter<CustomEvent>;
  ionSlideTouchEnd!: EventEmitter<CustomEvent>;
  protected el: HTMLElement;
  constructor(c: ChangeDetectorRef, r: ElementRef, protected z: NgZone) {
    c.detach();
    this.el = r.nativeElement;
    proxyOutputs(this, this.el, ["ionSlidesDidLoad", "ionSlideTap", "ionSlideDoubleTap", "ionSlideWillChange", "ionSlideDidChange", "ionSlideNextStart", "ionSlidePrevStart", "ionSlideNextEnd", "ionSlidePrevEnd", "ionSlideTransitionStart", "ionSlideTransitionEnd", "ionSlideDrag", "ionSlideReachStart", "ionSlideReachEnd", "ionSlideTouchStart", "ionSlideTouchEnd"]);
  }
}
export declare interface IonSpinner extends Components.IonSpinner {
}
@ProxyCmp({ inputs: ["color", "duration", "name", "paused"] })
@Component({ selector: "ion-spinner", changeDetection: ChangeDetectionStrategy.OnPush, template: "<ng-content></ng-content>", inputs: ["color", "duration", "name", "paused"] })
export class IonSpinner {
  protected el: HTMLElement;
  constructor(c: ChangeDetectorRef, r: ElementRef, protected z: NgZone) {
    c.detach();
    this.el = r.nativeElement;
  }
}
export declare interface IonSplitPane extends Components.IonSplitPane {
}
@ProxyCmp({ inputs: ["contentId", "disabled", "when"] })
@Component({ selector: "ion-split-pane", changeDetection: ChangeDetectionStrategy.OnPush, template: "<ng-content></ng-content>", inputs: ["contentId", "disabled", "when"] })
export class IonSplitPane {
  ionSplitPaneVisible!: EventEmitter<CustomEvent>;
  protected el: HTMLElement;
  constructor(c: ChangeDetectorRef, r: ElementRef, protected z: NgZone) {
    c.detach();
    this.el = r.nativeElement;
    proxyOutputs(this, this.el, ["ionSplitPaneVisible"]);
  }
}
export declare interface IonTabBar extends Components.IonTabBar {
}
@ProxyCmp({ inputs: ["color", "mode", "selectedTab", "translucent"] })
@Component({ selector: "ion-tab-bar", changeDetection: ChangeDetectionStrategy.OnPush, template: "<ng-content></ng-content>", inputs: ["color", "mode", "selectedTab", "translucent"] })
export class IonTabBar {
  protected el: HTMLElement;
  constructor(c: ChangeDetectorRef, r: ElementRef, protected z: NgZone) {
    c.detach();
    this.el = r.nativeElement;
  }
}
export declare interface IonTabButton extends Components.IonTabButton {
}
@ProxyCmp({ inputs: ["disabled", "download", "href", "layout", "mode", "rel", "selected", "tab", "target"] })
@Component({ selector: "ion-tab-button", changeDetection: ChangeDetectionStrategy.OnPush, template: "<ng-content></ng-content>", inputs: ["disabled", "download", "href", "layout", "mode", "rel", "selected", "tab", "target"] })
export class IonTabButton {
  protected el: HTMLElement;
  constructor(c: ChangeDetectorRef, r: ElementRef, protected z: NgZone) {
    c.detach();
    this.el = r.nativeElement;
  }
}
export declare interface IonText extends Components.IonText {
}
@ProxyCmp({ inputs: ["color", "mode"] })
@Component({ selector: "ion-text", changeDetection: ChangeDetectionStrategy.OnPush, template: "<ng-content></ng-content>", inputs: ["color", "mode"] })
export class IonText {
  protected el: HTMLElement;
  constructor(c: ChangeDetectorRef, r: ElementRef, protected z: NgZone) {
    c.detach();
    this.el = r.nativeElement;
  }
}
export declare interface IonTextarea extends Components.IonTextarea {
}
@ProxyCmp({ inputs: ["autoGrow", "autocapitalize", "autofocus", "clearOnEdit", "color", "cols", "debounce", "disabled", "enterkeyhint", "inputmode", "maxlength", "minlength", "mode", "name", "placeholder", "readonly", "required", "rows", "spellcheck", "value", "wrap"], "methods": ["setFocus", "getInputElement"] })
@Component({ selector: "ion-textarea", changeDetection: ChangeDetectionStrategy.OnPush, template: "<ng-content></ng-content>", inputs: ["autoGrow", "autocapitalize", "autofocus", "clearOnEdit", "color", "cols", "debounce", "disabled", "enterkeyhint", "inputmode", "maxlength", "minlength", "mode", "name", "placeholder", "readonly", "required", "rows", "spellcheck", "value", "wrap"] })
export class IonTextarea {
  ionChange!: EventEmitter<CustomEvent>;
  ionInput!: EventEmitter<CustomEvent>;
  ionBlur!: EventEmitter<CustomEvent>;
  ionFocus!: EventEmitter<CustomEvent>;
  protected el: HTMLElement;
  constructor(c: ChangeDetectorRef, r: ElementRef, protected z: NgZone) {
    c.detach();
    this.el = r.nativeElement;
    proxyOutputs(this, this.el, ["ionChange", "ionInput", "ionBlur", "ionFocus"]);
  }
}
export declare interface IonThumbnail extends Components.IonThumbnail {
}
@Component({ selector: "ion-thumbnail", changeDetection: ChangeDetectionStrategy.OnPush, template: "<ng-content></ng-content>" })
export class IonThumbnail {
  protected el: HTMLElement;
  constructor(c: ChangeDetectorRef, r: ElementRef, protected z: NgZone) {
    c.detach();
    this.el = r.nativeElement;
  }
}
export declare interface IonTitle extends Components.IonTitle {
}
@ProxyCmp({ inputs: ["color", "size"] })
@Component({ selector: "ion-title", changeDetection: ChangeDetectionStrategy.OnPush, template: "<ng-content></ng-content>", inputs: ["color", "size"] })
export class IonTitle {
  protected el: HTMLElement;
  constructor(c: ChangeDetectorRef, r: ElementRef, protected z: NgZone) {
    c.detach();
    this.el = r.nativeElement;
  }
}
export declare interface IonToggle extends Components.IonToggle {
}
@ProxyCmp({ inputs: ["checked", "color", "disabled", "mode", "name", "value"] })
@Component({ selector: "ion-toggle", changeDetection: ChangeDetectionStrategy.OnPush, template: "<ng-content></ng-content>", inputs: ["checked", "color", "disabled", "mode", "name", "value"] })
export class IonToggle {
  ionChange!: EventEmitter<CustomEvent>;
  ionFocus!: EventEmitter<CustomEvent>;
  ionBlur!: EventEmitter<CustomEvent>;
  protected el: HTMLElement;
  constructor(c: ChangeDetectorRef, r: ElementRef, protected z: NgZone) {
    c.detach();
    this.el = r.nativeElement;
    proxyOutputs(this, this.el, ["ionChange", "ionFocus", "ionBlur"]);
  }
}
export declare interface IonToolbar extends Components.IonToolbar {
}
@ProxyCmp({ inputs: ["color", "mode"] })
@Component({ selector: "ion-toolbar", changeDetection: ChangeDetectionStrategy.OnPush, template: "<ng-content></ng-content>", inputs: ["color", "mode"] })
export class IonToolbar {
  protected el: HTMLElement;
  constructor(c: ChangeDetectorRef, r: ElementRef, protected z: NgZone) {
    c.detach();
    this.el = r.nativeElement;
  }
}
