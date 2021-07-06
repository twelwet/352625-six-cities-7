import PropTypes from 'prop-types';
import offerPropTypes from './offer.prop.js';

export default PropTypes.shape({
  status: PropTypes.string.isRequired,
  data: PropTypes.arrayOf(offerPropTypes).isRequired,
  error: PropTypes.shape({
    message: PropTypes.string,
  }).isRequired,
});
