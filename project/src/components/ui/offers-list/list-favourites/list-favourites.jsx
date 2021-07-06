import React from 'react';
import {Link} from 'react-router-dom';
import PropTypes from 'prop-types';
import CardFavourites from '../../offer-card/card-favourites/card-favourites.jsx';
import offersDataPropTypes from '../../../../prop-types/offers-data.prop.js';
import cityPropTypes from '../../../../prop-types/city.prop.js';
import {AppRoute} from '../../../../constants.js';

function ListFavourites ({offersByCities}) {
  return (
    offersByCities.map(
      (item) => (
        <li key={item.city} className="favorites__locations-items">
          <div className="favorites__locations locations locations--current">
            <div className="locations__item">
              <Link className="locations__item-link" to={AppRoute.MAIN}>
                <span>{item.city}</span>
              </Link>
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
  offersByCities: PropTypes.arrayOf(
    PropTypes.shape({
      city: cityPropTypes,
      offers: offersDataPropTypes,
    }).isRequired,
  ).isRequired,
};

export default ListFavourites;
