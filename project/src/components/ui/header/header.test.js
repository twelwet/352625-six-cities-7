import React from 'react';
import {render} from '@testing-library/react';
import {Router} from 'react-router-dom';
import {createMemoryHistory} from 'history';
import {Header} from './header.jsx';

describe('Component: Header', () => {
  it('should render correctly (AUTH mode)', () => {
    const history = createMemoryHistory();
    const authorizationStatus = 'AUTH';
    const authInfo = {
      id: 1,
      email: 'email',
      name: 'name',
      avatarUrl: 'avatarUrl',
      isPro: true,
      token: '',
    };

    const {getByText} = render(
      <Router history={history}>
        <Header authorizationStatus={authorizationStatus} authInfo={authInfo} onSignOut={() => {}}/>
      </Router>,
    );

    expect(getByText('Sign out')).toBeInTheDocument();
  });

  it('should render correctly (NO_AUTH mode)', () => {
    const history = createMemoryHistory();
    const authorizationStatus = 'NO_AUTH';
    const authInfo = {
      id: 1,
      email: 'email',
      name: 'name',
      avatarUrl: 'avatarUrl',
      isPro: true,
      token: '',
    };

    const {getByText} = render(
      <Router history={history}>
        <Header authorizationStatus={authorizationStatus} authInfo={authInfo} onSignOut={() => {}}/>
      </Router>,
    );

    expect(getByText('Sign in')).toBeInTheDocument();
  });

});