import { newE2EPage } from '@stencil/core/testing';

test('should not dismiss a popover when clicking a hover trigger', async () => {
  const page = await newE2EPage({ url: `/src/components/popover/test/dismissOnSelect?ionic:_testing=true` });

  const POPOVER_CLASS = 'hover-trigger-popover';
  const TRIGGER_ID = 'hover-trigger';
  const screenshotCompares = [];

  await page.click(`#${TRIGGER_ID}`);

  await page.waitForSelector(`.${POPOVER_CLASS}`);
  const popover = await page.find(`.${POPOVER_CLASS}`);
  await popover.waitForVisible();

  await page.hover('#more-hover-trigger');
  await page.click('#more-hover-trigger');

  const isVisible = await popover.isVisible();
  expect(isVisible).toBe(true);

  screenshotCompares.push(await page.compareScreenshot());

  for (const screenshotCompare of screenshotCompares) {
    expect(screenshotCompare).toMatchScreenshot();
  }
});

test('should not dismiss a popover when clicking a click trigger', async () => {
  const page = await newE2EPage({ url: `/src/components/popover/test/dismissOnSelect?ionic:_testing=true` });

  const POPOVER_CLASS = 'click-trigger-popover';
  const TRIGGER_ID = 'click-trigger';
  const screenshotCompares = [];

  await page.click(`#${TRIGGER_ID}`);

  await page.waitForSelector(`.${POPOVER_CLASS}`);
  const popover = await page.find(`.${POPOVER_CLASS}`);
  await popover.waitForVisible();

  await page.hover('#more-click-trigger');
  await page.click('#more-click-trigger');

  const isVisible = await popover.isVisible();
  expect(isVisible).toBe(true);

  screenshotCompares.push(await page.compareScreenshot());

  for (const screenshotCompare of screenshotCompares) {
    expect(screenshotCompare).toMatchScreenshot();
  }
});
