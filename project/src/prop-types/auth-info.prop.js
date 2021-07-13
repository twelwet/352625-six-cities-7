import PropTypes from 'prop-types';

export default PropTypes.shape({
  id: PropTypes.number,
  email: PropTypes.string,
  name: PropTypes.string,
  token: PropTypes.string,
  isPro: PropTypes.bool,
  avatarUrl: PropTypes.string,
});
