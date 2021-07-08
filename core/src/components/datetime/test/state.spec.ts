import {
  getCalendarDayState,
  isDayDisabled
} from '../utils/state';

describe('getCalendarDayState()', () => {
  it('should return correct state', () => {
    const refA = { month: 1, day: 1, year: 2019 };
    const refB = { month: 1, day: 1, year: 2021 };
    const refC = { month: 1, day: 1, year: 2023 };

    expect(getCalendarDayState('en-US', refA, refB, refC)).toEqual({
      isActive: false,
      isToday: false,
      disabled: false,
      ariaSelected: null,
      ariaLabel: 'Tuesday, January 1'
    });

    expect(getCalendarDayState('en-US', refA, refA, refC)).toEqual({
      isActive: true,
      isToday: false,
      disabled: false,
      ariaSelected: 'true',
      ariaLabel: 'Tuesday, January 1'
    });

    expect(getCalendarDayState('en-US', refA, refB, refA)).toEqual({
      isActive: false,
      isToday: true,
      disabled: false,
      ariaSelected: null,
      ariaLabel: 'Today, Tuesday, January 1'
    });

    expect(getCalendarDayState('en-US', refA, refA, refA)).toEqual({
      isActive: true,
      isToday: true,
      disabled: false,
      ariaSelected: 'true',
      ariaLabel: 'Today, Tuesday, January 1'
    });

    expect(getCalendarDayState('en-US', refA, refA, refA, undefined, undefined, [1])).toEqual({
      isActive: true,
      isToday: true,
      disabled: false,
      ariaSelected: 'true',
      ariaLabel: 'Today, Tuesday, January 1'
    });

    expect(getCalendarDayState('en-US', refA, refA, refA, undefined, undefined, [2])).toEqual({
      isActive: true,
      isToday: true,
      disabled: true,
      ariaSelected: 'true',
      ariaLabel: 'Today, Tuesday, January 1'
    });
  });
});

describe('isDayDisabled()', () => {
  it('should correctly return whether or not a day is disabled', () => {
    const refDate = { month: 5, day: 12, year: 2021 };

    expect(isDayDisabled(refDate, undefined, undefined)).toEqual(false);
    expect(isDayDisabled(refDate, { month: 5, day: 12, year: 2021 }, undefined)).toEqual(false);
    expect(isDayDisabled(refDate, { month: 6, day: 12, year: 2021 }, undefined)).toEqual(true);
    expect(isDayDisabled(refDate, { month: 5, day: 13, year: 2022 }, undefined)).toEqual(true);

    expect(isDayDisabled(refDate, undefined, { month: 5, day: 12, year: 2021 })).toEqual(false);
    expect(isDayDisabled(refDate, undefined, { month: 4, day: 12, year: 2021 })).toEqual(true);
    expect(isDayDisabled(refDate, undefined, { month: 5, day: 11, year: 2021 })).toEqual(true);
  })
});
