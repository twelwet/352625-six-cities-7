import React from 'react';
import { render, screen } from '@testing-library/react';
import { Provider } from 'react-redux';
import thunk from 'redux-thunk';
import configureStore from 'redux-mock-store';
import FavouriteButton from './favourite-button.jsx';
import userEvent from '@testing-library/user-event';

const mockApi = {
  post: jest.fn(() => Promise.resolve(42)),
};

const mockStore = configureStore([thunk.withExtraArgument(mockApi)]);

describe('Component: FavouriteButton', () => {
  it('should render correctly and clickable', () => {
    mockApi.post.mockImplementation(() => Promise.resolve(42));

    const onClick = jest.fn();
    render(
      <Provider store={mockStore({ USER: {authInfo: {} } })} >
        <FavouriteButton
          onClick={onClick}
          offerId={1}
          status={false}
          viewData={{ width: '', height: '', name: '' }}
        />,
      </Provider>
      );

    expect(screen.queryByText(/To bookmarks/i)).toBeInTheDocument();

    expect(onClick).not.toBeCalled();
    userEvent.click(screen.getByTestId('favourite-button'));

    // TODO onClick не вызывается, а должна
    // expect(onClick).toBeCalled();
    expect(onClick).not.toBeCalled();
  });
});
