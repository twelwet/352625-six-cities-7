import React from 'react';
import PropTypes from 'prop-types';
import CardMain from '../../offer-card/card-main/card-main.jsx';
import offersPropTypes from '../../../../prop-types/offers.prop';

function ListMain ({offers, setActiveOfferId}) {

  return (
    <div className="cities__places-list places__list tabs__content">
      {
        offers.map(
          (offer) =>
            (
              <CardMain
                key={offer.id}
                data={offer}
                setActiveOfferId={setActiveOfferId}
              />
            ),
        )
      }
    </div>
  );
}

ListMain.propTypes = {
  offers: offersPropTypes,
  setActiveOfferId: PropTypes.func.isRequired,
};


export default ListMain;
