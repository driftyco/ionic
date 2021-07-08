import { DatetimeParts } from '../datetime-interface';

const ISO_8601_REGEXP = /^(\d{4}|[+\-]\d{6})(?:-(\d{2})(?:-(\d{2}))?)?(?:T(\d{2}):(\d{2})(?::(\d{2})(?:\.(\d{3}))?)?(?:(Z)|([+\-])(\d{2})(?::(\d{2}))?)?)?$/;
const TIME_REGEXP = /^((\d{2}):(\d{2})(?::(\d{2})(?:\.(\d{3}))?)?(?:(Z)|([+\-])(\d{2})(?::(\d{2}))?)?)?$/;

/**
 * Use to convert a string of comma separated numbers or
 * an array of numbers, and clean up any user input
 */
export const convertToArrayOfNumbers = (input?: number[] | number | string): number[] | undefined => {
  if (input === undefined) { return; }

  let processedInput: any = input;

  if (typeof input === 'string') {
    // convert the string to an array of strings
    // auto remove any whitespace and [] characters
    processedInput = input.replace(/\[|\]|\s/g, '').split(',');
  }

  let values: number[];
  if (Array.isArray(processedInput)) {
    // ensure each value is an actual number in the returned array
    values = processedInput
      .map((num: any) => parseInt(num, 10))
      .filter(isFinite);
  } else {
    values = [processedInput as number];
  }

  return values;
};

/**
 * Extracts date information
 * from a .calendar-day element
 * into DatetimeParts.
 */
export const getPartsFromCalendarDay = (el: HTMLElement): DatetimeParts => {
  return {
    month: parseInt(el.getAttribute('data-month')!, 10),
    day: parseInt(el.getAttribute('data-day')!, 10),
    year: parseInt(el.getAttribute('data-year')!, 10),
    dayOfWeek: parseInt(el.getAttribute('data-day-of-week')!, 10)
  }
}

/**
 * Given an ISO-8601 string, format out the parts
 * We do not use the JS Date object here because
 * it adjusts the date for the current timezone.
 */
export const parseDate = (val: string | undefined | null): any | undefined => {
  // manually parse IS0 cuz Date.parse cannot be trusted
  // ISO 8601 format: 1994-12-15T13:47:20Z
  let parse: any[] | null = null;

  if (val != null && val !== '') {
    // try parsing for just time first, HH:MM
    parse = TIME_REGEXP.exec(val);
    if (parse) {
      // adjust the array so it fits nicely with the datetime parse
      parse.unshift(undefined, undefined);
      parse[2] = parse[3] = undefined;

    } else {
      // try parsing for full ISO datetime
      parse = ISO_8601_REGEXP.exec(val);
    }
  }

  if (parse === null) {
    // wasn't able to parse the ISO datetime
    return undefined;
  }

  // ensure all the parse values exist with at least 0
  for (let i = 1; i < 8; i++) {
    parse[i] = parse[i] !== undefined ? parseInt(parse[i], 10) : undefined;
  }

  let tzOffset = 0;
  if (parse[9] && parse[10]) {
    // hours
    tzOffset = parseInt(parse[10], 10) * 60;
    if (parse[11]) {
      // minutes
      tzOffset += parseInt(parse[11], 10);
    }
    if (parse[9] === '-') {
      // + or -
      tzOffset *= -1;
    }
  }

  return {
    year: parse[1],
    month: parse[2],
    day: parse[3],
    hour: parse[4],
    minute: parse[5],
    second: parse[6],
    millisecond: parse[7],
    tzOffset,
  };
};
