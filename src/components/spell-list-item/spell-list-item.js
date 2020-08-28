import React from 'react';

import PropTypes from 'prop-types';

const renderItems = (arr, onSpellClick, lang) => arr.map(({
  shortDescription, shortDescriptionEng, isClicked, isCorrect, isWrong, isActive,
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

  if (isActive) {
    listClassName += ' active';
  }

  const description = lang === 'ru' ? shortDescription : shortDescriptionEng;

  return (
    <li
      key={shortDescription}
      id={shortDescription}
      className={listClassName}
      onClick={onSpellClick}
    >
      <span className={spanClassName} />
      {description}
    </li>
  );
});

const SpellListItem = ({
  onSpellClick,
  data,
  lang,
}) => {
  const items = renderItems(data, onSpellClick, lang);

  return (
    <>
      { items }
    </>
  );
};

SpellListItem.propTypes = {
  onSpellClick: PropTypes.func.isRequired,
  lang: PropTypes.string.isRequired,
  data: PropTypes.arrayOf(PropTypes.object).isRequired,
};

export default SpellListItem;
