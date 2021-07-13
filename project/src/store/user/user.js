import {ActionType} from '../action.js';
import {Status, AuthorizationStatus} from '../../constants.js';

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

export const user = (state = initialState, action) => {
  switch (action.type) {
    case ActionType.PUSH_COMMENT_PENDING:
      return {
        ...state,
        userComment: {
          status: Status.PENDING,
        },
      };
    case ActionType.PUSH_COMMENT_REJECTED:
      return {
        ...state,
        userComment: {
          status: Status.REJECTED,
        },
      };
    case ActionType.PUSH_COMMENT_IDLE:
      return {
        ...state,
        userComment: {
          status: Status.IDLE,
        },
      };

    case ActionType.LOAD_FAVOURITES_PENDING:
      return {
        ...state,
        favourites: {
          ...state.favourites,
          status: Status.PENDING,
        },
      };
    case ActionType.LOAD_FAVOURITES_FULFILLED:
      return {
        ...state,
        favourites: {
          ...state.favourites,
          status: Status.FULFILLED,
          data: action.payload,
        },
      };
    case ActionType.LOAD_FAVOURITES_REJECTED:
      return {
        ...state,
        favourites: {
          ...state.favourites,
          status: Status.REJECTED,
          error: {
            message: action.payload,
          },
        },
      };

    case ActionType.REQUIRE_AUTH:
      return {
        ...state,
        authorizationStatus: action.payload,
      };

    case ActionType.LOGIN_PENDING:
      return {
        ...state,
        login: {
          status: Status.PENDING,
        },
      };
    case ActionType.LOGIN_FULFILLED:
      return {
        ...state,
        login: {
          status: Status.FULFILLED,
        },
        authInfo: action.payload,
      };
    case ActionType.LOGIN_REJECTED:
      return {
        ...state,
        login: {
          status: Status.REJECTED,
        },
        authInfo: {},
      };

    case ActionType.LOGOUT:
      return {
        ...state,
        favourites: {
          status: Status.IDLE,
          data: [],
          error: {
            message: null,
          },
        },
          login: { status: Status.IDLE },
        authorizationStatus: AuthorizationStatus.NO_AUTH,
        authInfo: {},
      };
    default:
      return state;
  }
};
