// Base
import React from 'react';
import cx from 'classnames';

// Custom hooks
import PropTypes from 'prop-types';
import useController from './useController';

// Components
import DropdownButton from '../../ui/DropdownButton';
import DropdownList from '../../ui/DropdownList';

// Styles
import styles from './style.module.scss';

const propTypes = {
  label: PropTypes.string,
  list: PropTypes.arrayOf(PropTypes.string),
  onClick: PropTypes.func,
  className: PropTypes.string,
};

const defaultProps = {
  label: '',
  list: [],
  onClick: () => {},
  className: undefined,
};

const DaySelector = ({
  label, list, onClick, className,
}) => {
  const { state, setVisibility } = useController();

  const { isContentVisible } = state;
  return (
    <div className={cx(styles.daySelectorWrapper, className)}>
      <DropdownButton label={label} onClick={() => setVisibility(true)}/>
      {isContentVisible ? (
        <DropdownList
          list={list}
          onClose={() => setVisibility(false)}
          onClick={(item) => [onClick(item), setVisibility(false)]}
          activeItem={label}
        />
      ) : null}
    </div>
  );
};

DaySelector.propTypes = propTypes;
DaySelector.defaultProps = defaultProps;

export default DaySelector;
