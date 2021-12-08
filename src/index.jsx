import React from 'react';
import { render } from 'react-dom';
import { Provider } from 'react-redux';
import './sharedStyles.module.scss';
import styles from './style.module.scss';
import { configureStore } from './store';
import OneWeekCalendar from './components/OneWeekCalendar';

// styles
import './ui/styles/variables.css';

const store = configureStore();

render(
  <Provider store={store}>
    <div className={styles.wrapper}>
      <OneWeekCalendar/>
    </div>
  </Provider>,
  document.getElementById('root'),
);
