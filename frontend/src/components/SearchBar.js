import React from 'react';
import '../App.css'

const SearchBar = ({ query, type, onQueryChange, onTypeChange, onSearch }) => {
  return (
    <div className='input-main'>
      <input
        className='input-box'
        type="text"
        placeholder="Search questions..."
        value={query}
        onChange={(e) => onQueryChange(e.target.value)}
        style={{ flex: 1, marginRight: '10px', padding: '10px' }}
      />
      <select 
        value={type} 
        onChange={(e) => onTypeChange(e.target.value)}
        style={{ padding: '10px' }}
        className='input-box'
      >
        <option value="">All Types</option>
        <option value="MCQ">MCQ</option>
        <option value="ANAGRAM">Anagram</option>
        <option value="READ_ALONG">Read Along</option>
      </select>
      <button 
        onClick={onSearch}
        className='form-btn'
      >
        Search
      </button>
    </div>
  );
};

export default SearchBar;