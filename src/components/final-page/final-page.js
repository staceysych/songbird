import React from 'react';
import PropTypes from 'prop-types';

import harryClapGif from '../../assets/images/harry-clap.gif';
import allClap from '../../assets/images/tenor.gif';
import {
  WIN_TEXT,
  TOTAL_WIN_TEXT,
  PLAY_AGAIN_TEXT,
  RU,
  ENG,
} from '../../utils/constants';

import speaker from '../../assets/images/speaker.png';
import mute from '../../assets/images/mute.png';

const FinalPage = ({
  score,
  maxScore,
  startOver,
  isLoading,
  onImageLoaded,
  isMuted,
  onStartVolumeClick,
  finalSong,
  lang,
}) => {
  const isMaxScore = score === maxScore;
  const isLangRu = lang === 'ru';
  const totalWinText = isLangRu ? TOTAL_WIN_TEXT[RU] : TOTAL_WIN_TEXT[ENG];
  const winText = isLangRu ? WIN_TEXT[RU] : WIN_TEXT[ENG];
  const congratsImage = isMaxScore ? allClap : harryClapGif;
  const congratsText = isMaxScore ? totalWinText : winText;
  const volume = isMuted ? mute : speaker;
  const playAgainText = isLangRu ? PLAY_AGAIN_TEXT[RU] : PLAY_AGAIN_TEXT[ENG];

  if (!isMuted) {
    finalSong.play();
  } else {
    finalSong.pause();
  }

  return (
    <div className="final-page" style={isLoading ? { display: 'none' } : {}}>
      <div className="final-container">
        <div className="volume-box">
          <img
            alt="volume"
            className="start-volume"
            src={volume}
            onClick={onStartVolumeClick}
          />
        </div>
        <h2 className="final-title">{congratsText}</h2>
        <span className="final-score">
          {`${isLangRu ? 'Твои очки:' : 'Your score:'} ${score} / ${maxScore}`}
        </span>
        <img alt="gif" className="final-gif" src={congratsImage} onLoad={onImageLoaded} />
        <button type="button" className="play-again btn btn-secondary" onClick={startOver}>
          {playAgainText}
        </button>
      </div>
    </div>
  );
};

FinalPage.propTypes = {
  score: PropTypes.number.isRequired,
  maxScore: PropTypes.number.isRequired,
  startOver: PropTypes.func.isRequired,
  isLoading: PropTypes.bool.isRequired,
  onImageLoaded: PropTypes.func.isRequired,
  finalSong: PropTypes.objectOf(PropTypes.object).isRequired,
  lang: PropTypes.string.isRequired,
  onStartVolumeClick: PropTypes.func.isRequired,
  isMuted: PropTypes.bool.isRequired,
};

export default FinalPage;
