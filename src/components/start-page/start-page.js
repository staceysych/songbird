import React from 'react';
import PropTypes from 'prop-types';

import {
  START_GAME_TEXT,
  START_TEXT,
  RU,
  ENG,
} from '../../utils/constants';

import speaker from '../../assets/images/speaker.png';
import mute from '../../assets/images/mute.png';

const StartPage = ({
  onStartGameClick,
  isMuted,
  onStartVolumeClick,
  startSong,
  onImageLoaded,
  isLoading,
  lang,
  onLangClick,
}) => {
  const isLangRu = lang === 'ru';
  const volume = isMuted ? mute : speaker;
  const langText = isLangRu ? 'Русский' : 'English';
  const welcomeText = isLangRu ? START_GAME_TEXT[RU] : START_GAME_TEXT[ENG];
  const buttonText = isLangRu ? START_TEXT[RU] : START_TEXT[ENG];

  if (!isMuted) {
    startSong.play();
  } else {
    startSong.pause();
  }
  return (
    <div className="start-page" style={isLoading ? { display: 'none' } : {}}>
      <div className="volume-box">
        <img
          alt="volume"
          className="start-volume"
          src={volume}
          onClick={onStartVolumeClick}
          onLoad={onImageLoaded}
        />
      </div>
      <div className="lang-box">
        <button className="lang-btn ru btn btn-secondary" onClick={onLangClick}>{langText}</button>
      </div>
      <div className="start-title">
        <span>{welcomeText}</span>
        <button
          type="button"
          className="start-game btn btn-secondary"
          onClick={onStartGameClick}
        >
          {buttonText}
        </button>
      </div>
    </div>
  );
};

StartPage.propTypes = {
  onStartGameClick: PropTypes.func.isRequired,
  isMuted: PropTypes.bool.isRequired,
  onStartVolumeClick: PropTypes.func.isRequired,
  startSong: PropTypes.objectOf(PropTypes.object).isRequired,
  onImageLoaded: PropTypes.func.isRequired,
  isLoading: PropTypes.bool.isRequired,
  lang: PropTypes.string.isRequired,
  onLangClick: PropTypes.func.isRequired,
};

export default StartPage;
