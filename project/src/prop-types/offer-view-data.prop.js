import PropTypes from 'prop-types';

export default PropTypes.shape({
  cardWidth: PropTypes.oneOf(['260', '150']),
  cardHeight: PropTypes.oneOf(['200', '110']),
  classNames: PropTypes.shape({
    mainBlock: PropTypes.oneOf(['cities__place-card', 'favorites__card', 'near-places__card']),
    imageBlock: PropTypes.oneOf(['cities__image-wrapper', 'favorites__image-wrapper', 'near-places__image-wrapper']),
    infoBlock: PropTypes.oneOf(['', 'favorites__card-info']),
  }),
});
