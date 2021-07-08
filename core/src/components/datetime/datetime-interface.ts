export interface DatetimeOptions {
  tmp?: string;
}

export interface DatetimeChangeEventDetail {
  value?: string | null;
}

export interface DatetimeParts {
  month: number;
  day: number | null;
  year: number;
  dayOfWeek?: number | null;
  hour?: number;
  minute?: number;
  ampm?: 'am' | 'pm';
  tzOffset?: number;
}
