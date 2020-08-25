import React from 'react';

import { WELCOME, FIRST_PAGE, INITIAL_TEXT, BEFORE_FINAL_TEXT } from '../../utils/constants';
import professorImage from '../../assets/images/professor.png';

const InitialCardText = ({page}) => {
  let text = '';
  if (page === 0) {
    text = WELCOME;
  }

  if (page === 1) {
    text = FIRST_PAGE;
  }

  if (page > 1 && page < 5) {
    text = INITIAL_TEXT;
  }

  if (page === 5) {
    text = BEFORE_FINAL_TEXT;
  }

  return (
  <div className="card-text">
    <span className="speech-bubble">{text}</span>
    <img src={professorImage} alt="professor" className="professor-image" />
  </div>
  );
};

export default InitialCardText;
