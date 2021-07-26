import React from 'react';
import { render, screen } from '@testing-library/react';
import CardButton from './card-button.jsx';

jest.mock('../favourite-button', () => () => (
    <button
      onClick={jest.fn()}
      data-testid={'fake-favourite-button'}
    />
  )
);

describe('Component: CardButton', () => {
  it('should render correctly', () => {
    render(
      <CardButton status={false}/>,
    );

    expect(screen.getByTestId('fake-favourite-button')).toBeInTheDocument();
  });
});
