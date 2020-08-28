import React from 'react';
import PropTypes from 'prop-types';

import {
  BUTTON_TEXT,
  FINISH_TEXT,
  RU,
  ENG,
} from '../../utils/constants';

const NextLevelBtn = ({
  isCorrectFound,
  onNextLevelClick,
  page,
  lang,
}) => {
  const buttonText = lang === 'ru' ? BUTTON_TEXT[RU] : BUTTON_TEXT[ENG];
  const finishText = lang === 'ru' ? FINISH_TEXT[RU] : FINISH_TEXT[ENG];
  const nextButtonText = page === 5 ? finishText : buttonText;
  let buttonClass = 'next-level-btn btn';

  if (isCorrectFound) {
    buttonClass += ' activated';
  }

  const buttonStyle = {
    pointerEvents: isCorrectFound ? 'all' : 'none',
  };

  return (
    <button
      className={buttonClass}
      onClick={onNextLevelClick}
      style={buttonStyle}
    >
      {nextButtonText}
    </button>
  );
};

NextLevelBtn.propTypes = {
  isCorrectFound: PropTypes.bool.isRequired,
  onNextLevelClick: PropTypes.func.isRequired,
  page: PropTypes.number.isRequired,
  lang: PropTypes.string.isRequired,
};

export default NextLevelBtn;
