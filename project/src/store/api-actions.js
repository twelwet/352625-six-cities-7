import {ActionCreator} from './action.js';
import getOfferAdapter from '../utils/get-offer-adapter.js';
import getCommentAdapter from '../utils/get-comment-adapter.js';
import getUserAdapter from '../utils/get-user-adapter.js';
import {AuthorizationStatus, APIRoute} from '../constants.js';
import {defaultErrorState} from './reducer.js';

const prepareErrorStructure = (err, infoMessage = 'Ошибка запроса к серверу', isErrorScreenRender = true) => ({
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
      dispatch(ActionCreator.saveErrorInfo(defaultErrorState));
    })
    .catch((err) => dispatch(ActionCreator.saveErrorInfo(prepareErrorStructure(err))))
);

const fetchOfferById = (id) => (dispatch, _getState, api) => (
  api.get(`${APIRoute.HOTELS}/${id}`)
    .then(({data}) => {
      dispatch(ActionCreator.loadOffer(getOfferAdapter(data)));
      dispatch(ActionCreator.saveErrorInfo(defaultErrorState));
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
      dispatch(ActionCreator.saveErrorInfo(defaultErrorState));
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
      dispatch(ActionCreator.saveErrorInfo(defaultErrorState));
    })
    .catch((err) => dispatch(ActionCreator.saveErrorInfo(prepareErrorStructure(err))))
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
      dispatch(ActionCreator.saveErrorInfo(defaultErrorState));
    })
    .then(() => dispatch(ActionCreator.requireAuth(AuthorizationStatus.AUTH)))
    .catch((err) => dispatch(ActionCreator.saveErrorInfo(prepareErrorStructure(err, 'Ошибка авторизации, попробуйте еще раз', false))))
);

const logout = () => (dispatch, _getState, api) => (
  api.delete(APIRoute.LOGOUT)
    .then(() => localStorage.removeItem('token'))
    .then(() => dispatch(ActionCreator.logout()))
);

export {fetchOffersList, fetchOfferById, fetchNeighborOffers, fetchComments, pushComment, checkAuth, login, logout};
