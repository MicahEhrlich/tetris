import React, { useReducer, useContext } from 'react';
import shapeContext from './ShapeContext';
import shapeReducer from './ShapeReducer';
import {
  collideDetected,
  rotateShape,
  getRandomColor,
  getRandomShape,
} from '../../components/Utils';
import TetrisContext from '../TetrisContext/TetrisContext';

import {
  UPDATE_POS,
  SET_ROTATE,
  SET_COLOR,
  UPDATE_STAGE,
  SET_SHAPE,
  HALT_MOVE,
} from '../../types';

const ShapeState = (props) => {
  const initialState = {
    pos: [],
    rotate: 0,
    color: getRandomColor(),
    stage: [],
    shape: getRandomShape(),
    haltMove: false,
  };

  const [state, dispatch] = useReducer(shapeReducer, initialState);
  const tetrisContext = useContext(TetrisContext);

  const {
    getNextShape,
    setGameOver,
    addToScore,
    addToRows,
    gameOver,
    pause,
    nextColor,
    nextShape,
  } = tetrisContext;

  const setPos = (pos) => {
    dispatch({
      type: UPDATE_POS,
      payload: pos,
    });
  };

  const setRotate = (num) => {
    dispatch({
      type: SET_ROTATE,
      payload: num,
    });
  };

  const setColor = (color) => {
    dispatch({
      type: SET_COLOR,
      payload: color,
    });
  };

  const setStage = (stage) => {
    dispatch({
      type: UPDATE_STAGE,
      payload: stage,
    });
  };

  const setShape = (shape) => {
    dispatch({
      type: SET_SHAPE,
      payload: shape,
    });
  };

  const holtMovement = (value) => {
    dispatch({
      type: HALT_MOVE,
      payload: value,
    });
  };

  const clearRows = () => {
    holtMovement(true);
    let rowsToRemove = [];
    let newStage = state.stage;
    state.stage.forEach((row, i) => {
      let removeRow = true;
      row.forEach((col, j) => {
        if (state.stage[i][j][0] === 'black') removeRow = false;
      });
      if (removeRow) rowsToRemove.push(i);
    });
    rowsToRemove.forEach((rowInd) => {
      for (let i = rowInd; i >= 1; i--) {
        for (let j = 0; j < state.stage[0].length; j++)
          newStage[i][j] = [state.stage[i - 1][j][0]];
      }
      addToScore(100);
      addToRows(1);
    });

    setStage(newStage);
    holtMovement(false);
  };

  const move = (newPos) => {
    let newStage = state.stage;
    state.pos.forEach((element) => {
      newStage[element[0]][element[1]] = ['black'];
    });
    newPos.forEach((element) => {
      newStage[element[0]][element[1]] = [state.color];
    });
    //holtMovement();

    setStage(newStage);
    //holtMovement();
  };

  const moveShape = ({ keyCode }) => {
    if (
      (!pause &&
        !gameOver &&
        !state.haltMove &&
        keyCode >= 36 &&
        keyCode <= 40) ||
      keyCode === 160
    ) {
      let tempPos = [];
      switch (keyCode) {
        case 38:
          // rotate shape
          tempPos = rotateShape(state.pos, state.shape, state.rotate);
          break;
        case 40:
          // down arrow
          state.pos.forEach((element) => {
            tempPos.push([element[0] + 1, element[1]]);
          });
          addToScore(10);
          break;
        case 37:
          // left arrow
          state.pos.forEach((element) => {
            tempPos.push([element[0], element[1] - 1]);
          });
          break;
        case 39:
          // right arrow
          state.pos.forEach((element) => {
            tempPos.push([element[0], element[1] + 1]);
          });
          break;
        default:
          state.pos.forEach((element) => {
            tempPos.push([element[0] + 1, element[1]]);
          });
          break;
      }

      if (collideDetected(tempPos, state.pos, state.stage)) {
        holtMovement(true);

        if (keyCode === 40 || keyCode === 160) {
          // NEEDS TO BE 0 FOR GAME OVER
          if (tempPos[0][0] === 1) {
            setGameOver();
          } else {
            move(state.pos);
            clearRows();
            setColor(nextColor);
            setPos(nextShape);
            setShape(nextShape);
            setRotate(0);
            getNextShape();
          }
        }
        holtMovement(false);
      } else {
        if (keyCode === 38)
          state.rotate === 3 ? setRotate(0) : setRotate(state.rotate + 1);
        move(tempPos);
        setPos(tempPos);
      }
    }
  };

  return (
    <shapeContext.Provider
      value={{
        ...state,
        setPos,
        setRotate,
        setColor,
        setStage,
        setShape,
        moveShape,
        clearRows,
        holtMovement,
      }}>
      {props.children}
    </shapeContext.Provider>
  );
};

export default ShapeState;
