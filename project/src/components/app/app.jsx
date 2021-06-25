import React from 'react';
import {BrowserRouter, Switch, Route} from 'react-router-dom';
import {connect} from 'react-redux';
import PropTypes from 'prop-types';
import Main from '../pages/main/main.jsx';
import SignIn from '../pages/sign-in/sign-in.jsx';
import Favourites from '../pages/favourites/favourites.jsx';
import Room from '../pages/room/room.jsx';
import NotFound from '../pages/not-found/not-found.jsx';
import offersPropTypes from '../../prop-types/offers.prop.js';
import Spinner from '../ui/spinner/spinner.jsx';
import {AuthorizationStatus} from '../../constants.js';

function App({offers, authorizationStatus}) {
  if (offers.length === 0 || authorizationStatus === AuthorizationStatus.UNKNOWN) {
    return <Spinner/>;
  }

  return (
    <BrowserRouter>
      <Switch>
        <Route path={'/'} exact>
          <Main/>
        </Route>

        <Route path={'/login'} exact>
          <SignIn/>
        </Route>

        <Route path={'/favourites'} exact>
          <Favourites offers={offers}/>
        </Route>

        <Route
          path={'/offer/:id'}
          exact
          render={
            (localProps) => {
              const id = parseInt(localProps.match.params.id, 10);
              const offer = offers.find((item) => item.id === id);

              if (!offer) {
                return <NotFound/>;
              }

              return (<Room offer={offer}/>);
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
