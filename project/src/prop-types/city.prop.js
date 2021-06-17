import PropTypes from 'prop-types';
import {CitiesNames} from '../mocks/constants';

export default PropTypes.shape({
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
});
