import {
  getPreviousMonth,
  getNextMonth,
  getPreviousDay,
  getNextDay,
  getPreviousWeek,
  getNextWeek,
  getEndOfWeek,
  getStartOfWeek,
  convert12HourTo24Hour,
  getInternalHourValue,
  calculateHourFromAMPM,
  subtractDays,
  addDays
} from '../utils/manipulation';

describe('addDays()', () => {
  it('should correctly add days', () => {
    expect(addDays({
      day: 1,
      month: 1,
      year: 2021
    }, 31)).toEqual({
      day: 1,
      month: 2,
      year: 2021
    })

    expect(addDays({
      day: 31,
      month: 12,
      year: 2021
    }, 1)).toEqual({
      day: 1,
      month: 1,
      year: 2022
    })
  })
})

describe('subtractDays()', () => {
  it('should correctly subtract days', () => {
    expect(subtractDays({
      day: 1,
      month: 1,
      year: 2021
    }, 1)).toEqual({
      day: 31,
      month: 12,
      year: 2020
    })

    expect(subtractDays({
      day: 1,
      month: 2,
      year: 2021
    }, 31)).toEqual({
      day: 1,
      month: 1,
      year: 2021
    })
  })
})

describe('getInternalHourValue()',() => {
  it('should correctly get the internal hour value', () => {
    expect(getInternalHourValue(12, true)).toEqual(12);
    expect(getInternalHourValue(12, true)).toEqual(12);

    expect(getInternalHourValue(12, false, 'am')).toEqual(0);
    expect(getInternalHourValue(12, false, 'pm')).toEqual(12);

    expect(getInternalHourValue(1, true)).toEqual(1);
    expect(getInternalHourValue(1, true)).toEqual(1);

    expect(getInternalHourValue(1, false, 'am')).toEqual(1);
    expect(getInternalHourValue(1, false, 'pm')).toEqual(13);
  });
});

describe('calculateHourFromAMPM()', () => {
  it('should correctly convert from AM to PM', () => {
    expect(calculateHourFromAMPM({ hour: 12, ampm: 'am' }, 'pm')).toEqual(12);
    expect(calculateHourFromAMPM({ hour: 1, ampm: 'am' }, 'pm')).toEqual(13);
    expect(calculateHourFromAMPM({ hour: 2, ampm: 'am' }, 'pm')).toEqual(14);
    expect(calculateHourFromAMPM({ hour: 3, ampm: 'am' }, 'pm')).toEqual(15);
    expect(calculateHourFromAMPM({ hour: 4, ampm: 'am' }, 'pm')).toEqual(16);
    expect(calculateHourFromAMPM({ hour: 5, ampm: 'am' }, 'pm')).toEqual(17);
    expect(calculateHourFromAMPM({ hour: 6, ampm: 'am' }, 'pm')).toEqual(18);
    expect(calculateHourFromAMPM({ hour: 7, ampm: 'am' }, 'pm')).toEqual(19);
    expect(calculateHourFromAMPM({ hour: 8, ampm: 'am' }, 'pm')).toEqual(20);
    expect(calculateHourFromAMPM({ hour: 9, ampm: 'am' }, 'pm')).toEqual(21);
    expect(calculateHourFromAMPM({ hour: 10, ampm: 'am' }, 'pm')).toEqual(22);
    expect(calculateHourFromAMPM({ hour: 11, ampm: 'am' }, 'pm')).toEqual(23);

    expect(calculateHourFromAMPM({ hour: 13, ampm: 'pm' }, 'am')).toEqual(1);
    expect(calculateHourFromAMPM({ hour: 14, ampm: 'pm' }, 'am')).toEqual(2);
    expect(calculateHourFromAMPM({ hour: 15, ampm: 'pm' }, 'am')).toEqual(3);
    expect(calculateHourFromAMPM({ hour: 16, ampm: 'pm' }, 'am')).toEqual(4);
    expect(calculateHourFromAMPM({ hour: 17, ampm: 'pm' }, 'am')).toEqual(5);
    expect(calculateHourFromAMPM({ hour: 18, ampm: 'pm' }, 'am')).toEqual(6);
    expect(calculateHourFromAMPM({ hour: 19, ampm: 'pm' }, 'am')).toEqual(7);
    expect(calculateHourFromAMPM({ hour: 20, ampm: 'pm' }, 'am')).toEqual(8);
    expect(calculateHourFromAMPM({ hour: 21, ampm: 'pm' }, 'am')).toEqual(9);
    expect(calculateHourFromAMPM({ hour: 22, ampm: 'pm' }, 'am')).toEqual(10);
    expect(calculateHourFromAMPM({ hour: 23, ampm: 'pm' }, 'am')).toEqual(11);
    expect(calculateHourFromAMPM({ hour: 0, ampm: 'pm' }, 'am')).toEqual(12);
  })
});


