import React from 'react';
import Review from '../review/review.jsx';
import reviewsPropTypes from '../../../../prop-types/reviews.prop.js';

function ReviewsList({reviews}) {
  return (
    <ul className="reviews__list">
      {
        reviews
          .sort((a, b) => (+ new Date(b.date)) - (+ new Date(a.date)))
          .map(
            (review) => (
              <Review key={review.id} {...review}/>
            ),
          )
      }
    </ul>
  );
}

ReviewsList.propTypes = {
  reviews: reviewsPropTypes,
};

export default ReviewsList;
