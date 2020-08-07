import React, { Component } from 'react';

import QuestionItem from '../question-item/question-item';

export default class QuestionList extends Component {
  constructor() {
    super();
    this.questionArr = ['Разминка', 'Воробьиные', 'Лесные птицы', 'Певчие птицы', 'Хищные птицы', 'Морские птицы'];
  }

  render() {
    return (
      <ul className="question-list d-flex">
        <QuestionItem questionArr={this.questionArr} />
      </ul>
    );
  }
}
