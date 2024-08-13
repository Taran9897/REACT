import React from 'react';

const Search = ({ searchTerm, onSearch }) => {
  return (
    <input
      type="text"
      placeholder="Search stories..."
      value={searchTerm}
      onChange={(e) => onSearch(e.target.value)}
      style={{ padding: '10px', width: '100%', marginBottom: '20px' }}
    />
  );
};

export default Search;
