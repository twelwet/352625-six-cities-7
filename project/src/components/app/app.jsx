import React from 'react';
import {BrowserRouter, Switch, Route} from 'react-router-dom';
import {connect} from 'react-redux';
import Main from '../pages/main/main.jsx';
import SignIn from '../pages/sign-in/sign-in.jsx';
import Favourites from '../pages/favourites/favourites.jsx';
import Room from '../pages/room/room.jsx';
import NotFound from '../pages/not-found/not-found.jsx';
import offersPropTypes from '../../prop-types/offers.prop.js';
import cityPropTypes from '../../prop-types/city.prop.js';
import reviewsPropTypes from '../../prop-types/reviews.prop.js';
import citiesPropTypes from '../../prop-types/cities.prop.js';

function App({cities, city, offers, reviews}) {
  const cityOffers = offers.filter((offer) => offer.city.name === city);
  return (
    <BrowserRouter>
      <Switch>
        <Route path={'/'} exact>
          <Main
            cities={cities}
            city={city}
            offers={offers}
            cityOffers={cityOffers}
          />
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
              const id = localProps.match.params.id;
              const offer = offers.find((item) => item.id === id);

              if (!offer) {
                return <NotFound/>;
              }

              return (<Room offer={offer} offers={cityOffers} reviews={reviews}/>);
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
  cities: citiesPropTypes,
  city: cityPropTypes,
  offers: offersPropTypes,
  reviews: reviewsPropTypes,
};

const mapStateToProps = (state) => ({
  cities: state.cities,
  city: state.city,
  offers: state.offers,
  reviews: state.reviews,
});

export {App};
export default connect(mapStateToProps, null)(App);
