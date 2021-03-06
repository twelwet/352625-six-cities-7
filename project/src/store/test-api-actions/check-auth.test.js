import MockAdapter from 'axios-mock-adapter';
import createAPI from '../../services/api.js';
import {ActionType} from '../action.js';
import {checkAuth} from '../api-actions.js';
import {APIRoute, AuthorizationStatus, HttpCode} from '../../constants.js';
import getUserAdapter from '../../utils/get-user-adapter.js';

let api = null;

describe('Async operation checkAuth()', () => {
  beforeAll(() => {
    api = createAPI(() => {});
  });

  it(`should make a correct API call to GET '/login' (statusCode: ${HttpCode.OK})`, () => {
    const data = {
      id: 1,
      email: 'name@example.com',
      name: 'name',
      avatarUrl: 'img/avatar.png',
      isPro: true,
      token: 'randomString',
    };
    const apiMock = new MockAdapter(api);
    const dispatch = jest.fn();
    const checkAuthLoader = checkAuth();

    apiMock
      .onGet(APIRoute.LOGIN)
      .reply(HttpCode.OK, data);

    return checkAuthLoader(dispatch, () => {}, api)
      .then(() => {
        expect(dispatch).toHaveBeenCalledTimes(2);

        expect(dispatch).toHaveBeenNthCalledWith(1, {
          type: ActionType.LOGIN_FULFILLED,
          payload: getUserAdapter(data),
        });

        expect(dispatch).toHaveBeenNthCalledWith(2, {
          type: ActionType.REQUIRE_AUTH,
          payload: AuthorizationStatus.AUTH,
        });
      });
  });
});
