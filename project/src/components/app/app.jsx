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
import offersPropTypes from '../../prop-types/offers.prop.js';
import Spinner from '../ui/spinner/spinner.jsx';
import ErrorInfo from '../pages/error-info/error-info.jsx';
import {AuthorizationStatus, AppRoute, Status} from '../../constants.js';

function App({offers, authorizationStatus}) {
  const {status, data: offersData, error} = offers;
  if (status === Status.REJECTED && error.message !== null) {
    return <ErrorInfo errors={[error]}/>;
  }

  if (status === Status.PENDING || authorizationStatus === AuthorizationStatus.UNKNOWN) {
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
          render={() => <Favourites offers={offersData}/>}
        />

        <Route
          path={`${AppRoute.OFFER}/:id`}
          exact
          render={
            (localProps) => {
              const id = parseInt(localProps.match.params.id, 10);
              const offer = offersData.find((item) => item.id === id);

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
};

const mapStateToProps = (state) => ({
  offers: state.offers,
  authorizationStatus: state.authorizationStatus,
});

export {App};
export default connect(mapStateToProps, null)(App);
