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
