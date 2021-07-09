import PropTypes from 'prop-types';
import offerDataOptionalPropTypes from './offer-data-optional.prop.js';

export default PropTypes.shape({
  status: PropTypes.string.isRequired,
  data: offerDataOptionalPropTypes,
  error: PropTypes.shape({
    message: PropTypes.string,
  }).isRequired,
});
