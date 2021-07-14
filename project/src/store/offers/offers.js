import {ActionType} from '../action.js';
import {Status} from '../../constants.js';

const initialState = {
  status: Status.IDLE,
  data: [],
  error: {
    message: null,
  },
};

export const offers = (state = initialState, action) => {
  switch (action.type) {
    case ActionType.LOAD_OFFERS_PENDING:
      return {
        ...state,
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

    case ActionType.UPDATE_OFFER:
      return {
        ...state,
        data: [action.payload, ...state.data.filter((offer) => offer.id !== action.payload.id)],
      };
    default:
      return state;
  }
};
