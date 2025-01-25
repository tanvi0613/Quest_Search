import React, { useState, useEffect } from 'react';
import axios from 'axios';
import SearchBar from './components/SearchBar';
import QuestionList from './components/QuestionList';
import Pagination from './components/Pagination';
import Home from './components/Home';
import Preloader from './components/Preloader';

function App() {
  const [query, setQuery] = useState('');
  const [type, setType] = useState('');
  const [questions, setQuestions] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const [totalPages, setTotalPages] = useState(0);
  const [isTTSSupported, setIsTTSSupported] = useState(false);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    setIsTTSSupported('speechSynthesis' in window);
  }, []);

  useEffect(() => {
    const timer = setTimeout(() => {
      searchQuestions();
      setLoading(false);
    }, 2000);

    return () => clearTimeout(timer);
  }, []);

  const searchQuestions = async (page = 1) => {
    try {
      const response = await axios.get('https://quest-search-icgu.onrender.com/api/search', {
        params: { query, type, page }
      });

      setQuestions(response.data.questions);
      setCurrentPage(response.data.currentPage);
      setTotalPages(response.data.totalPages);
    } catch (error) {
      console.error('Search error:', error);
    }
  };

  if (loading) {
    return <Preloader />;
  }

  return (
    <div style={{ maxWidth: '800px', margin: 'auto', padding: '20px' }} className='App'>
      <Home/>

      {!isTTSSupported && (
        <div style={{color: 'red', marginBottom: '10px'}}>
          Text-to-Speech not supported in your browser
        </div>
      )}

      <SearchBar 
        query={query}
        type={type}
        onQueryChange={setQuery}
        onTypeChange={setType}
        onSearch={() => searchQuestions(1)}
      />

      <QuestionList questions={questions} />

      <Pagination 
        currentPage={currentPage}
        totalPages={totalPages}
        onPageChange={searchQuestions}
      />
    </div>
  );
}

export default App;