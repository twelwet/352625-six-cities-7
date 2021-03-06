import {NameSpace} from '../root-reducer';

export const getAuthStatus = (state) => state[NameSpace.USER].authorizationStatus;
export const getUserComment = (state) => state[NameSpace.USER].userComment;
export const getLogin = (state) => state[NameSpace.USER].login;
export const getAuthInfo = (state) => state[NameSpace.USER].authInfo;
export const getFavouritesOffers = (state) => state[NameSpace.USER].favourites;
