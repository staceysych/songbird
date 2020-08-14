import React from 'react';

import volumeImage from '../../assets/images/volume.png';

const onVolumeClick = () => {
  const volumeControls = document.querySelector('.volume-controls');
  volumeControls.classList.toggle('hidden');
};

const calculateVolumePercent = (position) => {
  const slider = document.querySelector('.slider');
  const { top, height } = slider.getBoundingClientRect();

  let volumePercentage = Math.round(100 * (1 - (position - top) / height));
  volumePercentage = volumePercentage >= 0 ? volumePercentage : 0;
  return volumePercentage <= 100 ? volumePercentage : 100;
};

const moveAt = (percent) => {
  const progress = document.querySelector('.progress');
  const handle = document.querySelector('.volume-handle');
  progress.style.height = `${percent}%`;
  handle.style.top = `${(100 - percent) * 0.9}%`;
  console.log(percent);
};

const changeVolumePosition = (event) => {
  const progressPositionY = event.clientY;
  const volumePercentage = calculateVolumePercent(progressPositionY);
  moveAt(volumePercentage);
};

const onMouseDown = (event) => {
  changeVolumePosition(event);

  document.addEventListener('mousemove', changeVolumePosition);
  document.addEventListener('mouseup', () => {
    document.removeEventListener('mousemove', changeVolumePosition);
  });
};

const Volume = () => (
  <div className="player-volume">
    <img
      alt="volume"
      className="volume-icon"
      src={volumeImage}
      onClick={onVolumeClick}
    />
    <div className="volume-controls hidden">
      <div className="slider" onMouseDown={onMouseDown}>
        <div className="progress" />
        <div className="player-handle volume-handle" />
      </div>
    </div>
  </div>
);

export default Volume;
