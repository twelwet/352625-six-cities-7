import React, {useState} from 'react';
import {connect} from 'react-redux';
import PropTypes from 'prop-types';
import {pushFavouriteStatus} from '../../../store/api-actions.js';
import {HttpCode} from '../../../constants.js';

function FavouriteButton({onClick, offerId, status, viewData}) {
  const [favFlag, setFavFlag] = useState(status);
  const handleFavFlag = () => {
    onClick(offerId, (!favFlag ? 1 : 0)).then((statusCode) => statusCode === HttpCode.OK && setFavFlag(!favFlag));
  };

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
  onClick: PropTypes.func.isRequired,
  offerId: PropTypes.number.isRequired,
  status: PropTypes.bool.isRequired,
  viewData: PropTypes.shape({
    width: PropTypes.string.isRequired,
    height: PropTypes.string.isRequired,
    name: PropTypes.string.isRequired,
  }).isRequired,
};

const mapDispatchToProps = (dispatch) => ({
  onClick(offerId, status) {
    // TODO сломалсь редирект на /login при NO_AUTH
    return dispatch(pushFavouriteStatus(offerId, status));
  },
});

export default connect(null, mapDispatchToProps)(FavouriteButton);
