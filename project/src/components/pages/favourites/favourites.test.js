import React from 'react';
import {render} from '@testing-library/react';
import {Router} from 'react-router-dom';
import configureStore from 'redux-mock-store';
import { Provider } from 'react-redux';
import thunk from 'redux-thunk';
import {createMemoryHistory} from 'history';
import Favourites from './favourites.jsx';
import {Status, StayType, CityName} from '../../../constants.js';

let history = null;
let store = null;

const mockApi = {
  get: jest.fn(() => Promise.resolve(42)),
};

describe('Component: Favourites', () => {
  it('should render correctly (Nothing yet saved)', () => {
    mockApi.get.mockImplementation(() => Promise.resolve(42));

    history = createMemoryHistory();

    const mockStore = configureStore([thunk.withExtraArgument(mockApi)]);

    store = mockStore({
      OFFERS: { status: Status.FULFILLED, data: [], error: { message: null } },
      ROOM: {
        offer: { status: Status.FULFILLED, data: {}, error: { message: null } },
        reviews: { status: Status.FULFILLED, data: [], error: { message: null } },
        neighborOffers: { status: Status.FULFILLED, data: [], error: { message: null } },
      },
      USER: {
        userComment: { status: Status.IDLE },
        authorizationStatus: 'AUTH', authInfo: { token: '12345' },
        favourites: { status: 'FULFILLED', data: [], error: { message: null } },
        login: { status: Status.IDLE },
      },
      CITY: {city: 'Paris'},
    });

    const {getByText} = render(
      <Provider store={store}>
        <Router history={history}>
          <Favourites/>
        </Router>
      </Provider>,
    );

    expect(getByText('Nothing yet saved.')).toBeInTheDocument();
  });

  it('should render correctly (Some favourite offers are saved)', () => {
    mockApi.get.mockImplementation(() => Promise.resolve(42));

    const offer1 = {
      id: 1,
      title: 'Offer title example 1',
      description: 'description',
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

    const offer2 = {
      id: 2,
      title: 'Offer title example 2',
      description: 'description',
      type: StayType.HOUSE,
      price: 100,
      previewImage: 'previewImage',
      images: ['previewImage1', 'spreviewImage2'],
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

    const favouriteOffers = [offer1, offer2];

    history = createMemoryHistory();

    const mockStore = configureStore([thunk.withExtraArgument(mockApi)]);

    store = mockStore({
      OFFERS: { status: Status.FULFILLED, data: [], error: { message: null } },
      ROOM: {
        offer: { status: Status.FULFILLED, data: {}, error: { message: null } },
        reviews: { status: Status.FULFILLED, data: [], error: { message: null } },
        neighborOffers: { status: Status.FULFILLED, data: [], error: { message: null } },
      },
      USER: {
        userComment: { status: Status.IDLE },
        authorizationStatus: 'AUTH', authInfo: { token: '12345' },
        favourites: { status: 'FULFILLED', data: favouriteOffers, error: { message: null } },
        login: { status: Status.IDLE },
      },
      CITY: {city: 'Paris'},
    });

    const {getByText} = render(
      <Provider store={store}>
        <Router history={history}>
          <Favourites/>
        </Router>
      </Provider>,
    );

    expect(getByText('Offer title example 1')).toBeInTheDocument();
    expect(getByText('Offer title example 2')).toBeInTheDocument();
  });
});
