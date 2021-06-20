import React from 'react';
import PropTypes from 'prop-types';
import CardNeighborhood from '../../offer-card/card-neighborhood/card-neighborhood.jsx';
import offersPropTypes from '../../../../prop-types/offers.prop';

function ListNeighborhood ({offers, setActiveOfferId}) {
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
                  setActiveOfferId={setActiveOfferId}
                />
              ),
          )
      }
    </div>
  );
}

ListNeighborhood.propTypes = {
  offers: offersPropTypes,
  setActiveOfferId: PropTypes.func.isRequired,
};


export default ListNeighborhood;
