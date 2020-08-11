import React, { Component } from 'react';

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

  renderItems = (arr) => arr.map((item) => (
    <li key={item} id={item} className="list-group-item" onClick={this.onBirdClick}>
      <span id={`span-${item}`} className="checker-btn" />
      {item}
    </li>
  ))

  render() {
    const { birdsArr } = this.props;
    const items = this.renderItems(birdsArr);

    return (
      <>
        { items }
      </>
    );
  }
}
