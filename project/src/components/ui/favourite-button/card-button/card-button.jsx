import React from 'react';
import PropTypes from 'prop-types';
import FavouriteButton from '../favourite-button.jsx';

function CardButton(props) {
  return (
    <FavouriteButton viewData={{
      width: '18',
      height: '19',
      name: 'place-card',
    }}
    {...props}
    />
  );

}

CardButton.propTypes = {
  status: PropTypes.bool.isRequired,
};

export default CardButton;
