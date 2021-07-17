import { newE2EPage } from '@stencil/core/testing';

test('content: scroll-snap', async () => {
  const page = await newE2EPage({
    url: '/src/components/content/test/scroll-snap?ionic:_testing=true'
  });

  const compare = await page.compareScreenshot();
  expect(compare).toMatchScreenshot();
});
