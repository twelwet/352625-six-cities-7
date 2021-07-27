import React from 'react';
import {render, screen} from '@testing-library/react';
import {Router} from 'react-router-dom';
import {createMemoryHistory} from 'history';
import {SignIn} from './sign-in.jsx';
import {Status} from '../../../constants';
import userEvent from '@testing-library/user-event';

const getFakeHeader = () => (<div>Header</div>);

jest.mock('../../ui/header/header', () => getFakeHeader);

describe('Component: SignInScreen', () => {
  it('should render correctly', () => {
    const login = { status: Status.IDLE };
    const history = createMemoryHistory();

    const {getByText, getAllByText, queryByText} = render(
      <Router history={history}>
        <SignIn onSubmit={() => {}} login={login}/>
      </Router>,
    );

    expect(getAllByText('Sign in')).toHaveLength(2);
    expect(getByText('E-mail')).toBeInTheDocument();
    expect(getByText('Password')).toBeInTheDocument();
    expect(queryByText('Please check & retype credentials')).not.toBeInTheDocument();
  });

  it('should render special Message about failed credentials validation' , () => {
    const login = { status: Status.REJECTED };
    const history = createMemoryHistory();

    const {getByText} = render(
      <Router history={history}>
        <SignIn onSubmit={() => {}} login={login}/>
      </Router>,
    );

    expect(getByText('Please check & retype credentials')).toBeInTheDocument();
  });

  it('should invoke callback on button click' , () => {
    const handleSubmit = jest.fn();
    const login = { status: Status.IDLE };
    const history = createMemoryHistory();

    render(
      <Router history={history}>
        <SignIn onSubmit={handleSubmit} login={login}/>
      </Router>,
    );

    expect(handleSubmit).not.toBeCalled();
    userEvent.click(screen.getByTestId('send-credentials'));
    expect(handleSubmit).toBeCalled();
  });
});
