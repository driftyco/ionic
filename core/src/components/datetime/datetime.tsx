import { Component, ComponentInterface, Element, Event, EventEmitter, Host, Method, Prop, State, Watch, h, writeTask } from '@stencil/core';

import { getIonMode } from '../../global/ionic-global';
import { Color, DatetimeChangeEventDetail, DatetimeParts, Mode, StyleEventDetail } from '../../interface';
import { raf, renderHiddenInput } from '../../utils/helpers';
import { createColorClasses } from '../../utils/theme';

import {
  generateMonths,
  generateTime,
  getCalendarYears,
  getDaysOfMonth,
  getDaysOfWeek,
  getPickerMonths,
  getTimezoneOffset
} from './utils/data';
import {
  addTimePadding,
  getFormattedHour,
  getMonthAndDay,
  getMonthAndYear
} from './utils/format';
import {
  is24Hour
} from './utils/helpers';
import {
  calculateHourFromAMPM,
  convertDataToISO,
  getEndOfWeek,
  getInternalHourValue,
  getNextDay,
  getNextMonth,
  getNextWeek,
  getPreviousDay,
  getPreviousMonth,
  getPreviousWeek,
  getStartOfWeek
} from './utils/manipulation';
import {
  getPartsFromCalendarDay,
  parseDate
} from './utils/parse';
import {
  getCalendarDayState,
  getCalendarYearState,
} from './utils/state';

/**
 * @virtualProp {"ios" | "md"} mode - The mode determines which platform styles to use.
 *
 * @slot title - The title of the datetime.
 * @slot buttons - The buttons in the datetime.
 */
@Component({
  tag: 'ion-datetime',
  styleUrls: {
    ios: 'datetime.ios.scss',
    md: 'datetime.md.scss'
  },
  shadow: true
})
export class Datetime implements ComponentInterface {

  private inputId = `ion-dt-${datetimeIds++}`;
  private calendarBodyRef?: HTMLElement;
  private timeBaseRef?: HTMLElement;
  private timeHourRef?: HTMLElement;
  private timeMinuteRef?: HTMLElement;
  private monthRef?: HTMLElement;
  private yearRef?: HTMLElement;

  private minParts?: any;
  private maxParts?: any;

  @State() showMonthAndYear = false;

  @State() activeParts: DatetimeParts = {
    month: 5,
    day: 28,
    year: 2021,
    hour: 13,
    minute: 52,
    ampm: 'pm'
  }

  @State() workingParts: DatetimeParts = {
    month: 5,
    day: 28,
    year: 2021,
    hour: 13,
    minute: 52,
    ampm: 'pm'
  }

  private todayParts = parseDate(new Date().toISOString())

  @Element() el!: HTMLIonDatetimeElement;

  @State() isPresented = false;

  /**
   * The color to use from your application's color palette.
   * Default options are: `"primary"`, `"secondary"`, `"tertiary"`, `"success"`, `"warning"`, `"danger"`, `"light"`, `"medium"`, and `"dark"`.
   * For more information on colors, see [theming](/docs/theming/basics).
   */
  @Prop() color?: Color = 'primary';

  /**
   * The name of the control, which is submitted with the form data.
   */
  @Prop() name: string = this.inputId;

  /**
   * If `true`, the user cannot interact with the datetime.
   */
  @Prop() disabled = false;

  /**
   * If `true`, the datetime appears normal but is not interactive.
   */
  @Prop() readonly = false;

  @Watch('disabled')
  protected disabledChanged() {
    this.emitStyle();
  }

  /**
   * The minimum datetime allowed. Value must be a date string
   * following the
   * [ISO 8601 datetime format standard](https://www.w3.org/TR/NOTE-datetime),
   * such as `1996-12-19`. The format does not have to be specific to an exact
   * datetime. For example, the minimum could just be the year, such as `1994`.
   * Defaults to the beginning of the year, 100 years ago from today.
   */
  @Prop({ mutable: true }) min?: string;

  @Watch('min')
  protected minChanged() {
    this.processMinParts();
  }

  /**
   * The maximum datetime allowed. Value must be a date string
   * following the
   * [ISO 8601 datetime format standard](https://www.w3.org/TR/NOTE-datetime),
   * `1996-12-19`. The format does not have to be specific to an exact
   * datetime. For example, the maximum could just be the year, such as `1994`.
   * Defaults to the end of this year.
   */
  @Prop({ mutable: true }) max?: string;

  @Watch('max')
  protected maxChanged() {
    this.processMaxParts();
  }

  /**
   * Which values you want to select. `'date'` will show
   * a calendar picker to select the month, day, and year. `'time'`
   * will show a time picker to select the hour, minute, and (optionally)
   * AM/PM. `'date-time'` will show the date picker first and time picker second.
   * `'time-date'` will show the time picker first and date picker second.
   */
  @Prop() presentation: 'date-time' | 'time-date' | 'date' | 'time' = 'date-time';

