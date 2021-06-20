import PropTypes from 'prop-types';
import {CityName} from '../mocks/constants';

export default PropTypes.shape({
  name: PropTypes.oneOf(
    [
      CityName.PARIS,
      CityName.COLOGNE,
      CityName.BRUSSELS,
      CityName.AMSTERDAM,
      CityName.HAMBURG,
      CityName.DUSSELDORF,
    ],
  ).isRequired,
  location: PropTypes.shape({
    latitude: PropTypes.number.isRequired,
    longitude: PropTypes.number.isRequired,
    zoom: PropTypes.number.isRequired,
  }),
});
