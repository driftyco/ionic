import { LIFECYCLE_DID_ENTER, LIFECYCLE_DID_LEAVE, LIFECYCLE_WILL_ENTER, LIFECYCLE_WILL_LEAVE } from '@ionic/core/components';

declare module '@vue/runtime-core' {
  export interface ComponentCustomOptions {
    [LIFECYCLE_DID_ENTER]?: () => void;
    [LIFECYCLE_DID_LEAVE]?: () => void;
    [LIFECYCLE_WILL_ENTER]?: () => void;
    [LIFECYCLE_WILL_LEAVE]?: () => void;
  }
}
