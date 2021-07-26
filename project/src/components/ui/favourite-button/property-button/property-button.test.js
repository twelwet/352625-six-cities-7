import React from 'react';
import { render, screen } from '@testing-library/react';
import PropertyButton from './property-button.jsx';

jest.mock('../favourite-button', () => () => (
    <button
      onClick={jest.fn()}
      data-testid={'fake-favourite-button'}
    />
  )
);

describe('Component: PropertyButton', () => {
  it('should render correctly', () => {
    render(
      <PropertyButton status={false}/>,
    );

    expect(screen.getByTestId('fake-favourite-button')).toBeInTheDocument();
  });
});
