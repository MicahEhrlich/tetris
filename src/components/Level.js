import React, { useEffect, useContext, useRef } from 'react';

import Cell from '../components/styled/Cell';
import Board from './styled/Board';
import TetrisContext from '../context/TetrisContext/TetrisContext';
import ShapeContext from '../context/ShapeContext/ShapeContext';

function useInterval(callback, delay) {
  const savedCallback = useRef();

  // Remember the latest ca../context/TetrisContext/TetrisContext
  useEffect(() => {
    savedCallback.current = callback;
  }, [callback]);

  // Set up the interval.
  useEffect(() => {
    function tick() {
      savedCallback.current();
    }
    if (delay !== null) {
      let id = setInterval(tick, delay);
      return () => clearInterval(id);
    }
  }, [delay]);
}

const Level = ({ level }) => {
  const tetrisContext = useContext(TetrisContext);
  const shapeContext = useContext(ShapeContext);
  const {
    getNextShape,
    gameOver,
    startGame,
    gameStart,
    newGame,
    pause,
  } = tetrisContext;

  const {
    setShape,
    setStage,
    setPos,
    moveShape,
    stage,
    color,
    shape,
  } = shapeContext;

  useInterval(() => {
    if (!pause && !gameOver && gameStart) drop();
  }, 1000);

  const reset = () => {
    getNextShape();
    let newStage = level;
    let pos = shape;
    setShape(pos);
    pos.forEach((element) => {
      newStage[element[0]][element[1]] = [color];
    });
    setPos(pos);
    setStage(newStage);
  };

  const drop = () => {
    let tempKey = new KeyboardEvent('keydown', { keyCode: 160, which: 160 });
    moveShape(tempKey);
  };

  useEffect(() => {
    startGame();
    reset();
    // eslint-disable-next-line
  }, [newGame]);

  return (
    <div>
      <Board role='button' tabIndex='0' onKeyDown={(e) => moveShape(e)}>
        {stage.map((row) =>
          row.map((cell, x) => <Cell key={x} backgroud={cell} />)
        )}
      </Board>
    </div>
  );
};

export default Level;
