import React, { Component } from 'react';
import PropTypes from 'prop-types';

import playImage from '../../assets/images/video.png';
import pauseImage from '../../assets/images/pause.png';
import Loader from '../loader/loader';
import Volume from './volume';
import Timeline from './time-line';

export default class Player extends Component {
  constructor(props) {
    super(props);
    this.state = {
      isPlaying: false,
      audio: new Audio(props.audioUrl),
      currentTime: '00:00.00',
      duration: '',
      isLoading: true,
    };
  }

  componentDidMount() {
    this.onTimeUpdate();
    this.getDuration();
  }

  changeLoading = () => {
    this.setState({
      isLoading: false,
    });
  };

  onPlayClick = () => {
    this.changeIcon();
    this.playAudio();
  };

  onPauseClick = () => {
    this.changeIcon();
    this.pauseAudio();
  }

  playAudio = () => {
    const { audio } = this.state;
    audio.play();
  };

  pauseAudio = () => {
    const { audio } = this.state;
    audio.pause();
  }

  onAudioFinish = (audio) => {
    if (audio.ended) {
      const fill = document.querySelector('.player-fill');
      fill.style.width = '0';

      this.setState({
        isPlaying: false,
        currentTime: '00:00.00',
      });
    }
  };

  onTimeUpdate = () => {
    const { audio } = this.state;
    audio.addEventListener('timeupdate', () => {
      this.updatePosition(audio);
      this.updateCurrentTime(audio);
      this.onAudioFinish(audio);
    });
  };

  updateCurrentTime = (audio) => {
    this.setState({
      currentTime: `00:0${(audio.currentTime).toFixed(2)}`,
    });
  };

  calculateCurrentTimeOnDrag = (position) => {
    const { audio } = this.state;
    const currentTimeOnPosition = (audio.duration * position) / 100;
    audio.currentTime = currentTimeOnPosition;
    this.updateCurrentTime(audio);
  }

  updatePosition = (audio) => {
    const fillBar = document.querySelector('.player-fill');
    const position = audio.currentTime / audio.duration;

    fillBar.style.width = `${position * 100}%`;
  };

  getDuration = () => {
    const { audio } = this.state;
    if (audio.duration) {
      this.changeLoading();
      this.setState({
        duration: `00:0${(audio.duration).toFixed(2)}`,
      });
    } else {
      setTimeout(() => {
        this.getDuration();
      }, 300);
    }
  };

  changeIcon = () => {
    this.setState(({ isPlaying }) => ({
      isPlaying: !isPlaying,
    }));
  };

  render() {
    const {
      isPlaying, currentTime, duration, isLoading, audio,
    } = this.state;
    const spinner = isLoading ? <Loader /> : null;
    const time = isLoading ? null : (
      <div className="timeline-info">
        <span>{currentTime}</span>
        <span>{duration}</span>
      </div>
    );

    const icon = isPlaying ? (
      <img
        className="play-icon"
        alt="play"
        src={pauseImage}
        onClick={this.onPauseClick}
      />
    ) : (
      <img
        className="play-icon"
        alt="play"
        src={playImage}
        onClick={this.onPlayClick}
      />
    );

    const controls = isLoading ? null : (
      <div className="player-controls">
        <div className="play-button">{icon}</div>
        <Timeline calculateCurrentTimeOnDrag={this.calculateCurrentTimeOnDrag} />
        <Volume audio={audio} />
      </div>
    );

    return (
      <>
        {spinner}
        {controls}
        {time}
      </>
    );
  }
}

Player.propTypes = {
  audioUrl: PropTypes.string.isRequired,
};
