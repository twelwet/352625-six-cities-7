import React from 'react';
import offerPropTypes from '../../../prop-types/offer.prop.js';
import {Link} from 'react-router-dom';

function OfferCardFavourites({data}) {
  const {
    id,
    description,
    type,
    price,
    image,
    rating,
    isPremium,
    isBookmark,
  } = data;

  return (
    <article
      className={'favorites__card place-card'}
    >
      <div className={isPremium ? 'place-card__mark' : 'visually-hidden'}>
        <span>Premium</span>
      </div>
      <div
        className={'favorites__image-wrapper place-card__image-wrapper'}
      >
        <Link to={`/offer/${id}`}>
          <img className="place-card__image" src={image} width={'150'} height={'110'} alt="Some place"/>
        </Link>
      </div>
      <div
        className={'favorites__card-info place-card__info'}
      >
        <div className="place-card__price-wrapper">
          <div className="place-card__price">
            <b className="place-card__price-value">&euro;{price}</b>
            <span className="place-card__price-text">&#47;&nbsp;night</span>
          </div>
          <button className={isBookmark ? 'place-card__bookmark-button place-card__bookmark-button--active button' : 'place-card__bookmark-button button'} type="button">
            <svg className="place-card__bookmark-icon" width="18" height="19">
              <use xlinkHref="#icon-bookmark"/>
            </svg>
            <span className="visually-hidden">To bookmarks</span>
          </button>
        </div>
        <div className="place-card__rating rating">
          <div className="place-card__stars rating__stars">
            <span style={{width: `${rating}%`}}/>
            <span className="visually-hidden">Rating</span>
          </div>
        </div>
        <h2 className="place-card__name">
          <Link to={`/offer/${id}`}>{description}</Link>
        </h2>
        <p className="place-card__type">{type}</p>
      </div>
    </article>
  );
}

OfferCardFavourites.propTypes = {
  data: offerPropTypes,
};

export default OfferCardFavourites;
