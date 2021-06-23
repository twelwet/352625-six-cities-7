import {ActionCreator} from './action.js';
import {APIRoute} from '../services/api.js';

export const fetchOffersList = () => (dispatch, _getState, api) => (
  api.get(APIRoute.HOTELS)
    .then(({data}) => dispatch(ActionCreator.loadOffers(data)))
);
