```javascript
import { Component, h } from '@stencil/core';

@Component({
  tag: 'datetime-example',
  styleUrl: 'datetime-example.css'
})
export class DatetimeExample {
  private customDatetime?: HTMLElement;
  
  private confirm() {
    const { customDatetime } = this;
    if (customDatetime === undefined) return;
    
    customDatetime.confirm();
  }

  private reset() {
    const { customDatetime } = this;
    if (customDatetime === undefined) return;
    
    customDatetime.reset();
  }
  
  render() {
    return [
      {/* Initial value */}
      <ion-datetime value="2012-12-15T13:47:20.789"></ion-datetime>,
      
      {/* Readonly */}
      <ion-datetime readonly></ion-datetime>,
      
      {/* Disabled */}
      <ion-datetime disabled></ion-datetime>,
      
      {/* Custom locale */}
      <ion-datetime locale="en-GB"></ion-datetime>,
      
      {/* Max and min */}
      <ion-datetime min="1994-03-14" max="2012-12-09" value="2008-09-02"></ion-datetime>,
      
      {/* 15 minute increments */}
      <ion-datetime minuteValues="0,15,30,45"></ion-datetime>,
      
      {/* Specific days/months/years */} 
      <ion-datetime monthValues="6,7,8" yearValues="2014,2015" dayValues="01,02,03,04,05,06,08,09,10,11,12,13,14"></ion-datetime>,
      
      {/* Selecting time, no date */}
      <ion-datetime presentation="time"></ion-datetime>,
      
      {/* Selecting time first, date second */}
      <ion-datetime presentation="time-date"></ion-datetime>,
      
      {/* Custom title */}
      <ion-datetime>
        <div slot="title">My Custom Title</div>
      </ion-datetime>,
      
      {/* Custom buttons */}
      <ion-datetime ref={el => this.customDatetime = el}>
        <ion-buttons slot="buttons">
          <ion-button onClick={() => this.confirm()}>Good to go!</ion-button>
          <ion-button onClick={() => this.reset()}>Reset</ion-button>
        </ion-buttons>
      </ion-datetime>,
      
      {/* Datetime in overlay */}
      <ion-button id="open-modal">Open Datetime Modal</ion-button>
      <ion-modal trigger="open-modal">
        <ion-content>
          <ion-datetime></ion-datetime>
        </ion-content>
      </ion-modal>
    ]
  }
}
```