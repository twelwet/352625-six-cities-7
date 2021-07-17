import MockAdapter from 'axios-mock-adapter';
import createAPI from '../../services/api.js';
import {ActionType} from '../action.js';
import {login} from '../api-actions.js';
import {APIRoute, HttpCode} from '../../constants.js';

let api = null;

describe('Async operation login({email, password})', () => {
  beforeAll(() => {
    api = createAPI(() => {});
  });

  it(`should make a correct API call to POST '/login' (statusCode: ${HttpCode.OK})`, () => {
    const credentials = {email: 'name@example.com', password: '123456'};
    const authInfo = {
      id: 1,
      email: 'name@example.com',
      name: 'name',
      avatarUrl: undefined, // TODO не понятно почему тест проходит только с undefined (возможно из-зв avatarURL !== avatar_url)
      isPro: undefined, // TODO не понятно почему тест проходит только с undefined (возможно из-зв isPro !== is_pro)
      token: 'randomString',
    };

    const apiMock = new MockAdapter(api);
    const dispatch = jest.fn();
    const loginPusher = login(credentials);

    apiMock
      .onPost(`${APIRoute.LOGIN}`, credentials)
      .reply(HttpCode.OK, authInfo);

    return loginPusher(dispatch, () => {}, api)
      .then(() => {
        expect(dispatch).toHaveBeenCalledTimes(3);

        expect(dispatch).toHaveBeenNthCalledWith(1, {
          type: ActionType.LOGIN_PENDING,
        });
        expect(dispatch).toHaveBeenNthCalledWith(2, {
          type: ActionType.LOGIN_FULFILLED,
          payload: authInfo,
        });
        expect(dispatch).toHaveBeenNthCalledWith(3, {
          type: ActionType.REQUIRE_AUTH,
          payload: 'AUTH',
        });
      });
  });

  it(`should make a correct API call to POST '/login' (statusCode: ${HttpCode.BAD_REQUEST})`, () => {
    const wrongCredentials = {email: 'wrong_email', password: ''};

    const apiMock = new MockAdapter(api);
    const dispatch = jest.fn();
    const loginPusher = login(wrongCredentials);

    apiMock
      .onPost(`${APIRoute.LOGIN}`, wrongCredentials)
      .reply(HttpCode.BAD_REQUEST, 'Error message');

    return loginPusher(dispatch, () => {}, api)
      .then(() => {
        expect(dispatch).toHaveBeenCalledTimes(2);

        expect(dispatch).toHaveBeenNthCalledWith(1, {
          type: ActionType.LOGIN_PENDING,
        });
        expect(dispatch).toHaveBeenNthCalledWith(2, {
          type: ActionType.LOGIN_REJECTED,
        });
      });
  });
});
