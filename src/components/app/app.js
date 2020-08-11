import React, { Component } from 'react';

import Header from '../header/header';
import PlayingField from '../playing-field/playing-field';
import spellData from '../../data/data';

export default class App extends Component {
  constructor() {
    super();
    this.state = {
      data: spellData,
    };
  }

  render() {
    const { data } = this.state;

    return (
      <div className="container">
        <Header />
        <PlayingField
          data={data}
        />
      </div>
    );
  }
}
