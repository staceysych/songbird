import React, { Component } from 'react';
import PropTypes from 'prop-types';

import Logo from './logo';
import Score from './score';
import QuestionList from '../question-list/question-list';

export default class Header extends Component {
  render() {
    const { filter } = this.props;
    return (
      <div className="header d-flex">
        <div className="header-top d-flex">
          <Logo />
          <Score />
        </div>
        <QuestionList filter={filter} />
      </div>
    );
  }
}

Header.propTypes = {
  filter: PropTypes.string.isRequired,
};
