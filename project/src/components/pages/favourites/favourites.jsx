import React, {useEffect} from 'react';
import {connect} from 'react-redux';
import PropTypes from 'prop-types';
import ListFavourites from '../../ui/offers-list/list-favourites/list-favourites.jsx';
import Header from '../../ui/header/header.jsx';
import {AppRoute, Status, AuthorizationStatus} from '../../../constants.js';
import getOffersByAllCities from '../../../utils/get-offers-by-all-cities';
import {fetchFavourites} from '../../../store/api-actions.js';
import ErrorInfo from '../error-info/error-info.jsx';
import Spinner from '../../ui/spinner/spinner.jsx';
import {getAuthStatus, getFavouritesOffers} from '../../../store/user/selectors.js';
import offersPropTypes from '../../../prop-types/offers.prop.js';

function Favourites({favourites, getFavourites, authorizationStatus}) {
  const { status, data, error } = favourites;

  useEffect(() => {
    getFavourites();
  }, [getFavourites]);

  if (error.message !== null) {
    return <ErrorInfo errors={[error]}/>;
  }

  if (status === Status.PENDING
    || status === Status.IDLE
    || authorizationStatus === AuthorizationStatus.UNKNOWN) {
    return <Spinner/>;
  }

  const offersByCities = getOffersByAllCities(data);

  return (
    <div className="page">
      <Header/>
      {
        data.length
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
  favourites: offersPropTypes,
  getFavourites: PropTypes.func.isRequired,
  authorizationStatus: PropTypes.string.isRequired,
};

const mapStateToProps = (state) => ({
  favourites: getFavouritesOffers(state),
  authorizationStatus: getAuthStatus(state),
});

const mapDispatchToProps = (dispatch) => ({
  getFavourites () {
    dispatch(fetchFavourites());
  },
});

export {Favourites};
export default connect(mapStateToProps, mapDispatchToProps)(Favourites);
