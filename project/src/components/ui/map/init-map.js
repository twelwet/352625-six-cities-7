import leaflet from 'leaflet';

const MapSettings = {
  Icon: {
    URL: 'img/pin.svg',
    SIZE: [30, 30],
    ANCHOR: [15, 20],
  },
  DEFAULT_ZOOM: 12,
  LAYER_URL: 'https://{s}.basemaps.cartocdn.com/rastertiles/voyager/{z}/{x}/{y}{r}.png',
  ATTRIBUTION: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors &copy; <a href="https://carto.com/attributions">CARTO</a>',
};

function initMap(city) {
  const map = leaflet.map('map', {
    center: [city.location.latitude, city.location.longitude],
    zoom: MapSettings.DEFAULT_ZOOM,
    zoomControl: false,
    marker: true,
  });

  const icon = leaflet.icon({
    iconUrl: MapSettings.Icon.URL,
    iconSize: MapSettings.Icon.SIZE,
    iconAnchor: MapSettings.Icon.ANCHOR,
  });

  map.setView([city.location.latitude, city.location.longitude], MapSettings.DEFAULT_ZOOM);

  leaflet
    .tileLayer(MapSettings.LAYER_URL, {
      attribution: MapSettings.ATTRIBUTION,
    })
    .addTo(map);

  return {map, icon};
}

export default initMap;
