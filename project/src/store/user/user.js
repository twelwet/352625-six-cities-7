import {ActionType} from '../action.js';
import {Status, AuthorizationStatus} from '../../constants.js';

const initialState = {
  userComment: {
    status: Status.IDLE,
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
        login: { status: Status.IDLE },
        authorizationStatus: AuthorizationStatus.NO_AUTH,
        authInfo: {},
      };
    case ActionType.SAVE_COMMENTS:
      return {
        ...state,
        userComment: {
          status: Status.IDLE,
        },
        reviews: {
          ...state.reviews,
          data: action.payload,
        },
      };
    default:
      return state;
  }
};
