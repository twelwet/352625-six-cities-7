import PropTypes from 'prop-types';
import {CityName} from '../mocks/constants';

export default PropTypes.shape({
  id: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
  type: PropTypes.oneOf(['Apartment', 'Private room']).isRequired,
  price: PropTypes.number.isRequired,
  previewImage: PropTypes.string.isRequired,
  images: PropTypes.arrayOf(PropTypes.string).isRequired,
  rating: PropTypes.number.isRequired,
  bedrooms: PropTypes.number.isRequired,
  maxAdults: PropTypes.number.isRequired,
  goods: PropTypes.arrayOf(PropTypes.string).isRequired,
  host: PropTypes.shape({
    id: PropTypes.number,
    name: PropTypes.string,
    isPro: PropTypes.boolean,
    avatarUrl: PropTypes.string,
  }).isRequired,
  city: PropTypes.shape({
    name: PropTypes.oneOf(
      [
        CityName.PARIS,
        CityName.COLOGNE,
        CityName.BRUSSELS,
        CityName.AMSTERDAM,
        CityName.HAMBURG,
        CityName.DUSSELDORF,
      ],
    ),
    location: PropTypes.shape({
      latitude: PropTypes.number,
      longitude: PropTypes.number,
      zoom: PropTypes.number,
    }),
  }).isRequired,
  location: PropTypes.shape({
    latitude: PropTypes.number,
    longitude: PropTypes.number,
    zoom: PropTypes.number,
  }),
  isPremium: PropTypes.boolean,
  isFavourite: PropTypes.boolean,
});
