import React from 'react';
import { render } from '@testing-library/react';
import Map from './map.jsx';
import {CityName, StayType} from '../../../constants.js';

describe('Component: Map', () => {
  it('should render correctly without active pin', () => {
    const activeOfferId = null;

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

    const offer3 = {
      id: 3,
      title: 'Offer title example 3',
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

    const offers = [offer1, offer2, offer3];

    const {container} = render(<Map offers={offers} activeOfferId={activeOfferId}/>);

    const pins = [...container.firstChild.querySelectorAll('.leaflet-marker-icon')];

    expect(pins).toHaveLength(3);

    for (const pin of pins) {
      expect(pin.src).toContain('img/pin.svg');
    }

    const activePin = pins.find((pin) => pin.src.includes('img/pin-active.svg'));
    expect(activePin).toBeFalsy();
  });

  it('should render correctly with active pin', () => {
    const activeOfferId = 1;

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

    const offer3 = {
      id: 3,
      title: 'Offer title example 3',
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

    const offers = [offer1, offer2, offer3];

    const {container} = render(<Map offers={offers} activeOfferId={activeOfferId}/>);

    const pins = [...container.firstChild.querySelectorAll('.leaflet-marker-icon')];

    expect(pins).toHaveLength(3);

    const activePin = pins.find((pin) => pin.src.includes('img/pin-active.svg'));
    expect(activePin).toBeTruthy();
  });

});
