### Default

```tsx
import React from 'react';
import { IonBreadcrumb, IonBreadcrumbs } from '@ionic/react';

export const BreadcrumbsExample: React.FC = () => (
  <IonBreadcrumbs>
    <IonBreadcrumb href="#">
      Home
    </IonBreadcrumb>
    <IonBreadcrumb href="#electronics">
      Electronics
    </IonBreadcrumb>
    <IonBreadcrumb href="#photography">
      Photography
    </IonBreadcrumb>
    <IonBreadcrumb href="#cameras">
      Cameras
    </IonBreadcrumb>
    <IonBreadcrumb href="#film">
      Film
    </IonBreadcrumb>
    <IonBreadcrumb>
      35 mm
    </IonBreadcrumb>
  </IonBreadcrumbs>
);
```

### Colors

```tsx
import React from 'react';
import { IonBreadcrumb, IonBreadcrumbs } from '@ionic/react';

export const BreadcrumbsExample: React.FC = () => (
  <IonBreadcrumbs color="secondary">
    <IonBreadcrumb href="#">
      Home
    </IonBreadcrumb>
    <IonBreadcrumb href="#electronics">
      Electronics
    </IonBreadcrumb>
    <IonBreadcrumb href="#photography">
      Photography
    </IonBreadcrumb>
    <IonBreadcrumb href="#cameras">
      Cameras
    </IonBreadcrumb>
    <IonBreadcrumb href="#film">
      Film
    </IonBreadcrumb>
    <IonBreadcrumb>
      35 mm
    </IonBreadcrumb>
  </IonBreadcrumbs>
);
```

### Breadcrumbs with Icon


```tsx
import React from 'react';
import { IonBreadcrumb, IonBreadcrumbs, IonIcon } from '@ionic/react';
import { document, folder, home } from 'ionicons/icons';

export const BreadcrumbsExample: React.FC = () => (
  {/*-- Icon start --*/}
  <IonBreadcrumbs>
    <IonBreadcrumb href="#">
      <IonIcon slot="start" icon={home}></IonIcon>
      Home
    </IonBreadcrumb>
    <IonBreadcrumb href="#files">
      <IonIcon slot="start" icon={folder}></IonIcon>
      Files
    </IonBreadcrumb>
    <IonBreadcrumb href="#projects">
      <IonIcon slot="start" icon={folder}></IonIcon>
      Projects
    </IonBreadcrumb>
    <IonBreadcrumb href="#user-research">
      <IonIcon slot="start" icon={folder}></IonIcon>
      User Research
    </IonBreadcrumb>
    <IonBreadcrumb>
      <IonIcon slot="start" icon={document}></IonIcon>
      Survey.txt
    </IonBreadcrumb>
  </IonBreadcrumbs>,

  {/*-- Icon end --*/}
  <IonBreadcrumbs>
    <IonBreadcrumb href="#">
      Home
      <IonIcon slot="end" icon={home}></IonIcon>
    </IonBreadcrumb>
    <IonBreadcrumb href="#files">
      Files
      <IonIcon slot="end" icon={folder}></IonIcon>
    </IonBreadcrumb>
    <IonBreadcrumb href="#projects">
      Projects
      <IonIcon slot="end" icon={folder}></IonIcon>
    </IonBreadcrumb>
    <IonBreadcrumb href="#user-research">
      User Research
      <IonIcon slot="end" icon={folder}></IonIcon>
    </IonBreadcrumb>
    <IonBreadcrumb>
      Survey.txt
      <IonIcon slot="end" icon={document}></IonIcon>
    </IonBreadcrumb>
  </IonBreadcrumbs>
);
```

### Custom Separator

