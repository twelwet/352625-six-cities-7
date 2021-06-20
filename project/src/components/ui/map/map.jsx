import React, {useRef, useEffect} from 'react';
import leaflet from 'leaflet';
import 'leaflet/dist/leaflet.css';
import useMap from './useMap.js';
import offersPropTypes from '../../../prop-types/offers.prop.js';
import cityPropTypes from '../../../prop-types/city.prop';
import PropTypes from 'prop-types';
import {icon, iconActive} from './utils.js';

function Map({offers, city, activeOfferId}) {
  const mapRef = useRef(null);
  const map = useMap(mapRef, city);

  useEffect(() => {
    if (map) {
      offers.forEach((offer) => {
        const {latitude, longitude} = offer.location;
        leaflet
          .marker([latitude, longitude], {icon: (offer.id === activeOfferId) ? iconActive : icon})
          .addTo(map);
      });
    }
    return () => {
      map.eachLayer((layer) => {
        if (layer instanceof leaflet.Marker) {
          map.removeLayer(layer);
        }
      });
    };
  }, [map, offers, activeOfferId]);

  return (
    <div id={'map'} ref={mapRef} style={{height: '100%'}}/>
  );
}

Map.propTypes = {
  offers: offersPropTypes,
  city: cityPropTypes,
  activeOfferId: PropTypes.string,
};

export default Map;
