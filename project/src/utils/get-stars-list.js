import RATING_STARS from '../settings.js';

const getStarsList = (starsQuantity) =>
  (new Array(starsQuantity))
    .fill(starsQuantity)
    .map((item, index) => item - index);


export default getStarsList(RATING_STARS);
