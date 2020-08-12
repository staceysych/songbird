import React, { Component } from 'react';
import PropTypes from 'prop-types';

import Player from '../player/player';
import Poster from '../poster/poster';

export default class QuestionField extends Component {
  generateHiddenDescription = (obj) => {
    const { short_description } = obj;

    const strLength = short_description.length;
    return Array(strLength).fill('*').join('');
  }

  render() {
    const { curSpell } = this.props;
    const hiddenDescription = this.generateHiddenDescription(curSpell);

    return (
      <div className="question-field jumbotron rounded d-flex">
        <Poster />
        <div className="question-box">
          <ul className="list-group list-group-flush">
            <li className="list-group-item">
              <span className="hidden-name">{hiddenDescription}</span>
            </li>
            <li className="list-group-item">
              <Player curSpell={curSpell} />
            </li>
          </ul>
        </div>
      </div>
    );
  }
}

QuestionField.propTypes = {
  curSpell: PropTypes.object.isRequired,
};
