import { newSpecPage } from '@stencil/core/testing';
import { AccordionGroup } from '../../accordion-group/accordion-group.tsx';
import { Accordion } from '../accordion.tsx';
import { Item } from '../../item/item.tsx';

it('should properly set readonly on child accordions', async () => {
  const page = await newSpecPage({
    components: [Item, Accordion, AccordionGroup],
    html: `
      <ion-accordion-group animated="false">
        <ion-accordion>
          <ion-item slot="header">Label</ion-item>
          <div slot="content">Content</div>
        </ion-accordion>
      </ion-accordion-group>
    `
  });

  const accordionGroup = page.body.querySelector('ion-accordion-group');
  const accordions = accordionGroup.querySelectorAll('ion-accordion');

  expect(accordions.length).toEqual(1);
  accordions.forEach(accordion => {
    expect(accordion.readonly).toEqual(false);
  });

  accordionGroup.readonly = true;
  await page.waitForChanges();

  accordions.forEach(accordion => {
    expect(accordion.readonly).toEqual(true);
  });
});

it('should properly set disabled on child accordions', async () => {
  const page = await newSpecPage({
    components: [Item, Accordion, AccordionGroup],
    html: `
      <ion-accordion-group animated="false">
        <ion-accordion>
          <ion-item slot="header">Label</ion-item>
          <div slot="content">Content</div>
        </ion-accordion>
      </ion-accordion-group>
    `
  });

  const accordionGroup = page.body.querySelector('ion-accordion-group');
  const accordions = accordionGroup.querySelectorAll('ion-accordion');

  expect(accordions.length).toEqual(1);
  accordions.forEach(accordion => {
    expect(accordion.disabled).toEqual(false);
  });

  accordionGroup.disabled = true;
  await page.waitForChanges();

  accordions.forEach(accordion => {
    expect(accordion.disabled).toEqual(true);
  });
});

it('should open correct accordions', async () => {
  const page = await newSpecPage({
    components: [Item, Accordion, AccordionGroup],
    html: `
      <ion-accordion-group animated="false">
        <ion-accordion value="first">
          <ion-item slot="header">Label</ion-item>
          <div slot="content">Content</div>
        </ion-accordion>
        <ion-accordion value="second">
          <ion-item slot="header">Label</ion-item>
          <div slot="content">Content</div>
        </ion-accordion>
        <ion-accordion value="third">
          <ion-item slot="header">Label</ion-item>
          <div slot="content">Content</div>
        </ion-accordion>
      </ion-accordion-group>
    `
  });

  const accordionGroup = page.body.querySelector('ion-accordion-group');
  const accordions = accordionGroup.querySelectorAll('ion-accordion');

  accordions.forEach(accordion => {
    expect(accordion.classList.contains('accordion-collapsed')).toEqual(true);
  });

  accordionGroup.value = 'second';
  await page.waitForChanges();

  expect(accordions[0].classList.contains('accordion-collapsed')).toEqual(true);
  expect(accordions[1].classList.contains('accordion-collapsed')).toEqual(false);
  expect(accordions[2].classList.contains('accordion-collapsed')).toEqual(true);
});


it('should not open more than one accordion when multiple="false"', async () => {
  const page = await newSpecPage({
    components: [Item, Accordion, AccordionGroup],
    html: `
      <ion-accordion-group animated="false">
        <ion-accordion value="first">
          <ion-item slot="header">Label</ion-item>
          <div slot="content">Content</div>
        </ion-accordion>
        <ion-accordion value="second">
          <ion-item slot="header">Label</ion-item>
          <div slot="content">Content</div>
        </ion-accordion>
        <ion-accordion value="third">
          <ion-item slot="header">Label</ion-item>
          <div slot="content">Content</div>
        </ion-accordion>
      </ion-accordion-group>
    `
  });

  const accordionGroup = page.body.querySelector('ion-accordion-group');
  const accordions = accordionGroup.querySelectorAll('ion-accordion');

  accordions.forEach(accordion => {
    expect(accordion.classList.contains('accordion-collapsed')).toEqual(true);
  });

  accordionGroup.value = ['first', 'second'];
  await page.waitForChanges();

  expect(accordions[0].classList.contains('accordion-collapsed')).toEqual(false);
  expect(accordions[1].classList.contains('accordion-collapsed')).toEqual(true);
  expect(accordions[2].classList.contains('accordion-collapsed')).toEqual(true);
});

