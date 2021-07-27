import React from 'react';
import {render} from '@testing-library/react';
import {Router} from 'react-router-dom';
import {createMemoryHistory} from 'history';
import SortMenu from './sort-menu.jsx';
import userEvent from '@testing-library/user-event';

describe('Component: SortMenu', () => {
  it('should render correctly', () => {
    const history = createMemoryHistory();
    const handleSortClick = jest.fn();

    const {getAllByText, getByText, getByTestId} = render(
      <Router history={history}>
        <SortMenu
          activeSort={'Popular'}
          setActiveSort={handleSortClick}
        />
      </Router>,
    );

    expect(getAllByText('Popular')).toHaveLength(2);
    expect(getByText('Price: low to high')).toBeInTheDocument();
    expect(getByText('Price: high to low')).toBeInTheDocument();
    expect(getByText('Top rated first')).toBeInTheDocument();

    expect(handleSortClick).not.toBeCalled();
    userEvent.click(getByTestId('test-Top rated first'));
    expect(handleSortClick).toBeCalled();
  });
});
