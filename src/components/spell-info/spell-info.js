import React, { Component } from 'react';

import SpellFeatures from './spell-features';
import Poster from '../poster/poster';
// import spellsData from '../../data/data';

export default class SpellInfo extends Component {
/*   constructor(props) {
    super(props);
    this.state = {
      name: props.name,
      pronunciation: props.pronunciation,
      audio: props.audio,
      image: props.image,
      descriptionRu: props.descriptionRu,
      descriptionEng: props.descriptionEng,
    }
  } */
  componentDidUpdate(prevProps) {
    if (this.props.clickedObj !== prevProps.clickedObj) {
      console.log('spellInfo', this.props.clickedObj);
    }
  }

  render() {
    /*     const {
      name,
      pronunciation,
      audio,
      image,
      descriptionRu,
      descriptionEng
    } = this.state; */
    const { clickedObj } = this.props;
    const {
      name, pronunciation, descriptionRu, image, audio,
    } = clickedObj;
    const id = 'spell-info';

    return (
      <>
        <div className="card-body d-flex">
          <Poster imageUrl={image} />
          <SpellFeatures
            birdName={name}
            latinName={pronunciation}
            audioUrl={audio}
            id={id}
          />
        </div>
        <span className="bird-description">
          {descriptionRu}
        </span>
      </>
    );
  }
}
