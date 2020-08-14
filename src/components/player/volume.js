import React, { Component } from 'react';
import PropTypes from 'prop-types';

import volumeImage from '../../assets/images/volume.png';

class Volume extends Component {
  onVolumeClick = () => {
    const volumeControls = document.querySelector('.volume-controls');
    volumeControls.classList.toggle('hidden');
  };

  calculateVolumePercent = (position) => {
    const slider = document.querySelector('.slider');
    const { top, height } = slider.getBoundingClientRect();
    let volumePercentage = Math.round(100 * (1 - (position - top) / height));

    volumePercentage = volumePercentage >= 0 ? volumePercentage : 0;

    return volumePercentage <= 100 ? volumePercentage : 100;
  };

  moveAt = (percent) => {
    const progress = document.querySelector('.progress');
    const handle = document.querySelector('.volume-handle');
    progress.style.height = `${percent}%`;
    handle.style.top = `${(100 - percent) * 0.9}%`;
  };

  changeVolume = (volumePercentage) => {
    const { audio } = this.props;
    const volume = volumePercentage / 100;
    audio.volume = volume;
  };

  changeVolumePosition = (event) => {
    const progressPositionY = event.clientY;
    const volumePercentage = this.calculateVolumePercent(progressPositionY);

    this.moveAt(volumePercentage);
    this.changeVolume(volumePercentage);
  };

  onMouseDown = (event) => {
    this.changeVolumePosition(event);

    document.addEventListener('mousemove', this.changeVolumePosition);
    document.addEventListener('mouseup', () => {
      document.removeEventListener('mousemove', this.changeVolumePosition);
    });
  };

  render() {
    return (
      <div className="player-volume">
        <img
          alt="volume"
          className="volume-icon"
          src={volumeImage}
          onClick={this.onVolumeClick}
        />
        <div className="volume-controls hidden">
          <div role="button" tabIndex={0} className="slider" onMouseDown={this.onMouseDown}>
            <div className="progress" />
            <div className="player-handle volume-handle" />
          </div>
        </div>
      </div>
    );
  }
}

Volume.propTypes = {
  audio: PropTypes.objectOf(PropTypes.object).isRequired,
};

export default Volume;
