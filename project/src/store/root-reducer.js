import {combineReducers} from 'redux';
import {city} from './city/city.js';
import {neighborOffers} from './neighbor-offers/neighbor-offers.js';
import {offer} from './offer/offer.js';
import {offers} from './offers/offers.js';
import {reviews} from './reviews/reviews.js';
import {user} from './user/user.js';

export const NameSpace = {
  CITY: 'CITY',
  NEIGHBOR_OFFERS: 'NEIGHBOR_OFFERS',
  OFFER: 'OFFER',
  OFFERS: 'OFFERS',
  REVIEWS: 'REVIEWS',
  USER: 'USER',
};

export default combineReducers({
  [NameSpace.CITY]: city,
  [NameSpace.NEIGHBOR_OFFERS]: neighborOffers,
  [NameSpace.OFFER]: offer,
  [NameSpace.OFFERS]: offers,
  [NameSpace.REVIEWS]: reviews,
  [NameSpace.USER]: user,
});
