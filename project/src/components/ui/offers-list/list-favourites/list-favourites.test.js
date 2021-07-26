import React from 'react';
import {render, screen} from '@testing-library/react';
import {Router} from 'react-router-dom';
import {createMemoryHistory} from 'history';
import ListFavourites from './list-favourites.jsx';
import {StayType, CityName} from '../../../../constants.js';
import getOffersByAllCities from '../../../../utils/get-offers-by-all-cities.js';

let history = null;

const getFakeCardFavourites = () => (
  <article data-testid={'fake-card-favourites'}/>
);

jest.mock('../../offer-card/card-favourites/card-favourites', () => getFakeCardFavourites);

describe('Component: ListFavourites', () => {
  it('should render 2 cards', () => {
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
        name: CityName.AMSTERDAM,
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

    const offers = [offer1, offer2];

    history = createMemoryHistory();

    render(
      <Router history={history}>
        <ListFavourites offersByCities={getOffersByAllCities(offers)} />
      </Router>,
    );

    expect(screen.getAllByTestId('fake-card-favourites')).toHaveLength(2);
  });
});
