import {ActionCreator} from './action.js';
import getOfferAdapter from '../utils/get-offer-adapter.js';
import getCommentAdapter from '../utils/get-comment-adapter.js';
import getUserAdapter from '../utils/get-user-adapter.js';
import {AuthorizationStatus, APIRoute, HttpCode} from '../constants.js';

const ErrorInfoMessage = {
  DEFAULT_MESSAGE: 'Something went wrong',
  NOT_FOUND: 'Resource not found',
  BAD_REQUEST: 'Incorrect request',
  UNHANDLED: 'Unhandled response code',
  REQUEST_PROBLEM: 'Something went wrong with request',
};

const handleError = (error, dispatch) => {
  if (error.response) {
    const {status} = error.response;
    switch (status) {
      case HttpCode.NOT_FOUND:
        dispatch(ActionCreator.loadOffersRejected(ErrorInfoMessage.NOT_FOUND));
        break;
      case HttpCode.BAD_REQUEST:
        dispatch(ActionCreator.loadOffersRejected(ErrorInfoMessage.BAD_REQUEST));
        break;
      default:
        dispatch(ActionCreator.loadOffersRejected(ErrorInfoMessage.UNHANDLED));
        break;
    }
  } else if (error.request) {
    dispatch(ActionCreator.loadOffersRejected(ErrorInfoMessage.REQUEST_PROBLEM));
  } else {
    dispatch(ActionCreator.loadOffersRejected(ErrorInfoMessage.DEFAULT_MESSAGE));
  }
};

const fetchOffersList = () => (dispatch, _getState, api) => {
  dispatch(ActionCreator.loadOffersPending());
  api.get(APIRoute.HOTELS)
    .then(({data}) => {
      const adoptedData = data.map(
        (offer) => getOfferAdapter(offer),
      );
      dispatch(ActionCreator.loadOffersFulfilled(adoptedData));
    })
    .catch((error) => handleError(error, dispatch));
};

const fetchOfferById = (id) => (dispatch, _getState, api) => (
  api.get(`${APIRoute.HOTELS}/${id}`)
    .then(({data}) => {
      dispatch(ActionCreator.loadOffer(getOfferAdapter(data)));
    })
    .catch(() => {})
);

const fetchNeighborOffers = (id) => (dispatch, _getState, api) => (
  api.get(`${APIRoute.HOTELS}/${id}/nearby`)
    .then(({data}) => {
      const adoptedData = data.map(
        (offer) => getOfferAdapter(offer),
      );
      dispatch(ActionCreator.loadNeighborOffers(adoptedData));
    })
    .catch(() => {})
);

const fetchComments = (id) => (dispatch, _getState, api) => (
  api.get(`${APIRoute.COMMENTS}/${id}`)
    .then(({data}) => {
      const adoptedData = data.map(
        (comment) => getCommentAdapter(comment),
      );
      dispatch(ActionCreator.loadComments(adoptedData));
    })
    .catch(() => {})
);

const pushComment = (review, offerId) => (dispatch, _getState, api) => (
  api.post(`${APIRoute.COMMENTS}/${offerId}`, review)
    .catch(() => {})
);

const checkAuth = () => (dispatch, _getState, api) => (
  api.get(APIRoute.LOGIN)
    .then(({data}) => {
      const adoptedData = getUserAdapter(data);
      dispatch(ActionCreator.requireAuth(AuthorizationStatus.AUTH));
      dispatch(ActionCreator.saveAuthInfo(adoptedData));
    })
    .catch(() => {})
);

const login = ({email, password}) => (dispatch, _getState, api) => (
  api.post(APIRoute.LOGIN, {email, password})
    .then(({data}) => {
      localStorage.setItem('token', data.token);
      const adoptedData = getUserAdapter(data);
      dispatch(ActionCreator.saveAuthInfo(adoptedData));
    })
    .then(() => dispatch(ActionCreator.requireAuth(AuthorizationStatus.AUTH)))
    .catch(() => {})
);

const logout = () => (dispatch, _getState, api) => (
  api.delete(APIRoute.LOGOUT)
    .then(() => localStorage.removeItem('token'))
    .then(() => dispatch(ActionCreator.logout()))
);

export {fetchOffersList, fetchOfferById, fetchNeighborOffers, fetchComments, pushComment, checkAuth, login, logout, ErrorInfoMessage};
