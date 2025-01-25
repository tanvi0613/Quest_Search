import React, { useState } from 'react';

const QuestionDetails = ({ question }) => {
  const [showSolution, setShowSolution] = useState(false);

  const toggleSolution = () => {
    setShowSolution(!showSolution);
  };

  const renderMCQ = () => (
    <div>
      <p>{question.title}</p>
      <ul>
        {question.options.map((option, idx) => (
          <li 
            key={idx} 
            style={{ 
              color: showSolution && option.isCorrectAnswer 
                ? 'rgb(48, 15, 15)' 
                : 'white',
              fontWeight: showSolution && option.isCorrectAnswer 
                ? 'bold' 
                : 'normal'
            }}
          >
            {option.text}
          </li>
        ))}
      </ul>
      {!showSolution && (
        <button 
          onClick={toggleSolution} 
          style={{
            backgroundColor: 'rgb(48, 15, 15)', 
            color: 'white', 
            border: 'none', 
            padding: '10px', 
            borderRadius: '5px'
          }}
        >
          Reveal Solution
        </button>
      )}
      {showSolution && (
        <div style={{color: 'rgb(48, 15, 15)', fontWeight: 'bold'}}>
          Correct Answer: {question.options.find(opt => opt.isCorrectAnswer)?.text}
        </div>
      )}
    </div>
  );

  const renderAnagram = () => (
    <div>
      <p>{question.title}</p>
      {question.blocks && (
        <div>
          {question.blocks.map((block, idx) => (
            <span key={idx} style={{ margin: '0 5px' }}>{block.text}</span>
          ))}
        </div>
      )}
      {!showSolution && (
        <button 
          onClick={toggleSolution} 
          style={{
            backgroundColor: 'rgb(48, 15, 15)', 
            color: 'white', 
            border: 'none', 
            padding: '10px', 
            borderRadius: '5px',
            marginTop: '10px'
          }}
        >
          Reveal Solution
        </button>
      )}
      {showSolution && (
        <div style={{color: 'rgb(48, 15, 15)', fontWeight: 'bold', marginTop: '10px'}}>
          Solution: {question.solution}
        </div>
      )}
    </div>
  );

  const renderReadAlong = () => (
    <div>
      <p>{question.title}</p>
    </div>
  );

  switch (question.type) {
    case 'MCQ':
      return renderMCQ();
    case 'ANAGRAM':
      return renderAnagram();
    case 'READ_ALONG':
      return renderReadAlong();
    default:
      return <p>{question.title}</p>;
  }
};

export default QuestionDetails;