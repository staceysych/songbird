import React, { Component } from 'react';
import PropTypes from 'prop-types';

import SpellListItem from '../spell-list-item/spell-list-item';
import SpellInfo from '../spell-info/spell-info';
import NextLevelBtn from '../next-level-button/next-level-btn';
import InitialCardText from '../initial-card-text/initial-card-text';

export default class MainField extends Component {
  render() {
    const {
      data, onSpellClick, clickedObj, isGameOn, isCorrectFound, onNextLevelClick,
    } = this.props;
    const birdCard = isGameOn
      ? <SpellInfo 
          clickedObj={clickedObj}
        />
      : <InitialCardText />;

    return (
      <div className="row md2">
        <div className="col-md-5">
          <ul className="list-group spell-list">
            <SpellListItem
              data={data}
              onSpellClick={onSpellClick}
            />
          </ul>
        </div>
        <div className="col-md-7">
          <div className="spell-info card">
            {birdCard}
          </div>
        </div>
        <NextLevelBtn
          isCorrectFound={isCorrectFound}
          onNextLevelClick={onNextLevelClick}
        />
      </div>
    );
  }
}

MainField.propTypes = {
  data: PropTypes.arrayOf(PropTypes.object).isRequired,
  onSpellClick: PropTypes.func.isRequired,
  isGameOn: PropTypes.bool.isRequired,
  isCorrectFound: PropTypes.bool.isRequired,
  onNextLevelClick: PropTypes.func.isRequired,
  clickedObj: PropTypes.shape({
    id: PropTypes.number,
    name: PropTypes.string,
    pronunciation: PropTypes.string,
    shortDescription: PropTypes.string,
    descriptionRu: PropTypes.string,
    descriptionEng: PropTypes.string,
    image: PropTypes.string,
    audio: PropTypes.string,
  }).isRequired,
};
