import MockAdapter from 'axios-mock-adapter';
import createAPI from '../../services/api.js';
import {ActionType} from '../action.js';
import {pushComment} from '../api-actions.js';
import {APIRoute, HttpCode} from '../../constants.js';
import getAdaptedData from '../../utils/get-adapted-data.js';
import getCommentAdapter from '../../utils/get-comment-adapter.js';

let api = null;

describe('Async operation pushComment(offerId)', () => {
  beforeAll(() => {
    api = createAPI(() => {});
  });

  it(`should make a correct API call to POST '/comments/1' (statusCode: ${HttpCode.OK})`, () => {
    const commentData = {comment: 'Some comment text 3', rating: 5};

    const commentsFromServer = [{
      id: 1,
      date: '2021-06-30T16:51:35.215Z',
      rating: 4,
      comment: 'Some comment text 1',
      user: {id: 1, name: '', isPro: true, avatarUrl: 'img/avatar1.png'},
    }, {
      id: 2,
      date: '2021-05-06T14:00:06.215Z',
      rating: 5,
      comment: 'Some comment text 2',
      user: {id: 4, name: '', isPro: false, avatarUrl: 'img/avatar4.png'},
    }, {
      id: 3,
      date: '2021-05-25T13:49:20.215Z',
      rating: 4,
      comment: 'Some comment text 3',
      user: {id: 2, name: '', isPro: false, avatarUrl: 'img/avatar2.png'},
    }];

    const apiMock = new MockAdapter(api);
    const dispatch = jest.fn();
    const commentPusher = pushComment(commentData, 1);

    const getState = () => ({
      USER: {authInfo: {token: '12345'}},
    });

    apiMock
      .onPost(`${APIRoute.COMMENTS}/1`)
      .reply(HttpCode.OK, commentsFromServer);

    return commentPusher(dispatch, getState, api)
      .then(() => {
        expect(dispatch).toHaveBeenCalledTimes(3);

        expect(dispatch).toHaveBeenNthCalledWith(1, {
          type: ActionType.PUSH_COMMENT_PENDING,
        });
        expect(dispatch).toHaveBeenNthCalledWith(2, {
          type: ActionType.SAVE_COMMENTS,
          payload: getAdaptedData(commentsFromServer, getCommentAdapter),
        });
        expect(dispatch).toHaveBeenNthCalledWith(3, {
          type: ActionType.PUSH_COMMENT_IDLE,
        });
      });
  });

  it(`should make a correct API call to POST '/comments/1' (statusCode: ${HttpCode.UNAUTHORIZED})`, () => {
    const newComment = {id: 3, title: 'comment3'};

    const apiMock = new MockAdapter(api);
    const dispatch = jest.fn();
    const commentPusher = pushComment(1);

    const getState = () => ({
      USER: {authInfo: {}},
    });

    apiMock
      .onPost(`${APIRoute.COMMENTS}/1`, newComment)
      .reply(HttpCode.UNAUTHORIZED, 'Error message');

    return commentPusher(dispatch, getState, api)
      .then(() => {
        expect(dispatch).toHaveBeenCalledTimes(2);

        expect(dispatch).toHaveBeenNthCalledWith(1, {
          type: ActionType.PUSH_COMMENT_PENDING,
        });
        expect(dispatch).toHaveBeenNthCalledWith(2, {
          type: ActionType.PUSH_COMMENT_REJECTED,
        });
      });
  });
});
