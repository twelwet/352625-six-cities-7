export const ActionType = {
  CHANGE_CITY: 'main/change-city',
  GET_OFFERS_BY_CITY: 'main/get-offers-by-city',
};

export const ActionCreator = {
  changeCity: (cityName) => ({
    type: ActionType.CHANGE_CITY,
    payload: cityName,
  }),
  getOffersByCity: (offers, cityName) => ({
    type: ActionType.GET_OFFERS_BY_CITY,
    payload: offers.filter((offer) => offer.city.name === cityName),
  }),
};
