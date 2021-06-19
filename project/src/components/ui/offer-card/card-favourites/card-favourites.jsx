import React from 'react';
import PropTypes from 'prop-types';
import offerPropTypes from '../../../../prop-types/offer.prop.js';
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
  data: offerPropTypes,
  onOfferHover: PropTypes.func,
  onOfferLeave: PropTypes.func,
};

export default CardFavourites;