  /**
   * The format of the date and time that is returned in the
   * event payload of `ionChange`. You can configure
   * the timezone used with the `displayTimezone` property.
   * Defaults to `MMM D, YYYY`.
   */
  @Prop() displayFormat = 'MMM D, YYYY';

  /**
   * The timezone to use for display purposes only. See
   * [Date.prototype.toLocaleString()](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Date/toLocaleString)
   * for a list of supported timezones. If no value is provided, the
   * component will default to displaying times in the user's local timezone.
   */
  @Prop() displayTimezone?: string;

  /**
   * The text to display on the picker's cancel button.
   */
  @Prop() cancelText = 'Cancel';

  /**
   * The text to display on the picker's "Done" button.
   */
  @Prop() doneText = 'Done';

  /**
   * Values used to create the list of selectable years. By default
   * the year values range between the `min` and `max` datetime inputs. However, to
   * control exactly which years to display, the `yearValues` input can take a number, an array
   * of numbers, or string of comma separated numbers. For example, to show upcoming and
   * recent leap years, then this input's value would be `yearValues="2024,2020,2016,2012,2008"`.
   */
  @Prop() yearValues?: number[] | number | string;

  /**
   * Values used to create the list of selectable months. By default
   * the month values range from `1` to `12`. However, to control exactly which months to
   * display, the `monthValues` input can take a number, an array of numbers, or a string of
   * comma separated numbers. For example, if only summer months should be shown, then this
   * input value would be `monthValues="6,7,8"`. Note that month numbers do *not* have a
   * zero-based index, meaning January's value is `1`, and December's is `12`.
   */
  @Prop() monthValues?: number[] | number | string;

  /**
   * Values used to create the list of selectable days. By default
   * every day is shown for the given month. However, to control exactly which days of
   * the month to display, the `dayValues` input can take a number, an array of numbers, or
   * a string of comma separated numbers. Note that even if the array days have an invalid
   * number for the selected month, like `31` in February, it will correctly not show
   * days which are not valid for the selected month.
   */
  @Prop() dayValues?: number[] | number | string;

  /**
   * Values used to create the list of selectable hours. By default
   * the hour values range from `0` to `23` for 24-hour, or `1` to `12` for 12-hour. However,
   * to control exactly which hours to display, the `hourValues` input can take a number, an
   * array of numbers, or a string of comma separated numbers.
   */
  @Prop() hourValues?: number[] | number | string;

  /**
   * Values used to create the list of selectable minutes. By default
   * the minutes range from `0` to `59`. However, to control exactly which minutes to display,
   * the `minuteValues` input can take a number, an array of numbers, or a string of comma
   * separated numbers. For example, if the minute selections should only be every 15 minutes,
   * then this input value would be `minuteValues="0,15,30,45"`.
   */
  @Prop() minuteValues?: number[] | number | string;

  /**
   * The locale to use for `ion-datetime`. This
   * impacts month and day name formatting.
   * The `'default'` value refers to the default
   * locale set by your device.
   */
  @Prop() locale = 'default';

  /**
   * The value of the datetime as a valid ISO 8601 datetime string.
   */
  @Prop({ mutable: true }) value?: string | null;

  /**
   * Update the datetime value when the value changes
   */
  @Watch('value')
  protected valueChanged() {
    this.emitStyle();
    this.ionChange.emit({
      value: this.value
    });
  }

  /**
   * If `true`, a header will be shown above the calendar
   * picker. On `ios` mode this will include the
   * slotted title, and on `md` mode this will include
   * the slotted title and the selected date.
   */
  @Prop() showDefaultTitle = false;

  /**
   * If `true`, the default "Cancel" and "OK" buttons
   * will be rendered at the bottom of the `ion-datetime`
   * component. Developers can also use the `button` slot
   * if they want to customize these buttons. If custom
   * buttons are set in the `button` slot then the
   * default buttons will not be rendered.
   */
  @Prop() showDefaultButtons = false;

  /**
   * Emitted when the datetime selection was cancelled.
   */
  @Event() ionCancel!: EventEmitter<void>;

  /**
   * Emitted when the value (selected date) has changed.
   */
  @Event() ionChange!: EventEmitter<DatetimeChangeEventDetail>;

  /**
   * Emitted when the datetime has focus.
   */
  @Event() ionFocus!: EventEmitter<void>;

  /**
   * Emitted when the datetime loses focus.
   */
  @Event() ionBlur!: EventEmitter<void>;

  /**
   * Emitted when the styles change.
   * @internal
   */
  @Event() ionStyle!: EventEmitter<StyleEventDetail>;

