import React, { Component } from 'react';

import {
  DATA_OBJ_LENGTH,
  WIN_SOUND_URL,
  ERROR_SOUND_URL,
  QUESTION_ARRAY,
  MAX_ROUND_SCORE,
  MAX_SCORE,
  FINAL_SONG_URL,
  START_SONG_URL,
} from '../../utils/constants';
import Header from '../header/header';
import spellData from '../../data/data';
import randomInteger from '../../utils/random-integer';
import shuffleArray from '../../utils/shuffle-array';
import QuestionField from '../question-field/question-field';
import MainField from '../main-field/main-field';
import FinalPage from '../final-page/final-page';
import StartPage from '../start-page/start-page';

export default class App extends Component {
  constructor() {
    super();
    this.state = {
      isStartPage: true,
      page: 0,
      data: spellData,
      filter: QUESTION_ARRAY[0].name,
      warmUpArr: [],
      currentSpell: {},
      score: 0,
      maxScore: MAX_SCORE,
      maxRoundScore: MAX_ROUND_SCORE,
      isCorrectFound: false,
      clickedSpellObject: {},
      isGameOn: false,
      winSound: new Audio(WIN_SOUND_URL),
      errorSound: new Audio(ERROR_SOUND_URL),
      finalSong: new Audio(FINAL_SONG_URL),
      startSong: new Audio(START_SONG_URL),
    };
  }

  componentDidMount() {
    this.playStartAudio();
  }

/*   componentDidUpdate() {
    const { startSong } = this.state;
    startSong.muted = false;
  } */

  playStartAudio = () => {
    const { startSong } = this.state;
    startSong.play();
  }

  startGame = () => {
    const { data } = this.state;
    const warmUpArr = this.generateWarmUp(data);
    const currentSpell = this.generateRandomSpell(warmUpArr);
    this.setState({
      warmUpArr,
      currentSpell,
      loading: false,
    });
  }

  setDefaultParameters = () => {
    this.setState({
      isCorrectFound: false,
      isGameOn: false,
      maxRoundScore: 6,
    });
  }

  generateWarmUp = (data) => {
    const dataCopy = [...data];
    const shuffledArray = shuffleArray(dataCopy);
    const randomInt = randomInteger(0, DATA_OBJ_LENGTH);
    const warmUp = [];
    shuffledArray.map((arr) => warmUp.push(arr[randomInt]));
    warmUp.forEach((el) => {
      el.isClicked = false;
      el.isCorrect = false;
      el.isWrong = false;
      el.isActive = false;
    });
    return warmUp;
  };

  generateRandomSpell = (arr) => {
    const randomInt = randomInteger(0, arr.length - 1);
    return arr[randomInt];
  };

  isCorrectSpellDescription = (target) => {
    const {
      currentSpell,
      isCorrectFound,
      winSound,
      errorSound,
    } = this.state;

    if (!target.classList.contains('clicked') && !isCorrectFound) {
      if (target.id === currentSpell.shortDescription) {
        this.setState(({
          score, maxRoundScore, warmUpArr, data, page,
        }) => {
          const dataArr = page === 0 ? warmUpArr : data[page - 1];
          const currentObj = this.getCurrentObjOnClick(dataArr, target.id);
          currentObj.isCorrect = true;

          return {
            score: score + maxRoundScore,
            isCorrect: currentObj.isCorrect,
            isCorrectFound: true,
          };
        });

        winSound.play();
      } else {
        this.setState(({
          maxRoundScore, warmUpArr, data, page,
        }) => {
          const dataArr = page === 0 ? warmUpArr : data[page - 1];
          const currentObj = this.getCurrentObjOnClick(dataArr, target.id);
          currentObj.isWrong = true;

          return {
            maxRoundScore: maxRoundScore - 1,
            isWrong: currentObj.isWrong,
          };
        });

        if (!errorSound.paused) {
          errorSound.pause();
          errorSound.currentTime = 0;
        }

        errorSound.play();
      }
    }
  }

  getCurrentObjOnClick = (arr, id) => {
    const arrayCopy = [...arr];
    const index = arrayCopy.findIndex((el) => el.shortDescription === id);
    return arrayCopy[index];
  }

