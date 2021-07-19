import React from 'react';
import {render} from '@testing-library/react';
import {Router} from 'react-router-dom';
import {createMemoryHistory} from 'history';
import SortMenu from './sort-menu.jsx';

describe('Component: SortMenu', () => {
  it('should render correctly', () => {
    const history = createMemoryHistory();

    const {getAllByText, getByText} = render(
      <Router history={history}>
        <SortMenu
          activeSort={'Popular'}
          setActiveSort={() => {}}
        />
      </Router>,
    );

    expect(getAllByText('Popular')).toHaveLength(2);
    expect(getByText('Price: low to high')).toBeInTheDocument();
    expect(getByText('Price: high to low')).toBeInTheDocument();
    expect(getByText('Top rated first')).toBeInTheDocument();
  });
});