  /**
   * Confirms the selected datetime value, updates the
   * `value` property, and optionally closes the popover
   * or modal that the datetime was presented in.
   */
  @Method()
  async confirm(closeOverlay = false) {
    /**
     * Prevent convertDataToISO from doing any
     * kind of transformation based on timezone
     * This cancels out any change it attempts to make
     *
     * Important: Take the timezone offset based on
     * the date that is currently selected, otherwise
     * there can be 1 hr difference when dealing w/ DST
     */
    const date = new Date(convertDataToISO(this.workingParts));

    // If a custom display timezone is provided, use that tzOffset value instead
    this.workingParts.tzOffset = (this.displayTimezone !== undefined && this.displayTimezone.length > 0)
      ? ((getTimezoneOffset(date, this.displayTimezone)) / 1000 / 60) * -1
      : date.getTimezoneOffset() * -1;

    this.value = convertDataToISO(this.workingParts);

    if (closeOverlay) {
      this.closeParentOverlay();
    }
  }

  /**
   * Resets the internal state of the datetime
   * but does not update the value.
   */
  @Method()
  async reset(value?: string) {
    this.processValue(value);
  }

  /**
   * Emits the ionCancel event and
   * optionally closes the popover
   * or modal that the datetime was
   * presented in.
   */
  @Method()
  async cancel(closeOverlay = false) {
    this.ionCancel.emit();

    if (closeOverlay) {
      this.closeParentOverlay();
    }
  }

  private closeParentOverlay = () => {
    const popoverOrModal = this.el.closest('ion-modal, ion-popover') as HTMLIonModalElement | HTMLIonPopoverElement | null;
    if (popoverOrModal) {
      popoverOrModal.dismiss();
    }
  }

  private setWorkingParts = (parts: DatetimeParts) => {
    this.workingParts = {
      ...parts
    }
  }

  private setActiveParts = (parts: DatetimeParts) => {
    this.activeParts = {
      ...parts
    }

    const hasSlottedButtons = this.el.querySelector('[slot="buttons"]') !== null;
    if (hasSlottedButtons || this.showDefaultButtons) { return; }

    this.confirm();
  }

  private initializeKeyboardListeners = () => {
    const { calendarBodyRef } = this;
    if (!calendarBodyRef) { return; }

    const root = this.el!.shadowRoot!;

    /**
     * Get a reference to the month
     * element we are currently viewing.
     */
    const currentMonth = calendarBodyRef.querySelector('.calendar-month:nth-of-type(2)')!;

    /**
     * When focusing the calendar body, we want to pass focus
     * to the working day, but other days should
     * only be accessible using the arrow keys. Pressing
     * Tab should jump between bodies of selectable content.
     * TODO: This does not work right on Safari
     */
    /*this.calendarBodyRef!.addEventListener('focusin', ev => {
      const relatedTarget = ev.relatedTarget as HTMLElement;

      if (ev.target !== this.calendarBodyRef) { return; }

      if (relatedTarget?.classList.contains('calendar-day')) {
        const prevButton = root.querySelector('.calendar-next-prev ion-button:last-of-type') as HTMLElement;
        prevButton.focus();
      } else {
        this.focusWorkingDay(currentMonth);
      }

    });*/

    /**
     * We must use keydown not keyup as we want
     * to prevent scrolling when using the arrow keys.
     */
    this.calendarBodyRef!.addEventListener('keydown', (ev: KeyboardEvent) => {
      const activeElement = root.activeElement;
      if (!activeElement || !activeElement.classList.contains('calendar-day')) { return; }

      const parts = getPartsFromCalendarDay(activeElement as HTMLElement)

      // TODO: this needs to account for max/min
      switch (ev.key) {
        case 'ArrowDown':
          ev.preventDefault();
          this.setWorkingParts({ ...this.workingParts, ...getNextWeek(parts) as any });
          break;
        case 'ArrowUp':
          ev.preventDefault();
          this.setWorkingParts({ ...this.workingParts, ...getPreviousWeek(parts) as any });
          break;
        case 'ArrowRight':
          ev.preventDefault();
          this.setWorkingParts({ ...this.workingParts, ...getNextDay(parts) as any });
          break;
        case 'ArrowLeft':
          ev.preventDefault();
          this.setWorkingParts({ ...this.workingParts, ...getPreviousDay(parts) as any });
          break;
        case 'Home':
          ev.preventDefault();
          this.setWorkingParts({ ...this.workingParts, ...getStartOfWeek(parts) as any });
          break;
        case 'End':
          ev.preventDefault();
          this.setWorkingParts({ ...this.workingParts, ...getEndOfWeek(parts) as any });
          break;
        case 'PageUp':
          ev.preventDefault();
          this.setWorkingParts({ ...this.workingParts, ...getPreviousMonth(parts) as any });
          break;
        case 'PageDown':
          ev.preventDefault();
          this.setWorkingParts({ ...this.workingParts, ...getNextMonth(parts) as any });
          break;
        /**
         * Do not preventDefault here
         * as we do not want to override other
         * browser defaults such as pressing Enter/Space
         * to select a day.
         */
        default:
          return;
      }

      /**
       * Give view a change to re-render
       */
      requestAnimationFrame(() => this.focusWorkingDay(currentMonth));
    })
  }

