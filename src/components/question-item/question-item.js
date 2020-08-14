import React, { Component } from 'react';
import PropTypes from 'prop-types';

import { QUESTION_ARRAY } from '../../utils/constants';

export default class QuestionItem extends Component {
  render() {
    const { filter } = this.props;
    const questions = QUESTION_ARRAY.map(({ name, label }) => {
      const isActive = filter === name;
      const listClass = isActive ? 'list-group-item active' : 'list-group-item';

      return (
        <li key={name} className={listClass}><a className="question-link" href="#">{label}</a></li>
      );
    });

    return (
      <>
        {questions}
      </>
    );
  }
}

QuestionItem.propTypes = {
  filter: PropTypes.string.isRequired,
};
