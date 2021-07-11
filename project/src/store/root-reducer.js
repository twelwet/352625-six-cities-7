import {combineReducers} from 'redux';
import {city} from './city/city.js';
import {offers} from './offers/offers.js';
import {room} from './room/room.js';
import {user} from './user/user.js';

export const NameSpace = {
  CITY: 'CITY',
  OFFERS: 'OFFERS',
  ROOM: 'ROOM',
  USER: 'USER',
};

export default combineReducers({
  [NameSpace.CITY]: city,
  [NameSpace.OFFERS]: offers,
  [NameSpace.ROOM]: room,
  [NameSpace.USER]: user,
});
