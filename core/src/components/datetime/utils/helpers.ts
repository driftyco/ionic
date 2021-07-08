/**
 * Determines if given year is a
 * leap year. Returns `true` if year
 * is a leap year. Returns `false`
 * otherwise.
 */
export const isLeapYear = (year: number) => {
  return (year % 4 === 0 && year % 100 !== 0) || (year % 400 === 0);
}

export const is24Hour = (locale: string) => {
  const date = new Date('5/18/2021 00:00');
  const formatted = new Intl.DateTimeFormat(locale, { hour: 'numeric' }).formatToParts(date);
  const hour = formatted.find(p => p.type === 'hour');

  if (!hour) {
    throw new Error('Hour value not found from DateTimeFormat');
  }

  return hour.value === '00';
}

/**
 * Given a date object, returns the number
 * of days in that month.
 * Month value begin at 1, not 0.
 * i.e. January = month 1.
 */
export const getNumDaysInMonth = (month: number, year: number) => {
  return (month === 4 || month === 6 || month === 9 || month === 11) ? 30 : (month === 2) ? isLeapYear(year) ? 29 : 28 : 31;
}
