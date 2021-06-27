import React, {useRef} from 'react';
import {connect} from 'react-redux';
import PropTypes from 'prop-types';
import Header from '../../ui/header/header.jsx';
import {login} from '../../../store/api-actions.js';
import {AppRoute} from '../../../constants.js';

function SignIn({onSubmit, error}) {
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
            <h1 className="login__title">Sign in</h1>
            {error.isError ? <div>{error.infoMessage}</div> : ''}
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
                />
              </div>
              <button className="login__submit form__submit button" type="submit">Sign in</button>
            </form>
          </section>
          <section className="locations locations--login locations--current">
            <div className="locations__item">
              <a className="locations__item-link" href={AppRoute.MAIN}>
                <span>Amsterdam</span>
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
  error: PropTypes.shape({
    isErrorScreenRender: PropTypes.bool.isRequired,
    isError: PropTypes.bool.isRequired,
    infoMessage: PropTypes.string.isRequired,
    errorObject: PropTypes.shape({
      config: PropTypes.shape({
        method: PropTypes.string.isRequired,
        url: PropTypes.string.isRequired,
        baseURL: PropTypes.string.isRequired,
      }).isRequired,
      message: PropTypes.string.isRequired,
    }).isRequired,
  }).isRequired,
};

const mapStateToProps = (state) => ({
  error: state.error,
});

const mapDispatchToProps = (dispatch) => ({
  onSubmit(authData) {
    dispatch(login(authData));
  },
});

export {SignIn};
export default connect(mapStateToProps, mapDispatchToProps)(SignIn);
