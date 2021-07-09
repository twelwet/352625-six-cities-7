import PropTypes from 'prop-types';
import offerDataPropTypes from './offer-data.prop.js';

export default PropTypes.shape({
  status: PropTypes.string.isRequired,
  data: PropTypes.arrayOf(offerDataPropTypes).isRequired,
  error: PropTypes.shape({
    message: PropTypes.string,
  }).isRequired,
});
