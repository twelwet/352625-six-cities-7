import React from 'react';
import PropTypes from 'prop-types';
import offerPropTypes from '../../../prop-types/offer.prop.js';
import offerViewDataTypes from '../../../prop-types/offer-view-data.prop.js';
import {Link} from 'react-router-dom';
import ucFirstChar from '../../../utils/upper-case-first-char.js';

function OfferCard({viewData, data, setActiveOfferId = () => {}}) {
  const {
    cardWidth,
    cardHeight,
    classNames,
  } = viewData;

  const {
    mainBlock,
    imageBlock,
    infoBlock,
  } = classNames;

  const {
    id,
    title,
    type,
    price,
    previewImage,
    rating,
    isPremium,
    isFavourite,
  } = data;

  return (
    <article
      className={`${mainBlock} place-card`}
      onMouseEnter={() => setActiveOfferId(id)}
      onMouseLeave={() => setActiveOfferId(null)}
    >
      <div className={isPremium ? 'place-card__mark' : 'visually-hidden'}>
        <span>Premium</span>
      </div>
      <div
        className={`${imageBlock} place-card__image-wrapper`}
      >
        <Link to={`/offer/${id}`}>
          <img className="place-card__image" src={previewImage} width={cardWidth} height={cardHeight} alt="Some place"/>
        </Link>
      </div>
      <div
        className={`${infoBlock} place-card__info`}
      >
        <div className="place-card__price-wrapper">
          <div className="place-card__price">
            <b className="place-card__price-value">&euro;{price}</b>
            <span className="place-card__price-text">&#47;&nbsp;night</span>
          </div>
          <button className={isFavourite ? 'place-card__bookmark-button place-card__bookmark-button--active button' : 'place-card__bookmark-button button'} type="button">
            <svg className="place-card__bookmark-icon" width="18" height="19">
              <use xlinkHref="#icon-bookmark"/>
            </svg>
            <span className="visually-hidden">To bookmarks</span>
          </button>
        </div>
        <div className="place-card__rating rating">
          <div className="place-card__stars rating__stars">
            <span style={{width: `${100 * rating / 5}%`}}/>
            <span className="visually-hidden">Rating</span>
          </div>
        </div>
        <h2 className="place-card__name">
          <Link to={`/offer/${id}`}>{title}</Link>
        </h2>
        <p className="place-card__type">{ucFirstChar(type)}</p>
      </div>
    </article>
  );
}

OfferCard.propTypes = {
  viewData: offerViewDataTypes,
  data: offerPropTypes,
  setActiveOfferId: PropTypes.func,
};

export default OfferCard;
