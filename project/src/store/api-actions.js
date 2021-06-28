import {ActionCreator} from './action.js';
import getOfferAdapter from '../utils/get-offer-adapter.js';
import getCommentAdapter from '../utils/get-comment-adapter.js';
import getUserAdapter from '../utils/get-user-adapter.js';
import {AuthorizationStatus, APIRoute} from '../constants.js';

const ErrorInfoMessage = {
  GET_ERROR: 'Ошибка запроса к серверу',
  LOGIN_ERROR: 'Ошибка авторизации, попробуйте еще раз',
  POST_COMMENT_ERROR: 'Ошибка отправки комментария, попробуйте еще раз',
};

const prepareErrorStructure = (err, infoMessage = ErrorInfoMessage.GET_ERROR, isErrorScreenRender = true) => ({
  isErrorScreenRender,
  isError: true,
  infoMessage,
  body: `${err.message}: ${err.config.method} ${err.config.baseURL}${err.config.url}`,
});

const fetchOffersList = () => (dispatch, _getState, api) => (
  api.get(APIRoute.HOTELS)
    .then(({data}) => {
      const adoptedData = data.map(
        (offer) => getOfferAdapter(offer),
      );
      dispatch(ActionCreator.loadOffers(adoptedData));
    })
    .catch((err) => dispatch(ActionCreator.saveErrorInfo(prepareErrorStructure(err))))
);

const fetchOfferById = (id) => (dispatch, _getState, api) => (
  api.get(`${APIRoute.HOTELS}/${id}`)
    .then(({data}) => {
      dispatch(ActionCreator.loadOffer(getOfferAdapter(data)));
    })
    .catch((err) => dispatch(ActionCreator.saveErrorInfo(prepareErrorStructure(err))))
);

const fetchNeighborOffers = (id) => (dispatch, _getState, api) => (
  api.get(`${APIRoute.HOTELS}/${id}/nearby`)
    .then(({data}) => {
      const adoptedData = data.map(
        (offer) => getOfferAdapter(offer),
      );
      dispatch(ActionCreator.loadNeighborOffers(adoptedData));
    })
    .catch((err) => dispatch(ActionCreator.saveErrorInfo(prepareErrorStructure(err))))
);

const fetchComments = (id) => (dispatch, _getState, api) => (
  api.get(`${APIRoute.COMMENTS}/${id}`)
    .then(({data}) => {
      const adoptedData = data.map(
        (comment) => getCommentAdapter(comment),
      );
      dispatch(ActionCreator.loadComments(adoptedData));
    })
    .catch((err) => dispatch(ActionCreator.saveErrorInfo(prepareErrorStructure(err))))
);

const pushComment = (review, offerId) => (dispatch, _getState, api) => (
  api.post(`${APIRoute.COMMENTS}/${offerId}`, review)
    .catch((err) => dispatch(ActionCreator.saveErrorInfo(prepareErrorStructure(err, ErrorInfoMessage.POST_COMMENT_ERROR, false))))
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
    .catch((err) => dispatch(ActionCreator.saveErrorInfo(prepareErrorStructure(err, ErrorInfoMessage.LOGIN_ERROR, false))))
);

const logout = () => (dispatch, _getState, api) => (
  api.delete(APIRoute.LOGOUT)
    .then(() => localStorage.removeItem('token'))
    .then(() => dispatch(ActionCreator.logout()))
);

export {fetchOffersList, fetchOfferById, fetchNeighborOffers, fetchComments, pushComment, checkAuth, login, logout};