it('should open more than one accordion when multiple="true"', async () => {
  const page = await newSpecPage({
    components: [Item, Accordion, AccordionGroup],
    html: `
      <ion-accordion-group multiple="true" animated="false">
        <ion-accordion value="first">
          <ion-item slot="header">Label</ion-item>
          <div slot="content">Content</div>
        </ion-accordion>
        <ion-accordion value="second">
          <ion-item slot="header">Label</ion-item>
          <div slot="content">Content</div>
        </ion-accordion>
        <ion-accordion value="third">
          <ion-item slot="header">Label</ion-item>
          <div slot="content">Content</div>
        </ion-accordion>
      </ion-accordion-group>
    `
  });

  const accordionGroup = page.body.querySelector('ion-accordion-group');
  const accordions = accordionGroup.querySelectorAll('ion-accordion');

  accordions.forEach(accordion => {
    expect(accordion.classList.contains('accordion-collapsed')).toEqual(true);
  });

  accordionGroup.value = ['first', 'second'];
  await page.waitForChanges();

  expect(accordions[0].classList.contains('accordion-collapsed')).toEqual(false);
  expect(accordions[1].classList.contains('accordion-collapsed')).toEqual(false);
  expect(accordions[2].classList.contains('accordion-collapsed')).toEqual(true);
});

it('should render with accordion open', async () => {
  const page = await newSpecPage({
    components: [Item, Accordion, AccordionGroup],
    html: `
      <ion-accordion-group value="first" animated="false">
        <ion-accordion value="first">
          <ion-item slot="header">Label</ion-item>
          <div slot="content">Content</div>
        </ion-accordion>
        <ion-accordion value="second">
          <ion-item slot="header">Label</ion-item>
          <div slot="content">Content</div>
        </ion-accordion>
        <ion-accordion value="third">
          <ion-item slot="header">Label</ion-item>
          <div slot="content">Content</div>
        </ion-accordion>
      </ion-accordion-group>
    `
  });

  const accordionGroup = page.body.querySelector('ion-accordion-group');
  const accordions = accordionGroup.querySelectorAll('ion-accordion');

  expect(accordions[0].classList.contains('accordion-collapsed')).toEqual(false);
  expect(accordions[1].classList.contains('accordion-collapsed')).toEqual(true);
  expect(accordions[2].classList.contains('accordion-collapsed')).toEqual(true);
});

it('should accept a string when multiple="true"', async () => {
  const page = await newSpecPage({
    components: [Item, Accordion, AccordionGroup],
    html: `
      <ion-accordion-group multiple="true" value="first" animated="false">
        <ion-accordion value="first">
          <ion-item slot="header">Label</ion-item>
          <div slot="content">Content</div>
        </ion-accordion>
        <ion-accordion value="second">
          <ion-item slot="header">Label</ion-item>
          <div slot="content">Content</div>
        </ion-accordion>
        <ion-accordion value="third">
          <ion-item slot="header">Label</ion-item>
          <div slot="content">Content</div>
        </ion-accordion>
      </ion-accordion-group>
    `
  });

  const accordionGroup = page.body.querySelector('ion-accordion-group');
  const accordions = accordionGroup.querySelectorAll('ion-accordion');

  expect(accordions[0].classList.contains('accordion-collapsed')).toEqual(false);
  expect(accordions[1].classList.contains('accordion-collapsed')).toEqual(true);
  expect(accordions[2].classList.contains('accordion-collapsed')).toEqual(true);
});

it('should set default values if not provided', async () => {
  const page = await newSpecPage({
    components: [Item, Accordion, AccordionGroup],
    html: `
      <ion-accordion-group animated="false">
        <ion-accordion>
          <ion-item slot="header">Label</ion-item>
          <div slot="content">Content</div>
        </ion-accordion>
      </ion-accordion-group>
    `
  });

  const accordionGroup = page.body.querySelector('ion-accordion-group');
  const accordion = accordionGroup.querySelector('ion-accordion');

  /**
   * ID is determined via an auto incrementing counter
   * so do not hard code ion-accordion-0 as it might
   * change depending on how many accordions
   * are used in these tests.
   */
  expect(accordion.value).toContain('ion-accordion-');

  accordionGroup.value = accordion.value;
  await page.waitForChanges();

  expect(accordion.classList.contains('accordion-collapsed')).toEqual(false);
});
