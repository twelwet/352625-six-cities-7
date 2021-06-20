import city from '../mocks/city.js';
import offers from '../mocks/offers.js';
import reviews from '../mocks/reviews.js';
import {ActionType} from './action.js';

const initialState = {
  city: city,
  offers: offers.filter((offer) => offer.city.name === city.name),
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
        offers: offers.filter((offer) => offer.city.name === action.payload),
      };
    default:
      return state;
  }
};

export {reducer};
