const MapSettings = {
  LAYER_URL: 'https://{s}.basemaps.cartocdn.com/rastertiles/voyager/{z}/{x}/{y}{r}.png',
  ATTRIBUTION: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors &copy; <a href="https://carto.com/attributions">CARTO</a>',
};

const ICON_SIZE = [30, 30];
const ICON_ANCHOR = [15, 20];

const Icon = {
  URL: 'img/pin.svg',
  SIZE: ICON_SIZE,
  ANCHOR: ICON_ANCHOR,
};

const IconActive = {
  URL: 'img/pin-active.svg',
  SIZE: ICON_SIZE,
  ANCHOR: ICON_ANCHOR,
};

const Icons = {
  REGULAR: Icon,
  ACTIVE: IconActive,
};

export  {MapSettings, Icons};
