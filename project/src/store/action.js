import {Status} from '../constants.js';

export const ActionType = {
  CHANGE_CITY: 'main/change-city',
  LOAD_OFFERS_PENDING: `api/load-offers_${Status.PENDING}`,
  LOAD_OFFERS_FULFILLED: `api/load-offers_${Status.FULFILLED}`,
  LOAD_OFFERS_REJECTED: `api/load-offers_${Status.REJECTED}`,
  LOAD_OFFER: 'api/load-offer',
  LOAD_NEIGHBOR_OFFERS: 'api/load-neighbor-offers',
  LOAD_COMMENTS: 'api/load-comments',
  REQUIRE_AUTH: 'user/require-auth',
  SAVE_AUTH_INFO: 'user/save-auth-info',
  LOGOUT: 'user/logout',
  SAVE_ERROR_INFO: 'api/save-error-info',
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

  loadOffer: (offer) => ({
    type: ActionType.LOAD_OFFER,
    payload: offer,
  }),
  loadNeighborOffers: (neighborOffers) => ({
    type: ActionType.LOAD_NEIGHBOR_OFFERS,
    payload: neighborOffers,
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
  saveErrorInfo: (error) => ({
    type: ActionType.SAVE_ERROR_INFO,
    payload: error,
  }),
};
