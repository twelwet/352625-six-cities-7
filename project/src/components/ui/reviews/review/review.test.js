import React from 'react';
import {render} from '@testing-library/react';
import {Router} from 'react-router-dom';
import {createMemoryHistory} from 'history';
import Review from './review.jsx';

describe('Component: Review', () => {
  it('should render correctly', () => {
    const user = {
      id: 1,
      name: 'John',
      isPro: true,
      avatarUrl: 'img/user.png',
    };
    const rating = 4;
    const comment = 'Some text';
    const date = '2021-06-30T16:51:35.215Z';

    const history = createMemoryHistory();

    const {getByText, getByAltText, getByTestId} = render(
      <Router history={history}>
        <Review
          user={user}
          rating={rating}
          comment={comment}
          date={date}
        />
      </Router>,
    );

    expect(getByText('John')).toBeInTheDocument();
    expect(getByAltText('Reviews avatar')).toHaveAttribute('src', 'img/user.png');
    expect(getByTestId('rating-bar')).toHaveStyle(`width: ${100 * rating / 5}%`);
    expect(getByText('Some text')).toBeInTheDocument();
    expect(getByText('June 2021')).toBeInTheDocument();
  });
});
