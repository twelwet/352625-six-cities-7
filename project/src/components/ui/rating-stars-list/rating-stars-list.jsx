import React, {memo} from 'react';
import PropTypes from 'prop-types';
import RatingStar from '../rating-star/rating-star.jsx';
import starsList from '../../../utils/get-stars-list.js';

function RatingStarsList({changeHandler, activeStar}) {
  return (
    <div className="reviews__rating-form form__rating">
      {
        starsList.map(
          (star) => (
            <RatingStar
              key={`${star}-stars`}
              weight={star}
              changeHandler={changeHandler}
              active={activeStar === star}
            />
          ),
        )
      }
    </div>
  );
}

RatingStarsList.propTypes = {
  changeHandler: PropTypes.func.isRequired,
  activeStar: PropTypes.number.isRequired,
};

export default memo(RatingStarsList);
