import React, { Component, Fragment } from 'react';
import QuestionField from '../question-field/question-field';
import MainField from '../main-field/main-field';

export default class PlayingField extends Component {
  constructor() {
    super();
  }

  render() {
    return (
      <>
        <QuestionField />
        <MainField />
      </>
    );
  }
}
