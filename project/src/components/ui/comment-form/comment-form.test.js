import React from 'react';
import {render, screen} from '@testing-library/react';
import {Router} from 'react-router-dom';
import {createMemoryHistory} from 'history';
import userEvent from '@testing-library/user-event';
import {CommentForm} from './comment-form.jsx';
import {Status, StayType, CityName} from '../../../constants.js';

describe('Component: CommentForm', () => {
  it('should render correctly', () => {
    const userComment = {status: Status.IDLE};
    const offer = {
      status: Status.IDLE,
      data: {
        id: 1,
        title: 'title',
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

    render(
      <Router history={history}>
        <CommentForm saveReview={() => {}} offer={offer} userComment={userComment} />
      </Router>,
    );

    const reviewLabel = screen.getByText('Your review');
    userEvent.type(screen.getByTestId('comment'), 'Текст комментария');

    expect(reviewLabel).toBeInTheDocument();
    expect(screen.getByDisplayValue(/Текст комментария/i)).toBeInTheDocument();
  });
});
