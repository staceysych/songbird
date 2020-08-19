import React from 'react';

import cursor from '../../assets/images/cursor.png';

const cursorStyle = {
  cursor: `url(${cursor}),auto`,
};

const NextLevelBtn = () => (
  <button className="next-level-btn btn" style={cursorStyle}>Next Level</button>
);

export default NextLevelBtn;
