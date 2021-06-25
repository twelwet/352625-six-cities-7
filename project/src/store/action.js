export const ActionType = {
  CHANGE_CITY: 'main/change-city',
  LOAD_OFFERS: 'api/load-offers',
  REQUIRE_AUTH: 'user/require-auth',
  SAVE_AUTH_EMAIL: 'user/save-auth-email',
};

export const ActionCreator = {
  changeCity: (cityName) => ({
    type: ActionType.CHANGE_CITY,
    payload: cityName,
  }),
  loadOffers: (offers) => ({
    type: ActionType.LOAD_OFFERS,
    payload: offers,
  }),
  requireAuth: (status) => ({
    type: ActionType.REQUIRE_AUTH,
    payload: status,
  }),
  saveAuthEmail: (data) => ({
    type: ActionType.SAVE_AUTH_EMAIL,
    payload: data,
  }),
};
