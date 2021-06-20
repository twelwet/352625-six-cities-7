import React from 'react';
import ReactDOM from 'react-dom';
import {createStore} from 'redux';
import {Provider} from 'react-redux';
import {composeWithDevTools} from 'redux-devtools-extension';
import App from './components/app/app';
import offers from './mocks/offers.js';
import city from './mocks/city.js';
import reviews from './mocks/reviews.js';
import {reducer} from './store/reducer';

const store = createStore(
  reducer,
  composeWithDevTools(),
);

ReactDOM.render(
  <React.StrictMode>
    <Provider store={store}>
      <App offers={offers} city={city} reviews={reviews}/>
    </Provider>
  </React.StrictMode>,
  document.getElementById('root'));
