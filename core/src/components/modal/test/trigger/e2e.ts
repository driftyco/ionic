import { newE2EPage } from '@stencil/core/testing';

test('should open modal by left clicking on trigger', async () => {
  const page = await newE2EPage({ url: '/src/components/modal/test/trigger?ionic:_testing=true' });

  const screenshotCompares = [];

  await page.click('#left-click-trigger');
  await page.waitForSelector('.left-click-modal');

  let modal = await page.find('.left-click-modal');
  await modal.waitForVisible();

  screenshotCompares.push(await page.compareScreenshot());

  for (const screenshotCompare of screenshotCompares) {
    expect(screenshotCompare).toMatchScreenshot();
  }
});
