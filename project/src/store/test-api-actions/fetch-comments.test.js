import MockAdapter from 'axios-mock-adapter';
import createAPI from '../../services/api.js';
import {ActionType} from '../action.js';
import {fetchComments} from '../api-actions.js';
import {APIRoute, HttpCode} from '../../constants.js';
import getCommentAdapter from '../../utils/get-comment-adapter.js';
import getAdaptedData from '../../utils/get-adapted-data.js';

let api = null;

describe('Async operation fetchComments(offerId)', () => {
  beforeAll(() => {
    api = createAPI(() => {});
  });

  it(`should make a correct API call to GET '/comments/1' (statusCode: ${HttpCode.OK})`, () => {
    const comments = [{
      id: 1,
      date: '2021-06-30T16:51:35.215Z',
      rating: 4,
      comment: 'Some comment text 1',
      user: {id: 1, name: '', ['is_pro']: true, ['avatar_url']: 'img/avatar1.png'},
    }, {
      id: 2,
      date: '2021-05-06T14:00:06.215Z',
      rating: 5,
      comment: 'Some comment text 2',
      user: {id: 4, name: '', ['is_pro']: false, ['avatar_url']: 'img/avatar4.png'},
    }];

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
        expect(dispatch).toHaveBeenNthCalledWith(2, {
          type: ActionType.LOAD_COMMENTS_FULFILLED,
          payload: getAdaptedData(comments, getCommentAdapter),
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
