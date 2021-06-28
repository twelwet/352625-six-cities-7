import React from 'react';
import {Link} from 'react-router-dom';
import {connect} from 'react-redux';
import PropTypes from 'prop-types';
import {AuthorizationStatus, AppRoute} from '../../../constants.js';
import {logout} from '../../../store/api-actions.js';

function Header({authorizationStatus, authInfo, onSignOut}) {
  const isAuth = authorizationStatus === AuthorizationStatus.AUTH;

  const handleSignOut = (evt) => {
    evt.preventDefault();
    onSignOut();
  };

  return (
    <header className="header">
      <div className="container">
        <div className="header__wrapper">
          <div className="header__left">
            <Link to={AppRoute.MAIN} className="header__logo-link header__logo-link--active">
              <img className="header__logo" src={'img/logo.svg'} alt="6 cities logo" width="81" height="41"/>
            </Link>
          </div>
          <nav className="header__nav">
            <ul className="header__nav-list">
              <li className="header__nav-item user">
                <Link className="header__nav-link header__nav-link--profile" to={isAuth ? '/favourites' : '/login'}>
                  <div className="header__avatar-wrapper user__avatar-wrapper">
                  </div>
                  <span className="header__user-name user__name">{isAuth ? authInfo.email : 'Sign in'}</span>
                </Link>
              </li>
              {
                isAuth ? (
                  <li className="header__nav-item">
                    <a
                      className="header__nav-link"
                      href={AppRoute.MAIN}
                      onClick={handleSignOut}
                    >
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
  authInfo: PropTypes.shape({
    id: PropTypes.number,
    email: PropTypes.string,
    name: PropTypes.string,
    avatarUrl: PropTypes.string,
    isPro: PropTypes.bool,
    token: PropTypes.string,
  }),
  onSignOut: PropTypes.func.isRequired,
};

const mapStateToProps = (state) => ({
  authInfo: state.authInfo,
  authorizationStatus: state.authorizationStatus,
  userEmail: state.userEmail,
});

const mapDispatchToProps = (dispatch) => ({
  onSignOut() {
    dispatch(logout());
  },
});

export {Header};
export default connect(mapStateToProps, mapDispatchToProps)(Header);
