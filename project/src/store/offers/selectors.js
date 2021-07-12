import {NameSpace} from '../root-reducer';

export const getOffersData = (state) => state[NameSpace.OFFERS].data;
export const getOffersStatus = (state) => state[NameSpace.OFFERS].status;
export const getOffersError = (state) => state[NameSpace.OFFERS].error;
