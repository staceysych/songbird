import React from 'react';
import PropTypes from 'prop-types';

import {
  START_GAME_TEXT,
  START_TEXT,
} from '../../utils/constants';

const StartPage = ({onStartGameClick}) => {
  return (
    <div className="start-page">
      <h2 className="start-title">{START_GAME_TEXT}</h2>
      <button 
        type="button" 
        className="start-game btn btn-secondary"
        onClick={onStartGameClick}
        >
        {START_TEXT}
      </button>
    </div>
  );
};

StartPage.propTypes = {
    onStartGameClick: PropTypes.func.isRequired,
};

export default StartPage;