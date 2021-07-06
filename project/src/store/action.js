import {Status} from '../constants.js';

export const ActionType = {
  CHANGE_CITY: 'main/change-city',
  LOAD_OFFERS_PENDING: `api/load-offers_${Status.PENDING}`,
  LOAD_OFFERS_FULFILLED: `api/load-offers_${Status.FULFILLED}`,
  LOAD_OFFERS_REJECTED: `api/load-offers_${Status.REJECTED}`,
  LOAD_OFFER_PENDING: `api/load-offer_${Status.PENDING}`,
  LOAD_OFFER_FULFILLED: `api/load-offer_${Status.FULFILLED}`,
  LOAD_OFFER_REJECTED: `api/load-offer_${Status.REJECTED}`,
  LOAD_NEIGHBOR_OFFERS_PENDING: `api/load-neighbor-offers_${Status.PENDING}`,
  LOAD_NEIGHBOR_OFFERS_FULFILLED: `api/load-neighbor-offers_${Status.FULFILLED}`,
  LOAD_NEIGHBOR_OFFERS_REJECTED: `api/load-neighbor-offers_${Status.REJECTED}`,
  LOAD_COMMENTS: 'api/load-comments',
  REQUIRE_AUTH: 'user/require-auth',
  SAVE_AUTH_INFO: 'user/save-auth-info',
  LOGOUT: 'user/logout',
};

export const ActionCreator = {
  changeCity: (cityName) => ({
    type: ActionType.CHANGE_CITY,
    payload: cityName,
  }),

  loadOffersPending: () => ({
    type: ActionType.LOAD_OFFERS_PENDING,
    payload: { status: Status.PENDING },
  }),
  loadOffersFulfilled: (offers) => ({
    type: ActionType.LOAD_OFFERS_FULFILLED,
    payload: { status: Status.FULFILLED, data: offers },
  }),
  loadOffersRejected: (errorMessage) => ({
    type: ActionType.LOAD_OFFERS_REJECTED,
    payload: { status: Status.REJECTED, error: {message: errorMessage} },
  }),

  loadOfferPending: () => ({
    type: ActionType.LOAD_OFFER_PENDING,
    payload: { status: Status.PENDING },
  }),
  loadOfferFulfilled: (offer) => ({
    type: ActionType.LOAD_OFFER_FULFILLED,
    payload: { status: Status.FULFILLED, data: offer },
  }),
  loadOfferRejected: (errorMessage) => ({
    type: ActionType.LOAD_OFFER_REJECTED,
    payload: { status: Status.REJECTED, error: {message: errorMessage} },
  }),

  loadNeighborOffersPending: () => ({
    type: ActionType.LOAD_NEIGHBOR_OFFERS_PENDING,
    payload: { status: Status.PENDING },
  }),
  loadNeighborOffersFulfilled: (neighborOffers) => ({
    type: ActionType.LOAD_NEIGHBOR_OFFERS_FULFILLED,
    payload: { status: Status.FULFILLED, data: neighborOffers },
  }),
  loadNeighborOffersRejected: (errorMessage) => ({
    type: ActionType.LOAD_NEIGHBOR_OFFERS_REJECTED,
    payload: { status: Status.REJECTED, error: {message: errorMessage} },
  }),

  loadComments: (comments) => ({
    type: ActionType.LOAD_COMMENTS,
    payload: comments,
  }),
  requireAuth: (status) => ({
    type: ActionType.REQUIRE_AUTH,
    payload: status,
  }),
  saveAuthInfo: (data) => ({
    type: ActionType.SAVE_AUTH_INFO,
    payload: data,
  }),
  logout: () => ({
    type: ActionType.LOGOUT,
  }),
};
