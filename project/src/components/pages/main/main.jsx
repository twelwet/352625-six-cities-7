import React, {useState, useMemo, useEffect} from 'react';
import PropTypes from 'prop-types';
import {connect} from 'react-redux';
import ListMain from '../../ui/offers-list/list-main/list-main.jsx';
import Header from '../../ui/header/header.jsx';
import CitiesList from '../../ui/cities-list/cities-list.jsx';
import SortMenu from '../../ui/sort-menu/sort-menu.jsx';
import Map from '../../ui/map/map.jsx';
import offersDataPropTypes from '../../../prop-types/offers-data.prop.js';
import cityPropTypes from '../../../prop-types/city.prop.js';
import {sortOffers, SortType} from '../../../utils/sort-offers.js';
import {cities} from '../../../utils/get-cities-list.js';
import {getOffersData, getOffersStatus, getOffersError} from '../../../store/offers/selectors.js';
import {getAuthStatus} from '../../../store/user/selectors.js';
import {getCity} from '../../../store/city/selectors.js';
import {AuthorizationStatus, Status} from '../../../constants.js';
import ErrorInfo from '../error-info/error-info.jsx';
import Spinner from '../../ui/spinner/spinner.jsx';
import {fetchOffersList} from '../../../store/api-actions.js';

function Main({city, status, data, error, authorizationStatus, getOffers}) {
  useEffect(() => {
    getOffers();
  }, [getOffers]);

  const [activeOfferId, setActiveOfferId] = useState(null);
  const [activeSort, setActiveSort] = useState(SortType.POPULAR);

  const cityOffers = useMemo(() => data.filter((offer) => offer.city.name === city), [data, city]);
  const sortedOffers = useMemo(() => sortOffers(cityOffers, activeSort), [cityOffers, activeSort]);
  const placesCount = cityOffers.length;

  if (status === Status.REJECTED) {
    return <ErrorInfo errors={[error]}/>;
  }

  if (status === Status.PENDING
    || status === Status.IDLE
    || authorizationStatus === AuthorizationStatus.UNKNOWN) {
    return <Spinner/>;
  }

  return (
    <div className="page page--gray page--main">
      <Header/>

      <main className={placesCount === 0 ? 'page__main page__main--index page__main--index-empty' : 'page__main page__main--index'}>
        <h1 className="visually-hidden">Cities</h1>
        <div className="tabs">
          <section className="locations container">
            <CitiesList city={city} cities={cities}/>
          </section>
        </div>
        {
          placesCount === 0
            ? (
              <div className="cities">
                <div className="cities__places-container cities__places-container--empty container">
                  <section className="cities__no-places">
                    <div className="cities__status-wrapper tabs__content">
                      <b className="cities__status">No places to stay available</b>
                      <p className="cities__status-description">We could not find any property available at the moment in {city}</p>
                    </div>
                  </section>
                  <div className="cities__right-section"/>
                </div>
              </div>
            ) : (
              <div className="cities">
                <div className="cities__places-container container">
                  <section className="cities__places places">
                    <h2 className="visually-hidden">Places</h2>
                    <b className="places__found">{`${placesCount} places to stay in ${city}`}</b>
                    <SortMenu setActiveSort={setActiveSort} activeSort={activeSort}/>
                    <ListMain offers={sortedOffers} setActiveOfferId={setActiveOfferId}/>
                  </section>
                  <div className="cities__right-section">
                    <section className="cities__map map">
                      <Map offers={cityOffers} activeOfferId={activeOfferId}/>
                    </section>
                  </div>
                </div>
              </div>
            )
        }
      </main>
    </div>
  );
}

Main.propTypes = {
  city: cityPropTypes,
  status: PropTypes.string.isRequired,
  data: offersDataPropTypes,
  error: PropTypes.shape({
    message: PropTypes.string,
  }).isRequired,
  authorizationStatus: PropTypes.string.isRequired,
  getOffers: PropTypes.func.isRequired,
};

const mapStateToProps = (state) => ({
  city: getCity(state),
  status: getOffersStatus(state),
  data: getOffersData(state),
  error: getOffersError(state),
  authorizationStatus: getAuthStatus(state),
});

const mapDispatchToProps = (dispatch) => ({
  getOffers () {
    dispatch(fetchOffersList());
  },
});

export {Main};
export default connect(mapStateToProps, mapDispatchToProps)(Main);
