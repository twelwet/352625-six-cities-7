import React from 'react';
import {connect} from 'react-redux';
import Header from '../../ui/header/header.jsx';
import CitiesList from '../../ui/cities-list/cities-list';
import {CityName} from '../../../constants.js';
import cityPropTypes from '../../../prop-types/city.prop';
import {getCity} from '../../../store/city/selectors';

function MainEmpty({city}) {
  const cities = Object.values(CityName);

  return (
    <div className="page page--gray page--main">
      <Header/>

      <main className="page__main page__main--index page__main--index-empty">
        <h1 className="visually-hidden">Cities</h1>
        <div className="tabs">
          <section className="locations container">
            <CitiesList city={city} cities={cities}/>
          </section>
        </div>
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
      </main>
    </div>
  );
}

MainEmpty.propTypes = {
  city: cityPropTypes,
};

const mapStateToProps = (state) => ({
  city: getCity(state),
});

export {MainEmpty};
export default connect(mapStateToProps, null)(MainEmpty);
