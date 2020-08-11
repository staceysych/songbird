import React, { Component } from 'react';

import playImage from '../../assets/images/video.png';
import pauseImage from '../../assets/images/pause.png';
import volumeImage from '../../assets/images/volume.png';

export default class Player extends Component {
  constructor() {
    super();
    this.state = {
      pause: true,
      play: false,
    };
  }

  changeIconState = () => {
    this.setState((state) => ({ pause: !state.pause, play: !state.play }));
  }

  onVolumeClick = () => {
    console.log('Volume');
  }

  render() {
    const { pause, play } = this.state;
    const playIcon = pause
      ? <img className="play-icon" alt="play" src={playImage} onClick={this.changeIconState} />
      : null;
    const pauseIcon = play
      ? <img className="play-icon" alt="play" src={pauseImage} onClick={this.changeIconState} />
      : null;

    return (
      <>
        <div className="player-controls">
          <div className="play-button">
            {playIcon}
            {pauseIcon}
          </div>
          <div className="player-timeline">
            <div className="player-fill" />
            <div className="player-handle" />
          </div>
          <div className="player-volume">
            <img
              alt="volume"
              className="volume-icon"
              src={volumeImage}
              onClick={this.onVolumeClick}
            />
          </div>
        </div>
        <div className="timeline-info">
          <span>00:00</span>
          <span>02:00</span>
        </div>
      </>
    );
  }
}