```tsx
import React from 'react';
import { IonBreadcrumb, IonBreadcrumbs, IonIcon } from '@ionic/react';
import { arrowForward } from 'ionicons/icons';

export const BreadcrumbsExample: React.FC = () => (
  {/*-- Custom separator text --*/}
  <IonBreadcrumbs>
    <IonBreadcrumb href="#">
      Home
      <span slot="separator">|</span>
    </IonBreadcrumb>
    <IonBreadcrumb href="#electronics">
      Electronics
      <span slot="separator">|</span>
    </IonBreadcrumb>
    <IonBreadcrumb href="#photography">
      Photography
      <span slot="separator">|</span>
    </IonBreadcrumb>
    <IonBreadcrumb href="#cameras">
      Cameras
      <span slot="separator">|</span>
    </IonBreadcrumb>
    <IonBreadcrumb href="#film">
      Film
      <span slot="separator">|</span>
    </IonBreadcrumb>
    <IonBreadcrumb>
      35 mm
    </IonBreadcrumb>
  </IonBreadcrumbs>,

  {/*-- Custom separator icon --*/}
  <IonBreadcrumbs>
    <IonBreadcrumb href="#">
      Home
      <IonIcon slot="separator" icon={arrowForward}></IonIcon>
    </IonBreadcrumb>
    <IonBreadcrumb href="#electronics">
      Electronics
      <IonIcon slot="separator" icon={arrowForward}></IonIcon>
    </IonBreadcrumb>
    <IonBreadcrumb href="#photography">
      Photography
      <IonIcon slot="separator" icon={arrowForward}></IonIcon>
    </IonBreadcrumb>
    <IonBreadcrumb href="#cameras">
      Cameras
      <IonIcon slot="separator" icon={arrowForward}></IonIcon>
    </IonBreadcrumb>
    <IonBreadcrumb href="#film">
      Film
      <IonIcon slot="separator" icon={arrowForward}></IonIcon>
    </IonBreadcrumb>
    <IonBreadcrumb>
      35 mm
    </IonBreadcrumb>
  </IonBreadcrumbs>
);
```

### Max Items

```tsx
import React from 'react';
import { IonBreadcrumb, IonBreadcrumbs } from '@ionic/react';

export const BreadcrumbsExample: React.FC = () => (
  <IonBreadcrumbs maxItems={4}>
    <IonBreadcrumb href="#">
      Home
    </IonBreadcrumb>
    <IonBreadcrumb href="#electronics">
      Electronics
    </IonBreadcrumb>
    <IonBreadcrumb href="#photography">
      Photography
    </IonBreadcrumb>
    <IonBreadcrumb href="#cameras">
      Cameras
    </IonBreadcrumb>
    <IonBreadcrumb href="#film">
      Film
    </IonBreadcrumb>
    <IonBreadcrumb>
      35 mm
    </IonBreadcrumb>
  </IonBreadcrumbs>
);
```


### Items Before or After Collapse

```tsx
import React from 'react';
import { IonBreadcrumb, IonBreadcrumbs } from '@ionic/react';

export const BreadcrumbsExample: React.FC = () => (
  {/*-- Items before collapse --*/}
  <IonBreadcrumbs maxItems={4} itemsBeforeCollapse={2}>
    <IonBreadcrumb href="#">
      Home
    </IonBreadcrumb>
    <IonBreadcrumb href="#electronics">
      Electronics
    </IonBreadcrumb>
    <IonBreadcrumb href="#photography">
      Photography
    </IonBreadcrumb>
    <IonBreadcrumb href="#cameras">
      Cameras
    </IonBreadcrumb>
    <IonBreadcrumb href="#film">
      Film
    </IonBreadcrumb>
    <IonBreadcrumb>
      35 mm
    </IonBreadcrumb>
  </IonBreadcrumbs>,

  {/*-- Items after collapse --*/}
  <IonBreadcrumbs maxItems={4} itemsAfterCollapse={3}>
    <IonBreadcrumb href="#">
      Home
    </IonBreadcrumb>
    <IonBreadcrumb href="#electronics">
      Electronics
    </IonBreadcrumb>
    <IonBreadcrumb href="#photography">
      Photography
    </IonBreadcrumb>
    <IonBreadcrumb href="#cameras">
      Cameras
    </IonBreadcrumb>
    <IonBreadcrumb href="#film">
      Film
    </IonBreadcrumb>
    <IonBreadcrumb>
      35 mm
    </IonBreadcrumb>
  </IonBreadcrumbs>,

  {/*-- Items before and after collapse --*/}
  <IonBreadcrumbs maxItems={4} itemsBeforeCollapse={0} itemsAfterCollapse={3}>
    <IonBreadcrumb href="#">
      Home
    </IonBreadcrumb>
    <IonBreadcrumb href="#electronics">
      Electronics
    </IonBreadcrumb>
    <IonBreadcrumb href="#photography">
      Photography
    </IonBreadcrumb>
    <IonBreadcrumb href="#cameras">
      Cameras
    </IonBreadcrumb>
    <IonBreadcrumb href="#film">
      Film
    </IonBreadcrumb>
    <IonBreadcrumb>
      35 mm
    </IonBreadcrumb>
  </IonBreadcrumbs>
);
```

