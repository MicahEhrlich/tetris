import React, { useReducer } from 'react';
import tetrisContext from './TetrisContext';
import tetrisReducer from './TetrisReducer';
import { getRandomShape, getRandomColor } from '../../components/Utils';

import {
  ADD_SCORE,
  RESET_GAME,
  PAUSE_GAME,
  GAME_OVER,
  NEXT_SHAPE,
  NEXT_COLOR,
  DISPLAY_NEXT_SHAPE,
  RESUME_GAME,
  START_GAME,
  ADD_ROWS,
  SET_SPEED,
} from '../../types';

const TetrisState = (props) => {
  const initialState = {
    speed: 1100,
    newGame: false,
    gameStart: false,
    score: 0,
    rows: 0,
    pause: false,
    gameOver: false,
    nextShape: [],
    nextColor: '',
    nextShapeDisplayed: [],
  };
  const displayedShape = Array.from(Array(4), () =>
    new Array(4).fill(['black'])
  );

  const [state, dispatch] = useReducer(tetrisReducer, initialState);

  const setGameOver = () => {
    dispatch({
      type: GAME_OVER,
    });
  };

  const pauseGame = () => {
    if (state.pause)
      dispatch({
        type: RESUME_GAME,
      });
    else
      dispatch({
        type: PAUSE_GAME,
      });
  };

  const getNextShape = () => {
    let shape = getRandomShape();
    let color = getRandomColor();

    shape.forEach((element) => {
      displayedShape[element[0]][element[1]] = [color];
    });
    if (state.speed > 0)
      dispatch({
        type: SET_SPEED,
        payload: state.speed - 10,
      });

    dispatch({
      type: NEXT_SHAPE,
      payload: shape,
    });
    dispatch({
      type: NEXT_COLOR,
      payload: color,
    });
    dispatch({
      type: DISPLAY_NEXT_SHAPE,
      payload: displayedShape,
    });
  };

  const addToScore = (newScore) => {
    let tempScore = state.score + newScore;
    dispatch({
      type: ADD_SCORE,
      payload: tempScore,
    });
  };

  const addToRows = (newRows) => {
    let tempRows = state.rows + newRows;
    dispatch({
      type: ADD_ROWS,
      payload: tempRows,
    });
  };

  const resetGame = () => {
    dispatch({
      type: RESET_GAME,
    });
  };

  const startGame = () => {
    dispatch({
      type: START_GAME,
    });
  };

  return (
    <tetrisContext.Provider
      value={{
        ...state,
        addToScore,
        resetGame,
        getNextShape,
        setGameOver,
        pauseGame,
        startGame,
        addToRows,
      }}>
      {props.children}
    </tetrisContext.Provider>
  );
};

export default TetrisState;
