import React from 'react';
import PropTypes from 'prop-types';

import Player from '../player/player';

const SpellFeatures = ({
  spellName, pronunciation, audioUrl,
}) => (
  <ul className="spell-features list-group list-group-flush">
    <li className="list-group-item"><h4>{spellName}</h4></li>
    <li className="list-group-item"><h5>{pronunciation}</h5></li>
    <li className="list-group-item">
      <Player audioUrl={audioUrl} key="small" />
    </li>
  </ul>
);

SpellFeatures.propTypes = {
  spellName: PropTypes.string.isRequired,
  pronunciation: PropTypes.string.isRequired,
  audioUrl: PropTypes.string.isRequired,
};

export default SpellFeatures;
