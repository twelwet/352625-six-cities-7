import PropTypes from 'prop-types';
import offerDataPropTypes from './offer-data.prop';

export default PropTypes.shape({
  status: PropTypes.string.isRequired,
  data: offerDataPropTypes,
  error: PropTypes.shape({
    message: PropTypes.string,
  }).isRequired,
});
