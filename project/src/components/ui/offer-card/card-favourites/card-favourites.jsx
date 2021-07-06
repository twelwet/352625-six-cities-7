import React from 'react';
import offerDataPropTypes from '../../../../prop-types/offer-data.prop.js';
import OfferCard from '../../offer-card/offer-card';

function CardFavourites(props) {
  return (
    <OfferCard
      viewData={{
        cardWidth: '150',
        cardHeight: '110',
        classNames: {
          mainBlock: 'favorites__card',
          imageBlock: 'favorites__image-wrapper',
          infoBlock: 'favorites__card-info',
        },
      }}
      {...props}
    />
  );
}

CardFavourites.propTypes = {
  data: offerDataPropTypes,
};

export default CardFavourites;
