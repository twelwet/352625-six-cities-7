const OfferTypes = {
  APARTMENT: 'Apartment',
  PRIVATE_ROOM: 'Private room',
};

const CitiesNames = {
  PARIS: 'Paris',
  COLOGNE: 'Cologne',
  BRUSSELS: 'Brussels',
  AMSTERDAM: 'Amsterdam',
  HAMBURG: 'Hamburg',
  DUSSELDORF: 'Dusseldorf',
};

const ZOOM = 13;
const ZOOM_OFFER = 16;

const CitiesLocations = {
  [CitiesNames.PARIS]: {
    LATITUDE: 48.864716,
    LONGITUDE: 2.349014,
    ZOOM,
  },
  [CitiesNames.COLOGNE]: {
    LATITUDE: 50.935173,
    LONGITUDE: 6.953101,
    ZOOM,
  },
  [CitiesNames.BRUSSELS]: {
    LATITUDE: 50.8505,
    LONGITUDE: 4.3488,
    ZOOM,
  },
  [CitiesNames.AMSTERDAM]: {
    LATITUDE: 52.37454,
    LONGITUDE: 4.897976,
    ZOOM,
  },
  [CitiesNames.HAMBURG]: {
    LATITUDE: 53.551086,
    LONGITUDE: 9.993682,
    ZOOM,
  },
  [CitiesNames.DUSSELDORF]: {
    LATITUDE: 51.233334,
    LONGITUDE: 6.783333,
    ZOOM,
  },
};

const Cities = {
  [CitiesNames.PARIS]: {
    name: CitiesNames.PARIS,
    location: {
      latitude: CitiesLocations[CitiesNames.PARIS].LATITUDE,
      longitude: CitiesLocations[CitiesNames.PARIS].LONGITUDE,
      zoom: CitiesLocations[CitiesNames.PARIS].ZOOM,
    },
  },
  [CitiesNames.COLOGNE]: {
    name: CitiesNames.COLOGNE,
    location: {
      latitude: CitiesLocations[CitiesNames.COLOGNE].LATITUDE,
      longitude: CitiesLocations[CitiesNames.COLOGNE].LONGITUDE,
      zoom: CitiesLocations[CitiesNames.COLOGNE].ZOOM,
    },
  },
  [CitiesNames.BRUSSELS]: {
    name: CitiesNames.BRUSSELS,
    location: {
      latitude: CitiesLocations[CitiesNames.BRUSSELS].LATITUDE,
      longitude: CitiesLocations[CitiesNames.BRUSSELS].LONGITUDE,
      zoom: CitiesLocations[CitiesNames.BRUSSELS].ZOOM,
    },
  },
  [CitiesNames.AMSTERDAM]: {
    name: CitiesNames.AMSTERDAM,
    location: {
      latitude: CitiesLocations[CitiesNames.AMSTERDAM].LATITUDE,
      longitude: CitiesLocations[CitiesNames.AMSTERDAM].LONGITUDE,
      zoom: CitiesLocations[CitiesNames.AMSTERDAM].ZOOM,
    },
  },
  [CitiesNames.HAMBURG]: {
    name: CitiesNames.HAMBURG,
    location: {
      latitude: CitiesLocations[CitiesNames.HAMBURG].LATITUDE,
      longitude: CitiesLocations[CitiesNames.HAMBURG].LONGITUDE,
      zoom: CitiesLocations[CitiesNames.HAMBURG].ZOOM,
    },
  },
  [CitiesNames.DUSSELDORF]: {
    name: CitiesNames.DUSSELDORF,
    location: {
      latitude: CitiesLocations[CitiesNames.DUSSELDORF].LATITUDE,
      longitude: CitiesLocations[CitiesNames.DUSSELDORF].LONGITUDE,
      zoom: CitiesLocations[CitiesNames.DUSSELDORF].ZOOM,
    },
  },
};

const Goods = {
  WI_FI: 'Wi-Fi',
  HEATING: 'Heating',
  KITCHEN: 'Kitchen',
  FRIDGE: 'Fridge',
  WASHING_MACHINE: 'Washing machine',
  COFFEE_MASHINE: 'Coffee machine',
  DISHWASHER: 'Dishwasher',
  TOWELS: 'Towels',
  BABY_SEAT: 'Baby seat',
  CABEL_TV: 'Cabel TV',
};

const HostNames = {
  ANGELINA: 'Angelina',
  MAX: 'Max',
  JAMES: 'James',
};

export {OfferTypes, Cities, CitiesNames, ZOOM_OFFER, Goods, HostNames};
