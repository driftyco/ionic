```html
<template>
  <ion-button @click="presentAlert">Show Alert</ion-button>
  <ion-button @click="presentAlertMultipleButtons">Show Alert (multiple buttons)</ion-button>
  <ion-button @click="presentAlertConfirm">Show Alert (confirm)</ion-button>
  <ion-button @click="presentAlertPrompt">Show Alert (prompt)</ion-button>
  <ion-button @click="presentAlertRadio">Show Alert (radio)</ion-button>
  <ion-button @click="presentAlertCheckbox">Show Alert (checkbox)</ion-button>
</template>

<script>
import { IonButton, alertController } from '@ionic/vue';
import { defineComponent } from 'vue';

export default defineComponent({
  components: { IonButton },
  methods: {
    async presentAlert() {
      const alert = await alertController
        .create({
          cssClass: 'my-custom-class',
          header: 'Alert',
          subHeader: 'Subtitle',
          message: 'This is an alert message.',
          buttons: ['OK'],
        });
      await alert.present();

      const { role } = await alert.onDidDismiss();
      console.log('onDidDismiss resolved with role', role);
    },

    async presentAlertMultipleButtons() {
      const alert = await alertController
        .create({
          cssClass: 'my-custom-class',
          header: 'Alert',
          subHeader: 'Subtitle',
          message: 'This is an alert message.',
          buttons: ['Cancel', 'Open Modal', 'Delete'],
        });
      return alert.present();
    },

    async presentAlertConfirm() {
      const alert = await alertController
        .create({
          cssClass: 'my-custom-class',
          header: 'Confirm!',
          message: 'Message <strong>text</strong>!!!',
          buttons: [
            {
              text: 'Cancel',
              role: 'cancel',
              cssClass: 'secondary',
              id: 'cancel-button',
              handler: blah => {
                console.log('Confirm Cancel:', blah)
              },
            },
            {
              text: 'Okay',
              id: 'confirm-button',
              handler: () => {
                console.log('Confirm Okay')
              },
            },
          ],
        });
      return alert.present();
    },

    async presentAlertPrompt() {
      const alert = await alertController
        .create({
          cssClass: 'my-custom-class',
          header: 'Prompt!',
          inputs: [
            {
              placeholder: 'Placeholder 1',
            },
            {
              name: 'name2',
              id: 'name2-id',
              value: 'hello',
              placeholder: 'Placeholder 2',
            },
            {
              name: 'name3',
              value: 'http://ionicframework.com',
              type: 'url',
              placeholder: 'Favorite site ever',
            },
            // input date with min & max
            {
              name: 'name4',
              type: 'date',
              min: '2017-03-01',
              max: '2018-01-12',
            },
            // input date without min nor max
            {
              name: 'name5',
              type: 'date',
            },
            {
              name: 'name6',
              type: 'number',
              min: -5,
              max: 10,
            },
            {
              name: 'name7',
              type: 'number',
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
          ],
          buttons: [
            {
              text: 'Cancel',
              role: 'cancel',
              cssClass: 'secondary',
              handler: () => {
                console.log('Confirm Cancel')
              },
            },
            {
              text: 'Ok',
              handler: () => {
                console.log('Confirm Ok')
              },
            },
          ],
        });
      return alert.present();
    },

    async presentAlertRadio() {
      const alert = await alertController
        .create({
          cssClass: 'my-custom-class',
          header: 'Radio',
          inputs: [
            {
              type: 'radio',
              label: 'Radio 1',
              value: 'value1',
              handler: () => {
                console.log('Radio 1 selected');
              },
              checked: true,
            },
            {
              type: 'radio',
              label: 'Radio 2',
              value: 'value2',
              handler: () => {
                console.log('Radio 2 selected');
              }
            },
            {
              type: 'radio',
              label: 'Radio 3',
              value: 'value3',
              handler: () => {
                console.log('Radio 3 selected');
              }
            },
            {
              type: 'radio',
              label: 'Radio 4',
              value: 'value4',
              handler: () => {
                console.log('Radio 4 selected');
              }
            },
            {
              type: 'radio',
              label: 'Radio 5',
              value: 'value5',
              handler: () => {
                console.log('Radio 5 selected');
              }
            },
            {
              type: 'radio',
              label: 'Radio 6',
              value: 'value6',
              handler: () => {
                console.log('Radio 6 selected');
              }
            },
          ],
          buttons: [
            {
              text: 'Cancel',
              role: 'cancel',
              cssClass: 'secondary',
              handler: () => {
                console.log('Confirm Cancel')
              },
            },
            {
              text: 'Ok',
              handler: () => {
                console.log('Confirm Ok')
              },
            },
          ],
        });
      return alert.present();
    },

    async presentAlertCheckbox() {
      const alert = await alertController
        .create({
          cssClass: 'my-custom-class',
          header: 'Checkbox',
          inputs: [
            {
              type: 'checkbox',
              label: 'Checkbox 1',
              value: 'value1',
              handler: () => {
                console.log('Checkbox 1 selected');
              },
              checked: true,
            },

            {
              type: 'checkbox',
              label: 'Checkbox 2',
              value: 'value2',
              handler: () => {
                console.log('Checkbox 2 selected');
              }
            },

            {
              type: 'checkbox',
              label: 'Checkbox 3',
              value: 'value3',
              handler: () => {
                console.log('Checkbox 3 selected');
              }
            },

            {
              type: 'checkbox',
              label: 'Checkbox 4',
              value: 'value4',
              handler: () => {
                console.log('Checkbox 4 selected');
              }
            },

            {
              type: 'checkbox',
              label: 'Checkbox 5',
              value: 'value5',
              handler: () => {
                console.log('Checkbox 5 selected');
              }
            },

            {
              type: 'checkbox',
              label: 'Checkbox 6',
              value: 'value6',
              handler: () => {
                console.log('Checkbox 6 selected');
              }
            },
          ],
          buttons: [
            {
              text: 'Cancel',
              role: 'cancel',
              cssClass: 'secondary',
              handler: () => {
                console.log('Confirm Cancel')
              },
            },
            {
              text: 'Ok',
              handler: () => {
                console.log('Confirm Ok')
              },
            },
          ],
        });
      return alert.present();
    },
  },
});
</script>
```

Developers can also use this component directly in their template:

```html
<template>
  <ion-button @click="setOpen(true)">Show Alert</ion-button>
  <ion-alert
    :is-open="isOpenRef"
    header="Alert"
    sub-header="Subtitle"
    message="This is an alert message."
    css-class="my-custom-class"
    :buttons="buttons"
    @didDismiss="setOpen(false)"
  >
  </ion-alert>
</template>

<script>
import { IonAlert, IonButton } from '@ionic/vue';
import { defineComponent, ref } from 'vue';

export default defineComponent({
  components: { IonAlert, IonButton },
  setup() {
    const isOpenRef = ref(false);
    const setOpen = (state: boolean) => isOpenRef.value = state;
    const buttons = ['Ok'];
    
    return { buttons, isOpenRef, setOpen }
  }
});
</script>
```
