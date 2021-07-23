import React from 'react';
import {render} from '@testing-library/react';
import {Router} from 'react-router-dom';
import {createMemoryHistory} from 'history';
import {CitiesList} from './cities-list.jsx';
import {CityName} from '../../../constants.js';

describe('Component: CitiesList', () => {
  it('should render correctly', () => {
    const cities = Object.values(CityName);
    const history = createMemoryHistory();
    const {getByText} = render(
      <Router history={history}>
        <CitiesList cities={cities} city={CityName.PARIS} onCityClick={() => {}} />
      </Router>,
    );
    const cityParis = getByText(CityName.PARIS);
    const cityCologne = getByText(CityName.COLOGNE);
    const cityBrussels = getByText(CityName.BRUSSELS);
    const cityAmsterdam = getByText(CityName.AMSTERDAM);
    const cityHamburg = getByText(CityName.HAMBURG);
    const cityDusseldorf = getByText(CityName.DUSSELDORF);

    expect(cityParis).toBeInTheDocument();
    expect(cityCologne).toBeInTheDocument();
    expect(cityBrussels).toBeInTheDocument();
    expect(cityAmsterdam).toBeInTheDocument();
    expect(cityHamburg).toBeInTheDocument();
    expect(cityDusseldorf).toBeInTheDocument();
  });
});
