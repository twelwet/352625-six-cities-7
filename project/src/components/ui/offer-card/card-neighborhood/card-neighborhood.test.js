import React from 'react';
import { render, screen } from '@testing-library/react';
import CardNeighborhood from './card-neighborhood.jsx';
import {CityName, StayType} from '../../../../constants';

const getFakeOfferCard = () => (
  <article data-testid={'fake-offer-card'}/>
);

jest.mock('../offer-card', () => getFakeOfferCard);

describe('Component: CardNeighborhood', () => {
  it('should proxy FakeOfferCard correctly', () => {
    const offerData = {
      id: 1,
      title: 'Offer title example',
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

    render(<CardNeighborhood data={offerData}/>);

    expect(screen.getByTestId('fake-offer-card')).toBeInTheDocument();
  });
});
