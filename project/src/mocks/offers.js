import {OfferTypes} from './constants.js';

const offers = [
  {
    id: 'offer001',
    description: 'Beautiful & luxurious apartment at great location',
    type: OfferTypes.APARTMENT,
    price: 120,
    image: 'img/apartment-01.jpg',
    rating: 100,
    isPremium: true,
    isBookmark: false,
  },
  {
    id: 'offer002',
    description: 'Wood and stone place',
    type: OfferTypes.PRIVATE_ROOM,
    price: 80,
    image: 'img/room.jpg',
    rating: 50,
    isPremium: false,
    isBookmark: true,
  },
  {
    id: 'offer003',
    description: 'Canal View Prinsengracht',
    type: OfferTypes.APARTMENT,
    price: 132,
    image: 'img/apartment-02.jpg',
    rating: 80,
    isPremium: false,
    isBookmark: false,
  },
  {
    id: 'offer004',
    description: 'Nice, cozy, warm big bed apartment',
    type: OfferTypes.APARTMENT,
    price: 180,
    image: 'img/apartment-03.jpg',
    rating: 100,
    isPremium: true,
    isBookmark: false,
  },
  {
    id: 'offer005',
    description: 'Wood and stone place',
    type: OfferTypes.PRIVATE_ROOM,
    price: 80,
    image: 'img/room.jpg',
    rating: 80,
    isPremium: false,
    isBookmark: false,
  },
];

export default offers;
