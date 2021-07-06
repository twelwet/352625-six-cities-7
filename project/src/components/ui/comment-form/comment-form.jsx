import React, {useState} from 'react';
import PropTypes from 'prop-types';
import {connect} from 'react-redux';
import RatingStarsList from '../rating-stars-list/rating-stars-list.jsx';
import {pushComment, fetchComments} from '../../../store/api-actions.js';
import offerPropTypes from '../../../prop-types/offer.prop.js';

const minCommentLength = 50;

function CommentForm({saveReview, offer}) {
  const reviewTemplate = {
    offerId: offer.id,
    rating: null,
    comment: '',
  };
  const [review, setReview] = useState(reviewTemplate);

  const handleSubmit = (evt) => {
    evt.preventDefault();
    saveReview(review);
    setReview(reviewTemplate);
  };

  const handleFieldChange = (evt) => {
    const {name, value} = evt.target;
    setReview({...review, [name]: name === 'rating' ? parseInt(value, 10) : value});
  };

  return (
    <form
      className="reviews__form form"
      action="#"
      method="post"
      onSubmit={handleSubmit}
    >
      <label className="reviews__label form__label" htmlFor="review">Your review</label>
      <RatingStarsList changeHandler={handleFieldChange} activeStar={parseInt(review.rating, 10)}/>
      <textarea
        className="reviews__textarea form__textarea"
        id="review"
        name="comment"
        placeholder="Tell how was your stay, what you like and what can be improved"
        onChange={handleFieldChange}
        value={review.comment}
        maxLength={'300'}
      />
      <div className="reviews__button-wrapper">
        <p className="reviews__help">
          To submit review please make sure to set <span className="reviews__star">rating</span> and
          describe your stay with at least <b className="reviews__text-amount">50 characters</b>.
        </p>
        <button
          className="reviews__submit form__submit button"
          type="submit"
          disabled={(review.comment.length < minCommentLength || review.rating === null) ? true : ''}
        >
          Submit
        </button>
      </div>
    </form>
  );
}

CommentForm.propTypes = {
  offer: offerPropTypes,
  saveReview: PropTypes.func.isRequired,
};

const mapStateToProps = (state) => ({
  offer: state.offer,
});

const mapDispatchToProps = (dispatch) => ({
  saveReview(data) {
    dispatch(pushComment({comment: data.comment, rating: data.rating}, data.offerId));
    dispatch(fetchComments(data.offerId));
  },
});

export {CommentForm};
export default connect(mapStateToProps, mapDispatchToProps)(CommentForm);
