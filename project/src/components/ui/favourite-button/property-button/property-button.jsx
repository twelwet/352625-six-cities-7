import React from 'react';
import PropTypes from 'prop-types';
import FavouriteButton from '../favourite-button.jsx';

function PropertyButton(props) {
  return (
    <FavouriteButton viewData={{
      width: '31',
      height: '33',
      name: 'property',
    }}
    {...props}
    />
  );
}

PropertyButton.propTypes = {
  status: PropTypes.bool.isRequired,
};

export default PropertyButton;
