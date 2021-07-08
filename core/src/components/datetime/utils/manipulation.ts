import { DatetimeParts } from '../datetime-interface';

import { getNumDaysInMonth } from './helpers';

const twoDigit = (val: number | undefined): string => {
  return ('0' + (val !== undefined ? Math.abs(val) : '0')).slice(-2);
};

const fourDigit = (val: number | undefined): string => {
  return ('000' + (val !== undefined ? Math.abs(val) : '0')).slice(-4);
};

export const convertDataToISO = (data: any): string => {
  // https://www.w3.org/TR/NOTE-datetime
  let rtn = '';
  if (data.year !== undefined) {
    // YYYY
    rtn = fourDigit(data.year);

    if (data.month !== undefined) {
      // YYYY-MM
      rtn += '-' + twoDigit(data.month);

      if (data.day !== undefined) {
        // YYYY-MM-DD
        rtn += '-' + twoDigit(data.day!);

        if (data.hour !== undefined) {
          // YYYY-MM-DDTHH:mm:SS
          rtn += `T${twoDigit(data.hour)}:${twoDigit(data.minute)}:00`;

          if (data.tzOffset === undefined) {
            // YYYY-MM-DDTHH:mm:SSZ
            rtn += 'Z';

          } else {

            // YYYY-MM-DDTHH:mm:SS+/-HH:mm
            rtn += (data.tzOffset > 0 ? '+' : '-') + twoDigit(Math.floor(Math.abs(data.tzOffset / 60))) + ':' + twoDigit(data.tzOffset % 60);
          }
        }
      }
    }

  } else if (data.hour !== undefined) {
    // HH:mm
    rtn = twoDigit(data.hour) + ':' + twoDigit(data.minute);
  }

  return rtn;
};

/**
 * Converts an 12 hour value to 24 hours.
 */
export const convert12HourTo24Hour = (hour: number, ampm?: 'am' | 'pm') => {
  if (ampm === undefined) { return hour; }

  /**
   * If AM and 12am
   * then return 00:00.
   * Otherwise just return
   * the hour since it is
   * already in 24 hour format.
   */
  if (ampm === 'am') {
    if (hour === 12) {
      return 0;
    }

    return hour;
  }

  /**
   * If PM and 12pm
   * just return 12:00
   * since it is already
   * in 24 hour format.
   * Otherwise add 12 hours
   * to the time.
   */
  if (hour === 12) {
    return 12;
  }

  return hour + 12;
}

export const getStartOfWeek = (refParts: DatetimeParts): DatetimeParts => {
  const { dayOfWeek } = refParts;
  if (dayOfWeek === null || dayOfWeek === undefined) {
    throw new Error('No day of week provided');
  }

  return subtractDays(refParts, dayOfWeek);
}

export const getEndOfWeek = (refParts: DatetimeParts): DatetimeParts => {
  const { dayOfWeek } = refParts;
  if (dayOfWeek === null || dayOfWeek === undefined) {
    throw new Error('No day of week provided');
  }

  return addDays(refParts, 6 - dayOfWeek);
}

export const getNextDay = (refParts: DatetimeParts): DatetimeParts => {
  return addDays(refParts, 1);
}

export const getPreviousDay = (refParts: DatetimeParts): DatetimeParts => {
  return subtractDays(refParts, 1);
}

export const getPreviousWeek = (refParts: DatetimeParts): DatetimeParts => {
  return subtractDays(refParts, 7);
}

export const getNextWeek = (refParts: DatetimeParts): DatetimeParts => {
  return addDays(refParts, 7);
}

/**
 * Given datetime parts, subtract
 * numDays from the date.
 * Returns a new DatetimeParts object
 * Currently can only go backward at most 1 month.
 */
