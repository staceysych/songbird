import React from 'react';
import PropTypes from 'prop-types';

const NextLevelBtn = ({ isCorrectFound }) => {
  let buttonStyle = 'next-level-btn btn';

  if (isCorrectFound) {
    buttonStyle += ' activated';
  }
  return (
  <button className={buttonStyle}>Next Level</button>
  );
};

NextLevelBtn.propTypes = {
  isCorrectFound: PropTypes.bool.isRequired,
};

export default NextLevelBtn;
