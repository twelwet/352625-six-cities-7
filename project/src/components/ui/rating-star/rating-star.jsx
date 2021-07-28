import React, {memo} from 'react';
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
        checked={active}
        data-testid={'rating-radio'}
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
  weight: PropTypes.number.isRequired,
  changeHandler: PropTypes.func.isRequired,
  active: PropTypes.bool.isRequired,
};

export default memo(RatingStar);
