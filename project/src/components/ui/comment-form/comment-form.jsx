import React, {useState} from 'react';
import PropTypes from 'prop-types';
import {connect} from 'react-redux';
import RatingStarsList from '../rating-stars-list/rating-stars-list.jsx';
import Notification from '../notification/notification.jsx';
import {pushComment} from '../../../store/api-actions.js';
import offerPropTypes from '../../../prop-types/offer.prop.js';
import {Status, HttpCode} from '../../../constants.js';
import {MIN_COMMENT_LENGTH, MAX_COMMENT_LENGTH} from '../../../settings.js';
import {getOffer} from '../../../store/room/selectors.js';
import {getUserComment} from '../../../store/user/selectors';

function CommentForm({saveReview, offer, userComment}) {
  const [rating, setRating] = useState(null);
  const [text, setText] = useState('');

  const clearFormFields = () => {
    setRating(null);
    setText('');
  };

  const handleRating = (evt) => {
    const {value} = evt.target;
    setRating(parseInt(value, 10));
  };

  const handleText = (evt) => {
    const {value} = evt.target;
    setText(value);
  };

  const handleSubmit = (evt) => {
    evt.preventDefault();
    saveReview({
      offerId: offer.data.id,
      rating,
      comment: text,
    }).then((status) => status === HttpCode.OK && clearFormFields());
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
        onChange={handleText}
        className="reviews__textarea form__textarea"
        id="review"
        name="comment"
        value={text}
        placeholder="Tell how was your stay, what you like and what can be improved"
        maxLength={MAX_COMMENT_LENGTH}
        disabled={userComment.status === Status.PENDING}
        data-testid="comment"
      />
      <div className="reviews__button-wrapper">
        <p className="reviews__help">
          To submit review please make sure to set <span className="reviews__star">rating</span> and
          describe your stay with at least <b className="reviews__text-amount">50 characters</b>.
        </p>
        <button
          className="reviews__submit form__submit button"
          type="submit"
          disabled={(rating === null || text.length < MIN_COMMENT_LENGTH || userComment.status === Status.PENDING)}
          data-testid="send-comment"
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
  offer: getOffer(state),
  userComment: getUserComment(state),
});

const mapDispatchToProps = (dispatch) => ({
  saveReview(data) {
    return dispatch(pushComment({comment: data.comment, rating: data.rating}, data.offerId));
  },
});

export {CommentForm};
export default connect(mapStateToProps, mapDispatchToProps)(CommentForm);
