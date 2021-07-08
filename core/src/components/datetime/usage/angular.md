```html
<!-- Initial value -->
<ion-datetime value="2012-12-15T13:47:20.789"></ion-datetime>

<!-- Readonly -->
<ion-datetime readonly></ion-datetime>

<!-- Disabled -->
<ion-datetime disabled></ion-datetime>

<!-- Custom locale -->
<ion-datetime locale="en-GB"></ion-datetime>

<!-- Max and min -->
<ion-datetime min="1994-03-14" max="2012-12-09" value="2008-09-02"></ion-datetime>

<!-- 15 minute increments -->
<ion-datetime minuteValues="0,15,30,45"></ion-datetime>

<!-- Specific days/months/years --> 
<ion-datetime monthValues="6,7,8" yearValues="2014,2015" dayValues="01,02,03,04,05,06,08,09,10,11,12,13,14"></ion-datetime>

<!-- Selecting time, no date -->
<ion-datetime presentation="time"></ion-datetime>

<!-- Selecting time first, date second -->
<ion-datetime presentation="time-date"></ion-datetime>

<!-- Custom title -->
<ion-datetime>
  <div slot="title">My Custom Title</div>
</ion-datetime>

<!-- Custom buttons -->
<ion-datetime #customDatetime>
  <ion-buttons slot="buttons">
    <ion-button (click)="confirm()">Good to go!</ion-button>
    <ion-button (click)="reset()">Reset</ion-button>
  </ion-buttons>
</ion-datetime>

<!-- Datetime in overlay -->
<ion-button id="open-modal">Open Datetime Modal</ion-button>
<ion-modal trigger="open-modal">
  <ng-template>
    <ion-content>
      <ion-datetime></ion-datetime>
    </ion-content>
  </ng-template>
</ion-modal>

```javascript
@Component({…})
export class MyComponent {
  @ViewChild('customDatetime', { static: false }) datetime: HTMLIonDateTimeElement;
  constructor() {}
  
  confirm() {
    this.datetime.nativeEl.confirm();
  }
  
  reset() {
    this.datetime.nativeEl.reset();
  }
}
```