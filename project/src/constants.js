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
};

const AppRoute = {
  MAIN: '/',
  FAVOURITES: '/favourites',
  LOGIN: '/login',
  OFFER: '/offer',
};

const HttpCode = {
  UNAUTHORIZED: 401,
};

const Status = {
  IDLE: 'IDLE',
  PENDING: 'PENDING',
  FULFILLED: 'FULFILLED',
  REJECTED: 'REJECTED',
};

export {CityName, StayType, AuthorizationStatus, BACKEND_URL, REQUEST_TIMEOUT, APIRoute, AppRoute, HttpCode, Status};
