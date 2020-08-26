import React from 'react';
import PropTypes from 'prop-types';

import {
  START_GAME_TEXT,
  START_TEXT,
} from '../../utils/constants';

import speaker from '../../assets/images/speaker.png';
import mute from '../../assets/images/mute.png';

const StartPage = ({
  onStartGameClick,
  isMuted,
  onStartVolumeClick,
  startSong,
}) => {
  const volume = isMuted ? mute : speaker;

  if (!isMuted) {
    startSong.play();
  } else {
    startSong.pause();
  }
  return (
    <div className="start-page">
      <div className="volume-box">
        <img alt="volume" className="start-volume" src={volume} onClick={onStartVolumeClick} />
      </div>
      <h2 className="start-title">{START_GAME_TEXT}</h2>
      <button
        type="button"
        className="start-game btn btn-secondary"
        onClick={onStartGameClick}
      >
        {START_TEXT}
      </button>
    </div>
  );
};

StartPage.propTypes = {
  onStartGameClick: PropTypes.func.isRequired,
  isMuted: PropTypes.bool.isRequired,
  onStartVolumeClick: PropTypes.func.isRequired,
  startSong: PropTypes.objectOf(PropTypes.object).isRequired,
};

export default StartPage;
