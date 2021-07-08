import { newE2EPage } from '@stencil/core/testing';

test('locale', async () => {
  const page = await newE2EPage({
    url: '/src/components/datetime/test/locale?ionic:_testing=true'
  });

  const screenshotCompares = [];
  const datetime = await page.find('ion-datetime');

  screenshotCompares.push(await page.compareScreenshot());

  datetime.setProperty('locale', 'es-ES');
  await page.waitForChanges();

  screenshotCompares.push(await page.compareScreenshot());

  for (const screenshotCompare of screenshotCompares) {
    expect(screenshotCompare).toMatchScreenshot();
  }
});
