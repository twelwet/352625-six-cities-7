const CityName = {
  PARIS: 'Paris',
  COLOGNE: 'Cologne',
  BRUSSELS: 'Brussels',
  AMSTERDAM: 'Amsterdam',
  HAMBURG: 'Hamburg',
  DUSSELDORF: 'Dusseldorf',
};

const StayType = {
  APARTMENT: 'apartment',
  ROOM: 'room',
  HOTEL: 'hotel',
  HOUSE: 'house',
};

const AuthorizationStatus = {
  AUTH: 'AUTH',
  NO_AUTH: 'NO_AUTH',
  UNKNOWN: 'UNKNOWN',
};

const BACKEND_URL = 'https://7.react.pages.academy/six-cities';
const REQUEST_TIMEOUT = 5000;

const APIRoute = {
  HOTELS: '/hotels',
  COMMENTS: '/comments',
  LOGIN: '/login',
  LOGOUT: '/logout',
  FAVORITE: '/favorite',
};

const AppRoute = {
  MAIN: '/',
  FAVOURITES: '/favorites',
  LOGIN: '/login',
  OFFER: '/offer',
  NOT_FOUND: '/404',
};

const HttpCode = {
  OK: 200,
  CREATED: 201,
  BAD_REQUEST: 400,
  NOT_FOUND: 404,
  INTERNAL_SERVER_ERROR: 500,
  FORBIDDEN: 403,
  UNAUTHORIZED: 401,
};

const Status = {
  IDLE: 'IDLE',
  PENDING: 'PENDING',
  FULFILLED: 'FULFILLED',
  REJECTED: 'REJECTED',
};

export {CityName, StayType, AuthorizationStatus, BACKEND_URL, REQUEST_TIMEOUT, APIRoute, AppRoute, HttpCode, Status};
