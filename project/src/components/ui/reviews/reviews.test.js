import React from 'react';
import {render} from '@testing-library/react';
import {Router} from 'react-router-dom';
import configureStore from 'redux-mock-store';
import { Provider } from 'react-redux';
import {createMemoryHistory} from 'history';
import Reviews from './reviews.jsx';
import {CityName, Status, StayType} from '../../../constants';

const mockStore = configureStore({});

describe('Component: Reviews', () => {
  it('should render correctly, status: NO_AUTH', () => {
    const review1 = {
      id: 1,
      date: '2021-06-30T16:51:35.215Z',
      rating: 3,
      comment: 'Some text from comment1',
      user: {
        id: 1,
        name: 'John',
        isPro: true,
        avatarUrl: 'img/user1.png',
      },
    };
    const review2 = {
      id: 2,
      date: '2021-05-25T16:51:35.215Z',
      rating: 3,
      comment: 'Some text from comment2',
      user: {
        id: 1,
        name: 'John',
        isPro: true,
        avatarUrl: 'img/user1.png',
      },
    };
    const reviews = [review1, review2];

    const history = createMemoryHistory();

    const {getByText, getAllByText} = render(
      <Router history={history}>
        <Reviews
          reviews={reviews}
          authorizationStatus={'NO_AUTH'}
        />
      </Router>,
    );

    expect(getByText('Some text from comment1')).toBeInTheDocument();
    expect(getByText('Some text from comment2')).toBeInTheDocument();
    expect(getAllByText('John')).toHaveLength(2);
  });

  it('should render correctly, status: AUTH', () => {
    const review1 = {
      id: 1,
      date: '2021-06-30T16:51:35.215Z',
      rating: 3,
      comment: 'Some text from comment1',
      user: {
        id: 1,
        name: 'John',
        isPro: true,
        avatarUrl: 'img/user1.png',
      },
    };
    const review2 = {
      id: 2,
      date: '2021-05-25T16:51:35.215Z',
      rating: 3,
      comment: 'Some text from comment2',
      user: {
        id: 1,
        name: 'John',
        isPro: true,
        avatarUrl: 'img/user1.png',
      },
    };
    const reviews = [review1, review2];
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

    const history = createMemoryHistory();

    const {getByText} = render(
      <Provider store={mockStore({ROOM: { offer }, USER: {userComment: { status: 'IDLE' }}})}>
        <Router history={history}>
          <Reviews
            reviews={reviews}
            authorizationStatus={'AUTH'}
          />
        </Router>
      </Provider>,
    );

    expect(getByText('Your review')).toBeInTheDocument();
    expect(getByText('To submit review please make sure to set', { exact: false })).toBeInTheDocument();
  });
});
