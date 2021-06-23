import {ActionCreator} from './action.js';
import {APIRoute} from '../services/api.js';

export const fetchOffersList = () => (dispatch, _getState, api) => (
  api.get(APIRoute.HOTELS)
    .then(({data}) => {
      const adoptedData = data.map(
        (offer) => ({
          id: offer.id,
          title: offer.title,
          description: offer.description,
          type: offer.type,
          price: offer.price,
          previewImage: offer['preview_image'],
          images: offer.images,
          rating: offer.rating,
          bedrooms: offer.bedrooms,
          maxAdults: offer['max_adults'],
          goods: offer.goods,
          host: {
            id: offer.host.id,
            name: offer.host.name,
            isPro: offer.host['is_pro'],
            avatarUrl: offer.host['avatar_url'],
          },
          city: offer.city,
          isPremium: offer['is_premium'],
          isFavourite: offer['is_favorite'],
          location: offer.location,
        }),
      );
      dispatch(ActionCreator.loadOffers(adoptedData));
    })
);
