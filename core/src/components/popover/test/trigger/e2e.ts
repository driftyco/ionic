import { newE2EPage } from '@stencil/core/testing';

test('should open popover by left clicking on trigger', async () => {
  const page = await newE2EPage({ url: '/src/components/popover/test/trigger?ionic:_testing=true' });

  const screenshotCompares = [];

  await page.click('#left-click-trigger');
  await page.waitForSelector('.left-click-popover');

  let popover = await page.find('.left-click-popover');
  await popover.waitForVisible();

  screenshotCompares.push(await page.compareScreenshot());

  for (const screenshotCompare of screenshotCompares) {
    expect(screenshotCompare).toMatchScreenshot();
  }
});

test('should open popover by right clicking on trigger', async () => {
  const page = await newE2EPage({ url: '/src/components/popover/test/trigger?ionic:_testing=true' });

  const screenshotCompares = [];

  await page.click('#right-click-trigger', { button: 'right' });
  await page.waitForSelector('.right-click-popover');

  let popover = await page.find('.right-click-popover');
  await popover.waitForVisible();

  screenshotCompares.push(await page.compareScreenshot());

  for (const screenshotCompare of screenshotCompares) {
    expect(screenshotCompare).toMatchScreenshot();
  }
});

test('should open popover by hovering over trigger', async () => {
  const page = await newE2EPage({ url: '/src/components/popover/test/trigger?ionic:_testing=true' });

  const screenshotCompares = [];

  const button = await page.$('#hover-trigger');
  const bbox = await button.boundingBox();
  await page.mouse.move(bbox.x + 5, bbox.y + 5);
  await page.waitForSelector('.hover-popover');

  let popover = await page.find('.hover-popover');
  await popover.waitForVisible();

  screenshotCompares.push(await page.compareScreenshot());

  for (const screenshotCompare of screenshotCompares) {
    expect(screenshotCompare).toMatchScreenshot();
  }
});

test('should not close main popover with dismiss-on-select when clicking a trigger', async () => {
  const page = await newE2EPage({ url: '/src/components/popover/test/trigger?ionic:_testing=true' });

  const screenshotCompares = [];

  await page.click('#nested-click-trigger');
  await page.waitForSelector('.nested-click-popover');

  let firstPopover = await page.find('.nested-click-popover');
  await firstPopover.waitForVisible();

  await page.click('#nested-click-trigger-two');

  let secondPopover = await page.find('.nested-click-popover-two');
  await secondPopover.waitForVisible();

  screenshotCompares.push(await page.compareScreenshot());

  for (const screenshotCompare of screenshotCompares) {
    expect(screenshotCompare).toMatchScreenshot();
  }
});
