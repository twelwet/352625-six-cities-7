export const ActionType = {
  CHANGE_CITY: 'main/change-city',
  LOAD_OFFERS: 'api/load-offers',
  LOAD_OFFER: 'api/load-offer',
  LOAD_NEIGHBOR_OFFERS: 'api/load-neighbor-offers',
  REQUIRE_AUTH: 'user/require-auth',
  SAVE_AUTH_EMAIL: 'user/save-auth-email',
  LOGOUT: 'user/logout',
  SAVE_ERROR_INFO: 'api/save-error-info',
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
  loadOffer: (offer) => ({
    type: ActionType.LOAD_OFFER,
    payload: offer,
  }),
  loadNeighborOffers: (neighborOffers) => ({
    type: ActionType.LOAD_NEIGHBOR_OFFERS,
    payload: neighborOffers,
  }),
  requireAuth: (status) => ({
    type: ActionType.REQUIRE_AUTH,
    payload: status,
  }),
  saveAuthEmail: (data) => ({
    type: ActionType.SAVE_AUTH_EMAIL,
    payload: data,
  }),
  logout: () => ({
    type: ActionType.LOGOUT,
  }),
  saveErrorInfo: (error) => ({
    type: ActionType.SAVE_ERROR_INFO,
    payload: error,
  }),
};
