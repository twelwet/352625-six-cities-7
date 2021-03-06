import React from 'react';
import PropTypes from 'prop-types';
import offerDataPropTypes from '../../../../prop-types/offer-data.prop.js';
import OfferCard from '../offer-card.jsx';

function CardMain(props) {
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
      {...props}
    />
  );
}

CardMain.propTypes = {
  data: offerDataPropTypes,
  setActiveOfferId: PropTypes.func.isRequired,
};

export default CardMain;
