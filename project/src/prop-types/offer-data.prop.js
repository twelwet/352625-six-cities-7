import PropTypes from 'prop-types';
import cityPropTypes from './city.prop.js';
import {StayType} from '../constants.js';

export default PropTypes.shape({
  id: PropTypes.number.isRequired,
  title: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
  type: PropTypes.oneOf([StayType.APARTMENT, StayType.ROOM, StayType.HOTEL, StayType.HOUSE]).isRequired,
  price: PropTypes.number.isRequired,
  previewImage: PropTypes.string.isRequired,
  images: PropTypes.arrayOf(PropTypes.string).isRequired,
  rating: PropTypes.number.isRequired,
  bedrooms: PropTypes.number.isRequired,
  maxAdults: PropTypes.number.isRequired,
  goods: PropTypes.arrayOf(PropTypes.string).isRequired,
  host: PropTypes.shape({
    id: PropTypes.number.isRequired,
    name: PropTypes.string.isRequired,
    isPro: PropTypes.boolean,
    avatarUrl: PropTypes.string.isRequired,
  }).isRequired,
  city: PropTypes.shape({
    name: cityPropTypes,
    location: PropTypes.shape({
      latitude: PropTypes.number.isRequired,
      longitude: PropTypes.number.isRequired,
      zoom: PropTypes.number.isRequired,
    }),
  }).isRequired,
  location: PropTypes.shape({
    latitude: PropTypes.number.isRequired,
    longitude: PropTypes.number.isRequired,
    zoom: PropTypes.number.isRequired,
  }).isRequired,
  isPremium: PropTypes.boolean,
  isFavourite: PropTypes.boolean,
}).isRequired;
