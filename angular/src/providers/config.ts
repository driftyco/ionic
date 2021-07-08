import { Injectable, InjectionToken } from '@angular/core';
import { Config as CoreConfig, IonicConfig } from '@ionic/core';

import { IonicWindow } from '../types/interfaces';

@Injectable({
  providedIn: 'root'
})
export class Config {

  get(key: keyof IonicConfig, fallback?: any): any {
    const c = getConfig();
    if (c) {
      return c.get(key, fallback);
    }
    return null;
  }

  getBoolean(key: keyof IonicConfig, fallback?: boolean): boolean {
    const c = getConfig();
    if (c) {
      return c.getBoolean(key, fallback);
    }
    return false;
  }

  getNumber(key: keyof IonicConfig, fallback?: number): number {
    const c = getConfig();
    if (c) {
      return c.getNumber(key, fallback);
    }
    return 0;
  }
}

export const ConfigToken = new InjectionToken<any>('USERCONFIG');

const getConfig = (): CoreConfig | null => {
  if (typeof (window as any) !== 'undefined') {
    const Ionic = (window as any as IonicWindow).Ionic;
    if (Ionic && Ionic.config) {
      return Ionic.config;
    }
  }
  return null;
};
