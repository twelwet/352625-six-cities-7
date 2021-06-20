import leaflet from 'leaflet';
import {Icon} from './constants';

const icon = leaflet.icon({
  iconUrl: Icon.REGULAR.URL,
  iconSize: Icon.REGULAR.SIZE,
  iconAnchor: Icon.REGULAR.ANCHOR,
});

const iconActive = leaflet.icon({
  iconUrl: Icon.ACTIVE.URL,
  iconSize: Icon.ACTIVE.SIZE,
  iconAnchor: Icon.ACTIVE.ANCHOR,
});

export {icon, iconActive};
