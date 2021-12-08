import { WEEKEND_DAYS, DAY_TYPES } from '../constants/app';

export const getHolidayType = (holidays, day) => {
  if (!holidays && WEEKEND_DAYS.has(day)) {
    return DAY_TYPES.weekend;
  }

  if (!holidays && !WEEKEND_DAYS.has(day)) {
    return DAY_TYPES.workDay;
  }

  if (holidays) {
    if (holidays.length > 1) {
      return DAY_TYPES.holidayBoth;
    }

    if (holidays.length === 1 && holidays.find((i) => i.type === 'public')) {
      return DAY_TYPES.holidayPublic;
    }

    if (holidays.length === 1 && holidays.find((i) => i.type === 'folk')) {
      return DAY_TYPES.holidayFolk;
    }
  }

  return '';
};