### Expand on Collapsed Indicator Click

```tsx
import React from 'react';
import { IonBreadcrumb, IonBreadcrumbs } from '@ionic/react';

export const BreadcrumbsExample: React.FC = () => {
  const [maxBreadcrumbs, setMaxBreadcrumbs] = useState(4);

  const expandBreadcrumbs = () => {
    setMaxBreadcrumbs(undefined);
  }

  return (
    <IonBreadcrumbs maxItems={maxBreadcrumbs} onIonCollapsedClick={() => expandBreadcrumbs()}>
      <IonBreadcrumb href="#">
        Home
      </IonBreadcrumb>
      <IonBreadcrumb href="#electronics">
        Electronics
      </IonBreadcrumb>
      <IonBreadcrumb href="#photography">
        Photography
      </IonBreadcrumb>
      <IonBreadcrumb href="#cameras">
        Cameras
      </IonBreadcrumb>
      <IonBreadcrumb href="#film">
        Film
      </IonBreadcrumb>
      <IonBreadcrumb>
        35 mm
      </IonBreadcrumb>
    </IonBreadcrumbs>
  );
};
```

### Popover on Collapsed Indicator Click

```tsx
import React from 'react';
import { IonBreadcrumb, IonBreadcrumbs, IonContent, IonItem, IonLabel, IonList, useIonPopover } from '@ionic/react';

const PopoverList: React.FC<{
  onHide: () => void;
}> = ({ onHide }) => (
  <IonContent>
    <IonList>
      <IonItem href="#">
        <IonLabel>Home</IonLabel>
      </IonItem>
      <IonItem href="#electronics">
        <IonLabel>Electronics</IonLabel>
      </IonItem>
      <IonItem href="#photography">
        <IonLabel>Photography</IonLabel>
      </IonItem>
      <IonItem href="#cameras">
        <IonLabel>Cameras</IonLabel>
      </IonItem>
    </IonList>
  </IonContent>
);

export const BreadcrumbsExample: React.FC = () => {
  const [present, dismiss] = useIonPopover(PopoverList, { onHide: () => dismiss() });

  return (
    <IonBreadcrumbs maxItems={4} onIonCollapsedClick={(e) => present({ event: e.nativeEvent })}>
      <IonBreadcrumb href="#">
        Home
      </IonBreadcrumb>
      <IonBreadcrumb href="#electronics">
        Electronics
      </IonBreadcrumb>
      <IonBreadcrumb href="#photography">
        Photography
      </IonBreadcrumb>
      <IonBreadcrumb href="#cameras">
        Cameras
      </IonBreadcrumb>
      <IonBreadcrumb href="#film">
        Film
      </IonBreadcrumb>
      <IonBreadcrumb>
        35 mm
      </IonBreadcrumb>
    </IonBreadcrumbs>
  );
};
```
