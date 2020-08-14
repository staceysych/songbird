import React from 'react';
import PropTypes from 'prop-types';

import Player from '../player/player';

const SpellFeatures = ({ birdName, latinName }) => (
  <ul className="bird-features list-group list-group-flush">
    <li className="list-group-item"><h4>{birdName}</h4></li>
    <li className="list-group-item"><h5>{latinName}</h5></li>
    <li className="list-group-item">
      <Player />
    </li>
  </ul>
);

SpellFeatures.propTypes = {
  birdName: PropTypes.string.isRequired,
  latinName: PropTypes.string.isRequired,
};

export default SpellFeatures;
