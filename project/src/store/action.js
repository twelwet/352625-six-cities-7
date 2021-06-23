export const ActionType = {
  CHANGE_CITY: 'main/change-city',
  GET_OFFERS: 'app/get-offers',
  LOAD_OFFERS: 'api/load-offers',
};

export const ActionCreator = {
  changeCity: (cityName) => ({
    type: ActionType.CHANGE_CITY,
    payload: cityName,
  }),
  getOffers: (offers) => ({
    type: ActionType.GET_OFFERS,
    payload: offers,
  }),
  loadOffers: (offers) => ({
    type: ActionType.LOAD_OFFERS,
    payload: offers,
  }),
};
