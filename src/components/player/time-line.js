import React, { Component } from 'react';
import PropTypes from 'prop-types';

import {
  PERCENT_COEFFICIENT,
} from '../../utils/constants';

class Timeline extends Component {
    calculateTimeLinePercent = (position) => {
      const slider = document.querySelector('.player-timeline');
      const { left, width } = slider.getBoundingClientRect();

      let timeLinePercentage = Math.round(PERCENT_COEFFICIENT * ((position - left) / width));
      timeLinePercentage = timeLinePercentage >= 0 ? timeLinePercentage : 0;
      return timeLinePercentage <= PERCENT_COEFFICIENT ? timeLinePercentage : PERCENT_COEFFICIENT;
    };

      moveAt = (percent) => {
        const fill = document.querySelector('.player-fill');
        fill.style.width = `${percent}%`;
      };

      changeTimeLinePosition = (event) => {
        const { calculateCurrentTimeOnDrag } = this.props;
        const progressPositionX = event.clientX;
        const timeLinePercentage = this.calculateTimeLinePercent(progressPositionX);
        this.moveAt(timeLinePercentage);
        calculateCurrentTimeOnDrag(timeLinePercentage);
      };

      onMouseDown = (event) => {
        this.changeTimeLinePosition(event);

        document.addEventListener('mousemove', this.changeTimeLinePosition);
        document.addEventListener('mouseup', () => {
          document.removeEventListener('mousemove', this.changeTimeLinePosition);
        });
      };

      render() {
        return (
          <div role="button" tabIndex={0} className="player-timeline" onMouseDown={this.onMouseDown}>
            <div className="player-fill" />
            <div className="player-handle" />
          </div>
        );
      }
}

Timeline.propTypes = {
  calculateCurrentTimeOnDrag: PropTypes.func.isRequired,
};

export default Timeline;
