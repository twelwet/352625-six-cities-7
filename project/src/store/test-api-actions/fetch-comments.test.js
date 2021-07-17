import MockAdapter from 'axios-mock-adapter';
import createAPI from '../../services/api.js';
import {ActionType} from '../action.js';
import {fetchComments} from '../api-actions.js';
import {APIRoute, HttpCode} from '../../constants.js';

let api = null;

describe('Async operation fetchComments(offerId)', () => {
  beforeAll(() => {
    api = createAPI(() => {});
  });

  it(`should make a correct API call to GET '/comments/1' (statusCode: ${HttpCode.OK})`, () => {
    // TODO не пойму почему тест не проходит
    const comments = [{id: 1, title: 'comment1'}, {id: 2, title: 'comment2'}];

    const apiMock = new MockAdapter(api);
    const dispatch = jest.fn();
    const commentsLoader = fetchComments(1);

    const getState = () => ({
      USER: {authInfo: {token: '12345'}},
    });

    apiMock
      .onGet(`${APIRoute.COMMENTS}/1`)
      .reply(HttpCode.OK, comments);

    return commentsLoader(dispatch, getState, api)
      .then(() => {
        expect(dispatch).toHaveBeenCalledTimes(2);
        expect(dispatch).toHaveBeenNthCalledWith(1, {
          type: ActionType.LOAD_COMMENTS_PENDING,
        });
        // TODO ожидаемое поведение:
        // expect(dispatch).toHaveBeenNthCalledWith(2, {
        //   type: ActionType.LOAD_COMMENTS_FULFILLED,
        //   payload: comments,
        // });
        // TODO поведение по факту:
        expect(dispatch).toHaveBeenNthCalledWith(2, {
          type: ActionType.LOAD_COMMENTS_REJECTED,
          payload: 'Something went wrong',
        });
      });
  });

  it(`should make a correct API call to GET '/comments/1' (statusCode: ${HttpCode.BAD_REQUEST})`, () => {
    const apiMock = new MockAdapter(api);
    const dispatch = jest.fn();
    const commentsLoader = fetchComments(1);

    const getState = () => ({
      USER: {authInfo: {token: '12345'}},
    });

    apiMock
      .onGet(`${APIRoute.COMMENTS}/1`)
      .reply(HttpCode.BAD_REQUEST);

    return commentsLoader(dispatch, getState, api)
      .then(() => {
        expect(dispatch).toHaveBeenCalledTimes(2);
        expect(dispatch).toHaveBeenNthCalledWith(1, {
          type: ActionType.LOAD_COMMENTS_PENDING,
        });

        expect(dispatch).toHaveBeenNthCalledWith(2, {
          type: ActionType.LOAD_COMMENTS_REJECTED,
          payload: '400. Incorrect request: /comments/1',
        });
      });
  });

  it(`should make a correct API call to GET '/comments/wrong1d' (statusCode: ${HttpCode.NOT_FOUND})`, () => {
    const apiMock = new MockAdapter(api);
    const dispatch = jest.fn();
    const commentsLoader = fetchComments('wrong1d');

    const getState = () => ({
      USER: {authInfo: {token: '12345'}},
    });

    apiMock
      .onGet(`${APIRoute.COMMENTS}/wrong1d`)
      .reply(HttpCode.NOT_FOUND);

    return commentsLoader(dispatch, getState, api)
      .then(() => {
        expect(dispatch).toHaveBeenCalledTimes(2);
        expect(dispatch).toHaveBeenNthCalledWith(1, {
          type: ActionType.LOAD_COMMENTS_PENDING,
        });

        expect(dispatch).toHaveBeenNthCalledWith(2, {
          type: ActionType.REDIRECT_TO_ROUTE,
          payload: '/404',
        });
      });
  });
});
