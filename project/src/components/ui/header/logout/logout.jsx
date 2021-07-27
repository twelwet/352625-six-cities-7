import React from 'react';
import PropTypes from 'prop-types';
import {AppRoute} from '../../../../constants.js';

function Logout({isAuth, handleSignOut}) {
  if (isAuth) {
    return (
      <li className="header__nav-item">
        <a
          className="header__nav-link"
          href={AppRoute.MAIN}
          onClick={handleSignOut}
          data-testid="sign-out-link"
        >
          <span className="header__signout">Sign out</span>
        </a>
      </li>
    );
  }
  return null;
}

Logout.propTypes = {
  isAuth: PropTypes.bool.isRequired,
  handleSignOut: PropTypes.func.isRequired,
};

export default Logout;
