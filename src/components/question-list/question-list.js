import React, { Component } from 'react';
import PropTypes from 'prop-types';

import QuestionItem from '../question-item/question-item';

export default class QuestionList extends Component {
  constructor() {
    super();
  }

  render() {
    const { filter } = this.props;

    return (
      <ul className="question-list d-flex">
        <QuestionItem filter={filter} />
      </ul>
    );
  }
}

QuestionList.propTypes = {
  filter: PropTypes.string.isRequired,
};
