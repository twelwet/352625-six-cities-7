import {DEFAULT_CITY} from '../settings.js';
import {ActionType} from './action.js';
import {AuthorizationStatus} from '../constants.js';

const initialState = {
  city: DEFAULT_CITY,
  offers: [],
  reviews: [],
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
    default:
      return state;
  }
};

export {reducer};
