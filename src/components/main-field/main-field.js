import React, { Component } from 'react';
import PropTypes from 'prop-types';

import SpellListItem from '../spell-list-item/spell-list-item';
import SpellInfo from '../spell-info/spell-info';
import NextLevelBtn from '../next-level-button/next-level-btn';
import InitialCardText from '../initial-card-text/initial-card-text';

export default class MainField extends Component {
  render() {
    const {
      warmUpData, onSpellClick, clickedObj, isGameOn,
    } = this.props;
    const birdCard = isGameOn ? <SpellInfo clickedObj={clickedObj} /> : <InitialCardText />;

    return (
      <div className="row md2">
        <div className="col-md-5">
          <ul className="list-group spell-list">
            <SpellListItem
              warmUpArr={warmUpData}
              onSpellClick={onSpellClick}
            />
          </ul>
        </div>
        <div className="col-md-7">
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
  warmUpData: PropTypes.arrayOf(PropTypes.object).isRequired,
  onSpellClick: PropTypes.func.isRequired,
  isGameOn: PropTypes.bool.isRequired,
};
