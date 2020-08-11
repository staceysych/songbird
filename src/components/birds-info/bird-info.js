import React, { Component } from 'react';

import birdImage from '../../assets/images/bird_example.jpg';
import BirdFeatures from './bird-features';
// import spellsData from '../../data/data';

export default class BirdsInfo extends Component {
  render() {
    return (
      <>
        <div className="card-body d-flex">
          <img src={birdImage} alt="bird" className="bird-image" />
          <BirdFeatures
            birdName="Ворон"
            latinName="Corvus corax"
          />
        </div>
        <span className="bird-description">
          Ворон – крупная птица.
          Длина тела достигает 70 сантиметров, размах крыльев – до полутора метров.
          Вороны населяют окрестности Тауэра. В Англии бытует поверье,
          что в день, когда черные вороны улетят от Тауэра, монархия рухнет.
        </span>
      </>
    );
  }
}
