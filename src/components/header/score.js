import React from 'react';
import PropTypes from 'prop-types';

const Score = ({ score, lang }) => (
  <div className="score-box">
    {lang === 'ru' ? 'Очки:' : 'Score:'}
    <span className="score">{score}</span>
  </div>
);

Score.propTypes = {
  score: PropTypes.number.isRequired,
  lang: PropTypes.string.isRequired,
};

export default Score;
