import { newE2EPage } from '@stencil/core/testing';

test('should open the modal', async () => {
  const page = await newE2EPage({ url: '/src/components/modal/test/isOpen?ionic:_testing=true' });

  const screenshotCompares = [];

  const trigger = await page.find('#default');
  trigger.click();

  await page.waitForSelector('ion-modal');
  const modal = await page.find('ion-modal');
  await modal.waitForVisible();

  screenshotCompares.push(await page.compareScreenshot());

  for (const screenshotCompare of screenshotCompares) {
    expect(screenshotCompare).toMatchScreenshot();
  }
});

test('should open the modal then close after a timeout', async () => {
  const page = await newE2EPage({ url: '/src/components/modal/test/isOpen?ionic:_testing=true' });

  const screenshotCompares = [];

  const ionModalDidDismiss = await page.spyOnEvent('ionModalDidDismiss');

  const trigger = await page.find('#timeout');
  trigger.click();

  await page.waitForSelector('ion-modal');
  const modal = await page.find('ion-modal');
  await modal.waitForVisible();

  screenshotCompares.push(await page.compareScreenshot());

  await ionModalDidDismiss.next();

  await modal.waitForNotVisible();

  screenshotCompares.push(await page.compareScreenshot());

  for (const screenshotCompare of screenshotCompares) {
    expect(screenshotCompare).toMatchScreenshot();
  }
});
