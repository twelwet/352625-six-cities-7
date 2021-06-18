import React from 'react';
import ReactDOM from 'react-dom';
import App from './components/app/app';
import offers from './mocks/offers.js';
import city from './mocks/city.js';

ReactDOM.render(
  <React.StrictMode>
    <App offers={offers} city={city} />
  </React.StrictMode>,
  document.getElementById('root'));
