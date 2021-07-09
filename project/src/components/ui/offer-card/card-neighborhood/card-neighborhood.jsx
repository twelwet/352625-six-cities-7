import React from 'react';
import offerDataPropTypes from '../../../../prop-types/offer-data.prop.js';
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
  data: offerDataPropTypes,
};

export default CardNeighborhood;
