export const ActionType = {
  CHANGE_CITY: 'main/change-city',
  LOAD_OFFERS: 'api/load-offers',
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
};