  private focusWorkingDay = (currentMonth: Element) => {
    /**
     * Get the number of padding days so
     * we know how much to offset our next selector by
     * to grab the correct calenday-day element.
     */
    const padding = currentMonth.querySelectorAll('.calendar-day-padding');
    const { day } = this.workingParts;

    if (day === null) { return; }

    /**
     * Get the calendar day element
     * and focus it.
     */
    const dayEl = currentMonth.querySelector(`.calendar-day:nth-of-type(${padding.length + day})`) as HTMLElement | null;
    if (dayEl) {
      dayEl.focus();
    }
  }

  private processMinParts = () => {
    if (this.min === undefined) {
      this.minParts = undefined;
      return;
    }

    const { month, day, year, hour, minute } = parseDate(this.min);

    this.minParts = {
      month,
      day,
      year,
      hour,
      minute
    }
  }

  private processMaxParts = () => {
    if (this.max === undefined) {
      this.maxParts = undefined;
      return;
    }

    const { month, day, year, hour, minute } = parseDate(this.max);

    this.maxParts = {
      month,
      day,
      year,
      hour,
      minute
    }
  }

  private initializeCalendarIOListeners = () => {
    const { calendarBodyRef } = this;
    if (!calendarBodyRef) { return; }

    const mode = getIonMode(this);

    /**
     * For performance reasons, we only render 3
     * months at a time: The current month, the previous
     * month, and the next month. We have IntersectionObservers
     * on the previous and next month elements to append/prepend
     * new months.
     *
     * We can do this because Stencil is smart enough to not
     * re-create the .calendar-month containers, but rather
     * update the content within those containers.
     *
     * As an added bonus, WebKit has some troubles with
     * scroll-snap-stop: always, so not rendering all of
     * the months in a row allows us to mostly sidestep
     * that issue.
     */
    const months = calendarBodyRef.querySelectorAll('.calendar-month');

    const startMonth = months[0] as HTMLElement;
    const workingMonth = months[1] as HTMLElement;
    const endMonth = months[2] as HTMLElement;

    /**
     * Before setting up the IntersectionObserver,
     * scroll the middle month into view.
     */
    writeTask(() => {
      workingMonth.scrollIntoView(false);

      let endIO: IntersectionObserver | undefined;
      let startIO: IntersectionObserver | undefined;
      const ioCallback = (callbackType: 'start' | 'end', entries: IntersectionObserverEntry[]) => {
        const refIO = (callbackType === 'start') ? startIO : endIO;
        const refMonth = (callbackType === 'start') ? startMonth : endMonth;
        const refMonthFn = (callbackType === 'start') ? getPreviousMonth : getNextMonth;

        /**
         * If the month is not fully in view, do not do anything
         */
        const ev = entries[0];
        if (!ev.isIntersecting) { return; }

        /**
         * On iOS, we need to set pointer-events: none
         * when the user is almost done with the gesture
         * so that they cannot quickly swipe while
         * the scrollable container is snapping.
         * Updating the container while snapping
         * causes WebKit to snap incorrectly.
         */
        if (mode === 'ios') {
          const ratio = ev.intersectionRatio;
          const shouldDisable = Math.abs(ratio - 0.7) <= 0.1;

          if (shouldDisable) {
            calendarBodyRef.style.setProperty('pointer-events', 'none');
            return;
          }
        }

        /**
         * Prevent scrolling for other browsers
         * to give the DOM time to update and the container
         * time to properly snap.
         */
        calendarBodyRef.style.setProperty('overflow', 'hidden');

        /**
         * Remove the IO temporarily
         * otherwise you can sometimes get duplicate
         * events when rubber banding.
         */
        if (refIO === undefined) { return; }
        refIO.disconnect();

        /**
         * Use a writeTask here to ensure
         * that the state is updated and the
         * correct month is scrolled into view
         * in the same frame. This is not
         * typically a problem on newer devices
         * but older/slower device may have a flicker
         * if we did not do this.
         */
        writeTask(() => {
          const { month, year, day } = refMonthFn(this.workingParts);

          this.setWorkingParts({
            ...this.workingParts,
            month,
            day: day!,
            year
          });

          workingMonth.scrollIntoView(false);
          calendarBodyRef.style.removeProperty('overflow');
          calendarBodyRef.style.removeProperty('pointer-events');

          /**
           * Now that state has been updated
           * and the correct month is in view,
           * we can resume the IO.
           */
          // tslint:disable-next-line
          if (refIO === undefined) { return; }
          refIO.observe(refMonth);
        });
      }

      /**
       * Listen on the first month to
       * prepend a new month and on the last
       * month to append a new month.
       * The 0.7 threshold is required on ios
       * so that we can remove pointer-events
       * when adding new months.
       * Adding to a scroll snapping container
       * while the container is snapping does not
       * completely work as expected in WebKit.
       * Adding pointer-events: none allows us to
       * avoid these issues.
       *
       * This should be fine on Chromium, but
       * when you set pointer-events: none
       * it applies to active gestures which is not
       * something WebKit does.
       */
      endIO = new IntersectionObserver(ev => ioCallback('end', ev), {
        threshold: mode === 'ios' ? [0.7, 1] : 1,
        root: calendarBodyRef
      });
      endIO.observe(endMonth);

      startIO = new IntersectionObserver(ev => ioCallback('start', ev), {
        threshold: mode === 'ios' ? [0.7, 1] : 1,
        root: calendarBodyRef
      });
      startIO.observe(startMonth);
    });
  }

