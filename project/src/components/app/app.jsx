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
import offersDataPropTypes from '../../prop-types/offers-data.prop.js';
import Spinner from '../ui/spinner/spinner.jsx';
import ErrorInfo from '../pages/error-info/error-info.jsx';
import {AuthorizationStatus, AppRoute, Status} from '../../constants.js';
import {getOffersData, getOffersStatus, getOffersError} from '../../store/offers/selectors.js';
import {getAuthStatus} from '../../store/user/selectors.js';
import browserHistory from '../../browser-history.js';

function App({status, data: offersData, error, authorizationStatus}) {
  if (status === Status.REJECTED && error.message !== null) {
    return <ErrorInfo errors={[error]}/>;
  }
  // TODO переделать логику спинера, убрать загрузку fetchOffersList из index
  if (status === Status.PENDING || authorizationStatus === AuthorizationStatus.UNKNOWN) {
    return <Spinner/>;
  }

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
              // TODO обрабатывать только fetchOfferById и тп., можно порефакторить, если время позволяет
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
  status: PropTypes.string.isRequired,
  data: offersDataPropTypes,
  error: PropTypes.shape({
    message: PropTypes.string,
  }),
  authorizationStatus: PropTypes.string.isRequired,
};

const mapStateToProps = (state) => ({
  status: getOffersStatus(state),
  data: getOffersData(state),
  error: getOffersError(state),
  authorizationStatus: getAuthStatus(state),
});

export {App};
export default connect(mapStateToProps, null)(App);
