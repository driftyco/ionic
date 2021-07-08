
export type Platforms = keyof typeof PLATFORMS_MAP;

interface IsPlatformSignature {
  (plt: Platforms): boolean;
  (win: Window, plt: Platforms): boolean;
}

export const getPlatforms = (win?: any) => setupPlatforms(win);

export const isPlatform: IsPlatformSignature = (winOrPlatform: Window | Platforms | undefined, platform?: Platforms) => {
  if (typeof winOrPlatform === 'string') {
    platform = winOrPlatform;
    winOrPlatform = undefined;
  }
  return getPlatforms(winOrPlatform).includes(platform!);
};

export const setupPlatforms = (win: any = window) => {
  if (typeof win === 'undefined') { return []; }

  win.Ionic = win.Ionic || {};

  let platforms: Platforms[] | undefined | null = win.Ionic.platforms;
  if (platforms == null) {
    platforms = win.Ionic.platforms = detectPlatforms(win);
    platforms.forEach(p => win.document.documentElement.classList.add(`plt-${p}`));
  }
  return platforms;
};

const detectPlatforms = (win: Window) =>
  (Object.keys(PLATFORMS_MAP) as Platforms[]).filter(p => PLATFORMS_MAP[p](win));

const isMobileWeb = (win: Window): boolean =>
  isMobile(win) && !isHybrid(win);

const isIpad = (win: Window) => {
  // iOS 12 and below
  if (testUserAgent(win, /iPad/i)) {
    return true;
  }

  // iOS 13+
  if (testUserAgent(win, /Macintosh/i) && isMobile(win)) {
    return true;
  }

  return false;
};

const isIphone = (win: Window) =>
  testUserAgent(win, /iPhone/i);

const isIOS = (win: Window) =>
  testUserAgent(win, /iPhone|iPod/i) || isIpad(win);

const isAndroid = (win: Window) =>
  testUserAgent(win, /android|sink/i);

const isAndroidTablet = (win: Window) => {
  return isAndroid(win) && !testUserAgent(win, /mobile/i);
};

const isPhablet = (win: Window) => {
  const width = win.innerWidth;
  const height = win.innerHeight;
  const smallest = Math.min(width, height);
  const largest = Math.max(width, height);

  return (smallest > 390 && smallest < 520) &&
    (largest > 620 && largest < 800);
};

const isTablet = (win: Window) => {
  const width = win.innerWidth;
  const height = win.innerHeight;
  const smallest = Math.min(width, height);
  const largest = Math.max(width, height);

  return (
    isIpad(win) ||
    isAndroidTablet(win) ||
    (
      (smallest > 460 && smallest < 820) &&
      (largest > 780 && largest < 1400)
    )
  );
};

const isMobile = (win: Window) =>
  matchMedia(win, '(any-pointer:coarse)');

const isDesktop = (win: Window) =>
  !isMobile(win);

const isHybrid = (win: Window) =>
  isCordova(win) || isCapacitorNative(win);

const isCordova = (win: any): boolean =>
  !!(win['cordova'] || win['phonegap'] || win['PhoneGap']);

const isCapacitorNative = (win: any): boolean => {
  const capacitor = win['Capacitor'];
  return !!(capacitor && capacitor.isNative);
};

const isElectron = (win: Window): boolean =>
  testUserAgent(win, /electron/i);

const isPWA = (win: Window): boolean =>
  !!((win.matchMedia && win.matchMedia('(display-mode: standalone)').matches) || (win.navigator as any).standalone);

export const testUserAgent = (win: Window, expr: RegExp) =>
  expr.test(win.navigator.userAgent);

const matchMedia = (win: Window, query: string): boolean =>
  win.matchMedia && win.matchMedia(query).matches;

const PLATFORMS_MAP = {
  'ipad': isIpad,
  'iphone': isIphone,
  'ios': isIOS,
  'android': isAndroid,
  'phablet': isPhablet,
  'tablet': isTablet,
  'cordova': isCordova,
  'capacitor': isCapacitorNative,
  'electron': isElectron,
  'pwa': isPWA,
  'mobile': isMobile,
  'mobileweb': isMobileWeb,
  'desktop': isDesktop,
  'hybrid': isHybrid
};
