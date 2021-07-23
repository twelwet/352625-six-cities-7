import React from 'react';
import {render} from '@testing-library/react';
import {Router} from 'react-router-dom';
import configureStore from 'redux-mock-store';
import { Provider } from 'react-redux';
import {createMemoryHistory} from 'history';
import OfferCard from './offer-card.jsx';
import {Status, StayType, CityName} from '../../../constants.js';

const mockStore = configureStore({});

describe('Component: OfferCard', () => {
  it('should render correctly', () => {
    const viewData = {
      cardWidth: '260',
      cardHeight: '200',
      classNames: {
        mainBlock: 'cities__place-card',
        imageBlock: 'cities__image-wrapper',
        infoBlock: '',
      },
    };
    const offer = {
      status: Status.IDLE,
      data: {
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
      },
      error: {
        message: null,
      },
    };

    const authInfo = {
      id: 1,
      email: 'email',
      name: 'name',
      avatarUrl: 'avatarUrl',
      isPro: true,
      token: '',
    };

    const history = createMemoryHistory();

    const {getByText} = render(
      <Provider store={mockStore({USER: authInfo})} >
        <Router history={history}>
          <OfferCard
            viewData={viewData}
            data={offer.data}
            setActiveOfferId={() => {}}
          />
        </Router>
      </Provider>,
    );

    expect(getByText('Rating')).toBeInTheDocument();
    expect(getByText('Offer title example')).toBeInTheDocument();
    expect(getByText('House')).toBeInTheDocument();
    expect(getByText(/€100/)).toBeInTheDocument();
  });
});
