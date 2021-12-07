import React from 'react';
import Breakfast from './Breakfast';
import FilterArray from './FilterArray';
import './style.css';

export default function App() {
  return (
    <div>
      <h1>Array in React</h1>
      <Breakfast />
      <hr />
      {/* Filter + Map complex filtering  */}
      <FilterArray />
    </div>
  );
}
