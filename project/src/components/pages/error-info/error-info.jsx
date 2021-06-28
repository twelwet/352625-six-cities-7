import React from 'react';
import PropTypes from 'prop-types';
import {AppRoute} from '../../../constants.js';

function ErrorInfo({error}) {
  const {infoMessage, body} = error;

  return (
    <div className="page page--gray page--main">
      <h1 style={{textAlign: 'center'}}>
        <div>{infoMessage}</div>
        <small>{body}</small>
      </h1>
      <a href={AppRoute.MAIN} style={{textAlign: 'center'}}>На главную</a>
    </div>
  );
}

ErrorInfo.propTypes = {
  error: PropTypes.shape({
    isErrorScreenRender: PropTypes.bool.isRequired,
    isError: PropTypes.bool.isRequired,
    infoMessage: PropTypes.string.isRequired,
    body: PropTypes.string.isRequired,
  }).isRequired,
};

export default ErrorInfo;
