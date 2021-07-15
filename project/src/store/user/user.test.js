import {user} from './user';
import {
  pushCommentIdle,
  pushCommentPending,
  pushCommentRejected,
  loadFavouritesPending,
  loadFavouritesFulfilled,
  loadFavouritesRejected,
  requireAuth,
  loginPending,
  loginFulfilled,
  loginRejected,
  logout
} from '../action';
import {AuthorizationStatus, Status} from '../../constants';
import {room} from '../room/room';

describe('Reducer: user', () => {
  it('without additional parameters should return initial state', () => {
    const initialState = {
      userComment: {
        status: Status.IDLE,
      },
      favourites: {
        status: Status.IDLE,
        data: [],
        error: {
          message: null,
        },
      },
      login: {
        status: Status.IDLE,
      },
      authInfo: {},
      authorizationStatus: AuthorizationStatus.UNKNOWN,
    };

    expect(user(undefined, {})).toEqual(initialState);
  });

  it('pushCommentIdle should change userComment.status to IDLE', () => {
    const stateBefore = {
      userComment: {
        status: Status.FULFILLED,
      },
      favourites: {},
      login: {},
      authInfo: {},
      authorizationStatus: AuthorizationStatus.AUTH,
    };

    const state = {
      userComment: {
        status: Status.IDLE,
      },
      favourites: {},
      login: {},
      authInfo: {},
      authorizationStatus: AuthorizationStatus.AUTH,
    };

    expect(user(stateBefore, pushCommentIdle())).toEqual(state);
  });

  it('pushCommentPending should change userComment.status to PENDING', () => {
    const stateBefore = {
      userComment: {
        status: Status.IDLE,
      },
      favourites: {},
      login: {},
      authInfo: {},
      authorizationStatus: AuthorizationStatus.AUTH,
    };

    const state = {
      userComment: {
        status: Status.PENDING,
      },
      favourites: {},
      login: {},
      authInfo: {},
      authorizationStatus: AuthorizationStatus.AUTH,
    };

    expect(user(stateBefore, pushCommentPending())).toEqual(state);
  });

  it('pushCommentRejected should change userComment.status to REJECTED', () => {
    const stateBefore = {
      userComment: {
        status: Status.PENDING,
      },
      favourites: {},
      login: {},
      authInfo: {},
      authorizationStatus: AuthorizationStatus.AUTH,
    };

    const state = {
      userComment: {
        status: Status.REJECTED,
      },
      favourites: {},
      login: {},
      authInfo: {},
      authorizationStatus: AuthorizationStatus.AUTH,
    };

    expect(user(stateBefore, pushCommentRejected())).toEqual(state);
  });

  it('loadFavouritesPending should change favourites.status to PENDING', () => {
    const stateBefore = {
      userComment: {},
      favourites: {
        status: Status.IDLE,
        data: [],
        error: {
          message: null,
        },
      },
      login: {},
      authInfo: {},
      authorizationStatus: AuthorizationStatus.AUTH,
    };

    const state = {
      userComment: {},
      favourites: {
        status: Status.PENDING,
        data: [],
        error: {
          message: null,
        },
      },
      login: {},
      authInfo: {},
      authorizationStatus: AuthorizationStatus.AUTH,
    };

    expect(user(stateBefore, loadFavouritesPending())).toEqual(state);
  });

  it('loadFavouritesFulfilled should add data and change status to FULFILLED', () => {
    const stateBefore = {
      userComment: {},
      favourites: {
        status: Status.PENDING,
        data: [],
        error: {
          message: null,
        },
      },
      login: {},
      authInfo: {},
      authorizationStatus: AuthorizationStatus.AUTH,
    };

    const state = {
      userComment: {},
      favourites: {
        status: Status.FULFILLED,
        data: [{id: 1, title: 'offer1'}, {id: 2, title: 'offer2'}],
        error: {
          message: null,
        },
      },
      login: {},
      authInfo: {},
      authorizationStatus: AuthorizationStatus.AUTH,
    };

    expect(user(stateBefore, loadFavouritesFulfilled([
      {id: 1, title: 'offer1'},
      {id: 2, title: 'offer2'}]))).toEqual(state);
  });

  it('loadFavouritesRejected should add error and change status to REJECTED', () => {
    const stateBefore = {
      userComment: {},
      favourites: {
        status: Status.PENDING,
        data: [],
        error: {
          message: null,
        },
      },
      login: {},
      authInfo: {},
      authorizationStatus: AuthorizationStatus.AUTH,
    };

    const state = {
      userComment: {},
      favourites: {
        status: Status.REJECTED,
        data: [],
        error: {
          message: 'Error message',
        },
      },
      login: {},
      authInfo: {},
      authorizationStatus: AuthorizationStatus.AUTH,
    };

    expect(user(stateBefore, loadFavouritesRejected('Error message'))).toEqual(state);

  });

  it('requireAuth should change authentication status from UNKNOWN to AUTH or NO_AUTH', () => {
    const stateBefore = {
      userComment: {},
      favourites: {},
      login: {},
      authInfo: {},
      authorizationStatus: AuthorizationStatus.UNKNOWN,
    };

    const state = {
      userComment: {},
      favourites: {},
      login: {},
      authInfo: {},
      authorizationStatus: AuthorizationStatus.AUTH,
    };


    expect(user(stateBefore, requireAuth('AUTH'))).toEqual(state);

  });

  it('loginPending should change login.status to PENDING', () => {
    const stateBefore = {
      userComment: {},
      favourites: {},
      login: {
        status: Status.IDLE,
      },
      authInfo: {},
      authorizationStatus: AuthorizationStatus.NO_AUTH,
    };

    const state = {
      userComment: {},
      favourites: {},
      login: {
        status: Status.PENDING,
      },
      authInfo: {},
      authorizationStatus: AuthorizationStatus.NO_AUTH,
    };

    expect(user(stateBefore, loginPending())).toEqual(state);
  });

  it('loginFulfilled should change login.status to FULFILLED', () => {
    const stateBefore = {
      userComment: {},
      favourites: {},
      login: {
        status: Status.PENDING,
      },
      authInfo: {},
      authorizationStatus: AuthorizationStatus.AUTH,
    };

    const state = {
      userComment: {},
      favourites: {},
      login: {
        status: Status.FULFILLED,
      },
      authInfo: {
        id: 1,
        email: 'name@example.com',
        name: 'name',
        token: '12345qwerthbvgh',
        isPro: true,
        avatarUrl: 'https://example.com/avatar.svg',
      },
      authorizationStatus: AuthorizationStatus.AUTH,
    };

    expect(user(stateBefore, loginFulfilled({
      id: 1,
      email: 'name@example.com',
      name: 'name',
      token: '12345qwerthbvgh',
      isPro: true,
      avatarUrl: 'https://example.com/avatar.svg'
    }))).toEqual(state);
  });

  it('loginRejected should change login.status to REJECTED', () => {
    const stateBefore = {
      userComment: {},
      favourites: {},
      login: {
        status: Status.PENDING,
      },
      authInfo: {},
      authorizationStatus: AuthorizationStatus.NO_AUTH,
    };

    const state = {
      userComment: {},
      favourites: {},
      login: {
        status: Status.REJECTED,
      },
      authInfo: {},
      authorizationStatus: AuthorizationStatus.NO_AUTH,
    };

    expect(user(stateBefore, loginRejected())).toEqual(state);

  });

  it('logout should erase authInfo, authorizationStatus and login.status and favourites.data', () => {
    const stateBefore = {
      userComment: {},
      favourites: {
        status: Status.FULFILLED,
        data: [{id: 1, title: 'offer1'}, {id: 2, title: 'offer2'}],
        error: {
          message: null,
        },
      },
      login: {
        status: Status.FULFILLED,
      },
      authInfo: {
        id: 1,
        email: 'name@example.com',
        name: 'name',
        token: '12345qwerthbvgh',
        isPro: true,
        avatarUrl: 'https://example.com/avatar.svg',
      },
      authorizationStatus: AuthorizationStatus.AUTH,
    };

    const state = {
      userComment: {},
      favourites: {
        status: Status.IDLE,
        data: [],
        error: {
          message: null,
        },
      },
      login: {
        status: Status.IDLE,
      },
      authInfo: {},
      authorizationStatus: AuthorizationStatus.NO_AUTH,
    };

    expect(user(stateBefore, logout())).toEqual(state);
  });
});
