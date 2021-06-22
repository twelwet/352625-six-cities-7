import {DEFAULT_CITY} from '../settings.js';
import {City} from '../mocks/constants.js';
import {ActionType} from './action.js';

const initialState = {
  cities: Object.keys(City),
  city: DEFAULT_CITY,
  offers: [],
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
    default:
      return state;
  }
};

export {reducer};
