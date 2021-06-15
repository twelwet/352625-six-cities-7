import React from 'react';
import {BrowserRouter, Switch, Route} from 'react-router-dom';

import Main from '../pages/main/main.jsx';
import SignIn from '../pages/sign-in/sign-in.jsx';
import Favourites from '../pages/favourites/favourites.jsx';
import Room from '../pages/room/room.jsx';
import NotFound from '../pages/not-found/not-found.jsx';
import offersPropTypes from '../../prop-types/offers.prop.js';

function App(props) {
  return (
    <BrowserRouter>
      <Switch>
        <Route path={'/'} exact>
          <Main {...props}/>
        </Route>

        <Route path={'/login'} exact>
          <SignIn/>
        </Route>

        <Route path={'/favourites'} exact>
          <Favourites {...props}/>
        </Route>

        <Route
          path={'/offer/:id'}
          exact
          render={
            (localProps) => {
              const id = localProps.match.params.id;
              const offer = props.offers.find((item) => item.id === id);

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


export default App;
