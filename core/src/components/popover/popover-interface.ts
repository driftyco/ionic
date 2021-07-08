import { AnimationBuilder, ComponentProps, ComponentRef, FrameworkDelegate, Mode } from '../../interface';

export interface PopoverOptions<T extends ComponentRef = ComponentRef> {
  component: T;
  componentProps?: ComponentProps<T>;
  showBackdrop?: boolean;
  backdropDismiss?: boolean;
  translucent?: boolean;
  cssClass?: string | string[];
  event?: Event;
  delegate?: FrameworkDelegate;
  animated?: boolean;

  mode?: Mode;
  keyboardClose?: boolean;
  id?: string;

  enterAnimation?: AnimationBuilder;
  leaveAnimation?: AnimationBuilder;

  size?: PopoverSize;
  dismissOnSelect?: boolean;
  reference?: PositionReference;
  side?: PositionSide;
  align?: PositionAlign;

  trigger?: string;
  triggerAction?: string;
}

export type PopoverSize = 'cover' | 'auto';

export type TriggerAction = 'click' | 'hover' | 'context-menu';

export type PositionReference = 'trigger' | 'event';
export type PositionSide = 'top' | 'right' | 'bottom' | 'left' | 'start' | 'end';
export type PositionAlign = 'start' | 'center' | 'end';
