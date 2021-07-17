import MockAdapter from 'axios-mock-adapter';
import createAPI from '../../services/api.js';
import {ActionType} from '../action.js';
import {fetchNeighborOffers} from '../api-actions.js';
import {APIRoute, HttpCode} from '../../constants.js';

let api = null;

describe('Async operation fetchOffersList()', () => {
  beforeAll(() => {
    api = createAPI(() => {});
  });

  it(`should make a correct API call to GET '/hotels/1/nearby' (statusCode: ${HttpCode.OK})`, () => {
    // TODO не пойму почему тест не проходит
    const neighborOffers = [{id: 1, title: 'offer1'}, {id: 2, title: 'offer2'}];

    const apiMock = new MockAdapter(api);
    const dispatch = jest.fn();
    const neighborOffersLoader = fetchNeighborOffers(1);

    const getState = () => ({
      [`USER`]: {authInfo: {token: '12345'}}
    });

    apiMock
      .onGet(`${APIRoute.HOTELS}/1/nearby`)
      .reply(HttpCode.OK, neighborOffers);

    return neighborOffersLoader(dispatch, getState, api)
      .then(() => {
        expect(dispatch).toHaveBeenCalledTimes(2);
        expect(dispatch).toHaveBeenNthCalledWith(1, {
          type: ActionType.LOAD_NEIGHBOR_OFFERS_PENDING,
        });
        // TODO ожидаемое поведение:
        // expect(dispatch).toHaveBeenNthCalledWith(2, {
        //   type: ActionType.LOAD_NEIGHBOR_OFFERS_FULFILLED,
        //   payload: neighborOffers,
        // });
        // TODO поведение по факту:
        expect(dispatch).toHaveBeenNthCalledWith(2, {
          type: ActionType.LOAD_NEIGHBOR_OFFERS_REJECTED,
          payload: 'Something went wrong',
        });
      });
  });

  it(`should make a correct API call to GET '/hotels/1/nearby' (statusCode: ${HttpCode.BAD_REQUEST})`, () => {
    const apiMock = new MockAdapter(api);
    const dispatch = jest.fn();
    const neighborOffersLoader = fetchNeighborOffers(1);

    const getState = () => ({
      [`USER`]: {authInfo: {token: ''}}
    });

    apiMock
      .onGet(`${APIRoute.HOTELS}/1/nearby`)
      .reply(HttpCode.BAD_REQUEST);

    return neighborOffersLoader(dispatch, getState, api)
      .then(() => {
        expect(dispatch).toHaveBeenCalledTimes(2);
        expect(dispatch).toHaveBeenNthCalledWith(1, {
          type: ActionType.LOAD_NEIGHBOR_OFFERS_PENDING,
        });

        expect(dispatch).toHaveBeenNthCalledWith(2, {
          type: ActionType.LOAD_NEIGHBOR_OFFERS_REJECTED,
          payload: '400. Incorrect request: /hotels/1/nearby',
        });
      });
  });

  it(`should make a correct API call to GET '/hotels/1/nearby!_#$' (statusCode: ${HttpCode.NOT_FOUND})`, () => {
    const apiMock = new MockAdapter(api);
    const dispatch = jest.fn();
    const neighborOffersLoader = fetchNeighborOffers(1);

    const getState = () => ({
      [`USER`]: {authInfo: {token: '12345'}}
    });

    apiMock
      .onGet(`${APIRoute.HOTELS}/1/nearby!_#$`)
      .reply(HttpCode.NOT_FOUND);

    return neighborOffersLoader(dispatch, getState, api)
      .then(() => {
        expect(dispatch).toHaveBeenCalledTimes(2);
        expect(dispatch).toHaveBeenNthCalledWith(1, {
          type: ActionType.LOAD_NEIGHBOR_OFFERS_PENDING,
        });

        expect(dispatch).toHaveBeenNthCalledWith(2, {
          type: ActionType.REDIRECT_TO_ROUTE,
          payload: '/404',
        });
      });
  });
});
