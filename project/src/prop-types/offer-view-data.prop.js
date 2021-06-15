import PropTypes from 'prop-types';

export default PropTypes.shape({
  cardWidth: PropTypes.string,
  cardHeight: PropTypes.string,
  classNames: PropTypes.shape({
    mainBlock: PropTypes.string,
    imageBlock: PropTypes.string,
    infoBlock: PropTypes.string,
  }),
});
