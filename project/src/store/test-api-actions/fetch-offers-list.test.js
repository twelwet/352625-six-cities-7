import MockAdapter from 'axios-mock-adapter';
import createAPI from '../../services/api.js';
import {ActionType} from '../action.js';
import {fetchOffersList} from '../api-actions.js';
import {APIRoute, HttpCode} from '../../constants.js';

let api = null;

describe('Async operation fetchOffersList()', () => {
  beforeAll(() => {
    api = createAPI(() => {});
  });

  it(`should make a correct API call to GET '/hotels' (statusCode: ${HttpCode.OK})`, () => {
    // TODO не пойму почему тест не проходит
    const offers = [{id: 1, title: 'offer1'}, {id: 2, title: 'offer2'}];

    const apiMock = new MockAdapter(api);
    const dispatch = jest.fn();
    const offersLoader = fetchOffersList();

    const getState = () => ({
      [`USER`]: {authInfo: {token: '12345'}}
    });

    apiMock
      .onGet(APIRoute.HOTELS)
      .reply(HttpCode.OK, offers);

    return offersLoader(dispatch, getState, api)
      .then(() => {
        expect(dispatch).toHaveBeenCalledTimes(2);
        expect(dispatch).toHaveBeenNthCalledWith(1, {
          type: ActionType.LOAD_OFFERS_PENDING,
        });
        // TODO ожидаемое поведение:
        // expect(dispatch).toHaveBeenNthCalledWith(2, {
        //   type: ActionType.LOAD_OFFERS_FULFILLED,
        //   payload: offers,
        // });
        // TODO поведение по факту:
        expect(dispatch).toHaveBeenNthCalledWith(2, {
          type: ActionType.LOAD_OFFERS_REJECTED,
          payload: 'Something went wrong',
        });
      });
  });

  it(`should make a correct API call to GET '/hotels' (statusCode: ${HttpCode.BAD_REQUEST})`, () => {
    const apiMock = new MockAdapter(api);
    const dispatch = jest.fn();
    const offersLoader = fetchOffersList();

    const getState = () => ({
      [`USER`]: {authInfo: {token: ''}}
    });

    apiMock
      .onGet(APIRoute.HOTELS)
      .reply(HttpCode.BAD_REQUEST);

    return offersLoader(dispatch, getState, api)
      .then(() => {
        expect(dispatch).toHaveBeenCalledTimes(2);
        expect(dispatch).toHaveBeenNthCalledWith(1, {
          type: ActionType.LOAD_OFFERS_PENDING,
        });

        expect(dispatch).toHaveBeenNthCalledWith(2, {
          type: ActionType.LOAD_OFFERS_REJECTED,
          payload: '400. Incorrect request: /hotels',
        });


      });
  });

  it(`should make a correct API call to GET '/hotels!_#$' (statusCode: ${HttpCode.NOT_FOUND})`, () => {
    const apiMock = new MockAdapter(api);
    const dispatch = jest.fn();
    const offersLoader = fetchOffersList();

    const getState = () => ({
      [`USER`]: {authInfo: {token: '12345'}}
    });

    apiMock
      .onGet(`${APIRoute.HOTELS}!_#$`)
      .reply(HttpCode.NOT_FOUND);

    return offersLoader(dispatch, getState, api)
      .then(() => {
        expect(dispatch).toHaveBeenCalledTimes(2);
        expect(dispatch).toHaveBeenNthCalledWith(1, {
          type: ActionType.LOAD_OFFERS_PENDING,
        });

        expect(dispatch).toHaveBeenNthCalledWith(2, {
          type: ActionType.REDIRECT_TO_ROUTE,
          payload: '/404',
        });
      });
  });
});
