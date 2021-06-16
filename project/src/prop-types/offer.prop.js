import PropTypes from 'prop-types';

export default PropTypes.shape({
  id: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
  type: PropTypes.oneOf(['Apartment', 'Private room']).isRequired,
  price: PropTypes.number.isRequired,
  image: PropTypes.string.isRequired,
  rating: PropTypes.number.isRequired,
  isPremium: PropTypes.boolean,
  isBookmark: PropTypes.boolean,
});
