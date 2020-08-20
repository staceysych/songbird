import React, { Component } from 'react';
import PropTypes from 'prop-types';

import playImage from '../../assets/images/video.png';
import pauseImage from '../../assets/images/pause.png';
import Volume from './volume';
import Timeline from './time-line';
import {
  DEFAULT_AUDIO_TIME,
  TOTAL_VOLUME_SLIDER_HEIGHT,
  TOTAL_TIMELINE_WIDTH,
  PERCENT_COEFFICIENT,
} from '../../utils/constants';

export default class Player extends Component {
  constructor(props) {
    super(props);
    this.state = {
      isPlaying: false,
      audio: new Audio(props.audioUrl),
      currentTime: DEFAULT_AUDIO_TIME,
      duration: '',
      fillWidth: 0,
      isCorrect: false,
    };
  }

  componentDidMount() {
    this.getDuration();
  }

  componentDidUpdate(prevProps) {
    const { audioUrl } = this.props;
    const { audio } = this.state;

    if (audioUrl !== prevProps.audioUrl) {
      audio.pause();
      const newAudio = new Audio(audioUrl);
      this.setState({
        audio: newAudio,
        isCorrect: false,
        isPlaying: false,
        fillWidth: '0',
        currentTime: DEFAULT_AUDIO_TIME,
      });
    }
    this.getDuration();
  }

  onPlayClick = () => {
    this.changeIcon();
    this.playAudio();
    this.onTimeUpdate();
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
      this.setState({
        fillWidth: '0',
        isPlaying: false,
        currentTime: DEFAULT_AUDIO_TIME,
      });
      audio.removeEventListener('timeupdate', this.onUpdate);
      audio.currentTime = 0;
    }
  };

  pauseAudioIfIsCorrectFound = (audio) => {
    const { isCorrectFound } = this.props;
    if (isCorrectFound) {
      this.pauseAudio();
      audio.currentTime = 0;
      this.setState({
        isCorrect: true,
        fillWidth: '0',
        isPlaying: false,
        currentTime: DEFAULT_AUDIO_TIME,
      });
      audio.removeEventListener('timeupdate', this.onUpdate);
    }
  }

  onUpdate = () => {
    const { audio, isCorrect } = this.state;
    this.updatePosition(audio);
      this.updateCurrentTime(audio);
      this.onAudioFinish(audio);

      if (!isCorrect) {
        this.pauseAudioIfIsCorrectFound(audio);
      }
  }

  onTimeUpdate = () => {
    const { audio } = this.state;
    audio.addEventListener('timeupdate', this.onUpdate);
  };

  updateCurrentTime = (audio) => {
    this.setState({
      currentTime: `00:0${(audio.currentTime).toFixed(2)}`,
    });
  };

  calculateCurrentTimeOnDrag = (position) => {
    const { audio } = this.state;
    const currentTimeOnPosition = (audio.duration * position) / TOTAL_TIMELINE_WIDTH;
    audio.currentTime = currentTimeOnPosition;
    this.updateCurrentTime(audio);
  }

  updatePosition = (audio) => {
    const position = audio.currentTime / audio.duration;
    this.setState({
      fillWidth: `${position * TOTAL_VOLUME_SLIDER_HEIGHT}%`,
    });
  };

  getDuration = () => {
    const { audio } = this.state;
    audio.addEventListener('loadedmetadata', () => {
      this.setState({
        duration: `00:0${(audio.duration).toFixed(2)}`,
      });
    });
  };

  changeIcon = () => {
    this.setState(({ isPlaying }) => ({
      isPlaying: !isPlaying,
    }));
  };

  getTimeLinePercent = (position, { target }) => {
    const slider = target.classList.contains('player-timeline')
      ? target
      : target.parentElement;
    const { left, width } = slider.getBoundingClientRect();

    let timeLinePercentage = Math.round(PERCENT_COEFFICIENT * ((position - left) / width));
    timeLinePercentage = timeLinePercentage >= 0 ? timeLinePercentage : 0;

    return timeLinePercentage <= PERCENT_COEFFICIENT ? timeLinePercentage : PERCENT_COEFFICIENT;
  }

    calculateTimeLinePercent = (position, event) => {
      const timeLinePercentage = this.getTimeLinePercent(position, event);
      return timeLinePercentage;
    };

    changeFillWidth = (percent) => {
      this.setState({
        fillWidth: `${percent}%`,
      });
    }

      moveAt = (percent) => {
        this.changeFillWidth(percent);
      }

      changeTimeLinePosition = (event) => {
        const progressPositionX = event.clientX;
        const timeLinePercentage = this.calculateTimeLinePercent(progressPositionX, event);
        this.moveAt(timeLinePercentage, event);

        if (timeLinePercentage) {
          this.calculateCurrentTimeOnDrag(timeLinePercentage);
        }
      };

      onMouseDown = (event) => {
        this.changeTimeLinePosition(event);

        document.addEventListener('mousemove', this.changeTimeLinePosition);
        document.addEventListener('mouseup', () => {
          document.removeEventListener('mousemove', this.changeTimeLinePosition);
        });
      };

      render() {
        const {
          isPlaying, currentTime, duration, audio, fillWidth, id,
        } = this.state;

        const playerStyle = {
          width: fillWidth,
        };
        const time = (
          <div className="timeline-info">
            <span>{currentTime}</span>
            <span>{duration}</span>
          </div>
        );

        const icon = isPlaying ? (
          <img
            className="play-icon"
            id={id}
            alt="play"
            src={pauseImage}
            onClick={this.onPauseClick}
          />
        ) : (
          <img
            className="play-icon"
            id={id}
            alt="play"
            src={playImage}
            onClick={this.onPlayClick}
          />
        );

        const controls = (
          <div className="player-controls">
            <div className="play-button">{icon}</div>
            <Timeline
              playerStyle={playerStyle}
              mouseDownFunc={this.onMouseDown}
            />
            <Volume audio={audio} />
          </div>
        );

        return (
          <>
            {controls}
            {time}
          </>
        );
      }
}

Player.propTypes = {
  audioUrl: PropTypes.string.isRequired,
};
