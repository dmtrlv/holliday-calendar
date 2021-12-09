// Base
import { useState, useMemo, useEffect } from 'react';
import { useDispatch } from 'react-redux';

// Custom hooks
import useSmartSelector from '../../customHooks/useSmartSelector';

// Actions
import { setHolidayData } from '../../actions/app';

// HF
import { formatDateFromTimestampForCalendar } from '../../helpers/formatDate';

// Constants
import {
  INITIAL_CALENDAR_DATA,
  DAYS,
  ONE_DAY_TIMESTAMP,
} from '../../constants/app';

const daySelectorList = Object.values(DAYS);

const useController = () => {
  const dispatch = useDispatch();
  const [startDate, setStartDate] = useState(INITIAL_CALENDAR_DATA.date);
  const [startDay, setStartDay] = useState(INITIAL_CALENDAR_DATA.day);
  const [forceUpdate, setForceUpdate] = useState(true);

  const { alreadyRequestedData } = useSmartSelector((s) => ({
    alreadyRequestedData: s.app.alreadyRequestedData,
  }));

  const [formattedStartDate, formattedEndDate] = useMemo(() => {
    const newEndDate = Number(startDate) + (Number(ONE_DAY_TIMESTAMP) * 30);
    return [
      formatDateFromTimestampForCalendar(startDate),
      formatDateFromTimestampForCalendar(newEndDate),
    ];
  }, [startDate]);

  useEffect(() => {
    if (forceUpdate) {
      dispatch(setHolidayData({
        formattedStartDate,
        formattedEndDate,
        timestampStartDate: startDate,
      }));
    }
    setForceUpdate(false);
  }, [forceUpdate]);

  // Generate data for every 7 days
  const weekData = useMemo(() => {
    const weekNewData = [];
    const canCreateWeekData = alreadyRequestedData
      && Object.values(alreadyRequestedData).length
      && !forceUpdate
      && !formattedStartDate.startsWith('NaN');

    if (canCreateWeekData) {
      Object.values(DAYS).forEach((item, id) => {
        const date = Number(startDate) + (Number(ONE_DAY_TIMESTAMP) * Number(id));
        const dateInCalendarFormat = formatDateFromTimestampForCalendar(date);
        const dayInfo = alreadyRequestedData[dateInCalendarFormat];
        if (!dayInfo && !forceUpdate) {
          setForceUpdate(true);
        }

        if (dayInfo) {
          weekNewData.push(dayInfo);
        }
      });
    }

    return weekNewData;
  }, [alreadyRequestedData, startDate]);

  const onChangeStartDate = (newDate) => {
    const newDayIndex = new Date(newDate).getDay();
    const newDay = DAYS[newDayIndex];
    setStartDate(newDate);
    setStartDay(newDay);
  };

  const onChangeStartDay = (value) => {
    const weekDataItem = weekData.find((item) => item.day === value);
    setStartDate(weekDataItem.dateInTimestamp);
    setStartDay(weekDataItem.day);
  };

  const setToday = () => {
    const todayDate = new Date().getTime();
    const todayDayIndex = new Date().getDay();
    const newDay = DAYS[todayDayIndex];
    setStartDate(todayDate);
    setStartDay(newDay);
  };

  const weekSwipe = (type) => {
    const prevWeekStartDate = (Number(startDate) - (Number(ONE_DAY_TIMESTAMP) * 7));
    const nextWeekStartDate = (Number(startDate) + (Number(ONE_DAY_TIMESTAMP) * 7));
    const currentStartDate = type === 'prev' ? prevWeekStartDate : nextWeekStartDate;
    const newDayIndex = new Date(currentStartDate).getDay();
    const newDay = DAYS[newDayIndex];
    setStartDate(currentStartDate);
    setStartDay(newDay);
  };

  const state = {
    startDate,
    startDay,
    weekData,
    daySelectorList,
  };

  return {
    state,
    onChangeStartDate,
    onChangeStartDay,
    setToday,
    weekSwipe,
  };
};

export default useController;
