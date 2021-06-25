import axios from 'axios';

const BACKEND_URL = 'https://7.react.pages.academy/six-cities';
const REQUEST_TIMEOUT = 5000;

export const APIRoute = {
  HOTELS: '/hotels',
  LOGIN: '/login',
};

const token = localStorage.getItem('token') ?? '';

export const createAPI = () => {
  const api = axios.create({
    baseURL: BACKEND_URL,
    timeout: REQUEST_TIMEOUT,
    headers: {
      'x-token': token,
    },
  });

  const onSuccess = (response) => response;

  api.interceptors.response.use(onSuccess);

  return api;
};
