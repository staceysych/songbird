import React, { Component } from 'react';
import SpellListItem from '../spell-list-item/spell-list-item';
import SpellInfo from '../spell-info/spell-info';
import NextLevelBtn from '../next-level-button/next-level-btn';
import InitialCardText from '../initial-card-text/initial-card-text';

export default class MainField extends Component {
  constructor() {
    super();
    this.state = {
      birdsArr: ['Воробей', 'Соловей', 'Ястреб', 'Цапля', 'Снегирь', 'Кукушка'],
      isGameOn: true,
    };
  }

  render() {
    const { birdsArr, isGameOn } = this.state;
    const birdCard = isGameOn ? <SpellInfo /> : <InitialCardText />;

    return (
      <div className="row md2">
        <div className="col-md-6">
          <ul className="birds-list list-group">
            <SpellListItem birdsArr={birdsArr} />
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
