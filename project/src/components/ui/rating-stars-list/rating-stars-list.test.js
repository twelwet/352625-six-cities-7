import React from 'react';
import {render} from '@testing-library/react';
import RatingStarsList from './rating-stars-list.jsx';

describe('Component: RatingStarsList', () => {
  it('should contain 5 items', () => {
    const {getAllByTestId} = render(
      <RatingStarsList activeStar={2} changeHandler={() => {}}/>,
    );

    expect(getAllByTestId('rating-radio')).toHaveLength(5);
  });
});
