import React from 'react';
import PropTypes from 'prop-types';
import offerPropTypes from '../../../../prop-types/offer.prop.js';
import offerViewDataTypes from '../../../../prop-types/offer-view-data.prop.js';
import OfferCard from '../offer-card.jsx';

function CardNeighborhood(props) {
  const {viewData, ...restProps} = props;

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
      {...restProps}
    />
  );
}

CardNeighborhood.propTypes = {
  viewData: offerViewDataTypes,
  data: offerPropTypes,
  onOfferHover: PropTypes.func,
  onOfferLeave: PropTypes.func,
};

export default CardNeighborhood;
