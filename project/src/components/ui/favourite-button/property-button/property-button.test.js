import React from 'react';
import { render, screen } from '@testing-library/react';
import PropertyButton from './property-button.jsx';

const getFakeFavouriteButton = () => (
  <button
    onClick={jest.fn()}
    data-testid={'fake-favourite-button'}
  />
);

jest.mock('../favourite-button', () => getFakeFavouriteButton);

describe('Component: PropertyButton', () => {
  it('should render correctly', () => {
    render(
      <PropertyButton status={false}/>,
    );

    expect(screen.getByTestId('fake-favourite-button')).toBeInTheDocument();
  });
});
