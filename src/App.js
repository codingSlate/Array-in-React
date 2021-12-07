import React from 'react';
import Breakfast from './Breakfast';
import FilterArray from './FilterArray';
import MappingObject from './MappingObject';
import './style.css';

export default function App() {
  return (
    <div>
      <h1>Array in React</h1>
      <Breakfast />
      <hr />
      <h1>Filter + Map complex filtering </h1>
      <FilterArray />
      {/* Mapping an Object to view */}
      <h1>Object Listing</h1>
      <MappingObject />
    </div>
  );
}
