import React from 'react';
import {render} from '@testing-library/react';
import {Router} from 'react-router-dom';
import configureStore from 'redux-mock-store';
import { Provider } from 'react-redux';
import thunk from 'redux-thunk';
import {createMemoryHistory} from 'history';
import Favourites from './favourites.jsx';
import {Status, StayType, CityName} from '../../../constants.js';

const mockStore = configureStore([thunk]);

describe('Component: Favourites', () => {
  // TODO доделать кейс в задании про тестирование асинхронных экшенов
  it.skip('should render correctly', () => {
    const offer1 = {
      status: Status.IDLE,
      data: {
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
      },
      error: {
        message: null,
      },
    };

    const offer2 = {
      status: Status.IDLE,
      data: {
        id: 2,
        title: 'Offer title example 2',
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
      },
      error: {
        message: null,
      },
    };

    const favouriteOffers = [offer1, offer2];
    const favourites = { status: 'IDLE', data: favouriteOffers, error: { message: null } };

    const history = createMemoryHistory();

    const {getByText} = render(
      <Provider store={ mockStore({USER: {favourites}}) }>
        <Router history={history}>
          <Favourites
            getFavourites={() => {}}
            authorizationStatus={'NO_AUTH'}
          />
        </Router>
      </Provider>,
    );

    expect(getByText('Favorites (empty)')).toBeInTheDocument();
  });
});
