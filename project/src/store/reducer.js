import {DEFAULT_CITY} from '../settings.js';
import offers from '../mocks/offers.js';
import reviews from '../mocks/reviews.js';
import {City} from '../mocks/constants.js';
import {ActionType} from './action.js';

const initialState = {
  cities: Object.keys(City),
  city: DEFAULT_CITY,
  cityOffers: offers.filter((offer) => offer.city.name === DEFAULT_CITY),
  offers,
  reviews,
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case ActionType.CHANGE_CITY:
      return {
        ...state,
        city: action.payload,
      };
    case ActionType.GET_OFFERS_BY_CITY:
      return {
        ...state,
        cityOffers: action.payload,
      };
    default:
      return state;
  }
};

export {reducer};
