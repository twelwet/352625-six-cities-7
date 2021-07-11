import {ActionType} from '../action.js';
import {Status} from '../../constants.js';

const initialState = {
  offer: {
    status: Status.IDLE,
    data: {},
    error: {
      message: null,
    },
  },
};
export const offer = (state = initialState, action) => {
  switch (action.type) {
    case ActionType.LOAD_OFFER_PENDING:
      return {
        ...state,
        offer: {
          ...state.offer,
          status: Status.PENDING,
        },
      };
    case ActionType.LOAD_OFFER_FULFILLED:
      return {
        ...state,
        offer: {
          ...state.offer,
          status: Status.FULFILLED,
          data: action.payload,
        },
      };
    case ActionType.LOAD_OFFER_REJECTED:
      return {
        ...state,
        offer: {
          ...state.offer,
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
