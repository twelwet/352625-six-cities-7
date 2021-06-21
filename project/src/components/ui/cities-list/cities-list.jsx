import React, {useState} from 'react';
import {Link} from 'react-router-dom';
import citiesPropTypes from '../../../prop-types/cities.prop.js';

function CitiesList({city, cities}) {
  const [activeCity, setActiveCity] = useState(city.name);
  return (
    <ul className="locations__list tabs__list">
      {
        cities.map(
          (cityName) => (
            <li key={cityName} className="locations__item">
              <Link
                className={(cityName === activeCity) ? 'locations__item-link tabs__item tabs__item--active' : 'locations__item-link tabs__item'}
                onClick={() => setActiveCity(cityName)}
                to={'/'}
              >
                <span>{cityName}</span>
              </Link>
            </li>
          ),
        )
      }
    </ul>
  );
}

CitiesList.propTypes = citiesPropTypes;

export default CitiesList;
