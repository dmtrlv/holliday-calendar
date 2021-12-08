import { createStore, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import { composeWithDevTools } from 'redux-devtools-extension';
import rootReducer from './reducer/index';

// eslint-disable-next-line import/prefer-default-export
export const configureStore = (initialState = {}) => createStore(
  rootReducer,
  initialState,
  composeWithDevTools(applyMiddleware(thunk)),
);
