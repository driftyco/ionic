```tsx
/* Using with useIonAlert Hook */

import React from 'react';
import { IonButton, IonContent, IonPage, useIonAlert } from '@ionic/react';

const AlertExample: React.FC = () => {
  const [present] = useIonAlert();
  return (
    <IonPage>
      <IonContent fullscreen>
        <IonButton
          expand="block"
          onClick={() =>
            present({
              cssClass: 'my-css',
              header: 'Alert',
              message: 'alert from hook',
              buttons: [
                'Cancel',
                { text: 'Ok', handler: (d) => console.log('ok pressed') },
              ],
              onDidDismiss: (e) => console.log('did dismiss'),
            })
          }
        >
          Show Alert
        </IonButton>
        <IonButton
          expand="block"
          onClick={() => present('hello with params', [{ text: 'Ok' }])}
        >
          Show Alert using params
        </IonButton>
      </IonContent>
    </IonPage>
  );
};
```

```tsx
/* Using with IonAlert Component */

import React, { useState } from 'react';
import { IonAlert, IonButton, IonContent } from '@ionic/react';

export const AlertExample: React.FC = () => {

  const [showAlert1, setShowAlert1] = useState(false);
  const [showAlert2, setShowAlert2] = useState(false);
  const [showAlert3, setShowAlert3] = useState(false);
  const [showAlert4, setShowAlert4] = useState(false);
  const [showAlert5, setShowAlert5] = useState(false);
  const [showAlert6, setShowAlert6] = useState(false);

    return (
      <IonContent>
        <IonButton onClick={() => setShowAlert1(true)} expand="block">Show Alert 1</IonButton>
        <IonButton onClick={() => setShowAlert2(true)} expand="block">Show Alert 2</IonButton>
        <IonButton onClick={() => setShowAlert3(true)} expand="block">Show Alert 3</IonButton>
        <IonButton onClick={() => setShowAlert4(true)} expand="block">Show Alert 4</IonButton>
        <IonButton onClick={() => setShowAlert5(true)} expand="block">Show Alert 5</IonButton>
        <IonButton onClick={() => setShowAlert6(true)} expand="block">Show Alert 6</IonButton>
        <IonAlert
          isOpen={showAlert1}
          onDidDismiss={() => setShowAlert1(false)}
          cssClass='my-custom-class'
          header={'Alert'}
          subHeader={'Subtitle'}
          message={'This is an alert message.'}
          buttons={['OK']}
        />

        <IonAlert
          isOpen={showAlert2}
          onDidDismiss={() => setShowAlert2(false)}
          cssClass='my-custom-class'
          header={'Alert'}
          subHeader={'Subtitle'}
          message={'This is an alert message.'}
          buttons={['Cancel', 'Open Modal', 'Delete']}
        />

        <IonAlert
          isOpen={showAlert3}
          onDidDismiss={() => setShowAlert3(false)}
          cssClass='my-custom-class'
          header={'Confirm!'}
          message={'Message <strong>text</strong>!!!'}
          buttons={[
            {
              text: 'Cancel',
              role: 'cancel',
              cssClass: 'secondary',
              id: 'cancel-button',
              handler: blah => {
                console.log('Confirm Cancel: blah');
              }
            },
            {
              text: 'Okay',
              id: 'confirm-button',
              handler: () => {
                console.log('Confirm Okay');
              }
            }
          ]}
        />

        <IonAlert
          isOpen={showAlert4}
          onDidDismiss={() => setShowAlert4(false)}
          cssClass='my-custom-class'
          header={'Prompt!'}
          inputs={[
            {
              name: 'name1',
              type: 'text',
              placeholder: 'Placeholder 1'
            },
            {
              name: 'name2',
              type: 'text',
              id: 'name2-id',
              value: 'hello',
              placeholder: 'Placeholder 2'
            },
            {
              name: 'name3',
              value: 'http://ionicframework.com',
              type: 'url',
              placeholder: 'Favorite site ever'
            },
            // input date with min & max
            {
              name: 'name4',
              type: 'date',
              min: '2017-03-01',
              max: '2018-01-12'
            },
            // input date without min nor max
            {
              name: 'name5',
              type: 'date'
            },
            {
              name: 'name6',
              type: 'number',
              min: -5,
              max: 10
            },
            {
              name: 'name7',
              type: 'number'
            },
            {
              name: 'name8',
              type: 'password',
              placeholder: 'Advanced Attributes',
              cssClass: 'specialClass',
              attributes: {
                maxlength: 4,
                inputmode: 'decimal'
              }
            }
          ]}
          buttons={[
            {
              text: 'Cancel',
              role: 'cancel',
              cssClass: 'secondary',
              handler: () => {
                console.log('Confirm Cancel');
              }
            },
            {
              text: 'Ok',
              handler: () => {
                console.log('Confirm Ok');
              }
            }
          ]}
        />

        <IonAlert
          isOpen={showAlert5}
          onDidDismiss={() => setShowAlert5(false)}
          cssClass='my-custom-class'
          header={'Radio'}
          inputs={[
            {
              name: 'radio1',
              type: 'radio',
              label: 'Radio 1',
              value: 'value1',
              handler: () => {
                console.log('Radio 1 selected');
              },
              checked: true
            },
            {
              name: 'radio2',
              type: 'radio',
              label: 'Radio 2',
              value: 'value2',
              handler: () => {
                console.log('Radio 2 selected');
              }
            },
            {
              name: 'radio3',
              type: 'radio',
              label: 'Radio 3',
              value: 'value3',
              handler: () => {
                console.log('Radio 3 selected');
              }
            },
            {
              name: 'radio4',
              type: 'radio',
              label: 'Radio 4',
              value: 'value4',
              handler: () => {
                console.log('Radio 4 selected');
              }
            },
            {
              name: 'radio5',
              type: 'radio',
              label: 'Radio 5',
              value: 'value5',
              handler: () => {
                console.log('Radio 5 selected');
              }
            },
            {
              name: 'radio6',
              type: 'radio',
              label: 'Radio 6',
              value: 'value6',
              handler: () => {
                console.log('Radio 6 selected');
              }
            }
          ]}
          buttons={[
            {
              text: 'Cancel',
              role: 'cancel',
              cssClass: 'secondary',
              handler: () => {
                console.log('Confirm Cancel');
              }
            },
            {
              text: 'Ok',
              handler: () => {
                console.log('Confirm Ok');
              }
            }
          ]}
        />

        <IonAlert
          isOpen={showAlert6}
          onDidDismiss={() => setShowAlert6(false)}
          cssClass='my-custom-class'
          header={'Checkbox'}
          inputs={[
            {
              name: 'checkbox1',
              type: 'checkbox',
              label: 'Checkbox 1',
              value: 'value1',
              handler: () => {
                console.log('Checkbox 1 selected');
              },
              checked: true
            },
            {
              name: 'checkbox2',
              type: 'checkbox',
              label: 'Checkbox 2',
              value: 'value2',
              handler: () => {
                console.log('Checkbox 2 selected');
              }
            },
            {
              name: 'checkbox3',
              type: 'checkbox',
              label: 'Checkbox 3',
              value: 'value3',
              handler: () => {
                console.log('Checkbox 3 selected');
              }
            },
            {
              name: 'checkbox4',
              type: 'checkbox',
              label: 'Checkbox 4',
              value: 'value4',
              handler: () => {
                console.log('Checkbox 4 selected');
              }
            },
            {
              name: 'checkbox5',
              type: 'checkbox',
              label: 'Checkbox 5',
              value: 'value5',
              handler: () => {
                console.log('Checkbox 5 selected');
              }
            },
            {
              name: 'checkbox6',
              type: 'checkbox',
              label: 'Checkbox 6',
              value: 'value6',
              handler: () => {
                console.log('Checkbox 6 selected');
              }
            }
          ]}
          buttons={[
            {
              text: 'Cancel',
              role: 'cancel',
              cssClass: 'secondary',
              handler: () => {
                console.log('Confirm Cancel');
              }
            },
            {
              text: 'Ok',
              handler: () => {
                console.log('Confirm Ok');
              }
            }
          ]}
        />
      </IonContent>
    );
}

export default AlertExample;

```
