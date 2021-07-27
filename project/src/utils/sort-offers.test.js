import {sortOffers, SortType} from './sort-offers.js';

describe('Function: sortOffers', () => {
  it(`return correct sort by ${SortType.POPULAR} filter`, () => {
    const mockOffers = [{popularity: 2}, {popularity: 4}, {popularity: 1}];

    expect(sortOffers(mockOffers, SortType.POPULAR)).toStrictEqual([{popularity: 1}, {popularity: 2}, {popularity: 4}]);
  });

  it(`return correct sort by ${SortType.PRICE_LOW_TO_HIGH} filter`, () => {
    const mockOffers = [{price: 150}, {price: 250}, {price: 100}];

    expect(sortOffers(mockOffers, SortType.PRICE_LOW_TO_HIGH)).toStrictEqual([{price: 100}, {price: 150}, {price: 250}]);
  });

  it(`return correct sort by ${SortType.PRICE_HIGH_TO_LOW} filter`, () => {
    const mockOffers = [{price: 150}, {price: 250}, {price: 100}];

    expect(sortOffers(mockOffers, SortType.PRICE_HIGH_TO_LOW)).toStrictEqual([{price: 250}, {price: 150}, {price: 100}]);
  });

  it(`return correct sort by ${SortType.TOP_RATED} filter`, () => {
    const mockOffers = [{rating: 2}, {rating: 3.5}, {rating: 4.5}];

    expect(sortOffers(mockOffers, SortType.TOP_RATED)).toStrictEqual([{rating: 4.5}, {rating: 3.5}, {rating: 2}]);
  });
});
