const getFavouritesOffers = (offers) => offers.filter((offer) => offer.isFavourite === true);

export default getFavouritesOffers;
