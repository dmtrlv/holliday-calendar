import { SET_ALREADY_REQUESTED_DATA, GET_HOLIDAYS_DATA } from '../constants/app';

const initialState = {
  requestCount: 0,
  holidaysData: [],
  alreadyRequestedData: {},
};

export default function app(state = initialState, { type, payload }) {
  switch (type) {
    case SET_ALREADY_REQUESTED_DATA: {
      return {
        ...state,
        alreadyRequestedData: {
          ...state.alreadyRequestedData,
          ...payload,
        },
      };
    }
    case GET_HOLIDAYS_DATA: {
      return {
        ...state,
        holidaysData: payload,
      };
    }
    default:
      return state;
  }
}
