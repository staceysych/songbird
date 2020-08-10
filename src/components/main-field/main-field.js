import React, { Component } from 'react';
import BirdsListItem from '../birds-list-item/birds-list-item';
import BirdsInfo from '../birds-info/bird-info';
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
    const birdCard = isGameOn ? <BirdsInfo /> : <InitialCardText />;

    return (
      <div className="row md2">
        <div className="col-md-6">
          <ul className="birds-list list-group">
            <BirdsListItem birdsArr={birdsArr} />
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
