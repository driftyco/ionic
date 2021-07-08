import {
  getPartsFromCalendarDay
} from '../utils/parse';

describe('getPartsFromCalendarDay()', () => {
  it('should extract DatetimeParts from a calendar day element', () => {
    const div = document.createElement('div');
    div.setAttribute('data-month', '4');
    div.setAttribute('data-day', '15');
    div.setAttribute('data-year', '2010');
    div.setAttribute('data-day-of-week', '5');

    expect(getPartsFromCalendarDay(div)).toEqual({
      day: 15,
      month: 4,
      year: 2010,
      dayOfWeek: 5
    })
  })
})


// TODO: parseDate()
