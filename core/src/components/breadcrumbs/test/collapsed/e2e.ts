import { newE2EPage } from '@stencil/core/testing';

test('breadcrumbs: collapsed', async () => {
  const page = await newE2EPage({
    url: '/src/components/breadcrumbs/test/collapsed?ionic:_testing=true'
  });

  const compare = await page.compareScreenshot();
  expect(compare).toMatchScreenshot();
});
