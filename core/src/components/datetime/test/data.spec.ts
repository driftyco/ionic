import {
  generateMonths,
  getDaysOfWeek,
  generateTime
} from '../utils/data';

describe('generateMonths()', () => {
  it('should generate correct month data', () => {
    expect(generateMonths({ month: 5, year: 2021, day: 1 })).toEqual([
      { month: 4, year: 2021, day: 1 },
      { month: 5, year: 2021, day: 1 },
      { month: 6, year: 2021, day: 1 }
    ]);
  });
});

describe('getDaysOfWeek()', () => {
  it('should return English short names given a locale and mode', () => {
    expect(getDaysOfWeek('en-US', 'ios')).toEqual(['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat']);
  });

  it('should return English narrow names given a locale and mode', () => {
    expect(getDaysOfWeek('en-US', 'md')).toEqual(['S', 'M', 'T', 'W', 'T', 'F', 'S']);
  });

  it('should return Spanish short names given a locale and mode', () => {
    expect(getDaysOfWeek('es-ES', 'ios')).toEqual(['dom', 'lun', 'mar', 'mié', 'jue', 'vie', 'sáb']);
  });

  it('should return Spanish narrow names given a locale and mode', () => {
    expect(getDaysOfWeek('es-ES', 'md')).toEqual(['D', 'L', 'M', 'X', 'J', 'V', 'S']);
  });
})

describe('generateTime()', () => {
  it('should not filter and hours/minutes when no bounds set', () => {
    const today = {
      day: 19,
      month: 5,
      year: 2021,
      hour: 5,
      minute: 43
    }
    const { hours, minutes, use24Hour } = generateTime('en-US', today);

    expect(hours.length).toEqual(12);
    expect(minutes.length).toEqual(60);
    expect(use24Hour).toEqual(false);
  });
  it('should filter according to min', () => {
    const today = {
      day: 19,
      month: 5,
      year: 2021,
      hour: 5,
      minute: 43
    }
    const min = {
      day: 19,
      month: 5,
      year: 2021,
      hour: 2,
      minute: 40
    }
    const { hours, minutes, use24Hour } = generateTime('en-US', today, min);

    expect(hours.length).toEqual(11);
    expect(minutes.length).toEqual(20);
    expect(use24Hour).toEqual(false);
  })
  it('should not filter according to min if not on reference day', () => {
    const today = {
      day: 20,
      month: 5,
      year: 2021,
      hour: 5,
      minute: 43
    }
    const min = {
      day: 19,
      month: 5,
      year: 2021,
      hour: 2,
      minute: 40
    }
    const { hours, minutes, use24Hour } = generateTime('en-US', today, min);

    expect(hours.length).toEqual(12);
    expect(minutes.length).toEqual(60);
    expect(use24Hour).toEqual(false);
  })
  it('should filter according to max', () => {
    const today = {
      day: 19,
      month: 5,
      year: 2021,
      hour: 5,
      minute: 43
    }
    const max = {
      day: 19,
      month: 5,
      year: 2021,
      hour: 7,
      minute: 44
    }
    const { hours, minutes, use24Hour } = generateTime('en-US', today, undefined, max);

    expect(hours.length).toEqual(7);
    expect(minutes.length).toEqual(45);
    expect(use24Hour).toEqual(false);
  })
  it('should not filter according to min if not on reference day', () => {
    const today = {
      day: 20,
      month: 5,
      year: 2021,
      hour: 5,
      minute: 43
    }
    const max = {
      day: 21,
      month: 5,
      year: 2021,
      hour: 2,
      minute: 40
    }
    const { hours, minutes, use24Hour } = generateTime('en-US', today, undefined, max);

    expect(hours.length).toEqual(12);
    expect(minutes.length).toEqual(60);
    expect(use24Hour).toEqual(false);
  })
  it('should return no values for a day less than the min', () => {
    const today = {
      day: 20,
      month: 5,
      year: 2021,
      hour: 5,
      minute: 43
    }
    const min = {
      day: 21,
      month: 5,
      year: 2021,
      hour: 2,
      minute: 40
    }
    const { hours, minutes, use24Hour } = generateTime('en-US', today, min);

    expect(hours.length).toEqual(0);
    expect(minutes.length).toEqual(0);
    expect(use24Hour).toEqual(false);
  })
  it('should return no values for a day greater than the max', () => {
    const today = {
      day: 22,
      month: 5,
      year: 2021,
      hour: 5,
      minute: 43
    }
    const max = {
      day: 21,
      month: 5,
      year: 2021,
      hour: 2,
      minute: 40
    }
    const { hours, minutes, use24Hour } = generateTime('en-US', today, undefined, max);

    expect(hours.length).toEqual(0);
    expect(minutes.length).toEqual(0);
    expect(use24Hour).toEqual(false);
  })
  it('should allow all hours and minutes if not set in min/max', () => {
    const today = {
      day: 22,
      month: 5,
      year: 2021,
      hour: 5,
      minute: 43
    }
    const min = {
      day: 22,
      month: 5,
      year: 2021
    }
    const max = {
      day: 22,
      month: 5,
      year: 2021
    }

    const { hours, minutes, use24Hour } = generateTime('en-US', today, min, max);

    expect(hours.length).toEqual(12);
    expect(minutes.length).toEqual(60);
    expect(use24Hour).toEqual(false);
  })
  it('should allow certain hours and minutes based on minuteValues and hourValues', () => {
    const today = {
      day: 22,
      month: 5,
      year: 2021,
      hour: 5,
      minute: 43
    }

    const { hours, minutes, use24Hour } = generateTime('en-US', today, undefined, undefined, [1,2,3], [10,15,20]);

    expect(hours).toStrictEqual([1,2,3]);
    expect(minutes).toStrictEqual([10,15,20]);
  })
})
