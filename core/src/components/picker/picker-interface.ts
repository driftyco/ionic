import { AnimationBuilder, Mode } from '../../interface';

export interface PickerOptions {
  columns: PickerColumn[];
  buttons?: PickerButton[];
  cssClass?: string | string[];
  showBackdrop?: boolean;
  backdropDismiss?: boolean;
  animated?: boolean;

  mode?: Mode;
  keyboardClose?: boolean;
  id?: string;

  enterAnimation?: AnimationBuilder;
  leaveAnimation?: AnimationBuilder;
}

export interface PickerButton {
  text?: string;
  role?: string;
  cssClass?: string | string[];
  handler?: (value: any) => boolean | void;
}

export interface PickerColumn {
  name: string;
  showName?: boolean;
  align?: string;
  selectedIndex?: number;
  prevSelected?: number;
  prefix?: string;
  suffix?: string;
  options: PickerColumnOption[];
  cssClass?: string | string[];
  columnWidth?: string;
  prefixWidth?: string;
  suffixWidth?: string;
  optionsWidth?: string;
  refresh?: () => void;
}

export interface PickerColumnOption {
  text?: string;
  value?: any;
  disabled?: boolean;
  duration?: number;
  transform?: string;
  selected?: boolean;
}
