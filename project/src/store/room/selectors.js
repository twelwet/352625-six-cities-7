import {NameSpace} from '../root-reducer';

export const getOffer = (state) => state[NameSpace.ROOM].offer;
export const getNeighborOffers = (state) => state[NameSpace.ROOM].neighborOffers;
export const getReviews = (state) => state[NameSpace.ROOM].reviews;
