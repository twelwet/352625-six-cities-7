import React from 'react';
import {Link} from 'react-router-dom';
import {AppRoute} from '../../../../constants.js';

function Logo() {
  return (
    <div className="header__left">
      <Link to={AppRoute.MAIN} className="header__logo-link header__logo-link--active">
        <img className="header__logo" src={'img/logo.svg'} alt="6 cities logo" width="81" height="41"/>
      </Link>
    </div>
  );
}

export default Logo;
