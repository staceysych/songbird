import React, { Component } from 'react';

import QuestionItem from '../question-item/question-item';

export default class QuestionList extends Component {
  constructor() {
    super();
    this.questionArr = ['Разминка', 'A-spells', 'B - C', 'D - I', 'L - P', 'P - W'];
  }

  render() {
    return (
      <ul className="question-list d-flex">
        <QuestionItem questionArr={this.questionArr} />
      </ul>
    );
  }
}
