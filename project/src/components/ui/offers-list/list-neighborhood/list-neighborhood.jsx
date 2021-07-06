import React from 'react';
import CardNeighborhood from '../../offer-card/card-neighborhood/card-neighborhood.jsx';
import offersDataPropTypes from '../../../../prop-types/offers-data.prop.js';

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
  offers: offersDataPropTypes,
};


export default ListNeighborhood;
