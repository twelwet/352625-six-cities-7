import React, {useState} from 'react';
import RatingStarsList from '../rating-stars-list/rating-stars-list.jsx';

function CommentForm() {
  const [comment, setComment] = useState({rating: null, review: ''});

  const handleSubmit = (evt) => {
    evt.preventDefault();
  };

  const handleFieldChange = (evt) => {
    const {name, value} = evt.target;
    if (evt.target.tagName === 'input') {
      setComment({...comment, [name]: parseInt(value, 10)});
    } else {
      setComment({...comment, [name]: value});
    }
  };

  return (
    <form
      className="reviews__form form"
      action="#"
      method="post"
      onSubmit={handleSubmit}
    >
      <label className="reviews__label form__label" htmlFor="review">Your review</label>
      <RatingStarsList changeHandler={handleFieldChange} activeStar={parseInt(comment.rating, 10)}/>
      <textarea
        className="reviews__textarea form__textarea"
        id="review"
        name="review"
        placeholder="Tell how was your stay, what you like and what can be improved"
        onChange={handleFieldChange}
        value={comment.review}
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

export default CommentForm;
