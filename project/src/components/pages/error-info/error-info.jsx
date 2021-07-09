import React from 'react';
import PropTypes from 'prop-types';
import {AppRoute} from '../../../constants.js';

function ErrorInfo({errors}) {
  return (
    <div className="page page--gray page--main">
      {
        errors.map(
          (error) =>
            (
              <h1 key={error.message} style={{textAlign: 'center'}}>
                <div>{error.message}</div>
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
      message: PropTypes.string,
    }).isRequired,
  ).isRequired,
};

export default ErrorInfo;
