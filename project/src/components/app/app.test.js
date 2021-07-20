import React from 'react';
import {render, screen} from '@testing-library/react';
import {Router} from 'react-router-dom';
import thunk from 'redux-thunk';
import configureStore from 'redux-mock-store';
import { Provider } from 'react-redux';
import {createMemoryHistory} from 'history';
import App from './app.jsx';
import {AppRoute} from '../../constants.js';

let history = null;
let store = null;
let fakeApp = null;

describe('Application Routing', () => {
  beforeAll(() => {
    history = createMemoryHistory();

    const mockStore = configureStore([thunk]);
    store = mockStore({
      OFFERS: { status: 'IDLE', data: [], error: { message: null } },
      USER: {authorizationStatus: 'NO_AUTH'},
      CITY: {city: 'Paris'},
    });
    // TODO описать мок асинхронного экшена fetchOffersList(), разобратться почему token undefined

    fakeApp = (
      <Provider store={store}>
        <Router history={history}>
          <App authorizationStatus={'NO_AUTH'} />
        </Router>
      </Provider>
    );
  });

  it('should render "MainScreen" when user navigate to "/"', () => {
    history.push(AppRoute.MAIN);
    render(fakeApp);

    expect(screen.getByText('Paris')).toBeInTheDocument();
  });
});
