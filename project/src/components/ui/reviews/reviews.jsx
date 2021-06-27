import React from 'react';
import PropTypes from 'prop-types';
import ReviewsList from './reviews-list/reviews-list.jsx';
import CommentForm from '../comment-form/comment-form.jsx';
import reviewsPropTypes from '../../../prop-types/reviews.prop.js';
import {AuthorizationStatus} from '../../../constants.js';

function Reviews({reviews, authorizationStatus}) {
  return (
    <section className="property__reviews reviews">
      <h2 className="reviews__title">Reviews &middot; <span className="reviews__amount">{reviews.length}</span></h2>
      <ReviewsList reviews={reviews}/>
      {authorizationStatus === AuthorizationStatus.AUTH ? <CommentForm/> : ''}
    </section>
  );
}

Reviews.propTypes = {
  reviews: reviewsPropTypes,
  authorizationStatus: PropTypes.string.isRequired,
};

export default Reviews;
