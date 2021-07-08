import { newE2EPage } from '@stencil/core/testing';

test('select: spec', async () => {
  const page = await newE2EPage({
    url: '/src/components/select/test/spec?ionic:_testing=true'
  });

  const compare = await page.compareScreenshot();
  expect(compare).toMatchScreenshot();
});
