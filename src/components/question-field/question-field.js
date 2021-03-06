import React, { Component } from 'react';
import PropTypes from 'prop-types';

import Player from '../player/player';
import Poster from '../poster/poster';

export default class QuestionField extends Component {
  generateHiddenDescription = (spell) => {
    const { lang } = this.props;
    const { shortDescription, shortDescriptionEng } = spell;
    const description = lang === 'ru' ? shortDescription : shortDescriptionEng;

    const strLength = description.length;
    return Array(strLength).fill('*').join('');
  };

  getCurrentSpellImageUrl = (img, isCorrectAnswer) => {
    const imageUrl = isCorrectAnswer ? img : '';
    return imageUrl;
  }

  render() {
    const {
      currentSpell, isCorrectFound, isLoading, onImageLoaded, lang,
    } = this.props;
    const {
      shortDescription,
      shortDescriptionEng,
      audio,
      image,
    } = currentSpell;
    const description = lang === 'ru' ? shortDescription : shortDescriptionEng;
    const hiddenDescription = this.generateHiddenDescription(currentSpell);
    const descriptionText = isCorrectFound ? description : hiddenDescription;
    const imageUrl = this.getCurrentSpellImageUrl(image, isCorrectFound);

    const player = <Player audioUrl={audio} key="main" isCorrectFound={isCorrectFound} />;

    return (
      <div className="question-field jumbotron rounded d-flex" style={isLoading ? { display: 'none' } : {}}>
        <Poster imageUrl={imageUrl} onImageLoaded={onImageLoaded} />
        <div className="question-box">
          <ul className="list-group list-group-flush">
            <li className="list-group-item">
              <span className="hidden-name">{descriptionText}</span>
            </li>
            <li className="list-group-item">
              {player}
            </li>
          </ul>
        </div>
      </div>
    );
  }
}

QuestionField.propTypes = {
  currentSpell: PropTypes.shape({
    id: PropTypes.number,
    name: PropTypes.string,
    pronunciation: PropTypes.string,
    shortDescription: PropTypes.string,
    shortDescriptionEng: PropTypes.string,
    descriptionRu: PropTypes.string,
    descriptionEng: PropTypes.string,
    image: PropTypes.string,
    audio: PropTypes.string,
  }).isRequired,
  isCorrectFound: PropTypes.bool.isRequired,
  isLoading: PropTypes.bool.isRequired,
  onImageLoaded: PropTypes.func.isRequired,
  lang: PropTypes.string.isRequired,
};
