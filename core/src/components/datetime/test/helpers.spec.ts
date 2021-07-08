import {
  isLeapYear,
  getNumDaysInMonth,
  is24Hour
} from '../utils/helpers';

describe('daysInMonth()', () => {
  it('should return correct days in month for month and year', () => {
    expect(getNumDaysInMonth(1, 2019)).toBe(31);
    expect(getNumDaysInMonth(2, 2019)).toBe(28);
    expect(getNumDaysInMonth(3, 2019)).toBe(31);
    expect(getNumDaysInMonth(4, 2019)).toBe(30);
    expect(getNumDaysInMonth(5, 2019)).toBe(31);
    expect(getNumDaysInMonth(6, 2019)).toBe(30);
    expect(getNumDaysInMonth(7, 2019)).toBe(31);
    expect(getNumDaysInMonth(8, 2019)).toBe(31);
    expect(getNumDaysInMonth(9, 2019)).toBe(30);
    expect(getNumDaysInMonth(10, 2019)).toBe(31);
    expect(getNumDaysInMonth(11, 2019)).toBe(30);
    expect(getNumDaysInMonth(12, 2019)).toBe(31);
    expect(getNumDaysInMonth(2, 2020)).toBe(29);

    expect(getNumDaysInMonth(2, 2021)).toBe(28);
    expect(getNumDaysInMonth(2, 1900)).toBe(28);
    expect(getNumDaysInMonth(2, 1800)).toBe(28);
    expect(getNumDaysInMonth(2, 2400)).toBe(29);
  });
});

describe('isLeapYear()', () => {
  it('should return true if year is leapyear', () => {
    expect(isLeapYear(2096)).toBe(true);
    expect(isLeapYear(2021)).toBe(false);
    expect(isLeapYear(2012)).toBe(true);

    expect(isLeapYear(2000)).toBe(true);
    expect(isLeapYear(1900)).toBe(false);
    expect(isLeapYear(1800)).toBe(false);
  })
})

describe('is24Hour()', () => {
  it('should return true if the locale uses 24 hour time', () => {
    expect(is24Hour('en-US')).toBe(false);
    expect(is24Hour('en-GB')).toBe(true);
  })
})
