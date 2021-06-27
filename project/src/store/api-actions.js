import {ActionCreator} from './action.js';
import getOfferAdapter from '../utils/get-offer-adapter.js';
import getCommentAdapter from '../utils/get-comment-adapter.js';
import {AuthorizationStatus, APIRoute} from '../constants.js';

const prepareErrorStructure = (err, isErrorScreenRender = false) => ({
  isErrorScreenRender,
  isError: true,
  infoMessage: 'Ошибка запроса к серверу',
  errorObject: err,
});

const fetchOffersList = () => (dispatch, _getState, api) => (
  api.get(APIRoute.HOTELS)
    .then(({data}) => {
      const adoptedData = data.map(
        (offer) => getOfferAdapter(offer),
      );
      dispatch(ActionCreator.loadOffers(adoptedData));
    })
    .catch((err) => dispatch(ActionCreator.saveErrorInfo(prepareErrorStructure(err, true))))
);

const fetchOfferById = (id) => (dispatch, _getState, api) => (
  api.get(`${APIRoute.HOTELS}/${id}`)
    .then(
      ({data}) => dispatch(ActionCreator.loadOffer(getOfferAdapter(data))),
    )
    .catch((err) => dispatch(ActionCreator.saveErrorInfo(prepareErrorStructure(err, true))))
);

const fetchNeighborOffers = (id) => (dispatch, _getState, api) => (
  api.get(`${APIRoute.HOTELS}/${id}/nearby`)
    .then(({data}) => {
      const adoptedData = data.map(
        (offer) => getOfferAdapter(offer),
      );
      dispatch(ActionCreator.loadNeighborOffers(adoptedData));
    })
    .catch((err) => dispatch(ActionCreator.saveErrorInfo(prepareErrorStructure(err, true))))
);

const fetchComments = (id) => (dispatch, _getState, api) => (
  api.get(`${APIRoute.COMMENTS}/${id}`)
    .then(({data}) => {
      const adoptedData = data.map(
        (comment) => getCommentAdapter(comment),
      );
      dispatch(ActionCreator.loadComments(adoptedData));
    })
    .catch((err) => dispatch(ActionCreator.saveErrorInfo(prepareErrorStructure(err, true))))
);

const checkAuth = () => (dispatch, _getState, api) => (
  api.get(APIRoute.LOGIN)
    .then(({data}) => {
      dispatch(ActionCreator.requireAuth(AuthorizationStatus.AUTH));
      dispatch(ActionCreator.saveAuthEmail(data.email));
    })
    .catch(() => {})
);

const login = ({email, password}) => (dispatch, _getState, api) => (
  api.post(APIRoute.LOGIN, {email, password})
    .then(({data}) => {
      localStorage.setItem('token', data.token);
      dispatch(ActionCreator.saveAuthEmail(data.email));
    })
    .then(() => dispatch(ActionCreator.requireAuth(AuthorizationStatus.AUTH)))
    .catch((err) => dispatch(ActionCreator.saveErrorInfo(prepareErrorStructure(err, false))))
);

const logout = () => (dispatch, _getState, api) => (
  api.delete(APIRoute.LOGOUT)
    .then(() => localStorage.removeItem('token'))
    .then(() => dispatch(ActionCreator.logout()))
);

export {fetchOffersList, fetchOfferById, fetchNeighborOffers, fetchComments, checkAuth, login, logout};
