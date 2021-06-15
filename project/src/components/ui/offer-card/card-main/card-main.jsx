import React from 'react';
import PropTypes from 'prop-types';
import offerPropTypes from '../../../../prop-types/offer.prop.js';
import offerViewDataTypes from '../../../../prop-types/offer-view-data.prop.js';
import OfferCard from '../offer-card.jsx';

function CardMain(props) {
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

CardMain.propTypes = {
  viewData: offerViewDataTypes,
  data: offerPropTypes,
  onOfferHover: PropTypes.func,
  onOfferLeave: PropTypes.func,
};

export default CardMain;
