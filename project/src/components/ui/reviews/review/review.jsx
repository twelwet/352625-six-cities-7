import React from 'react';
import reviewPropTypes from '../../../../prop-types/review.prop.js';

const months = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'];

function Review({user, rating, comment, date}) {
  const adaptedDate = new Date(+ new Date(date));
  const year = adaptedDate.getFullYear();
  const month = adaptedDate.getMonth() + 1;
  const day = adaptedDate.getDate() + 1;
  const monthByLetters = months[adaptedDate.getMonth()];

  return (
    <li className="reviews__item">
      <div className="reviews__user user">
        <div className="reviews__avatar-wrapper user__avatar-wrapper">
          <img className="reviews__avatar user__avatar" src={user.avatarUrl} width="54" height="54" alt="Reviews avatar"/>
        </div>
        <span className="reviews__user-name">{user.name}</span>
      </div>
      <div className="reviews__info">
        <div className="reviews__rating rating">
          <div className="reviews__stars rating__stars">
            <span style={{width: `${100 * rating / 5}%`}}/>
            <span className="visually-hidden">Rating</span>
          </div>
        </div>
        <p className="reviews__text">{comment}</p>
        <time className="reviews__time" dateTime={`${year}-${month}-${day}`}>{`${monthByLetters} ${year}`}</time>
      </div>
    </li>
  );
}

Review.propTypes = reviewPropTypes;

export default Review;
