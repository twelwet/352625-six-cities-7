import React from 'react';
import { render, screen } from '@testing-library/react';
import CardButton from './card-button.jsx';

const getFakeFavouriteButton = () => (
  <button
    onClick={jest.fn()}
    data-testid={'fake-favourite-button'}
  />
);

jest.mock('../favourite-button', () => getFakeFavouriteButton);

describe('Component: CardButton', () => {
  it('should render correctly', () => {
    render(
      <CardButton status={false}/>,
    );

    expect(screen.getByTestId('fake-favourite-button')).toBeInTheDocument();
  });
});
