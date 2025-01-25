import React from 'react';
import QuestionDetails from './QuestionDetails';
import speak from '../utils/textToSpeech';
import { Volume2 } from 'lucide-react';

const QuestionCard = ({ question }) => {
  const handleSpeak = () => {
    const textToSpeak = `
      Question Type: ${question.type}. 
      ${question.title}
      ${question.type === 'MCQ' 
        ? question.options.map(opt => opt.text).join(', ') 
        : ''}
    `;
    speak(textToSpeak);
  };

  return (
    <div 
      style={{ 
        border: '1px solid #ddd', 
        padding: '15px', 
        margin: '10px 0',
        borderRadius: '5px',
        color:'white',
        position: 'relative'
      }}
    >
      <button 
        onClick={handleSpeak}
        style={{
          position: 'absolute', 
          top: '10px', 
          right: '10px', 
          background: 'none', 
          border: 'none', 
          cursor: 'pointer'
        }}
      >
        <Volume2 color="white" size={24} />
      </button>
      <h3>{question.type}</h3>
      <QuestionDetails question={question} />
    </div>
  );
};

export default QuestionCard;