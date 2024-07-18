import React from 'react';
import '../styles/Filter.css';

const Filter = ({ setFilter }) => {
  return (
    <div className="Filter">
      <button onClick={() => setFilter('all')}>All</button>
      <button onClick={() => setFilter('completed')}>Completed</button>
      <button onClick={() => setFilter('not completed')}>Not Completed</button>
    </div>
  );
};

export default Filter;
