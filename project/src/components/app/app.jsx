import React from 'react';
import {BrowserRouter, Switch, Route} from 'react-router-dom';
import {connect} from 'react-redux';
import Main from '../pages/main/main.jsx';
import SignIn from '../pages/sign-in/sign-in.jsx';
import Favourites from '../pages/favourites/favourites.jsx';
import Room from '../pages/room/room.jsx';
import NotFound from '../pages/not-found/not-found.jsx';
import offersPropTypes from '../../prop-types/offers.prop.js';

function App({offers}) {
  if (offers.length === 0) {
    return (<p>Loading...</p>);
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
};

const mapStateToProps = (state) => ({
  offers: state.offers,
});

export {App};
export default connect(mapStateToProps, null)(App);
