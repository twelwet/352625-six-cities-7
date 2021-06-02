import React from 'react';
import Main from '../main/main.jsx';
import PropTypes from 'prop-types';

function App({placesCount}) {
  return <Main placesCount={placesCount}/>;
}

App.propTypes = {
  placesCount: PropTypes.number,
};


export default App;
