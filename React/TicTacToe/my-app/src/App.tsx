import React from 'react';
import logo from './logo.svg';
import './App.css';
import TicTacToe from './components/TicTacToe';
import Counter from './components/Counter';



function App() {
  return (
    <div className="App">
     <TicTacToe/>
      <Counter/>
    </div>
  );
}

export default App;
