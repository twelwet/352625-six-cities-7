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
  offer: {},
  neighborOffers: [],
  reviews: [],
  authInfo: {},
  authorizationStatus: AuthorizationStatus.UNKNOWN,
  errors: [],
  isLoading: {
    offers: true,
    authorizationStatus: true,
    offer: true,
    neighborOffers: true,
    reviews: true,
  },
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
    case ActionType.LOAD_OFFER:
      return {
        ...state,
        offer: action.payload,
        isLoading: {
          ...state.isLoading,
          offer: false,
        },
      };
    case ActionType.LOAD_NEIGHBOR_OFFERS:
      return {
        ...state,
        neighborOffers: action.payload,
        isLoading: {
          ...state.isLoading,
          neighborOffers: false,
        },
      };
    case ActionType.LOAD_COMMENTS:
      return {
        ...state,
        reviews: action.payload,
        isLoading: {
          ...state.isLoading,
          reviews: false,
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
    case ActionType.SAVE_ERROR_INFO:
      return {
        ...state,
        errors: state.errors.concat([action.payload]),
      };
    default:
      return state;
  }
};

export {reducer};
