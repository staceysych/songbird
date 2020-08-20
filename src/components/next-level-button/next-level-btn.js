import React from 'react';
import PropTypes from 'prop-types';

import { BUTTON_TEXT } from '../../utils/constants';

const NextLevelBtn = ({ isCorrectFound, onNextLevelClick }) => {
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
      {BUTTON_TEXT}
    </button>
  );
};

NextLevelBtn.propTypes = {
  isCorrectFound: PropTypes.bool.isRequired,
  onNextLevelClick: PropTypes.func.isRequired,
};

export default NextLevelBtn;
