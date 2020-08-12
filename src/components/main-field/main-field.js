import React, { Component } from 'react';
import PropTypes from 'prop-types';

import SpellListItem from '../spell-list-item/spell-list-item';
import SpellInfo from '../spell-info/spell-info';
import NextLevelBtn from '../next-level-button/next-level-btn';
import InitialCardText from '../initial-card-text/initial-card-text';

export default class MainField extends Component {
  constructor() {
    super();
    this.state = {
      isGameOn: true,
    };
  }

  render() {
    const { isGameOn } = this.state;
    const { warmUpData } = this.props;
    const birdCard = isGameOn ? <SpellInfo /> : <InitialCardText />;

    return (
      <div className="row md2">
        <div className="col-md-6">
          <ul className="birds-list list-group">
            <SpellListItem warmUpArr={warmUpData} />
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
  warmUpData: PropTypes.arrayOf(PropTypes.object).isRequired,
};
