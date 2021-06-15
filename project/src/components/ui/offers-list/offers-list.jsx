import React, {useState} from 'react';
import OfferCardOriginal from '../offer-card-original/offer-card-original.jsx';
import offersPropTypes from '../../../prop-types/offers.prop';

function OffersList ({offers}) {
  const [, setActiveOfferId] = useState(null);

  return (
    <div className="cities__places-list places__list tabs__content">
      {
        offers.map(
          (offer) =>
            (
              <OfferCardOriginal
                key={offer.id}
                data={offer}
                onOfferHover={() => setActiveOfferId(offer.id)}
                onOfferLeave={() => setActiveOfferId(null)}
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
