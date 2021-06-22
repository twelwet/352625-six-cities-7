export const ActionType = {
  CHANGE_CITY: 'main/change-city',
  GET_OFFERS: 'main/get-offers-by-city',
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
