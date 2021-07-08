import { BackButtonEvent } from '@ionic/core/components';

type Handler = (processNextHandler: () => void) => Promise<any> | void | null;
export interface UseBackButtonResult {
  unregister: () => void;
}

export const useBackButton = (priority: number, handler: Handler): UseBackButtonResult => {
  const callback = (ev: BackButtonEvent) => ev.detail.register(priority, handler);
  const unregister = () => document.removeEventListener('ionBackButton', callback);

  document.addEventListener('ionBackButton', callback);

  return { unregister };
}
