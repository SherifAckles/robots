import React from 'react'
import CardList from './components/CardList';
import {robots} from './robots'
function App() {
  return (
    <div className='tc pa4' >
      <CardList robots={robots} />
    </div>
  );
}

export default App