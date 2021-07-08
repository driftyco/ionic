import { JSX } from '@ionic/core';

import { createReactComponent } from './createComponent';
import { HrefProps } from './hrefprops';

// ionic/core
export const IonApp = /*@__PURE__*/ createReactComponent<JSX.IonApp, HTMLIonAppElement>('ion-app');
export const IonTab = /*@__PURE__*/ createReactComponent<JSX.IonTab, HTMLIonTabElement>('ion-tab');
export const IonRouterLink = /*@__PURE__*/ createReactComponent<
  HrefProps<JSX.IonRouterLink>,
  HTMLIonRouterLinkElement
>('ion-router-link', true);
export const IonAccordion = /*@__PURE__*/ createReactComponent<JSX.IonAccordion, HTMLIonAccordionElement>(
  'ion-accordion'
);
export const IonAccordionGroup = /*@__PURE__*/ createReactComponent<JSX.IonAccordionGroup, HTMLIonAccordionGroupElement>(
  'ion-accordion-group'
);
export const IonAvatar = /*@__PURE__*/ createReactComponent<JSX.IonAvatar, HTMLIonAvatarElement>(
  'ion-avatar'
);
export const IonBackdrop = /*@__PURE__*/ createReactComponent<
  JSX.IonBackdrop,
  HTMLIonBackdropElement
>('ion-backdrop');
export const IonBadge = /*@__PURE__*/ createReactComponent<JSX.IonBadge, HTMLIonBadgeElement>(
  'ion-badge'
);
export const IonBreadcrumb = /*@__PURE__*/ createReactComponent<JSX.IonBreadcrumb, HTMLIonBreadcrumbElement>(
  'ion-breadcrumb'
);
export const IonBreadcrumbs = /*@__PURE__*/ createReactComponent<JSX.IonBreadcrumbs, HTMLIonBreadcrumbsElement>(
  'ion-breadcrumbs'
);
export const IonButton = /*@__PURE__*/ createReactComponent<
  HrefProps<JSX.IonButton>,
  HTMLIonButtonElement
>('ion-button', true);
export const IonButtons = /*@__PURE__*/ createReactComponent<JSX.IonButtons, HTMLIonButtonsElement>(
  'ion-buttons'
);
export const IonCard = /*@__PURE__*/ createReactComponent<
  HrefProps<JSX.IonCard>,
  HTMLIonCardElement
>('ion-card', true);
export const IonCardContent = /*@__PURE__*/ createReactComponent<
  JSX.IonCardContent,
  HTMLIonCardContentElement
>('ion-card-content');
export const IonCardHeader = /*@__PURE__*/ createReactComponent<
  JSX.IonCardHeader,
  HTMLIonCardHeaderElement
>('ion-card-header');
export const IonCardSubtitle = /*@__PURE__*/ createReactComponent<
  JSX.IonCardSubtitle,
  HTMLIonCardSubtitleElement
>('ion-card-subtitle');
export const IonCardTitle = /*@__PURE__*/ createReactComponent<
  JSX.IonCardTitle,
  HTMLIonCardTitleElement
>('ion-card-title');
export const IonCheckbox = /*@__PURE__*/ createReactComponent<
  JSX.IonCheckbox,
  HTMLIonCheckboxElement
>('ion-checkbox');
export const IonCol = /*@__PURE__*/ createReactComponent<JSX.IonCol, HTMLIonColElement>('ion-col');
export const IonContent = /*@__PURE__*/ createReactComponent<JSX.IonContent, HTMLIonContentElement>(
  'ion-content'
);
export const IonChip = /*@__PURE__*/ createReactComponent<JSX.IonChip, HTMLIonChipElement>(
  'ion-chip'
);
export const IonDatetime = /*@__PURE__*/ createReactComponent<
  JSX.IonDatetime,
  HTMLIonDatetimeElement
>('ion-datetime');
export const IonFab = /*@__PURE__*/ createReactComponent<JSX.IonFab, HTMLIonFabElement>('ion-fab');
export const IonFabButton = /*@__PURE__*/ createReactComponent<
  HrefProps<JSX.IonFabButton>,
  HTMLIonFabButtonElement
