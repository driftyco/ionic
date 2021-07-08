export interface AccordionGroupChangeEventDetail<T = any> {
  value: T;
}

export interface AccordionGroupChangeEvent extends CustomEvent {
  detail: AccordionGroupChangeEventDetail;
  target: HTMLIonAccordionGroupElement;
}
