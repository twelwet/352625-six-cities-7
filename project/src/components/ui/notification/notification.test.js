import React from 'react';
import {render} from '@testing-library/react';
import {Router} from 'react-router-dom';
import {createMemoryHistory} from 'history';
import {Notification} from './notification.jsx';

describe('Component: Notification', () => {
  it('should render correctly', () => {
    const history = createMemoryHistory();

    const {getByText} = render(
      <Router history={history}>
        <Notification message={'Some kind of message'} position={{top: '', marginRight: ''}}/>
      </Router>,
    );

    expect(getByText('Some kind of message')).toBeInTheDocument();
  });
});
