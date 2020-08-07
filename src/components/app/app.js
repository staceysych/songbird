import React, { Component } from 'react';

import Header from '../header/header';

export default class App extends Component {
  constructor() {
    super();
  }

  render() {
    return (
      <div className="container">
        <Header />
      </div>
    );
  }
}
