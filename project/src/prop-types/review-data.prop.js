import PropTypes from 'prop-types';

export default PropTypes.shape({
  id: PropTypes.number,
  date: PropTypes.string,
  rating: PropTypes.number,
  comment: PropTypes.string,
  user: PropTypes.shape({
    id: PropTypes.number,
    name: PropTypes.string,
    isPro: PropTypes.boolean,
    avatarUrl: PropTypes.string,
  }),
}).isRequired;
