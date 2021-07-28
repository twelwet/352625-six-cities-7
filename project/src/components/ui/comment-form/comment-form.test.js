import React from 'react';
import {render, screen} from '@testing-library/react';
import {Router} from 'react-router-dom';
import {createMemoryHistory} from 'history';
import userEvent from '@testing-library/user-event';
import {CommentForm} from './comment-form';
import {Status, StayType, CityName} from '../../../constants.js';

describe('Component: CommentForm', () => {
  it('should render correctly and can send comment', () => {
    const handleClick = jest.fn(() => Promise.resolve(42));
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
        <CommentForm saveReview={handleClick} offer={offer} userComment={userComment} />
      </Router>,
    );

    const reviewLabel = screen.getByText('Your review');
    expect(reviewLabel).toBeInTheDocument();

    expect(screen.queryByDisplayValue(/Текст комментария должен содержать не мене 50 символов/i)).not.toBeInTheDocument();
    userEvent.type(screen.getByTestId('comment'), 'Текст комментария должен содержать не мене 50 символов');
    expect(screen.queryByDisplayValue(/Текст комментария должен содержать не мене 50 символов/i)).toBeInTheDocument();

    const ratingRadio = [...screen.getAllByTestId('rating-radio')][1];
    userEvent.click(ratingRadio);

    expect(handleClick).not.toBeCalled();
    userEvent.click(screen.getByTestId('send-comment'));
    expect(handleClick).toBeCalled();
  });

  it('should render special Notification when comment is rejected by server', () => {
    const handleClick = jest.fn(() => Promise.resolve(42));
    const userComment = {status: Status.REJECTED};
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

    const {getByText} = render(
      <Router history={history}>
        <CommentForm saveReview={handleClick} offer={offer} userComment={userComment} />
      </Router>,
    );

    expect(getByText('Mark the rating or write more characters')).toBeInTheDocument();
  });
});
