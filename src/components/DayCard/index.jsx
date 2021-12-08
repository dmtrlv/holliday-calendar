// Base
import React from 'react';
import PropTypes from 'prop-types';
import cx from 'classnames';

// HF
import { formatDate } from '../../helpers/formatDate';

// Components
import EmojiComponent from '../../ui/Emoji';

// Constants
import { DAY_TYPES } from '../../constants/app';

// Styles
import styles from './style.module.scss';

const propTypes = {
  title: PropTypes.string,
  date: PropTypes.number,
  holidays: PropTypes.arrayOf(PropTypes.shape({
    name: PropTypes.string,
    type: PropTypes.string,
  })),
  dayType: PropTypes.oneOf(Object.values(DAY_TYPES)),
};

const defaultProps = {
  title: '',
  date: 0,
  holidays: [],
  dayType: '',
};

const cardBgMap = {
  [DAY_TYPES.weekend]: styles.blue,
  [DAY_TYPES.workDay]: styles.white,
  [DAY_TYPES.holidayBoth]: styles.gradient,
  [DAY_TYPES.holidayPublic]: styles.green,
  [DAY_TYPES.holidayFolk]: styles.red,
};

const DayCard = ({
  title,
  date,
  holidays,
  dayType,
}) => {
  return (
    <div className={cx(styles.flipCard, {
      [styles.withHover]: holidays && holidays.length,
    })}
    >
      <div className={styles.innerCard}>
        {/* Front side */}
        <div className={cx(styles.flipFront, cardBgMap[dayType])}>
          <div className={styles.content}>
            <h2 className={styles.cardTitle}>{title}</h2>
            <p className={styles.date}>{formatDate(date)}</p>
            <div className={styles.holidaysBlock}>
              {holidays ? holidays.map((holiday) => (
                <div className={cx(styles.holiday)}>
                  <span>
                    {holiday.name}
                  </span>
                </div>
              )) : null}
            </div>
            <EmojiComponent dayType={dayType} className={styles.emojiRow}/>
          </div>
        </div>

        {/* Back side */}
        <div className={cx(styles.flipBack, cardBgMap[dayType])}>
          <div className={styles.content}>
            <h2 className={styles.cardTitle}>Holiday Info</h2>
            <div className={styles.holidaysBlock}>
              {holidays ? holidays.map((holiday) => (
                <div className={cx(styles.holiday)}>
                  <p className={styles.holidayName}>
                    {holiday.name}
                  </p>
                  <p className={styles.desc}>
                    Estonian
                    {' '}
                    {holiday.type}
                    {' '}
                    holiday
                  </p>
                </div>
              )) : null}
            </div>
          </div>

        </div>
      </div>
    </div>
  );
};

DayCard.propTypes = propTypes;
DayCard.defaultProps = defaultProps;

export default DayCard;
