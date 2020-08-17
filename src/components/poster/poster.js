import React from 'react';
import PropTypes from 'prop-types';

import potterPoster from '../../assets/images/potter-poster.jpg';

const Poster = ({ imageUrl }) => {
  const image = imageUrl || potterPoster;
  return (
    <img className="poster" alt="poster" src={image} />);
};

Poster.propTypes = {
  imageUrl: PropTypes.string.isRequired,
};
export default Poster;
