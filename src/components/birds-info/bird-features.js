import React from 'react';

const BirdFeatures = ({ birdName, latinName }) => (
  <ul className="bird-features list-group list-group-flush">
    <li className="list-group-item"><h4>{birdName}</h4></li>
    <li className="list-group-item"><h5>{latinName}</h5></li>
    <li className="list-group-item">Player</li>
  </ul>
);

export default BirdFeatures;
