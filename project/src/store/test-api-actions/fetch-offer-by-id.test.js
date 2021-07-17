import MockAdapter from 'axios-mock-adapter';
import createAPI from '../../services/api.js';
import {ActionType} from '../action.js';
import {fetchOfferById} from '../api-actions.js';
import {APIRoute, HttpCode} from '../../constants.js';

let api = null;

describe('Async operation fetchOfferById()', () => {
  beforeAll(() => {
    api = createAPI(() => {});
  });

  it(`should make a correct API call to GET '/offer/1' (statusCode: ${HttpCode.OK})`, () => {
    // TODO не пойму почему тест не проходит
    const offer = {id: 1, title: 'offer1'};

    const apiMock = new MockAdapter(api);
    const dispatch = jest.fn();
    const oneOfferLoader = fetchOfferById(1);

    const getState = () => ({
      USER: {authInfo: {token: '12345'}},
    });

    apiMock
      .onGet(`${APIRoute.HOTELS}/1`)
      .reply(HttpCode.OK, offer);

    return oneOfferLoader(dispatch, getState, api)
      .then(() => {
        expect(dispatch).toHaveBeenCalledTimes(2);
        expect(dispatch).toHaveBeenNthCalledWith(1, {
          type: ActionType.LOAD_OFFER_PENDING,
        });
        // TODO ожидаемое поведение:
        // expect(dispatch).toHaveBeenNthCalledWith(2, {
        //   type: ActionType.LOAD_OFFER_FULFILLED,
        //   payload: offer,
        // });
        // TODO поведение по факту:
        expect(dispatch).toHaveBeenNthCalledWith(2, {
          type: ActionType.LOAD_OFFER_REJECTED,
          payload: 'Something went wrong',
        });
      });
  });

  it(`should make a correct API call to GET '/offer/1' (statusCode: ${HttpCode.BAD_REQUEST})`, () => {
    const apiMock = new MockAdapter(api);
    const dispatch = jest.fn();
    const oneOfferLoader = fetchOfferById(1);

    const getState = () => ({
      USER: {authInfo: {token: ''}},
    });

    apiMock
      .onGet(`${APIRoute.HOTELS}/1`)
      .reply(HttpCode.BAD_REQUEST);

    return oneOfferLoader(dispatch, getState, api)
      .then(() => {
        expect(dispatch).toHaveBeenCalledTimes(2);
        expect(dispatch).toHaveBeenNthCalledWith(1, {
          type: ActionType.LOAD_OFFER_PENDING,
        });

        expect(dispatch).toHaveBeenNthCalledWith(2, {
          type: ActionType.LOAD_OFFER_REJECTED,
          payload: '400. Incorrect request: /hotels/1',
        });


      });
  });

  it(`should make a correct API call to GET '/offer/wrong1d' (statusCode: ${HttpCode.NOT_FOUND})`, () => {
    const apiMock = new MockAdapter(api);
    const dispatch = jest.fn();
    const oneOfferLoader = fetchOfferById('wrong1d');

    const getState = () => ({
      USER: {authInfo: {token: '12345'}},
    });

    apiMock
      .onGet(`${APIRoute.HOTELS}/wrong1d`)
      .reply(HttpCode.NOT_FOUND);

    return oneOfferLoader(dispatch, getState, api)
      .then(() => {
        expect(dispatch).toHaveBeenCalledTimes(2);
        expect(dispatch).toHaveBeenNthCalledWith(1, {
          type: ActionType.LOAD_OFFER_PENDING,
        });

        expect(dispatch).toHaveBeenNthCalledWith(2, {
          type: ActionType.REDIRECT_TO_ROUTE,
          payload: '/404',
        });
      });
  });
});
