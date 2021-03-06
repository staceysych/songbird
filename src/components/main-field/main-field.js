import React, { Component } from 'react';
import PropTypes from 'prop-types';

import SpellListItem from '../spell-list-item/spell-list-item';
import SpellInfo from '../spell-info/spell-info';
import NextLevelBtn from '../next-level-button/next-level-btn';
import InitialCardText from '../initial-card-text/initial-card-text';

export default class MainField extends Component {
  render() {
    const {
      data,
      onSpellClick,
      clickedObj,
      isGameOn,
      isCorrectFound,
      onNextLevelClick,
      page,
      lang,
      isLoading,
    } = this.props;
    const spellCard = isGameOn
      ? (
        <SpellInfo
          clickedObj={clickedObj}
          lang={lang}
        />
      )
      : <InitialCardText page={page} lang={lang} />;

    return (
      <div className="row md2" style={isLoading ? { display: 'none' } : {}}>
        <div className="col-md-5">
          <ul className="list-group spell-list">
            <SpellListItem
              data={data}
              onSpellClick={onSpellClick}
              lang={lang}
            />
          </ul>
        </div>
        <div className="col-md-7">
          {spellCard}
        </div>
        <NextLevelBtn
          isCorrectFound={isCorrectFound}
          onNextLevelClick={onNextLevelClick}
          page={page}
          lang={lang}
        />
      </div>
    );
  }
}

MainField.propTypes = {
  data: PropTypes.arrayOf(PropTypes.object).isRequired,
  onSpellClick: PropTypes.func.isRequired,
  page: PropTypes.number.isRequired,
  isGameOn: PropTypes.bool.isRequired,
  isCorrectFound: PropTypes.bool.isRequired,
  onNextLevelClick: PropTypes.func.isRequired,
  lang: PropTypes.string.isRequired,
  isLoading: PropTypes.bool.isRequired,
  clickedObj: PropTypes.shape({
    id: PropTypes.number,
    name: PropTypes.string,
    pronunciation: PropTypes.string,
    shortDescription: PropTypes.string,
    descriptionRu: PropTypes.string,
    descriptionEng: PropTypes.string,
    image: PropTypes.string,
    audio: PropTypes.string,
  }).isRequired,
};
