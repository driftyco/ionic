# ion-breadcrumbs

Breadcrumbs are navigation items that are used to indicate where a user is on an app or site. They should be used for large sites and apps with hierarchically arranged pages. Breadcrumbs can be collapsed based on the maximum number that can show, and the collapsed indicator can be clicked on to present a popover with more information or expand the collapsed breadcrumbs.


<!-- Auto Generated Below -->


## Usage

### Angular

### Default

```html
<ion-breadcrumbs>
  <ion-breadcrumb href="#">
    Home
  </ion-breadcrumb>
  <ion-breadcrumb href="#electronics">
    Electronics
  </ion-breadcrumb>
  <ion-breadcrumb href="#photography">
    Photography
  </ion-breadcrumb>
  <ion-breadcrumb href="#cameras">
    Cameras
  </ion-breadcrumb>
  <ion-breadcrumb href="#film">
    Film
  </ion-breadcrumb>
  <ion-breadcrumb>
    35 mm
  </ion-breadcrumb>
</ion-breadcrumbs>
```

### Colors

```html
<ion-breadcrumbs color="secondary">
  <ion-breadcrumb href="#">
    Home
  </ion-breadcrumb>
  <ion-breadcrumb href="#electronics">
    Electronics
  </ion-breadcrumb>
  <ion-breadcrumb href="#photography">
    Photography
  </ion-breadcrumb>
  <ion-breadcrumb href="#cameras">
    Cameras
  </ion-breadcrumb>
  <ion-breadcrumb href="#film">
    Film
  </ion-breadcrumb>
  <ion-breadcrumb>
    35 mm
  </ion-breadcrumb>
</ion-breadcrumbs>
```

### Breadcrumbs with Icon

```html
<!-- Icon start -->
<ion-breadcrumbs>
  <ion-breadcrumb href="#">
    <ion-icon slot="start" name="home"></ion-icon>
    Home
  </ion-breadcrumb>
  <ion-breadcrumb href="#files">
    <ion-icon slot="start" name="folder"></ion-icon>
    Files
  </ion-breadcrumb>
  <ion-breadcrumb href="#projects">
    <ion-icon slot="start" name="folder"></ion-icon>
    Projects
  </ion-breadcrumb>
  <ion-breadcrumb href="#user-research">
    <ion-icon slot="start" name="folder"></ion-icon>
    User Research
  </ion-breadcrumb>
  <ion-breadcrumb>
    <ion-icon slot="start" name="document"></ion-icon>
    Survey.txt
  </ion-breadcrumb>
</ion-breadcrumbs>

<!-- Icon end -->
<ion-breadcrumbs>
  <ion-breadcrumb href="#">
    Home
    <ion-icon slot="end" name="home"></ion-icon>
  </ion-breadcrumb>
  <ion-breadcrumb href="#files">
    Files
    <ion-icon slot="end" name="folder"></ion-icon>
  </ion-breadcrumb>
  <ion-breadcrumb href="#projects">
    Projects
    <ion-icon slot="end" name="folder"></ion-icon>
  </ion-breadcrumb>
  <ion-breadcrumb href="#user-research">
    User Research
    <ion-icon slot="end" name="folder"></ion-icon>
  </ion-breadcrumb>
  <ion-breadcrumb>
    Survey.txt
    <ion-icon slot="end" name="document"></ion-icon>
  </ion-breadcrumb>
</ion-breadcrumbs>
```

### Custom Separator

```html
<!-- Custom separator text -->
<ion-breadcrumbs>
  <ion-breadcrumb href="#">
    Home
    <span slot="separator">|</span>
  </ion-breadcrumb>
  <ion-breadcrumb href="#electronics">
    Electronics
    <span slot="separator">|</span>
  </ion-breadcrumb>
  <ion-breadcrumb href="#photography">
    Photography
    <span slot="separator">|</span>
  </ion-breadcrumb>
  <ion-breadcrumb href="#cameras">
    Cameras
    <span slot="separator">|</span>
  </ion-breadcrumb>
  <ion-breadcrumb href="#film">
    Film
    <span slot="separator">|</span>
  </ion-breadcrumb>
  <ion-breadcrumb>
    35 mm
  </ion-breadcrumb>
</ion-breadcrumbs>

<!-- Custom separator icon -->
<ion-breadcrumbs>
  <ion-breadcrumb href="#">
    Home
    <ion-icon slot="separator" name="arrow-forward"></ion-icon>
  </ion-breadcrumb>
  <ion-breadcrumb href="#electronics">
    Electronics
    <ion-icon slot="separator" name="arrow-forward"></ion-icon>
  </ion-breadcrumb>
  <ion-breadcrumb href="#photography">
    Photography
    <ion-icon slot="separator" name="arrow-forward"></ion-icon>
  </ion-breadcrumb>
  <ion-breadcrumb href="#cameras">
    Cameras
    <ion-icon slot="separator" name="arrow-forward"></ion-icon>
  </ion-breadcrumb>
  <ion-breadcrumb href="#film">
    Film
    <ion-icon slot="separator" name="arrow-forward"></ion-icon>
  </ion-breadcrumb>
  <ion-breadcrumb>
    35 mm
  </ion-breadcrumb>
</ion-breadcrumbs>
```

### Max Items

```html
<!-- Max Items -->
<ion-breadcrumbs [maxItems]="4">
  <ion-breadcrumb href="#">
    Home
  </ion-breadcrumb>
  <ion-breadcrumb href="#electronics">
    Electronics
  </ion-breadcrumb>
  <ion-breadcrumb href="#photography">
    Photography
  </ion-breadcrumb>
  <ion-breadcrumb href="#cameras">
    Cameras
  </ion-breadcrumb>
  <ion-breadcrumb href="#film">
    Film
  </ion-breadcrumb>
  <ion-breadcrumb>
    35 mm
  </ion-breadcrumb>
</ion-breadcrumbs>
```

### Items Before or After Collapse

```html
<!-- Items before collapse -->
<ion-breadcrumbs [maxItems]="4" [itemsBeforeCollapse]="2">
  <ion-breadcrumb href="#">
    Home
  </ion-breadcrumb>
  <ion-breadcrumb href="#electronics">
    Electronics
  </ion-breadcrumb>
  <ion-breadcrumb href="#photography">
    Photography
  </ion-breadcrumb>
  <ion-breadcrumb href="#cameras">
    Cameras
  </ion-breadcrumb>
  <ion-breadcrumb href="#film">
    Film
  </ion-breadcrumb>
  <ion-breadcrumb>
    35 mm
  </ion-breadcrumb>
</ion-breadcrumbs>

<!-- Items after collapse -->
<ion-breadcrumbs [maxItems]="4" [itemsAfterCollapse]="3">
  <ion-breadcrumb href="#">
    Home
  </ion-breadcrumb>
  <ion-breadcrumb href="#electronics">
    Electronics
  </ion-breadcrumb>
  <ion-breadcrumb href="#photography">
    Photography
  </ion-breadcrumb>
  <ion-breadcrumb href="#cameras">
    Cameras
  </ion-breadcrumb>
  <ion-breadcrumb href="#film">
    Film
  </ion-breadcrumb>
  <ion-breadcrumb>
    35 mm
  </ion-breadcrumb>
</ion-breadcrumbs>

<!-- Items before and after collapse -->
<ion-breadcrumbs [maxItems]="4" [itemsBeforeCollapse]="0" [itemsAfterCollapse]="3">
  <ion-breadcrumb href="#">
    Home
  </ion-breadcrumb>
  <ion-breadcrumb href="#electronics">
    Electronics
  </ion-breadcrumb>
  <ion-breadcrumb href="#photography">
    Photography
  </ion-breadcrumb>
  <ion-breadcrumb href="#cameras">
    Cameras
  </ion-breadcrumb>
  <ion-breadcrumb href="#film">
    Film
  </ion-breadcrumb>
  <ion-breadcrumb>
    35 mm
  </ion-breadcrumb>
</ion-breadcrumbs>
```

