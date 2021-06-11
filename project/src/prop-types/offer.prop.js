import PropTypes from 'prop-types';

export default PropTypes.shape({
  id: PropTypes.string,
  description: PropTypes.string,
  type: PropTypes.string,
  price: PropTypes.number,
  image: PropTypes.string,
  rating: PropTypes.number,
  isPremium: PropTypes.boolean,
  isBookmark: PropTypes.boolean,
});
