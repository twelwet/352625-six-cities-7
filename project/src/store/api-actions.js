import {ActionCreator} from './action.js';
import getOfferAdapter from '../utils/get-offer-adapter.js';
import {AuthorizationStatus, AppRoute} from '../constants.js';

const fetchOffersList = () => (dispatch, _getState, api) => (
  api.get(AppRoute.HOTELS)
    .then(({data}) => {
      const adoptedData = data.map(
        (offer) => getOfferAdapter(offer),
      );
      dispatch(ActionCreator.loadOffers(adoptedData));
    })
);

const checkAuth = () => (dispatch, _getState, api) => (
  api.get(AppRoute.LOGIN)
    .then(({data}) => {
      dispatch(ActionCreator.requireAuth(AuthorizationStatus.AUTH));
      dispatch(ActionCreator.saveAuthEmail(data.email));
    })
    .catch(() => {})
);

const login = ({email, password}) => (dispatch, _getState, api) => (
  api.post(AppRoute.LOGIN, {email, password})
    .then(({data}) => {
      localStorage.setItem('token', data.token);
      dispatch(ActionCreator.saveAuthEmail(data.email));
    })
    .then(() => dispatch(ActionCreator.requireAuth(AuthorizationStatus.AUTH)))
);

export {fetchOffersList, checkAuth, login};
