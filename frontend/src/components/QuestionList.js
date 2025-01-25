import React from 'react';
import QuestionCard from './QuestionCard';

const QuestionList = ({ questions }) => {
  return (
    <div>
      {questions.map((question, index) => (
        <QuestionCard key={index} question={question} />
      ))}
    </div>
  );
};

export default QuestionList;