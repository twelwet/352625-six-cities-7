import React from 'react';
import CardNeighborhood from '../../offer-card/card-neighborhood/card-neighborhood.jsx';
import offersPropTypes from '../../../../prop-types/offers.prop';

function ListNeighborhood ({offers}) {
  return (
    <div className="near-places__list places__list">
      {
        offers
          .map(
            (offer) =>
              (
                <CardNeighborhood
                  key={offer.id}
                  data={offer}
                />
              ),
          )
      }
    </div>
  );
}

ListNeighborhood.propTypes = {
  offers: offersPropTypes,
};


export default ListNeighborhood;
