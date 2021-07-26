import React from 'react';
import {render, screen} from '@testing-library/react';
import ReviewsList from './reviews-list.jsx';

const getFakeReview = () => (
  <article data-testid={'fake-review-item'}/>
);

jest.mock('../review/review', () => getFakeReview);

describe('Component: ReviewsList', () => {
  it('should render list of 3 items', () => {
    const review1 = {
      id: 1,
      date: '',
      rating: 4,
      comment: 'Text from review 1',
      user: {
        id: 1,
        name: 'name',
        isPro: true,
        avatarUrl: 'avatarUrl',
      },
    };

    const review2 = {
      id: 2,
      date: '',
      rating: 3,
      comment: 'Text from review 2',
      user: {
        id: 1,
        name: 'name',
        isPro: true,
        avatarUrl: 'avatarUrl',
      },
    };

    const review3 = {
      id: 3,
      date: '',
      rating: 5,
      comment: 'Text from review 3',
      user: {
        id: 1,
        name: 'name',
        isPro: true,
        avatarUrl: 'avatarUrl',
      },
    };

    render(<ReviewsList reviews={ [review1, review2, review3] }/>);

    expect(screen.getAllByTestId('fake-review-item')).toHaveLength(3);
  });
});
