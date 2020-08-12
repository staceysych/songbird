import React, { Component } from 'react';
import PropTypes from 'prop-types';

export default class QuestionItem extends Component {
  constructor() {
    super();
    this.questionArr = [
      { name: 'warm-up', label: 'Разминка' },
      { name: 'A', label: 'A-spells' },
      { name: 'B-C', label: 'B - C' },
      { name: 'D-I', label: 'D - I' },
      { name: 'L-P', label: 'L - P' },
      { name: 'P-W', label: 'P - W' },
    ];
  }

  render() {
    const { filter } = this.props;
    const questions = this.questionArr.map(({ name, label }) => {
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
