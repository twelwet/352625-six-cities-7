import React from 'react';
import PropTypes from 'prop-types';
import offerPropTypes from '../../../prop-types/offer.prop.js';
import OfferCard from '../offer-card/offer-card.jsx';

function OfferCardOriginal(props) {
  const {viewData, ...restProps} = props;

  return (
    <OfferCard
      viewData={{
        cardWidth: '260',
        cardHeight: '200',
        classNames: {
          mainBlock: 'cities__place-card',
          imageBlock: 'cities__image-wrapper',
          infoBlock: '',
        },
      }}
      {...restProps}
    />
  );
}

OfferCardOriginal.propTypes = {
  viewData: PropTypes.shape({
    cardWidth: PropTypes.string,
    cardHeight: PropTypes.string,
    classNames: PropTypes.shape({
      mainBlock: PropTypes.string,
      imageBlock: PropTypes.string,
      infoBlock: PropTypes.string,
    }),
  }),
  data: offerPropTypes,
  onOfferHover: PropTypes.func,
  onOfferLeave: PropTypes.func,
};

export default OfferCardOriginal;
