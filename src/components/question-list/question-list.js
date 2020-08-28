import React, { Component } from 'react';
import PropTypes from 'prop-types';

import QuestionItem from '../question-item/question-item';

export default class QuestionList extends Component {
  render() {
    const { filter, lang } = this.props;

    return (
      <ul className="question-list d-flex">
        <QuestionItem filter={filter} lang={lang} />
      </ul>
    );
  }
}

QuestionList.propTypes = {
  filter: PropTypes.string.isRequired,
  lang: PropTypes.string.isRequired,
};
