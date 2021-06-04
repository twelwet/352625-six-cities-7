import React from 'react';

function NotFound() {
  return (
    <div className="page page--gray page--main">
      <header className="header">
        <div className="container">
          <div className="header__wrapper">
            <div className="header__left">
              <a href={'/'} className="header__logo-link header__logo-link--active">
                <img className="header__logo" src={'img/logo.svg'} alt="6 cities logo" width="81" height="41"/>
              </a>
            </div>
            <nav className="header__nav">
              <ul className="header__nav-list">
                <li className="header__nav-item user">
                  <a className="header__nav-link header__nav-link--profile" href={'/'}>
                    <div className="header__avatar-wrapper user__avatar-wrapper">
                    </div>
                    <span className="header__user-name user__name">Oliver.conner@gmail.com</span>
                  </a>
                </li>
                <li className="header__nav-item">
                  <a className="header__nav-link" href={'/'}>
                    <span className="header__signout">Sign out</span>
                  </a>
                </li>
              </ul>
            </nav>
          </div>
        </div>
      </header>
      <h1 style={{textAlign: 'center'}}>
        404.
        <br />
        <small>Страница не найдена</small>
      </h1>
      <a href={'/'} style={{textAlign: 'center'}}>На главную</a>
    </div>
  );
}

export default NotFound;
