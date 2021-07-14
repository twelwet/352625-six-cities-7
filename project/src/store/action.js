import {Status} from '../constants.js';

export const ActionType = {
  CHANGE_CITY: 'app/change-city',

  LOAD_OFFERS_PENDING: `api/load-offers_${Status.PENDING}`,
  LOAD_OFFERS_FULFILLED: `api/load-offers_${Status.FULFILLED}`,
  LOAD_OFFERS_REJECTED: `api/load-offers_${Status.REJECTED}`,

  LOAD_FAVOURITES_PENDING: `api/load-favourites_${Status.PENDING}`,
  LOAD_FAVOURITES_FULFILLED: `api/load-favourites_${Status.FULFILLED}`,
  LOAD_FAVOURITES_REJECTED: `api/load-favourites_${Status.REJECTED}`,

  SAVE_OFFER: 'app/save-offer',

  LOAD_OFFER_PENDING: `api/load-offer_${Status.PENDING}`,
  LOAD_OFFER_FULFILLED: `api/load-offer_${Status.FULFILLED}`,
  LOAD_OFFER_REJECTED: `api/load-offer_${Status.REJECTED}`,

  LOAD_NEIGHBOR_OFFERS_PENDING: `api/load-neighbor-offers_${Status.PENDING}`,
  LOAD_NEIGHBOR_OFFERS_FULFILLED: `api/load-neighbor-offers_${Status.FULFILLED}`,
  LOAD_NEIGHBOR_OFFERS_REJECTED: `api/load-neighbor-offers_${Status.REJECTED}`,

  LOAD_COMMENTS_PENDING: `api/load-comments_${Status.PENDING}`,
  LOAD_COMMENTS_FULFILLED: `api/load-comments_${Status.FULFILLED}`,
  LOAD_COMMENTS_REJECTED: `api/load-comments_${Status.REJECTED}`,

  PUSH_COMMENT_IDLE: `api/push-comment_${Status.IDLE}`,
  PUSH_COMMENT_PENDING: `api/push-comment_${Status.PENDING}`,
  PUSH_COMMENT_REJECTED: `api/push-comment_${Status.REJECTED}`,

  REQUIRE_AUTH: 'api/require-auth',

  LOGIN_PENDING: `api/login_${Status.PENDING}`,
  LOGIN_FULFILLED: `api/login_${Status.FULFILLED}`,
  LOGIN_REJECTED: `api/login_${Status.REJECTED}`,

  LOGOUT: 'app/logout',
  SAVE_COMMENTS: 'app/save-comments',
};

export const changeCity = (cityName) => ({
  type: ActionType.CHANGE_CITY,
  payload: cityName,
});

export const loadOffersPending = () => ({
  type: ActionType.LOAD_OFFERS_PENDING,
});

export const loadOffersFulfilled = (offers) => ({
  type: ActionType.LOAD_OFFERS_FULFILLED,
  payload: offers,
});

export const loadOffersRejected = (errorMessage) => ({
  type: ActionType.LOAD_OFFERS_REJECTED,
  payload: errorMessage,
});

export const loadFavouritesPending = () => ({
  type: ActionType.LOAD_FAVOURITES_PENDING,
});

export const loadFavouritesFulfilled = (offers) => ({
  type: ActionType.LOAD_FAVOURITES_FULFILLED,
  payload: offers,
});

export const loadFavouritesRejected = (errorMessage) => ({
  type: ActionType.LOAD_FAVOURITES_REJECTED,
  payload: errorMessage,
});

export const saveOffer = (offer) => ({
  type: ActionType.SAVE_OFFER,
  payload: offer,
});

export const loadOfferPending = () => ({
  type: ActionType.LOAD_OFFER_PENDING,
});

export const loadOfferFulfilled = (offer) => ({
  type: ActionType.LOAD_OFFER_FULFILLED,
  payload: offer,
});

export const loadOfferRejected = (errorMessage) => ({
  type: ActionType.LOAD_OFFER_REJECTED,
  payload: errorMessage,
});

export const loadNeighborOffersPending = () => ({
  type: ActionType.LOAD_NEIGHBOR_OFFERS_PENDING,
});

export const loadNeighborOffersFulfilled = (neighborOffers) => ({
  type: ActionType.LOAD_NEIGHBOR_OFFERS_FULFILLED,
  payload: neighborOffers,
});

export const loadNeighborOffersRejected = (errorMessage) => ({
  type: ActionType.LOAD_NEIGHBOR_OFFERS_REJECTED,
  payload: errorMessage,
});

export const loadCommentsPending = () => ({
  type: ActionType.LOAD_COMMENTS_PENDING,
});

export const loadCommentsFulfilled = (comments) => ({
  type: ActionType.LOAD_COMMENTS_FULFILLED,
  payload: comments,
});

export const loadCommentsRejected = (errorMessage) => ({
  type: ActionType.LOAD_COMMENTS_REJECTED,
  payload: errorMessage,
});

export const pushCommentIdle = () => ({
  type: ActionType.PUSH_COMMENT_IDLE,
});

export const pushCommentPending = () => ({
  type: ActionType.PUSH_COMMENT_PENDING,
});

export const pushCommentRejected = () => ({
  type: ActionType.PUSH_COMMENT_REJECTED,
});

export const requireAuth = (status) => ({
  type: ActionType.REQUIRE_AUTH,
  payload: status,
});

export const loginPending = () => ({
  type: ActionType.LOGIN_PENDING,
});

export const loginFulfilled = (authData) => ({
  type: ActionType.LOGIN_FULFILLED,
  payload: authData,
});

export const loginRejected = () => ({
  type: ActionType.LOGIN_REJECTED,
});

export const logout = () => ({
  type: ActionType.LOGOUT,
});

export const saveComments = (comments) => ({
  type: ActionType.SAVE_COMMENTS,
  payload: comments,
});
