import { newE2EPage } from '@stencil/core/testing';

test('values', async () => {
  const page = await newE2EPage({
    url: '/src/components/datetime/test/values?ionic:_testing=true'
  });

  const screenshotCompares = [];

  screenshotCompares.push(await page.compareScreenshot());

  for (const screenshotCompare of screenshotCompares) {
    expect(screenshotCompare).toMatchScreenshot();
  }
});
