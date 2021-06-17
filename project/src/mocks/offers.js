import {OfferTypes, Cities, CitiesNames, ZOOM_OFFER} from './constants.js';

const offers = [
  {
    id: 'offer001',
    description: 'Beautiful & luxurious apartment at great location',
    type: OfferTypes.APARTMENT,
    price: 120,
    previewImage: 'img/apartment-01.jpg',
    rating: 5,
    city: Cities[CitiesNames.AMSTERDAM],
    isPremium: true,
    isBookmark: false,
    location: {
      latitude: 52.3909553943508,
      longitude: 4.85309666406198,
      zoom: ZOOM_OFFER,
    },
  },
  {
    id: 'offer002',
    description: 'Wood and stone place',
    type: OfferTypes.PRIVATE_ROOM,
    price: 80,
    previewImage: 'img/room.jpg',
    rating: 2.5,
    city: Cities[CitiesNames.AMSTERDAM],
    isPremium: false,
    isBookmark: true,
    location: {
      latitude: 52.369553943508,
      longitude: 4.85309666406198,
      zoom: ZOOM_OFFER,
    },
  },
  {
    id: 'offer003',
    description: 'Canal View Prinsengracht',
    type: OfferTypes.APARTMENT,
    price: 132,
    previewImage: 'img/apartment-02.jpg',
    rating: 4,
    city: Cities[CitiesNames.AMSTERDAM],
    isPremium: false,
    isBookmark: false,
    location: {
      latitude: 52.3909553943508,
      longitude: 4.929309666406198,
      zoom: ZOOM_OFFER,
    },
  },
  {
    id: 'offer004',
    description: 'Nice, cozy, warm big bed apartment',
    type: OfferTypes.APARTMENT,
    price: 180,
    previewImage: 'img/apartment-03.jpg',
    rating: 3.5,
    city: Cities[CitiesNames.AMSTERDAM],
    isPremium: true,
    isBookmark: true,
    location: {
      latitude: 52.3809553943508,
      longitude: 4.939309666406198,
      zoom: ZOOM_OFFER,
    },
  },
  {
    id: 'offer005',
    description: 'Wood and stone place',
    type: OfferTypes.PRIVATE_ROOM,
    price: 80,
    previewImage: 'img/room.jpg',
    rating: 1.9,
    city: Cities[CitiesNames.AMSTERDAM],
    isPremium: false,
    isBookmark: false,
    location: {
      latitude: 52.369553943508,
      longitude: 4.939309666406198,
      zoom: ZOOM_OFFER,
    },
  },
];

export default offers;
