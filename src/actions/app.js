import {
  SET_ALREADY_REQUESTED_DATA,
  GET_HOLIDAYS_DATA,
  ONE_DAY_TIMESTAMP,
  DAYS,
} from '../constants/app';
import api from '../api';
import { formatDateFromTimestampForCalendar } from '../helpers/formatDate';
import { getHolidayType } from '../helpers/getHolidayType';

/**
 * @param formattedStartDate
 * @param formattedEndDate
 * @param timestampStartDate
 * @return {(function(*): Promise<void>)|*}
 */
export const setHolidayData = (
  { formattedStartDate, formattedEndDate, timestampStartDate },
) => async (dispatch) => {
  const { holidays: holidaysData = {} } = await api.getHolidays(
    { startDate: formattedStartDate, endDate: formattedEndDate },
  );

  const newReqData = {};
  if (holidaysData && Object.keys(holidaysData).length) {
    for (let i = 0; i < 30; i += 1) {
      const date = Number(timestampStartDate) + (Number(ONE_DAY_TIMESTAMP) * Number(i));
      const dateInCalendarFormat = formatDateFromTimestampForCalendar(date);
      const holidays = holidaysData[dateInCalendarFormat];
      const dayId = new Date(date).getDay();
      const day = DAYS[dayId];
      const dayType = getHolidayType(holidays, day);
      const newDataItem = {
        date: dateInCalendarFormat,
        dateInTimestamp: date,
        day,
        holidays,
        dayType,
      };

      newReqData[dateInCalendarFormat] = newDataItem;
    }
  }

  dispatch({
    type: SET_ALREADY_REQUESTED_DATA,
    payload: newReqData,
  });
};

export const getHolidaysData = ({ formattedStartDate, formattedEndDate }) => async (dispatch) => {
  const { holidays } = await api.getHolidays(
    { startDate: formattedStartDate, endDate: formattedEndDate },
  );
  dispatch({ type: GET_HOLIDAYS_DATA, payload: holidays });
};
