import React from 'react';
import {render} from '@testing-library/react';
import {Router} from 'react-router-dom';
import configureStore from 'redux-mock-store';
import { Provider } from 'react-redux';
import thunk from 'redux-thunk';
import {createMemoryHistory} from 'history';
import App from './app.jsx';
import {AppRoute, Status} from '../../constants.js';
import {CityName, StayType} from '../../constants';

let history = null;
let store = null;
let fakeApp = null;

const mockApi = {
  get: jest.fn(() => Promise.resolve(42)),
};

describe('Application Routing, AUTH mode', () => {
  beforeAll(() => {
    const offerData = {
      id: 1,
      title: 'Offer title example',
      description: 'Some description about offer',
      type: StayType.HOUSE,
      price: 100,
      previewImage: 'previewImage',
      images: ['previewImage1', 'previewImage2'],
      rating: 4,
      bedrooms: 3,
      maxAdults: 2,
      goods: ['good1', 'good2'],
      host: {
        id: 1,
        name: 'name',
        isPro: true,
        avatarUrl: 'avatarUrl',
      },
      city: {
        name: CityName.PARIS,
        location: {
          latitude: 1,
          longitude: 1,
          zoom: 1,
        },
      },
      location: {
        latitude: 1,
        longitude: 1,
        zoom: 1,
      },
      isPremium: true,
      isFavourite: true,
    };

    history = createMemoryHistory();

    const mockStore = configureStore([thunk.withExtraArgument(mockApi)]);

    store = mockStore({
      OFFERS: { status: Status.FULFILLED, data: [], error: { message: null } },
      ROOM: {
        offer: { status: Status.FULFILLED, data: offerData, error: { message: null } },
        reviews: { status: Status.FULFILLED, data: [], error: { message: null } },
        neighborOffers: { status: Status.FULFILLED, data: [], error: { message: null } },
      },
      USER: {
        userComment: { status: Status.IDLE },
        authorizationStatus: 'AUTH', authInfo: { token: '12345' },
        favourites: { status: Status.FULFILLED, data: [], error: { message: null } },
        login: { status: Status.IDLE },
      },
      CITY: {city: 'Paris'},
    });

    fakeApp = (
      <Provider store={store}>
        <Router history={history}>
          <App />
        </Router>
      </Provider>
    );
  });

  it('should render `MainScreen` when user navigate to `/`', () => {
    history.push(AppRoute.MAIN);
    mockApi.get.mockImplementation(() => Promise.resolve(42));
    const { getByText } = render(fakeApp);

    expect(getByText('No places to stay available')).toBeInTheDocument();
    expect(getByText('We could not find any property available at the moment in Paris')).toBeInTheDocument();
  });

  it('should render `FavouritesScreen` when user navigate to `/favorites`', () => {
    history.push(AppRoute.FAVOURITES);
    mockApi.get.mockImplementation(() => Promise.resolve(42));
    const { getByText } = render(fakeApp);

    expect(getByText('Nothing yet saved.')).toBeInTheDocument();
    expect(getByText('Save properties to narrow down search or plan your future trips.')).toBeInTheDocument();
  });

  it('should render `RoomScreen` when user navigate to `/offer/1`', () => {
    history.push(`${AppRoute.OFFER}/1`);
    mockApi.get.mockImplementation(() => Promise.resolve(42));
    const { getByText } = render(fakeApp);

    expect(getByText('Offer title example')).toBeInTheDocument();
    expect(getByText('Some description about offer')).toBeInTheDocument();
  });

  it('should render `NotFoundScreen` when user navigate to `/404`', () => {
    history.push(AppRoute.NOT_FOUND);
    mockApi.get.mockImplementation(() => Promise.resolve(42));
    const { getByText } = render(fakeApp);

    expect(getByText('404.')).toBeInTheDocument();
    expect(getByText('Page not found')).toBeInTheDocument();
    expect(getByText('Go to main')).toBeInTheDocument();
  });
});

describe('Application Routing, NO_AUTH mode', () => {
  beforeAll(() => {
    history = createMemoryHistory();

    const mockStore = configureStore([thunk.withExtraArgument(mockApi)]);

    store = mockStore({
      OFFERS: { status: Status.FULFILLED, data: [], error: { message: null } },
      ROOM: {
        offer: { status: Status.IDLE, data: {}, error: { message: null } },
        reviews: { status: Status.IDLE, data: [], error: { message: null } },
        neighborOffers: { status: Status.IDLE, data: [], error: { message: null } },
      },
      USER: {
        userComment: { status: Status.IDLE },
        authorizationStatus: 'NO_AUTH', authInfo: { token: '12345' },
        favourites: { status: Status.FULFILLED, data: [], error: { message: null } },
        login: { status: Status.IDLE },
      },
      CITY: {city: 'Paris'},
    });

    fakeApp = (
      <Provider store={store}>
        <Router history={history}>
          <App />
        </Router>
      </Provider>
    );
  });

  it('should render `SignInScreen` when user navigate to `/login`', () => {
    history.push(AppRoute.LOGIN);
    mockApi.get.mockImplementation(() => Promise.resolve(42));
    const { getByText, getAllByText } = render(fakeApp);

    expect(getAllByText(/Sign in/i)).toHaveLength(3);
    expect(getByText('E-mail')).toBeInTheDocument();
    expect(getByText('Password')).toBeInTheDocument();
  });

});
