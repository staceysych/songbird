import React, { Component } from 'react';

import Header from '../header/header';
import PlayingField from '../playing-field/playing-field';
import spellData from '../../data/data';

export default class App extends Component {
  constructor() {
    super();
    this.state = {
      data: spellData,
      filter: 'warm-up',
    };
  }

  render() {
    const { data, filter } = this.state;

    return (
      <div className="container">
        <Header
          filter={filter}
        />
        <PlayingField
          data={data}
        />
      </div>
    );
  }
}
