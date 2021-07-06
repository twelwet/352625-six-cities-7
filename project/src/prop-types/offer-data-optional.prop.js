import PropTypes from 'prop-types';
import cityPropTypes from './city.prop.js';
import {StayType} from '../constants.js';

export default PropTypes.shape({
  id: PropTypes.number,
  title: PropTypes.string,
  description: PropTypes.string,
  type: PropTypes.oneOf([StayType.APARTMENT, StayType.ROOM, StayType.HOTEL, StayType.HOUSE]),
  price: PropTypes.number,
  previewImage: PropTypes.string,
  images: PropTypes.arrayOf(PropTypes.string),
  rating: PropTypes.number,
  bedrooms: PropTypes.number,
  maxAdults: PropTypes.number,
  goods: PropTypes.arrayOf(PropTypes.string),
  host: PropTypes.shape({
    id: PropTypes.number,
    name: PropTypes.string,
    isPro: PropTypes.boolean,
    avatarUrl: PropTypes.string,
  }),
  city: PropTypes.shape({
    name: cityPropTypes,
    location: PropTypes.shape({
      latitude: PropTypes.number,
      longitude: PropTypes.number,
      zoom: PropTypes.number,
    }),
  }),
  location: PropTypes.shape({
    latitude: PropTypes.number,
    longitude: PropTypes.number,
    zoom: PropTypes.number,
  }),
  isPremium: PropTypes.boolean,
  isFavourite: PropTypes.boolean,
});
