import { EventEmitter } from '@stencil/core';

import { AnimationBuilder, HTMLStencilElement } from '../interface';

export interface OverlayEventDetail<T = any> {
  data?: T;
  role?: string;
}

export interface OverlayInterface {
  el: HTMLElement;
  animated: boolean;
  keyboardClose: boolean;
  overlayIndex: number;
  presented: boolean;

  enterAnimation?: AnimationBuilder;
  leaveAnimation?: AnimationBuilder;

  didPresent: EventEmitter<void>;
  willPresent: EventEmitter<void>;
  willDismiss: EventEmitter<OverlayEventDetail>;
  didDismiss: EventEmitter<OverlayEventDetail>;

  didPresentShorthand?: EventEmitter<void>;
  willPresentShorthand?: EventEmitter<void>;
  willDismissShorthand?: EventEmitter<OverlayEventDetail>;
  didDismissShorthand?: EventEmitter<OverlayEventDetail>;

  present(): Promise<void>;
  dismiss(data?: any, role?: string): Promise<boolean>;
}

export interface OverlayController {
  create(opts?: any): Promise<HTMLElement>;
  dismiss(data?: any, role?: string, id?: string): Promise<boolean>;
  getTop(): Promise<HTMLIonOverlayElement | undefined>;
}

export interface HTMLIonOverlayElement extends HTMLStencilElement {
  overlayIndex: number;
  backdropDismiss?: boolean;
  lastFocus?: HTMLElement;

  dismiss(data?: any, role?: string): Promise<boolean>;
}

export type OverlaySelect = HTMLIonActionSheetElement | HTMLIonAlertElement | HTMLIonPopoverElement;
