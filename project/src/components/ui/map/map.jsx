import React, {useRef, useEffect} from 'react';
import leaflet from 'leaflet';
import 'leaflet/dist/leaflet.css';
import useMap from './useMap.js';
import offersPropTypes from '../../../prop-types/offers.prop.js';
import cityPropTypes from '../../../prop-types/city.prop';
import {Icon} from './constants.js';

function Map({offers, city}) {
  const mapRef = useRef(null);
  const map = useMap(mapRef, city);

  const icon = leaflet.icon({
    iconUrl: Icon.URL,
    iconSize: Icon.SIZE,
    iconAnchor: Icon.ANCHOR,
  });

  useEffect(() => {
    if (map) {
      offers.forEach((offer) => {
        const {latitude, longitude} = offer.location;
        leaflet
          .marker([latitude, longitude], {icon})
          .addTo(map);
      });
    }
  }, [map, offers, icon]);

  return (
    <div id={'map'} ref={mapRef} style={{height: '100%'}}/>
  );
}

Map.propTypes = {
  offers: offersPropTypes,
  city: cityPropTypes,
};

export default Map;
