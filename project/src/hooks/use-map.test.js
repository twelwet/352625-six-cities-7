import React from 'react';
import {renderHook} from '@testing-library/react-hooks';
import useMap from './use-map.js';

const fakeLeaflet = {
  map: () => ({ setView: () => {}, really: 'exist' }),
  tileLayer: () => ({ addTo: () => {} }),
  LatLng: function (latitude, longitude) {
    this.latitude = latitude;
    this.longitude = longitude;
  },
};

jest.mock('leaflet', () => fakeLeaflet);

describe('Hook: useMap', () => {
  it('should return null (mapRef.current === null)', () => {
    const mapRef = {current: null};
    const city = {
      name: 'Paris',
      location: {
        latitude: 56,
        longitude: 45,
        zoom: 4,
      },
    };

    const {result} = renderHook(() => useMap(mapRef, city));
    const map = result.current;

    expect(map).toBeNull();
  });

  it('should return Object (mapRef.current !== null)', () => {
    const mapRef = {
      current: (<div id='map'/>),
    };
    const city = {
      name: 'Paris',
      location: {
        latitude: 56,
        longitude: 45,
        zoom: 4,
      },
    };

    const {result} = renderHook(() => useMap(mapRef, city));
    const map = result.current;

    expect(map).toBeInstanceOf(Object);
    expect(map.really).toEqual('exist');
  });
});
