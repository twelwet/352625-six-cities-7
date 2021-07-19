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
        <small>Page not found</small>
      </h1>
      <a href={AppRoute.MAIN} style={{textAlign: 'center'}}>Go to main</a>
    </div>
  );
}

export default NotFound;