### Expand on Collapsed Indicator Click

```html
<ion-breadcrumbs [maxItems]="maxBreadcrumbs" (ionCollapsedClick)="expandBreadcrumbs()">
  <ion-breadcrumb href="#">
    Home
  </ion-breadcrumb>
  <ion-breadcrumb href="#electronics">
    Electronics
  </ion-breadcrumb>
  <ion-breadcrumb href="#photography">
    Photography
  </ion-breadcrumb>
  <ion-breadcrumb href="#cameras">
    Cameras
  </ion-breadcrumb>
  <ion-breadcrumb href="#film">
    Film
  </ion-breadcrumb>
  <ion-breadcrumb>
    35 mm
  </ion-breadcrumb>
</ion-breadcrumbs>
```

```typescript
import { Component } from '@angular/core';

@Component({
  selector: 'breadcrumbs-example',
  templateUrl: 'breadcrumbs-example.html',
  styleUrls: ['./breadcrumbs-example.css'],
})
export class BreadcrumbsExample {
  maxBreadcrumbs = 4;

  expandBreadcrumbs() {
    this.maxBreadcrumbs = undefined;
  }
}
```

### Popover on Collapsed Indicator Click

```html
<ion-breadcrumbs [maxItems]="4" (ionCollapsedClick)="presentPopover($event)">
  <ion-breadcrumb href="#">
    Home
  </ion-breadcrumb>
  <ion-breadcrumb href="#electronics">
    Electronics
  </ion-breadcrumb>
  <ion-breadcrumb href="#photography">
    Photography
  </ion-breadcrumb>
  <ion-breadcrumb href="#cameras">
    Cameras
  </ion-breadcrumb>
  <ion-breadcrumb href="#film">
    Film
  </ion-breadcrumb>
  <ion-breadcrumb>
    35 mm
  </ion-breadcrumb>
</ion-breadcrumbs>
```

```typescript
import { Component } from '@angular/core';
import { PopoverController } from '@ionic/angular';
import { PopoverComponent } from '../popover/popover.component';

@Component({
  selector: 'breadcrumbs-example',
  templateUrl: 'breadcrumbs-example.html',
  styleUrls: ['./breadcrumbs-example.css']
})
export class BreadcrumbsExample {
  constructor(public popoverController: PopoverController) {}

  async presentPopover(ev: any) {
    const popover = await this.popoverController.create({
      component: PopoverComponent,
      event: ev
    });
    await popover.present();
  }
}
```

```typescript
import { Component } from '@angular/core';

@Component({
  selector: 'popover-component',
})
export class PopoverComponent {

  constructor() {}

}
```


### Javascript

### Default

```html
<ion-breadcrumbs>
  <ion-breadcrumb href="#">
    Home
  </ion-breadcrumb>
  <ion-breadcrumb href="#electronics">
    Electronics
  </ion-breadcrumb>
  <ion-breadcrumb href="#photography">
    Photography
  </ion-breadcrumb>
  <ion-breadcrumb href="#cameras">
    Cameras
  </ion-breadcrumb>
  <ion-breadcrumb href="#film">
    Film
  </ion-breadcrumb>
  <ion-breadcrumb>
    35 mm
  </ion-breadcrumb>
</ion-breadcrumbs>
```

### Colors

```html
<ion-breadcrumbs color="secondary">
  <ion-breadcrumb href="#">
    Home
  </ion-breadcrumb>
  <ion-breadcrumb href="#electronics">
    Electronics
  </ion-breadcrumb>
  <ion-breadcrumb href="#photography">
    Photography
  </ion-breadcrumb>
  <ion-breadcrumb href="#cameras">
    Cameras
  </ion-breadcrumb>
  <ion-breadcrumb href="#film">
    Film
  </ion-breadcrumb>
  <ion-breadcrumb>
    35 mm
  </ion-breadcrumb>
</ion-breadcrumbs>
```

### Breadcrumbs with Icon

```html
<!-- Icon start -->
<ion-breadcrumbs>
  <ion-breadcrumb href="#">
    <ion-icon slot="start" name="home"></ion-icon>
    Home
  </ion-breadcrumb>
  <ion-breadcrumb href="#files">
    <ion-icon slot="start" name="folder"></ion-icon>
    Files
  </ion-breadcrumb>
  <ion-breadcrumb href="#projects">
    <ion-icon slot="start" name="folder"></ion-icon>
    Projects
  </ion-breadcrumb>
  <ion-breadcrumb href="#user-research">
    <ion-icon slot="start" name="folder"></ion-icon>
    User Research
  </ion-breadcrumb>
  <ion-breadcrumb>
    <ion-icon slot="start" name="document"></ion-icon>
    Survey.txt
  </ion-breadcrumb>
</ion-breadcrumbs>

<!-- Icon end -->
<ion-breadcrumbs>
  <ion-breadcrumb href="#">
    Home
    <ion-icon slot="end" name="home"></ion-icon>
  </ion-breadcrumb>
  <ion-breadcrumb href="#files">
    Files
    <ion-icon slot="end" name="folder"></ion-icon>
  </ion-breadcrumb>
  <ion-breadcrumb href="#projects">
    Projects
    <ion-icon slot="end" name="folder"></ion-icon>
  </ion-breadcrumb>
  <ion-breadcrumb href="#user-research">
    User Research
    <ion-icon slot="end" name="folder"></ion-icon>
  </ion-breadcrumb>
  <ion-breadcrumb>
    Survey.txt
    <ion-icon slot="end" name="document"></ion-icon>
  </ion-breadcrumb>
</ion-breadcrumbs>
```

### Custom Separator

```html
<!-- Custom separator text -->
<ion-breadcrumbs>
  <ion-breadcrumb href="#">
    Home
    <span slot="separator">|</span>
  </ion-breadcrumb>
  <ion-breadcrumb href="#electronics">
    Electronics
    <span slot="separator">|</span>
  </ion-breadcrumb>
  <ion-breadcrumb href="#photography">
    Photography
    <span slot="separator">|</span>
  </ion-breadcrumb>
  <ion-breadcrumb href="#cameras">
    Cameras
    <span slot="separator">|</span>
  </ion-breadcrumb>
  <ion-breadcrumb href="#film">
    Film
    <span slot="separator">|</span>
  </ion-breadcrumb>
  <ion-breadcrumb>
    35 mm
  </ion-breadcrumb>
</ion-breadcrumbs>

<!-- Custom separator icon -->
<ion-breadcrumbs>
  <ion-breadcrumb href="#">
    Home
    <ion-icon slot="separator" name="arrow-forward"></ion-icon>
  </ion-breadcrumb>
  <ion-breadcrumb href="#electronics">
    Electronics
    <ion-icon slot="separator" name="arrow-forward"></ion-icon>
  </ion-breadcrumb>
  <ion-breadcrumb href="#photography">
    Photography
    <ion-icon slot="separator" name="arrow-forward"></ion-icon>
  </ion-breadcrumb>
  <ion-breadcrumb href="#cameras">
    Cameras
    <ion-icon slot="separator" name="arrow-forward"></ion-icon>
  </ion-breadcrumb>
  <ion-breadcrumb href="#film">
    Film
    <ion-icon slot="separator" name="arrow-forward"></ion-icon>
  </ion-breadcrumb>
  <ion-breadcrumb>
    35 mm
  </ion-breadcrumb>
</ion-breadcrumbs>
```

