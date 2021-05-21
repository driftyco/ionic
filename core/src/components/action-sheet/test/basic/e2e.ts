import { testActionSheet, testActionSheetAlert, testActionSheetBackdrop } from '../test.utils';
import { newE2EPage } from '@stencil/core/testing';

const DIRECTORY = 'basic';
const getActiveElementText = async (page) => {
  const activeElement = await page.evaluateHandle(() => document.activeElement);
  return await page.evaluate(el => el && el.textContent, activeElement);
}

test('action-sheet: focus trap', async () => {
  const page = await newE2EPage({ url: '/src/components/action-sheet/test/basic?ionic:_testing=true' });

  await page.click('#basic');
  await page.waitForSelector('#basic');

  let actionSheet = await page.find('ion-action-sheet');

  expect(actionSheet).not.toBe(null);
  await actionSheet.waitForVisible();

  await page.keyboard.press('Tab');

  const activeElementText = await getActiveElementText(page);
  expect(activeElementText).toEqual('Delete');

  await page.keyboard.down('Shift');
  await page.keyboard.press('Tab');
  await page.keyboard.up('Shift');

  const activeElementTextTwo = await getActiveElementText(page);
  expect(activeElementTextTwo).toEqual('Cancel');

  await page.keyboard.press('Tab');

  const activeElementTextThree = await getActiveElementText(page);
  expect(activeElementTextThree).toEqual('Delete');
});

test('action-sheet: basic', async () => {
  await testActionSheet(DIRECTORY, '#basic');
});

test('action-sheet: basic, with subtitle', async () => {
  await testActionSheet(DIRECTORY, '#withSubtitle');
});

test('action-sheet: basic, alert from action sheet', async () => {
  await testActionSheet(DIRECTORY, '#alertFromActionSheet', false, testActionSheetAlert);
});

test('action-sheet: basic, cancel only', async () => {
  await testActionSheet(DIRECTORY, '#cancelOnly');
});

test('action-sheet: basic, custom', async () => {
  await testActionSheet(DIRECTORY, '#custom');
});

test('action-sheet: basic, icons', async () => {
  await testActionSheet(DIRECTORY, '#icons');
});

test('action-sheet: basic, no backdrop dismiss', async () => {
  await testActionSheet(DIRECTORY, '#noBackdropDismiss', false, testActionSheetBackdrop);
});

test('action-sheet: basic, scrollable options', async () => {
  await testActionSheet(DIRECTORY, '#scrollableOptions');
});

test('action-sheet: basic, scroll without cancel', async () => {
  await testActionSheet(DIRECTORY, '#scrollWithoutCancel');
});

test('action-sheet: basic, custom backdrop', async () => {
  await testActionSheet(DIRECTORY, '#customBackdrop');
});

/**
 * RTL Tests
 */

test('action-sheet:rtl: basic', async () => {
  await testActionSheet(DIRECTORY, '#basic', true);
});

test('action-sheet:rtl: basic, alert from action sheet', async () => {
  await testActionSheet(DIRECTORY, '#alertFromActionSheet', true, testActionSheetAlert);
});

test('action-sheet:rtl: basic, cancel only', async () => {
  await testActionSheet(DIRECTORY, '#cancelOnly', true);
});

test('action-sheet:rtl: basic, custom', async () => {
  await testActionSheet(DIRECTORY, '#custom', true);
});

test('action-sheet:rtl: basic, icons', async () => {
  await testActionSheet(DIRECTORY, '#icons', true);
});

test('action-sheet:rtl: basic, no backdrop dismiss', async () => {
  await testActionSheet(DIRECTORY, '#noBackdropDismiss', true, testActionSheetBackdrop);
});

test('action-sheet:rtl: basic, scrollable options', async () => {
  await testActionSheet(DIRECTORY, '#scrollableOptions', true);
});

test('action-sheet:rtl: basic, scroll without cancel', async () => {
  await testActionSheet(DIRECTORY, '#scrollWithoutCancel', true);
});

test('action-sheet:rtl: basic, custom backdrop', async () => {
  await testActionSheet(DIRECTORY, '#customBackdrop', true);
});
