import React from 'react';
import PropTypes from 'prop-types';

import SpellFeatures from './spell-features';
import Poster from '../poster/poster';

const SpellInfo = ({ clickedObj }) => {
  const {
    name, pronunciation, descriptionRu, image, audio, descriptionEng,
  } = clickedObj;

  return (
    <>
      <div className="card-body d-flex">
        <Poster imageUrl={image} />
        <SpellFeatures
          spellName={name}
          pronunciation={pronunciation}
          audioUrl={audio}
        />
      </div>
      <span className="spell-description">
        {descriptionRu}
        <br />
        <br />
        {`English: ${descriptionEng}`}
      </span>
    </>
  );
};

SpellInfo.propTypes = {
  clickedObj: PropTypes.shape({
    id: PropTypes.number,
    name: PropTypes.string,
    pronunciation: PropTypes.string,
    shortDescription: PropTypes.string,
    descriptionRu: PropTypes.string,
    descriptionEng: PropTypes.string,
    image: PropTypes.string,
    audio: PropTypes.string,
  }).isRequired,
};

export default SpellInfo;