### Max Items

```html
<!-- Max Items -->
<ion-breadcrumbs max-items="4">
  <ion-breadcrumb href="#">
    Home
  </ion-breadcrumb>
  <ion-breadcrumb href="#electronics">
    Electronics
  </ion-breadcrumb>
  <ion-breadcrumb href="#photography">
    Photography
  </ion-breadcrumb>
  <ion-breadcrumb href="#cameras">
    Cameras
  </ion-breadcrumb>
  <ion-breadcrumb href="#film">
    Film
  </ion-breadcrumb>
  <ion-breadcrumb>
    35 mm
  </ion-breadcrumb>
</ion-breadcrumbs>
```

### Items Before or After Collapse

```html
<!-- Items before collapse -->
<ion-breadcrumbs max-items="4" items-before-collapse="2">
  <ion-breadcrumb href="#">
    Home
  </ion-breadcrumb>
  <ion-breadcrumb href="#electronics">
    Electronics
  </ion-breadcrumb>
  <ion-breadcrumb href="#photography">
    Photography
  </ion-breadcrumb>
  <ion-breadcrumb href="#cameras">
    Cameras
  </ion-breadcrumb>
  <ion-breadcrumb href="#film">
    Film
  </ion-breadcrumb>
  <ion-breadcrumb>
    35 mm
  </ion-breadcrumb>
</ion-breadcrumbs>

<!-- Items after collapse -->
<ion-breadcrumbs max-items="4" items-after-collapse="3">
  <ion-breadcrumb href="#">
    Home
  </ion-breadcrumb>
  <ion-breadcrumb href="#electronics">
    Electronics
  </ion-breadcrumb>
  <ion-breadcrumb href="#photography">
    Photography
  </ion-breadcrumb>
  <ion-breadcrumb href="#cameras">
    Cameras
  </ion-breadcrumb>
  <ion-breadcrumb href="#film">
    Film
  </ion-breadcrumb>
  <ion-breadcrumb>
    35 mm
  </ion-breadcrumb>
</ion-breadcrumbs>

<!-- Items before and after collapse -->
<ion-breadcrumbs max-items="4" items-before-collapse="0" items-after-collapse="3">
  <ion-breadcrumb href="#">
    Home
  </ion-breadcrumb>
  <ion-breadcrumb href="#electronics">
    Electronics
  </ion-breadcrumb>
  <ion-breadcrumb href="#photography">
    Photography
  </ion-breadcrumb>
  <ion-breadcrumb href="#cameras">
    Cameras
  </ion-breadcrumb>
  <ion-breadcrumb href="#film">
    Film
  </ion-breadcrumb>
  <ion-breadcrumb>
    35 mm
  </ion-breadcrumb>
</ion-breadcrumbs>
```

### Expand on Collapsed Indicator Click

```html
<ion-breadcrumbs max-items="4">
  <ion-breadcrumb href="#">
    Home
  </ion-breadcrumb>
  <ion-breadcrumb href="#electronics">
    Electronics
  </ion-breadcrumb>
  <ion-breadcrumb href="#photography">
    Photography
  </ion-breadcrumb>
  <ion-breadcrumb href="#cameras">
    Cameras
  </ion-breadcrumb>
  <ion-breadcrumb href="#film">
    Film
  </ion-breadcrumb>
  <ion-breadcrumb>
    35 mm
  </ion-breadcrumb>
</ion-breadcrumbs>
```

```javascript
const breadcrumbs = document.querySelector('ion-breadcrumbs');

breadcrumbs.addEventListener('ionCollapsedClick', () => expandBreadcrumbs());

function expandBreadcrumbs() {
  breadcrumbs.maxItems = undefined;
}
```

### Popover on Collapsed Indicator Click

```html
<ion-breadcrumbs max-items="4">
  <ion-breadcrumb href="#">
    Home
  </ion-breadcrumb>
  <ion-breadcrumb href="#electronics">
    Electronics
  </ion-breadcrumb>
  <ion-breadcrumb href="#photography">
    Photography
  </ion-breadcrumb>
  <ion-breadcrumb href="#cameras">
    Cameras
  </ion-breadcrumb>
  <ion-breadcrumb href="#film">
    Film
  </ion-breadcrumb>
  <ion-breadcrumb>
    35 mm
  </ion-breadcrumb>
</ion-breadcrumbs>
```

```javascript
const breadcrumbs = document.querySelector('ion-breadcrumbs');

breadcrumbs.addEventListener('ionCollapsedClick', (ev) => presentPopover(ev));

class ListPopover extends HTMLElement {
  constructor() {
    super();
  }

  connectedCallback() {
    this.innerHTML = `
      <ion-content>
        <ion-list>
          <ion-item href="#">
            <ion-label>Home</ion-label>
          </ion-item>
          <ion-item href="#electronics">
            <ion-label>Electronics</ion-label>
          </ion-item>
          <ion-item href="#photography">
            <ion-label>Photography</ion-label>
          </ion-item>
          <ion-item href="#cameras">
            <ion-label>Cameras</ion-label>
          </ion-item>
        </ion-list>
      </ion-content>
    `;
  }
}

customElements.define('list-popover', ListPopover);

async function presentPopover(ev) {
  const popover = Object.assign(document.createElement('ion-popover'), {
    component: 'list-popover',
    event: ev
  });
  document.body.appendChild(popover);

  await popover.present();
}
```


### React

### Default

```tsx
import React from 'react';
import { IonBreadcrumb, IonBreadcrumbs } from '@ionic/react';

export const BreadcrumbsExample: React.FC = () => (
  <IonBreadcrumbs>
    <IonBreadcrumb href="#">
      Home
    </IonBreadcrumb>
    <IonBreadcrumb href="#electronics">
      Electronics
    </IonBreadcrumb>
    <IonBreadcrumb href="#photography">
      Photography
    </IonBreadcrumb>
    <IonBreadcrumb href="#cameras">
      Cameras
    </IonBreadcrumb>
    <IonBreadcrumb href="#film">
      Film
    </IonBreadcrumb>
    <IonBreadcrumb>
      35 mm
    </IonBreadcrumb>
  </IonBreadcrumbs>
);
```

### Colors

```tsx
import React from 'react';
import { IonBreadcrumb, IonBreadcrumbs } from '@ionic/react';

export const BreadcrumbsExample: React.FC = () => (
  <IonBreadcrumbs color="secondary">
    <IonBreadcrumb href="#">
      Home
    </IonBreadcrumb>
    <IonBreadcrumb href="#electronics">
      Electronics
    </IonBreadcrumb>
    <IonBreadcrumb href="#photography">
      Photography
    </IonBreadcrumb>
    <IonBreadcrumb href="#cameras">
      Cameras
    </IonBreadcrumb>
    <IonBreadcrumb href="#film">
      Film
    </IonBreadcrumb>
    <IonBreadcrumb>
      35 mm
    </IonBreadcrumb>
  </IonBreadcrumbs>
);
```

