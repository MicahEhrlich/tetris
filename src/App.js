import React from 'react';
import './App.css';
import Tetris from './components/Tetris';
import TetrisState from './context/TetrisContext/TetrisState';
import ShapeState from './context/ShapeContext/ShapeState';

const App = () => {
  return (
    <div className='App'>
      <TetrisState>
        <ShapeState>
          <header></header>
          <Tetris />
        </ShapeState>
      </TetrisState>
    </div>
  );
};

export default App;
