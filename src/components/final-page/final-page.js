import React from 'react';
import PropTypes from 'prop-types';

import harryClapGif from '../../assets/images/harry-clap.gif';
import allClap from '../../assets/images/tenor.gif';
import {
  WIN_TEXT,
  TOTAL_WIN_TEXT,
  PLAY_AGAIN_TEXT,
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
}) => {
  const isMaxScore = score === maxScore;
  const congratsImage = isMaxScore ? allClap : harryClapGif;
  const congratsText = isMaxScore ? TOTAL_WIN_TEXT : WIN_TEXT;
  const volume = isMuted ? mute : speaker;

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
        {`Твои очки: ${score} / ${maxScore}`}
      </span>
      <img alt="gif" className="final-gif" src={congratsImage} onLoad={onImageLoaded} />
      <button type="button" className="play-again btn btn-secondary" onClick={startOver}>
        {PLAY_AGAIN_TEXT}
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
};

export default FinalPage;
