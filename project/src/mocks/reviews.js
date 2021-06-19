import {HostName} from './constants';

const reviews = [
  {
    id: 1,
    offerId: 'offer001',
    date: 'April 2019',
    rating: 4,
    description: 'A quiet cozy and picturesque that hides behind a a river by the unique lightness of Amsterdam. The building is green and from 18th century.',
    author: {
      id: 24,
      name: HostName.MAX,
      isPro: false,
      avatarUrl: 'img/avatar-max.jpg',
    },
  },
  {
    id: 2,
    offerId: 'offer001',
    date: 'March 2019',
    rating: 3.5,
    description: 'Such a pleasure to host and welcome guests from so far away! Lovely, easy going, great communicators and took such great care of the apartment. I would happily welcome them back anytime and of course, recommend to any future host.',
    author: {
      id: 23,
      name: HostName.JAMES,
      isPro: false,
      avatarUrl: 'img/avatar.svg',
    },
  },
  {
    id: 3,
    offerId: 'offer002',
    date: 'April 2019',
    rating: 4.5,
    description: 'It was our pleasure to host for a couple of days while they enjoyed the highlights of southern. We found them to be very friendly, polite and considerate guests who looked after our property extremely well. We have no hesitation in recommending them to other hosts.',
    author: {
      id: 23,
      name: HostName.JAMES,
      isPro: false,
      avatarUrl: 'img/avatar.svg',
    },
  },
  {
    id: 4,
    offerId: 'offer003',
    date: 'March 2019',
    rating: 3.8,
    description: 'We had a really nice experience hosting. From the beginning, the communication was them was pleasant and smooth. When they arrived, they proved to be really excellent guests. We are grateful for their visit and hope that they will come back in the future. Thanks!',
    author: {
      id: 24,
      name: HostName.MAX,
      isPro: false,
      avatarUrl: 'img/avatar-max.jpg',
    },
  },
  {
    id: 5,
    offerId: 'offer004',
    date: 'March 2019',
    rating: 3.8,
    description: 'I would recommend to anyone renting out rooms! She was the perfect guest! The good qualities you would expect from a guest in your own home.',
    author: {
      id: 24,
      name: HostName.MAX,
      isPro: false,
      avatarUrl: 'img/avatar-max.jpg',
    },
  },
  {
    id: 6,
    offerId: 'offer004',
    date: 'February 2019',
    rating: 3.8,
    description: 'She was polite, considerate, sociable, helpful and quiet. It felt good, safe and comfortable to have her living here. As a person she/he was wonderful to get to know.',
    author: {
      id: 23,
      name: HostName.JAMES,
      isPro: false,
      avatarUrl: 'img/avatar.svg',
    },
  },
  {
    id: 7,
    offerId: 'offer004',
    date: 'January 2019',
    rating: 3.8,
    description: 'Came to visit with his partner and they are wonderful guests! I would highly recommend them to future hosts, they left the studio super clean. Thanks!',
    author: {
      id: 25,
      name: HostName.ANGELINA,
      isPro: true,
      avatarUrl: 'img/avatar-angelina.jpg',
    },
  },
  {
    id: 8,
    offerId: 'offer005',
    date: 'March 2019',
    rating: 3.8,
    description: 'The good qualities you would expect from a guest in your own home. Thanks!',
    author: {
      id: 24,
      name: HostName.MAX,
      isPro: false,
      avatarUrl: 'img/avatar-max.jpg',
    },
  },
];

export default reviews;
