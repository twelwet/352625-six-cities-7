import React from 'react';
import PropTypes from 'prop-types';
import {AppRoute} from '../../../constants.js';

function ErrorInfo({error}) {
  const {infoMessage, errorObject} = error;
  const {config, message} = errorObject;

  return (
    <div className="page page--gray page--main">
      <h1 style={{textAlign: 'center'}}>
        <div>{infoMessage}</div>
        <small>{`${message}: ${config.method} ${config.baseURL}${config.url}`}</small>
      </h1>
      <a href={AppRoute.MAIN} style={{textAlign: 'center'}}>На главную</a>
    </div>
  );
}

ErrorInfo.propTypes = {
  error: PropTypes.shape({
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

export default ErrorInfo;
