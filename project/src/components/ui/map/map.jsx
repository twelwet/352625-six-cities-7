import React, {useRef, useEffect} from 'react';
import leaflet from 'leaflet';
import 'leaflet/dist/leaflet.css';
import useMap from './useMap.js';
import offersPropTypes from '../../../prop-types/offers.prop.js';
import cityPropTypes from '../../../prop-types/city.prop';
import PropTypes from 'prop-types';
import {Icon} from './constants.js';

function Map({offers, city, activeOfferId}) {
  const mapRef = useRef(null);
  const map = useMap(mapRef, city);

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

  useEffect(() => {
    if (map) {
      offers.forEach((offer) => {
        const {latitude, longitude} = offer.location;
        leaflet
          .marker([latitude, longitude], {icon: (offer.id === activeOfferId) ? iconActive : icon})
          .addTo(map);
      });
    }
  }, [map, offers, icon, iconActive, activeOfferId]);

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
