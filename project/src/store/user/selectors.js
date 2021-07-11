import {NameSpace} from '../root-reducer';

export const getAuthStatus = (state) => state[NameSpace.USER].authorizationStatus;
export const getUserCommentStatus = (state) => state[NameSpace.USER].userComment;
export const getLoginStatus = (state) => state[NameSpace.USER].login.status;
export const getAuthInfo = (state) => state[NameSpace.USER].authInfo;
