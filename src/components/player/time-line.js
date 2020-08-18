import React from 'react';
import PropTypes from 'prop-types';

const Timeline = ({ playerStyle, mouseDownFunc }) => (
  <div role="button" tabIndex={0} className="player-timeline" onMouseDown={mouseDownFunc}>
    <div className="player-fill" style={playerStyle} />
    <div className="player-handle" />
  </div>
);

Timeline.propTypes = {
  mouseDownFunc: PropTypes.func.isRequired,
};

export default Timeline;
