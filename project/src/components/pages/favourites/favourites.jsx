import React from 'react';
import offersPropTypes from '../../../prop-types/offers.prop.js';
import OfferCard from '../../ui/offer-card/offer-card.jsx';
import Header from '../../ui/header/header.jsx';

function Favourites({offers}) {
  return (
    <div className="page">
      <Header/>

      <main className="page__main page__main--favorites">
        <div className="page__favorites-container container">
          <section className="favorites">
            <h1 className="favorites__title">Saved listing</h1>
            <ul className="favorites__list">
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
                      .filter((offer) => offer.isBookmark === true)
                      .map(
                        (offer) =>
                          (
                            <OfferCard
                              key={offer.id}
                              cardType={'favourites'}
                              data={offer}
                            />
                          ),
                      )
                  }
                </div>
              </li>

            </ul>
          </section>
        </div>
      </main>
      <footer className="footer container">
        <a className="footer__logo-link" href={'/'}>
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
