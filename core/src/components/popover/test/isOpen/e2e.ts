import { newE2EPage } from '@stencil/core/testing';

test('should open the popover', async () => {
  const page = await newE2EPage({ url: '/src/components/popover/test/isOpen?ionic:_testing=true' });

  const screenshotCompares = [];

  const trigger = await page.find('#default');
  trigger.click();

  await page.waitForSelector('ion-popover');
  const popover = await page.find('ion-popover');
  await popover.waitForVisible();

  screenshotCompares.push(await page.compareScreenshot());

  for (const screenshotCompare of screenshotCompares) {
    expect(screenshotCompare).toMatchScreenshot();
  }
});

test('should open the popover then close after a timeout', async () => {
  const page = await newE2EPage({ url: '/src/components/popover/test/isOpen?ionic:_testing=true' });

  const screenshotCompares = [];

  const ionPopoverDidDismiss = await page.spyOnEvent('ionPopoverDidDismiss');

  const trigger = await page.find('#timeout');
  trigger.click();

  await page.waitForSelector('ion-popover');
  const popover = await page.find('ion-popover');
  await popover.waitForVisible();

  screenshotCompares.push(await page.compareScreenshot());

  await ionPopoverDidDismiss.next();

  await popover.waitForNotVisible();

  screenshotCompares.push(await page.compareScreenshot());

  for (const screenshotCompare of screenshotCompares) {
    expect(screenshotCompare).toMatchScreenshot();
  }
});
