import React, { Component } from 'react';
import PropTypes from 'prop-types';

import volumeImage from '../../assets/images/volume.png';
import {
  PERCENT_COEFFICIENT,
  NOT_FULL_TOP,
} from '../../utils/constants';

class Volume extends Component {
  constructor() {
    super();
    this.state = {
      isHidden: true,
      progressHight: '100%',
      handleTop: '0',
    };
  }

  onDocumentClickHideVolume = ({ target }) => {
    const { isHidden } = this.state;
    if (!isHidden && !(target.classList.contains('slider') || target.parentElement.classList.contains('slider') || target.classList.contains('volume-controls'))) {
      this.setState({
        isHidden: true,
      });
    }
  }

  onVolumeClick = () => {
    this.setState(({ isHidden }) => ({
      isHidden: !isHidden,
    }));

    document.addEventListener('mousedown', this.onDocumentClickHideVolume);
  };

  calculateVolumePercent = (position, { target }) => {
    const slider = target.classList.contains('slider')
      ? target
      : target.parentElement;
    const { top, height } = slider.getBoundingClientRect();
    let volumePercentage = Math.round(PERCENT_COEFFICIENT * (1 - (position - top) / height));

    volumePercentage = volumePercentage >= 0 ? volumePercentage : 0;

    return volumePercentage <= PERCENT_COEFFICIENT ? volumePercentage : PERCENT_COEFFICIENT;
  };

  moveAt = (percent) => {
    this.setState({
      progressHight: `${percent}%`,
      handleTop: `${(PERCENT_COEFFICIENT - percent) * NOT_FULL_TOP}%`,
    });
  };

  changeVolume = (volumePercentage) => {
    const { audio } = this.props;
    const volume = volumePercentage / PERCENT_COEFFICIENT;
    audio.volume = volume;
  };

  changeVolumePosition = (event) => {
    const { target } = event;

    if (target.classList.contains('slider') || target.parentElement.classList.contains('slider')) {
      const progressPositionY = event.clientY;
      const volumePercentage = this.calculateVolumePercent(progressPositionY, event);

      this.moveAt(volumePercentage);
      this.changeVolume(volumePercentage);
    }
  };

  onMouseDown = (event) => {
    this.changeVolumePosition(event);

    document.addEventListener('mousemove', this.changeVolumePosition);
    document.addEventListener('mouseup', () => {
      document.removeEventListener('mousemove', this.changeVolumePosition);
    });
  };

  render() {
    const { isHidden, progressHight, handleTop } = this.state;

    const volumeControlsStyle = {
      display: isHidden ? 'none' : 'flex',
    };

    const progressStyle = {
      height: progressHight,
    };

    const handleStyle = {
      top: handleTop,
    };

    const volumeControlsClassName = isHidden ? 'volume-controls' : 'volume-controls active-volume';

    return (
      <div className="player-volume">
        <img
          alt="volume"
          className="volume-icon"
          src={volumeImage}
          onClick={this.onVolumeClick}
        />
        <div className={volumeControlsClassName} style={volumeControlsStyle}>
          <div role="button" tabIndex={0} className="slider" onMouseDown={this.onMouseDown}>
            <div className="progress" style={progressStyle} />
            <div className="player-handle volume-handle" style={handleStyle} />
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
