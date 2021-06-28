import PropTypes from 'prop-types';

export default PropTypes.shape({
  id: PropTypes.number,
  offerId: PropTypes.string,
  date: PropTypes.string,
  rating: PropTypes.number,
  description: PropTypes.string,
  author: PropTypes.shape({
    id: PropTypes.number,
    name: PropTypes.string,
    isPro: PropTypes.boolean,
    avatarUrl: PropTypes.string,
  }),
}).isRequired;
