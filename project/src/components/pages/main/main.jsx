import React, {useState, useMemo} from 'react';
import {connect} from 'react-redux';
import ListMain from '../../ui/offers-list/list-main/list-main.jsx';
import Header from '../../ui/header/header.jsx';
import CitiesList from '../../ui/cities-list/cities-list.jsx';
import Map from '../../ui/map/map.jsx';
import offersPropTypes from '../../../prop-types/offers.prop.js';
import cityPropTypes from '../../../prop-types/city.prop.js';
import {sortOffers, sorts, SortType} from '../../../utils/sort-offers.js';

function Main({city, offers}) {
  const {data: offersData} = offers;
  const cities = useMemo(() => [...new Set(offersData.map((offer) => offer.city.name))], [offersData]);
  const cityOffers = useMemo(() => offersData.filter((offer) => offer.city.name === city), [offersData]);
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
              <form className="places__sorting" action="#" method="get">
                <span className="places__sorting-caption">Sort by</span>
                <span
                  onClick={() => setIsSortMenuOpen(!isSortMenuOpen)}
                  className="places__sorting-type" tabIndex="0"
                >
                  {activeSort}
                  <svg className="places__sorting-arrow" width="7" height="4">
                    <use xlinkHref="#icon-arrow-select"/>
                  </svg>
                </span>
                <ul className={isSortMenuOpen ? 'places__options places__options--custom places__options--opened' : 'places__options places__options--custom'}>
                  {
                    sorts.map(
                      (sortType) => (
                        <li
                          key={sortType}
                          className={sortType === activeSort ? 'places__option places places__option--active' : 'places__option places'}
                          tabIndex="0"
                          onClick={
                            () => {
                              setActiveSort(sortType);
                              setIsSortMenuOpen(false);
                            }
                          }
                        >
                          {sortType}
                        </li>
                      ),
                    )
                  }
                </ul>
              </form>
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
  offers: offersPropTypes,
};

const mapStateToProps = (state) => ({
  city: state.city,
  offers: state.offers,
});

export {Main};
export default connect(mapStateToProps, null)(Main);
