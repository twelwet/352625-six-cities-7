import React, {useState} from 'react';
import PropTypes from 'prop-types';
import {sorts} from '../../../utils/sort-offers';

function SortMenu({activeSort, setActiveSort}) {
  const [isSortMenuOpen, setIsSortMenuOpen] = useState(false);
  return (
    <form className="places__sorting" action="#" method="get">
      <span className="places__sorting-caption">Sort by</span>
      <span
        onClick={() => setIsSortMenuOpen(!isSortMenuOpen)}
        className="places__sorting-type" tabIndex="0"
      >{activeSort}
        <svg className="places__sorting-arrow" width="7" height="4"><use xlinkHref="#icon-arrow-select"/></svg>
      </span>
      <ul className={isSortMenuOpen ? 'places__options places__options--custom places__options--opened' : 'places__options places__options--custom'}>
        {
          sorts.map(
            (sortType) => (
              <li
                key={sortType}
                className={sortType === activeSort ? 'places__option places places__option--active' : 'places__option places'}
                tabIndex="0"
                onClick={
                  () => {
                    setActiveSort(sortType);
                    setIsSortMenuOpen(false);
                  }
                }
              >
                {sortType}
              </li>
            ),
          )
        }
      </ul>
    </form>
  );
}

SortMenu.propTypes = {
  activeSort: PropTypes.string.isRequired,
  setActiveSort: PropTypes.func.isRequired,
};

export default SortMenu;
