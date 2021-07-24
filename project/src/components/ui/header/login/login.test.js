import React from 'react';
import { render, screen } from '@testing-library/react';
import {Router, Switch, Route} from 'react-router-dom';
import {createMemoryHistory} from 'history';
import Login from './login.jsx';
import userEvent from '@testing-library/user-event';
import {AppRoute} from '../../../../constants.js';

let history;

describe('Component: Logo', () => {
  beforeAll(() => {
    history = createMemoryHistory();
  });

  it('should render correctly with isAuth === false', () => {
    render(
      <Router history={history}>
        <Login isAuth={false}/>
      </Router>);

    expect(screen.getByText(/Sign in/i)).toBeInTheDocument();
    expect(screen.getByRole('link')).toBeInTheDocument();
  });

  it('should render correctly with isAuth === true', () => {
    render(
      <Router history={history}>
        <Login isAuth email={'name@example.com'}/>
      </Router>);

    expect(screen.getByText(/name@example.com/i)).toBeInTheDocument();
    expect(screen.getByRole('link')).toBeInTheDocument();
  });

  it(`should redirect to ${AppRoute.LOGIN} url when unAuth user clicked to link`, () => {
    history.push('/fake');
    render(
      <Router history={history}>
        <Switch>
          <Route path={AppRoute.LOGIN} exact>
            <h1>This is login page</h1>
          </Route>
          <Route>
            <Login isAuth={false}/>
          </Route>
        </Switch>
      </Router>,
    );

    expect(screen.queryByText(/This is login page/i)).not.toBeInTheDocument();
    userEvent.click(screen.getByRole('link'));
    expect(screen.queryByText(/This is login page/i)).toBeInTheDocument();
  });

  it(`should redirect to ${AppRoute.FAVOURITES} url when auth user clicked to link`, () => {
    history.push('/fake');
    render(
      <Router history={history}>
        <Switch>
          <Route path={AppRoute.FAVOURITES} exact>
            <h1>This is Favourites page</h1>
          </Route>
          <Route>
            <Login isAuth email={'name@example.com'}/>
          </Route>
        </Switch>
      </Router>,
    );

    expect(screen.queryByText(/This is Favourites page/i)).not.toBeInTheDocument();
    userEvent.click(screen.getByRole('link'));
    expect(screen.queryByText(/This is Favourites page/i)).toBeInTheDocument();
  });
});
