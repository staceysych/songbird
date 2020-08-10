import React, { Component } from 'react';

export default class BirdsListItem extends Component {
  constructor() {
    super();
    this.state = {
      right: false,
    };
  }

  onBirdClick = () => {
    this.setState({
      right: true,
    });
  }

  renderItems = (arr) => {
    const { right } = this.state;
    let checkerBtnStyle = 'checker-btn';

    if (right) {
      checkerBtnStyle += ' correct';
    }

    return arr.map((item) => (
      <li key={item} className="list-group-item" onClick={this.onBirdClick}>
        <span className={checkerBtnStyle} />
        {item}
      </li>
    ));
  }

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
