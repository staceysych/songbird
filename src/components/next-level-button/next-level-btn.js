import React from 'react';
import PropTypes from 'prop-types';

const NextLevelBtn = ({ isCorrectFound, onNextLevelClick }) => {
  let buttonStyle = 'next-level-btn btn';

  if (isCorrectFound) {
    buttonStyle += ' activated';
  }
  return (
    <button
      className={buttonStyle}
      onClick={onNextLevelClick}
    >
      Next Level
    </button>
  );
};

NextLevelBtn.propTypes = {
  isCorrectFound: PropTypes.bool.isRequired,
  onNextLevelClick: PropTypes.func.isRequired,
};

export default NextLevelBtn;
