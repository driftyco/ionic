import { isTriggerElement, getIndexOfItem, getNextItem, getPrevItem } from '../utils';

describe('isTriggerElement', () => {
  it('should return true is element is a trigger', () => {
    const el = document.createElement('div');
    el.setAttribute('data-ion-popover-trigger', 'true');

    expect(isTriggerElement(el)).toEqual(true);
  });

  it('should return false is element is not a trigger', () => {
    const el = document.createElement('div');

    expect(isTriggerElement(el)).toEqual(false);
  });
});

describe('getIndexOfItem', () => {
  it('should return the correct index in an array of ion-items', () => {
    const array = createArrayOfElements(['ion-item', 'ion-item', 'ion-item']);

    expect(getIndexOfItem(array, array[1])).toEqual(1);
  });

  it('should return -1 when ion-item not found', () => {
    const el = document.createElement('ion-item');
    const array = createArrayOfElements(['ion-item', 'ion-item']);

    expect(getIndexOfItem(array, el)).toEqual(-1);
  });

  it('should return -1 if a non-ion-item is passed in', () => {
    const array = createArrayOfElements(['ion-item', 'div', 'ion-item']);

    expect(getIndexOfItem(array, array[1])).toEqual(-1);
  });
});

describe('getNextItem', () => {
  it('should get the next item in an array of ion-items', () => {
    const array = createArrayOfElements(['ion-item', 'ion-item', 'ion-item']);
    expect(getNextItem(array, array[1])).toEqual(array[2]);
  });

  it('should return undefined if there is no next item', () => {
    const array = createArrayOfElements(['ion-item', 'ion-item', 'ion-item']);
    expect(getNextItem(array, array[2])).toEqual(undefined);
  });
});

describe('getPrevItem', () => {
  it('should get the previous item in an array of ion-items', () => {
    const array = createArrayOfElements(['ion-item', 'ion-item', 'ion-item']);
    expect(getPrevItem(array, array[1])).toEqual(array[0]);
  });

  it('should return undefined if there is no previous item', () => {
    const array = createArrayOfElements(['ion-item', 'ion-item', 'ion-item']);
    expect(getPrevItem(array, array[0])).toEqual(undefined);
  });
});

const createArrayOfElements = (tags: string[]) => {
  return tags.map(tag => document.createElement(tag));
}
