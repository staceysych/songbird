import React, { Component } from 'react';

import Header from '../header/header';
import PlayingField from '../playing-field/playing-field';

export default class App extends Component {
  constructor() {
    super();
  }

  render() {
    return (
      <div className="container">
        <Header />
        <PlayingField />
      </div>
    );
  }
}
