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

function App({offers, authorizationStatus, errors, isLoading}) {
  const errorsToRender = errors.filter((error) => error.isErrorScreenRender === true);
  if (errorsToRender.length > 0) {
    return <ErrorInfo errors={errorsToRender}/>;
  }

  if (isLoading.offers || isLoading.authorizationStatus) {
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
  errors: PropTypes.arrayOf(
    PropTypes.shape({
      isErrorScreenRender: PropTypes.bool,
      isError: PropTypes.bool,
      infoMessage: PropTypes.string,
      body: PropTypes.string,
    }),
  ).isRequired,
  isLoading: PropTypes.shape({
    offers: PropTypes.bool.isRequired,
    authorizationStatus: PropTypes.bool.isRequired,
    offer: PropTypes.bool.isRequired,
    neighborOffers: PropTypes.bool.isRequired,
    reviews: PropTypes.bool.isRequired,
  }),
};

const mapStateToProps = (state) => ({
  errors: state.errors,
  offers: state.offers,
  authorizationStatus: state.authorizationStatus,
  isLoading: state.isLoading,
});

export {App};
export default connect(mapStateToProps, null)(App);
