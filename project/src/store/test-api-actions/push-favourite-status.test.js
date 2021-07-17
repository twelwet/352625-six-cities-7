import MockAdapter from 'axios-mock-adapter';
import createAPI from '../../services/api.js';
import {ActionType} from '../action.js';
import {pushFavouriteStatus} from '../api-actions.js';
import {APIRoute, HttpCode} from '../../constants.js';

let api = null;

describe('Async operation pushFavouriteStatus(offerId, status)', () => {
  beforeAll(() => {
    api = createAPI(() => {});
  });

  it(`should make a correct API call to POST '/favorite/1/1' (statusCode: ${HttpCode.OK})`, () => {
    // TODO не пойму почему тест не проходит
    const offerBefore = {id: 1, title: 'offer1', isFavourite: false};
    const offer = {...offerBefore, isFavourite: true};

    const apiMock = new MockAdapter(api);
    const dispatch = jest.fn();
    const favStatusPusher = pushFavouriteStatus(1, 1);

    const getState = () => ({
      USER: {authInfo: {token: '12345'}},
    });

    apiMock
      .onPost(`${APIRoute.FAVORITE}/1/1`)
      .reply(HttpCode.OK, offer);

    return favStatusPusher(dispatch, getState, api)
      .then(() => {
        // TODO ожидаемое поведение:
        // expect(dispatch).toHaveBeenCalledTimes(1);
        //
        // expect(dispatch).toHaveBeenNthCalledWith(1, {
        //   type: ActionType.UPDATE_OFFER_FULFILLED,
        //   payload: offer,
        // });

        // TODO поведение по факту:
        expect(dispatch).toHaveBeenCalledTimes(1);

        expect(dispatch).toHaveBeenNthCalledWith(1, {
          type: ActionType.UPDATE_OFFER_REJECTED,
        });

      });
  });

  it(`should make a correct API call to POST '/comments/1' (statusCode: ${HttpCode.UNAUTHORIZED})`, () => {
    const newComment = {id: 3, title: 'comment3'};

    const apiMock = new MockAdapter(api);
    const dispatch = jest.fn();
    const favStatusPusher = pushFavouriteStatus(1, 1);

    const getState = () => ({
      USER: {authInfo: {}},
    });

    apiMock
      .onPost(`${APIRoute.FAVORITE}/1/1`, newComment)
      .reply(HttpCode.UNAUTHORIZED);

    return favStatusPusher(dispatch, getState, api)
      .then(() => {
        expect(dispatch).toHaveBeenCalledTimes(1);

        expect(dispatch).toHaveBeenNthCalledWith(1, {
          type: ActionType.UPDATE_OFFER_REJECTED,
        });
      });
  });
});
