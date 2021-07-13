import React, {useState} from 'react';
import PropTypes from 'prop-types';

function FavouriteButton({status, viewData}) {
  const [favFlag, setFavFlag] = useState(status);
  const handleFavFlag = () => setFavFlag(!favFlag);

  return (
    <button
      onClick={handleFavFlag}
      className={favFlag
        ? `${viewData.name}__bookmark-button ${viewData.name}__bookmark-button--active button`
        : `${viewData.name}__bookmark-button button`}
      type="button"
    >
      <svg className={`${viewData.name}__bookmark-icon`} width={viewData.width} height={viewData.height}>
        <use xlinkHref="#icon-bookmark"/>
      </svg>
      <span className="visually-hidden">To bookmarks</span>
    </button>
  );
}

FavouriteButton.propTypes = {
  status: PropTypes.bool.isRequired,
  viewData: PropTypes.shape({
    width: PropTypes.string.isRequired,
    height: PropTypes.string.isRequired,
    name: PropTypes.string.isRequired,
  }).isRequired,
};

export default FavouriteButton;
