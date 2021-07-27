import React from 'react';
import {connect} from 'react-redux';
import PropTypes from 'prop-types';
import {AuthorizationStatus} from '../../../constants.js';
import {logout} from '../../../store/api-actions.js';
import {getAuthInfo, getAuthStatus} from '../../../store/user/selectors.js';
import Logo from './logo/logo.jsx';
import Login from './login/login.jsx';
import Logout from './logout/logout.jsx';

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
          <Logo/>
          <nav className="header__nav">
            <ul className="header__nav-list">
              <Login isAuth={isAuth} email={authInfo.email}/>
              <Logout isAuth={isAuth} handleSignOut={handleSignOut}/>
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
  authInfo: getAuthInfo(state),
  authorizationStatus: getAuthStatus(state),
});

const mapDispatchToProps = (dispatch) => ({
  onSignOut() {
    dispatch(logout());
  },
});

export {Header};
export default connect(mapStateToProps, mapDispatchToProps)(Header);
