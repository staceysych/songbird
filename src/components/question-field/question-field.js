import React, { Component } from 'react';

import BirdImage from '../bird-image/bird-image';
import Player from '../player/player';

export default class QuestionField extends Component {
  constructor() {
    super();
  }

  render() {
    return (
      <div className="question-field jumbotron rounded d-flex">
        <BirdImage />
        <div className="question-box">
          <ul className="list-group list-group-flush">
            <li className="list-group-item">
              <span className="hidden-name">****</span>
            </li>
            <li className="list-group-item">
              <Player />
            </li>
          </ul>
        </div>
      </div>
    );
  }
}
