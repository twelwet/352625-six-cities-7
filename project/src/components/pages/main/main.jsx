import React, {useState, useMemo} from 'react';
import {connect} from 'react-redux';
import ListMain from '../../ui/offers-list/list-main/list-main.jsx';
import Header from '../../ui/header/header.jsx';
import CitiesList from '../../ui/cities-list/cities-list.jsx';
import SortMenu from '../../ui/sort-menu/sort-menu.jsx';
import Map from '../../ui/map/map.jsx';
import offersDataPropTypes from '../../../prop-types/offers-data.prop.js';
import cityPropTypes from '../../../prop-types/city.prop.js';
import {sortOffers, SortType} from '../../../utils/sort-offers.js';
import {getOffersData} from '../../../store/offers/selectors.js';
import {getCity} from '../../../store/city/selectors.js';
import {CityName} from '../../../constants.js';

function Main({city, data: offersData}) {
  const cities = useMemo(() => Object.values(CityName), []);
  const cityOffers = useMemo(() => offersData.filter((offer) => offer.city.name === city), [offersData, city]);
  const placesCount = cityOffers.length;

  const [activeOfferId, setActiveOfferId] = useState(null);
  const [isSortMenuOpen, setIsSortMenuOpen] = useState(false);
  const [activeSort, setActiveSort] = useState(SortType.POPULAR);

  return (
    <div className="page page--gray page--main">
      <Header/>

      <main className="page__main page__main--index">
        <h1 className="visually-hidden">Cities</h1>
        <div className="tabs">
          <section className="locations container">
            <CitiesList city={city} cities={cities}/>
          </section>
        </div>
        <div className="cities">
          <div className="cities__places-container container">
            <section className="cities__places places">
              <h2 className="visually-hidden">Places</h2>
              <b className="places__found">{`${placesCount} places to stay in ${city}`}</b>
              <SortMenu setActiveSort={setActiveSort} activeSort={activeSort} isSortMenuOpen={isSortMenuOpen} setIsSortMenuOpen={setIsSortMenuOpen}/>
              <ListMain offers={useMemo(() => sortOffers(cityOffers, activeSort), [cityOffers, activeSort])} setActiveOfferId={setActiveOfferId}/>
            </section>
            <div className="cities__right-section">
              <section className="cities__map map">
                <Map offers={cityOffers} activeOfferId={activeOfferId}/>
              </section>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
}

Main.propTypes = {
  city: cityPropTypes,
  data: offersDataPropTypes,
};

const mapStateToProps = (state) => ({
  city: getCity(state),
  data: getOffersData(state),
});

export {Main};
export default connect(mapStateToProps, null)(Main);
