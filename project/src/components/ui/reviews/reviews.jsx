import React from 'react';
import PropTypes from 'prop-types';
import ReviewsList from './reviews-list/reviews-list.jsx';
import CommentForm from '../comment-form/comment-form.jsx';
import reviewsPropTypes from '../../../prop-types/reviews.prop.js';
import {AuthorizationStatus} from '../../../constants.js';

function Reviews({offerId, reviews, authorizationStatus}) {
  const offerReviews = reviews.filter((review) => review.offerId === offerId);
  return (
    <section className="property__reviews reviews">
      <h2 className="reviews__title">Reviews &middot; <span className="reviews__amount">{offerReviews.length}</span></h2>
      <ReviewsList reviews={offerReviews}/>
      {authorizationStatus === AuthorizationStatus.AUTH ? <CommentForm/> : ''}
    </section>
  );
}

Reviews.propTypes = {
  offerId: PropTypes.number.isRequired,
  reviews: reviewsPropTypes,
  authorizationStatus: PropTypes.string.isRequired,
};

export default Reviews;
