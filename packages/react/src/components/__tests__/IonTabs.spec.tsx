import React from 'react';
import { IonTabs, IonTabButton, IonLabel, IonIcon, IonTabBar} from '../index';
import { render, cleanup } from '@testing-library/react';
import { IonRouterOutlet } from '../IonRouterOutlet';

// @ts-ignore
import HTMLIonTabsElement from '@ionic/core/src/components';

afterEach(cleanup)

describe('IonTabs', () => {
  test('should render happy path', () => {
    const { container } = render(
      <IonTabs>
        <IonRouterOutlet></IonRouterOutlet>
        <IonTabBar slot="bottom" currentPath={'/'}>
          <IonTabButton tab="schedule">
            <IonLabel>Schedule</IonLabel>
            <IonIcon name="schedule"></IonIcon>
          </IonTabButton>
          <IonTabButton tab="speakers">
            <IonLabel>Speakers</IonLabel>
            <IonIcon name="speakers"></IonIcon>
          </IonTabButton>
          <IonTabButton tab="map">
            <IonLabel>Map</IonLabel>
            <IonIcon name="map"></IonIcon>
          </IonTabButton>
          <IonTabButton tab="about">
            <IonLabel>About</IonLabel>
            <IonIcon name="about"></IonIcon>
          </IonTabButton>
        </IonTabBar>
      </IonTabs>
    );

    expect(container.children[0].children.length).toEqual(2);
    expect(container.children[0].children[0].tagName).toEqual('ION-ROUTER-OUTLET');
    expect(container.children[0].children[0].className).toEqual('');

    expect(container.children[0].children[1].tagName).toEqual('ION-TAB-BAR');
    expect(container.children[0].children[1].children.length).toEqual(4);
    expect(Array.from(container.children[0].children[1].children).map(c => c.tagName)).toEqual(['ION-TAB-BUTTON', 'ION-TAB-BUTTON', 'ION-TAB-BUTTON', 'ION-TAB-BUTTON']);
  });

  test('should allow for conditional children', () => {
    const { container } = render(
      <IonTabs>
        <IonRouterOutlet></IonRouterOutlet>
        <IonTabBar slot="bottom" currentPath={'/'}>
          {false &&
          <IonTabButton tab="schedule">
            <IonLabel>Schedule</IonLabel>
            <IonIcon name="schedule"></IonIcon>
          </IonTabButton>
          }
          <IonTabButton tab="speakers">
            <IonLabel>Speakers</IonLabel>
            <IonIcon name="speakers"></IonIcon>
          </IonTabButton>
          <IonTabButton tab="map">
            <IonLabel>Map</IonLabel>
            <IonIcon name="map"></IonIcon>
          </IonTabButton>
          <IonTabButton tab="about">
            <IonLabel>About</IonLabel>
            <IonIcon name="about"></IonIcon>
          </IonTabButton>
        </IonTabBar>
      </IonTabs>
    );

    expect(container.children[0].children.length).toEqual(2);
    expect(container.children[0].children[0].tagName).toEqual('ION-ROUTER-OUTLET');
    expect(container.children[0].children[0].className).toEqual('');

    expect(container.children[0].children[1].tagName).toEqual('ION-TAB-BAR');
    expect(container.children[0].children[1].children.length).toEqual(3);
    expect(Array.from(container.children[0].children[1].children).map(c => c.tagName)).toEqual(['ION-TAB-BUTTON', 'ION-TAB-BUTTON', 'ION-TAB-BUTTON']);
  });

  test('should compile with HTMLIonTabsElement refs', () => {
    const tabsRef = React.createRef<HTMLIonTabsElement>();
    render(
      <IonTabs ref={tabsRef}/>
    )
  })
});
