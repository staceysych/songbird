import React, { Component } from 'react';

import Header from '../header/header';
import PlayingField from '../playing-field/playing-field';
import spellData from '../../data/data';
import randomInteger from '../../utils/random-integer';
import shuffleArray from '../../utils/shuffle-array';

export default class App extends Component {
  constructor() {
    super();
    this.state = {
      data: spellData,
      filter: 'warm-up',
      warmUpArr: [],
      currentSpell: {},
    };
  }

  UNSAFE_componentWillMount() {
    const { data } = this.state;
    const warmUpArr = this.generateWarmUp(data);
    const currentSpell = this.generateRandomSpell(warmUpArr);
    this.setState({
      warmUpArr,
      currentSpell,
    });
  }

  generateWarmUp = (data) => {
    const shuffledArray = shuffleArray(data);
    const randomInt = randomInteger(0, 6);
    const warmUp = [];
    shuffledArray.map((arr) => warmUp.push(arr[randomInt]));
    return warmUp;
  }

  generateRandomSpell = (arr) => {
    const randomInt = randomInteger(0, arr.length - 1);
    return arr[randomInt];
  }

  render() {
    const { warmUpArr, filter, currentSpell } = this.state;
    console.log('current spell', currentSpell);
    console.log('warm-up', warmUpArr);

    return (
      <div className="container">
        <Header
          filter={filter}
        />
        <PlayingField
          warmUp={warmUpArr}
          curSpell={currentSpell}
        />
      </div>
    );
  }
}
