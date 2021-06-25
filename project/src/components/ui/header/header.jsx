import React from 'react';
import {Link} from 'react-router-dom';
import {connect} from 'react-redux';
import PropTypes from 'prop-types';
import {AuthorizationStatus} from '../../../constants.js';

function Header({authorizationStatus}) {
  const isAuth = authorizationStatus === AuthorizationStatus.AUTH;
  return (
    <header className="header">
      <div className="container">
        <div className="header__wrapper">
          <div className="header__left">
            <Link to={'/'} className="header__logo-link header__logo-link--active">
              <img className="header__logo" src={'img/logo.svg'} alt="6 cities logo" width="81" height="41"/>
            </Link>
          </div>
          <nav className="header__nav">
            <ul className="header__nav-list">
              <li className="header__nav-item user">
                <Link className="header__nav-link header__nav-link--profile" to={isAuth ? '/favourites' : '/login'}>
                  <div className="header__avatar-wrapper user__avatar-wrapper">
                  </div>
                  <span className="header__user-name user__name">{isAuth ? 'Oliver.conner@gmail.com' : 'Sign in'}</span>
                </Link>
              </li>
              {
                isAuth ? (
                  <li className="header__nav-item">
                    <a className="header__nav-link" href={'/'}>
                      <span className="header__signout">Sign out</span>
                    </a>
                  </li>
                ) : ''
              }
            </ul>
          </nav>
        </div>
      </div>
    </header>
  );
}

Header.propTypes = {
  authorizationStatus: PropTypes.string.isRequired,
};

const mapStateToProps = (state) => ({
  authorizationStatus: state.authorizationStatus,
});

export {Header};
export default connect(mapStateToProps, null)(Header);
