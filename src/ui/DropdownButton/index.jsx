/* eslint-disable jsx-a11y/no-static-element-interactions */
// Base
import React from 'react';
import PropTypes from 'prop-types';

// Styles
import styles from './style.module.scss';

const propTypes = {
  label: PropTypes.string,
  onClick: PropTypes.func,
};

const defaultProps = {
  label: '',
  onClick: () => {},
};

const DropDownComponent = ({ label, onClick }) => (
  <div className={styles.dropDownButtonWrapper}>
    <div className={styles.labelContainer} onClick={onClick}>
      <div className={styles.label}>{label}</div>
    </div>
  </div>
);

DropDownComponent.propTypes = propTypes;
DropDownComponent.defaultProps = defaultProps;

export default DropDownComponent;
