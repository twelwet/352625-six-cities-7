export const ActionType = {
  CHANGE_CITY: 'main/change-city',
  LOAD_OFFERS: 'api/load-offers',
  LOAD_OFFER: 'api/load-offer',
  LOAD_NEIGHBOR_OFFERS: 'api/load-neighbor-offers',
  LOAD_COMMENTS: 'api/load-comments',
  SAVE_COMMENT: 'room/save-comment',
  REQUIRE_AUTH: 'user/require-auth',
  SAVE_AUTH_INFO: 'user/save-auth-email',
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
  loadComments: (comments) => ({
    type: ActionType.LOAD_COMMENTS,
    payload: comments,
  }),
  saveComment: (comment) => ({
    type: ActionType.SAVE_COMMENT,
    payload: comment,
  }),
  requireAuth: (status) => ({
    type: ActionType.REQUIRE_AUTH,
    payload: status,
  }),
  saveAuthInfo: (data) => ({
    type: ActionType.SAVE_AUTH_INFO,
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
