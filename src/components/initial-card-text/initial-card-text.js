import React from 'react';
import PropTypes from 'prop-types';

import {
  WELCOME, FIRST_PAGE, INITIAL_TEXT, BEFORE_FINAL_TEXT, RU, ENG,
} from '../../utils/constants';
import professorImage from '../../assets/images/professor.png';

const InitialCardText = ({ page, lang }) => {
  let text = '';
  const isLangRu = lang === 'ru';
  if (page === 0) {
    text = isLangRu ? WELCOME[RU] : WELCOME[ENG];
  }

  if (page === 1) {
    text = isLangRu ? FIRST_PAGE[RU] : FIRST_PAGE[ENG];
  }

  if (page > 1 && page < 5) {
    text = isLangRu ? INITIAL_TEXT[RU] : INITIAL_TEXT[ENG];
  }

  if (page === 5) {
    text = isLangRu ? BEFORE_FINAL_TEXT[RU] : BEFORE_FINAL_TEXT[ENG];
  }

  return (
    <div className="card-text">
      <span className="speech-bubble">{text}</span>
      <img src={professorImage} alt="professor" className="professor-image" />
    </div>
  );
};

InitialCardText.propTypes = {
  page: PropTypes.number.isRequired,
  lang: PropTypes.string.isRequired,
};

export default InitialCardText;