  componentDidLoad() {
    const mode = getIonMode(this);

    this.initializeCalendarIOListeners();
    this.initializeKeyboardListeners();
    this.initializeTimeScrollListener();

    if (mode === 'ios') {
      this.initializeMonthAndYearScrollListeners();
    }
  }

  private initializeMonthAndYearScrollListeners = () => {
    const { monthRef, yearRef } = this;
    if (!yearRef || !monthRef) { return; }

    const { year } = this.workingParts;

    /**
     * Scroll initial month and year into view
     * TODO: This does not work if scrollable area is not visible
     */
    const initialYear = yearRef.querySelector(`.picker-col-item[data-value="${year}"]`);
    if (initialYear) {
      initialYear.scrollIntoView({ block: 'center', inline: 'center' });
    }

    let timeout: any;
    const scrollCallback = (colType: string) => {
      raf(() => {
        if (timeout) {
          clearTimeout(timeout);
          timeout = undefined;
        }

        const activeCol = colType === 'month' ? monthRef : yearRef;
        timeout = setTimeout(() => {

          const bbox = activeCol.getBoundingClientRect();

          /**
           * Select item in the center of the column
           * which is the month/year that we want to select
           */
          const centerX = bbox.x + (bbox.width / 2);
          const centerY = bbox.y + (bbox.height / 2);

          const activeElement = this.el!.shadowRoot!.elementFromPoint(centerX, centerY)!;
          const dataValue = activeElement.getAttribute('data-value');

          /**
           * If no value it is
           * possible we hit one of the
           * empty padding columns.
           */
          if (dataValue === null) {
            return;
          }

          const value = parseInt(dataValue, 10);
          if (colType === 'month') {
            this.setWorkingParts({
              ...this.workingParts,
              month: value
            });
          } else {
            this.setWorkingParts({
              ...this.workingParts,
              year: value
            });
          }

          /**
           * If the year changed, it is possible that
           * the allowed month values have changed and the scroll
           * position got reset
           */
          raf(() => {
            const { month: workingMonth, year: workingYear } = this.workingParts;
            const monthEl = monthRef.querySelector(`.picker-col-item[data-value='${workingMonth}']`);
            const yearEl = yearRef.querySelector(`.picker-col-item[data-value='${workingYear}']`);

            if (monthEl) {
              monthEl.scrollIntoView({ block: 'center', inline: 'center' });
            }

            if (yearEl) {
              yearEl.scrollIntoView({ block: 'center', inline: 'center' });
            }
          });
        }, 250);
      })
    }
    /**
     * Add scroll listeners to the month and year containers.
     * Wrap this in an raf so that the scroll callback
     * does not fire when we do our initial scrollIntoView above.
     */
    raf(() => {
      monthRef.addEventListener('scroll', () => scrollCallback('month'));
      yearRef.addEventListener('scroll', () => scrollCallback('year'));
    });
  }

