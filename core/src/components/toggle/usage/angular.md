```html
<!-- Default Toggle -->
<ion-toggle></ion-toggle>

<!-- Disabled Toggle -->
<ion-toggle disabled></ion-toggle>

<!-- Checked Toggle -->
<ion-toggle checked></ion-toggle>

<!-- IO Labeled Toggle -->
<ion-toggle ioIOSLabels ></ion-toggle>

<!-- Toggle Colors -->
<ion-toggle color="primary"></ion-toggle>
<ion-toggle color="secondary"></ion-toggle>
<ion-toggle color="danger"></ion-toggle>
<ion-toggle color="light"></ion-toggle>
<ion-toggle color="dark"></ion-toggle>

<!-- Toggles in a List -->
<ion-list>
  <ion-item>
    <ion-label>Pepperoni</ion-label>
    <ion-toggle [(ngModel)]="pepperoni"></ion-toggle>
  </ion-item>

  <ion-item>
    <ion-label>Sausage</ion-label>
    <ion-toggle [(ngModel)]="sausage" disabled="true"></ion-toggle>
  </ion-item>

  <ion-item>
    <ion-label>Mushrooms</ion-label>
    <ion-toggle [(ngModel)]="mushrooms"></ion-toggle>
  </ion-item>

  <ion-item>
    <ion-label>Tuna</ion-label>
    <ion-toggle [(ngModel)]="tuna" ioIOSLabels ></ion-toggle>
  </ion-item>
</ion-list>
```
