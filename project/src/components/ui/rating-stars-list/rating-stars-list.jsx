import React from 'react';
import PropTypes from 'prop-types';
import RatingStar from '../rating-star/rating-star.jsx';
import starsList from '../../../utils/gets-stars-list.js';

function RatingStarsList({changeHandler}) {
  return (
    <div className="reviews__rating-form form__rating">
      {
        starsList.map(
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
