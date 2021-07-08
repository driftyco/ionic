import { newE2EPage } from '@stencil/core/testing';

test('color', async () => {
  const page = await newE2EPage({
    url: '/src/components/datetime/test/color?ionic:_testing=true'
  });

  const screenshotCompares = [];

  screenshotCompares.push(await page.compareScreenshot());

  const colorSelect = await page.find('ion-select');
  const darkModeToggle = await page.find('ion-checkbox');

  darkModeToggle.setProperty('checked', true);
  await page.waitForChanges();
  screenshotCompares.push(await page.compareScreenshot());

  darkModeToggle.setProperty('checked', false);
  colorSelect.setProperty('value', 'danger');
  await page.waitForChanges();

  screenshotCompares.push(await page.compareScreenshot());

  darkModeToggle.setProperty('checked', true);
  await page.waitForChanges();

  screenshotCompares.push(await page.compareScreenshot());

  for (const screenshotCompare of screenshotCompares) {
    expect(screenshotCompare).toMatchScreenshot();
  }
});