  private initializeTimeScrollListener = () => {
    const { timeBaseRef, timeHourRef, timeMinuteRef } = this;
    if (!timeBaseRef || !timeHourRef || !timeMinuteRef) { return; }

    const { hour, minute } = this.workingParts;

    /**
     * Scroll initial hour and minute into view
     */
    raf(() => {
      const initialHour = timeHourRef.querySelector(`.time-item[data-value="${hour}"]`);
      if (initialHour) {
        initialHour.scrollIntoView();
      }
      const initialMinute = timeMinuteRef.querySelector(`.time-item[data-value="${minute}"]`);
      if (initialMinute) {
        initialMinute.scrollIntoView();
      }

      /**
       * Highlight the container and
       * appropriate column when scrolling.
       */
      let timeout: any;
      const scrollCallback = (colType: string) => {
        raf(() => {
          if (timeout) {
            clearTimeout(timeout);
            timeout = undefined;
          }

          const activeCol = colType === 'hour' ? timeHourRef : timeMinuteRef;
          const otherCol = colType === 'hour' ? timeMinuteRef : timeHourRef;

          timeBaseRef.classList.add('time-base-active');
          activeCol.classList.add('time-column-active');

          timeout = setTimeout(() => {
            timeBaseRef.classList.remove('time-base-active');
            activeCol.classList.remove('time-column-active');
            otherCol.classList.remove('time-column-active');

            const bbox = activeCol.getBoundingClientRect();
            const activeElement = this.el!.shadowRoot!.elementFromPoint(bbox.x + 1, bbox.y + 1)!;
            const value = parseInt(activeElement.getAttribute('data-value')!, 10);

            if (colType === 'hour') {
              this.setWorkingParts({
                ...this.workingParts,
                hour: value
              });
            } else {
              this.setWorkingParts({
                ...this.workingParts,
                minute: value
              });
            }
          }, 250);
        });
      }

      /**
       * Add scroll listeners to the hour and minute containers.
       * Wrap this in an raf so that the scroll callback
       * does not fire when we do our initial scrollIntoView above.
       */
      raf(() => {
        timeHourRef.addEventListener('scroll', () => scrollCallback('hour'));
        timeMinuteRef.addEventListener('scroll', () => scrollCallback('minute'));
      });
    });
  }

  private processValue = (value?: string | null) => {
    const valueToProcess = value || new Date().toISOString();
    const { month, day, year, hour, minute, tzOffset } = parseDate(valueToProcess);

    this.workingParts = {
      month,
      day,
      year,
      hour,
      minute,
      tzOffset,
      ampm: hour >= 13 ? 'pm' : 'am'
    }
    this.activeParts = {
      month,
      day,
      year,
      hour,
      minute,
      tzOffset,
      ampm: hour >= 13 ? 'pm' : 'am'
    }

  }

  componentWillLoad() {
    this.processValue(this.value);
    this.processMinParts();
    this.processMaxParts();
    this.emitStyle();
  }

  private emitStyle() {
    this.ionStyle.emit({
      'interactive': true,
      'datetime': true,
      'interactive-disabled': this.disabled,
    });
  }

  private nextMonth = () => {
    const { calendarBodyRef } = this;
    if (!calendarBodyRef) { return; }

    const nextMonth = calendarBodyRef.querySelector('.calendar-month:last-of-type');
    if (!nextMonth) { return; }

    nextMonth.scrollIntoView({
      behavior: 'smooth',
      block: 'end',
      inline: 'nearest'
    });
  }

  private prevMonth = () => {
    const { calendarBodyRef } = this;
    if (!calendarBodyRef) { return; }

    const prevMonth = calendarBodyRef.querySelector('.calendar-month:first-of-type');
    if (!prevMonth) { return; }

    prevMonth.scrollIntoView({
      behavior: 'smooth',
      block: 'end',
      inline: 'nearest'
    });
  }

  private renderFooter() {
    const hasSlottedButtons = this.el.querySelector('[slot="buttons"]') !== null;
    if (!hasSlottedButtons && !this.showDefaultButtons) { return; }

    /**
     * By default we render two buttons:
     * Cancel - Dismisses the datetime and
     * does not update the `value` prop.
     * OK - Dismisses the datetime and
     * updates the `value` prop.
     */
    return (
      <div class="datetime-footer">
        <div class="datetime-buttons">
          <div class="datetime-action-buttons">
            <slot name="buttons">
              <ion-buttons>
                <ion-button color={this.color} onClick={() => this.cancel(true)}>{this.cancelText}</ion-button>
                <ion-button color={this.color} onClick={() => this.confirm()}>{this.doneText}</ion-button>
              </ion-buttons>
            </slot>
          </div>
        </div>
      </div>
    );
  }

  private toggleMonthAndYearView = () => {
    this.showMonthAndYear = !this.showMonthAndYear;
  }

  private renderMDYearView() {
    return getCalendarYears(this.activeParts, true).map(year => {

      const { isCurrentYear, isActiveYear, disabled, ariaSelected } = getCalendarYearState(year, this.workingParts, this.todayParts, this.minParts, this.maxParts);
      return (
        <button
          disabled={disabled}
          aria-selected={ariaSelected}
          class={{
            'datetime-year-item': true,
            'datetime-current-year': isCurrentYear,
            'datetime-active-year': isActiveYear
          }}
          onClick={() => {
            this.setWorkingParts({
              ...this.workingParts,
              year
            });
            this.showMonthAndYear = false;
          }}
        >
          <div class="datetime-year-inner">
            {year}
          </div>
        </button>
      )
    })
  }

