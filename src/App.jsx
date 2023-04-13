import React from 'react'
import CardList from './components/CardList';
import SearchBar from './components/SearchBar'
import {robots} from './robots'
function App() {
  return (
    <div className='tc pa4' >
      <SearchBar />
      <CardList robots={robots} />
    </div>
  );
}

export default App