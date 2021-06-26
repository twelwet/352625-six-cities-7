import {DEFAULT_CITY} from '../settings.js';
import {ActionType} from './action.js';
import {AuthorizationStatus} from '../constants.js';

const initialState = {
  city: DEFAULT_CITY,
  offers: [],
  reviews: [],
  userEmail: null,
  authorizationStatus: AuthorizationStatus.UNKNOWN,
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
    case ActionType.REQUIRE_AUTH:
      return {
        ...state,
        authorizationStatus: action.payload,
      };
    case ActionType.SAVE_AUTH_EMAIL:
      return {
        ...state,
        userEmail: action.payload,
      };
    case ActionType.LOGOUT:
      return {
        ...state,
        authorizationStatus: AuthorizationStatus.NO_AUTH,
        userEmail: null,
      };
    default:
      return state;
  }
};

export {reducer};
