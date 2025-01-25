import React from 'react';

const Pagination = ({ currentPage, totalPages, onPageChange }) => {

  const getPageRange = () => {
    const range = [];
    const maxVisiblePages = 5;
    let start = Math.max(1, currentPage - Math.floor(maxVisiblePages / 2));
    let end = Math.min(totalPages, start + maxVisiblePages - 1);

    if (end === totalPages) {
      start = Math.max(1, totalPages - maxVisiblePages + 1);
    }

    for (let i = start; i <= end; i++) {
      range.push(i);
    }
    return range;
  };

  if (totalPages <= 1) return null;

  return (
    <div style={{ 
      display: 'flex', 
      justifyContent: 'center', 
      alignItems: 'center', 
      marginTop: '20px' 
    }}>


      <button 
        onClick={() => onPageChange(currentPage - 1)}
        disabled={currentPage === 1}
        style={{
          margin: '0 10px',
          padding: '8px 12px',
          background: currentPage === 1 ? '#e0e0e0' : 'rgb(48, 15, 15)',
          color: currentPage === 1 ? '#888' : 'white',
          border: 'none',
          borderRadius: '4px',
          cursor: currentPage === 1 ? 'default' : 'pointer'
        }}
      >
        &#9664;
      </button>


      {getPageRange().map(page => (
        <button 
          key={page}
          onClick={() => onPageChange(page)}
          style={{ 
            margin: '0 5px', 
            padding: '8px 12px',
            backgroundColor: currentPage === page ? 'rgb(48, 15, 15)' : 'white',
            color: currentPage === page ? 'white' : 'black',
            border: '1px solid #ddd',
            borderRadius: '4px',
            cursor: 'pointer'
          }}
        >
          {page}
        </button>
      ))}


      <button 
        onClick={() => onPageChange(currentPage + 1)}
        disabled={currentPage === totalPages}
        style={{
          margin: '0 10px',
          padding: '8px 12px',
          background: currentPage === totalPages ? '#e0e0e0' : 'rgb(48, 15, 15)',
          color: currentPage === totalPages ? '#888' : 'white',
          border: 'none',
          borderRadius: '4px',
          cursor: currentPage === totalPages ? 'default' : 'pointer'
        }}
      >
        &#9654;
      </button>
    </div>
  );
};

export default Pagination;