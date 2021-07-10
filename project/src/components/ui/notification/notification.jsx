import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import './styles.css';
import {NOTIFICATION_SHOW_TIMEOUT} from '../../../settings.js';

function Notification({message, position}) {
  const [compClass, setCompClass] = useState('alert show');
  const hideMe = (timeout) =>
    setTimeout(() => setCompClass('alert hide'), timeout);

  useEffect(
    () => {
      const id = hideMe(NOTIFICATION_SHOW_TIMEOUT);
      return () => clearTimeout(id);
    },
  );

  return (
    <div style={{position: 'relative'}}>
      <div className={compClass} style={position}>
        <span className={'msg'}>{message}</span>
      </div>
    </div>
  );
}

Notification.propTypes = {
  message: PropTypes.string.isRequired,
  position: PropTypes.shape({
    top: PropTypes.string.isRequired,
    marginRight: PropTypes.string.isRequired,
  }).isRequired,
};

export default Notification;
