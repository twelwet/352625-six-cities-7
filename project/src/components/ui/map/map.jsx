import React, {useRef, useEffect} from 'react';
import leaflet from 'leaflet';
import 'leaflet/dist/leaflet.css';
import useMap from '../../../hooks/useMap.js';
import offersPropTypes from '../../../prop-types/offers.prop.js';
import PropTypes from 'prop-types';
import {icon, iconActive} from './utils.js';

function Map({offers, activeOfferId}) {
  const mapRef = useRef(null);
  const cityData = offers[0].city;
  const map = useMap(mapRef, cityData);

  useEffect(() => {
    const pins = [];
    if (map) {
      offers.forEach((offer) => {
        const {latitude, longitude} = offer.location;
        pins.push(leaflet
          .marker([latitude, longitude], {icon: (offer.id === activeOfferId) ? iconActive : icon})
          .addTo(map));
      });
    }
    return () => pins.forEach((pin) => map.removeLayer(pin));
  }, [map, offers, activeOfferId]);

  return (
    <div id={'map'} ref={mapRef} style={{height: '100%'}}/>
  );
}

Map.propTypes = {
  offers: offersPropTypes,
  activeOfferId: PropTypes.string,
};

export default Map;
