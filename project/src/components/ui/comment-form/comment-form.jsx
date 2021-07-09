import React, {useState} from 'react';
import PropTypes from 'prop-types';
import {connect} from 'react-redux';
import RatingStarsList from '../rating-stars-list/rating-stars-list.jsx';
import Notification from '../notification/notification.jsx';
import {pushComment} from '../../../store/api-actions.js';
import offerPropTypes from '../../../prop-types/offer.prop.js';
import {Status, HttpCode} from '../../../constants';

const minCommentLength = 50;

function CommentForm({saveReview, offer, userComment}) {
  const reviewTemplate = {
    offerId: offer.data.id,
    rating: null,
    comment: '',
  };
  const [review, setReview] = useState(reviewTemplate);

  const handleSubmit = (evt) => {
    evt.preventDefault();
    saveReview(review).then((status) => status === HttpCode.OK && setReview(reviewTemplate));
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
      {userComment.status === Status.REJECTED ? <Notification message={'Mark the rating or write more characters'} position={{top: '5px', marginRight: '0px'}}/> : ''}
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
        disabled={userComment.status === Status.PENDING}
      />
      <div className="reviews__button-wrapper">
        <p className="reviews__help">
          To submit review please make sure to set <span className="reviews__star">rating</span> and
          describe your stay with at least <b className="reviews__text-amount">50 characters</b>.
        </p>
        <button
          className="reviews__submit form__submit button"
          type="submit"
          disabled={(review.comment.length < minCommentLength || review.rating === null || userComment.status === Status.PENDING) ? true : ''}
        >
          Submit
        </button>
      </div>
    </form>
  );
}

CommentForm.propTypes = {
  offer: offerPropTypes,
  userComment: PropTypes.shape({
    status: PropTypes.string.isRequired,
  }),
  saveReview: PropTypes.func.isRequired,
};

const mapStateToProps = (state) => ({
  offer: state.offer,
  userComment: state.userComment,
});

const mapDispatchToProps = (dispatch) => ({
  saveReview(data) {
    return dispatch(pushComment({comment: data.comment, rating: data.rating}, data.offerId));
  },
});

export {CommentForm};
export default connect(mapStateToProps, mapDispatchToProps)(CommentForm);
