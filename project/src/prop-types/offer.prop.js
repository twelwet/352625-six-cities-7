import PropTypes from 'prop-types';
import {CitiesNames} from '../mocks/constants';

export default PropTypes.shape({
  id: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
  type: PropTypes.oneOf(['Apartment', 'Private room']).isRequired,
  price: PropTypes.number.isRequired,
  previewImage: PropTypes.string.isRequired,
  images: PropTypes.arrayOf(PropTypes.string).isRequired,
  rating: PropTypes.number.isRequired,
  city: PropTypes.shape({
    name: PropTypes.oneOf(
      [
        CitiesNames.PARIS,
        CitiesNames.COLOGNE,
        CitiesNames.BRUSSELS,
        CitiesNames.AMSTERDAM,
        CitiesNames.HAMBURG,
        CitiesNames.DUSSELDORF,
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
  isBookmark: PropTypes.boolean,
});
