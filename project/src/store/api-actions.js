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

const getAdaptedData = (data, adapter) => data.map((item) => adapter(item));

const handleError = (error, dispatch, action) => {
  if (error.response) {
    const {status, config} = error.response;
    switch (status) {
      case HttpCode.NOT_FOUND:
        dispatch(action(`${status}. ${ErrorInfoMessage.NOT_FOUND}: ${config.url}`));
        break;
      case HttpCode.BAD_REQUEST:
        dispatch(action(`${status}. ${ErrorInfoMessage.BAD_REQUEST}: ${config.url}`));
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
  dispatch(ActionCreator.loadOffersPending());
  api.get(APIRoute.HOTELS)
    .then(({data}) => dispatch(ActionCreator.loadOffersFulfilled(getAdaptedData(data, getOfferAdapter))))
    .catch((error) => handleError(error, dispatch, ActionCreator.loadOffersRejected));
};

const fetchOfferById = (id) => (dispatch, _getState, api) => {
  dispatch(ActionCreator.loadOfferPending());
  api.get(`${APIRoute.HOTELS}/${id}`)
    .then(({data}) => dispatch(ActionCreator.loadOfferFulfilled(getOfferAdapter(data))))
    .catch((error) => handleError(error, dispatch, ActionCreator.loadOfferRejected));
};

const fetchNeighborOffers = (id) => (dispatch, _getState, api) => {
  dispatch(ActionCreator.loadNeighborOffersPending());
  api.get(`${APIRoute.HOTELS}/${id}/nearby`)
    .then(({data}) => dispatch(ActionCreator.loadNeighborOffersFulfilled(getAdaptedData(data, getOfferAdapter))))
    .catch((error) => handleError(error, dispatch, ActionCreator.loadNeighborOffersRejected));
};

const fetchComments = (id) => (dispatch, _getState, api) => {
  dispatch(ActionCreator.loadCommentsPending());
  api.get(`${APIRoute.COMMENTS}/${id}`)
    .then(({data}) => dispatch(ActionCreator.loadCommentsFulfilled(getAdaptedData(data, getCommentAdapter))))
    .catch((error) => handleError(error, dispatch, ActionCreator.loadCommentsRejected));
};

const pushComment = (review, offerId) => (dispatch, _getState, api) => {
  dispatch(ActionCreator.pushCommentPending());
  return api.post(`${APIRoute.COMMENTS}/${offerId}`, review)
    .then((response) => {
      dispatch(ActionCreator.saveComments(getAdaptedData(response.data, getCommentAdapter)));
      dispatch(ActionCreator.pushCommentFulfilled());
      dispatch(ActionCreator.pushCommentIdle());
      return response.status;
    })
    .catch((error) => {
      dispatch(ActionCreator.pushCommentRejected());
    });
};

const checkAuth = () => (dispatch, _getState, api) => (
  api.get(APIRoute.LOGIN)
    .then(({data}) => {
      dispatch(ActionCreator.loginFulfilled(getUserAdapter(data)));
      dispatch(ActionCreator.requireAuth(AuthorizationStatus.AUTH));
    })
    .catch(() => {})
);

const login = ({email, password}) => (dispatch, _getState, api) => {
  dispatch(ActionCreator.loginPending());
  api.post(APIRoute.LOGIN, {email, password})
    .then((response) => {
      localStorage.setItem('token', response.data.token);
      dispatch(ActionCreator.loginFulfilled(getUserAdapter(response.data)));
      dispatch(ActionCreator.requireAuth(AuthorizationStatus.AUTH));
    })
    .catch((error) => {
      dispatch(ActionCreator.loginRejected());
    });
};

const logout = () => (dispatch, _getState, api) => (
  api.delete(APIRoute.LOGOUT)
    .then(() => localStorage.removeItem('token'))
    .then(() => dispatch(ActionCreator.logout()))
    .catch(() => {})
);

export {fetchOffersList, fetchOfferById, fetchNeighborOffers, fetchComments, pushComment, checkAuth, login, logout, ErrorInfoMessage};