  private renderiOSYearView() {
    return [
      <div class="datetime-picker-before"></div>,
      <div class="datetime-picker-after"></div>,
      <div class="datetime-picker-highlight"></div>,
      <div class="datetime-picker-col month-col" ref={el => this.monthRef = el} tabindex="0">
        <div class="picker-col-item picker-col-item-empty">&nbsp;</div>
        <div class="picker-col-item picker-col-item-empty">&nbsp;</div>
        <div class="picker-col-item picker-col-item-empty">&nbsp;</div>
        {getPickerMonths(this.locale, this.workingParts, this.minParts, this.maxParts).map(month => {
          return (
            <div
            class="picker-col-item"
            data-value={month.value}
            onClick={(ev: Event) => {
              const target = ev.target as HTMLElement;
              target.scrollIntoView({ block: 'center', inline: 'center', behavior: 'smooth' });
            }}
          >{month.text}</div>
          )
        })}
        <div class="picker-col-item picker-col-item-empty">&nbsp;</div>
        <div class="picker-col-item picker-col-item-empty">&nbsp;</div>
        <div class="picker-col-item picker-col-item-empty">&nbsp;</div>
      </div>,
      <div class="datetime-picker-col year-col" ref={el => this.yearRef = el} tabindex="0">
        <div class="picker-col-item picker-col-item-empty">&nbsp;</div>
        <div class="picker-col-item picker-col-item-empty">&nbsp;</div>
        <div class="picker-col-item picker-col-item-empty">&nbsp;</div>
        {getCalendarYears(this.workingParts, false, this.minParts, this.maxParts).map(year => {
          return (
            <div
              class="picker-col-item"
              data-value={year}
              onClick={(ev: Event) => {
                const target = ev.target as HTMLElement;
                target.scrollIntoView({ block: 'center', inline: 'center', behavior: 'smooth' });
              }}
            >{year}</div>
          )
        })}
        <div class="picker-col-item picker-col-item-empty">&nbsp;</div>
        <div class="picker-col-item picker-col-item-empty">&nbsp;</div>
        <div class="picker-col-item picker-col-item-empty">&nbsp;</div>
      </div>
    ]
  }

  private renderYearView(mode: Mode) {
    return (
      <div class="datetime-year">
        <div class="datetime-year-body">
          {mode === 'ios' ? this.renderiOSYearView() : this.renderMDYearView()}
        </div>
      </div>
    );
  }

  private renderCalendarHeader(mode: Mode) {
    const expandedIcon = mode === 'ios' ? 'chevron-down' : 'caret-up-sharp';
    const collapsedIcon = mode === 'ios' ? 'chevron-forward' : 'caret-down-sharp';
    return (
      <div class="calendar-header">
        <div class="calendar-action-buttons">
          <div class="calendar-month-year">
            <ion-item button detail={false} lines="none" onClick={() => this.toggleMonthAndYearView()}>
              <ion-label>
                {getMonthAndYear(this.locale, this.workingParts)} <ion-icon icon={this.showMonthAndYear ? expandedIcon : collapsedIcon} lazy={false}></ion-icon>
              </ion-label>
            </ion-item>
          </div>

          <div class="calendar-next-prev">
            <ion-buttons>
              <ion-button onClick={() => this.prevMonth()}>
                <ion-icon slot="icon-only" icon="chevron-back" lazy={false}></ion-icon>
              </ion-button>
              <ion-button onClick={() => this.nextMonth()}>
                <ion-icon slot="icon-only" icon="chevron-forward" lazy={false}></ion-icon>
              </ion-button>
            </ion-buttons>
          </div>
        </div>
        <div class="calendar-days-of-week">
          {getDaysOfWeek(this.locale, mode).map(d => {
            return <div class="day-of-week">{d}</div>
          })}
        </div>
      </div>
    )
  }

  private renderMonth(month: number, year: number) {
    return (
      <div class="calendar-month">
        <div class="calendar-month-grid">
          {getDaysOfMonth(month, year).map((dateObject, index) => {
            const { day, dayOfWeek } = dateObject;
            const referenceParts = { month, day, year };
            const { isActive, isToday, ariaLabel, ariaSelected, disabled } = getCalendarDayState(this.locale, referenceParts, this.activeParts, this.todayParts, this.minParts, this.maxParts);

            return (
              <button
                tabindex="-1"
                data-day={day}
                data-month={month}
                data-year={year}
                data-index={index}
                data-day-of-week={dayOfWeek}
                disabled={disabled}
                class={{
                  'calendar-day-padding': day === null,
                  'calendar-day': true,
                  'calendar-day-active': isActive,
                  'calendar-day-today': isToday
                }}
                aria-selected={ariaSelected}
                aria-label={ariaLabel}
                onClick={() => {
                  if (day === null) { return; }

                  this.setWorkingParts({
                    ...this.workingParts,
                    month,
                    day,
                    year
                  });

                  this.setActiveParts({
                    ...this.activeParts,
                    month,
                    day,
                    year
                  })
                }}
              >{day}</button>
            )
          })}
        </div>
      </div>
    )
  }

  private renderCalendarBody() {
    return (
      <div class="calendar-body" ref={el => this.calendarBodyRef = el} tabindex="0">
        {generateMonths(this.workingParts).map(({ month, year }) => {
          return this.renderMonth(month, year);
        })}
      </div>
    )
  }

