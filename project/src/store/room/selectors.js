import {NameSpace} from '../root-reducer';

export const getOffer = (state) => state[NameSpace.ROOM].offer;
export const getOfferData = (state) => state[NameSpace.ROOM].offer.data;
export const getOfferStatus = (state) => state[NameSpace.ROOM].offer.status;
export const getOfferError = (state) => state[NameSpace.ROOM].offer.error;

export const getNeighborOffers = (state) => state[NameSpace.ROOM].neighborOffers;
export const getNeighborOffersData = (state) => state[NameSpace.ROOM].neighborOffers.data;
export const getNeighborOffersStatus = (state) => state[NameSpace.ROOM].neighborOffers.status;
export const getNeighborOffersError = (state) => state[NameSpace.ROOM].neighborOffers.error;

export const getReviews = (state) => state[NameSpace.ROOM].reviews;
export const getReviewsData = (state) => state[NameSpace.ROOM].reviews.data;
export const getReviewsStatus = (state) => state[NameSpace.ROOM].reviews.status;
export const getReviewsError = (state) => state[NameSpace.ROOM].reviews.error;