### Breadcrumbs with Icon


```tsx
import React from 'react';
import { IonBreadcrumb, IonBreadcrumbs, IonIcon } from '@ionic/react';
import { document, folder, home } from 'ionicons/icons';

export const BreadcrumbsExample: React.FC = () => (
  {/*-- Icon start --*/}
  <IonBreadcrumbs>
    <IonBreadcrumb href="#">
      <IonIcon slot="start" icon={home}></IonIcon>
      Home
    </IonBreadcrumb>
    <IonBreadcrumb href="#files">
      <IonIcon slot="start" icon={folder}></IonIcon>
      Files
    </IonBreadcrumb>
    <IonBreadcrumb href="#projects">
      <IonIcon slot="start" icon={folder}></IonIcon>
      Projects
    </IonBreadcrumb>
    <IonBreadcrumb href="#user-research">
      <IonIcon slot="start" icon={folder}></IonIcon>
      User Research
    </IonBreadcrumb>
    <IonBreadcrumb>
      <IonIcon slot="start" icon={document}></IonIcon>
      Survey.txt
    </IonBreadcrumb>
  </IonBreadcrumbs>,

  {/*-- Icon end --*/}
  <IonBreadcrumbs>
    <IonBreadcrumb href="#">
      Home
      <IonIcon slot="end" icon={home}></IonIcon>
    </IonBreadcrumb>
    <IonBreadcrumb href="#files">
      Files
      <IonIcon slot="end" icon={folder}></IonIcon>
    </IonBreadcrumb>
    <IonBreadcrumb href="#projects">
      Projects
      <IonIcon slot="end" icon={folder}></IonIcon>
    </IonBreadcrumb>
    <IonBreadcrumb href="#user-research">
      User Research
      <IonIcon slot="end" icon={folder}></IonIcon>
    </IonBreadcrumb>
    <IonBreadcrumb>
      Survey.txt
      <IonIcon slot="end" icon={document}></IonIcon>
    </IonBreadcrumb>
  </IonBreadcrumbs>
);
```

### Custom Separator

```tsx
import React from 'react';
import { IonBreadcrumb, IonBreadcrumbs, IonIcon } from '@ionic/react';
import { arrowForward } from 'ionicons/icons';

export const BreadcrumbsExample: React.FC = () => (
  {/*-- Custom separator text --*/}
  <IonBreadcrumbs>
    <IonBreadcrumb href="#">
      Home
      <span slot="separator">|</span>
    </IonBreadcrumb>
    <IonBreadcrumb href="#electronics">
      Electronics
      <span slot="separator">|</span>
    </IonBreadcrumb>
    <IonBreadcrumb href="#photography">
      Photography
      <span slot="separator">|</span>
    </IonBreadcrumb>
    <IonBreadcrumb href="#cameras">
      Cameras
      <span slot="separator">|</span>
    </IonBreadcrumb>
    <IonBreadcrumb href="#film">
      Film
      <span slot="separator">|</span>
    </IonBreadcrumb>
    <IonBreadcrumb>
      35 mm
    </IonBreadcrumb>
  </IonBreadcrumbs>,

  {/*-- Custom separator icon --*/}
  <IonBreadcrumbs>
    <IonBreadcrumb href="#">
      Home
      <IonIcon slot="separator" icon={arrowForward}></IonIcon>
    </IonBreadcrumb>
    <IonBreadcrumb href="#electronics">
      Electronics
      <IonIcon slot="separator" icon={arrowForward}></IonIcon>
    </IonBreadcrumb>
    <IonBreadcrumb href="#photography">
      Photography
      <IonIcon slot="separator" icon={arrowForward}></IonIcon>
    </IonBreadcrumb>
    <IonBreadcrumb href="#cameras">
      Cameras
      <IonIcon slot="separator" icon={arrowForward}></IonIcon>
    </IonBreadcrumb>
    <IonBreadcrumb href="#film">
      Film
      <IonIcon slot="separator" icon={arrowForward}></IonIcon>
    </IonBreadcrumb>
    <IonBreadcrumb>
      35 mm
    </IonBreadcrumb>
  </IonBreadcrumbs>
);
```

### Max Items

```tsx
import React from 'react';
import { IonBreadcrumb, IonBreadcrumbs } from '@ionic/react';

export const BreadcrumbsExample: React.FC = () => (
  <IonBreadcrumbs maxItems={4}>
    <IonBreadcrumb href="#">
      Home
    </IonBreadcrumb>
    <IonBreadcrumb href="#electronics">
      Electronics
    </IonBreadcrumb>
    <IonBreadcrumb href="#photography">
      Photography
    </IonBreadcrumb>
    <IonBreadcrumb href="#cameras">
      Cameras
    </IonBreadcrumb>
    <IonBreadcrumb href="#film">
      Film
    </IonBreadcrumb>
    <IonBreadcrumb>
      35 mm
    </IonBreadcrumb>
  </IonBreadcrumbs>
);
```


### Items Before or After Collapse

```tsx
import React from 'react';
import { IonBreadcrumb, IonBreadcrumbs } from '@ionic/react';

export const BreadcrumbsExample: React.FC = () => (
  {/*-- Items before collapse --*/}
  <IonBreadcrumbs maxItems={4} itemsBeforeCollapse={2}>
    <IonBreadcrumb href="#">
      Home
    </IonBreadcrumb>
    <IonBreadcrumb href="#electronics">
      Electronics
    </IonBreadcrumb>
    <IonBreadcrumb href="#photography">
      Photography
    </IonBreadcrumb>
    <IonBreadcrumb href="#cameras">
      Cameras
    </IonBreadcrumb>
    <IonBreadcrumb href="#film">
      Film
    </IonBreadcrumb>
    <IonBreadcrumb>
      35 mm
    </IonBreadcrumb>
  </IonBreadcrumbs>,

  {/*-- Items after collapse --*/}
  <IonBreadcrumbs maxItems={4} itemsAfterCollapse={3}>
    <IonBreadcrumb href="#">
      Home
    </IonBreadcrumb>
    <IonBreadcrumb href="#electronics">
      Electronics
    </IonBreadcrumb>
    <IonBreadcrumb href="#photography">
      Photography
    </IonBreadcrumb>
    <IonBreadcrumb href="#cameras">
      Cameras
    </IonBreadcrumb>
    <IonBreadcrumb href="#film">
      Film
    </IonBreadcrumb>
    <IonBreadcrumb>
      35 mm
    </IonBreadcrumb>
  </IonBreadcrumbs>,

  {/*-- Items before and after collapse --*/}
  <IonBreadcrumbs maxItems={4} itemsBeforeCollapse={0} itemsAfterCollapse={3}>
    <IonBreadcrumb href="#">
      Home
    </IonBreadcrumb>
    <IonBreadcrumb href="#electronics">
      Electronics
    </IonBreadcrumb>
    <IonBreadcrumb href="#photography">
      Photography
    </IonBreadcrumb>
    <IonBreadcrumb href="#cameras">
      Cameras
    </IonBreadcrumb>
    <IonBreadcrumb href="#film">
      Film
    </IonBreadcrumb>
    <IonBreadcrumb>
      35 mm
    </IonBreadcrumb>
  </IonBreadcrumbs>
);
```

