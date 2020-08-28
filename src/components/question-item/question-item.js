import React, { Component } from 'react';
import PropTypes from 'prop-types';

import { QUESTION_ARRAY, RU, ENG } from '../../utils/constants';

export default class QuestionItem extends Component {
  render() {
    const { filter, lang } = this.props;
    const questions = QUESTION_ARRAY.map(({ name, label }) => {
      const isActive = filter === name;
      const listClass = isActive ? 'list-group-item active' : 'list-group-item';
      const labelText = lang === 'ru' ? label[RU] : label[ENG];

      return (
        <li key={name} className={listClass}><a className="question-link" href="#">{labelText}</a></li>
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
  lang: PropTypes.string.isRequired,
};
