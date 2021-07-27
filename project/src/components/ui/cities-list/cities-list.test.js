import React from 'react';
import {render, screen} from '@testing-library/react';
import {Router} from 'react-router-dom';
import {createMemoryHistory} from 'history';
import {CitiesList} from './cities-list.jsx';
import {CityName} from '../../../constants.js';
import userEvent from '@testing-library/user-event';

describe('Component: CitiesList', () => {
  it('should render correctly', () => {
    const onCityClick = jest.fn();
    const cities = Object.values(CityName);
    const history = createMemoryHistory();
    const {getByText} = render(
      <Router history={history}>
        <CitiesList cities={cities} city={CityName.PARIS} onCityClick={onCityClick} />
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

    expect(onCityClick).not.toBeCalled();
    userEvent.click(screen.getByTestId('test-Amsterdam'));
    expect(onCityClick).toBeCalledTimes(1);
    userEvent.click(screen.getByTestId('test-Brussels'));
    expect(onCityClick).toBeCalledTimes(2);
  });
});
