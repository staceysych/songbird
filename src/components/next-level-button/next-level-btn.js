import React from 'react';
import PropTypes from 'prop-types';

import { BUTTON_TEXT, FINISH_TEXT } from '../../utils/constants';

const NextLevelBtn = ({ isCorrectFound, onNextLevelClick, page }) => {
  const nextButtonText = page === 5 ? FINISH_TEXT : BUTTON_TEXT;
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
};

export default NextLevelBtn;
