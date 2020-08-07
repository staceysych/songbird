import React, { Component } from 'react';

import Logo from './logo';
import Score from './score';
import QuestionList from '../question-list/question-list';

export default class Header extends Component {
  render() {
    return (
      <div className="header d-flex">
        <div className="header-top d-flex">
            <Logo />
            <Score />
        </div>
        <QuestionList />
      </div>
    );
  }
}
