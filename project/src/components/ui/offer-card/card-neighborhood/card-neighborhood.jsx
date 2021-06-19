import React from 'react';
import offerPropTypes from '../../../../prop-types/offer.prop.js';
import OfferCard from '../offer-card.jsx';

function CardNeighborhood(props) {
  return (
    <OfferCard
      viewData={{
        cardWidth: '260',
        cardHeight: '200',
        classNames: {
          mainBlock: 'near-places__card',
          imageBlock: 'near-places__image-wrapper',
          infoBlock: '',
        },
      }}
      {...props}
    />
  );
}

CardNeighborhood.propTypes = {
  data: offerPropTypes,
};

export default CardNeighborhood;
