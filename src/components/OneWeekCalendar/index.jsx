// Base
import React from 'react';
import cx from 'classnames';

// Custom hooks
import useController from './useController';

// Components
import DaySelector from '../DaySelector';
import DayCard from '../DayCard';

// Styles
import styles from './style.module.scss';

const legendDate = [
  { label: 'Public holiday', style: styles.green },
  { label: 'Folk holiday', style: styles.red },
  { label: 'Public and folk holidays', style: styles.gradient },
  { label: 'Weekend', style: styles.blue },
  { label: 'Working day', style: styles.white },
];

const OneWeekCalendar = () => {
  const {
    state,
    onChangeStartDate,
    onChangeStartDay,
    setToday,
    weekSwipe,
  } = useController();

  const {
    formattedStartDate,
    startDay,
    daySelectorList,
    weekData,
  } = state;

  return (
    <div className={styles.calendarWrapper}>

      {/* Calendar controls part */}
      <div className={styles.controls}>

        {/* Date control */}
        <div className={cx(styles.flexBlock, styles.withoutMobile)}>
          <p className={styles.text}>Select date</p>
          <input
            className={styles.input}
            type="date"
            value={formattedStartDate}
            onChange={(e) => onChangeStartDate(e.target.value)}
          />
        </div>

        {/* Day control */}
        <div className={cx(styles.flexBlock, styles.withoutMobile)}>
          <p className={styles.text}>Select day</p>
          <DaySelector
            label={startDay}
            list={daySelectorList}
            onClick={(item) => onChangeStartDay(item)}
            className={styles.daySelector}
          />
        </div>

        {/* Weeks control control */}
        <div className={styles.flexBlock}>
          <button className={styles.controlButton} type="button" onClick={() => weekSwipe('prev')}>
            <span>Prev week</span>
          </button>
          <button className={styles.controlButton} type="button" onClick={setToday}>
            <span>Today</span>
          </button>
          <button className={styles.controlButton} type="button" onClick={() => weekSwipe('next')}>
            <span>Next week</span>
          </button>
        </div>
      </div>

      {/* Day cards part */}
      <div className={styles.cardsWrapper}>
        {!weekData.length ? null : weekData.map((item) => {
          return (
            <DayCard
              onClick={() => onChangeStartDate(item.date)}
              title={item.day}
              date={item.date}
              holidays={item.holidays}
              dayType={item.dayType}
            />
          );
        })}
        <div className={styles.blur}/>
      </div>

      {/* Legend part */}
      <div className={styles.legendBlock}>
        {legendDate.map((item) => (
          <div className={styles.legend}>
            <div className={cx(styles.round, item.style)}/>
            <span>{item.label}</span>
          </div>
        ))}
      </div>

    </div>
  );
};

export default OneWeekCalendar;
