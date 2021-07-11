import {ActionType} from '../action.js';
import {Status} from '../../constants.js';

const initialState = {
  reviews: {
    status: Status.IDLE,
    data: [],
    error: {
      message: null,
    },
  },
};
export const reviews = (state = initialState, action) => {
  switch (action.type) {
    case ActionType.LOAD_COMMENTS_PENDING:
      return {
        ...state,
        reviews: {
          ...state.reviews,
          status: Status.PENDING,
        },
      };
    case ActionType.LOAD_COMMENTS_FULFILLED:
      return {
        ...state,
        reviews: {
          ...state.reviews,
          status: Status.FULFILLED,
          data: action.payload,
        },
      };
    case ActionType.LOAD_COMMENTS_REJECTED:
      return {
        ...state,
        reviews: {
          ...state.reviews,
          status: Status.REJECTED,
          error: {
            message: action.payload,
          },
        },
      };
    default:
      return state;
  }
};
