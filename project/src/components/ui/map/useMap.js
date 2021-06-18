import {useEffect, useState} from 'react';
import leaflet from 'leaflet';
import 'leaflet/dist/leaflet.css';
import {MapSetting} from './constants.js';
import {Icon} from './constants';

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


  return {map, icon, iconActive};
}

export default useMap;
