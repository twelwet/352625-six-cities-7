import React from 'react';
import {BrowserRouter, Switch, Route, Redirect} from 'react-router-dom';
import {connect} from 'react-redux';
import PropTypes from 'prop-types';
import Main from '../pages/main/main.jsx';
import SignIn from '../pages/sign-in/sign-in.jsx';
import Favourites from '../pages/favourites/favourites.jsx';
import PrivateRoute from '../ui/private-route/private-route.jsx';
import Room from '../pages/room/room.jsx';
import NotFound from '../pages/not-found/not-found.jsx';
import ErrorInfo from '../pages/error-info/error-info.jsx';
import offersPropTypes from '../../prop-types/offers.prop.js';
import Spinner from '../ui/spinner/spinner.jsx';
import {AuthorizationStatus, AppRoute} from '../../constants.js';

function App({offers, authorizationStatus, error}) {
  if (error.isError && error.isErrorScreenRender) {
    return <ErrorInfo error={error}/>;
  }

  if (offers.length === 0 || authorizationStatus === AuthorizationStatus.UNKNOWN) {
    return <Spinner/>;
  }

  return (
    <BrowserRouter>
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
          render={() => <Favourites offers={offers}/>}
        />

        <Route
          path={`${AppRoute.OFFER}/:id`}
          exact
          render={
            (localProps) => {
              const id = parseInt(localProps.match.params.id, 10);
              const offer = offers.find((item) => item.id === id);

              if (!offer) {
                return <NotFound/>;
              }

              return (<Room roomId={id}/>);
            }
          }
        />

        <Route>
          <NotFound/>
        </Route>
      </Switch>
    </BrowserRouter>
  );
}

App.propTypes = {
  offers: offersPropTypes,
  authorizationStatus: PropTypes.string.isRequired,
  error: PropTypes.object,
};

const mapStateToProps = (state) => ({
  error: state.error,
  offers: state.offers,
  authorizationStatus: state.authorizationStatus,
});

export {App};
export default connect(mapStateToProps, null)(App);
