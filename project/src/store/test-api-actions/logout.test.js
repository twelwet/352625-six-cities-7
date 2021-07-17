import MockAdapter from 'axios-mock-adapter';
import createAPI from '../../services/api.js';
import {ActionType} from '../action.js';
import {logout} from '../api-actions.js';
import {APIRoute, HttpCode} from '../../constants.js';

let api = null;

describe('Async operation logout()', () => {
  beforeAll(() => {
    api = createAPI(() => {});
  });

  it(`should make a correct API call to DELETE '/logout' (statusCode: ${HttpCode.OK})`, () => {
    const apiMock = new MockAdapter(api);
    const dispatch = jest.fn();
    const logoutPusher = logout();

    apiMock
      .onDelete(`${APIRoute.LOGOUT}`)
      .reply(HttpCode.OK);

    return logoutPusher(dispatch, () => {}, api)
      .then(() => {
        expect(dispatch).toHaveBeenCalledTimes(1);

        expect(dispatch).toHaveBeenNthCalledWith(1, {
          type: ActionType.LOGOUT,
        });
      });
  });
});
