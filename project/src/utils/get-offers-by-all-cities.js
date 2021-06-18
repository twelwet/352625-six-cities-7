const getOffersByAllCities = (offers) => {
  const cities = [...new Set(offers.map((offer) => offer.city.name))];
  return cities.map((city) => ({
    city,
    offers: offers.filter((offer) => offer.city.name === city),
  }));
};

export default getOffersByAllCities;
