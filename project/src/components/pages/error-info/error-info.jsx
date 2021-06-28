import React from 'react';
import PropTypes from 'prop-types';
import {AppRoute} from '../../../constants.js';

function ErrorInfo({errors}) {
  return (
    <div className="page page--gray page--main">
      {
        errors
          .map(
            (error) => (
              <h1 key={error.body} style={{textAlign: 'center'}}>
                <div>{error.infoMessage}</div>
                <small>{error.body}</small>
              </h1>
            ),
          )
      }
      <a href={AppRoute.MAIN} style={{textAlign: 'center'}}>На главную</a>
    </div>
  );
}

ErrorInfo.propTypes = {
  errors: PropTypes.arrayOf(
    PropTypes.shape({
      isErrorScreenRender: PropTypes.bool,
      isError: PropTypes.bool,
      infoMessage: PropTypes.string,
      body: PropTypes.string,
    }),
  ).isRequired,

};

export default ErrorInfo;
