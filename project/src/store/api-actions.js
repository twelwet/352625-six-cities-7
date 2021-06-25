import {ActionCreator} from './action.js';
import getOfferAdapter from '../utils/get-offer-adapter.js';
import {AuthorizationStatus, APIRoute} from '../constants.js';

const fetchOffersList = () => (dispatch, _getState, api) => (
  api.get(APIRoute.HOTELS)
    .then(({data}) => {
      const adoptedData = data.map(
        (offer) => getOfferAdapter(offer),
      );
      dispatch(ActionCreator.loadOffers(adoptedData));
    })
);

const checkAuth = () => (dispatch, _getState, api) => (
  api.get(APIRoute.LOGIN)
    .then(() => dispatch(ActionCreator.requireAuth(AuthorizationStatus.AUTH)))
    .catch(() => {})
);

export {fetchOffersList, checkAuth};
