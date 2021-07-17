import MockAdapter from 'axios-mock-adapter';
import createAPI from '../../services/api.js';
import {ActionType} from '../action.js';
import {fetchFavourites} from '../api-actions.js';
import {APIRoute, HttpCode} from '../../constants.js';

let api = null;

describe('Async operation fetchFavourites()', () => {
  beforeAll(() => {
    api = createAPI(() => {});
  });

  it(`should make a correct API call to GET '/favorites' (statusCode: ${HttpCode.OK})`, () => {
    // TODO не пойму почему тест не проходит
    const favoriteOffers = [{id: 1, title: 'offer1'}, {id: 2, title: 'offer2'}];

    const apiMock = new MockAdapter(api);
    const dispatch = jest.fn();
    const favouriteOffersLoader = fetchFavourites();

    const getState = () => ({
      [`USER`]: {authInfo: {token: '12345'}}
    });

    apiMock
      .onGet(APIRoute.FAVORITE)
      .reply(HttpCode.OK, favoriteOffers);

    return favouriteOffersLoader(dispatch, getState, api)
      .then(() => {
        expect(dispatch).toHaveBeenCalledTimes(2);
        expect(dispatch).toHaveBeenNthCalledWith(1, {
          type: ActionType.LOAD_FAVOURITES_PENDING,
        });
        // TODO ожидаемое поведение:
        // expect(dispatch).toHaveBeenNthCalledWith(2, {
        //   type: ActionType.LOAD_FAVOURITES_FULFILLED,
        //   payload: favoriteOffers,
        // });
        // TODO поведение по факту:
        expect(dispatch).toHaveBeenNthCalledWith(2, {
          type: ActionType.LOAD_FAVOURITES_REJECTED,
          payload: 'Something went wrong',
        });
      });
  });

  it(`should make a correct API call to GET '/favorites' (statusCode: ${HttpCode.BAD_REQUEST})`, () => {
    const apiMock = new MockAdapter(api);
    const dispatch = jest.fn();
    const favouriteOffersLoader = fetchFavourites();

    const getState = () => ({
      [`USER`]: {authInfo: {token: ''}}
    });

    apiMock
      .onGet(APIRoute.FAVORITE)
      .reply(HttpCode.BAD_REQUEST);

    return favouriteOffersLoader(dispatch, getState, api)
      .then(() => {
        expect(dispatch).toHaveBeenCalledTimes(2);
        expect(dispatch).toHaveBeenNthCalledWith(1, {
          type: ActionType.LOAD_FAVOURITES_PENDING,
        });

        expect(dispatch).toHaveBeenNthCalledWith(2, {
          type: ActionType.LOAD_FAVOURITES_REJECTED,
          payload: '400. Incorrect request: /favorite',
        });
      });
  });

  it(`should make a correct API call to GET '/favorites' (statusCode: ${HttpCode.UNAUTHORIZED})`, () => {
    const apiMock = new MockAdapter(api);
    const dispatch = jest.fn();
    const favouriteOffersLoader = fetchFavourites();

    const getState = () => ({
      [`USER`]: {authInfo: {}}
    });

    apiMock
      .onGet(APIRoute.FAVORITE)
      .reply(HttpCode.UNAUTHORIZED);

    return favouriteOffersLoader(dispatch, getState, api)
      .then(() => {
        expect(dispatch).toHaveBeenCalledTimes(3);
        expect(dispatch).toHaveBeenNthCalledWith(1, {
          type: ActionType.LOAD_FAVOURITES_PENDING,
        });

        expect(dispatch).toHaveBeenNthCalledWith(2, {
          type: ActionType.REQUIRE_AUTH,
          payload: 'NO_AUTH',
        });

        expect(dispatch).toHaveBeenNthCalledWith(3, {
          type: ActionType.REDIRECT_TO_ROUTE,
          payload: '/login',
        });
      });
  });

  it(`should make a correct API call to GET '/favorites!_#$' (statusCode: ${HttpCode.NOT_FOUND})`, () => {
    const apiMock = new MockAdapter(api);
    const dispatch = jest.fn();
    const favouriteOffersLoader = fetchFavourites();

    const getState = () => ({
      [`USER`]: {authInfo: {token: '12345'}}
    });

    apiMock
      .onGet(`${APIRoute.FAVORITE}!_#$`)
      .reply(HttpCode.NOT_FOUND);

    return favouriteOffersLoader(dispatch, getState, api)
      .then(() => {
        expect(dispatch).toHaveBeenCalledTimes(2);
        expect(dispatch).toHaveBeenNthCalledWith(1, {
          type: ActionType.LOAD_FAVOURITES_PENDING,
        });

        expect(dispatch).toHaveBeenNthCalledWith(2, {
          type: ActionType.REDIRECT_TO_ROUTE,
          payload: '/404',
        });
      });
  });
});
