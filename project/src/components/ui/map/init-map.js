import leaflet from 'leaflet';

const City = {
  LATITUDE: 52.38333,
  LONGITUDE: 4.9,
};

const MapSettings = {
  DEFAULT_ZOOM: 12,
  LAYER_URL: 'https://{s}.basemaps.cartocdn.com/rastertiles/voyager/{z}/{x}/{y}{r}.png',
  ATTRIBUTION: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors &copy; <a href="https://carto.com/attributions">CARTO</a>',
};

function initMap() {
  const map = leaflet.map('map', {
    center: [City.LATITUDE, City.LONGITUDE],
    zoom: MapSettings.DEFAULT_ZOOM,
    zoomControl: false,
    marker: true,
  });

  map.setView([City.LATITUDE, City.LONGITUDE], MapSettings.DEFAULT_ZOOM);

  leaflet
    .tileLayer(MapSettings.LAYER_URL, {
      attribution: MapSettings.ATTRIBUTION,
    })
    .addTo(map);
}

export default initMap;
