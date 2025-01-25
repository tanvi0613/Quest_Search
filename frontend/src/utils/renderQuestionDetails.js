const renderQuestionDetails = (question) => {
    switch (question.type) {
      case 'MCQ':
        return (
          <div>
            <p>{question.title}</p>
            <ul>
              {question.options.map((option, idx) => (
                <li 
                  key={idx} 
                  style={{ 
                    color: option.isCorrectAnswer ? 'rgb(48, 15, 15)' : 'white',
                    fontWeight: option.isCorrectAnswer ? 'bold' : 'normal'
                  }}
                >
                  {option.text}
                </li>
              ))}
            </ul>
          </div>
        );
      case 'ANAGRAM':
        return (
          <div>
            <p>{question.title}</p>
            <p><strong>Solution:</strong> {question.solution}</p>
            {question.blocks && (
              <div>
                {question.blocks.map((block, idx) => (
                  <span key={idx} style={{ margin: '0 5px' }}>{block.text}</span>
                ))}
              </div>
            )}
          </div>
        );
      case 'READ_ALONG':
        return <p>{question.title}</p>;
      default:
        return <p>{question.title}</p>;
    }
  };
  
  export default renderQuestionDetails;