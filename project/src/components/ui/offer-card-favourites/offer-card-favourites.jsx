import React from 'react';
import PropTypes from 'prop-types';
import offerPropTypes from '../../../prop-types/offer.prop.js';
import offerViewDataTypes from '../../../prop-types/offer-view-data.prop.js';
import OfferCard from '../offer-card/offer-card';

function OfferCardFavourites(props) {
  const {viewData, ...restProps} = props;

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
      {...restProps}
    />
  );
}

OfferCardFavourites.propTypes = {
  viewData: offerViewDataTypes,
  data: offerPropTypes,
  onOfferHover: PropTypes.func,
  onOfferLeave: PropTypes.func,
};

export default OfferCardFavourites;
