import RATING_STARS from '../settings.js';

const getStarsList = (starsQuantity) => {
  const result = [];
  let star = starsQuantity;

  do {
    result.push(star);
    star--;
  } while (star > 0);

  return result;
};

export default getStarsList(RATING_STARS);
