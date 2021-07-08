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