### Expand on Collapsed Indicator Click

```tsx
import React from 'react';
import { IonBreadcrumb, IonBreadcrumbs } from '@ionic/react';

export const BreadcrumbsExample: React.FC = () => {
  const [maxBreadcrumbs, setMaxBreadcrumbs] = useState(4);

  const expandBreadcrumbs = () => {
    setMaxBreadcrumbs(undefined);
  }

  return (
    <IonBreadcrumbs maxItems={maxBreadcrumbs} onIonCollapsedClick={() => expandBreadcrumbs()}>
      <IonBreadcrumb href="#">
        Home
      </IonBreadcrumb>
      <IonBreadcrumb href="#electronics">
        Electronics
      </IonBreadcrumb>
      <IonBreadcrumb href="#photography">
        Photography
      </IonBreadcrumb>
      <IonBreadcrumb href="#cameras">
        Cameras
      </IonBreadcrumb>
      <IonBreadcrumb href="#film">
        Film
      </IonBreadcrumb>
      <IonBreadcrumb>
        35 mm
      </IonBreadcrumb>
    </IonBreadcrumbs>
  );
};
```

### Popover on Collapsed Indicator Click

```tsx
import React from 'react';
import { IonBreadcrumb, IonBreadcrumbs, IonContent, IonItem, IonLabel, IonList, useIonPopover } from '@ionic/react';

const PopoverList: React.FC<{
  onHide: () => void;
}> = ({ onHide }) => (
  <IonContent>
    <IonList>
      <IonItem href="#">
        <IonLabel>Home</IonLabel>
      </IonItem>
      <IonItem href="#electronics">
        <IonLabel>Electronics</IonLabel>
      </IonItem>
      <IonItem href="#photography">
        <IonLabel>Photography</IonLabel>
      </IonItem>
      <IonItem href="#cameras">
        <IonLabel>Cameras</IonLabel>
      </IonItem>
    </IonList>
  </IonContent>
);

export const BreadcrumbsExample: React.FC = () => {
  const [present, dismiss] = useIonPopover(PopoverList, { onHide: () => dismiss() });

  return (
    <IonBreadcrumbs maxItems={4} onIonCollapsedClick={(e) => present({ event: e.nativeEvent })}>
      <IonBreadcrumb href="#">
        Home
      </IonBreadcrumb>
      <IonBreadcrumb href="#electronics">
        Electronics
      </IonBreadcrumb>
      <IonBreadcrumb href="#photography">
        Photography
      </IonBreadcrumb>
      <IonBreadcrumb href="#cameras">
        Cameras
      </IonBreadcrumb>
      <IonBreadcrumb href="#film">
        Film
      </IonBreadcrumb>
      <IonBreadcrumb>
        35 mm
      </IonBreadcrumb>
    </IonBreadcrumbs>
  );
};
```


### Stencil

### Default

```tsx
import { Component, h } from '@stencil/core';

@Component({
  tag: 'breadcrumbs-example',
  styleUrl: 'breadcrumbs-example.css'
})
export class BreadcrumbsExample {
  render() {
    return [
      <ion-breadcrumbs>
        <ion-breadcrumb href="#">
          Home
        </ion-breadcrumb>
        <ion-breadcrumb href="#electronics">
          Electronics
        </ion-breadcrumb>
        <ion-breadcrumb href="#photography">
          Photography
        </ion-breadcrumb>
        <ion-breadcrumb href="#cameras">
          Cameras
        </ion-breadcrumb>
        <ion-breadcrumb href="#film">
          Film
        </ion-breadcrumb>
        <ion-breadcrumb>
          35 mm
        </ion-breadcrumb>
      </ion-breadcrumbs>
    ];
  }
}
```

### Colors

```tsx
import { Component, h } from '@stencil/core';

@Component({
  tag: 'breadcrumbs-example',
  styleUrl: 'breadcrumbs-example.css'
})
export class BreadcrumbsExample {
  render() {
    return [
      <ion-breadcrumbs color="secondary">
        <ion-breadcrumb href="#">
          Home
        </ion-breadcrumb>
        <ion-breadcrumb href="#electronics">
          Electronics
        </ion-breadcrumb>
        <ion-breadcrumb href="#photography">
          Photography
        </ion-breadcrumb>
        <ion-breadcrumb href="#cameras">
          Cameras
        </ion-breadcrumb>
        <ion-breadcrumb href="#film">
          Film
        </ion-breadcrumb>
        <ion-breadcrumb>
          35 mm
        </ion-breadcrumb>
      </ion-breadcrumbs>
    ];
  }
}
```

### Breadcrumbs with Icon

```tsx
import { Component, h } from '@stencil/core';

@Component({
  tag: 'breadcrumbs-example',
  styleUrl: 'breadcrumbs-example.css'
})
export class BreadcrumbsExample {
  render() {
    return [
      // Icon start
      <ion-breadcrumbs>
        <ion-breadcrumb href="#">
          <ion-icon slot="start" name="home"></ion-icon>
          Home
        </ion-breadcrumb>
        <ion-breadcrumb href="#files">
          <ion-icon slot="start" name="folder"></ion-icon>
          Files
        </ion-breadcrumb>
        <ion-breadcrumb href="#projects">
          <ion-icon slot="start" name="folder"></ion-icon>
          Projects
        </ion-breadcrumb>
        <ion-breadcrumb href="#user-research">
          <ion-icon slot="start" name="folder"></ion-icon>
          User Research
        </ion-breadcrumb>
        <ion-breadcrumb>
          <ion-icon slot="start" name="document"></ion-icon>
          Survey.txt
        </ion-breadcrumb>
      </ion-breadcrumbs>,

      // Icon end
      <ion-breadcrumbs>
        <ion-breadcrumb href="#">
          Home
          <ion-icon slot="end" name="home"></ion-icon>
        </ion-breadcrumb>
        <ion-breadcrumb href="#files">
          Files
          <ion-icon slot="end" name="folder"></ion-icon>
        </ion-breadcrumb>
        <ion-breadcrumb href="#projects">
          Projects
          <ion-icon slot="end" name="folder"></ion-icon>
        </ion-breadcrumb>
        <ion-breadcrumb href="#user-research">
          User Research
          <ion-icon slot="end" name="folder"></ion-icon>
        </ion-breadcrumb>
        <ion-breadcrumb>
          Survey.txt
          <ion-icon slot="end" name="document"></ion-icon>
        </ion-breadcrumb>
      </ion-breadcrumbs>
    ];
  }
}
```

### Custom Separator

