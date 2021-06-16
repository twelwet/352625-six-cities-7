import PropTypes from 'prop-types';

export default PropTypes.shape({
  cardWidth: PropTypes.oneOf(['260', '150']).isRequired,
  cardHeight: PropTypes.oneOf(['200', '110']).isRequired,
  classNames: PropTypes.shape({
    mainBlock: PropTypes.oneOf(['cities__place-card', 'favorites__card', 'near-places__card']).isRequired,
    imageBlock: PropTypes.oneOf(['cities__image-wrapper', 'favorites__image-wrapper', 'near-places__image-wrapper']).isRequired,
    infoBlock: PropTypes.oneOf(['', 'favorites__card-info']).isRequired,
  }),
});
