import { newE2EPage } from '@stencil/core/testing';

test('should position popover relative to mouse click', async () => {
  const page = await newE2EPage({ url: '/src/components/popover/test/reference?ionic:_testing=true' });

  const screenshotCompares = [];

  const triggerHandler = await page.$('#event-trigger');
  const triggerBbox = await triggerHandler.boundingBox();

  await page.mouse.click(triggerBbox.x, triggerBbox.y);

  await page.waitForSelector('.event-popover');
  const popover = await page.find('.event-popover');
  await popover.waitForVisible();

  const popoverContentHandle = await page.evaluateHandle(`document.querySelector('.event-popover').shadowRoot.querySelector('.popover-content')`);
  const popoverBbox = await popoverContentHandle.boundingBox();

  // Give us some margin for subpixel rounding
  expect(Math.abs(popoverBbox.x - triggerBbox.x)).toBeLessThanOrEqual(2);
  expect(Math.abs(popoverBbox.y - triggerBbox.y)).toBeLessThanOrEqual(2);

  screenshotCompares.push(await page.compareScreenshot());

  for (const screenshotCompare of screenshotCompares) {
    expect(screenshotCompare).toMatchScreenshot();
  }
});

test('should position popover relative to trigger', async () => {
  const page = await newE2EPage({ url: '/src/components/popover/test/reference?ionic:_testing=true' });

  const screenshotCompares = [];

  const triggerHandler = await page.$('#trigger-trigger');
  const triggerBbox = await triggerHandler.boundingBox();

  await page.mouse.click(triggerBbox.x + 5, triggerBbox.y + 5);

  await page.waitForSelector('.trigger-popover');
  const popover = await page.find('.trigger-popover');
  await popover.waitForVisible();

  const popoverContentHandle = await page.evaluateHandle(`document.querySelector('.trigger-popover').shadowRoot.querySelector('.popover-content')`);
  const popoverBbox = await popoverContentHandle.boundingBox();

  // Give us some margin for subpixel rounding
  const triggerBottom = triggerBbox.y + triggerBbox.height;
  expect(Math.abs(popoverBbox.x - triggerBbox.x)).toBeLessThanOrEqual(2);
  expect(Math.abs(popoverBbox.y - triggerBottom)).toBeLessThanOrEqual(2);

  screenshotCompares.push(await page.compareScreenshot());

  for (const screenshotCompare of screenshotCompares) {
    expect(screenshotCompare).toMatchScreenshot();
  }
});
