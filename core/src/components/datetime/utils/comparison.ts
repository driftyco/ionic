import { DatetimeParts } from '../datetime-interface';

/**
 * Returns true if the selected day is equal to the reference day
 */
export const isSameDay = (baseParts: DatetimeParts, compareParts: DatetimeParts) => {
  return (
    baseParts.month === compareParts.month &&
    baseParts.day === compareParts.day &&
    baseParts.year === compareParts.year
  );
}

/**
 * Returns true is the selected day is before the reference day.
 */
export const isBefore = (baseParts: DatetimeParts, compareParts: DatetimeParts) => {
  return (
    baseParts.year < compareParts.year ||
    baseParts.year === compareParts.year && baseParts.month < compareParts.month ||
    baseParts.year === compareParts.year && baseParts.month === compareParts.month && baseParts.day! < compareParts.day!
  );
}

/**
 * Returns true is the selected day is after the reference day.
 */
export const isAfter = (baseParts: DatetimeParts, compareParts: DatetimeParts) => {
  return (
    baseParts.year > compareParts.year ||
    baseParts.year === compareParts.year && baseParts.month > compareParts.month ||
    baseParts.year === compareParts.year && baseParts.month === compareParts.month && baseParts.day! > compareParts.day!
  );
}
