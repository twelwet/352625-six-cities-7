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

  LOAD_COMMENTS_PENDING: `api/load-comments_${Status.PENDING}`,
  LOAD_COMMENTS_FULFILLED: `api/load-comments_${Status.FULFILLED}`,
  LOAD_COMMENTS_REJECTED: `api/load-comments_${Status.REJECTED}`,

  PUSH_COMMENT_IDLE: `api/push-comment_${Status.IDLE}`,
  PUSH_COMMENT_PENDING: `api/push-comment_${Status.PENDING}`,
  PUSH_COMMENT_FULFILLED: `api/push-comment_${Status.FULFILLED}`,
  PUSH_COMMENT_REJECTED: `api/push-comment_${Status.REJECTED}`,

  REQUIRE_AUTH: 'user/require-auth',

  LOGIN_IDLE: `user/login_${Status.IDLE}`,
  LOGIN_PENDING: `user/login_${Status.PENDING}`,
  LOGIN_FULFILLED: `user/login_${Status.FULFILLED}`,
  LOGIN_REJECTED: `user/login_${Status.REJECTED}`,

  LOGOUT: 'user/logout',
  SAVE_COMMENTS: 'room/save-comments',
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

  loadCommentsPending: () => ({
    type: ActionType.LOAD_COMMENTS_PENDING,
    payload: { status: Status.PENDING },
  }),
  loadCommentsFulfilled: (comments) => ({
    type: ActionType.LOAD_COMMENTS_FULFILLED,
    payload: { status: Status.FULFILLED, data: comments },
  }),
  loadCommentsRejected: (errorMessage) => ({
    type: ActionType.LOAD_COMMENTS_REJECTED,
    payload: { status: Status.REJECTED, error: {message: errorMessage} },
  }),

  pushCommentIdle: () => ({
    type: ActionType.PUSH_COMMENT_IDLE,
    payload: { status: Status.IDLE },
  }),
  pushCommentPending: () => ({
    type: ActionType.PUSH_COMMENT_PENDING,
    payload: { status: Status.PENDING },
  }),
  pushCommentFulfilled: () => ({
    type: ActionType.PUSH_COMMENT_FULFILLED,
    payload: { status: Status.FULFILLED },
  }),
  pushCommentRejected: () => ({
    type: ActionType.PUSH_COMMENT_REJECTED,
    payload: { status: Status.REJECTED },
  }),

  requireAuth: (status) => ({
    type: ActionType.REQUIRE_AUTH,
    payload: status,
  }),

  loginIdle: () => ({
    type: ActionType.LOGIN_IDLE,
    payload: { status: Status.IDLE },
  }),
  loginPending: () => ({
    type: ActionType.LOGIN_PENDING,
    payload: { status: Status.PENDING },
  }),
  loginFulfilled: (authData) => ({
    type: ActionType.LOGIN,
    payload: { login: {status: Status.FULFILLED}, authData },
  }),
  loginRejected: () => ({
    type: ActionType.LOGIN,
    payload: { status: Status.REJECTED },
  }),

  logout: () => ({
    type: ActionType.LOGOUT,
  }),
  saveComments: (comments) => ({
    type: ActionType.SAVE_COMMENTS,
    payload: comments,
  }),
};