```tsx
import { Component, h } from '@stencil/core';

@Component({
  tag: 'breadcrumbs-example',
  styleUrl: 'breadcrumbs-example.css'
})
export class BreadcrumbsExample {
  render() {
    return [
      // Custom separator text
      <ion-breadcrumbs>
        <ion-breadcrumb href="#">
          Home
          <span slot="separator">|</span>
        </ion-breadcrumb>
        <ion-breadcrumb href="#electronics">
          Electronics
          <span slot="separator">|</span>
        </ion-breadcrumb>
        <ion-breadcrumb href="#photography">
          Photography
          <span slot="separator">|</span>
        </ion-breadcrumb>
        <ion-breadcrumb href="#cameras">
          Cameras
          <span slot="separator">|</span>
        </ion-breadcrumb>
        <ion-breadcrumb href="#film">
          Film
          <span slot="separator">|</span>
        </ion-breadcrumb>
        <ion-breadcrumb>
          35 mm
        </ion-breadcrumb>
      </ion-breadcrumbs>,

      // Custom separator icon
      <ion-breadcrumbs>
        <ion-breadcrumb href="#">
          Home
          <ion-icon slot="separator" name="arrow-forward"></ion-icon>
        </ion-breadcrumb>
        <ion-breadcrumb href="#electronics">
          Electronics
          <ion-icon slot="separator" name="arrow-forward"></ion-icon>
        </ion-breadcrumb>
        <ion-breadcrumb href="#photography">
          Photography
          <ion-icon slot="separator" name="arrow-forward"></ion-icon>
        </ion-breadcrumb>
        <ion-breadcrumb href="#cameras">
          Cameras
          <ion-icon slot="separator" name="arrow-forward"></ion-icon>
        </ion-breadcrumb>
        <ion-breadcrumb href="#film">
          Film
          <ion-icon slot="separator" name="arrow-forward"></ion-icon>
        </ion-breadcrumb>
        <ion-breadcrumb>
          35 mm
        </ion-breadcrumb>
      </ion-breadcrumbs>
    ];
  }
}
```

### Max Items

```tsx
import { Component, h } from '@stencil/core';

@Component({
  tag: 'breadcrumbs-example',
  styleUrl: 'breadcrumbs-example.css'
})
export class BreadcrumbsExample {
  render() {
    return [
      <ion-breadcrumbs maxItems={4}>
        <ion-breadcrumb href="#">
          Home
        </ion-breadcrumb>
        <ion-breadcrumb href="#electronics">
          Electronics
        </ion-breadcrumb>
        <ion-breadcrumb href="#photography">
          Photography
        </ion-breadcrumb>
        <ion-breadcrumb href="#cameras">
          Cameras
        </ion-breadcrumb>
        <ion-breadcrumb href="#film">
          Film
        </ion-breadcrumb>
        <ion-breadcrumb>
          35 mm
        </ion-breadcrumb>
      </ion-breadcrumbs>
    ];
  }
}
```



### Items Before or After Collapse

```tsx
import { Component, h } from '@stencil/core';

@Component({
  tag: 'breadcrumbs-example',
  styleUrl: 'breadcrumbs-example.css'
})
export class BreadcrumbsExample {
  render() {
    return [
      // Items before collapse
      <ion-breadcrumbs maxItems={4} itemsBeforeCollapse={2}>
        <ion-breadcrumb href="#">
          Home
        </ion-breadcrumb>
        <ion-breadcrumb href="#electronics">
          Electronics
        </ion-breadcrumb>
        <ion-breadcrumb href="#photography">
          Photography
        </ion-breadcrumb>
        <ion-breadcrumb href="#cameras">
          Cameras
        </ion-breadcrumb>
        <ion-breadcrumb href="#film">
          Film
        </ion-breadcrumb>
        <ion-breadcrumb>
          35 mm
        </ion-breadcrumb>
      </ion-breadcrumbs>,

      // Items after collapse
      <ion-breadcrumbs maxItems={4} itemsAfterCollapse={3}>
        <ion-breadcrumb href="#">
          Home
        </ion-breadcrumb>
        <ion-breadcrumb href="#electronics">
          Electronics
        </ion-breadcrumb>
        <ion-breadcrumb href="#photography">
          Photography
        </ion-breadcrumb>
        <ion-breadcrumb href="#cameras">
          Cameras
        </ion-breadcrumb>
        <ion-breadcrumb href="#film">
          Film
        </ion-breadcrumb>
        <ion-breadcrumb>
          35 mm
        </ion-breadcrumb>
      </ion-breadcrumbs>,

      // Items before and after collapse
      <ion-breadcrumbs maxItems={4} itemsBeforeCollapse={0} itemsAfterCollapse={3}>
        <ion-breadcrumb href="#">
          Home
        </ion-breadcrumb>
        <ion-breadcrumb href="#electronics">
          Electronics
        </ion-breadcrumb>
        <ion-breadcrumb href="#photography">
          Photography
        </ion-breadcrumb>
        <ion-breadcrumb href="#cameras">
          Cameras
        </ion-breadcrumb>
        <ion-breadcrumb href="#film">
          Film
        </ion-breadcrumb>
        <ion-breadcrumb>
          35 mm
        </ion-breadcrumb>
      </ion-breadcrumbs>
    ];
  }
}
```

### Expand on Collapsed Indicator Click

```tsx
import { Component, State, h } from '@stencil/core';

@Component({
  tag: 'breadcrumbs-example',
  styleUrl: 'breadcrumbs-example.css'
})
export class BreadcrumbsExample {
  @State() maxBreadcrumbs = 4;

  expandBreadcrumbs() {
    maxBreadcrumbs = undefined;
  }

  render() {
    const { maxBreadcrumbs } = this;

    return [
      <ion-breadcrumbs maxItems={maxBreadcrumbs} onIonCollapsedClick={() => this.expandBreadcrumbs()}>
        <ion-breadcrumb href="#">
          Home
        </ion-breadcrumb>
        <ion-breadcrumb href="#electronics">
          Electronics
        </ion-breadcrumb>
        <ion-breadcrumb href="#photography">
          Photography
        </ion-breadcrumb>
        <ion-breadcrumb href="#cameras">
          Cameras
        </ion-breadcrumb>
        <ion-breadcrumb href="#film">
          Film
        </ion-breadcrumb>
        <ion-breadcrumb>
          35 mm
        </ion-breadcrumb>
      </ion-breadcrumbs>
    ];
  }
}
```

### Popover on Collapsed Indicator Click

```tsx
import { Component, h } from '@stencil/core';

import { popoverController } from '@ionic/core';

@Component({
  tag: 'breadcrumbs-example',
  styleUrl: 'breadcrumbs-example.css'
})
export class BreadcrumbsExample {
  async presentPopover(ev: any) {
    const popover = await popoverController.create({
      component: 'list-popover',
      event: ev
    });
    await popover.present();
  }

  render() {
    return [
      <ion-breadcrumbs maxItems={4} onIonCollapsedClick={(ev) => this.presentPopover(ev)}>
        <ion-breadcrumb href="#">
          Home
        </ion-breadcrumb>
        <ion-breadcrumb href="#electronics">
          Electronics
        </ion-breadcrumb>
        <ion-breadcrumb href="#photography">
          Photography
        </ion-breadcrumb>
        <ion-breadcrumb href="#cameras">
          Cameras
        </ion-breadcrumb>
        <ion-breadcrumb href="#film">
          Film
        </ion-breadcrumb>
        <ion-breadcrumb>
          35 mm
        </ion-breadcrumb>
      </ion-breadcrumbs>
    ];
  }
}
```

```tsx
import { Component, h } from '@stencil/core';

@Component({
  tag: 'list-popover',
  styleUrl: 'list-popover.css',
})
export class ListPopover {
  render() {
    return [
      <ion-content>
        <ion-list>
          <ion-item href="#">
            <ion-label>Home</ion-label>
          </ion-item>
          <ion-item href="#electronics">
            <ion-label>Electronics</ion-label>
          </ion-item>
          <ion-item href="#photography">
            <ion-label>Photography</ion-label>
          </ion-item>
          <ion-item href="#cameras">
            <ion-label>Cameras</ion-label>
          </ion-item>
        </ion-list>
      </ion-content>
    ];
  }
}
```


