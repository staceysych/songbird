import React, { Component } from 'react';

import Header from '../header/header';
import PlayingField from '../playing-field/playing-field';
import spellData from '../../data/data';
import randomInteger from '../../utils/random-integer';
import shuffleArray from '../../utils/shuffle-array';
import Loader from '../loader/loader';

export default class App extends Component {
  constructor() {
    super();
    this.state = {
      loading: true,
      data: spellData,
      filter: 'warm-up',
      warmUpArr: [],
      currentSpell: {},
    };
  }

  componentDidMount() {
    const { data } = this.state;
    const warmUpArr = this.generateWarmUp(data);
    const currentSpell = this.generateRandomSpell(warmUpArr);
    this.setState({
      warmUpArr,
      currentSpell,
      loading: false,
    });
  }

  generateWarmUp = (data) => {
    const shuffledArray = shuffleArray(data);
    const randomInt = randomInteger(0, 6);
    const warmUp = [];
    shuffledArray.map((arr) => warmUp.push(arr[randomInt]));
    return warmUp;
  };

  generateRandomSpell = (arr) => {
    const randomInt = randomInteger(0, arr.length - 1);
    return arr[randomInt];
  };

  render() {
    const {
      warmUpArr, filter, currentSpell, loading,
    } = this.state;
    const loader = loading ? <Loader /> : null;
    console.log('current spell', currentSpell);
    console.log('warm-up', warmUpArr);

    return (
      <>
        {loader}
        <div className="container">
          <Header filter={filter} />
          {!loading && (
            <PlayingField warmUp={warmUpArr} curSpell={currentSpell} />
          )}
        </div>
      </>
    );
  }
}
