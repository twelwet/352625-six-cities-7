import React, {useState} from 'react';
import OfferCard from '../offer-card/offer-card';
import offersPropTypes from '../../../prop-types/offers.prop';

function OffersList ({offers}) {
  const [activeOffer, setActiveOfferId] = useState({activeOfferId: null});

  return (
    <div className="cities__places-list places__list tabs__content">
      {
        offers.map(
          (offer) =>
            (
              <OfferCard
                key={offer.id}
                cardType={'original'}
                data={offer}
                onOfferHover={() => setActiveOfferId({...activeOffer, activeOfferId: offer.id})}
                onOfferLeave={() => setActiveOfferId({...activeOffer, activeOfferId: null})}
              />
            ),
        )
      }
    </div>
  );
}

OffersList.propTypes = {
  offers: offersPropTypes,
};


export default OffersList;
