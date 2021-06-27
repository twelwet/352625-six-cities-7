import React, {useEffect} from 'react';
import {connect} from 'react-redux';
import PropTypes from 'prop-types';
import offerPropTypes from '../../../prop-types/offer-not-required.prop.js';
import offersPropTypes from '../../../prop-types/offers.prop.js';
import Spinner from '../../ui/spinner/spinner.jsx';
import Header from '../../ui/header/header.jsx';
import Reviews from '../../ui/reviews/reviews.jsx';
import ListNeighborhood from '../../ui/offers-list/list-neighborhood/list-neighborhood.jsx';
import reviewsPropTypes from '../../../prop-types/reviews.prop';
import Map from '../../ui/map/map';
import ucFirstChar from '../../../utils/upper-case-first-char.js';
import {fetchOfferById, fetchNeighborOffers, fetchComments} from '../../../store/api-actions.js';

function Room({roomId, getOfferById, getNeighborOffersById, getCommentsByOfferId, offer, neighborOffers, reviews, authorizationStatus}) {
  useEffect(() => {
    getOfferById(roomId);
    getNeighborOffersById(roomId);
    getCommentsByOfferId(roomId);
  }, [getOfferById, getNeighborOffersById, roomId]);

  const {
    id,
    title,
    description,
    type,
    price,
    images,
    rating,
    bedrooms,
    maxAdults,
    goods,
    host,
    isPremium,
    isFavourite,
  } = offer;

  if (Object.keys(offer).length === 0 || neighborOffers.length === 0 || reviews.length === 0) {
    return <Spinner/>;
  }

  return (
    <div className="page">
      <Header/>

      <main className="page__main page__main--property">
        <section className="property">
          <div className="property__gallery-container container">
            <div className="property__gallery">
              {
                images.map(
                  (image) => (
                    <div key={image} className="property__image-wrapper">
                      <img className="property__image" src={image} alt="studio"/>
                    </div>
                  ),
                )
              }
            </div>
          </div>
          <div className="property__container container">
            <div className="property__wrapper">
              <div className={isPremium ? 'property__mark' : 'visually-hidden'}>
                <span>Premium</span>
              </div>
              <div className="property__name-wrapper">
                <h1 className="property__name">
                  {title}
                </h1>
                <button className={isFavourite ? 'property__bookmark-button property__bookmark-button--active button' : 'property__bookmark-button button'} type="button">
                  <svg className="property__bookmark-icon" width="31" height="33">
                    <use xlinkHref="#icon-bookmark"/>
                  </svg>
                  <span className="visually-hidden">To bookmarks</span>
                </button>
              </div>
              <div className="property__rating rating">
                <div className="property__stars rating__stars">
                  <span style={{width: `${100 * rating / 5}%`}}/>
                  <span className="visually-hidden">Rating</span>
                </div>
                <span className="property__rating-value rating__value">{rating}</span>
              </div>
              <ul className="property__features">
                <li className="property__feature property__feature--entire">
                  {ucFirstChar(type)}
                </li>
                <li className="property__feature property__feature--bedrooms">
                  {bedrooms} Bedrooms
                </li>
                <li className="property__feature property__feature--adults">
                  Max {maxAdults} adults
                </li>
              </ul>
              <div className="property__price">
                <b className="property__price-value">&euro;{price}</b>
                <span className="property__price-text">&nbsp;night</span>
              </div>
              <div className="property__inside">
                <h2 className="property__inside-title">What&apos;s inside</h2>
                <ul className="property__inside-list">
                  {
                    goods.map(
                      (item) => (
                        <li key={item} className="property__inside-item">
                          {item}
                        </li>
                      ),
                    )
                  }
                </ul>
              </div>
              <div className="property__host">
                <h2 className="property__host-title">Meet the host</h2>
                <div className="property__host-user user">
                  <div className={host.isPro ? 'property__avatar-wrapper property__avatar-wrapper--pro user__avatar-wrapper' : 'property__avatar-wrapper user__avatar-wrapper'}>
                    <img className="property__avatar user__avatar" src={host.avatarUrl  ? host.avatarUrl : 'img/avatar.svg'} width="74" height="74" alt="Host avatar"/>
                  </div>
                  <span className="property__user-name">
                    {host.name}
                  </span>
                  {
                    host.isPro ?
                      <span className="property__user-status">
                        Pro
                      </span> :
                      ''
                  }
                </div>
                <div className="property__description">
                  <p className="property__text">
                    {description}
                  </p>
                </div>
              </div>
              <Reviews reviews={reviews} authorizationStatus={authorizationStatus}/>
            </div>
          </div>
          <section className="property__map map">
            <Map offers={neighborOffers.concat(offer)} city={offer.city} activeOfferId={id}/>
          </section>
        </section>
        <div className="container">
          <section className="near-places places">
            <h2 className="near-places__title">Other places in the neighbourhood</h2>
            <ListNeighborhood offers={neighborOffers} />
          </section>
        </div>
      </main>
    </div>
  );
}

Room.propTypes = {
  roomId: PropTypes.number.isRequired,
  offer: offerPropTypes,
  neighborOffers: offersPropTypes,
  reviews: reviewsPropTypes,
  authorizationStatus: PropTypes.string.isRequired,
  getOfferById: PropTypes.func.isRequired,
  getNeighborOffersById: PropTypes.func.isRequired,
  getCommentsByOfferId: PropTypes.func.isRequired,
};

const mapStateToProps = (state) => ({
  offer: state.offer,
  neighborOffers: state.neighborOffers,
  reviews: state.reviews,
  authorizationStatus: state.authorizationStatus,
});

const mapDispatchToProps = (dispatch) => ({
  getOfferById (id) {
    dispatch(fetchOfferById(id));
  },
  getNeighborOffersById (id) {
    dispatch(fetchNeighborOffers(id));
  },
  getCommentsByOfferId (id) {
    dispatch(fetchComments(id));
  },
});

export {Room};
export default connect(mapStateToProps, mapDispatchToProps)(Room);
