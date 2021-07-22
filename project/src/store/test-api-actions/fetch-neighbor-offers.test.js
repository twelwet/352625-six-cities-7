import MockAdapter from 'axios-mock-adapter';
import createAPI from '../../services/api.js';
import {ActionType} from '../action.js';
import {fetchNeighborOffers} from '../api-actions.js';
import {APIRoute, HttpCode} from '../../constants.js';
import {StayType} from '../../constants';
import getAdaptedData from '../../utils/get-adapted-data.js';
import getOfferAdapter from '../../utils/get-offer-adapter.js';

let api = null;

describe('Async operation fetchOffersList()', () => {
  beforeAll(() => {
    api = createAPI(() => {});
  });

  it(`should make a correct API call to GET '/hotels/1/nearby' (statusCode: ${HttpCode.OK})`, () => {
    const neighborOffers = [{
      id: 1,
      title: 'offer1',
      description: 'Some description of offer1',
      type: StayType.HOUSE,
      price: 100,
      previewImage: '/img/offer1-preview1.png',
      images: ['/img/offer1-preview1.png', '/img/offer1-preview2.png', '/img/offer1-preview3.png'],
      rating: 4,
      bedrooms: 2,
      maxAdults: 2,
      goods: ['W-Fi', 'TV', 'Towels'],
      host: {
        id: 1,
        name: 'John',
        isPro: false,
        avatarUrl: 'img/avatar1.png',
      },
      city: {
        name: 'Paris',
        location: {
          latitude: 52,
          longitude: 24,
          zoom: 3,
        },
      },
      location: {
        latitude: 52,
        longitude: 24,
        zoom: 3,
      },
      isPremium: 'true',
      isFavourite: true,
    }, {
      id: 2,
      title: 'offer2',
      description: 'Some description of offer2',
      type: StayType.HOTEL,
      price: 150,
      previewImage: '/img/offer2-preview1.png',
      images: ['/img/offer2-preview1.png', '/img/offer2-preview2.png'],
      rating: 5,
      bedrooms: 1,
      maxAdults: 2,
      goods: ['W-Fi', 'TV', 'Towels'],
      host: {
        id: 2,
        name: 'Monika',
        isPro: true,
        avatarUrl: 'img/avatar2.png',
      },
      city: {
        name: 'Amsterdam',
        location: {
          latitude: 52,
          longitude: 24,
          zoom: 3,
        },
      },
      location: {
        latitude: 52,
        longitude: 24,
        zoom: 3,
      },
      isPremium: false,
      isFavourite: true,
    }];

    const apiMock = new MockAdapter(api);
    const dispatch = jest.fn();
    const neighborOffersLoader = fetchNeighborOffers(1);

    const getState = () => ({
      USER: {authInfo: {token: '12345'}},
    });

    apiMock
      .onGet(`${APIRoute.HOTELS}/1/nearby`)
      .reply(HttpCode.OK, neighborOffers);

    return neighborOffersLoader(dispatch, getState, api)
      .then(() => {
        expect(dispatch).toHaveBeenCalledTimes(2);
        expect(dispatch).toHaveBeenNthCalledWith(1, {
          type: ActionType.LOAD_NEIGHBOR_OFFERS_PENDING,
        });
        expect(dispatch).toHaveBeenNthCalledWith(2, {
          type: ActionType.LOAD_NEIGHBOR_OFFERS_FULFILLED,
          payload: getAdaptedData(neighborOffers, getOfferAdapter),
        });
      });
  });

  it(`should make a correct API call to GET '/hotels/1/nearby' (statusCode: ${HttpCode.BAD_REQUEST})`, () => {
    const apiMock = new MockAdapter(api);
    const dispatch = jest.fn();
    const neighborOffersLoader = fetchNeighborOffers(1);

    const getState = () => ({
      USER: {authInfo: {token: ''}},
    });

    apiMock
      .onGet(`${APIRoute.HOTELS}/1/nearby`)
      .reply(HttpCode.BAD_REQUEST);

    return neighborOffersLoader(dispatch, getState, api)
      .then(() => {
        expect(dispatch).toHaveBeenCalledTimes(2);
        expect(dispatch).toHaveBeenNthCalledWith(1, {
          type: ActionType.LOAD_NEIGHBOR_OFFERS_PENDING,
        });

        expect(dispatch).toHaveBeenNthCalledWith(2, {
          type: ActionType.LOAD_NEIGHBOR_OFFERS_REJECTED,
          payload: '400. Incorrect request: /hotels/1/nearby',
        });
      });
  });

  it(`should make a correct API call to GET '/hotels/1/nearby!_#$' (statusCode: ${HttpCode.NOT_FOUND})`, () => {
    const apiMock = new MockAdapter(api);
    const dispatch = jest.fn();
    const neighborOffersLoader = fetchNeighborOffers(1);

    const getState = () => ({
      USER: {authInfo: {token: '12345'}},
    });

    apiMock
      .onGet(`${APIRoute.HOTELS}/1/nearby!_#$`)
      .reply(HttpCode.NOT_FOUND);

    return neighborOffersLoader(dispatch, getState, api)
      .then(() => {
        expect(dispatch).toHaveBeenCalledTimes(2);
        expect(dispatch).toHaveBeenNthCalledWith(1, {
          type: ActionType.LOAD_NEIGHBOR_OFFERS_PENDING,
        });

        expect(dispatch).toHaveBeenNthCalledWith(2, {
          type: ActionType.REDIRECT_TO_ROUTE,
          payload: '/404',
        });
      });
  });
});
