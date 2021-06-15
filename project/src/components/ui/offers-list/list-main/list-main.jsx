import React, {useState} from 'react';
import CardMain from '../../offer-card/card-main/card-main.jsx';
import offersPropTypes from '../../../../prop-types/offers.prop';

function ListMain ({offers}) {
  const [, setActiveOfferId] = useState(null);

  return (
    <div className="cities__places-list places__list tabs__content">
      {
        offers.map(
          (offer) =>
            (
              <CardMain
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

ListMain.propTypes = {
  offers: offersPropTypes,
};


export default ListMain;
