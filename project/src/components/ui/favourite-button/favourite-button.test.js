import React from 'react';
import { render, screen } from '@testing-library/react';
import {FavouriteButton} from './favourite-button.jsx';
import userEvent from '@testing-library/user-event';

describe('Component: FavouriteButton', () => {
  it('should render correctly and clickable', () => {

    const onClick = jest.fn(() => Promise.resolve(42));
    render(
      <FavouriteButton
        onClick={onClick}
        offerId={1}
        status={false}
        viewData={{ width: '', height: '', name: '' }}
      />,
    );

    expect(screen.queryByText(/To bookmarks/i)).toBeInTheDocument();

    expect(onClick).not.toBeCalled();
    userEvent.click(screen.getByTestId('favourite-button'));
    expect(onClick).toBeCalled();
  });
});
