import React from 'react';
import { render, screen } from '@testing-library/react';
import Logout from './logout.jsx';
import userEvent from '@testing-library/user-event';

describe('Component: Logout', () => {
  it('should render null with isAuth === false', () => {
    const handleSignOut = jest.fn();

    render(<Logout isAuth={false} handleSignOut={handleSignOut}/>);

    expect(screen.queryByText(/Sign out/i)).toBeNull();
  });

  it('should render correctly with isAuth === true', () => {
    const handleSignOut = jest.fn();

    render(<Logout isAuth handleSignOut={handleSignOut}/>);

    expect(screen.getByText(/Sign out/i)).toBeInTheDocument();

    expect(handleSignOut).not.toBeCalled();
    userEvent.click(screen.getByTestId('sign-out-link'));
    expect(handleSignOut).toBeCalled();
  });
});
