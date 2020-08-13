import React, { Component } from "react";
import PropTypes from "prop-types";

import playImage from "../../assets/images/video.png";
import pauseImage from "../../assets/images/pause.png";
import volumeImage from "../../assets/images/volume.png";
import Loader from "../loader/loader";

export default class Player extends Component {
  constructor(props) {
    super(props);
    this.state = {
      isPlaying: false,
      audio: new Audio(props.audioUrl),
      currentTime: "00:00",
      duration: "",
      isLoading: true,
      muted: false,
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

  playAudio = () => {
    const { audio } = this.state;
    audio.play();
  };

  onAudioFinish = () => {
    const { audio } = this.state;
    if (audio.ended) {
      this.setState({
        isPlaying: false,
      });
    }
  };

  onTimeUpdate = () => {
    const { audio } = this.state;
    audio.addEventListener("timeupdate", () => {
      this.updatePosition(audio);
      this.updateCurrentTime(audio);
      this.onAudioFinish();
    });
  };

  updateCurrentTime = (audio) => {
    this.setState({
      currentTime: `00:0${Math.round(audio.currentTime)}`,
    });
  };

  updatePosition = (audio) => {
    const fillBar = document.querySelector(".player-fill");
    const position = audio.currentTime / audio.duration;

    fillBar.style.width = `${position * 100}%`;
  };

  getDuration = () => {
    const { audio } = this.state;
    if (audio.duration) {
      this.changeLoading();
      this.setState({
        duration: `00:0${Math.round(audio.duration)}`,
      });
    } else {
      setTimeout(() => {
        this.getDuration();
      }, 300);
    }
  };

  setMediumVolume = () => {};

  changeIcon = () => {
    this.setState(({ isPlaying }) => ({
      isPlaying: !isPlaying,
    }));
  };

  onVolumeClick = () => {
    const volumeControls = document.querySelector('.volume-controls');
    volumeControls.classList.toggle('hidden');
  }

  changeSliderVolume = (event) => {
    console.log('mouseDown', event.clientX);
  }

  onMouseMove(event){
    console.log(event.clientX)
  }

  render() {
    const { isPlaying, currentTime, duration, isLoading } = this.state;
    const spinner = isLoading ? <Loader /> : null;
    const timeline = isLoading ? null : (
      <div className="timeline-info">
        <span>{currentTime.replace(/\./, ":")}</span>
        <span>{duration}</span>
      </div>
    );

    const volume = (
      <div className="player-volume">
        <img alt="volume" className="volume-icon" src={volumeImage} onClick={this.onVolumeClick} />
        <div className="volume-controls hidden">
          <div className="slider" onMouseDown={this.changeSliderVolume} >
            <div className="progress">
              <div className="player-handle volume-handle" />
            </div>
          </div>
        </div>
      </div>
    );

    const icon = isPlaying ? (
      <img
        className="play-icon"
        alt="play"
        src={pauseImage}
        onClick={this.changeIcon}
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
        <div className="player-timeline">
          <div className="player-fill" />
          <div className="player-handle" />
        </div>
        {volume}
      </div>
    );

    return (
      <>
        {spinner}
        {controls}
        {timeline}
      </>
    );
  }
}

Player.propTypes = {
  audioUrl: PropTypes.string.isRequired,
};
