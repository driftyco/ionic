import { newE2EPage } from '@stencil/core/testing';

test('popover: position - side: top, alignment: start', async () => {
  await testPopover('top', 'start');
});

test('popover: position - side: top, alignment: center', async () => {
  await testPopover('top', 'center');
});

test('popover: position - side: top, alignment: end', async () => {
  await testPopover('top', 'end');
});

test('popover: position - side: right, alignment: start', async () => {
  await testPopover('right', 'start');
});

test('popover: position - side: right, alignment: center', async () => {
  await testPopover('right', 'center');
});

test('popover: position - side: right, alignment: end', async () => {
  await testPopover('right', 'end');
});

test('popover: position - side: bottom, alignment: start', async () => {
  await testPopover('bottom', 'start');
});

test('popover: position - side: bottom, alignment: center', async () => {
  await testPopover('bottom', 'center');
});

test('popover: position - side: bottom, alignment: end', async () => {
  await testPopover('bottom', 'end');
});

test('popover: position - side: left, alignment: start', async () => {
  await testPopover('left', 'start');
});

test('popover: position - side: left, alignment: center', async () => {
  await testPopover('left', 'center');
});

test('popover: position - side: left, alignment: end', async () => {
  await testPopover('left', 'end');
});

test('popover: position - side: start, alignment: start', async () => {
  await testPopover('start', 'start');
});

test('popover: position - side: start, alignment: center', async () => {
  await testPopover('start', 'center');
});

test('popover: position - side: start, alignment: end', async () => {
  await testPopover('start', 'end');
});

test('popover: position - side: end, alignment: start', async () => {
  await testPopover('end', 'start');
});

test('popover: position - side: end, alignment: center', async () => {
  await testPopover('end', 'center');
});

test('popover: position - side: end, alignment: end', async () => {
  await testPopover('end', 'end');
});

test('popover: position - side: start, alignment: start - rtl', async () => {
  await testPopover('start', 'start', true);
});

test('popover: position - side: start, alignment: center - rtl', async () => {
  await testPopover('start', 'center', true);
});

test('popover: position - side: start, alignment: end - rtl', async () => {
  await testPopover('start', 'end', true);
});

test('popover: position - side: end, alignment: start - rtl', async () => {
  await testPopover('end', 'start', true);
});

test('popover: position - side: end, alignment: center - rtl', async () => {
  await testPopover('end', 'center', true);
});

test('popover: position - side: end, alignment: end - rtl', async () => {
  await testPopover('end', 'end', true);
});


const testPopover = async (side, alignment, isRTL = false) => {
  const rtl = isRTL ? '&rtl=true' : '';
  const page = await newE2EPage({ url: `/src/components/popover/test/position?ionic:_testing=true${rtl}` });

  const POPOVER_CLASS = `${side}-${alignment}-popover`;
  const TRIGGER_ID = `${side}-${alignment}`;
  const screenshotCompares = [];

  const trigger = await page.find(`#${TRIGGER_ID}`);

  await page.evaluate((TRIGGER_ID) => {
    const trigger = document.querySelector(`#${TRIGGER_ID}`);
    trigger.scrollIntoView({ block: 'center' });
  }, TRIGGER_ID);

  trigger.click();

  await page.waitForSelector(`.${POPOVER_CLASS}`);
  const popover = await page.find(`.${POPOVER_CLASS}`);
  await popover.waitForVisible();

  await testSideAndAlign(page, POPOVER_CLASS, TRIGGER_ID, side, alignment, isRTL);

  screenshotCompares.push(await page.compareScreenshot());

  for (const screenshotCompare of screenshotCompares) {
    expect(screenshotCompare).toMatchScreenshot();
  }
}

const testSideAndAlign = async (page, popoverClass, triggerID, side, alignment, isRTL = false) => {
  const popoverContentHandle = await page.evaluateHandle(`document.querySelector('.${popoverClass}').shadowRoot.querySelector('.popover-content')`);
  const popoverBbox = await popoverContentHandle.boundingBox();

  const triggerHandler = await page.$(`#${triggerID}`);
  const triggerBbox = await triggerHandler.boundingBox();

  const actualX = popoverBbox.x;
  const actualY = popoverBbox.y;


  let expectedX, expectedY;

  switch(side) {
    case 'top':
      expectedX = triggerBbox.x;
      expectedY = triggerBbox.y - popoverBbox.height;
      break;
    case 'right':
      expectedX = triggerBbox.x + triggerBbox.width;
      expectedY = triggerBbox.y;
      break;
    case 'bottom':
      expectedX = triggerBbox.x;
      expectedY = triggerBbox.y + triggerBbox.height;
      break;
    case 'left':
      expectedX = triggerBbox.x - popoverBbox.width;
      expectedY = triggerBbox.y;
      break;
    case 'start':
      expectedX = (isRTL) ? triggerBbox.x + triggerBbox.width : triggerBbox.x - popoverBbox.width;
      expectedY = triggerBbox.y;
      break;
    case 'end':
      expectedX = (isRTL) ? triggerBbox.x - popoverBbox.width : triggerBbox.x + triggerBbox.width;
      expectedY = triggerBbox.y;
      break;
    default:
      break;
  }

  const alignmentAxis = (['top', 'bottom'].includes(side)) ? 'x' : 'y';
  switch(alignment) {
    case 'center':
      const centerAlign = getCenterAlign(side, triggerBbox, popoverBbox);
      expectedX += centerAlign.left;
      expectedY += centerAlign.top;
      break;
    case 'end':
      const endAlign = getEndAlign(side, triggerBbox, popoverBbox);
      expectedX += endAlign.left;
      expectedY += endAlign.top;
      break;
    case 'start':
    default:
      break;
  }

  expect(Math.abs(actualX - expectedX)).toBeLessThanOrEqual(2);
  expect(Math.abs(actualY - expectedY)).toBeLessThanOrEqual(2);
}

const getEndAlign = (side, triggerBbox, popoverBbox) => {
  switch (side) {
    case 'start':
    case 'end':
    case 'left':
    case 'right':
      return {
        top: -(popoverBbox.height - triggerBbox.height),
        left: 0
      }
    case 'top':
    case 'bottom':
    default:
      return {
        top: 0,
        left: -(popoverBbox.width - triggerBbox.width)
      }
  }
}

const getCenterAlign = (side, triggerBbox, popoverBbox) => {
  switch (side) {
    case 'start':
    case 'end':
    case 'left':
    case 'right':
      return {
        top: -((popoverBbox.height / 2) - (triggerBbox.height / 2)),
        left: 0
      }
    case 'top':
    case 'bottom':
    default:
      return {
        top: 0,
        left: -((popoverBbox.width / 2) - (triggerBbox.width / 2))
      }
  }
}
