import React from 'react';
import CardFavourites from '../../offer-card/card-favourites/card-favourites.jsx';
import offersPropTypes from '../../../../prop-types/offers.prop';

function ListFavourites ({offers}) {
  return (
    <li className="favorites__locations-items">
      <div className="favorites__locations locations locations--current">
        <div className="locations__item">
          <a className="locations__item-link" href={'/'}>
            <span>Amsterdam</span>
          </a>
        </div>
      </div>
      <div className="favorites__places">
        {
          offers
            .filter((offer) => offer.isFavourite === true)
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
  );
}

ListFavourites.propTypes = {
  offers: offersPropTypes,
};


export default ListFavourites;
