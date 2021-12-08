import { MONTHS } from '../constants/app';

/**
 * @param {string} dateString
 * @returns {string}
 */
export const formatDate = (dateString) => {
  try {
    const [yyyy, mm, dd] = dateString.split('-');
    return `${dd} ${MONTHS[mm]} ${yyyy}`;
  } catch (e) {
    return 'Invalid date';
  }
};

/**
 * @param {number} ts
 * @returns {string}
 */
export const formatDateFromTimestampForCalendar = (ts) => {
  const date = new Date(ts);
  const utcMonth = date.getUTCMonth() + 1;
  const utcDate = date.getUTCDate();
  const year = date.getUTCFullYear();
  return `${year}-${utcMonth < 10 ? `0${utcMonth}` : utcMonth}-${
    utcDate < 10 ? `0${utcDate}` : utcDate
  }`;
};

/**
 * @param dateString
 * @return {number}
 */
export const convertDateToTimestamp = (dateString) => {
  const [year, month, day] = dateString.split('-');
  const date = new Date(Date.UTC(year, month - 1, day));
  return date.getTime();
};
