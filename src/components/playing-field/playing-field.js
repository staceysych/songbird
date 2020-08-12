import React, { Component } from 'react';
import PropTypes from 'prop-types';

import QuestionField from '../question-field/question-field';
import MainField from '../main-field/main-field';

export default class PlayingField extends Component {
  render() {
    const { warmUp, curSpell } = this.props;

    return (
      <>
        <QuestionField curSpell={curSpell} />
        <MainField warmUpData={warmUp} />
      </>
    );
  }
}

PlayingField.propTypes = {
  warmUp: PropTypes.arrayOf(PropTypes.object).isRequired,
  curSpell: PropTypes.object.isRequired,
};
