import React from 'react';
import {render} from '@testing-library/react';
import {Router} from 'react-router-dom';
import configureStore from 'redux-mock-store';
import { Provider } from 'react-redux';
import thunk from 'redux-thunk';
import {createMemoryHistory} from 'history';
import SignIn from './sign-in.jsx';
import {Status} from '../../../constants';

let history = null;
let store = null;

const mockApi = {
  get: jest.fn(() => Promise.resolve(42)),
};

describe('Component: SignInScreen', () => {
  it('should render correctly', () => {
    mockApi.get.mockImplementation(() => Promise.resolve(42));

    history = createMemoryHistory();

    const mockStore = configureStore([thunk.withExtraArgument(mockApi)]);

    store = mockStore({
      OFFERS: { status: Status.FULFILLED, data: [], error: { message: null } },
      ROOM: {
        offer: { status: Status.IDLE, data: {}, error: { message: null } },
        reviews: { status: Status.IDLE, data: [], error: { message: null } },
        neighborOffers: { status: Status.IDLE, data: [], error: { message: null } },
      },
      USER: {
        userComment: { status: Status.IDLE },
        authorizationStatus: 'NO_AUTH', authInfo: { token: '' },
        favourites: { status: Status.IDLE, data: [], error: { message: null } },
        login: { status: Status.IDLE },
      },
      CITY: {city: 'Paris'},
    });

    const {getByText, getAllByText} = render(
      <Provider store={store}>
        <Router history={history}>
          <SignIn/>
        </Router>
      </Provider>,
    );

    expect(getAllByText('Sign in')).toHaveLength(3);
    expect(getByText('E-mail')).toBeInTheDocument();
    expect(getByText('Password')).toBeInTheDocument();
  });
});
