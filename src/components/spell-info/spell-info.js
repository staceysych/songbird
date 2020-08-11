import React, { Component } from 'react';

import SpellFeatures from './spell-features';
import Poster from '../poster/poster';
// import spellsData from '../../data/data';

export default class SpellInfo extends Component {
  render() {
    return (
      <>
        <div className="card-body d-flex">
          <Poster />
          <SpellFeatures
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
