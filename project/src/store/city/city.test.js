import {city} from './city.js';
import {changeCity} from '../action.js';

describe('Reducer: city', () => {
  it('without additional parameters should return initial state', () => {
    expect(city(undefined, {})).toEqual({city: 'Paris'});
  });

  it('changeCity should change current city name by a given value', () => {
    const state = {city: 'Paris'};

    expect(city(state, changeCity('Chicago'))).toEqual({city: 'Chicago'});
  });
});
