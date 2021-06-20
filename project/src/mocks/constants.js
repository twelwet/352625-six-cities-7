const OfferType = {
  APARTMENT: 'Apartment',
  PRIVATE_ROOM: 'Private room',
};

const CityName = {
  PARIS: 'Paris',
  COLOGNE: 'Cologne',
  BRUSSELS: 'Brussels',
  AMSTERDAM: 'Amsterdam',
  HAMBURG: 'Hamburg',
  DUSSELDORF: 'Dusseldorf',
};

const ZOOM = 13;
const ZOOM_OFFER = 16;

const CityLocation = {
  [CityName.PARIS]: {
    LATITUDE: 48.864716,
    LONGITUDE: 2.349014,
    ZOOM,
  },
  [CityName.COLOGNE]: {
    LATITUDE: 50.935173,
    LONGITUDE: 6.953101,
    ZOOM,
  },
  [CityName.BRUSSELS]: {
    LATITUDE: 50.8505,
    LONGITUDE: 4.3488,
    ZOOM,
  },
  [CityName.AMSTERDAM]: {
    LATITUDE: 52.37454,
    LONGITUDE: 4.897976,
    ZOOM,
  },
  [CityName.HAMBURG]: {
    LATITUDE: 53.551086,
    LONGITUDE: 9.993682,
    ZOOM,
  },
  [CityName.DUSSELDORF]: {
    LATITUDE: 51.233334,
    LONGITUDE: 6.783333,
    ZOOM,
  },
};

const City = {
  [CityName.PARIS]: {
    name: CityName.PARIS,
    location: {
      latitude: CityLocation[CityName.PARIS].LATITUDE,
      longitude: CityLocation[CityName.PARIS].LONGITUDE,
      zoom: CityLocation[CityName.PARIS].ZOOM,
    },
  },
  [CityName.COLOGNE]: {
    name: CityName.COLOGNE,
    location: {
      latitude: CityLocation[CityName.COLOGNE].LATITUDE,
      longitude: CityLocation[CityName.COLOGNE].LONGITUDE,
      zoom: CityLocation[CityName.COLOGNE].ZOOM,
    },
  },
  [CityName.BRUSSELS]: {
    name: CityName.BRUSSELS,
    location: {
      latitude: CityLocation[CityName.BRUSSELS].LATITUDE,
      longitude: CityLocation[CityName.BRUSSELS].LONGITUDE,
      zoom: CityLocation[CityName.BRUSSELS].ZOOM,
    },
  },
  [CityName.AMSTERDAM]: {
    name: CityName.AMSTERDAM,
    location: {
      latitude: CityLocation[CityName.AMSTERDAM].LATITUDE,
      longitude: CityLocation[CityName.AMSTERDAM].LONGITUDE,
      zoom: CityLocation[CityName.AMSTERDAM].ZOOM,
    },
  },
  [CityName.HAMBURG]: {
    name: CityName.HAMBURG,
    location: {
      latitude: CityLocation[CityName.HAMBURG].LATITUDE,
      longitude: CityLocation[CityName.HAMBURG].LONGITUDE,
      zoom: CityLocation[CityName.HAMBURG].ZOOM,
    },
  },
  [CityName.DUSSELDORF]: {
    name: CityName.DUSSELDORF,
    location: {
      latitude: CityLocation[CityName.DUSSELDORF].LATITUDE,
      longitude: CityLocation[CityName.DUSSELDORF].LONGITUDE,
      zoom: CityLocation[CityName.DUSSELDORF].ZOOM,
    },
  },
};

const Good = {
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

const HostName = {
  ANGELINA: 'Angelina',
  MAX: 'Max',
  JAMES: 'James',
};

export {OfferType, City, CityName, ZOOM_OFFER, Good, HostName};
