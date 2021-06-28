import {DEFAULT_CITY} from '../settings.js';
import {ActionType} from './action.js';
import {AuthorizationStatus} from '../constants.js';

const defaultErrorState = {
  isErrorScreenRender: false,
  isError: false,
  infoMessage: '',
  body: '',
};

const initialState = {
  city: DEFAULT_CITY,
  offers: [],
  offer: {},
  neighborOffers: [],
  reviews: [],
  authInfo: {},
  authorizationStatus: AuthorizationStatus.UNKNOWN,
  error: defaultErrorState,
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case ActionType.CHANGE_CITY:
      return {
        ...state,
        city: action.payload,
      };
    case ActionType.LOAD_OFFERS:
      return {
        ...state,
        offers: action.payload,
      };
    case ActionType.LOAD_OFFER:
      return {
        ...state,
        offer: action.payload,
      };
    case ActionType.LOAD_NEIGHBOR_OFFERS:
      return {
        ...state,
        neighborOffers: action.payload,
      };
    case ActionType.LOAD_COMMENTS:
      return {
        ...state,
        reviews: action.payload,
      };
    case ActionType.REQUIRE_AUTH:
      return {
        ...state,
        authorizationStatus: action.payload,
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
        userEmail: null,
      };
    case ActionType.SAVE_ERROR_INFO:
      return {
        ...state,
        error: action.payload,
      };
    default:
      return state;
  }
};

export {reducer, defaultErrorState};
