import {useEffect, useState} from 'react';
import leaflet from 'leaflet';
import 'leaflet/dist/leaflet.css';
import {MapSetting} from './constants.js';

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

  return map;
}

export default useMap;
