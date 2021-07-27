import React from 'react';
import {render, screen} from '@testing-library/react';
import {Router} from 'react-router-dom';
import {createMemoryHistory} from 'history';
import {Header} from './header.jsx';
import userEvent from '@testing-library/user-event';

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
    const handleSignOut = jest.fn();

    const {getByText} = render(
      <Router history={history}>
        <Header authorizationStatus={authorizationStatus} authInfo={authInfo} onSignOut={handleSignOut}/>
      </Router>,
    );

    expect(getByText('Sign out')).toBeInTheDocument();

    expect(handleSignOut).not.toBeCalled();
    userEvent.click(screen.getByTestId('sign-out-link'));
    expect(handleSignOut).toBeCalled();
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
