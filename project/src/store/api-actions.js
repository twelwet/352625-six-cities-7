import {
  loadOffersPending,
  loadOffersFulfilled,
  loadOffersRejected,

  loadFavouritesPending,
  loadFavouritesFulfilled,
  loadFavouritesRejected,

  updateOffer,

  loadOfferPending,
  loadOfferFulfilled,
  loadOfferRejected,

  loadNeighborOffersPending,
  loadNeighborOffersFulfilled,
  loadNeighborOffersRejected,

  loadCommentsPending,
  loadCommentsFulfilled,
  loadCommentsRejected,

  pushCommentIdle,
  pushCommentPending,
  pushCommentRejected,

  loginPending,
  loginFulfilled,
  loginRejected,

  saveComments,
  requireAuth,
  logout as closeSession,
  redirectToRoute
} from './action.js';

import getOfferAdapter from '../utils/get-offer-adapter.js';
import getCommentAdapter from '../utils/get-comment-adapter.js';
import getUserAdapter from '../utils/get-user-adapter.js';
import {AuthorizationStatus, APIRoute, AppRoute, HttpCode} from '../constants.js';

const ErrorInfoMessage = {
  DEFAULT_MESSAGE: 'Something went wrong',
  NOT_FOUND: 'Resource not found',
  BAD_REQUEST: 'Incorrect request',
  UNHANDLED: 'Unhandled response code',
  REQUEST_PROBLEM: 'Something went wrong with request',
};

const getAdaptedData = (data, adapter) => data.map((item) => adapter(item));

const handleError = (error, dispatch, action) => {
  if (error.response) {
    const {status, config} = error.response;
    switch (status) {
      case HttpCode.NOT_FOUND:
        dispatch(redirectToRoute(AppRoute.NOT_FOUND));
        break;
      case HttpCode.BAD_REQUEST:
        dispatch(action(`${status}. ${ErrorInfoMessage.BAD_REQUEST}: ${config.url}`));
        break;
      case HttpCode.UNAUTHORIZED:
        dispatch(redirectToRoute(AppRoute.LOGIN));
        break;
      default:
        dispatch(action(`${status}. ${ErrorInfoMessage.UNHANDLED}: ${config.url}`));
        break;
    }
  } else if (error.request) {
    dispatch(action(`${ErrorInfoMessage.REQUEST_PROBLEM}: ${error.request.baseUrl}`));
  } else {
    dispatch(action(ErrorInfoMessage.DEFAULT_MESSAGE));
  }
};

const fetchOffersList = () => (dispatch, _getState, api) => {
  dispatch(loadOffersPending());
  api.get(APIRoute.HOTELS)
    .then(({data}) => dispatch(loadOffersFulfilled(getAdaptedData(data, getOfferAdapter))))
    .catch((error) => handleError(error, dispatch, loadOffersRejected));
};

const fetchFavourites = () => (dispatch, _getState, api) => {
  dispatch(loadFavouritesPending());
  const token = _getState().USER.authInfo.token;
  const config = { headers: { 'x-token': token } };
  api.get(`${APIRoute.FAVORITE}`, config)
    .then(({data}) => dispatch(loadFavouritesFulfilled(getAdaptedData(data, getOfferAdapter))))
    .catch((error) => handleError(error, dispatch, loadFavouritesRejected));
};

const fetchOfferById = (id) => (dispatch, _getState, api) => {
  dispatch(loadOfferPending());
  api.get(`${APIRoute.HOTELS}/${id}`)
    .then(({data}) => dispatch(loadOfferFulfilled(getOfferAdapter(data))))
    .catch((error) => handleError(error, dispatch, loadOfferRejected));
};

const fetchNeighborOffers = (id) => (dispatch, _getState, api) => {
  dispatch(loadNeighborOffersPending());
  api.get(`${APIRoute.HOTELS}/${id}/nearby`)
    .then(({data}) => dispatch(loadNeighborOffersFulfilled(getAdaptedData(data, getOfferAdapter))))
    .catch((error) => handleError(error, dispatch, loadNeighborOffersRejected));
};

const fetchComments = (id) => (dispatch, _getState, api) => {
  dispatch(loadCommentsPending());
  api.get(`${APIRoute.COMMENTS}/${id}`)
    .then(({data}) => dispatch(loadCommentsFulfilled(getAdaptedData(data, getCommentAdapter))))
    .catch((error) => handleError(error, dispatch, loadCommentsRejected));
};

const pushComment = (review, offerId) => (dispatch, _getState, api) => {
  dispatch(pushCommentPending());
  const token = _getState().USER.authInfo.token;
  const config = { headers: { 'x-token': token } };
  return api.post(`${APIRoute.COMMENTS}/${offerId}`, review, config)
    .then((response) => {
      dispatch(saveComments(getAdaptedData(response.data, getCommentAdapter)));
      dispatch(pushCommentIdle());
      return response.status;
    })
    .catch((error) => {
      dispatch(pushCommentRejected());
    });
};

const pushFavouriteStatus = (offerId, status, token) => (dispatch, _getState, api) => {
  const config = { headers: { 'x-token': token } };
  return api.post(`${APIRoute.FAVORITE}/${offerId}/${status}`, null, config)
    .then((response) => {
      dispatch(updateOffer(getOfferAdapter(response.data)));
      return response.status;
    })
    .catch((error) => handleError(error, dispatch, null));
};

const checkAuth = () => (dispatch, _getState, api) => (
  api.get(APIRoute.LOGIN)
    .then(({data}) => {
      dispatch(loginFulfilled(getUserAdapter(data)));
      dispatch(requireAuth(AuthorizationStatus.AUTH));
    })
    .catch(() => {})
);

const login = ({email, password}) => (dispatch, _getState, api) => {
  dispatch(loginPending());
  api.post(APIRoute.LOGIN, {email, password})
    .then((response) => {
      localStorage.setItem('token', response.data.token);
      dispatch(loginFulfilled(getUserAdapter(response.data)));
      dispatch(requireAuth(AuthorizationStatus.AUTH));
    })
    .catch((error) => {
      dispatch(loginRejected());
    });
};

const logout = () => (dispatch, _getState, api) => (
  api.delete(APIRoute.LOGOUT)
    .then(() => localStorage.removeItem('token'))
    .then(() => dispatch(closeSession()))
    .catch(() => {})
);

export {
  fetchOffersList,
  fetchFavourites,
  fetchOfferById,
  fetchNeighborOffers,
  fetchComments,
  pushComment,
  pushFavouriteStatus,
  checkAuth,
  login,
  logout
};
