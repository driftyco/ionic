import { Mode } from '../../../interface';
import { DatetimeParts } from '../datetime-interface';

import {
  isAfter,
  isBefore,
  isSameDay
} from './comparison';
import {
  getNumDaysInMonth,
  is24Hour
} from './helpers';
import {
  getNextMonth,
  getPreviousMonth
} from './manipulation';

const minutes = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23, 24, 25, 26, 27, 28, 29, 30, 31, 32, 33, 34, 35, 36, 37, 38, 39, 40, 41, 42, 43, 44, 45, 46, 47, 48, 49, 50, 51, 52, 53, 54, 55, 56, 57, 58, 59];
const hour12 = [12, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11];
const hour24 = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23];

export const getTimezoneOffset = (localDate: Date, timeZone: string) => {
  const utcDateTime = new Date(localDate.toLocaleString('en-US', { timeZone: 'utc' }));
  const tzDateTime = new Date(localDate.toLocaleString('en-US', { timeZone }));
  return utcDateTime.getTime() - tzDateTime.getTime();
};

/**
 * Given a locale and a mode,
 * return an array with formatted days
 * of the week. iOS should display days
 * such as "Mon" or "Tue".
 * MD should display days such as "M"
 * or "T".
 */
export const getDaysOfWeek = (locale: string, mode: Mode) => {
  /**
   * Nov 1st, 2020 starts on a Sunday.
   * ion-datetime assumes weeks start
   * on Sunday.
   */
  const weekdayFormat = mode === 'ios' ? 'short' : 'narrow';
  const intl = new Intl.DateTimeFormat(locale, { weekday: weekdayFormat })
  const startDate = new Date('11/01/2020');
  const daysOfWeek = [];

  /**
   * For each day of the week,
   * get the day name.
   */
  for (let i = 0; i < 7; i++) {
    const currentDate = new Date(startDate);
    currentDate.setDate(currentDate.getDate() + i);

    daysOfWeek.push(intl.format(currentDate))
  }

  return daysOfWeek;
}

/**
 * Returns an array containing all of the
 * days in a month for a given year. Values are
 * aligned with a week calendar starting on
 * Sunday using null values.
 */
export const getDaysOfMonth = (month: number, year: number) => {
  const numDays = getNumDaysInMonth(month, year);
  const offset = new Date(`${month}/1/${year}`).getDay() - 1;

  let days = [];
  for (let i = 1; i <= numDays; i++) {
    days.push({ day: i, dayOfWeek: (offset + i) % 7 });
  }

  for (let i = 0; i <= offset; i++) {
    days = [
      { day: null, dayOfWeek: null },
      ...days
    ]
  }

  return days;
}

/**
 * Given a local, reference datetime parts and option
 * max/min bound datetime parts, calculate the acceptable
 * hour and minute values according to the bounds and locale.
 */
export const generateTime = (locale: string, refParts: DatetimeParts, minParts?: DatetimeParts, maxParts?: DatetimeParts) => {
  const use24Hour = is24Hour(locale);
  let processedHours = use24Hour ? hour24 : hour12;
  let processedMinutes = minutes;
  let isAMAllowed = true;
  let isPMAllowed = true;

  if (minParts) {

    /**
     * If ref day is the same as the
     * minimum allowed day, filter hour/minute
     * values according to min hour and minute.
     */
    if (isSameDay(refParts, minParts)) {
      processedHours = processedHours.filter(hour => {
        const convertedHour = refParts.ampm === 'pm' ? (hour + 12) % 24 : hour;
        return convertedHour >= minParts.hour!;
      });
      processedMinutes = processedMinutes.filter(minute => minute >= minParts.minute!);
      isAMAllowed = minParts.hour! < 13;

    /**
     * If ref day is before minimum
     * day do not render any hours/minute values
     */
    } else if (isBefore(refParts, minParts)) {
      processedHours = [];
      processedMinutes = [];
      isAMAllowed = isPMAllowed = false;
    }
  }

  if (maxParts) {
    /**
     * If ref day is the same as the
     * maximum allowed day, filter hour/minute
     * values according to max hour and minute.
     */
    if (isSameDay(refParts, maxParts)) {
      processedHours = processedHours.filter(hour => {
        const convertedHour = refParts.ampm === 'pm' ? (hour + 12) % 24 : hour;
        return convertedHour <= maxParts.hour!;
      });
      processedMinutes = processedMinutes.filter(minute => minute <= maxParts.minute!);
      isPMAllowed = maxParts.hour! >= 13;
    /**
     * If ref day is after minimum
     * day do not render any hours/minute values
     */
    } else if (isAfter(refParts, maxParts)) {
      processedHours = [];
      processedMinutes = [];
      isAMAllowed = isPMAllowed = false;
    }
  }

  return {
    hours: processedHours,
    minutes: processedMinutes,
    am: isAMAllowed,
    pm: isPMAllowed,
    use24Hour
  }
}

/**
 * Given DatetimeParts, generate the previous,
 * current, and and next months.
 */
export const generateMonths = (refParts: DatetimeParts): DatetimeParts[] => {
  return [
    getPreviousMonth(refParts),
    { month: refParts.month, year: refParts.year, day: refParts.day },
    getNextMonth(refParts)
  ]
}

export const getPickerMonths = (locale: string, refParts: DatetimeParts, minParts?: DatetimeParts, maxParts?: DatetimeParts) => {
  const { year } = refParts;
  const maxMonth = maxParts && maxParts.year === year ? maxParts.month : 12;
  const minMonth = minParts && minParts.year === year ? minParts.month : 1;

  const months = [];
  for (let i = minMonth; i <= maxMonth; i++) {
    const date = new Date(`${i}/1/${year}`);

    const monthString = new Intl.DateTimeFormat(locale, { month: 'long' }).format(date);
    months.push({ text: monthString, value: i });
  }

  return months;
}

export const getCalendarYears = (refParts: DatetimeParts, showOutOfBoundsYears = false, minParts?: DatetimeParts, maxParts?: DatetimeParts) => {
  const { year } = refParts;
  const maxYear = (showOutOfBoundsYears) ? year + 20 : (maxParts?.year || year + 20)
  const minYear = (showOutOfBoundsYears) ? year - 20 : (minParts?.year || year - 20);

  const years = [];
  for (let i = maxYear; i >= minYear; i--) {
    years.push(i);
  }

  return years
}
