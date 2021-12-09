// Base
import React from 'react';
import cx from 'classnames';
import DatePicker from 'react-datepicker';

// Custom hooks
import useController from './useController';

// Components
import DaySelector from '../DaySelector';
import DayCard from '../DayCard';
import Button from '../../ui/Button';

// Styles
import styles from './style.module.scss';
import 'react-datepicker/dist/react-datepicker-cssmodules.css';
import 'react-datepicker/dist/react-datepicker.css';

const legendDate = [
  { label: 'Public holiday', style: styles.green },
  { label: 'Folk holiday', style: styles.red },
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
    startDate,
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
          <DatePicker
            className={styles.input}
            selected={startDate}
            onChange={(date) => onChangeStartDate(date)}
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
          <Button className={styles.controlButton} btnText="Prev week" onClick={() => weekSwipe('prev')} />
          <Button className={styles.controlButton} btnText="Today" onClick={setToday} />
          <Button className={styles.controlButton} btnText="Next week" onClick={() => weekSwipe('next')} />
        </div>
      </div>

      {/* Day cards part */}
      <div className={styles.cardsWrapper}>
        {!weekData.length
          ? (
            <div className={styles.loader} />
          )
          : weekData.map((item) => {
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
