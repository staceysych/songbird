import React from 'react';

const calculateTimeLinePercent = (position) => {
  const slider = document.querySelector('.player-timeline');
  const { left, width } = slider.getBoundingClientRect();

  let timeLinePercentage = Math.round(100 * ((position - left) / width));
  timeLinePercentage = timeLinePercentage >= 0 ? timeLinePercentage : 0;
  return timeLinePercentage <= 100 ? timeLinePercentage : 100;
};

const moveAt = (percent) => {
  const fill = document.querySelector('.player-fill');
  fill.style.width = `${percent}%`;
};

const changeTimeLinePosition = (event) => {
  const progressPositionX = event.clientX;
  const timeLinePercentage = calculateTimeLinePercent(progressPositionX);
  moveAt(timeLinePercentage);
};

const onMouseDown = (event) => {
  changeTimeLinePosition(event);

  document.addEventListener('mousemove', changeTimeLinePosition);
  document.addEventListener('mouseup', () => {
    document.removeEventListener('mousemove', changeTimeLinePosition);
  });
};

const Timeline = () => (
  <div className="player-timeline" onMouseDown={onMouseDown}>
    <div className="player-fill" />
    <div className="player-handle" />
  </div>
);

export default Timeline;
