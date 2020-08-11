import React, { Component } from 'react';

import PropTypes from 'prop-types';

export default class SpellListItem extends Component {
  constructor() {
    super();
    this.state = {
      right: false,
    };
  }

  onBirdClick = ({ target }) => {
    this.setState({
      right: true,
    });

    let { id } = target;
    if (!id.includes('span')) {
      id = `span-${id}`;
    }
    document.getElementById(id).classList.add('correct');
  }

  renderItems = (arr) => arr.map(({ short_description }) => (
    <li key={short_description} id={short_description} className="list-group-item" onClick={this.onBirdClick}>
      <span id={`span-${short_description}`} className="checker-btn" />
      {short_description}
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