describe('convert12HourTo24Hour()', () => {
  it('should correctly convert 12 hour to 24 hour', () => {
    expect(convert12HourTo24Hour(12, 'am')).toEqual(0);
    expect(convert12HourTo24Hour(1, 'am')).toEqual(1);
    expect(convert12HourTo24Hour(2, 'am')).toEqual(2);
    expect(convert12HourTo24Hour(3, 'am')).toEqual(3);
    expect(convert12HourTo24Hour(4, 'am')).toEqual(4);
    expect(convert12HourTo24Hour(5, 'am')).toEqual(5);
    expect(convert12HourTo24Hour(6, 'am')).toEqual(6);
    expect(convert12HourTo24Hour(7, 'am')).toEqual(7);
    expect(convert12HourTo24Hour(8, 'am')).toEqual(8);
    expect(convert12HourTo24Hour(9, 'am')).toEqual(9);
    expect(convert12HourTo24Hour(10, 'am')).toEqual(10);
    expect(convert12HourTo24Hour(11, 'am')).toEqual(11);

    expect(convert12HourTo24Hour(12, 'pm')).toEqual(12);
    expect(convert12HourTo24Hour(1, 'pm')).toEqual(13);
    expect(convert12HourTo24Hour(2, 'pm')).toEqual(14);
    expect(convert12HourTo24Hour(3, 'pm')).toEqual(15);
    expect(convert12HourTo24Hour(4, 'pm')).toEqual(16);
    expect(convert12HourTo24Hour(5, 'pm')).toEqual(17);
    expect(convert12HourTo24Hour(6, 'pm')).toEqual(18);
    expect(convert12HourTo24Hour(7, 'pm')).toEqual(19);
    expect(convert12HourTo24Hour(8, 'pm')).toEqual(20);
    expect(convert12HourTo24Hour(9, 'pm')).toEqual(21);
    expect(convert12HourTo24Hour(10, 'pm')).toEqual(22);
    expect(convert12HourTo24Hour(11, 'pm')).toEqual(23);
  })
})

describe('getStartOfWeek()', () => {
  it('should correctly return the start of the week', () => {
    expect(getStartOfWeek({
      month: 5,
      day: 17,
      year: 2021,
      dayOfWeek: 1
    })).toEqual({
      month: 5,
      day: 16,
      year: 2021
    });

    expect(getStartOfWeek({
      month: 5,
      day: 1,
      year: 2021,
      dayOfWeek: 6
    })).toEqual({
      month: 4,
      day: 25,
      year: 2021,
    });

    expect(getStartOfWeek({
      month: 1,
      day: 2,
      year: 2021,
      dayOfWeek: 6
    })).toEqual({
      month: 12,
      day: 27,
      year: 2020
    });
  })
});

