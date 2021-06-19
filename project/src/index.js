import React from 'react';
import ReactDOM from 'react-dom';
import App from './components/app/app';
import offers from './mocks/offers.js';
import city from './mocks/city.js';
import reviews from './mocks/reviews.js';

ReactDOM.render(
  <React.StrictMode>
    <App offers={offers} city={city} reviews={reviews}/>
  </React.StrictMode>,
  document.getElementById('root'));