>('ion-fab-button', true);
export const IonFabList = /*@__PURE__*/ createReactComponent<JSX.IonFabList, HTMLIonFabListElement>(
  'ion-fab-list'
);
export const IonFooter = /*@__PURE__*/ createReactComponent<JSX.IonFooter, HTMLIonFooterElement>(
  'ion-footer'
);
export const IonGrid = /*@__PURE__*/ createReactComponent<JSX.IonGrid, HTMLIonGridElement>(
  'ion-grid'
);
export const IonHeader = /*@__PURE__*/ createReactComponent<JSX.IonHeader, HTMLIonHeaderElement>(
  'ion-header'
);
export const IonImg = /*@__PURE__*/ createReactComponent<JSX.IonImg, HTMLIonImgElement>('ion-img');
export const IonInfiniteScroll = /*@__PURE__*/ createReactComponent<
  JSX.IonInfiniteScroll,
  HTMLIonInfiniteScrollElement
>('ion-infinite-scroll');
export const IonInfiniteScrollContent = /*@__PURE__*/ createReactComponent<
  JSX.IonInfiniteScrollContent,
  HTMLIonInfiniteScrollContentElement
>('ion-infinite-scroll-content');
export const IonInput = /*@__PURE__*/ createReactComponent<JSX.IonInput, HTMLIonInputElement>(
  'ion-input'
);
export const IonItem = /*@__PURE__*/ createReactComponent<
  HrefProps<JSX.IonItem>,
  HTMLIonItemElement
>('ion-item', true);
export const IonItemDivider = /*@__PURE__*/ createReactComponent<
  JSX.IonItemDivider,
  HTMLIonItemDividerElement
>('ion-item-divider');
export const IonItemGroup = /*@__PURE__*/ createReactComponent<
  JSX.IonItemGroup,
  HTMLIonItemGroupElement
>('ion-item-group');
export const IonItemOption = /*@__PURE__*/ createReactComponent<
  HrefProps<JSX.IonItemOption>,
  HTMLIonItemOptionElement
>('ion-item-option', true);
export const IonItemOptions = /*@__PURE__*/ createReactComponent<
  JSX.IonItemOptions,
  HTMLIonItemOptionsElement
>('ion-item-options');
export const IonItemSliding = /*@__PURE__*/ createReactComponent<
  JSX.IonItemSliding,
  HTMLIonItemSlidingElement
>('ion-item-sliding');
export const IonLabel = /*@__PURE__*/ createReactComponent<JSX.IonLabel, HTMLIonLabelElement>(
  'ion-label'
);
export const IonList = /*@__PURE__*/ createReactComponent<JSX.IonList, HTMLIonListElement>(
  'ion-list'
);
export const IonListHeader = /*@__PURE__*/ createReactComponent<
  JSX.IonListHeader,
  HTMLIonListHeaderElement
>('ion-list-header');
export const IonMenu = /*@__PURE__*/ createReactComponent<JSX.IonMenu, HTMLIonMenuElement>(
  'ion-menu'
);
export const IonMenuButton = /*@__PURE__*/ createReactComponent<
  JSX.IonMenuButton,
  HTMLIonMenuButtonElement
>('ion-menu-button');
export const IonMenuToggle = /*@__PURE__*/ createReactComponent<
  JSX.IonMenuToggle,
  HTMLIonMenuToggleElement
>('ion-menu-toggle');
export const IonNote = /*@__PURE__*/ createReactComponent<JSX.IonNote, HTMLIonNoteElement>(
  'ion-note'
);
export const IonPickerColumn = /*@__PURE__*/ createReactComponent<
  JSX.IonPickerColumn,
  HTMLIonPickerColumnElement
>('ion-picker-column');
export const IonNav = /*@__PURE__*/ createReactComponent<JSX.IonNav, HTMLIonNavElement>('ion-nav');
export const IonProgressBar = /*@__PURE__*/ createReactComponent<
  JSX.IonProgressBar,
  HTMLIonProgressBarElement
>('ion-progress-bar');
export const IonRadio = /*@__PURE__*/ createReactComponent<JSX.IonRadio, HTMLIonRadioElement>(
  'ion-radio'
);
export const IonRadioGroup = /*@__PURE__*/ createReactComponent<
  JSX.IonRadioGroup,
  HTMLIonRadioGroupElement
