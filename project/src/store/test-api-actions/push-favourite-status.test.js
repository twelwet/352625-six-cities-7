import MockAdapter from 'axios-mock-adapter';
import createAPI from '../../services/api.js';
import {ActionType} from '../action.js';
import {pushFavouriteStatus} from '../api-actions.js';
import {APIRoute, HttpCode} from '../../constants.js';
import getOfferAdapter from '../../utils/get-offer-adapter.js';
import {StayType} from '../../constants.js';

let api = null;

describe('Async operation pushFavouriteStatus(offerId, status)', () => {
  beforeAll(() => {
    api = createAPI(() => {});
  });

  it(`should make a correct API call to POST '/favorite/1/1' (statusCode: ${HttpCode.OK})`, () => {
    const offerBefore = {
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
      isFavourite: false,
    };

    const offer = {...offerBefore, isFavourite: true};

    const apiMock = new MockAdapter(api);
    const dispatch = jest.fn();
    const favStatusPusher = pushFavouriteStatus(1, 1);

    const getState = () => ({
      USER: {authInfo: {token: '12345'}},
    });

    apiMock
      .onPost(`${APIRoute.FAVORITE}/1/1`)
      .reply(HttpCode.OK, offer);

    return favStatusPusher(dispatch, getState, api)
      .then(() => {
        expect(dispatch).toHaveBeenCalledTimes(1);

        expect(dispatch).toHaveBeenNthCalledWith(1, {
          type: ActionType.UPDATE_OFFER_FULFILLED,
          payload: getOfferAdapter(offer),
        });
      });
  });

  it(`should make a correct API call to POST '/comments/1' (statusCode: ${HttpCode.UNAUTHORIZED})`, () => {
    const newComment = {id: 3, title: 'comment3'};

    const apiMock = new MockAdapter(api);
    const dispatch = jest.fn();
    const favStatusPusher = pushFavouriteStatus(1, 1);

    const getState = () => ({
      USER: {authInfo: {}},
    });

    apiMock
      .onPost(`${APIRoute.FAVORITE}/1/1`, newComment)
      .reply(HttpCode.UNAUTHORIZED);

    return favStatusPusher(dispatch, getState, api)
      .then(() => {
        expect(dispatch).toHaveBeenCalledTimes(1);

        expect(dispatch).toHaveBeenNthCalledWith(1, {
          type: ActionType.UPDATE_OFFER_REJECTED,
        });
      });
  });
});
