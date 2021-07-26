import React from 'react';
import {render, screen} from '@testing-library/react';
import ListMain from './list-main.jsx';
import {StayType, CityName} from '../../../../constants.js';

const getFakeCardMain = () => (
  <article data-testid={'fake-card-main'}/>
);

jest.mock('../../offer-card/card-main/card-main', () => getFakeCardMain);

describe('Component: ListMain', () => {
  it('should render list of 2 items', () => {
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

    const offers = [offer1, offer2];

    render(<ListMain offers={offers} setActiveOfferId={jest.fn()}/>);

    expect(screen.getAllByTestId('fake-card-main')).toHaveLength(2);
  });
});
