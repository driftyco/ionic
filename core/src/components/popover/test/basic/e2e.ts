import { testPopover } from '../test.utils';
import { newE2EPage } from '@stencil/core/testing';

const DIRECTORY = 'basic';

const getActiveElementText = async (page) => {
  const activeElement = await page.evaluateHandle(() => document.activeElement);
  return await page.evaluate(el => el && el.textContent, activeElement);
}

test('popover: focus trap', async () => {
  const page = await newE2EPage({ url: '/src/components/popover/test/basic?ionic:_testing=true' });

  await page.click('#basic-popover');
  await page.waitForSelector('#basic-popover');

  let popover = await page.find('ion-popover');

  expect(popover).not.toBe(null);
  await popover.waitForVisible();

  await page.keyboard.press('Tab');

  const activeElementText = await getActiveElementText(page);
  expect(activeElementText).toEqual('Item 0');

  await page.keyboard.down('Shift');
  await page.keyboard.press('Tab');
  await page.keyboard.up('Shift');

  const activeElementTextTwo = await getActiveElementText(page);
  expect(activeElementTextTwo).toEqual('Item 3');

  await page.keyboard.press('Tab');

  const activeElementTextThree = await getActiveElementText(page);
  expect(activeElementTextThree).toEqual('Item 0');
});

test('popover: basic', async () => {
  await testPopover(DIRECTORY, '#basic-popover');
});

test('popover: translucent', async () => {
  await testPopover(DIRECTORY, '#translucent-popover');
});

test('popover: long list', async () => {
  await testPopover(DIRECTORY, '#long-list-popover');
});

test('popover: no event', async () => {
  await testPopover(DIRECTORY, '#no-event-popover');
});

test('popover: custom class', async () => {
  await testPopover(DIRECTORY, '#custom-class-popover');
});

/**
 * RTL Tests
 */

test('popover:rtl: basic', async () => {
  await testPopover(DIRECTORY, '#basic-popover', true, true);
});

test('popover:rtl: translucent', async () => {
  await testPopover(DIRECTORY, '#translucent-popover', true, true);
});

test('popover:rtl: long list', async () => {
  await testPopover(DIRECTORY, '#long-list-popover', true, true);
});

test('popover:rtl: no event', async () => {
  await testPopover(DIRECTORY, '#no-event-popover', true, true);
});

test('popover:rtl: custom class', async () => {
  await testPopover(DIRECTORY, '#custom-class-popover', true, true);
});
