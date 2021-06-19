import React from 'react';
import ReviewsList from './review-list/reviews-list.jsx';
import CommentForm from '../comment-form/comment-form.jsx';

function Reviews() {
  return (
    <section className="property__reviews reviews">
      <h2 className="reviews__title">Reviews &middot; <span className="reviews__amount">1</span></h2>
      <ReviewsList/>
      <CommentForm/>
    </section>
  );
}

export default Reviews;
