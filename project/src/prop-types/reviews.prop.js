import PropTypes from 'prop-types';
import reviewPropTypes from './review-data.prop.js';

export default PropTypes.shape({
  status: PropTypes.string.isRequired,
  data: PropTypes.arrayOf(reviewPropTypes).isRequired,
  error: PropTypes.shape({
    message: PropTypes.string,
  }).isRequired,
});
