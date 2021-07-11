import {NameSpace} from '../root-reducer';

export const getOfferData = (state) => state[NameSpace.ROOM].offer.data;
export const getOfferStatus = (state) => state[NameSpace.ROOM].offer.status;
export const getOfferError = (state) => state[NameSpace.ROOM].offer.error;

export const getNeighborOffersData = (state) => state[NameSpace.OFFERS].neighborOffers.data;
export const getNeighborOffersStatus = (state) => state[NameSpace.OFFERS].neighborOffers.status;
export const getNeighborOffersError = (state) => state[NameSpace.OFFERS].neighborOffers.error;

export const getReviewsData = (state) => state[NameSpace.OFFERS].reviews.data;
export const getReviewsStatus = (state) => state[NameSpace.OFFERS].reviews.status;
export const getReviewsError = (state) => state[NameSpace.OFFERS].reviews.error;
