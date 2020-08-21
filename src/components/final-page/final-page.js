import React from 'react';
import PropTypes from 'prop-types';

import harryClapGif from '../../assets/images/harry-clap.gif';
import allClap from '../../assets/images/tenor.gif';
import {
  WIN_TEXT,
  TOTAL_WIN_TEXT,
  PLAY_AGAIN_TEXT,
} from '../../utils/constants';

const FinalPage = ({ score, maxScore }) => {
  const isMaxScore = score === maxScore;
  const congratsImage = isMaxScore ? allClap : harryClapGif;
  const congratsText = isMaxScore ? TOTAL_WIN_TEXT : WIN_TEXT;

  return (
    <div className="final-page">
      <h2 className="final-title">{congratsText}</h2>
      <span className="final-score">
        {`Твои очки: ${score} / ${maxScore}`}
      </span>
      <img alt="gif" className="final-gif" src={congratsImage} />
      <button className="play-again btn btn-secondary">{PLAY_AGAIN_TEXT}</button>
    </div>
  );
};

FinalPage.propTypes = {
    score: PropTypes.number.isRequired,
    maxScore: PropTypes.number.isRequired,
};

export default FinalPage;
