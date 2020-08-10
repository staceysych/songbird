import React from 'react';

const BirdsListItem = ({ birdsArr }) => birdsArr.map((bird) => (
  <li key={bird} className="list-group-item">
    <span className="checker-btn" />
    {bird}
  </li>
));

export default BirdsListItem;
