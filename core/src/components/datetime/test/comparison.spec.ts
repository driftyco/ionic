import {
  isSameDay,
  isBefore,
  isAfter
} from '../utils/comparison';

describe('isSameDay()', () => {
  it('should return correct results for month, day, and year', () => {
    const reference = { month: 1, day: 1, year: 2021 }

    expect(isSameDay(reference, { month: 1, day: 1, year: 2021 })).toEqual(true);
    expect(isSameDay(reference, { month: 2, day: 1, year: 2021 })).toEqual(false);
    expect(isSameDay(reference, { month: 1, day: 2, year: 2021 })).toEqual(false);
    expect(isSameDay(reference, { month: 1, day: 1, year: 2022 })).toEqual(false);
    expect(isSameDay(reference, { month: 0, day: 0, year: 0 })).toEqual(false);
    expect(isSameDay(reference, { month: null, day: null, year: null })).toEqual(false);
  })
})

describe('isBefore()', () => {
  it('should return correct results for month, day, and year', () => {
    const reference = { month: 1, day: 1, year: 2021 }

    expect(isBefore(reference, { month: 1, day: 1, year: 2021 })).toEqual(false);
    expect(isBefore(reference, { month: 2, day: 1, year: 2021 })).toEqual(true);
    expect(isBefore(reference, { month: 1, day: 2, year: 2021 })).toEqual(true);
    expect(isBefore(reference, { month: 1, day: 1, year: 2022 })).toEqual(true);
    expect(isBefore(reference, { month: 1, day: 1, year: 2020 })).toEqual(false);
    expect(isBefore(reference, { month: 0, day: 0, year: 0 })).toEqual(false);
    expect(isBefore(reference, { month: null, day: null, year: null })).toEqual(false);
  })
})

describe('isAfter()', () => {
  it('should return correct results for month, day, and year', () => {
    const reference = { month: 2, day: 2, year: 2021 }

    expect(isAfter(reference, { month: 2, day: 2, year: 2021 })).toEqual(false);
    expect(isAfter(reference, { month: 2, day: 1, year: 2021 })).toEqual(true);
    expect(isAfter(reference, { month: 1, day: 2, year: 2021 })).toEqual(true);
    expect(isAfter(reference, { month: 1, day: 1, year: 2020 })).toEqual(true);
    expect(isAfter(reference, { month: 1, day: 1, year: 2022 })).toEqual(false);
    expect(isAfter(reference, { month: 0, day: 0, year: 0 })).toEqual(true);

    /**
     * 2021 > undefined === false
     * 2021 > null === true
     */
    expect(isAfter(reference, { month: null, day: null, year: null })).toEqual(true);
  })
})
