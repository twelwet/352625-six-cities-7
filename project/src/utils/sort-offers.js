const SortType = {
  POPULAR: 'Popular',
  PRICE_LOW_TO_HIGH: 'Price: low to high',
  PRICE_HIGH_TO_LOW: 'Price: high to low',
  TOP_RATED: 'Top rated first',
};

const sorts = [
  SortType.POPULAR,
  SortType.PRICE_LOW_TO_HIGH,
  SortType.PRICE_HIGH_TO_LOW,
  SortType.TOP_RATED,
];

const SortFunction = {
  [SortType.POPULAR] : (offers) => offers.slice().sort((a, b) => a.popularity - b.popularity),
  [SortType.PRICE_LOW_TO_HIGH]: (offers) => offers.slice().sort((a, b) => a.price - b.price),
  [SortType.PRICE_HIGH_TO_LOW]: (offers) => offers.slice().sort((a, b) => b.price - a.price),
  [SortType.TOP_RATED]: (offers) => offers.slice().sort((a, b) => b.rating - a.rating),
};

const sortOffers = (offers, sortName) => SortFunction[sortName](offers);

export {sortOffers, sorts, SortType};