export const subtractDays = (refParts: DatetimeParts, numDays: number) => {
  const { month, day, year } = refParts;
  if (day === null) {
    throw new Error('No day provided');
  }

  const workingParts = {
    month,
    day,
    year
  }

  workingParts.day = day - numDays;

  /**
   * If wrapping to previous month
   * update days and decrement month
   */
  if (workingParts.day < 1) {
    workingParts.month -= 1;
  }

  /**
   * If moving to previous year, reset
   * month to December and decrement year
   */
  if (workingParts.month < 1) {
    workingParts.month = 12;
    workingParts.year -= 1;
  }

  /**
   * Determine how many days are in the current
   * month
   */

  if (workingParts.day < 1) {
    const daysInMonth = getNumDaysInMonth(workingParts.month, workingParts.year);

    /**
     * Take num days in month and add the
     * number of underflow days. This number will
     * be negative.
     * Example: 1 week before Jan 2, 2021 is
     * December 26, 2021 so:
     * 2 - 7 = -5
     * 31 + (-5) = 26
     */
    workingParts.day = daysInMonth + workingParts.day;
  }

  return workingParts;
}

/**
 * Given datetime parts, add
 * numDays to the date.
 * Returns a new DatetimeParts object
 * Currently can only go forward at most 1 month.
 */
export const addDays = (refParts: DatetimeParts, numDays: number) => {
  const { month, day, year } = refParts;
  if (day === null) {
    throw new Error('No day provided');
  }

  const workingParts = {
    month,
    day,
    year
  }

  const daysInMonth = getNumDaysInMonth(month, year);
  workingParts.day = day + numDays;

  /**
   * If wrapping to next month
   * update days and increment month
   */
  if (workingParts.day > daysInMonth) {
    workingParts.day -= daysInMonth;
    workingParts.month += 1;
  }

  /**
   * If moving to next year, reset
   * month to January and increment year
   */
  if (workingParts.month > 12) {
    workingParts.month = 1;
    workingParts.year += 1;
  }

  return workingParts;
}

/**
 * Given DatetimeParts, generate the previous month.
 */
export const getPreviousMonth = (refParts: DatetimeParts) => {
  /**
   * If current month is January, wrap backwards
   *  to December of the previous year.
   */
  const month = (refParts.month === 1) ? 12 : refParts.month - 1;
  const year = (refParts.month === 1) ? refParts.year - 1 : refParts.year;

  const numDaysInMonth = getNumDaysInMonth(month, year);
  const day = (numDaysInMonth < refParts.day!) ? numDaysInMonth : refParts.day;

  return { month, year, day };
}

/**
 * Given DatetimeParts, generate the next month.
 */
export const getNextMonth = (refParts: DatetimeParts) => {
  /**
   * If current month is December, wrap forwards
   *  to January of the next year.
   */
  const month = (refParts.month === 12) ? 1 : refParts.month + 1;
  const year = (refParts.month === 12) ? refParts.year + 1 : refParts.year;

  const numDaysInMonth = getNumDaysInMonth(month, year);
  const day = (numDaysInMonth < refParts.day!) ? numDaysInMonth : refParts.day;

  return { month, year, day };
}

/**
 * If PM, then internal value should
 * be converted to 24-hr time.
 * Does not apply when public
 * values are already 24-hr time.
 */
export const getInternalHourValue = (hour: number, use24Hour: boolean, ampm?: 'am' | 'pm') => {
  if (use24Hour) { return hour; }

  return convert12HourTo24Hour(hour, ampm);
}

/**
 * Unless otherwise stated, all month values are
 * 1 indexed instead of the typical 0 index in JS Date.
 * Example:
 *   January = Month 0 when using JS Date
 *   January = Month 1 when using this datetime util
 */

/**
 * Given the current datetime parts and a new AM/PM value
 * calculate what the hour should be in 24-hour time format.
 * Used when toggling the AM/PM segment since we store our hours
 * in 24-hour time format internally.
 */
export const calculateHourFromAMPM = (currentParts: DatetimeParts, newAMPM: 'am' | 'pm') => {
  const { ampm: currentAMPM, hour } = currentParts;

  let newHour = hour!;

  /**
   * If going from AM --> PM, need to update the
   *
   */
  if (currentAMPM === 'am' && newAMPM === 'pm') {
    newHour = convert12HourTo24Hour(newHour, 'pm');

  /**
   * If going from PM --> AM
   */
  } else if (currentAMPM === 'pm' && newAMPM === 'am') {
    newHour = Math.abs(newHour - 12);
  }

  return newHour;
}
