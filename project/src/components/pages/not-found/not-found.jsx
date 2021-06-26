import React from 'react';
import Header from '../../ui/header/header.jsx';
import {AppRoute} from '../../../constants.js';

function NotFound() {
  return (
    <div className="page page--gray page--main">
      <Header/>
      <h1 style={{textAlign: 'center'}}>
        404.
        <br />
        <small>Страница не найдена</small>
      </h1>
      <a href={AppRoute.MAIN} style={{textAlign: 'center'}}>На главную</a>
    </div>
  );
}

export default NotFound;
