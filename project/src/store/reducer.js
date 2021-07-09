import {DEFAULT_CITY} from '../settings.js';
import {ActionType} from './action.js';
import {AuthorizationStatus} from '../constants.js';
import {Status} from '../constants.js';

const initialState = {
  city: DEFAULT_CITY,
  offers: {
    status: Status.IDLE,
    data: [],
    error: {
      message: null,
    },
  },
  offer: {
    status: Status.IDLE,
    data: {},
    error: {
      message: null,
    },
  },
  neighborOffers: {
    status: Status.IDLE,
    data: [],
    error: {
      message: null,
    },
  },
  reviews: {
    status: Status.IDLE,
    data: [],
    error: {
      message: null,
    },
  },
  userComment: {
    status: Status.IDLE,
  },
  login: {
    status: Status.IDLE,
  },
  authInfo: {},
  authorizationStatus: AuthorizationStatus.UNKNOWN,
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case ActionType.CHANGE_CITY:
      return {
        ...state,
        city: action.payload,
      };

    case ActionType.LOAD_OFFERS_PENDING:
      return {
        ...state,
        offers: {
          ...state.offers,
          status: Status.PENDING,
        },
      };
    case ActionType.LOAD_OFFERS_FULFILLED:
      return {
        ...state,
        offers: {
          ...state.offers,
          ...action.payload,
        },
      };
    case ActionType.LOAD_OFFERS_REJECTED:
      return {
        ...state,
        offers: {
          ...state.offers,
          ...action.payload,
        },
      };

    case ActionType.LOAD_OFFER_PENDING:
      return {
        ...state,
        offer: {
          ...state.offer,
          status: Status.PENDING,
        },
      };
    case ActionType.LOAD_OFFER_FULFILLED:
      return {
        ...state,
        offer: {
          ...state.offer,
          ...action.payload,
        },
      };
    case ActionType.LOAD_OFFER_REJECTED:
      return {
        ...state,
        offer: {
          ...state.offer,
          ...action.payload,
        },
      };

    case ActionType.LOAD_NEIGHBOR_OFFERS_PENDING:
      return {
        ...state,
        neighborOffers: {
          ...state.neighborOffers,
          status: Status.PENDING,
        },
      };
    case ActionType.LOAD_NEIGHBOR_OFFERS_FULFILLED:
      return {
        ...state,
        neighborOffers: {
          ...state.neighborOffers,
          ...action.payload,
        },
      };
    case ActionType.LOAD_NEIGHBOR_OFFERS_REJECTED:
      return {
        ...state,
        neighborOffers: {
          ...state.neighborOffers,
          ...action.payload,
        },
      };

    case ActionType.LOAD_COMMENTS_PENDING:
      return {
        ...state,
        reviews: {
          ...state.reviews,
          status: Status.PENDING,
        },
      };
    case ActionType.LOAD_COMMENTS_FULFILLED:
      return {
        ...state,
        reviews: {
          ...state.reviews,
          ...action.payload,
        },
      };
    case ActionType.LOAD_COMMENTS_REJECTED:
      return {
        ...state,
        reviews: {
          ...state.reviews,
          ...action.payload,
        },
      };

    case ActionType.PUSH_COMMENT_IDLE:
      return {
        ...state,
        userComment: {
          status: Status.IDLE,
        },
      };
    case ActionType.PUSH_COMMENT_PENDING:
      return {
        ...state,
        userComment: {
          status: Status.PENDING,
        },
      };
    case ActionType.PUSH_COMMENT_FULFILLED:
      return {
        ...state,
        userComment: {
          status: Status.FULFILLED,
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
        login: action.payload,
      };
    case ActionType.LOGIN_FULFILLED:
      return {
        ...state,
        login: action.payload.login,
        authInfo: action.payload.authInfo,
      };
    case ActionType.LOGIN_REJECTED:
      return {
        ...state,
        login: action.payload,
        authInfo: {},
      };

    case ActionType.LOGOUT:
      return {
        ...state,
        login: action.payload,
        authorizationStatus: AuthorizationStatus.NO_AUTH,
        authInfo: {},
      };
    case ActionType.SAVE_COMMENTS:
      return {
        ...state,
        reviews: {
          ...state.reviews,
          data: action.payload,
        },
      };
    default:
      return state;
  }
};

export {reducer};
