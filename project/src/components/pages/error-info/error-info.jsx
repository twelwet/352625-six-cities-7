import React from 'react';
import PropTypes from 'prop-types';
import {AppRoute} from '../../../constants.js';

function ErrorInfo({error}) {
  return (
    <div className="page page--gray page--main">
      <h1 style={{textAlign: 'center'}}>
        <div>{error.message}</div>
      </h1>
      <a href={AppRoute.MAIN} style={{textAlign: 'center'}}>На главную</a>
    </div>
  );
}

ErrorInfo.propTypes = {
  error: PropTypes.shape({
    message: PropTypes.string.isRequired,
  }).isRequired,
};

export default ErrorInfo;
