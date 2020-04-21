import React, {
  useState,
  useEffect,
  useContext,
  useRef,
} from 'react';

import Cell from '../components/styled/Cell';
import Board from './styled/Board';
import { rotateShape, getRandomShape, getRandomColor } from './Utils';
import TetrisContext from '../context/TetrisContext';

function useInterval(callback, delay) {
  const savedCallback = useRef();

  // Remember the latest callback.
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
  const {
    addToScore,
    addToRows,
    getNextShape,
    setGameOver,
    nextShape,
    nextColor,
    gameOver,
    startGame,
    newGame,
    pause,
  } = tetrisContext;

  const [pos, setPos] = useState();
  const [rotate, setRotate] = useState(0);
  const [color, setColor] = useState(getRandomColor);
  const [shape, setShape] = useState([]);
  const [stage, setStage] = useState(level);

  useInterval(() => {
    if (!pause && !gameOver) drop();
  }, 1000);

  const collideDetected = (newPos) => {
    let collide = false;
    newPos.forEach((element) => {
      if (
        element[0] >= level.length ||
        element[0] < 0 ||
        element[1] >= level[0].length ||
        element[1] < 0
      ) {
        collide = true;
      }
    });
    if (collide) return collide;
    let newStage = stage;
    pos.forEach((element) => {
      newStage[element[0]][element[1]] = ['black'];
    });
    newPos.forEach((element) => {
      if (newStage[element[0]][element[1]][0] !== 'black') collide = true;
    });
    return collide;
  };

  const reset = () => {
    getNextShape();
    let newStage = level;
    let pos = getRandomShape();
    setShape(pos);
    pos.forEach((element) => {
      newStage[element[0]][element[1]] = [color];
    });
    setPos(pos);
    setStage(newStage);
  };

  const clearRows = () => {
    let rowsToRemove = [];
    stage.forEach((row, i) => {
      let removeRow = true;
      row.forEach((col, j) => {
        if (stage[i][j][0] === 'black') removeRow = false;
      });
      if (removeRow) rowsToRemove.push(i);
    });
    rowsToRemove.forEach((rowInd) => {
      for (let i = rowInd; i >= 1; i--) {
        for (let j = 0; j < stage[0].length; j++)
          stage[i][j] = [stage[i - 1][j][0]];
      }
      addToScore(100);
      addToRows(1);
    });
    setStage(stage);
  };

  const move = (newPos) => {
    let newStage = stage;
    pos.forEach((element) => {
      newStage[element[0]][element[1]] = ['black'];
    });
    newPos.forEach((element) => {
      newStage[element[0]][element[1]] = [color];
    });
    setStage(newStage);
  };

  const drop = () => {
    let tempKey = new KeyboardEvent('keydown', { keyCode: 160, which: 160 });
    moveShape(tempKey);
  };

  const moveShape = ({ keyCode }) => {
    if (
      (!pause && !gameOver && keyCode >= 36 && keyCode <= 40) ||
      keyCode === 160
    ) {
      let tempPos = [];
      switch (keyCode) {
        case 38:
          // rotate shape
          tempPos = rotateShape(pos, shape, rotate);
          break;
        case 40:
          // down arrow
          pos.forEach((element) => {
            tempPos.push([element[0] + 1, element[1]]);
          });
          addToScore(10);
          break;
        case 37:
          // left arrow
          pos.forEach((element) => {
            tempPos.push([element[0], element[1] - 1]);
          });
          break;
        case 39:
          // right arrow
          pos.forEach((element) => {
            tempPos.push([element[0], element[1] + 1]);
          });
          break;
        default:
          pos.forEach((element) => {
            tempPos.push([element[0] + 1, element[1]]);
          });
          break;
      }

      if (collideDetected(tempPos)) {
        if (keyCode === 40 || keyCode === 160) {
          // NEEDS TO BE 0 FOR GAME OVER
          if (tempPos[0][0] === 1) {
            setGameOver();
          } else {
            move(pos);
            clearRows();
            setColor(nextColor);
            setPos(nextShape);
            setShape(nextShape);
            setRotate(0);
            getNextShape();
          }
        }
      } else {
        if (keyCode === 38) rotate === 3 ? setRotate(0) : setRotate(rotate + 1);
        move(tempPos);
        setPos(tempPos);
      }
    }
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
