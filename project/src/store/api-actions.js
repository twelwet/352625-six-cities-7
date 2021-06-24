import {ActionCreator} from './action.js';
import {APIRoute} from '../services/api.js';
import getOfferAdapter from '../utils/get-offer-adapter.js';

export const fetchOffersList = () => (dispatch, _getState, api) => (
  api.get(APIRoute.HOTELS)
    .then(({data}) => {
      const adoptedData = data.map(
        (offer) => getOfferAdapter(offer),
      );
      dispatch(ActionCreator.loadOffers(adoptedData));
    })
);