  private renderCalendar(mode: Mode) {
    return (
      <div class="datetime-calendar">
        {this.renderCalendarHeader(mode)}
        {this.renderCalendarBody()}
      </div>
    )
  }

  /**
   * Render time picker inside of datetime.
   * Do not pass color prop to segment on
   * iOS mode. MD segment has been customized and
   * should take on the color prop, but iOS
   * should just be the default segment.
   */
  private renderTime(mode: Mode) {
    const use24Hour = is24Hour(this.locale);
    const { ampm } = this.workingParts;
    const { hours, minutes, am, pm } = generateTime(this.locale, this.workingParts, this.minParts, this.maxParts);

    return (
      <div class="datetime-time">
        <div class="time-header">Time</div>
        <div class="time-body">
          <div class="time-base" ref={el => this.timeBaseRef = el}>
            <div class="time-wrapper">
              <div
                class="time-column time-column-hours"
                aria-label="Hours"
                role="slider"
                ref={el => this.timeHourRef = el}
                tabindex="0"
              >
                { hours.map(hour => {
                  return (
                    <div
                      class="time-item"
                      data-value={getInternalHourValue(hour, use24Hour, ampm)}
                    >{getFormattedHour(hour, use24Hour)}</div>
                  )
                })}
              </div>
              <div class="time-separator">:</div>
              <div
                class="time-column time-column-minutes"
                aria-label="Minutes"
                role="slider"
                ref={el => this.timeMinuteRef = el}
                tabindex="0"
              >
                { minutes.map(minute => {
                  return (
                    <div
                      class="time-item"
                      data-value={minute}
                    >{addTimePadding(minute)}</div>
                  )
                })}
              </div>
            </div>
          </div>
          { !use24Hour && <div class="time-ampm">
            <ion-segment
              color={mode === 'md' ? this.color : undefined}
              value={this.workingParts.ampm}
              onIonChange={(ev: CustomEvent) => {

                /**
                 * Since datetime uses 24-hour time internally
                 * we need to update the working hour here as well
                 * if the user is using a 12-hour time format.
                 */
                const { value } = ev.detail;
                const hour = calculateHourFromAMPM(this.workingParts, value);

                this.setWorkingParts({
                  ...this.workingParts,
                  ampm: value,
                  hour
                });

                /**
                 * Do not let this event bubble up
                 * otherwise developers listening for ionChange
                 * on the datetime will see this event.
                 */
                ev.stopPropagation();
              }}
            >
              <ion-segment-button disabled={!am} value="am">AM</ion-segment-button>
              <ion-segment-button disabled={!pm} value="pm">PM</ion-segment-button>
            </ion-segment>
          </div> }
        </div>
      </div>
    )
  }

  private renderCalendarViewHeader(mode: Mode) {
    const hasSlottedTitle = this.el.querySelector('[slot="title"]') !== null;
    if (!hasSlottedTitle && !this.showDefaultTitle) { return; }

    return (
      <div class="datetime-header">
        <div class="datetime-title">
          <slot name="title">Select Date</slot>
        </div>
        {mode === 'md' && <div class="datetime-selected-date">
          {getMonthAndDay(this.locale, this.activeParts)}
        </div>}
      </div>
    );
  }

  private renderDatetime(mode: Mode) {
    const { presentation } = this;
    switch (presentation) {
      case 'date-time':
        return [
          this.renderCalendarViewHeader(mode),
          this.renderCalendar(mode),
          this.renderYearView(mode),
          this.renderTime(mode),
          this.renderFooter()
        ]
      case 'time-date':
        return [
          this.renderCalendarViewHeader(mode),
          this.renderTime(mode),
          this.renderCalendar(mode),
          this.renderYearView(mode),
          this.renderFooter()
        ]
      case 'time':
        return [
          this.renderTime(mode),
          this.renderFooter()
        ]
      case 'date':
        return [
          this.renderCalendarViewHeader(mode),
          this.renderCalendar(mode),
          this.renderYearView(mode),
          this.renderFooter()
        ]
    }
  }

  render() {
    const { name, value, disabled, el, color, isPresented, readonly, showMonthAndYear, presentation } = this;
    const mode = getIonMode(this);

    renderHiddenInput(true, el, name, value, disabled);

    return (
      <Host
        aria-disabled={disabled ? 'true' : null}
        class={{
          ...createColorClasses(color, {
            [mode]: true,
            ['datetime-presented']: isPresented,
            ['datetime-readonly']: readonly,
            ['datetime-disabled']: disabled,
            'show-month-and-year': showMonthAndYear,
            [`datetime-presentation-${presentation}`]: true
          })
        }}
      >
        {this.renderDatetime(mode)}
      </Host>
    );
  }
}

let datetimeIds = 0;
