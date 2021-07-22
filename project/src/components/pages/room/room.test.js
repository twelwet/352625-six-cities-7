import React from 'react';
import {render} from '@testing-library/react';
import {Router} from 'react-router-dom';
import configureStore from 'redux-mock-store';
import { Provider } from 'react-redux';
import thunk from 'redux-thunk';
import {createMemoryHistory} from 'history';
import Room from './room.jsx';
import {Status, StayType, CityName} from '../../../constants.js';

let history = null;
let store = null;

const mockApi = {
  get: jest.fn(() => Promise.resolve(42)),
};

describe('Component: RoomScreen', () => {
  it('should render correctly', () => {
    mockApi.get.mockImplementation(() => Promise.resolve(42));

    const roomOffer = {
      id: 1,
      title: 'Room Offer title example',
      description: 'description',
      type: StayType.HOUSE,
      price: 100,
      previewImage: 'previewImage',
      images: ['previewImage1', 'previewImage2'],
      rating: 4,
      bedrooms: 3,
      maxAdults: 2,
      goods: ['good1 of roomOffer', 'good2  of roomOffer'],
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

    const offer1 = {
      id: 2,
      title: 'Offer title from neighborhood 1',
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
      id: 3,
      title: 'Offer title from neighborhood 2',
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

    const neighborOffers = [offer1, offer2];

    history = createMemoryHistory();

    const mockStore = configureStore([thunk.withExtraArgument(mockApi)]);

    store = mockStore({
      OFFERS: { status: Status.FULFILLED, data: [], error: { message: null } },
      ROOM: {
        offer: { status: Status.FULFILLED, data: roomOffer, error: { message: null } },
        reviews: { status: Status.FULFILLED, data: [], error: { message: null } },
        neighborOffers: { status: Status.FULFILLED, data: neighborOffers, error: { message: null } },
      },
      USER: {
        userComment: { status: Status.IDLE },
        authorizationStatus: 'NO_AUTH', authInfo: { token: '' },
        favourites: { status: Status.IDLE, data: [], error: { message: null } },
        login: { status: Status.IDLE },
      },
      CITY: {city: 'Paris'},
    });

    const {getByText} = render(
      <Provider store={store}>s
        <Router history={history}>
          <Room roomId={1}/>
        </Router>
      </Provider>,
    );

    expect(getByText('Room Offer title example')).toBeInTheDocument();
    expect(getByText('good1 of roomOffer')).toBeInTheDocument();
    expect(getByText('good2 of roomOffer')).toBeInTheDocument();

    expect(getByText('Offer title from neighborhood 1')).toBeInTheDocument();
    expect(getByText('Offer title from neighborhood 2')).toBeInTheDocument();
  });
});
