import React, {useState, useRef} from 'react';
import PropTypes from 'prop-types';
import {connect} from 'react-redux';
import RatingStarsList from '../rating-stars-list/rating-stars-list.jsx';
import Notification from '../notification/notification.jsx';
import {pushComment} from '../../../store/api-actions.js';
import offerPropTypes from '../../../prop-types/offer.prop.js';
import {Status, HttpCode} from '../../../constants.js';
import {MIN_COMMENT_LENGTH, MAX_COMMENT_LENGTH} from '../../../settings.js';
import {getOffer} from '../../../store/room/selectors.js';
import {getAuthInfo, getUserComment} from '../../../store/user/selectors';

function CommentForm({saveReview, offer, userComment, authInfo}) {
  const commentRef = useRef();
  const [rating, setRating] = useState(null);

  const clearFormFields = () => {
    setRating(null);
    commentRef.current.value = '';
  };

  const handleRating = (evt) => {
    const {value} = evt.target;
    setRating(parseInt(value, 10));
  };

  const handleSubmit = (evt) => {
    evt.preventDefault();
    saveReview({
      offerId: offer.data.id,
      rating,
      comment: commentRef.current.value,
    }, authInfo.token).then((status) => status === HttpCode.OK && clearFormFields());
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
      <RatingStarsList changeHandler={handleRating} activeStar={parseInt(rating, 10)}/>
      <textarea
        ref={commentRef}
        className="reviews__textarea form__textarea"
        id="review"
        name="comment"
        placeholder="Tell how was your stay, what you like and what can be improved"
        minLength={MIN_COMMENT_LENGTH}
        maxLength={MAX_COMMENT_LENGTH}
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
          disabled={(rating === null || userComment.status === Status.PENDING)}
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
  // TODO уточнить PropTypes
  authInfo: PropTypes.object,
};

const mapStateToProps = (state) => ({
  offer: getOffer(state),
  userComment: getUserComment(state),
  authInfo: getAuthInfo(state),
});

const mapDispatchToProps = (dispatch) => ({
  saveReview(data, token) {
    return dispatch(pushComment({comment: data.comment, rating: data.rating}, data.offerId, token));
  },
});

export {CommentForm};
export default connect(mapStateToProps, mapDispatchToProps)(CommentForm);
