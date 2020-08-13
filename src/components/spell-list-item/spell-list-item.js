import React, { Component } from 'react';

import PropTypes from 'prop-types';

export default class SpellListItem extends Component {
  onSpellClick = ({ target }) => {
    let { id } = target;
    if (!id.includes('span')) {
      id = `span-${id}`;
    }
    document.getElementById(id).classList.add('correct');
  }

  renderItems = (arr) => arr.map(({ shortDescription }) => (
    <li
      key={shortDescription}
      id={shortDescription}
      className="list-group-item"
      onClick={this.onSpellClick}
    >
      <span id={`span-${shortDescription}`} className="checker-btn" />
      {shortDescription}
    </li>
  ))

  render() {
    const { warmUpArr } = this.props;
    const items = this.renderItems(warmUpArr);

    return (
      <>
        { items }
      </>
    );
  }
}

SpellListItem.propTypes = {
  warmUpArr: PropTypes.arrayOf(PropTypes.object).isRequired,
};
