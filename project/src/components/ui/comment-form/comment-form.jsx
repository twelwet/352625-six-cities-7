import React, {useState} from 'react';
import PropTypes from 'prop-types';
import {connect} from 'react-redux';
import RatingStarsList from '../rating-stars-list/rating-stars-list.jsx';
import {ActionCreator} from '../../../store/action.js';

const reviewTemplate = {
  id: 1234567890,
  date: '',
  rating: null,
  comment: '',
  user: {
    id: null,
    name: null,
    avatarUrl: null,
    isPro: null,
  },
};

function CommentForm({saveReview, authInfo}) {
  const [review, setReview] = useState(reviewTemplate);

  const handleSubmit = (evt) => {
    evt.preventDefault();

    review.date = new Date().toISOString();

    const {id, name, avatarUrl, isPro} = authInfo;
    review.user.id = id;
    review.user.name = name;
    review.user.avatarUrl = avatarUrl;
    review.user.isPro = isPro;

    saveReview(review);
  };

  const handleFieldChange = (evt) => {
    const {name, value} = evt.target;
    setReview({...review, [name]: value});
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
      />
      <div className="reviews__button-wrapper">
        <p className="reviews__help">
          To submit review please make sure to set <span className="reviews__star">rating</span> and
          describe your stay with at least <b className="reviews__text-amount">50 characters</b>.
        </p>
        <button className="reviews__submit form__submit button" type="submit" disabled="">Submit</button>
      </div>
    </form>
  );
}

CommentForm.propTypes = {
  saveReview: PropTypes.func.isRequired,
  authInfo: PropTypes.shape({
    id: PropTypes.number,
    email: PropTypes.string,
    name: PropTypes.string,
    avatarUrl: PropTypes.string,
    isPro: PropTypes.bool,
    token: PropTypes.string,
  }),
};

const mapStateToProps = (state) => ({
  authInfo: state.authInfo,
});

const mapDispatchToProps = (dispatch) => ({
  saveReview(data) {
    dispatch(ActionCreator.saveComment(data));
  },
});

export {CommentForm};
export default connect(mapStateToProps, mapDispatchToProps)(CommentForm);
