import React from 'react';
import CardFavourites from '../../offer-card/card-favourites/card-favourites.jsx';
import offersPropTypes from '../../../../prop-types/offers.prop';

function ListFavourites ({offers}) {
  return (
    <div className="favorites__places">
      {
        offers
          .filter((offer) => offer.isBookmark === true)
          .map(
            (offer) =>
              (
                <CardFavourites
                  key={offer.id}
                  data={offer}
                />
              ),
          )
      }
    </div>
  );
}

ListFavourites.propTypes = {
  offers: offersPropTypes,
};


export default ListFavourites;