### Vue

### Default

```html
<template>
  <ion-breadcrumbs>
    <ion-breadcrumb href="#">
      Home
    </ion-breadcrumb>
    <ion-breadcrumb href="#electronics">
      Electronics
    </ion-breadcrumb>
    <ion-breadcrumb href="#photography">
      Photography
    </ion-breadcrumb>
    <ion-breadcrumb href="#cameras">
      Cameras
    </ion-breadcrumb>
    <ion-breadcrumb href="#film">
      Film
    </ion-breadcrumb>
    <ion-breadcrumb>
      35 mm
    </ion-breadcrumb>
  </ion-breadcrumbs>
</template>

<script>
import { IonBreadcrumb, IonBreadcrumbs } from '@ionic/vue';
import { defineComponent } from 'vue';

export default defineComponent({
  components: { IonBreadcrumb, IonBreadcrumbs }
});
</script>
```

### Colors

```html
<template>
  <ion-breadcrumbs color="secondary">
    <ion-breadcrumb href="#">
      Home
    </ion-breadcrumb>
    <ion-breadcrumb href="#electronics">
      Electronics
    </ion-breadcrumb>
    <ion-breadcrumb href="#photography">
      Photography
    </ion-breadcrumb>
    <ion-breadcrumb href="#cameras">
      Cameras
    </ion-breadcrumb>
    <ion-breadcrumb href="#film">
      Film
    </ion-breadcrumb>
    <ion-breadcrumb>
      35 mm
    </ion-breadcrumb>
  </ion-breadcrumbs>
</template>

<script>
import { IonBreadcrumb, IonBreadcrumbs } from '@ionic/vue';
import { defineComponent } from 'vue';

export default defineComponent({
  components: { IonBreadcrumb, IonBreadcrumbs }
});
</script>
```

### Breadcrumbs with Icon

```html
<template>
  <!-- Icon start -->
  <ion-breadcrumbs>
    <ion-breadcrumb href="#">
      <ion-icon slot="start" :icon="home"></ion-icon>
      Home
    </ion-breadcrumb>
    <ion-breadcrumb href="#files">
      <ion-icon slot="start" :icon="folder"></ion-icon>
      Files
    </ion-breadcrumb>
    <ion-breadcrumb href="#projects">
      <ion-icon slot="start" :icon="folder"></ion-icon>
      Projects
    </ion-breadcrumb>
    <ion-breadcrumb href="#user-research">
      <ion-icon slot="start" :icon="folder"></ion-icon>
      User Research
    </ion-breadcrumb>
    <ion-breadcrumb>
      <ion-icon slot="start" :icon="document"></ion-icon>
      Survey.txt
    </ion-breadcrumb>
  </ion-breadcrumbs>

  <!-- Icon end -->
  <ion-breadcrumbs>
    <ion-breadcrumb href="#">
      Home
      <ion-icon slot="end" :icon="home"></ion-icon>
    </ion-breadcrumb>
    <ion-breadcrumb href="#files">
      Files
      <ion-icon slot="end" :icon="folder"></ion-icon>
    </ion-breadcrumb>
    <ion-breadcrumb href="#projects">
      Projects
      <ion-icon slot="end" :icon="folder"></ion-icon>
    </ion-breadcrumb>
    <ion-breadcrumb href="#user-research">
      User Research
      <ion-icon slot="end" :icon="folder"></ion-icon>
    </ion-breadcrumb>
    <ion-breadcrumb>
      Survey.txt
      <ion-icon slot="end" :icon="document"></ion-icon>
    </ion-breadcrumb>
  </ion-breadcrumbs>
</template>

<script>
import { IonBreadcrumb, IonBreadcrumbs, IonIcon } from '@ionic/vue';
import { document, folder, home } from 'ionicons/icons';
import { defineComponent } from 'vue';

export default defineComponent({
  components: { IonBreadcrumb, IonBreadcrumbs, IonIcon },
  setup() {
    return { document, folder, home }
  }
});
</script>
```

### Custom Separator

```html
<template>
  <!-- Custom separator text -->
  <ion-breadcrumbs>
    <ion-breadcrumb href="#">
      Home
      <span slot="separator">|</span>
    </ion-breadcrumb>
    <ion-breadcrumb href="#electronics">
      Electronics
      <span slot="separator">|</span>
    </ion-breadcrumb>
    <ion-breadcrumb href="#photography">
      Photography
      <span slot="separator">|</span>
    </ion-breadcrumb>
    <ion-breadcrumb href="#cameras">
      Cameras
      <span slot="separator">|</span>
    </ion-breadcrumb>
    <ion-breadcrumb href="#film">
      Film
      <span slot="separator">|</span>
    </ion-breadcrumb>
    <ion-breadcrumb>
      35 mm
    </ion-breadcrumb>
  </ion-breadcrumbs>

  <!-- Custom separator icon -->
  <ion-breadcrumbs>
    <ion-breadcrumb href="#">
      Home
      <ion-icon slot="separator" :icon="arrowForward"></ion-icon>
    </ion-breadcrumb>
    <ion-breadcrumb href="#electronics">
      Electronics
      <ion-icon slot="separator" :icon="arrowForward"></ion-icon>
    </ion-breadcrumb>
    <ion-breadcrumb href="#photography">
      Photography
      <ion-icon slot="separator" :icon="arrowForward"></ion-icon>
    </ion-breadcrumb>
    <ion-breadcrumb href="#cameras">
      Cameras
      <ion-icon slot="separator" :icon="arrowForward"></ion-icon>
    </ion-breadcrumb>
    <ion-breadcrumb href="#film">
      Film
      <ion-icon slot="separator" :icon="arrowForward"></ion-icon>
    </ion-breadcrumb>
    <ion-breadcrumb>
      35 mm
    </ion-breadcrumb>
  </ion-breadcrumbs>
</template>

<script>
import { IonBreadcrumb, IonBreadcrumbs, IonIcon } from '@ionic/vue';
import { arrowForward } from 'ionicons/icons';
import { defineComponent } from 'vue';

export default defineComponent({
  components: { IonBreadcrumb, IonBreadcrumbs, IonIcon },
  setup() {
    return { arrowForward }
  }
});
</script>
```

### Max Items

```html
<template>
  <!-- Max Items -->
  <ion-breadcrumbs :max-items="4">
    <ion-breadcrumb href="#">
      Home
    </ion-breadcrumb>
    <ion-breadcrumb href="#electronics">
      Electronics
    </ion-breadcrumb>
    <ion-breadcrumb href="#photography">
      Photography
    </ion-breadcrumb>
    <ion-breadcrumb href="#cameras">
      Cameras
    </ion-breadcrumb>
    <ion-breadcrumb href="#film">
      Film
    </ion-breadcrumb>
    <ion-breadcrumb>
      35 mm
    </ion-breadcrumb>
  </ion-breadcrumbs>
</template>

<script>
import { IonBreadcrumb, IonBreadcrumbs } from '@ionic/vue';
import { defineComponent } from 'vue';

export default defineComponent({
  components: { IonBreadcrumb, IonBreadcrumbs }
});
</script>
```

