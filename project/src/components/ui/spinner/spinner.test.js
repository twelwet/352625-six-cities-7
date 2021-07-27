import React from 'react';
import {render} from '@testing-library/react';
import Spinner from './spinner.jsx';

describe('Component: Spinner', () => {
  it('should render correctly', () => {
    const {container} = render(<Spinner/>);

    expect(container.firstChild.classList.contains('spinner-wrapper')).toBe(true);
  });
});
