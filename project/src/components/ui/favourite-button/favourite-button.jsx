import React, {useState} from 'react';
import PropTypes from 'prop-types';

function FavouriteButton({status}) {
  const [favFlag, setFavFlag] = useState(status);
  const handleFavFlag = () => setFavFlag(!favFlag);

  return (
    <button
      onClick={handleFavFlag}
      className={favFlag ? 'property__bookmark-button property__bookmark-button--active button' : 'property__bookmark-button button'}
      type="button"
    >
      <svg className="property__bookmark-icon" width="31" height="33">
        <use xlinkHref="#icon-bookmark"/>
      </svg>
      <span className="visually-hidden">To bookmarks</span>
    </button>
  );
}

FavouriteButton.propTypes = {
  status: PropTypes.bool.isRequired,
};

export default FavouriteButton;
