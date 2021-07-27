import {useEffect, useState} from 'react';
import leaflet from 'leaflet';
import 'leaflet/dist/leaflet.css';
import {MapSetting} from '../components/ui/map/constants.js';

function useMap(mapRef, city) {
  const [map, setMap] = useState(null);

  useEffect(() => {
    if (mapRef.current !== null && map === null) {
      const instance = leaflet.map(mapRef.current, {
        center: [
          city.location.latitude,
          city.location.longitude,
        ],
        zoom: city.location.zoom,
        zoomControl: true,
      });

      leaflet
        .tileLayer(MapSetting.LAYER_URL, {
          attribution: MapSetting.ATTRIBUTION,
        })
        .addTo(instance);

      setMap(instance);
    }

  }, [mapRef, map, city]);

  useEffect(() => {
    const {latitude, longitude, zoom} = city.location;
    if (map !== null) {
      map.setView(new leaflet.LatLng(latitude, longitude), zoom);
    }
  }, [map, city]);

  return map;
}

export default useMap;
