import React from 'react';
import {Router as BrowserRouter, Switch, Route, Redirect} from 'react-router-dom';
import {connect} from 'react-redux';
import PropTypes from 'prop-types';
import Main from '../pages/main/main.jsx';
import SignIn from '../pages/sign-in/sign-in.jsx';
import Favourites from '../pages/favourites/favourites.jsx';
import PrivateRoute from '../ui/private-route/private-route.jsx';
import Room from '../pages/room/room.jsx';
import NotFound from '../pages/not-found/not-found.jsx';
import {AuthorizationStatus, AppRoute} from '../../constants.js';
import {getAuthStatus} from '../../store/user/selectors.js';
import browserHistory from '../../browser-history.js';

function App({authorizationStatus}) {
  return (
    <BrowserRouter history={browserHistory}>
      <Switch>
        <Route path={AppRoute.MAIN} exact>
          <Main/>
        </Route>

        <Route path={AppRoute.LOGIN} exact>
          {authorizationStatus === AuthorizationStatus.AUTH ? <Redirect to={AppRoute.MAIN}/> : <SignIn/>}
        </Route>

        <PrivateRoute
          path={AppRoute.FAVOURITES}
          exact
          render={() => <Favourites/>}
        />

        <Route
          path={`${AppRoute.OFFER}/:id`}
          exact
          render={
            (localProps) => {
              const id = parseInt(localProps.match.params.id, 10);
              return (<Room roomId={id}/>);
            }
          }
        />

        <Route path={AppRoute.NOT_FOUND}>
          <NotFound/>
        </Route>

        <Route>
          <NotFound/>
        </Route>
      </Switch>
    </BrowserRouter>
  );
}

App.propTypes = {
  authorizationStatus: PropTypes.string.isRequired,
};

const mapStateToProps = (state) => ({
  authorizationStatus: getAuthStatus(state),
});

export {App};
export default connect(mapStateToProps, null)(App);
