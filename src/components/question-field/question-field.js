import React, { Component } from 'react';
import PropTypes from 'prop-types';

import Player from '../player/player';
import Poster from '../poster/poster';
import Loader from '../loader/loader';
import { LOADER_DELAY } from '../../utils/constants';

export default class QuestionField extends Component {
  constructor() {
    super();
    this.state = {
      isLoading: true,
    };

    setTimeout(() => { this.changeLoading(); }, LOADER_DELAY);
  }

  changeLoading = () => {
    this.setState({
      isLoading: false,
    });
  }

  generateHiddenDescription = (spell) => {
    const { shortDescription } = spell;

    const strLength = shortDescription.length;
    return Array(strLength).fill('*').join('');
  };

  getCurrentSpellImageUrl = (img, isCorrectAnswer) => {
    const imageUrl = isCorrectAnswer ? img : '';
    return imageUrl;
  }

  render() {
    const { currentSpell, isCorrectFound } = this.props;
    const { isLoading } = this.state;
    const { shortDescription, audio, image } = currentSpell;
    console.log('playing field spell:', currentSpell);
    const hiddenDescription = this.generateHiddenDescription(currentSpell);
    const description = isCorrectFound ? shortDescription : hiddenDescription;
    const imageUrl = this.getCurrentSpellImageUrl(image, isCorrectFound);

    const spinner = isLoading ? <Loader /> : null;
    const player = !isLoading ? <Player audioUrl={audio} /> : null;

    return (
      <div className="question-field jumbotron rounded d-flex">
        <Poster imageUrl={imageUrl} />
        <div className="question-box">
          <ul className="list-group list-group-flush">
            <li className="list-group-item">
              <span className="hidden-name">{description}</span>
            </li>
            <li className="list-group-item">
              {spinner}
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
    descriptionRu: PropTypes.string,
    descriptionEng: PropTypes.string,
    image: PropTypes.string,
    audio: PropTypes.string,
  }).isRequired,
  isCorrectFound: PropTypes.bool.isRequired,
};
