import React, { useState, useEffect } from 'react';
import Search from './Search';
import Pagination from './Pagination';
import Stories from './Stories';
import './App.css';

const App = () => {
  const [data, setData] = useState([]);
  const [searchTerm, setSearchTerm] = useState('');
  const [currentPage, setCurrentPage] = useState(0);
  const [totalPages, setTotalPages] = useState(0);

  useEffect(() => {
    fetch(`http://hn.algolia.com/api/v1/search?query=${searchTerm}&page=${currentPage}`)
      .then((response) => response.json())
      .then((result) => {
        setData(result.hits);
        setTotalPages(result.nbPages);
      })
      .catch((error) => console.error('Error fetching data:', error));
  }, [searchTerm, currentPage]);

  return (
    <div style={{ padding: '20px', fontFamily: 'Arial' }}>
      <h1>Hacker News Search</h1>
      <Search searchTerm={searchTerm} onSearch={setSearchTerm} />
      <Pagination currentPage={currentPage} totalPages={totalPages} onPageChange={setCurrentPage} />
      <Stories stories={data} />
    </div>
  );
};

export default App;
