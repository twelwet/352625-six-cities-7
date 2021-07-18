import React from 'react';
import {connect} from 'react-redux';
import PropTypes from 'prop-types';
import FavouriteButton from '../favourite-button/card-button/card-button.jsx';
import offerDataPropTypes from '../../../prop-types/offer-data.prop.js';
import offerViewDataTypes from '../../../prop-types/offer-view-data.prop.js';
import authInfoPropTypes from '../../../prop-types/auth-info.prop.js';
import {Link} from 'react-router-dom';
import ucFirstChar from '../../../utils/upper-case-first-char.js';
import {getAuthInfo} from '../../../store/user/selectors.js';

function OfferCard({viewData, data, authInfo, setActiveOfferId = () => {}}) {
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
          <FavouriteButton status={isFavourite} offerId={id} authInfo={authInfo}/>
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
  data: offerDataPropTypes,
  authInfo: authInfoPropTypes,
  setActiveOfferId: PropTypes.func,
};

const mapStateToProps = (state) => ({
  authInfo: getAuthInfo(state),
});

export {OfferCard};
export default connect(mapStateToProps, null)(OfferCard);
