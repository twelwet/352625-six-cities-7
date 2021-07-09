import React from 'react';
import reviewDataPropTypes from '../../../../prop-types/review-data.prop.js';

function Review({user, rating, comment, date}) {
  const year = (new Date(date)).toLocaleString('en-US', {year: 'numeric'});
  const month = (new Date(date)).toLocaleString('en-US', {month: '2-digit'});
  const day = (new Date(date)).toLocaleString('en-US', {day: '2-digit'});
  const commentDate = (new Date(date)).toLocaleString('en-US', {month: 'long', year: 'numeric'});

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
        <time className="reviews__time" dateTime={`${year}-${month}-${day}`}>{commentDate}</time>
      </div>
    </li>
  );
}

Review.propTypes = reviewDataPropTypes;

export default Review;