### Items Before or After Collapse

```html
<template>
  <!-- Items before collapse -->
  <ion-breadcrumbs :max-items="4" :items-before-collapse="2">
    <ion-breadcrumb href="#">
      Home
    </ion-breadcrumb>
    <ion-breadcrumb href="#electronics">
      Electronics
    </ion-breadcrumb>
    <ion-breadcrumb href="#photography">
      Photography
    </ion-breadcrumb>
    <ion-breadcrumb href="#cameras">
      Cameras
    </ion-breadcrumb>
    <ion-breadcrumb href="#film">
      Film
    </ion-breadcrumb>
    <ion-breadcrumb>
      35 mm
    </ion-breadcrumb>
  </ion-breadcrumbs>

  <!-- Items after collapse -->
  <ion-breadcrumbs :max-items="4" :items-after-collapse="3">
    <ion-breadcrumb href="#">
      Home
    </ion-breadcrumb>
    <ion-breadcrumb href="#electronics">
      Electronics
    </ion-breadcrumb>
    <ion-breadcrumb href="#photography">
      Photography
    </ion-breadcrumb>
    <ion-breadcrumb href="#cameras">
      Cameras
    </ion-breadcrumb>
    <ion-breadcrumb href="#film">
      Film
    </ion-breadcrumb>
    <ion-breadcrumb>
      35 mm
    </ion-breadcrumb>
  </ion-breadcrumbs>

  <!-- Items before and after collapse -->
  <ion-breadcrumbs :max-items="4" :items-before-collapse="0" :items-after-collapse="3">
    <ion-breadcrumb href="#">
      Home
    </ion-breadcrumb>
    <ion-breadcrumb href="#electronics">
      Electronics
    </ion-breadcrumb>
    <ion-breadcrumb href="#photography">
      Photography
    </ion-breadcrumb>
    <ion-breadcrumb href="#cameras">
      Cameras
    </ion-breadcrumb>
    <ion-breadcrumb href="#film">
      Film
    </ion-breadcrumb>
    <ion-breadcrumb>
      35 mm
    </ion-breadcrumb>
  </ion-breadcrumbs>
</template>

<script>
import { IonBreadcrumb, IonBreadcrumbs } from '@ionic/vue';
import { defineComponent } from 'vue';

export default defineComponent({
  components: { IonBreadcrumb, IonBreadcrumbs }
});
</script>
```

### Expand on Collapsed Indicator Click

```html
<template>
  <ion-breadcrumbs :max-items="maxBreadcrumbs" @ionCollapsedClick="expandBreadcrumbs()">
    <ion-breadcrumb href="#">
      Home
    </ion-breadcrumb>
    <ion-breadcrumb href="#electronics">
      Electronics
    </ion-breadcrumb>
    <ion-breadcrumb href="#photography">
      Photography
    </ion-breadcrumb>
    <ion-breadcrumb href="#cameras">
      Cameras
    </ion-breadcrumb>
    <ion-breadcrumb href="#film">
      Film
    </ion-breadcrumb>
    <ion-breadcrumb>
      35 mm
    </ion-breadcrumb>
  </ion-breadcrumbs>
</template>

<script>
import { IonBadge, IonItem, IonLabel } from '@ionic/vue';
import { defineComponent, ref } from 'vue';

export default defineComponent({
  components: { IonBadge, IonItem, IonLabel },
  setup() {
    const maxBreadcrumbs = ref(4);

    return { maxBreadcrumbs };
  },
  methods: {
    expandBreadcrumbs() {
      maxBreadcrumbs.value = undefined;
    }
  }
});
</script>
```


### Popover on Collapsed Indicator Click

```html
<template>
  <ion-breadcrumbs :max-items="4" @ionCollapsedClick="presentPopover($event)">
    <ion-breadcrumb href="#">
      Home
    </ion-breadcrumb>
    <ion-breadcrumb href="#electronics">
      Electronics
    </ion-breadcrumb>
    <ion-breadcrumb href="#photography">
      Photography
    </ion-breadcrumb>
    <ion-breadcrumb href="#cameras">
      Cameras
    </ion-breadcrumb>
    <ion-breadcrumb href="#film">
      Film
    </ion-breadcrumb>
    <ion-breadcrumb>
      35 mm
    </ion-breadcrumb>
  </ion-breadcrumbs>
</template>

<script>
import { IonBadge, IonItem, IonLabel, popoverController } from '@ionic/vue';
import { defineComponent, ref } from 'vue';
import ListPopover from './popover.vue';

export default defineComponent({
  components: { IonBadge, IonItem, IonLabel },
  methods: {
    async presentPopover(ev: Event) {
      const popover = await popoverController.create({
        component: ListPopover,
        event: ev
      });
      await popover.present();
    },
  }
});
</script>
```

```html
<template>
  <ion-content>
    <ion-list>
      <ion-item href="#">
        <ion-label>Home</ion-label>
      </ion-item>
      <ion-item href="#electronics">
        <ion-label>Electronics</ion-label>
      </ion-item>
      <ion-item href="#photography">
        <ion-label>Photography</ion-label>
      </ion-item>
      <ion-item href="#cameras">
        <ion-label>Cameras</ion-label>
      </ion-item>
    </ion-list>
  </ion-content>
</template>

<script>
import { IonContent } from '@ionic/vue';
import { defineComponent } from 'vue';

export default defineComponent({
  name: 'ListPopover',
  components: { IonContent, IonItem, IonLabel, IonList }
});
</script>
```



## Properties

| Property              | Attribute               | Description                                                                                                                                                                                                                                                            | Type                  | Default     |
| --------------------- | ----------------------- | ---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | --------------------- | ----------- |
| `color`               | `color`                 | The color to use from your application's color palette. Default options are: `"primary"`, `"secondary"`, `"tertiary"`, `"success"`, `"warning"`, `"danger"`, `"light"`, `"medium"`, and `"dark"`. For more information on colors, see [theming](/docs/theming/basics). | `string \| undefined` | `undefined` |
| `itemsAfterCollapse`  | `items-after-collapse`  | The number of breadcrumbs to show after the collapsed indicator. If this property exists `maxItems` will be ignored.                                                                                                                                                   | `number`              | `1`         |
| `itemsBeforeCollapse` | `items-before-collapse` | The number of breadcrumbs to show before the collapsed indicator. If this property exists `maxItems` will be ignored.                                                                                                                                                  | `number`              | `1`         |
| `maxItems`            | `max-items`             | The maximum number of breadcrumbs to show before collapsing.                                                                                                                                                                                                           | `number \| undefined` | `undefined` |
| `mode`                | `mode`                  | The mode determines which platform styles to use.                                                                                                                                                                                                                      | `"ios" \| "md"`       | `undefined` |


## Events

| Event               | Description                                         | Type                                               |
| ------------------- | --------------------------------------------------- | -------------------------------------------------- |
| `ionCollapsedClick` | Emitted when the collapsed indicator is clicked on. | `CustomEvent<BreadcrumbCollapsedClickEventDetail>` |


## CSS Custom Properties

| Name           | Description                   |
| -------------- | ----------------------------- |
| `--background` | Background of the breadcrumbs |
| `--color`      | Text color of the breadcrumbs |


----------------------------------------------

*Built with [StencilJS](https://stenciljs.com/)*
