import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import './styles.css';

const NOTIFICATION_SHOW_TIMEOUT = 5000;

function Notification({message}) {
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
      <div className={compClass}>
        <span className={'msg'}>{message}</span>
      </div>
    </div>
  );
}

Notification.propTypes = {
  message: PropTypes.string.isRequired,
};

export default Notification;
