import {ActionType} from '../action.js';
import {Status} from '../../constants.js';

const initialState = {
  neighborOffers: {
    status: Status.IDLE,
    data: [],
    error: {
      message: null,
    },
  },
};
export const neighborOffers = (state = initialState, action) => {
  switch (action.type) {
    case ActionType.LOAD_NEIGHBOR_OFFERS_PENDING:
      return {
        ...state,
        neighborOffers: {
          ...state.neighborOffers,
          status: Status.PENDING,
        },
      };
    case ActionType.LOAD_NEIGHBOR_OFFERS_FULFILLED:
      return {
        ...state,
        neighborOffers: {
          ...state.neighborOffers,
          status: Status.FULFILLED,
          data: action.payload,
        },
      };
    case ActionType.LOAD_NEIGHBOR_OFFERS_REJECTED:
      return {
        ...state,
        neighborOffers: {
          ...state.neighborOffers,
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
