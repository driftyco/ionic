```tsx
import React, { useState } from 'react';
import { IonContent, IonHeader, IonPage, IonTitle, IonToolbar, IonToggle, IonList, IonItem, IonLabel, IonItemDivider } from '@ionic/react';

export const ToggleExamples: React.FC = () => {
  const [checked, setChecked] = useState(false);
  return (
    <IonPage>
      <IonHeader>
        <IonToolbar>
          <IonTitle>ToggleExamples</IonTitle>
        </IonToolbar>
      </IonHeader>
      <IonContent>
        <IonList>

          <IonItemDivider>Default Toggle</IonItemDivider>
          <IonItem>
            <IonLabel>Checked: {JSON.stringify(checked)}</IonLabel>
            <IonToggle checked={checked} onIonChange={e => setChecked(e.detail.checked)} />
          </IonItem>

          <IonItemDivider>Disabled Toggle</IonItemDivider>
          <IonItem><IonToggle disabled /></IonItem>

          <IonItemDivider>Checked Toggle</IonItemDivider>
          <IonItem><IonToggle checked /></IonItem>

          <IonItemDivider>Checked With IO labels</IonItemDivider>
          <IonItem><IonToggle ioIOSLabels={true}/></IonItem>

          <IonItemDivider>Toggle Colors</IonItemDivider>
          <IonItem><IonToggle color="primary" /></IonItem>
          <IonItem><IonToggle color="secondary" /></IonItem>
          <IonItem><IonToggle color="danger" /></IonItem>
          <IonItem><IonToggle color="light" /></IonItem>
          <IonItem><IonToggle color="dark" /></IonItem>

          <IonItemDivider>Toggles in a List</IonItemDivider>
          <IonItem>
            <IonLabel>Pepperoni</IonLabel>
            <IonToggle value="pepperoni" />
          </IonItem>

          <IonItem>
            <IonLabel>Sausage</IonLabel>
            <IonToggle value="sausage" disabled={true} />
          </IonItem>

          <IonItem>
            <IonLabel>Mushrooms</IonLabel>
            <IonToggle value="mushrooms" />
          </IonItem>

          <IonItem>
            <IonLabel>Tuna</IonLabel>
            <IonToggle value="tuna" ioIOSLabels={true}/>
          </IonItem>
        </IonList>
      </IonContent>
    </IonPage>
  );
};
```