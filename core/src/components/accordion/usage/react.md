```tsx
import React from 'react';

import { IonContent, IonAccordionGroup, IonAccordion, IonItem, IonLabel } from '@ionic/react';
import { arrowDownCircle } from 'ionicons/icons';

export const AccordionExample: React.FC = () => (
  {/*-- Basic --*/}
  <IonAccordionGroup>
    <IonAccordion value="colors">
      <IonItem slot="header">
        <IonLabel>Colors</IonLabel>
      </IonItem>

      <ion-list slot="content">
        <IonItem>
          <IonLabel>Red</IonLabel>
        </IonItem>
        <IonItem>
          <IonLabel>Green</IonLabel>
        </IonItem>
        <IonItem>
          <IonLabel>Blue</IonLabel>
        </IonItem>
      </ion-list>
    </IonAccordion>
    <IonAccordion value="shapes">
      <IonItem slot="header">
        <IonLabel>Shapes</IonLabel>
      </IonItem>

      <ion-list slot="content">
        <IonItem>
          <IonLabel>Circle</IonLabel>
        </IonItem>
        <IonItem>
          <IonLabel>Triangle</IonLabel>
        </IonItem>
        <IonItem>
          <IonLabel>Square</IonLabel>
        </IonItem>
      </ion-list>
    </IonAccordion>
    <IonAccordion value="numbers">
      <IonItem slot="header">
        <IonLabel>Numbers</IonLabel>
      </IonItem>

      <ion-list slot="content">
        <IonItem>
          <IonLabel>1</IonLabel>
        </IonItem>
        <IonItem>
          <IonLabel>2</IonLabel>
        </IonItem>
        <IonItem>
          <IonLabel>3</IonLabel>
        </IonItem>
      </ion-list>
    </IonAccordion>
  </IonAccordionGroup>

  {/*-- Custom Icon --*/}
  <IonAccordionGroup>
    <IonAccordion value="colors" toggleIcon={arrowDownCircle}>
      <IonItem slot="header">
        <IonLabel>Colors</IonLabel>
      </IonItem>

      <ion-list slot="content">
        <IonItem>
          <IonLabel>Red</IonLabel>
        </IonItem>
        <IonItem>
          <IonLabel>Green</IonLabel>
        </IonItem>
        <IonItem>
          <IonLabel>Blue</IonLabel>
        </IonItem>
      </ion-list>
    </IonAccordion>
    <IonAccordion value="shapes" toggleIcon={arrowDownCircle}>
      <IonItem slot="header">
        <IonLabel>Shapes</IonLabel>
      </IonItem>

      <ion-list slot="content">
        <IonItem>
          <IonLabel>Circle</IonLabel>
        </IonItem>
        <IonItem>
          <IonLabel>Triangle</IonLabel>
        </IonItem>
        <IonItem>
          <IonLabel>Square</IonLabel>
        </IonItem>
      </ion-list>
    </IonAccordion>
    <IonAccordion value="numbers" toggleIcon={arrowDownCircle}>
      <IonItem slot="header">
        <IonLabel>Numbers</IonLabel>
      </IonItem>

      <ion-list slot="content">
        <IonItem>
          <IonLabel>1</IonLabel>
        </IonItem>
        <IonItem>
          <IonLabel>2</IonLabel>
        </IonItem>
        <IonItem>
          <IonLabel>3</IonLabel>
        </IonItem>
      </ion-list>
    </IonAccordion>
  </IonAccordionGroup>

  {/*-- Open Accordion --*/}
  <IonAccordionGroup value="colors">
    <IonAccordion value="colors">
      <IonItem slot="header">
        <IonLabel>Colors</IonLabel>
      </IonItem>

      <ion-list slot="content">
        <IonItem>
          <IonLabel>Red</IonLabel>
        </IonItem>
        <IonItem>
          <IonLabel>Green</IonLabel>
        </IonItem>
        <IonItem>
          <IonLabel>Blue</IonLabel>
        </IonItem>
      </ion-list>
    </IonAccordion>
    <IonAccordion value="shapes">
      <IonItem slot="header">
        <IonLabel>Shapes</IonLabel>
      </IonItem>

      <ion-list slot="content">
        <IonItem>
          <IonLabel>Circle</IonLabel>
        </IonItem>
        <IonItem>
          <IonLabel>Triangle</IonLabel>
        </IonItem>
        <IonItem>
          <IonLabel>Square</IonLabel>
        </IonItem>
      </ion-list>
    </IonAccordion>
    <IonAccordion value="numbers">
      <IonItem slot="header">
        <IonLabel>Numbers</IonLabel>
      </IonItem>

      <ion-list slot="content">
        <IonItem>
          <IonLabel>1</IonLabel>
        </IonItem>
        <IonItem>
          <IonLabel>2</IonLabel>
        </IonItem>
        <IonItem>
          <IonLabel>3</IonLabel>
        </IonItem>
      </ion-list>
    </IonAccordion>
  </IonAccordionGroup>

  {/*-- Multiple Accordions --*/}
  <IonAccordionGroup multiple={true} value={['colors', 'numbers']}>
    <IonAccordion value="colors">
      <IonItem slot="header">
        <IonLabel>Colors</IonLabel>
      </IonItem>

      <ion-list slot="content">
        <IonItem>
          <IonLabel>Red</IonLabel>
        </IonItem>
        <IonItem>
          <IonLabel>Green</IonLabel>
        </IonItem>
        <IonItem>
          <IonLabel>Blue</IonLabel>
        </IonItem>
      </ion-list>
    </IonAccordion>
    <IonAccordion value="shapes">
      <IonItem slot="header">
        <IonLabel>Shapes</IonLabel>
      </IonItem>

      <ion-list slot="content">
        <IonItem>
          <IonLabel>Circle</IonLabel>
        </IonItem>
        <IonItem>
          <IonLabel>Triangle</IonLabel>
        </IonItem>
        <IonItem>
          <IonLabel>Square</IonLabel>
        </IonItem>
      </ion-list>
    </IonAccordion>
    <IonAccordion value="numbers">
      <IonItem slot="header">
        <IonLabel>Numbers</IonLabel>
      </IonItem>

      <ion-list slot="content">
        <IonItem>
          <IonLabel>1</IonLabel>
        </IonItem>
        <IonItem>
          <IonLabel>2</IonLabel>
        </IonItem>
        <IonItem>
          <IonLabel>3</IonLabel>
        </IonItem>
      </ion-list>
    </IonAccordion>
  </IonAccordionGroup>
);
```
