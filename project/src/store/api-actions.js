import {ActionCreator} from './action.js';
import {APIRoute} from '../services/api.js';
import getOfferAdapter from '../utils/get-offer-adapter.js';
import {AuthorizationStatus} from '../constants.js';

export const fetchOffersList = () => (dispatch, _getState, api) => (
  api.get(APIRoute.HOTELS)
    .then(({data}) => {
      const adoptedData = data.map(
        (offer) => getOfferAdapter(offer),
      );
      dispatch(ActionCreator.loadOffers(adoptedData));
    })
);

export const checkAuth = () => (dispatch, _getState, api) => (
  api.get(APIRoute.LOGIN)
    .then(() => dispatch(ActionCreator.requireAuth(AuthorizationStatus.AUTH)))
    .catch(() => {})
);
