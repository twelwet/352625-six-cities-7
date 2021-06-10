import React from 'react';
import PropTypes from 'prop-types';
import RatingStar from '../rating-star/rating-star.jsx';

function RatingStarsList({changeHandler}) {
  return (
    <div className="reviews__rating-form form__rating">
      {
        [5, 4, 3, 2, 1].map(
          (star) => (
            <RatingStar
              key={`${star}-stars`}
              weight={star}
              changeHandler={changeHandler}
            />
          ),
        )
      }
    </div>
  );
}

RatingStarsList.propTypes = {
  changeHandler: PropTypes.func,
};

export default RatingStarsList;
