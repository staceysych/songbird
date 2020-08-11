import React, { Component } from 'react';
import PropTypes from 'prop-types';

import QuestionField from '../question-field/question-field';
import MainField from '../main-field/main-field';

export default class PlayingField extends Component {
  constructor() {
    super();
  }

  render() {
    const { data } = this.props;
    console.log(data);
    return (
      <>
        <QuestionField />
        <MainField spellData={data} />
      </>
    );
  }
}

PlayingField.propTypes = {
  data: PropTypes.arrayOf(PropTypes.array).isRequired,
};