>('ion-radio-group');
export const IonRange = /*@__PURE__*/ createReactComponent<JSX.IonRange, HTMLIonRangeElement>(
  'ion-range'
);
export const IonRefresher = /*@__PURE__*/ createReactComponent<
  JSX.IonRefresher,
  HTMLIonRefresherElement
>('ion-refresher');
export const IonRefresherContent = /*@__PURE__*/ createReactComponent<
  JSX.IonRefresherContent,
  HTMLIonRefresherContentElement
>('ion-refresher-content');
export const IonReorder = /*@__PURE__*/ createReactComponent<JSX.IonReorder, HTMLIonReorderElement>(
  'ion-reorder'
);
export const IonReorderGroup = /*@__PURE__*/ createReactComponent<
  JSX.IonReorderGroup,
  HTMLIonReorderGroupElement
>('ion-reorder-group');
export const IonRippleEffect = /*@__PURE__*/ createReactComponent<
  JSX.IonRippleEffect,
  HTMLIonRippleEffectElement
>('ion-ripple-effect');
export const IonRow = /*@__PURE__*/ createReactComponent<JSX.IonRow, HTMLIonRowElement>('ion-row');
export const IonSearchbar = /*@__PURE__*/ createReactComponent<
  JSX.IonSearchbar,
  HTMLIonSearchbarElement
>('ion-searchbar');
export const IonSegment = /*@__PURE__*/ createReactComponent<JSX.IonSegment, HTMLIonSegmentElement>(
  'ion-segment'
);
export const IonSegmentButton = /*@__PURE__*/ createReactComponent<
  JSX.IonSegmentButton,
  HTMLIonSegmentButtonElement
>('ion-segment-button');
export const IonSelect = /*@__PURE__*/ createReactComponent<JSX.IonSelect, HTMLIonSelectElement>(
  'ion-select'
);
export const IonSelectOption = /*@__PURE__*/ createReactComponent<
  JSX.IonSelectOption,
  HTMLIonSelectOptionElement
>('ion-select-option');
export const IonSelectPopover = /*@__PURE__*/ createReactComponent<
  JSX.IonSelectPopover,
  HTMLIonSelectPopoverElement
>('ion-select-popover');
export const IonSkeletonText = /*@__PURE__*/ createReactComponent<
  JSX.IonSkeletonText,
  HTMLIonSkeletonTextElement
>('ion-skeleton-text');
export const IonSlide = /*@__PURE__*/ createReactComponent<JSX.IonSlide, HTMLIonSlideElement>(
  'ion-slide'
);
export const IonSlides = /*@__PURE__*/ createReactComponent<JSX.IonSlides, HTMLIonSlidesElement>(
  'ion-slides'
);
export const IonSpinner = /*@__PURE__*/ createReactComponent<JSX.IonSpinner, HTMLIonSpinnerElement>(
  'ion-spinner'
);
export const IonSplitPane = /*@__PURE__*/ createReactComponent<
  JSX.IonSplitPane,
  HTMLIonSplitPaneElement
>('ion-split-pane');
export const IonText = /*@__PURE__*/ createReactComponent<JSX.IonText, HTMLIonTextElement>(
  'ion-text'
);
export const IonTextarea = /*@__PURE__*/ createReactComponent<
  JSX.IonTextarea,
  HTMLIonTextareaElement
>('ion-textarea');
export const IonThumbnail = /*@__PURE__*/ createReactComponent<
  JSX.IonThumbnail,
  HTMLIonThumbnailElement
>('ion-thumbnail');
export const IonTitle = /*@__PURE__*/ createReactComponent<JSX.IonTitle, HTMLIonTitleElement>(
  'ion-title'
);
export const IonToggle = /*@__PURE__*/ createReactComponent<JSX.IonToggle, HTMLIonToggleElement>(
  'ion-toggle'
);
export const IonToolbar = /*@__PURE__*/ createReactComponent<JSX.IonToolbar, HTMLIonToolbarElement>(
  'ion-toolbar'
);
export const IonVirtualScroll = /*@__PURE__*/ createReactComponent<
  JSX.IonVirtualScroll,
  HTMLIonVirtualScrollElement
>('ion-virtual-scroll');
