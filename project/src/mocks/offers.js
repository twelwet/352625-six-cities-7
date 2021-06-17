import {OfferTypes, Cities} from './constants.js';

const offers = [
  {
    id: 'offer001',
    description: 'Beautiful & luxurious apartment at great location',
    type: OfferTypes.APARTMENT,
    price: 120,
    image: 'img/apartment-01.jpg',
    rating: 5,
    city: Cities.AMSTERDAM,
    isPremium: true,
    isBookmark: false,
    latitude: 52.3909553943508,
    longitude: 4.85309666406198,
  },
  {
    id: 'offer002',
    description: 'Wood and stone place',
    type: OfferTypes.PRIVATE_ROOM,
    price: 80,
    image: 'img/room.jpg',
    rating: 2.5,
    city: Cities.AMSTERDAM,
    isPremium: false,
    isBookmark: true,
    latitude: 52.369553943508,
    longitude: 4.85309666406198,
  },
  {
    id: 'offer003',
    description: 'Canal View Prinsengracht',
    type: OfferTypes.APARTMENT,
    price: 132,
    image: 'img/apartment-02.jpg',
    rating: 4,
    city: Cities.AMSTERDAM,
    isPremium: false,
    isBookmark: false,
    latitude: 52.3909553943508,
    longitude: 4.929309666406198,
  },
  {
    id: 'offer004',
    description: 'Nice, cozy, warm big bed apartment',
    type: OfferTypes.APARTMENT,
    price: 180,
    image: 'img/apartment-03.jpg',
    rating: 3.5,
    city: Cities.AMSTERDAM,
    isPremium: true,
    isBookmark: true,
    latitude: 52.3809553943508,
    longitude: 4.939309666406198,
  },
  {
    id: 'offer005',
    description: 'Wood and stone place',
    type: OfferTypes.PRIVATE_ROOM,
    price: 80,
    image: 'img/room.jpg',
    rating: 1.9,
    city: Cities.AMSTERDAM,
    isPremium: false,
    isBookmark: false,
    latitude: 52.369553943508,
    longitude: 4.939309666406198,
  },
];

export default offers;
