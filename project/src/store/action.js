export const ActionType = {
  CHANGE_CITY: 'main/change-city',
  GET_OFFERS: 'app/get-offers',
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
};
