import React from 'react';
import PropTypes from 'prop-types';

function RatingStar({weight, changeHandler, active}) {
  return (
    <>
      <input
        className="form__rating-input visually-hidden"
        name="rating"
        value={weight}
        id={`${weight}-stars`}
        type="radio"
        onChange={changeHandler}
        defaultChecked={false}
        checked={active}
      />
      <label htmlFor={`${weight}-stars`} className="reviews__rating-label form__rating-label" title="perfect">
        <svg className="form__star-image" width="37" height="33">
          <use xlinkHref="#icon-star"/>
        </svg>
      </label>
    </>
  );
}

RatingStar.propTypes = {
  weight: PropTypes.number,
  changeHandler: PropTypes.func,
  active: PropTypes.bool,
};

export default RatingStar;
