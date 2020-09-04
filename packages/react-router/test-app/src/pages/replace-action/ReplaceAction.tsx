import React from 'react';
import { IonContent, IonHeader, IonPage, IonTitle, IonToolbar, IonButton, IonRouterOutlet, IonButtons, IonBackButton } from '@ionic/react';
import { Route, Redirect, useHistory } from 'react-router';

interface TopPageProps {
}

const ReplaceAction: React.FC<TopPageProps> = () => {
  return (
    <IonRouterOutlet>
      <Route path="/replace-action/page1" component={Page1} exact />
      <Route path="/replace-action/page2" component={Page2} exact />
      <Route path="/replace-action/page3" component={Edit} exact />
      <Route exact path="/replace-action" render={() => <Redirect to="/replace-action/page1" />} />
    </IonRouterOutlet>
  );
};

const Page1: React.FC = () => (
  <IonPage data-pageid="page1">
    <IonHeader>
      <IonToolbar>
        <IonButtons slot="start">
          <IonBackButton />
        </IonButtons>
        <IonTitle>Page one</IonTitle>
      </IonToolbar>
    </IonHeader>
    <IonContent>
      <IonButton routerLink={'/replace-action/page2'}>
        Goto Page2
      </IonButton>
    </IonContent>
  </IonPage>
);

const Page2: React.FC = () => {

  const history = useHistory();

  const clickButton = () => {
    history.replace('/replace-action/page3');
  };

  return (
    <IonPage data-pageid="page2">
      <IonHeader>
        <IonToolbar>
          <IonButtons slot="start">
            <IonBackButton/>
          </IonButtons>
          <IonTitle>Page two</IonTitle>
        </IonToolbar>
      </IonHeader>
      <IonContent>
        <IonButton onClick={() => clickButton()}>
          Replace Page3
        </IonButton>
      </IonContent>
    </IonPage>
  );
};

const Edit: React.FC = () => {
  return (
    <IonPage data-pageid="page3">
      <IonHeader>
        <IonToolbar>
          <IonButtons slot="start">
            <IonBackButton text="Back to page 1" defaultHref="/replace-action/page1" />
          </IonButtons>
          <IonTitle>Page three</IonTitle>
        </IonToolbar>
      </IonHeader>
      <IonContent>
        <p>Page 3</p>
      </IonContent>
    </IonPage>
  );
};

export default ReplaceAction;
