// Base
import React from 'react';
import cx from 'classnames';
import PropTypes from 'prop-types';

// Custom hooks
import useController from './useController';

// Constants
import { DAY_TYPES } from '../../constants/app';

// Styles
import styles from './style.module.scss';

const propTypes = {
  dayType: PropTypes.oneOf(Object.values(DAY_TYPES)),
  className: PropTypes.string,
};

const defaultProps = {
  dayType: DAY_TYPES.workDay,
  className: undefined,
};

const EmojiComponent = ({ dayType, className }) => {
  const { emoji } = useController(dayType);
  return (
    <div className={cx(styles.emojiWrapper, className)}>
      {emoji.map((item) => <span className={styles.emoji}>{item}</span>)}
    </div>
  );
};

EmojiComponent.propTypes = propTypes;
EmojiComponent.defaultProps = defaultProps;

export default EmojiComponent;
