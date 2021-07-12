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
  reviews: {
    status: Status.IDLE,
    data: [],
    error: {
      message: null,
    },
  },
  neighborOffers: {
    status: Status.IDLE,
    data: [],
    error: {
      message: null,
    },
  },
};

export const room = (state = initialState, action) => {
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
    case ActionType.SAVE_COMMENTS:
      return {
        ...state,
        reviews: {
          ...state.reviews,
          data: action.payload,
        },
      };

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
