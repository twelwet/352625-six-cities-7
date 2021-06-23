import {DEFAULT_CITY} from '../settings.js';
import {ActionType} from './action.js';

const initialState = {
  city: DEFAULT_CITY,
  offers: [],
  realOffers: [],
  reviews: [],
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case ActionType.CHANGE_CITY:
      return {
        ...state,
        city: action.payload,
      };
    case ActionType.GET_OFFERS:
      return {
        ...state,
        offers: action.payload,
      };
    case ActionType.LOAD_OFFERS:
      return {
        ...state,
        realOffers: action.payload,
      };

    default:
      return state;
  }
};

export {reducer};
