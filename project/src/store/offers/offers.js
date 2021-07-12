import {ActionType} from '../action.js';
import {Status} from '../../constants.js';

const initialState = {
  offers: {
    status: Status.IDLE,
    data: [],
    error: {
      message: null,
    },
  },
};

export const offers = (state = initialState, action) => {
  switch (action.type) {
    case ActionType.LOAD_OFFERS_PENDING:
      return {
        ...state.offers,
        status: Status.PENDING,
      };
    case ActionType.LOAD_OFFERS_FULFILLED:
      return {
        ...state,
        status: Status.FULFILLED,
        data: action.payload,
      };
    case ActionType.LOAD_OFFERS_REJECTED:
      return {
        ...state,
        status: Status.REJECTED,
        error: {
          message: action.payload,
        },
      };
    default:
      return state;
  }
};
