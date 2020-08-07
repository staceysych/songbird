import React from 'react';

const QuestionItem = ({ questionArr }) => questionArr.map((el) => (<li key={el} className="list-group-item"><a className="question-link" href="#">{el}</a></li>));

export default QuestionItem;
