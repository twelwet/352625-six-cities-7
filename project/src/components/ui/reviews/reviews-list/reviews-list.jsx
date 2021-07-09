import React from 'react';
import Review from '../review/review.jsx';
import reviewsDataPropTypes from '../../../../prop-types/reviews-data.prop.js';

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
  reviews: reviewsDataPropTypes,
};

export default ReviewsList;
