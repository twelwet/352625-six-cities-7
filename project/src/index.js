import React from 'react';
import ReactDOM from 'react-dom';
import App from './components/app/app';
import mocks from './mocks.js';

const {placesCount} = mocks;

ReactDOM.render(
  <React.StrictMode>
    <App placesCount={placesCount} />
  </React.StrictMode>,
  document.getElementById('root'));
