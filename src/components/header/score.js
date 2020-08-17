import React from 'react';
import PropTypes from 'prop-types';

const Score = ({ score }) => (
  <div className="score-box">
    Score:
    <span className="score">{score}</span>
  </div>
);

Score.propTypes = {
  score: PropTypes.number.isRequired,
};

export default Score;
