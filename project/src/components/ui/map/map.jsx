import React, {useEffect} from 'react';
import initMap from './init-map.js';
import leaflet from 'leaflet';
import offersPropTypes from '../../../prop-types/offers.prop.js';
import 'leaflet/dist/leaflet.css';

function Map({offers}) {
  useEffect(() => {
    const {map, icon} = initMap();

    offers.forEach((offer) => {
      const {latitude, longitude} = offer.location;
      leaflet
        .marker([latitude, longitude], {icon})
        .addTo(map);
    });
  }, [offers]);

  return (
    <div id={'map'} ref={mapRef} style={{height: '100%'}}/>
  );
}

Map.propTypes = {
  offers: offersPropTypes,
};

export default Map;
