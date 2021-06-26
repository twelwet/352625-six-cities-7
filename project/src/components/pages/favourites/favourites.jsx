import React from 'react';
import offersPropTypes from '../../../prop-types/offers.prop.js';
import ListFavourites from '../../ui/offers-list/list-favourites/list-favourites.jsx';
import Header from '../../ui/header/header.jsx';
import {AppRoute} from '../../../constants.js';

function Favourites({offers}) {
  return (
    <div className="page">
      <Header/>

      <main className="page__main page__main--favorites">
        <div className="page__favorites-container container">
          <section className="favorites">
            <h1 className="favorites__title">Saved listing</h1>
            <ul className="favorites__list">
              <ListFavourites offers={offers}/>

            </ul>
          </section>
        </div>
      </main>
      <footer className="footer container">
        <a className="footer__logo-link" href={AppRoute.MAIN}>
          <img className="footer__logo" src={'img/logo.svg'} alt="6 cities logo" width="64" height="33"/>
        </a>
      </footer>
    </div>
  );
}

Favourites.propTypes = {
  offers: offersPropTypes,
};

export default Favourites;
