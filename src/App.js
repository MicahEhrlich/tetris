import React from 'react';
import './App.css';
import Tetris from './components/Tetris';
import TetrisState from './context/TetrisState';

const App = () => {
  return (
    <div className='App'>
      <TetrisState>
        <header></header>
        <Tetris />
      </TetrisState>
    </div>
  );
};

export default App;
