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
