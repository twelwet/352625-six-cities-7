import PropTypes from 'prop-types';
import {CityName} from '../mocks/constants';

export default PropTypes.oneOf(
  [
    CityName.PARIS,
    CityName.COLOGNE,
    CityName.BRUSSELS,
    CityName.AMSTERDAM,
    CityName.HAMBURG,
    CityName.DUSSELDORF,
  ],
).isRequired;
