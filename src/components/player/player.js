import React, { Component } from 'react';

import play from '../../assets/images/video.png';

export default class Player extends Component {
  render() {
    return (
      <>
        <div className="player-controls">
          <div className="play-button">
            <img className="play-icon" alt="play" src={play} />
          </div>
          <div className="player-timeline">
            <div className="fill" />
            <div className="handle" />
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
