import { newE2EPage } from '@stencil/core/testing';

const getActiveElementText = async (page) => {
  const activeElement = await page.evaluateHandle(() => document.activeElement);
  return await page.evaluate(el => el && el.innerText, activeElement);
}

test('accordion: a11y', async () => {
  const page = await newE2EPage({
    url: '/src/components/accordion/test/a11y?ionic:_testing=true'
  });

  const compare = await page.compareScreenshot();
  expect(compare).toMatchScreenshot();
});

test('accordion:rtl: a11y', async () => {
  const page = await newE2EPage({
    url: '/src/components/accordion/test/a11y?ionic:_testing=true&rtl=true'
  });

  const compare = await page.compareScreenshot();
  expect(compare).toMatchScreenshot();
});

test('accordion: keyboard navigation', async () => {
  const page = await newE2EPage({
    url: '/src/components/accordion/test/a11y?ionic:_testing=true'
  });

  await page.keyboard.press('Tab');
  expect(await getActiveElementText(page)).toEqual('Personal Information');

  await page.keyboard.press('ArrowDown');
  expect(await getActiveElementText(page)).toEqual('Billing Address');

  await page.keyboard.press('ArrowDown');
  expect(await getActiveElementText(page)).toEqual('Shipping Address');

  await page.keyboard.press('ArrowDown');
  expect(await getActiveElementText(page)).toEqual('Personal Information');

  await page.keyboard.press('ArrowUp');
  expect(await getActiveElementText(page)).toEqual('Shipping Address');
});
