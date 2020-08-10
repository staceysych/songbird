import React, { Component } from 'react';

export default class Player extends Component {
  render() {
    return (
      <div className="player-wrapper">
        {/* <audio src="#" hidden /> */}
        <div className="player-controls">
          <div className="play-button">
            <i className="far fa-play-circle" />
          </div>
          <div className="player-timeline" />
        </div>
      </div>
    );
  }
}
