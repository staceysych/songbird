import React, { Component } from 'react';

import {
  DATA_OBJ_LENGTH,
} from '../../utils/constants';
import Header from '../header/header';
import spellData from '../../data/data';
import randomInteger from '../../utils/random-integer';
import shuffleArray from '../../utils/shuffle-array';
import Loader from '../loader/loader';
import QuestionField from '../question-field/question-field';
import MainField from '../main-field/main-field';

export default class App extends Component {
  constructor() {
    super();
    this.state = {
      loading: true,
      data: spellData,
      filter: 'warm-up',
      warmUpArr: [],
      currentSpell: {},
      score: 0,
      maxRoundScore: 6,
      isCorrectFound: false,
      clickedSpellObject: {},
      isGameOn: false,
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
    const randomInt = randomInteger(0, DATA_OBJ_LENGTH);
    const warmUp = [];
    shuffledArray.map((arr) => warmUp.push(arr[randomInt]));
    warmUp.forEach((el) => {
      el.isClicked = false;
      el.isCorrect = false;
      el.isWrong = false;
    });
    return warmUp;
  };

  generateRandomSpell = (arr) => {
    const randomInt = randomInteger(0, arr.length - 1);
    return arr[randomInt];
  };

  isCorrectSpellDescription = (target) => {
    const { currentSpell, isCorrectFound } = this.state;
    if (!target.classList.contains('clicked') && !isCorrectFound) {
      if (target.id === currentSpell.shortDescription) {
        this.setState(({ score, maxRoundScore, warmUpArr }) => {
          const currentObj = this.getCurrentObjOnClick(warmUpArr, target.id);
          currentObj.isCorrect = true;
          return {
            score: score + maxRoundScore,
            isCorrect: currentObj.isCorrect,
            isCorrectFound: true,
          };
        });
      } else {
        this.setState(({ maxRoundScore, warmUpArr }) => {
          const currentObj = this.getCurrentObjOnClick(warmUpArr, target.id);
          currentObj.isWrong = true;

          return {
            maxRoundScore: maxRoundScore - 1,
            isWrong: currentObj.isWrong,
          };
        });
      }
    }
  }

  getCurrentObjOnClick = (arr, id) => {
    const arrayCopy = [...arr];
    const index = arrayCopy.findIndex((el) => el.shortDescription === id);
    return arrayCopy[index];
  }

  addClickedClassName = (id) => {
    this.setState(({ warmUpArr }) => {
      const currentObj = this.getCurrentObjOnClick(warmUpArr, id);
      currentObj.isClicked = true;

      return {
        isClicked: currentObj.isClicked,
      };
    });
  }

  addCorrectClassName = (id) => {
    this.setState(({ warmUpArr }) => {
      const currentObj = this.getCurrentObjOnClick(warmUpArr, id);
      currentObj.isCorrect = true;

      return {
        isCorrect: currentObj.isCorrect,
      };
    });
  }

  onSpellClick = ({ target }) => {
    const { warmUpArr } = this.state;
    this.isCorrectSpellDescription(target);
    this.addClickedClassName(target.id);
    const clickedObj = this.getCurrentObjOnClick(warmUpArr, target.id);
    this.setState({
      clickedSpellObject: clickedObj,
      isGameOn: true,
    });
  }

  render() {
    const {
      warmUpArr,
      filter,
      currentSpell,
      loading,
      score,
      isCorrectFound,
      clickedSpellObject,
      isGameOn,
    } = this.state;
    const loader = loading ? <Loader /> : null;
    console.log('current spell', currentSpell);
    console.log('warm-up', warmUpArr);

    return (
      <>
        {loader}
        <div className="container">
          <Header filter={filter} score={score} />
          {Object.keys(currentSpell).length && (
          <QuestionField
            currentSpell={currentSpell}
            isCorrectFound={isCorrectFound}
          />
          )}
          {warmUpArr.length
          && Object.keys(currentSpell).length
          && (
          <MainField
            warmUpData={warmUpArr}
            currentSpell={currentSpell}
            onSpellClick={this.onSpellClick}
            clickedObj={clickedSpellObject}
            isGameOn={isGameOn}
          />
          )}
        </div>
      </>
    );
  }
}
