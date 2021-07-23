import React from 'react';
import {render} from '@testing-library/react';
import {Router} from 'react-router-dom';
import {createMemoryHistory} from 'history';
import ErrorInfo from './error-info.jsx';

describe('Component: ErrorInfo', () => {
  it('should render correctly', () => {
    const errors = [
      {message: 'Some error text 1'},
      {message: 'Some error text 2'},
    ];
    const history = createMemoryHistory();

    const {getByText} = render(
      <Router history={history}>
        <ErrorInfo
          errors={errors}
        />
      </Router>,
    );

    expect(getByText('Some error text 1')).toBeInTheDocument();
    expect(getByText('Some error text 2')).toBeInTheDocument();
  });
});
