// Base
import React, { useEffect, useRef } from 'react';
import cx from 'classnames';
import PropTypes from 'prop-types';

// Styles
import styles from './style.module.scss';

const propTypes = {
  list: PropTypes.arrayOf(PropTypes.string),
  onClick: PropTypes.func,
  onClose: PropTypes.func,
  activeItem: PropTypes.string,
};

const defaultProps = {
  list: [],
  onClick: () => {},
  onClose: () => {},
  activeItem: '',
};

const DateSelector = ({
  onClick, list, onClose, activeItem,
}) => {
  const contentEl = useRef(null);

  const clickHandler = (e) => {
    if (!contentEl?.current?.contains(e.target)) {
      onClose();
    }
  };

  useEffect(() => {
    document.addEventListener('click', clickHandler);
    return () => {
      document.removeEventListener('click', clickHandler);
    };
  }, []);

  return (
    <div ref={contentEl} className={styles.contentWrapper}>
      <ul className={styles.content}>
        {list.map((item) => (
          <li
            className={cx(styles.item, {
              [styles.active]: activeItem === item,
            })}
            onClick={() => onClick(item)}
          >
            {item}
          </li>
        )) }
      </ul>
    </div>
  );
};

DateSelector.propTypes = propTypes;
DateSelector.defaultProps = defaultProps;

export default DateSelector;
