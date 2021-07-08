```javascript
import React, { useState, useRef } from 'react';
import {
  IonButton,
  IonButtons,
  IonContent,
  IonDatetime,
  IonModal,
  IonPage
} from '@ionic/react';

export const DateTimeExamples: React.FC = () => {
  const [selectedDate, setSelectedDate] = useState<string>('2012-12-15T13:47:20.789');
  const customDatetime = useRef();
  const confirm = () => {
    if (customDatetime === undefined) return;
    
    customDatetime.confirm();
  }
  
  const reset = () => {
    if (customDatetime === undefined) return;
    
    customDatetime.reset();
  }

  return (
    <IonPage>
      {/* Initial value */}
      <IonDatetime value={selectedDate} onIonChange={e => setSelectedDate(e.detail.value!)}></IonDatetime>
      
      {/* Readonly */}
      <IonDatetime readonly></IonDatetime>
      
      {/* Disabled */}
      <IonDatetime disabled></IonDatetime>
      
      {/* Custom locale */}
      <IonDatetime locale="en-GB"></IonDatetime>
      
      {/* Max and min */}
      <IonDatetime min="1994-03-14" max="2012-12-09" value="2008-09-02"></IonDatetime>
      
      {/* 15 minute increments */}
      <IonDatetime minuteValues="0,15,30,45"></IonDatetime>
      
      {/* Specific days/months/years */} 
      <IonDatetime monthValues="6,7,8" yearValues="2014,2015" dayValues="01,02,03,04,05,06,08,09,10,11,12,13,14"></IonDatetime>
      
      {/* Selecting time, no date */}
      <IonDatetime presentation="time"></IonDatetime>
      
      {/* Selecting time first, date second */}
      <IonDatetime presentation="time-date"></IonDatetime>
      
      {/* Custom title */}
      <IonDatetime>
        <div slot="title">My Custom Title</div>
      </IonDatetime>
      
      {/* Custom buttons */}
      <IonDatetime ref={customDatetime}>
        <IonButtons slot="buttons">
          <IonButton onClick={() => confirm()}>Good to go!</IonButton>
          <IonButton onClick={() => reset()}>Reset</IonButton>
        </IonButtons>
      </IonDatetime>
      
      {/* Datetime in overlay */}
      <IonButton id="open-modal">Open Datetime Modal</IonButton>
      <IonModal trigger="open-modal">
        <IonContent>
          <IonDatetime></IonDatetime>
        </IonContent>
      </IonModal>
    </IonPage>
  )
}
```