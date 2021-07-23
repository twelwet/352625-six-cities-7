import React from 'react';
import {render} from '@testing-library/react';
import {Router} from 'react-router-dom';
import configureStore from 'redux-mock-store';
import { Provider } from 'react-redux';
import {createMemoryHistory} from 'history';
import NotFound from './not-found.jsx';

const mockStore = configureStore({});

describe('Component: NotFound', () => {
  it('should render correctly', () => {
    const authorizationStatus = 'AUTH';
    const authInfo = {
      id: 1,
      email: 'email',
      name: 'name',
      avatarUrl: 'avatarUrl',
      isPro: true,
      token: '',
    };

    const history = createMemoryHistory();

    const {getByText} = render(
      <Provider store={ mockStore({ USER: { authInfo, authorizationStatus } }) }>
        <Router history={history}>
          <NotFound/>
        </Router>
      </Provider>,
    );

    expect(getByText('404.', { exact: false })).toBeInTheDocument();
    expect(getByText('Page not found', { exact: false })).toBeInTheDocument();
    expect(getByText('Go to main')).toBeInTheDocument();
  });
});
