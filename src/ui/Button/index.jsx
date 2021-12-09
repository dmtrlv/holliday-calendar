// Base
import React from 'react';
import cx from 'classnames';
import PropTypes from 'prop-types';

// Styles
import styles from './style.module.scss';

const propTypes = {
  btnText: PropTypes.string,
  onClick: PropTypes.func,
  className: PropTypes.string,
};

const defaultProps = {
  btnText: '',
  onClick: () => {},
  className: undefined,
};

const Button = ({ btnText, onClick, className }) => {
  return (
    <div className={cx(styles.buttonWrapper, className)}>
      <button className={styles.button} type="button" onClick={onClick}>
        <span>{btnText}</span>
      </button>
    </div>
  );
};

Button.propTypes = propTypes;
Button.defaultProps = defaultProps;

export default Button;
