import {
  generateDayAriaLabel,
  getMonthAndDay,
  getFormattedHour,
  addTimePadding,
  getMonthAndYear
} from '../utils/format';

describe('generateDayAriaLabel()', () => {
  it('should return Wednesday, May 12', () => {
    const reference = { month: 5, day: 12, year: 2021 };

    expect(generateDayAriaLabel('en-US', false, reference)).toEqual('Wednesday, May 12');
  });
  it('should return Today, Wednesday, May 12', () => {
    const reference = { month: 5, day: 12, year: 2021 };

    expect(generateDayAriaLabel('en-US', true, reference)).toEqual('Today, Wednesday, May 12');
  });
  it('should return Saturday, May 1', () => {
    const reference = { month: 5, day: 1, year: 2021 };

    expect(generateDayAriaLabel('en-US', false, reference)).toEqual('Saturday, May 1');
  });
  it('should return Monday, May 31', () => {
    const reference = { month: 5, day: 31, year: 2021 };

    expect(generateDayAriaLabel('en-US', false, reference)).toEqual('Monday, May 31');
  });
});

describe('getMonthAndDay()', () => {
  it('should return Tue, May 11', () => {
    expect(getMonthAndDay('en-US', { month: 5, day: 11, year: 2021 })).toEqual('Tue, May 11');
  });

  it('should return mar, 11 may', () => {
    expect(getMonthAndDay('es-ES', { month: 5, day: 11, year: 2021 })).toEqual('mar, 11 may');
  });
})

describe('getFormattedHour()', () => {
  it('should only add padding if using 24 hour time', () => {
    expect(getFormattedHour(0, true)).toEqual('00');
    expect(getFormattedHour(0, false)).toEqual('0');

    expect(getFormattedHour(10, true)).toEqual('10');
    expect(getFormattedHour(10, false)).toEqual('10');
  })
});

describe('addTimePadding()', () => {
  it('should add correct amount of padding', () => {
    expect(addTimePadding(0)).toEqual('00');
    expect(addTimePadding(9)).toEqual('09');
    expect(addTimePadding(10)).toEqual('10');
    expect(addTimePadding(100)).toEqual('100');
  })
});

describe('getMonthAndYear()', () => {
  it('should return May 2021', () => {
    expect(getMonthAndYear('en-US', { month: 5, day: 11, year: 2021 })).toEqual('May 2021');
  });

  it('should return mar, 11 may', () => {
    expect(getMonthAndYear('es-ES', { month: 5, day: 11, year: 2021 })).toEqual('mayo de 2021');
  });
})
