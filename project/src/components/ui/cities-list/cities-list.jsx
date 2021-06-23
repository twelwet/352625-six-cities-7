import React from 'react';
import PropTypes from 'prop-types';
import cityPropTypes from '../../../prop-types/city.prop.js';
import citiesPropTypes from '../../../prop-types/cities.prop.js';
import {connect} from 'react-redux';
import {ActionCreator} from '../../../store/action.js';

function CitiesList({cities, city, onCityClick}) {
  return (
    <ul className="locations__list tabs__list">
      {
        cities.map(
          (cityName) => (
            <li key={cityName} className="locations__item">
              <a
                className={(cityName === city) ? 'locations__item-link tabs__item tabs__item--active' : 'locations__item-link tabs__item'}
                onClick={(evt) => {
                  evt.preventDefault();
                  onCityClick(cityName);
                }}
                href={'/'}
              >
                <span>{cityName}</span>
              </a>
            </li>
          ),
        )
      }
    </ul>
  );
}

CitiesList.propTypes = {
  city: cityPropTypes,
  cities: citiesPropTypes,
  onCityClick: PropTypes.func.isRequired,
};

const mapDispatchToProps = (dispatch) => ({
  onCityClick: (city) => {
    dispatch(ActionCreator.changeCity(city));
  },
});

export {CitiesList};
export default connect(null, mapDispatchToProps)(CitiesList);
