import React from 'react';
import OfferCard from '../offer-card/offer-card';
import offersPropTypes from '../../../prop-types/offers.prop';

function OffersList ({offers}) {
  return (
    <div className="cities__places-list places__list tabs__content">
      {offers.map((offer) => <OfferCard key={offer.id} data={offer}/>)}
    </div>
  );
}

OffersList.propTypes = {
  offers: offersPropTypes,
};


export default OffersList;
