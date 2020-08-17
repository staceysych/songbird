import React from 'react';

import PropTypes from 'prop-types';

const renderItems = (arr, onSpellClick) => arr.map(({
  shortDescription, isClicked, isCorrect, isWrong,
}) => {
  let spanClassName = 'checker-btn';
  let listClassName = 'list-group-item';

  if (isClicked) {
    listClassName += ' clicked';
  }

  if (isCorrect) {
    spanClassName += ' correct';
  }

  if (isWrong) {
    spanClassName += ' wrong';
  }

  return (
    <li
      key={shortDescription}
      id={shortDescription}
      className={listClassName}
      onClick={onSpellClick}
    >
      <span className={spanClassName} />
      {shortDescription}
    </li>
  );
});

const SpellListItem = ({
  onSpellClick,
  warmUpArr,
}) => {
  const items = renderItems(warmUpArr, onSpellClick);

  return (
    <>
      { items }
    </>
  );
};

SpellListItem.propTypes = {
  onSpellClick: PropTypes.func.isRequired,
  warmUpArr: PropTypes.arrayOf(PropTypes.object).isRequired,
};

export default SpellListItem;
