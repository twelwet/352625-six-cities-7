import React from 'react';
import Review from '../review/review.jsx';
import reviewsDataPropTypes from '../../../../prop-types/reviews-data.prop.js';
import {COMMENTS_TO_SHOW} from '../../../../settings.js';

function ReviewsList({reviews}) {
  return (
    <ul className="reviews__list">
      {
        reviews
          .sort((a, b) => (+ new Date(b.date)) - (+ new Date(a.date)))
          .slice(0, COMMENTS_TO_SHOW)
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
