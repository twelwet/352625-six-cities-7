import React from 'react';
import {render} from '@testing-library/react';
import RatingStar from './rating-star.jsx';
import userEvent from '@testing-library/user-event';

describe('Component: RatingStar', () => {
  it('should render correctly', () => {
    const weight = 3;
    const handleChangeRadio = jest.fn();
    const isActive = false;

    const {getByTestId} = render(
      <RatingStar
        weight={weight}
        changeHandler={handleChangeRadio}
        active={isActive}
      />,
    );

    const ratingRadio = getByTestId('rating-radio');

    expect(ratingRadio.value).toEqual(weight.toString());
    expect(ratingRadio.checked).toEqual(isActive);

    expect(handleChangeRadio).not.toBeCalled();
    userEvent.click(ratingRadio);
    expect(handleChangeRadio).toBeCalled();
  });
});
