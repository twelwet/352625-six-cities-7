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
  ),
  location: PropTypes.shape({
    latitude: PropTypes.number,
    longitude: PropTypes.number,
    zoom: PropTypes.number,
  }),
});
