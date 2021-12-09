export const SET_ALREADY_REQUESTED_DATA = 'SET_ALREADY_REQUESTED_DATA';
export const GET_HOLIDAYS_DATA = 'GET_HOLIDAYS_DATA';
export const ONE_DAY_TIMESTAMP = 86400000;

export const MONTHS = {
  '01': 'Jan',
  '02': 'Feb',
  '03': 'Mar',
  '04': 'Apr',
  '05': 'May',
  '06': 'Jun',
  '07': 'Jul',
  '08': 'Aug',
  '09': 'Sep',
  10: 'Oct',
  11: 'Nov',
  12: 'Dec',
};

export const DAYS = {
  0: 'sunday',
  1: 'monday',
  2: 'tuesday',
  3: 'wednesday',
  4: 'thursday',
  5: 'friday',
  6: 'saturday',
};

export const WEEKEND_DAYS = new Set([DAYS[0], DAYS[6]]);

export const DAY_TYPES = {
  holiday: 'holiday',
  workDay: 'workDay',
  weekend: 'weekend',
  holidayBoth: 'holidaysBoth',
  holidayPublic: 'holidayPublic',
  holidayFolk: 'holidayFolk',
};

export const INITIAL_CALENDAR_DATA = {
  date: new Date().getTime(),
  day: DAYS[new Date().getDay()],
};
