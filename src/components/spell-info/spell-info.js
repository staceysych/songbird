import React from 'react';
import PropTypes from 'prop-types';

import SpellFeatures from './spell-features';
import Poster from '../poster/poster';

const SpellInfo = ({ clickedObj, lang }) => {
  const {
    name, pronunciation, descriptionRu, image, audio, descriptionEng,
  } = clickedObj;

  const description = lang === 'ru' ? descriptionRu : descriptionEng;

  return (
    <div className="spell-info card">
      <div className="card-body d-flex">
        <Poster imageUrl={image} />
        <SpellFeatures
          spellName={name}
          pronunciation={pronunciation}
          audioUrl={audio}
        />
      </div>
      <span className="spell-description">
        {description}
      </span>
    </div>
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
  lang: PropTypes.string.isRequired,
};

export default SpellInfo;