describe('getEndOfWeek()', () => {
  it('should correctly return the end of the week', () => {
    expect(getEndOfWeek({
      month: 5,
      day: 17,
      year: 2021,
      dayOfWeek: 1
    })).toEqual({
      month: 5,
      day: 22,
      year: 2021
    });

    expect(getEndOfWeek({
      month: 5,
      day: 31,
      year: 2021,
      dayOfWeek: 1
    })).toEqual({
      month: 6,
      day: 5,
      year: 2021,
    });

    expect(getEndOfWeek({
      month: 12,
      day: 29,
      year: 2021,
      dayOfWeek: 3
    })).toEqual({
      month: 1,
      day: 1,
      year: 2022
    });
  })
});

describe('getNextWeek()', () => {
  it('should correctly return the next week', () => {
    expect(getNextWeek({
      month: 5,
      day: 17,
      year: 2021
    })).toEqual({
      month: 5,
      day: 24,
      year: 2021
    });

    expect(getNextWeek({
      month: 5,
      day: 31,
      year: 2021
    })).toEqual({
      month: 6,
      day: 7,
      year: 2021
    });

    expect(getNextWeek({
      month: 12,
      day: 29,
      year: 2021
    })).toEqual({
      month: 1,
      day: 5,
      year: 2022
    });
  })
})

describe('getPreviousWeek()', () => {
  it('should correctly return the previous week', () => {
    expect(getPreviousWeek({
      month: 5,
      day: 17,
      year: 2021
    })).toEqual({
      month: 5,
      day: 10,
      year: 2021
    });

    expect(getPreviousWeek({
      month: 5,
      day: 1,
      year: 2021
    })).toEqual({
      month: 4,
      day: 24,
      year: 2021
    });

    expect(getPreviousWeek({
      month: 1,
      day: 4,
      year: 2021
    })).toEqual({
      month: 12,
      day: 28,
      year: 2020
    });
  })
})

describe('getNextDay()', () => {
  it('should correctly return the next day', () => {
    expect(getNextDay({
      month: 5,
      day: 17,
      year: 2021
    })).toEqual({
      month: 5,
      day: 18,
      year: 2021
    });

    expect(getNextDay({
      month: 5,
      day: 31,
      year: 2021
    })).toEqual({
      month: 6,
      day: 1,
      year: 2021
    });

    expect(getNextDay({
      month: 12,
      day: 31,
      year: 2021
    })).toEqual({
      month: 1,
      day: 1,
      year: 2022
    });
  })
})

describe('getPreviousDay()', () => {
  it('should correctly return the previous day', () => {
    expect(getPreviousDay({
      month: 5,
      day: 17,
      year: 2021
    })).toEqual({
      month: 5,
      day: 16,
      year: 2021
    });

    expect(getPreviousDay({
      month: 5,
      day: 1,
      year: 2021
    })).toEqual({
      month: 4,
      day: 30,
      year: 2021
    });

    expect(getPreviousDay({
      month: 1,
      day: 1,
      year: 2021
    })).toEqual({
      month: 12,
      day: 31,
      year: 2020
    });
  })
})

describe('getNextMonth()', () => {
  it('should return correct next month', () => {
    expect(getNextMonth({ month: 5, year: 2021, day: 1 })).toEqual({
      month: 6,
      year: 2021,
      day: 1
    });
    expect(getNextMonth({ month: 12, year: 2021, day: 30 })).toEqual({
      month: 1,
      year: 2022,
      day: 30
    });
    expect(getNextMonth({ month: 12, year: 1999, day: 30 })).toEqual({
      month: 1,
      year: 2000,
      day: 30
    });
  });
});

describe('getPreviousMonth()', () => {
  it('should return correct previous month', () => {
    expect(getPreviousMonth({ month: 5, year: 2021, day: 1 })).toEqual({
      month: 4,
      year: 2021,
      day: 1
    });
    expect(getPreviousMonth({ month: 1, year: 2021, day: 30 })).toEqual({
      month: 12,
      year: 2020,
      day: 30
    });
    expect(getPreviousMonth({ month: 1, year: 2000, day: 30 })).toEqual({
      month: 12,
      year: 1999,
      day: 30
    });
  });
});
