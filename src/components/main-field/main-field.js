import React, { Component } from 'react';
import PropTypes from 'prop-types';

import SpellListItem from '../spell-list-item/spell-list-item';
import SpellInfo from '../spell-info/spell-info';
import NextLevelBtn from '../next-level-button/next-level-btn';
import InitialCardText from '../initial-card-text/initial-card-text';
import randomInteger from '../../utils/random-integer';
import shuffleArray from '../../utils/shuffle-array';

export default class MainField extends Component {
  constructor() {
    super();
    this.state = {
      warmUpArr: [],
      isGameOn: true,
    };
  }

  componentDidMount = () => {
    const { spellData } = this.props;
    const shuffledArray = shuffleArray(spellData);
    const randomInt = randomInteger(0, 6);

    shuffledArray.forEach((arr) => {
      this.setState((state) => {
        const { warmUpArr } = state;
        warmUpArr.push(arr[randomInt]);

        return state;
      });
    });
  }

  render() {
    const { warmUpArr, isGameOn } = this.state;
    const birdCard = isGameOn ? <SpellInfo /> : <InitialCardText />;

    return (
      <div className="row md2">
        <div className="col-md-6">
          <ul className="birds-list list-group">
            <SpellListItem warmUpArr={warmUpArr} />
          </ul>
        </div>
        <div className="col-md-6">
          <div className="birds-info card">
            {birdCard}
          </div>
        </div>
        <NextLevelBtn />
      </div>
    );
  }
}

MainField.propTypes = {
  spellData: PropTypes.arrayOf(PropTypes.array).isRequired,
};
