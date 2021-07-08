import { newE2EPage } from '@stencil/core/testing';

test('breadcrumbs: standalone', async () => {
  const page = await newE2EPage({
    url: '/src/components/breadcrumbs/test/standalone?ionic:_testing=true'
  });

  const compare = await page.compareScreenshot();
  expect(compare).toMatchScreenshot();
});
