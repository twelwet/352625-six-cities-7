import React, {useEffect} from 'react';
import initMap from './init-map.js';
import leaflet from 'leaflet';
import offersPropTypes from '../../../prop-types/offers.prop.js';
import cityPropTypes from '../../../prop-types/city.prop';
import 'leaflet/dist/leaflet.css';

function Map({offers, city}) {
  useEffect(() => {
    const {map, icon} = initMap(city);

    offers.forEach((offer) => {
      const {latitude, longitude} = offer.location;
      leaflet
        .marker([latitude, longitude], {icon})
        .addTo(map);
    });
  }, [offers, city]);

  return (
    <div id={'map'} style={{height: '100%'}}/>
  );
}

Map.propTypes = {
  offers: offersPropTypes,
  city: cityPropTypes,
};

export default Map;
