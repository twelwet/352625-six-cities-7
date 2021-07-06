import {DEFAULT_CITY} from '../settings.js';
import {ActionType} from './action.js';
import {AuthorizationStatus} from '../constants.js';
import {Status} from '../constants.js';

const initialState = {
  city: DEFAULT_CITY,
  offers: {
    status: Status.IDLE,
    data: [],
    error: {
      message: null,
    },
  },
  offer: {
    status: Status.IDLE,
    data: {},
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
  reviews: {
    status: Status.IDLE,
    data: [],
    error: {
      message: null,
    },
  },
  authInfo: {},
  authorizationStatus: AuthorizationStatus.UNKNOWN,
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case ActionType.CHANGE_CITY:
      return {
        ...state,
        city: action.payload,
      };

    case ActionType.LOAD_OFFERS_PENDING:
      return {
        ...state,
        offers: {
          ...state.offers,
          status: Status.PENDING,
        },
      };
    case ActionType.LOAD_OFFERS_FULFILLED:
      return {
        ...state,
        offers: {
          ...state.offers,
          ...action.payload,
        },
      };
    case ActionType.LOAD_OFFERS_REJECTED:
      return {
        ...state,
        offers: {
          ...state.offers,
          ...action.payload,
        },
      };

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
          ...action.payload,
        },
      };
    case ActionType.LOAD_OFFER_REJECTED:
      return {
        ...state,
        offer: {
          ...state.offer,
          ...action.payload,
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
          ...action.payload,
        },
      };
    case ActionType.LOAD_NEIGHBOR_OFFERS_REJECTED:
      return {
        ...state,
        neighborOffers: {
          ...state.neighborOffers,
          ...action.payload,
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
          ...action.payload,
        },
      };
    case ActionType.LOAD_COMMENTS_REJECTED:
      return {
        ...state,
        reviews: {
          ...state.reviews,
          ...action.payload,
        },
      };

    case ActionType.REQUIRE_AUTH:
      return {
        ...state,
        authorizationStatus: action.payload,
        isLoading: {
          ...state.isLoading,
          authorizationStatus: false,
        },
      };
    case ActionType.SAVE_AUTH_INFO:
      return {
        ...state,
        authInfo: action.payload,
      };
    case ActionType.LOGOUT:
      return {
        ...state,
        authorizationStatus: AuthorizationStatus.NO_AUTH,
        authInfo: {},
      };
    default:
      return state;
  }
};

export {reducer};
