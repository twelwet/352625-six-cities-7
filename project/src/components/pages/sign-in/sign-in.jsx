import React, {useRef} from 'react';
import {connect} from 'react-redux';
import PropTypes from 'prop-types';
import Header from '../../ui/header/header.jsx';
import {login as loginAsync} from '../../../store/api-actions.js';
import {AppRoute, Status} from '../../../constants.js';
import Notification from '../../ui/notification/notification.jsx';
import {DEFAULT_CITY} from '../../../settings.js';
import {getLogin} from '../../../store/user/selectors.js';

function SignIn({onSubmit, login}) {
  const loginRef = useRef();
  const passwordRef = useRef();

  const handleSubmit = (evt) => {
    evt.preventDefault();

    onSubmit({
      email: loginRef.current.value,
      password: passwordRef.current.value,
    });
  };

  return (
    <div className="page page--gray page--login">
      <Header/>

      <main className="page__main page__main--login">
        <div className="page__login-container container">
          <section className="login">
            {login.status === Status.REJECTED ? <Notification message={'Please check & retype credentials'} position={{top: '-40px', marginRight: '90px'}}/> : ''}
            <h1 className="login__title">Sign in</h1>
            <form
              onSubmit={handleSubmit}
              className="login__form form"
              action=""
              method="post"
            >
              <div className="login__input-wrapper form__input-wrapper">
                <label className="visually-hidden">E-mail</label>
                <input
                  ref={loginRef}
                  className="login__input form__input"
                  type="email"
                  name="email"
                  placeholder="Email"
                  required=""
                  disabled={login.status === Status.PENDING}
                />
              </div>
              <div className="login__input-wrapper form__input-wrapper">
                <label className="visually-hidden">Password</label>
                <input
                  ref={passwordRef}
                  className="login__input form__input"
                  type="password"
                  name="password"
                  placeholder="Password"
                  required=""
                  disabled={login.status === Status.PENDING}
                />
              </div>
              <button className="login__submit form__submit button" type="submit" disabled={login.status === Status.PENDING}>Sign in</button>
            </form>
          </section>
          <section className="locations locations--login locations--current">
            <div className="locations__item">
              <a className="locations__item-link" href={AppRoute.MAIN}>
                <span>{DEFAULT_CITY}</span>
              </a>
            </div>
          </section>
        </div>
      </main>
    </div>
  );
}

SignIn.propTypes = {
  onSubmit: PropTypes.func.isRequired,
  login: PropTypes.shape({
    status: PropTypes.string.isRequired,
  }).isRequired,
};

const mapStateToProps = (state) => ({
  login: getLogin(state),
});

const mapDispatchToProps = (dispatch) => ({
  onSubmit(authData) {
    dispatch(loginAsync(authData));
  },
});

export {SignIn};
export default connect(mapStateToProps, mapDispatchToProps)(SignIn);
