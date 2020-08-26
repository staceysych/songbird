import React from 'react';
import PropTypes from 'prop-types';

import potterPoster from '../../assets/images/potter-poster.jpg';

const Poster = ({ imageUrl, onImageLoaded }) => {
  const image = imageUrl || potterPoster;
  return (
    <img className="poster" alt="poster" src={image} onLoad={onImageLoaded} />);
};

Poster.propTypes = {
  imageUrl: PropTypes.string.isRequired,
};
export default Poster;