  addClickedClassName = (id) => {
    this.setState(({ warmUpArr, data, page }) => {
      const dataArr = page === 0 ? warmUpArr : data[page - 1];
      const currentObj = this.getCurrentObjOnClick(dataArr, id);
      currentObj.isClicked = true;

      return {
        isClicked: currentObj.isClicked,
      };
    });
  }

  addCorrectClassName = (id) => {
    this.setState(({ warmUpArr, data, page }) => {
      const dataArr = page === 0 ? warmUpArr : data[page - 1];
      const currentObj = this.getCurrentObjOnClick(dataArr, id);
      currentObj.isCorrect = true;

      return {
        isCorrect: currentObj.isCorrect,
      };
    });
  }

  addActiveClassName = (id) => {
    this.setState(({ warmUpArr, data, page }) => {
      const dataArr = page === 0 ? warmUpArr : data[page - 1];
      const arrayCopy = [...dataArr];
      arrayCopy.forEach((el) => {
        if (el.isActive) {
          el.isActive = false;
        }
      });
      const currentObj = this.getCurrentObjOnClick(arrayCopy, id);
      currentObj.isActive = true;

      return {
        isActive: currentObj.isActive,
      };
    });
  }

  setDefaultPropInObject = (arr) => (arr.map((el) => {
    if (el.isClicked) {
      el.isClicked = false;
      el.isCorrect = false;
      el.isWrong = false;
      el.isActive = false;
    }

    return el;
  }));

  onSpellClick = ({ target }) => {
    const { warmUpArr, page, data } = this.state;
    const dataArr = page === 0 ? warmUpArr : data[page - 1];
    this.isCorrectSpellDescription(target);
    this.addClickedClassName(target.id);
    this.addActiveClassName(target.id);
    const clickedObj = this.getCurrentObjOnClick(dataArr, target.id);
    this.setState({
      clickedSpellObject: clickedObj,
      isGameOn: true,
    });
  }

  onNextLevelClick = () => {
    const { data, page, finalSong, winSound } = this.state;
    if (page < 5) {
      winSound.pause();
      winSound.currentTime = 0;
      this.setDefaultParameters();
      this.setDefaultPropInObject(data[page]);
      this.setState(() => ({
        page: page + 1,
        currentSpell: this.generateRandomSpell(data[page]),
        filter: QUESTION_ARRAY[page + 1].name,
      }));
    } else {
      finalSong.play();
      this.setState(() => ({
        page: page + 1,
      }));
    }
  }

  startOver = () => {
    const { finalSong } = this.state;
    this.setDefaultParameters();
    this.startGame();
    this.setState({
        page: 0,
        filter: 'warm-up',
        score: 0,
    });
    finalSong.pause();
    finalSong.currentTime = 0;
  }

  onStartGameClick = () => {
    const { startSong } = this.state;
    this.startGame();
    startSong.pause();
    this.setState({
      isStartPage: false,
    });
  }

  render() {
    const {
      warmUpArr,
      filter,
      currentSpell,
      score,
      isCorrectFound,
      clickedSpellObject,
      isGameOn,
      page,
      data,
      maxScore,
      isStartPage,
    } = this.state;
    const dataArray = page === 0 ? warmUpArr : data[page - 1];
    const finalPageNum = page === 6;

    const headerComponents = finalPageNum || isStartPage ? null : (
      <>
        <Header filter={filter} score={score} />
        <QuestionField
          currentSpell={currentSpell}
          isCorrectFound={isCorrectFound}
        />
      </>
    );

    const mainFieldComponents = finalPageNum || isStartPage ? null : (
      <MainField
        data={dataArray}
        currentSpell={currentSpell}
        onSpellClick={this.onSpellClick}
        clickedObj={clickedSpellObject}
        isGameOn={isGameOn}
        isCorrectFound={isCorrectFound}
        onNextLevelClick={this.onNextLevelClick}
        page={page}
      />
    );

    const finalPage = finalPageNum
      ? <FinalPage score={score} maxScore={maxScore} startOver={this.startOver} />
      : null;

    const startPage = isStartPage ? <StartPage onStartGameClick={this.onStartGameClick} /> : null;

    return (
      <>
        <div className="container">
          {startPage}
          {Object.keys(currentSpell).length && headerComponents}
          {warmUpArr.length && Object.keys(currentSpell).length && mainFieldComponents}
          {finalPage}
        </div>
      </>
    );
  }
}
