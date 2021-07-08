import { newE2EPage } from '@stencil/core/testing';
import { AxePuppeteer } from '@axe-core/puppeteer';

test('accordion: axe', async () => {
  const page = await newE2EPage({
    url: '/src/components/accordion/test/standalone?ionic:_testing=true'
  });

  const results = await new AxePuppeteer(page).analyze();
  expect(results.violations.length).toEqual(0);
});
