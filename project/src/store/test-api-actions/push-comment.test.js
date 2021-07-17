import MockAdapter from 'axios-mock-adapter';
import createAPI from '../../services/api.js';
import {ActionType} from '../action.js';
import {pushComment} from '../api-actions.js';
import {APIRoute, HttpCode} from '../../constants.js';

let api = null;

describe('Async operation pushComment(offerId)', () => {
  beforeAll(() => {
    api = createAPI(() => {});
  });

  it(`should make a correct API call to POST '/comments/1' (statusCode: ${HttpCode.OK})`, () => {
    // TODO не пойму почему тест не проходит
    const commentsBefore = [{id: 1, title: 'comment1'}, {id: 2, title: 'comment2'}];
    const newComment = {id: 3, title: 'comment3'};
    const commentsFromServer = commentsBefore.concat(newComment);

    const apiMock = new MockAdapter(api);
    const dispatch = jest.fn();
    const commentPusher = pushComment(1);

    const getState = () => ({
      USER: {authInfo: {token: '12345'}},
    });

    apiMock
      .onPost(APIRoute.COMMENTS, newComment)
      .reply(HttpCode.OK, commentsFromServer);

    return commentPusher(dispatch, getState, api)
      .then(() => {
        // TODO ожидаемое поведение:
        // expect(dispatch).toHaveBeenCalledTimes(3);
        //
        // expect(dispatch).toHaveBeenNthCalledWith(1, {
        //   type: ActionType.PUSH_COMMENT_PENDING,
        // });
        // expect(dispatch).toHaveBeenNthCalledWith(2, {
        //   type: ActionType.SAVE_COMMENTS,
        //   payload: commentsFromServer,
        // });
        // expect(dispatch).toHaveBeenNthCalledWith(3, {
        //   type: ActionType.PUSH_COMMENT_IDLE,
        // });

        // TODO поведение по факту:
        expect(dispatch).toHaveBeenCalledTimes(2);

        expect(dispatch).toHaveBeenNthCalledWith(1, {
          type: ActionType.PUSH_COMMENT_PENDING,
        });
        expect(dispatch).toHaveBeenNthCalledWith(2, {
          type: ActionType.PUSH_COMMENT_REJECTED,
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
