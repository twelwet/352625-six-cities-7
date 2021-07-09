import React from 'react';
import offersDataPropTypes from '../../../prop-types/offers-data.prop.js';
import ListFavourites from '../../ui/offers-list/list-favourites/list-favourites.jsx';
import Header from '../../ui/header/header.jsx';
import {AppRoute} from '../../../constants.js';
import getFavouritesOffers from '../../../utils/get-favourites-offers';
import getOffersByAllCities from '../../../utils/get-offers-by-all-cities';

function Favourites({offers}) {
  const favouritesOffers = getFavouritesOffers(offers);
  const offersByCities = getOffersByAllCities(favouritesOffers);

  return (
    <div className="page">
      <Header/>
      {
        favouritesOffers.length
          ? (
            <main className="page__main page__main--favorites">
              <div className="page__favorites-container container">
                <section className="favorites">
                  <h1 className="favorites__title">Saved listing</h1>
                  <ul className="favorites__list">
                    <ListFavourites offersByCities={offersByCities}/>

                  </ul>
                </section>
              </div>
            </main>
          )
          : (
            <main className="page__main page__main--favorites page__main--favorites-empty">
              <div className="page__favorites-container container">
                <section className="favorites favorites--empty">
                  <h1 className="visually-hidden">Favorites (empty)</h1>
                  <div className="favorites__status-wrapper">
                    <b className="favorites__status">Nothing yet saved.</b>
                    <p className="favorites__status-description">Save properties to narrow down search or plan your future trips.</p>
                  </div>
                </section>
              </div>
            </main>
          )
      }
      <footer className="footer container">
        <a className="footer__logo-link" href={AppRoute.MAIN}>
          <img className="footer__logo" src={'img/logo.svg'} alt="6 cities logo" width="64" height="33"/>
        </a>
      </footer>
    </div>
  );
}

Favourites.propTypes = {
  offers: offersDataPropTypes,
};

export default Favourites;
