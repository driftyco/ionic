import { newE2EPage } from '@stencil/core/testing';

import { cleanScreenshotName, generateE2EUrl } from '../../../utils/test/utils';

export async function testMenu(
  type: string,
  selector: string,
  menuId = '',
  rtl = false,
  screenshotName: string = cleanScreenshotName(selector)
) {
  try {
    const pageUrl = generateE2EUrl('menu', type, rtl);
    if (rtl) {
      screenshotName = `${screenshotName} rtl`;
    }

    const page = await newE2EPage({
      url: pageUrl
    });

    const screenshotCompares = [];

    await page.waitFor(500);

    if (menuId.length > 0) {
      const menuCtrl = await page.find('ion-menu-controller');
      await menuCtrl.callMethod('enable', true, menuId);
    }

    const menu = await page.find(selector);

    await menu.callMethod('open');
    await page.waitFor(3000);

    screenshotCompares.push(await page.compareScreenshot(screenshotName));

    await menu.callMethod('close');
    await page.waitFor(3000);

    screenshotCompares.push(await page.compareScreenshot(`dismiss ${screenshotName}`));

    for (const screenshotCompare of screenshotCompares) {
      expect(screenshotCompare).toMatchScreenshot();
    }
  } catch (err) {
    throw err;
  }
}
