import React from 'react';
import PropTypes from 'prop-types';
import {Link} from 'react-router-dom';
import {AppRoute} from '../../../../constants.js';

function Login({isAuth, email}) {
  return (
    <li className="header__nav-item user">
      <Link className="header__nav-link header__nav-link--profile" to={isAuth ? AppRoute.FAVOURITES : AppRoute.LOGIN}>
        <div className="header__avatar-wrapper user__avatar-wrapper">
        </div>
        <span className="header__user-name user__name">{isAuth ? email : 'Sign in'}</span>
      </Link>
    </li>
  );
}

Login.propTypes = {
  isAuth: PropTypes.bool.isRequired,
  email: PropTypes.string,
};

export default Login;
