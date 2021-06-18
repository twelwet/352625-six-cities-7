import React from 'react';
import CardFavourites from '../../offer-card/card-favourites/card-favourites.jsx';
import offersPropTypes from '../../../../prop-types/offers.prop';
import getOffersByAllCities from '../../../../utils/get-offers-by-all-cities.js';
import getFavouritesOffers from '../../../../utils/get-favourites-offers.js';

function ListFavourites ({offers}) {
  const favouritesOffers = getFavouritesOffers(offers);
  const offersByCities = getOffersByAllCities(favouritesOffers);
  return (
    offersByCities.map(
      (item) => (
        <li key={item.city} className="favorites__locations-items">
          <div className="favorites__locations locations locations--current">
            <div className="locations__item">
              <a className="locations__item-link" href={'/'}>
                <span>{item.city}</span>
              </a>
            </div>
          </div>
          <div className="favorites__places">
            {
              item.offers
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
        </li>
      ),
    )
  );
}

ListFavourites.propTypes = {
  offers: offersPropTypes,
};


export default ListFavourites;
