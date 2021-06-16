import React, {useEffect} from 'react';
import initMap from './init-map.js';

function Map() {
  useEffect(() => {
    initMap();
  });

  return (
    <div id={'map'} style={{height: '100%'}}/>
  );
}

export default Map;
